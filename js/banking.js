// all function 

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear the input deposit field
    inputField.value = '';
    return amountValue;
};

function updateInputField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const perviousAmount = parseFloat(totalText);
    totalElement.innerText = perviousAmount + amount;
};

function getCurrentBlance() {
    const blanceTotal = document.getElementById('blance');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText);
    return previousBlanceTotal;
}
function updateBlance(amount, isAdd) {
    const blanceTotal = document.getElementById('blance');
    /* const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText); */
    const previousBlanceTotal = getCurrentBlance();
    if (isAdd == true) {
        blanceTotal.innerText = previousBlanceTotal + amount;
    }
    else {
        blanceTotal.innerText = previousBlanceTotal - amount;
    }
}

//  deposit and withdraw hanlde with event
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get amount deposit
    // update deposit total
    // update blance total
    /* const blanceTotal = document.getElementById('blance');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText);
    blanceTotal.innerText = previousBlanceTotal + newDepositAmount; */
    const newDepositAmount = getInputValue('deposit-amount');
    if (newDepositAmount > 0) {
        updateInputField('deposit-total', newDepositAmount);
        updateBlance(newDepositAmount, true);
    }
});

// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // update withdraw total
    // update blance total
    /* const blanceTotal = document.getElementById('blance');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText);
    const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;
    blanceTotal.innerText = newBlanceTotal; */
    const newWithdrawAmount = getInputValue('withdraw-amount');
    const currentBlance = getCurrentBlance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBlance) {
        updateInputField('withdraw-total', newWithdrawAmount);
        updateBlance(newWithdrawAmount, false);
    }
    if (newWithdrawAmount > currentBlance) {
        console.log("Insufficient Blance");
    }
});