let addButton = document.querySelector("#adicionar-paciente");

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    let form = document.querySelector("#form-add");

    let nameP = form.nombre.value;
    let weightP = form.peso.value;
    let heightP = form.altura.value;
    let fatP = form.gordura.value;

    let patientTr = document.createElement("tr");
    let nameTd = document.createElement("td");
    let weightTd = document.createElement("td");
    let heightTd = document.createElement("td");
    let fatTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nameTd.textContent = nameP;
    weightTd.textContent = weightP;
    heightTd.textContent = heightP;
    fatTd.textContent = fatP;
    imcTd.textContent = computeIMC(weightP, heightP);

    patientTr.appendChild(nameTd);
    patientTr.appendChild(weightTd);
    patientTr.appendChild(heightTd);
    patientTr.appendChild(fatTd);
    patientTr.appendChild(imcTd);

    let table = document.querySelector("#tabla-pacientes");

    table.appendChild(patientTr);
});