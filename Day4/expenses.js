const expenses = [
    { name: "Food", amount: 5000, category: "food" },
    { name: "Transport", amount: 3000, category: "transport" },
    { name: "Internet", amount: 10000, category: "bills" },
    { name: "Groceries", amount: 7000, category: "food" }
];

function addExpense(list, expense) {
    return list.concat(expense);
}

function removeExpense(list, name) {
    return list.filter(expense => expense.name !== name);
}

function totalSpent(list) {
    return list.reduce(
        (total, expense) => total + expense.amount,
        0
    );
}

function byCategory(list, category) {
    return list.filter(
        expense => expense.category === category
    );
}

function biggestExpense(list) {
    return list.reduce(
        (biggest, expense) =>
            expense.amount > biggest.amount ? expense : biggest
    );
}

function hasExpensiveItem(list, amount) {
    return list.some(
        expense => expense.amount > amount
    );
}

function sortedByAmount(list) {
    return list
        .slice()
        .sort((a, b) => a.amount - b.amount);
}


// TEST THE FUNCTIONS

console.log("Original:", expenses);

console.log(
    "Added:",
    addExpense(expenses, {
        name: "Phone",
        amount: 15000,
        category: "bills"
    })
);

console.log(
    "Removed:",
    removeExpense(expenses, "Transport")
);

console.log(
    "Total spent:",
    totalSpent(expenses)
);

console.log(
    "Food expenses:",
    byCategory(expenses, "food")
);

console.log(
    "Biggest expense:",
    biggestExpense(expenses)
);

console.log(
    "Has expense over 8000:",
    hasExpensiveItem(expenses, 8000)
);

console.log(
    "Sorted by amount:",
    sortedByAmount(expenses)
);


// PROVE THE ORIGINAL WAS NOT CHANGED

console.log("Original at the end:", expenses);