let now = new Date();
let localDateString = now.toLocaleDateString("en-GB"); // Format to DD/MM/YYYY
// console.log(localDateString);
let dateeO = localDateString.split("/");
// console.log(datee);
const date = document.getElementById("date");
let allTimes = [];
//date
let datee = [...dateeO];
date.innerHTML = `${dateeO[0]}/${dateeO[1]}/${dateeO[2]}`; 


let setCountryAndCity = () => {
  let countryAndCity = document
    .getElementById("select-country")
    .value.split(",");
  setCountry(countryAndCity[0], countryAndCity[1]);
};

let setCountry = (country, defaultCity) => {
  let citySelect = document.getElementById("select-city");
  citySelect.innerHTML = `<option selected value="${defaultCity}">${defaultCity}</option>`;

  switch (country) {
      case "Saudi Arabia":
          citySelect.innerHTML = `
              <option value="Riyadh">الرياض</option>
              <option value="Makkah">مكة المكرمة</option>
              <option value="Medina">المدينة المنورة</option>
              <option value="Jeddah">جدة</option>
              <option value="Dammam">الدمام</option>
              <option value="Khobar">الخبر</option>
              <option value="Abha">أبها</option>
              <option value="Tabuk">تبوك</option>`;
          break;
      case "Morocco":
          citySelect.innerHTML = `
              <option value="Rabat">الرباط</option>
              <option value="Casablanca">الدار البيضاء</option>
              <option value="Fes">فاس</option>
              <option value="Marrakech">مراكش</option>
              <option value="Tangier">طنجة</option>
              <option value="Agadir">أكادير</option>
              <option value="Oujda">وجدة</option>
              <option value="Tetouan">تطوان</option>`;
          break;
      case "Egypt":
          citySelect.innerHTML = `
              <option value="Cairo">القاهرة</option>
              <option value="Alexandria">الإسكندرية</option>
              <option value="Giza">الجيزة</option>
              <option value="Luxor">الأقصر</option>
              <option value="Aswan">أسوان</option>
              <option value="Sharm El Sheikh">شرم الشيخ</option>
              <option value="Hurghada">الغردقة</option>
              <option value="Port Said">بورسعيد</option>`;
          break;
      case "Turkey":
          citySelect.innerHTML = `
              <option value="Ankara">أنقرة</option>
              <option value="Istanbul">إسطنبول</option>
              <option value="Izmir">إزمير</option>
              <option value="Bursa">برسا</option>
              <option value="Antalya">أنطاليا</option>
              <option value="Konya">قونيا</option>
              <option value="Adana">أضنة</option>
              <option value="Gaziantep">غازي عنتاب</option>`;
          break;
      case "Indonesia":
          citySelect.innerHTML = `
              <option value="Jakarta">جاكرتا</option>
              <option value="Surabaya">سورابايا</option>
              <option value="Bandung">باندونغ</option>
              <option value="Medan">ميدان</option>
              <option value="Semarang">سيمارانج</option>
              <option value="Makassar">ماكاسار</option>
              <option value="Palembang">بالمبانغ</option>
              <option value="Batam">باتام</option>`;
          break;
      case "Pakistan":
          citySelect.innerHTML = `
              <option value="Islamabad">إسلام آباد</option>
              <option value="Karachi">كراتشي</option>
              <option value="Lahore">لاهور</option>
              <option value="Rawalpindi">روالبندي</option>
              <option value="Faisalabad">فيصل آباد</option>
              <option value="Multan">مولتان</option>
              <option value="Peshawar">بيشاور</option>
              <option value="Quetta">كويتا</option>`;
          break;
      case "Malaysia":
          citySelect.innerHTML = `
              <option value="Kuala Lumpur">كوالالمبور</option>
              <option value="George Town">جورج تاون</option>
              <option value="Ipoh">إيبوه</option>
              <option value="Johor Bahru">جوهور بهرو</option>
              <option value="Malacca">ملقا</option>
              <option value="Kota Kinabalu">كوتا كينابالو</option>
              <option value="Kuantan">كوانتان</option>
              <option value="Kuching">كوتشينغ</option>`;
          break;
      case "United Arab Emirates":
          citySelect.innerHTML = `
              <option value="Abu Dhabi">أبوظبي</option>
              <option value="Dubai">دبي</option>
              <option value="Sharjah">الشارقة</option>
              <option value="Al Ain">العين</option>
              <option value="Ajman">عجمان</option>
              <option value="Ras Al Khaimah">رأس الخيمة</option>
              <option value="Fujairah">الفجيرة</option>
              <option value="Umm Al Quwain">أم القيوين</option>`;
          break;
          case "United States":
            citySelect.innerHTML = `
                <option value="New York">نيويورك</option>
                <option value="Los Angeles">لوس أنجلوس</option>
                <option value="Chicago">شيكاغو</option>
                <option value="Houston">هيوستن</option>
                <option value="Miami">ميامي</option>
                <option value="San Francisco">سان فرانسيسكو</option>
                <option value="Washington, D.C.">واشنطن العاصمة</option>
                <option value="Las Vegas">لاس فيغاس</option>`;
            break;
        case "United Kingdom":
            citySelect.innerHTML = `
                <option value="London">لندن</option>
                <option value="Manchester">مانشستر</option>
                <option value="Birmingham">بيرمنغهام</option>
                <option value="Glasgow">غلاسكو</option>
                <option value="Edinburgh">إدنبره</option>
                <option value="Liverpool">ليفربول</option>
                <option value="Bristol">بريستول</option>
                <option value="Leeds">ليدز</option>`;
            break;
        case "Russia":
            citySelect.innerHTML = `
                <option value="Moscow">موسكو</option>
                <option value="Saint Petersburg">سانت بطرسبرغ</option>
                <option value="Novosibirsk">نوفوسيبيرسك</option>
                <option value="Yekaterinburg">يكاترينبورغ</option>
                <option value="Nizhny Novgorod">نيجني نوفغورود</option>
                <option value="Kazan">قازان</option>
                <option value="Chelyabinsk">تشيليابينسك</option>
                <option value="Omsk">أومسك</option>`;
            break;
        case "China":
            citySelect.innerHTML = `
                <option value="Beijing">بكين</option>
                <option value="Shanghai">شانغهاي</option>
                <option value="Guangzhou">غوانغتشو</option>
                <option value="Shenzhen">شنتشن</option>
                <option value="Chengdu">تشنغدو</option>
                <option value="Wuhan">ووهان</option>
                <option value="Hangzhou">هانجزو</option>
                <option value="Xi'an">شيآن</option>`;
            break;
        case "Japan":
            citySelect.innerHTML = `
                <option value="Tokyo">طوكيو</option>
                <option value="Yokohama">يوكوهاما</option>
                <option value="Osaka">أوساكا</option>
                <option value="Nagoya">ناغويا</option>
                <option value="Sapporo">سابورو</option>
                <option value="Fukuoka">فوكوكا</option>
                <option value="Kobe">كوبي</option>
                <option value="Kyoto">كيوتو</option>`;
            break;
        case "Germany":
            citySelect.innerHTML = `
                <option value="Berlin">برلين</option>
                <option value="Hamburg">هامبورغ</option>
                <option value="Munich">ميونخ</option>
                <option value="Cologne">كولونيا</option>
                <option value="Frankfurt">فرانكفورت</option>
                <option value="Stuttgart">شتوتغارت</option>
                <option value="Düsseldorf">دوسلدورف</option>
                <option value="Dortmund">دورتموند</option>`;
            break;
        case "France":
            citySelect.innerHTML = `
                <option value="Paris">باريس</option>
                <option value="Marseille">مرسيليا</option>
                <option value="Lyon">ليون</option>
                <option value="Toulouse">تولوز</option>
                <option value="Nice">نيس</option>
                <option value="Nantes">نانت</option>
                <option value="Strasbourg">ستراسبورغ</option>
                <option value="Montpellier">مونبلييه</option>`;
            break;
        case "Italy":
            citySelect.innerHTML = `
                <option value="Rome">روما</option>
                <option value="Milan">ميلان</option>
                <option value="Naples">نابولي</option>
                <option value="Turin">تورينو</option>
                <option value="Palermo">باليرمو</option>
                <option value="Genoa">جنوة</option>
                <option value="Bologna">بولونيا</option>
                <option value="Florence">فلورنسا</option>`;
            break;
        case "Spain":
            citySelect.innerHTML = `
                <option value="Madrid">مدريد</option>
                <option value="Barcelona">برشلونة</option>
                <option value="Valencia">فالنسيا</option>
                <option value="Seville">إشبيلية</option>
                <option value="Zaragoza">سرقسطة</option>
                <option value="Málaga">مالقة</option>
                <option value="Murcia">مرسية</option>
                <option value="Palma">بالما</option>`;
            break;
        
      default:
          citySelect.innerHTML = `<option selected value="City">المدينة</option>`;
          break;
  }

  // Call getResponsive function with the selected country and city
  getResponsive(country, defaultCity);
};




let updateCity = () => {
  let country = document.getElementById("select-country").value.split(",")[0];
  let city = document.getElementById("select-city").value;
  getResponsive(country, city);
};

var days = datee[0];
var setDays = (e) => {
  if (e === "l") {
    if (days < resp.length - 1) {
      days++;
    } else {
      if (datee[1] === 12) {
        datee[1] = 1;
        datee[2]++;
      } else {
        datee[1]++;
      }
      days = 0;
    }
  } else {
    if (days > 0) {
      days--;
    } else {
      if (datee[1] === 1) {
        datee[1] = 12;
        datee[2]--;
      } else {
        datee[1]--;
      }
      days = resp.length - 1;
    }
  }
  getResponsive();
};
//resete date
var times;
let getResponsive = (country = "Saudi Arabia", city = "Makkah") => {
  axios
    .get(
      `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=2&month=${datee[1]}&year=${datee[2]}`
    )
    .then((response) => {
      resp = response.data.data;
      times = response.data;
      // console.log(resp)
     
      ShowData()
      
    })
    .catch(function (error) {
      console.error(error);
    });
};
var hadithResponse;

let ShowData = () => {
  if (times.data[days]) {
    allTimes = [
      times.data[days].timings.Fajr.split(" ")[0],
      times.data[days].timings.Sunrise.split(" ")[0],
      times.data[days].timings.Dhuhr.split(" ")[0],
      times.data[days].timings.Asr.split(" ")[0],
      times.data[days].timings.Maghrib.split(" ")[0],
      times.data[days].timings.Isha.split(" ")[0],
    ];
    days++;
    date.innerHTML = `${(days)}/${datee[1]}/${datee[2]}`;
    days--;
    console.log(times.data[days]);
    for (let i = 1; i <= 6; i++) {
      document.getElementById(`box${i}`).innerHTML = allTimes[i - 1];
    }
  } else {
    console.error("Data for the selected day is undefined.");
  }
};

let getHadith = () => {
  
  axios
    .get("https://api.hadith.gading.dev/books/muslim?range=1-300")
    .then((response) => {
        hadithResponse = response.data.data.hadiths;
        // console.log(hadithResponse);
      showHadith(hadithResponse)
      
    });
};
function showHadith(response){
    let oneHadith = response[hadithCounter].arab;
    document.getElementById('hadith').innerHTML = oneHadith;
    }
let y = 1;
if(y){
  getHadith()
  y = 0;
}


setCountryAndCity();
var hadithCounter = 0;
let updateHadith = (e)=>{
    if(e === 'left'){
        if(hadithCounter === 299){
            hadithCounter = 0;
            showHadith(hadithResponse)
        }else{
            hadithCounter++;
        showHadith(hadithResponse)
        }
    }else if(e === 'right'){
        if(hadithCounter === 0){
            hadithCounter = 299;
            showHadith(hadithResponse)
        }else{
            hadithCounter--;
        showHadith(hadithResponse)
        }
    }
}

