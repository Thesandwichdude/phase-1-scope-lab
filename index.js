var customerName = 'bob'
var bestCustomer
const leastFavoriteCustomer = 'someone spicy'

function upperCaseCustomerName(name){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'stinky boi';
    return leastFavoriteCustomer;
}