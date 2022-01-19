let title = document.querySelector(".title");
title.textContent = "Nutrition Good Life";

let pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

let tdWeight = pablo.querySelector(".info-peso");
let tdHeight = pablo.querySelector(".info-altura");
let tdImc = pablo.querySelector(".info-imc");

weight = tdWeight.textContent;
height = tdHeight.textContent;

let imc, isWeightValid = true, isHeightValid = true;

if (weight <= 0 || weight > 1000) {
    tdImc.textContent = "Incorrect Weight";
    isWeightValid = false;
}

if (height <= 0 || height > 3) {
    tdImc.textContent = "Incorrect Height";
    isHeightValid = false;
}

if (isWeightValid && isHeightValid){
    imc = weight / (height * height);
    tdImc.textContent = imc;
}