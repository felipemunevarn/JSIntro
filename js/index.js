let title = document.querySelector(".title");
title.textContent = "Nutrition Good Life";

let patients = document.querySelectorAll(".paciente");

for (let i = 0; i < patients.length; i++) {
    const patient = patients[i];

    let tdWeight = patient.querySelector(".info-peso");
    let tdHeight = patient.querySelector(".info-altura");
    let tdImc = patient.querySelector(".info-imc");

    weight = tdWeight.textContent;
    height = tdHeight.textContent;

    let imc, isWeightValid = true, isHeightValid = true;

    if (weight <= 0 || weight > 1000) {
        tdImc.textContent = "Incorrect Weight";
        isWeightValid = false;
        patient.classList.add("wrong")
    }

    if (height <= 0 || height > 3) {
        tdImc.textContent = "Incorrect Height";
        isHeightValid = false;
    }

    if (isWeightValid && isHeightValid){
        imc = computeIMC(weight, height);
        tdImc.textContent = imc;
    }
}

function computeIMC (weight, height) {
    imc = weight / (height * height);
    return (imc).toFixed(2);
}

