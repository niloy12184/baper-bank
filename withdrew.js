document.getElementById("btn-withdrew").addEventListener('click', function(){
    const withdrewField = document.getElementById("withdrew-amount");
    const withdrewFieldAmountString =withdrewField.value;
    const withdrewFieldAmount =parseFloat(withdrewFieldAmountString);
    withdrewField.value = '';
    if(isNaN(withdrewFieldAmount)){
        alert('please type your amount number')
        return;
    }

    const WithdrewTotalElement = document.getElementById("withdrew-total")
    const previousWithdrewTotalString = WithdrewTotalElement.innerText;
    const previousWithdrewTotal = parseFloat(previousWithdrewTotalString);

    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalAmountString = balanceTotalElement.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);
    
    if(withdrewFieldAmount > balanceTotalAmount){
        alert('Not enough money')
        return;
    }
    const withdrewTotal = previousWithdrewTotal + withdrewFieldAmount;
    WithdrewTotalElement.innerHTML = withdrewTotal

    const correctBalanceTotal = balanceTotalAmount - withdrewFieldAmount
    balanceTotalElement.innerText = correctBalanceTotal;
})