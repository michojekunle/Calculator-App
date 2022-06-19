//theme switching buttons 

const btn1 = document.getElementById('btn1');//theme one button
const btn2 = document.getElementById('btn2');//theme two button
const btn3 = document.getElementById('btn3');//theme three button 


//functions to change themes on click on respective buttons.
btn1.addEventListener ('click', () => {
    document.getElementById('themes').href = "themeOneStyle.css"
})

btn2.addEventListener ('click', () => {
    document.getElementById('themes').href = "themeTwoStyle.css"
})

btn3.addEventListener ('click', () => {
    document.getElementById('themes').href = "themeThreeStyle.css"
})

/*------Calculations and display------*/


//Objects holding values for all keys 
let keyButtons = {
    "one": '1';
    "two": '2';
    "three": '3';
    "four": '4';
    "five": '5';
    "six": '6';
    "seven": '7';
    "eight": '8';
    "nine": '9';
    "zero":'0';
    "decimalPoint":'.';
    "plus":' + ';
    "minus":' - ';
    "times":' * ';
    "divide":' / ';
}

let displayResult = document.getElementById('displayText');//screen display.

displayResult = 0;
