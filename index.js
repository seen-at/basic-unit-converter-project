/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


function convert() {
    let feetValue = (inputEl.value * 3.281).toFixed(3)
    let meterValue = (inputEl.value / 3.281).toFixed(3)

    let gallonValue = (inputEl.value / 4.546).toFixed(3)
    let literValue = (inputEl.value * 4.546).toFixed(3)

    let poundValue = (inputEl.value * 2.205).toFixed(3)
    let kilogramValue = (inputEl.value / 2.205).toFixed(3)

    lengthEl.textContent = `${inputEl.value} meters = ${feetValue} feet | ${inputEl.value} feet = ${meterValue} meters`
    volumeEl.textContent = `${inputEl.value} liters = ${gallonValue} gallons | ${inputEl.value} gallons = ${literValue} liters`
    massEl.textContent = `${inputEl.value} kilos = ${poundValue} pounds |${inputEl.value} pounds= ${kilogramValue} kilos`
}