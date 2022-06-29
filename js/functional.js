function getInputField(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldTaxt = inputField.value;
    const previousInputValue = parseFloat(inputFieldTaxt);
    inputField.value = '';
    return previousInputValue;
}

function getAmountField(fieldId){
    const amountField = document.getElementById(fieldId);
    const previousAmount = parseFloat(amountField.innerText);
    return previousAmount;
}

function updateTotal(fieldId, amount){
    // const totalFieldTag = document.getElementById(fieldId);
    // console.log(totalFieldTag.innerText);
    const previousTotal = getAmountField(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
}

function updateBalance(amount, isAdd){
    // const balanceField = document.getElementById('balance-total');
    const previousBalance = getAmountField('balance-total');
    let newBalance;

    if(isAdd == true){
        newBalance = previousBalance + amount;
        
    }
    else if(amount <= previousBalance){
        newBalance = previousBalance - amount;
        
    }
    document.getElementById('balance-total').innerText = newBalance;
    
}
// handle diposite======================
document.getElementById('deposit-button').addEventListener('click', function(){
    
    const amount  = getInputField('deposit-input');
    if(amount > 0){
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
    
});

// handle withdraw======================
document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const amount  = getInputField('withdraw-input');
    const previousBalance = getAmountField('balance-total');
    if(amount > 0 && amount <= previousBalance){
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
    
});