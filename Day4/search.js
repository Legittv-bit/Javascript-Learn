function indexOfValue(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

const numbers = [10, 20, 30, 40, 50];

console.log(indexOfValue(numbers, 30));
console.log(indexOfValue(numbers, 50));
console.log(indexOfValue(numbers, 100));