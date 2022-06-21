//theme switching buttons 

const btn1 = document.getElementById('btn1');//theme one button
const btn2 = document.getElementById('btn2');//theme two button
const btn3 = document.getElementById('btn3');//theme three button 


//functions to change themes on click on respective buttons
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
const keyButtons = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
    "zero":"0",
    "decimalPoint":".",
    "plus":" + ",
    "minus":" - ",
    "times":" * ",
    "divide":" / "
}

let operationArray = ['0'];
let screenDisplay = '';

function keys(key) {
    operationArray.push(keyButtons[key]);    
    console.log(keyButtons[key]);
    console.table(operationArray);
    displayText(operationArray)
}

function del() {
    operationArray.pop();
}

function displayText(inputArr) {
        document.getElementById('displayText').innerHTML = screenDisplay.concat(inputArr[inputArr.length-1]) //screen display.
        screenDisplay = document.getElementById('displayText').innerHTML;       
        
        
}



function reset() {
    operation = "";
}

function calculate() {
    //addition
    if (operation.includes('+')){
        operation.split('+');
        let total = 0;
        for(let i=0;i<operation.length;i+=2){
            total += operation[i];
        }
        operation = total;
    }
    
    //subtraction
    if (operation.includes('-')){
        operation.split('-');
        let total;
        for(let i=2;i<operation.length;i+=2){
            operation[0] -= operation[i];
            total = operation[0];
        }
        operation = total;
    }


    //division
    if (operation.includes('/')){
        operation.split('/');
        let total;
        total = operation[0] / operation[2];
        
        operation = total;
    }

    //multiplication
    if (operation.includes('*')){
        operation.split('*');
        let total = 1;

        for(let i=0;i<operation.length;i+=2){
            total *= operation[i];
        }

        operation = total;
    }
}