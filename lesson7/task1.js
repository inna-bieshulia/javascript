const numbers = [3, -3, 0, 7, -6, 0, 1, -2, 8, 0, -1, 4, -5];

let positive = 0;
let negative = 0;
let zero = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positive++;
    } else if (numbers[i] < 0) {
        negative++;
    } else {
        zero++;
    }
}

console.log("Positive Numbers: " + positive);
console.log("Negative Numbers: " + negative);
console.log("Zeros: " + zero);
