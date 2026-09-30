const products = [
    { name: "Rice", price: 45000, category: "food" },
    { name: "Phone", price: 250000, category: "electronics" },
    { name: "Bread", price: 1500, category: "food" },
    { name: "Laptop", price: 450000, category: "electronics" },
    { name: "Soap", price: 1200, category: "household" },
    { name: "Milk", price: 3000, category: "food" },
    { name: "Headphones", price: 15000, category: "electronics" },
    { name: "Detergent", price: 5000, category: "household" }
];

const under5000 = products.filter(product => product.price < 5000);

const allNames = products.map(product => product.name);

const electronicsTotal = products
    .filter(product => product.category === "electronics")
    .reduce((total, product) => total + product.price, 0);

const firstFood = products.find(product => product.category === "food");

const soapIndex = products.findIndex(product => product.name === "Soap");

const anyOver500000 = products.some(product => product.price > 500000);

const allOver500 = products.every(product => product.price > 500);

const sortedProducts = products
    .slice()
    .sort((a, b) => a.price - b.price);

const foodNames = products
    .filter(product => product.category === "food")
    .map(product => product.name)
    .sort();

console.log("Products under 5000:", under5000);
console.log("All names:", allNames);
console.log("Total price of electronics:", electronicsTotal);
console.log("First food item:", firstFood);
console.log('Index of "Soap":', soapIndex);
console.log("Any product over 500000:", anyOver500000);
console.log("Are all products over 500?", allOver500);
console.log("Sorted products:", sortedProducts);
console.log("Original products:", products);
console.log("Food names sorted:", foodNames);


// SORT EXPERIMENTS

console.log("Default sort:", [10, 9, 1].sort());

console.log(
    "Number sort:",
    [10, 9, 1].sort((a, b) => a - b)
);

const nums = [10, 9, 1];

const sortedNums = nums
    .slice()
    .sort((a, b) => a - b);

console.log("Original nums:", nums);
console.log("Sorted copy:", sortedNums);


// STATS USING REDUCE

const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce(
    (total, number) => total + number,
    0
);

const average = sum / numbers.length;

const minimum = numbers.reduce(
    (smallest, number) => number < smallest ? number : smallest
);

const maximum = numbers.reduce(
    (largest, number) => number > largest ? number : largest
);

console.log("Sum:", sum);
console.log("Average:", average);
console.log("Minimum:", minimum);
console.log("Maximum:", maximum);