let genPass = document.querySelector("#genPass");
let h1 = document.querySelector("h1");
let range = document.querySelector("#range");
let rangeVal = document.querySelector("#rangeVal");
let capLet = document.querySelector("#capLet");
let smaLet = document.querySelector("#smaLet");
let number = document.querySelector("#number");
let symbol = document.querySelector("#symbol");
let copyBtn = document.querySelector("#copyBtn");
let copyBtn2 = document.querySelector("#copyBtn2");


range.addEventListener("input", function (dets) {
    rangeVal.textContent = `${dets.target.value}`;
})

let finalStr = '';
genPass.addEventListener("click", function (dets) {
    finalStr = '';
    let capLetStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smaLetStr = 'abcdefghijklmnopqrstuvwxyz';
    let numberStr = '0123456789';
    let symbolStr = '~`!@#$%^&*()_+-={}[]:";<>,./?'


    let latestPass = '';

    if (capLet.checked) {
        finalStr += capLetStr;
    }
    if (smaLet.checked) {
        finalStr += smaLetStr;
    }
    if (number.checked) {
        finalStr += numberStr;
    }
    if (symbol.checked) {
        finalStr += symbolStr;
    }

    if (finalStr === '') {
        alert("Please select atleast one field !!");
        return;
    }
    console.log(finalStr);

    for (let i = 0; i < range.value; i++) {
        let randNum = Math.floor(Math.random() * finalStr.length);
        latestPass += finalStr[randNum];
    }

    h1.textContent = `${latestPass}`;
    copyBtn.style.display = "initial";
    copyBtn2.style.display = "none";


})


copyBtn.addEventListener("click", function () {
    if (h1.textContent.trim()) {
        window.navigator.clipboard.writeText(`${h1.textContent}`);
        copyBtn.style.display = "none";
        copyBtn2.style.display = "initial";
    }
    else {
        alert("Generate the passoword first!!");
    }
})
