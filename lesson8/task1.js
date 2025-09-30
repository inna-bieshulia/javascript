const calculator = {
    lastResult: null,
    operationsCount: 0,

    add(a, b) {
        this.lastResult = a + b;
        this.operationsCount++;
        return this.lastResult;
    },

    subtract(a, b) {
        this.lastResult = a - b;
        this.operationsCount++;
        return this.lastResult;
    },

    multiply(a, b) {
        this.lastResult = a * b;
        this.operationsCount++;
        return this.lastResult;
    },

    divide(a, b) {
        if (b === 0) {
            return "Помилка: ділення на нуль!";
        }
        this.lastResult = a / b;
        this.operationsCount++;
        return this.lastResult;
    },

    reset() {
        this.lastResult = null;
        this.operationsCount = 0;
    }
};

console.log("Add:", calculator.add(10, 5));
console.log("Subtract:", calculator.subtract(10, 5));
console.log("Multiply:", calculator.multiply(10, 5));
console.log("Divide:", calculator.divide(10, 2));
console.log("Divide by zero:", calculator.divide(10, 0));
console.log("Last Result:", calculator.lastResult);
console.log("Operations Count:", calculator.operationsCount);

calculator.reset();
console.log("After reset - Last Result:", calculator.lastResult);
console.log("After reset - Operations Count:", calculator.operationsCount);
