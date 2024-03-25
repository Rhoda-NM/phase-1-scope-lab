var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    console.log(customerName);
    return customerName;
}
function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavouriteCustomer = 'Nancy';
function changeLeastFavoriteCustomer() {
    leastFavouriteCustomer = 'Mary';
}
changeLeastFavoriteCustomer()
