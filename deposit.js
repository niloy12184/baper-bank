document.getElementById("btn-deposit").addEventListener('click', function(){
    const depositField =document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount =parseFloat(newDepositAmountString);
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    const balanceTotalElementHere = document.getElementById("balance-total");
    const balanceTotalHereString = balanceTotalElementHere.innerText;
    const balanceTotalHere = parseFloat(balanceTotalHereString)
    const totalBalance = balanceTotalHere + newDepositAmount;
    balanceTotalElementHere.innerText = totalBalance;


    depositField.value = "";

})