const inputEl = document.getElementById("input-el");
const covertBtn = document.getElementById("convert-btn");
const lenght = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
let mToF = 3.281.toFixed(2);
let lToG = 0.264.toFixed(2);
let kToP = 2.204.toFixed(2);

covertBtn.addEventListener("click",function(){
    let meters= (parseFloat(inputEl.value) / mToF).toFixed(2);
    let liters = (parseFloat(inputEl.value) / lToG).toFixed(2);
    let kilos = (parseFloat(inputEl.value) / kToP).toFixed(2);
    let feet = (parseFloat(inputEl.value) * mToF).toFixed(2);
    let gallons = (parseFloat(inputEl.value) * lToG).toFixed(2);
    let pounds = (parseFloat(inputEl.value) * kToP).toFixed(2);
    lenght.innerHTML = "";
    volume.innerHTML = "";
    mass.innerHTML = "";

    lenght.innerHTML = `
            <h2>Length (Meter / Feet)</h2>
            <p id = "ktop-p">${inputEl.value} kilos = ${feet} pounds | ${inputEl.value} pounds = ${meters} kilos</p>
        `;

    volume.innerHTML = `
            <h2>Volume (Liters / Gallons)</h2>
            <p id = "ltog-p" >${inputEl.value} liters = ${gallons} gallons | ${inputEl.value} gallons = ${liters} liters</p>
        `;

    mass.innerHTML = `
            <h2>Mass (Kilograms / pounds)</h2>
            <p id = "ktop-p">${inputEl.value} kilos = ${pounds} pounds | ${inputEl.value} pounds = ${kilos} kilos</p>
        `;
})
