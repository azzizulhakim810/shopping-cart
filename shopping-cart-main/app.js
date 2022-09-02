function manageProductDetails(isIncreasing, product, amount, price) {
  const getQuantityOfPhone = document.getElementById(product);
  const quantityInValue = parseInt(getQuantityOfPhone.value);
  
  if(isIncreasing) {
    getQuantityOfPhone.value = quantityInValue + 1;

  }
  else if(0 < quantityInValue){
    getQuantityOfPhone.value = quantityInValue - 1;
  }

  const actualAmount = getQuantityOfPhone.value;

  // Total Amount

  const getAmountOfPhone = document.getElementById(amount);
  const amountInValue = parseInt(getAmountOfPhone.innerText);

  getAmountOfPhone.innerText = price * actualAmount;

  calculateTotal();
}


function getAmountValue(product) {
  const productAmount = document.getElementById(product);
  const productAmountInValue = productAmount.value;
  return productAmountInValue;
}


function calculateTotal () {

  // calculate products subtotal price 

  const phonePrice = getAmountValue('amount-field-phone') * 1219; 
  const casePrice = getAmountValue('amount-field-case') * 59; 

  // Update Subtotal Price 

  const getSubtotalField = document.getElementById('sub-total');
  getSubtotalField.innerText = phonePrice + casePrice;
  const updateSubtotalField = getSubtotalField.innerText;
  

  // Update Tax 

  const getTaxField = document.getElementById('tax');
  getTaxField.innerText = updateSubtotalField / 10;
  const updateTax = getTaxField.innerText;

  // Update Total 

  const getTotal = document.getElementById('total');
  getTotal.innerText = parseInt(updateSubtotalField) + parseFloat(updateTax);



}

// Increase Phone

document.getElementById('plus-phone').addEventListener('click', function(){

  manageProductDetails(true, 'amount-field-phone', 'amount-phone', 1219);

})

// Decrease Phone

document.getElementById('minus-phone').addEventListener('click', function(){

  manageProductDetails(false, 'amount-field-phone', 'amount-phone', 1219);

})


//////////////////////// Case Details 


// Increase Case

document.getElementById('plus-case').addEventListener('click', function(){

  manageProductDetails(true, 'amount-field-case', 'amount-case', 59);

})

// Decrease Case

document.getElementById('minus-case').addEventListener('click', function(){

  manageProductDetails(false, 'amount-field-case', 'amount-case', 59);

})
