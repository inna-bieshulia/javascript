const numbers = [0, -1, 1, 2, -3, 10, -2, 8, -6, 4, -5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Sum of all numbers:", sum);
