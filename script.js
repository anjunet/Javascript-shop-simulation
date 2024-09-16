const products = ['Coffee', 'Bagel', 'Donut'];
const prices = [10, 15, 18];

// Function to display products and their prices
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
  
  // Loop through the selected products array and calculate total cost
  selectedProducts.forEach((selection) => {
    const { productIndex, quantity } = selection;
    // Multiply the price by the quantity and add to the total cost
    totalCost += prices[productIndex] * quantity;
  });

  return totalCost;
}

// Shop function with budget handling
function shop(budget) {
  let selectedProducts = [];
  let keepShopping = true;

  // Display available products and prices
  displayProductsAndPrices();

  while (keepShopping) {
    // User input simulation (replace with actual user input in real application)
    let productIndex = parseInt(prompt("Enter product index (0 for Coffee, 1 for Bagel, 2 for Donut):"));
    let quantity = parseInt(prompt("Enter quantity:"));

    // Validate product selection
    if (isNaN(productIndex) || productIndex < 0 || productIndex >= products.length) {
      console.log("Invalid product selection.");
      continue; // Ask the user again if input is invalid
    }

    if (isNaN(quantity) || quantity <= 0) {
      console.log("Invalid quantity.");
      continue; // Ask the user again if input is invalid
    }

    // Add the valid product and quantity to the selectedProducts array
    selectedProducts.push({ productIndex, quantity });

    // Ask the user if they want to keep shopping
    let continueShopping = prompt("Do you want to continue shopping? (yes/no)");
    if (continueShopping.toLowerCase() !== 'yes') {
      keepShopping = false;
    }
  }

  // Calculate the total cost after shopping
  let totalCost = calculateTotalCost(selectedProducts);

  // Check if the user has enough budget
  if (totalCost > budget) {
    console.log(`You don't have enough money! Total cost is $${totalCost}.`);
  } else {
    let change = budget - totalCost;
    console.log(`Total cost: $${totalCost}. Your change: $${change}`);
  }
}

// Example
let userBudget = parseInt(prompt("Enter your budget: "));
if (!isNaN(userBudget) && userBudget > 0) {
  shop(userBudget);
} else {
  console.log("Invalid budget amount.");
}
