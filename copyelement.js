function copyTextFromElement(elementId,id) {
    let element = document.getElementById(elementId);
    let element2 = document.getElementById(id);
    let tempInput = document.createElement('textarea');
    tempInput.value = element.innerHTML;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    element2.classList.remove('fa-copy');
    element2.classList.add('fa-check');
    setTimeout(() => {
        element2.classList.add('fa-copy');
        element2.classList.remove('fa-check');
    }, 1500);
}

function mizeScreen(id) {
    var icon = document.getElementById(id);
    if(icon.classList == "fa-solid fa-maximize"){
        icon.classList.remove('fa-maximize')
        icon.classList.add('fa-down-left-and-up-right-to-center')
        var hadithDiv = document.querySelector('.hadith');
        hadithDiv.style.width = '100%';
        hadithDiv.style.height = '100vh';
        hadithDiv.style.maxHeight = '100vh';
        hadithDiv.style.position = 'fixed';
        hadithDiv.style.top = '0';
        hadithDiv.style.left = '0';
        hadithDiv.style.zIndex = '9999';
        document.getElementById('hadith').style.cssText = `
        height: 85%;
        display: flex;
        align-items: center;
        max-height: 85%
        `;
        document.querySelector('.icon').style.cssText = `
        position: absolute;
        bottom: 0;
        `

    }else{
        icon.classList.add('fa-maximize')
        icon.classList.remove('fa-down-left-and-up-right-to-center')
        var hadithDiv = document.querySelector('.hadith');
        hadithDiv.style.cssText = `
        width: 80%;
    max-height: 430px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    color: #FFF;
    background-color: #145234;
    border: 4px double #fff;
        `
        document.querySelector('.icon').style.cssText = `
        position: relative;
        bottom: 0;
        `
    }
    
}