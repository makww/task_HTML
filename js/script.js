var available = document.getElementById("available");
var amount = document.getElementById("amount");
var inputField = document.getElementById("input-field");

amount.max = available.textContent;

function chipsAmount() {
    inputField.value = amount.value;
}

function min() {
    amount.value = 1;
    chipsAmount();
}

function max() {
    amount.value = available.textContent;
    chipsAmount();
}

function bank() {
    amount.value = available.textContent;
    chipsAmount();
}
function halfBank() {
    amount.value = ~~(available.textContent / 2);
    chipsAmount();
}