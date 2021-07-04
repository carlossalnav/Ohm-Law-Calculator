//function global calculate
const calculateGlobal = (voltage,current,resistance,power) => {
    let errorCounter = 0;
    if (voltage == "") {
        calculateVoltage(current,resistance,power);
        errorCounter = errorCounter + 1;
    }
    if (current == "") {
        calculateCurrent(voltage,resistance,power);
        errorCounter = errorCounter + 1;
    }
    if (resistance == "") {
        calculateResistance(voltage,current,power);
        errorCounter = errorCounter + 1;
    }
    if (power == "") {
        calculatePower(voltage,current,resistance);
        errorCounter = errorCounter + 1;
    }
    if (errorCounter == 3 || errorCounter == 4) {
        globalAdvice("Please enter at least two values");
        voltageInput.value = "";
        currentInput.value = "";
        resistanceInput.value = "";
        powerInput.value = "";
    } else if (errorCounter == 0) {
        globalAdvice("I guess you are better than a computer ._.");
        voltageInput.value = "";
        currentInput.value = "";
        resistanceInput.value = "";
        powerInput.value = "";
    } else if (errorCounter == 1) {
        globalAdvice("Enter two values and i'll do the work, trust me ;)")
        voltageInput.value = "";
        currentInput.value = "";
        resistanceInput.value = "";
        powerInput.value = "";
    } else {
        globalAdvice("<b>Values calculated!</b>")
    }
    calculateButton.disabled = "disabled";
    voltageInput.disabled = "disabled";
    currentInput.disabled = "disabled";
    resistanceInput.disabled = "disabled";
    powerInput.disabled = "disabled";
    console.log(errorCounter);
    errorCounter = 0;
    console.log(errorCounter);
}
// function voltage
const calculateVoltage = (current,resistance,power) =>{
    if (resistance == "") {
        voltage = power / current;
        voltageInput.value = voltage;
    }
    else if (current == "") {
        voltage = Math.sqrt(power * resistance);
        voltageInput.value = voltage;
    }
    else if (power == "") {
        voltage = resistance * current;
        voltageInput.value = voltage;
    }
    else {
        voltage = resistance*current;
        voltageInput.value = voltage;
    }
}
// function current
const calculateCurrent = (voltage,resistance,power) =>{
    if (voltage == "") {
        current = Math.sqrt(power/resistance);
        currentInput.value = current;
    }
    else if (resistance == "") {
        current = power/voltage;
        currentInput.value = current;
    }
    else if (power == "") {
        current = voltage/resistance;
        currentInput.value = current;
    }
    else {
        current = voltage/resistance;
        currentInput.value = current;
    }
}
// function resistance
const calculateResistance = (voltage,current,power) =>{
    if (voltage == "") {
        resistance = power / (current*current);
        resistanceInput.value = resistance;
    }
    else if (power == "") {
        resistance = voltage / current;
        resistanceInput.value = resistance;
    }
    else if (current == "") {
        resistance = (voltage*voltage) / power;
        resistanceInput.value = resistance;
    }
    else {
        resistance = (voltage / current);
        resistanceInput.value = resistance;
    }
}
// function power
const calculatePower = (voltage,current,resistance) =>{
    if (voltage == "") {
        power = resistance * (current*current);
        powerInput.value = power;
    }
    else if (current == "") {
        power = (voltage*voltage) / resistance;
        powerInput.value = power;
    }
    else if (resistance == "") {
        power = voltage * current;
        powerInput.value = power;
    }
    else {
        power = voltage * current;
        powerInput.value = power;
    }
}
//function global advice
const globalAdvice = (error) =>{
    document.getElementById("result").className = "alert alert-primary alert-dismissible fade show shadow-sm";
    resultOutput.innerHTML = error;
}

// inputs
const voltageInput = document.getElementById("voltage");
const currentInput = document.getElementById("current");
const resistanceInput = document.getElementById("resistance");
const powerInput = document.getElementById("power");
// buttons
const calculateButton = document.getElementById("btn-calculate");
const resetButton = document.getElementById("btn-reset");
// outputs
const resultOutput = document.getElementById("result");

// calculateButton event
calculateButton.addEventListener("click",(e)=>{
    calculateGlobal(voltageInput.value,currentInput.value,resistanceInput.value,powerInput.value);
})
//resetButton event
resetButton.addEventListener("click",(e)=>{
    location.reload();
})





