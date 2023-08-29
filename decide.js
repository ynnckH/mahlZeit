let active = false;
let result = 0;
const output = [];
let outputText = "";
let varlink = "";
let selectorIdCount = 6;


function check() {

    //Entfernt Array Elemente bis er leer ist
    while (output.length != 0) {
        output.pop();
    }

    //Bestimme Anzahl an vorhandenen AuswahlElementen
    const parent = document.getElementById("selectionBox");
    let childNodes = parent.childNodes;
    let anzahlElemente = (childNodes.length - 13) / 2;
    //console.log(anzahlElemente);

    //Überprüfen aller Elemente ob ausgewählt und Hinzufügen in Array 'output'
    for (let i = 1; i <= anzahlElemente; i++) {
        let mealID = "meal" + i;
        let selectorID = mealID + "L";
        //console.log(mealID);
        //console.log(selectorID);

        if (document.getElementById(mealID).checked == true) {
            let selectorName = document.getElementById(selectorID).innerHTML;
            output.push(selectorName);
            //console.log(output);
        }
    }



    //console.log(output);
    result = getRandomInt(0, output.length);
    //console.log(result);

    for (let i = 0; i < output.length; i++) {
        if (result == i){
            outputText = output[i];
            //console.log(outputText);
        }
    }

    document.getElementById("resultDiv").style.visibility = "visible";
    document.getElementById("out").innerHTML = outputText;
    if (output.length != 0) {
        document.getElementById("resultLink").style.visibility = "visible";
    }

    varlink = document.getElementById("out").innerHTML;
}

//generiert Zufallszahl
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//Erstellt neue Checkbox mit Label, Labelname aus Inputfeld
function addOption() {
    const mySelection = document.getElementById("selectionBox");

    //Erstellen neue Checkbox
    let newSelector = document.createElement("input");
    newSelector.type = "checkbox";
    newSelector.className = "checkbox";


    selectorIdCount += 1;

    //Zuweisen der nächsthöheren ID
    let selectorId = "meal" + selectorIdCount;
    newSelector.id = selectorId;

    //Erstellen neues Label für erstellt Checkbox + Zuweisung 'For' und 'ID'
    let newSelectorLabel = document.createElement("label");
    newSelectorLabel.htmlFor = selectorId;
    newSelectorLabel.id = "meal" + selectorIdCount + "L";
    newSelectorLabelID = newSelectorLabel.id;

    //Einholen des Inputs
    let newSelectorLabelName = document.getElementById("inputfield").value;

    //Hinnzufügen der neuen Checkbox + Label
    selectionBox.appendChild(newSelector);
    selectionBox.appendChild(newSelectorLabel);

    //Zuweisung des Labelnamens
    document.getElementById(newSelectorLabelID).innerHTML = newSelectorLabelName;
}



