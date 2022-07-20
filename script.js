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
    "divide":" / " ,
    "null":" "
}

// let word = 'ei5i5 + tyhyth66';
// console.log(word.includes(' + '));

let operationArray = ['0'];
let screenDisplay = '';

function reset() {
    screenDisplay = "";
    operationArray= ['0'];
    displayText(operationArray)
}

function del() {
    if (!(operationArray.length>1)){
        console.log('Empty Array');
    } else {
        operationArray.pop();
        screenDisplay = '';
        displayText(operationArray);
        console.log(operationArray);
    }
}

function keys(key) {
    operationArray.push(keyButtons[key]);    
    console.log(keyButtons[key]);
    displayText(operationArray)
}

function displayText(inputArr) {   
        document.getElementById('displayText').innerHTML = screenDisplay.concat(inputArr[inputArr.length-1]) //screen display.
        screenDisplay = document.getElementById('displayText').innerHTML;       
    
        
}

const calculateButton = document.querySelector('.equals');
        calculateButton.addEventListener('click', () => {
                let total;
                //addition
                if (screenDisplay.includes(' + ')){
                    screenDisplay.split(' + ');
                    console.log(screenDisplay)
                    console.log(screenDisplay[1])
                    total = 0;
                    for(let i=0;i<screenDisplay.length;i+=2){
                        total += +screenDisplay[i];
                        console.log(total);
                    }
                }
                
                // //subtraction
                // if (operationArray.includes(' - ')){
                //     operationArray.split(' - ');
                //     total;
                //     for(let i=2;i<operationArray.length;i+=2){
                //         parseFloat(operationArray[0]) -= parseFloat(operationArray[i]);
                //         total = parseFloat(operationArray[0]);
                //     }
                //     console.log(total);
                // }
            
                // //division
                // if (operationArray.includes(' / ')){
                //     operationArray.split(' / ');
                //     let total;
                //     total = parseFloat(operationArray[0]) / parseFloat(operationArray[2]);
                // }
            
                // //multiplication
                // if (screenDisplay.includes('*')){
                //     screenDisplay.split('*');
                //     let total = 1;
            
                //     for(let i=0;i<screenDisplay.length;i+=2){
                //         total *= screenDisplay[i];
                //     }
                // }
            console.log(total);
            screenDisplay = total;
            document.getElementById('displayText').innerHTML = screenDisplay;
        }) 