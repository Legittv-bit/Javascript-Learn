function findMax(numbers) {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

function findMin(numbers) {
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}

function findAverage(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total / numbers.length;
}


const nums = [12, 5, 88, 3, 45, 88, -7];

console.log(findMax(nums));
console.log(findMin(nums));
console.log(findAverage(nums));