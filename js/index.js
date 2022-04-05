// ITERATION 1

// ITERATION 1

function updateSubtotal(product) {
    const price = product.querySelector('.price span')

    const quantity = product.querySelector(".quantity input")
    const subtotal = product.querySelector(".subtotal span")

    const priceNumber = parseFloat(price.innerText)
    const quantityNumber = parseFloat(quantity.value)

    const subtotalNumber = priceNumber * quantityNumber
    subtotal.innerText = subtotalNumber
    return subtotalNumber
}


function calculateAll() {
    const totalVal = document.querySelector('#total-value span');
    const productsClasses = document.querySelectorAll('.product');
    let sum = 0;
    productsClasses.forEach((element) => {
        sum += updateSubtotal(element);
    })
    console.log(sum);
    totalVal.innerText = sum;
}



// end of test

// ITERATION 2
//... your code goes here

// ITERATION 3
//... your code goes here


// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here
}

// ITERATION 5

function createProduct() {
    //... your code goes here
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
});