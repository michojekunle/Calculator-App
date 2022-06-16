const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');


btn1.addEventListener ('click', () => {
    document.getElementById('themes').href = "themeOneStyle.css"
})

btn2.addEventListener ('click', () => {
    document.getElementById('themes').href = "themeTwoStyle.css"
})

btn3.addEventListener ('click', () => {
    document.getElementById('themes').href = "themeThreeStyle.css"
})