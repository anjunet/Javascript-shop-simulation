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

// Cost of selected products
const selectedProducts = [
  { productIndex: 0, quantity: 3 }, 
  { productIndex: 1, quantity: 2 }, 
  { productIndex: 2, quantity: 1 }  
];

const total = calculateTotalCost(selectedProducts);
console.log(`Total cost: $${total}`);