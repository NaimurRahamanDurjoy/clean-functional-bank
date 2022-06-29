document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposit
    const depositInputField = document.getElementById('deposit-input-field');
    const totalDepositAmounttext = depositInputField.value;
    const totalDepositAmount = parseFloat(totalDepositAmounttext);
    
    //set the total amount of deposit
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    const newDepositAmount = previousDepositAmount + totalDepositAmount;
    depositTotal.innerText = newDepositAmount;

   

    // Update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + totalDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

     // clear the input field
     depositInputField.value = '';
});

    //withdraw
    document.getElementById('withdraw-button').addEventListener('click', function(){
        // get withdraw input field
        const withdrawInputField = document.getElementById('withdraw-input');
        const withdrawInput = parseFloat(withdrawInputField.value);

        // total withdraw
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWihdrawAmount = parseFloat(withdrawTotal.innerText);
        const newWithdrawAmount = previousWihdrawAmount + withdrawInput;
        withdrawTotal.innerText = newWithdrawAmount;

        // Decrease balance for withdraw
        const balanceTotal = document.getElementById('balance-total');
        const previousBalance = parseFloat(balanceTotal.innerText);
        const decreaseBalance = previousBalance - withdrawInput;
        balanceTotal.innerText = decreaseBalance;


        // clear the withdraw field
        withdrawInputField.value = '';
    });