//theme switching buttons 

const btn1 = document.getElementById('btn1');//theme one button
const btn2 = document.getElementById('btn2');//theme two button
const btn3 = document.getElementById('btn3');//theme three button 
const del = document.querySelector('.functions.del')

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

let operationArray = ['0'];
let screenDisplay = '';

function keys(key) {
    operationArray.push(keyButtons[key]);    
    console.log(keyButtons[key]);
    displayText(operationArray)
}




function displayText(inputArr) {   

        document.getElementById('displayText').innerHTML = screenDisplay.concat(inputArr[inputArr.length-1]) //screen display.
        screenDisplay = document.getElementById('displayText').innerHTML;       

        const del = () => {
            operationArray.pop();
        }
        function reset() {
            operationArray.splice(0, operationArray.length);
        }

        const calculateButton = document.querySelector('.equals');
        calculateButton.addEventListener('click', () => {
                
                //addition
                if (screenDisplay.includes(' + ')){
                    screenDisplay.split(' + ');
                    console.log(screenDisplay)
                    console.log(screenDisplay[1])
                    let total = 0;
                    for(let i=0;i<screenDisplay.length;i+=2){
                        total += parseFloat(screenDisplay[i]);
                    }
                }
                
                //subtraction
                if (operationArray.includes(' - ')){
                    operationArray.split(' - ');
                    let total;
                    for(let i=2;i<operationArray.length;i+=2){
                        parseFloat(operationArray[0]) -= parseFloat(operationArray[i]);
                        total = parseFloat(operationArray[0]);
                    }
                    console.log(total);
                }
            
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
        }) 
}

const delButton = document.querySelector('.del');
delButton.addEventListener('click', () => {
    const nullKey = keys()
        nullKey(del());
})

function reset() {
    screenDisplay = "";
}

