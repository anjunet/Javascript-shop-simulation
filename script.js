const products = ['Coffee', 'Bagel', 'Donut']
const prices = [10, 15, 18]

// function to display products and their prices
function displayProductsAndPrices() {
  // Loop for products and prices
  for (let i = 0; i < products.length; i++) {
    console.log(`${products[i]} - $${prices[i]}`);
  }
}

displayProductsAndPrices();

// Function to calculate the total cost
function calculateTotalCost(selectedProducts) {
  let totalCost = 0;
  selectedProducts.forEach((selection) => {
    const { productIndex, quantity } = selection;
    totalCost += prices[productIndex] * quantity;
  });
  return totalCost;
}

function shop(budget){
    let selectedProducts = [];
    let keepShopping = true;

  displayProducts();

  while (keepShopping) {
    if (productIndex < 0 || productIndex >= products.length) {
      console.log("Invalid product selection.");
      continue;
    }

    if (isNaN(quantity) || quantity <= 0) {
      console.log("Invalid quantity.");
      continue;
    }
}

let totalCost = calculateTotalCost(selectedProducts);


  // Check if the user has enough budget
  if (totalCost > budget) {
    console.log(`You don't have enough money! Total cost is $${totalCost}`);
  } else {
    let change = budget - totalCost;
  }
}


// Example
let userBudget = 150
const selectedProducts = [
  { productIndex: 0, quantity: [1] }, 
  { productIndex: 1, quantity: [4] }, 
  { productIndex: 2, quantity: [1] }  
];

const total = calculateTotalCost(selectedProducts);
const change = userBudget - total
console.log(`Total cost: $${total}`);
console.log(`Your change: $${change}`);