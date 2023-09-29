// value stap 1 functional

function getElementValueById(valusId) {
    const valueById = document.getElementById(valusId).value;
    const inputFieldValue = parseFloat(valueById)
    valueById.value='';
    return inputFieldValue;
}
//  innertext stap 2 functional
function getElementinnerTextById(elementId) {
    const elementById = document.getElementById(elementId).innerText;
    const textElementValue = parseFloat(elementById);
    return textElementValue;
}

// setValue stap 3 functional
function setElementAreValueById(elementById, newValue) {
    const textValue = document.getElementById(elementById);
    textValue.innerText = newValue;
}
//    deposit stap 
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmont = getElementValueById('deposit-field');
    const providedDopositTotal = getElementinnerTextById('deposit-total');
    const newDepositTotle = providedDopositTotal + newDepositAmont;
    setElementAreValueById('deposit-total',newDepositTotle);
    const balanceTotleElament =getElementinnerTextById('balance-total')
    const balanceTotle =balanceTotleElament + newDepositAmont
    setElementAreValueById('balance-total',balanceTotle)
})
// Withdraw stap
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmont=getElementValueById('withdraw-filed');
   const providedWithdrawTotle=getElementinnerTextById('withdraw-total');
   const NewwithdrawTotle =newWithdrawAmont+providedWithdrawTotle
   setElementAreValueById('withdraw-total',NewwithdrawTotle);
   const balanceWithdrawElement =getElementinnerTextById('balance-total');
   const balanceWithdrawAmont =balanceWithdrawElement-newWithdrawAmont;   
   setElementAreValueById('balance-total',balanceWithdrawAmont); 
})
