function copyTextFromElement(elementId) {
    let element = document.getElementById(elementId);
    let tempInput = document.createElement('textarea');
    tempInput.value = element.innerHTML;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
