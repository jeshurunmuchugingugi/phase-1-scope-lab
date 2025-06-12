// Write your solution in this file!


// Declare customerName in the global scope explicitly
var customerName = 'bob';

// Modify the global customerName
function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}


function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'kamau';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'njogu';
}