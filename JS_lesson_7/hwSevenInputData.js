'use strict'


function findMultiples(n, k, userSelect) {
    let counter = 1
    let multiplicityNumObj = {}
    if (userSelect) {
        multiplicityNumObj = displayStepByStep(n, k);
    } else {
        for ( let i = 1; i <= n ; i++) {
            if (k % i === 0) {
                multiplicityNumObj[`num ${counter}`] = i;
                counter++;
            }
        }
    } return multiplicityNumObj;
}

function displayStepByStep(n, k){
    const stepByStepNumObj={}
    let counter = 1
    for ( let i = 1; i <= n ; i++) {
        if (k % i === 0) {
            stepByStepNumObj[`num ${counter}`] = i;
            counter++;
            console.log(i)
            let nextStep = confirm ('Do you see next multiplicity number?')
            if (!nextStep){
                return stepByStepNumObj;
            }
        }
    } return stepByStepNumObj;
}
// findMultiples(80, 150, false);

function checkUserInput (promptText, alertText) {
    while (true){
        let end = prompt(`Input ${promptText}`);
        let inputData = parseInt(end);
        if (isNaN(inputData)) {
            alert (`You input incorrect ${alertText}. Please try again `)
        } else {
            return inputData;
        }
    }
}

function findMultiplesUserInput(){
    const userSelect = confirm('Do display multiplicity numbers step by step? If you click "Отмена", you will display all multiplicity numbers')
    const n = checkUserInput('end of range', 'end of range');
    const k = checkUserInput(' number multiplicity you want to check', 'number');
    const result = findMultiples(n, k, userSelect);
    console.log(result);
}

findMultiplesUserInput()
