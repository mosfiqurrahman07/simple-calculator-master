function calculator(x) {
    mainForm.display.value = mainForm.display.value + x;
    const displayNumber1 = parseFloat(mainForm.display.value)
}

document.getElementById('clear').addEventListener('click' , function() {
    mainForm.display.value = '';
})