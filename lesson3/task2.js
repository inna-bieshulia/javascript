
const min = 10;
const max = 30;

const age = Math.floor(Math.random() * (max - min + 1)) + min;

const isAdult = age >= 18;

console.log('Age:', age);
console.log('Is adult:', isAdult);