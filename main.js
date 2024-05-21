let now = new Date();
let localDateString = now.toLocaleDateString("en-GB"); // Format to DD/MM/YYYY
let localTimeString = now.toLocaleTimeString();
console.log(localDateString);
let timee = localTimeString.split(":");
let datee = localDateString.split("/");
console.log(datee);
const date = document.getElementById("date");
const time = document.getElementById("time");
let allTimes = [];
date.innerHTML = localDateString;

let clock = () => {
  let hour = parseInt(timee[0]);
  let minute = parseInt(timee[1]);
  let second = parseInt(timee[2].split(" ")[0]);
  let apm = timee[2].split(" ")[1];

  setInterval(() => {
    second++;
    if (second === 60) {
      second = 0;
      minute++;
    }
    if (minute === 60) {
      minute = 0;
      hour++;
    }
    // if (hour === 12 && apm === "AM") {
    //   apm = "PM";
    // } else if (hour === 12 && apm === "PM") {
    //   apm = "AM";
    // }
    if (hour > 12) {
      hour -= 12;
    }

    let formattedHour = hour < 10 ? `0${hour}` : hour;
    let formattedMinute = minute < 10 ? `0${minute}` : minute;

    time.innerHTML = `${formattedHour}:${formattedMinute} ${apm}`;
  }, 1000);
};
clock();

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
                <option value="Makkah">مكة المكرمة</option>
                <option value="Medina">المدينة المنورة</option>
                <option value="Jeddah">جدة</option>
                <option value="Riyadh">الرياض</option>
                <option value="Dammam">الدمام</option>`;
            break;
        case "Morocco":
            citySelect.innerHTML = `
                <option value="Casablanca">الدار البيضاء</option>
                <option value="Rabat">الرباط</option>
                <option value="Fes">فاس</option>
                <option value="Marrakech">مراكش</option>
                <option value="Tangier">طنجة</option>`;
            break;
        case "Egypt":
            citySelect.innerHTML = `
                <option value="Cairo">القاهرة</option>
                <option value="Alexandria">الإسكندرية</option>
                <option value="Giza">الجيزة</option>
                <option value="Luxor">الأقصر</option>
                <option value="Aswan">أسوان</option>`;
            break;
        case "Turkey":
            citySelect.innerHTML = `
                <option value="Istanbul">إسطنبول</option>
                <option value="Ankara">أنقرة</option>
                <option value="Izmir">إزمير</option>
                <option value="Bursa">برسا</option>
                <option value="Antalya">أنطاليا</option>`;
            break;
        default:
            // Default behavior or error handling
            citySelect.innerHTML = `<option selected value="City">المدينة</option>`
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

let getResponsive = (country = "Saudi Arabia", city = "Makkah") => {
  axios
    .get(
      `http://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=2&month=${datee[1]}&year=${datee[2]}`
    )
    .then((response) => {
      let times = response.data.data[datee[0]].timings;

      allTimes = [
        times.Fajr.split(" ")[0],
        times.Sunrise.split(" ")[0],
        times.Dhuhr.split(" ")[0],
        times.Asr.split(" ")[0],
        times.Maghrib.split(" ")[0],
        times.Isha.split(" ")[0],
      ];

      for (let i = 1; i <= 6; i++) {
        document.getElementById(`box${i}`).innerHTML = allTimes[i - 1];
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};
var hadithResponse;
let getHadith = () => {
  axios
    .get("https://api.hadith.gading.dev/books/muslim?range=1-300")
    .then((response) => {
        hadithResponse = response;
        console.log(hadithResponse);
      showHadith(hadithResponse)
      
    });
};
function showHadith(response , id = 0){
    let oneHadith = response.data.data.hadiths[hadithCounter].arab;
    document.getElementById('hadith').innerHTML = oneHadith;
    }
getHadith()
// Initial call to load data for the default country and city
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

