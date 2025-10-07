class Gadget {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `Gadget: ${this.brand} ${this.model}, year: ${this.year}`;
    }
}

class Smartphone extends Gadget {
    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year);
        this.operatingSystem = operatingSystem;
    }

    getInfo() {
        return `Phone: ${this.brand} ${this.model}, year: ${this.year}, ОS: ${this.operatingSystem}`;
    }
}

const gadget1 = new Gadget('Sony', 'PlayStation 5', 2020);
const gadget2 = new Gadget('Apple', 'iPad Pro', 2023);
const gadget3 = new Gadget('Samsung', 'Galaxy Watch 6', 2023);

const smartphone1 = new Smartphone('Apple', 'iPhone 15 Pro', 2023, 'iOS 17');
const smartphone2 = new Smartphone('Samsung', 'Galaxy S24', 2024, 'Android 14');
const smartphone3 = new Smartphone('Google', 'Pixel 8', 2023, 'Android 14');

console.log('Gadgests');
console.log(gadget1.getInfo());
console.log(gadget2.getInfo());
console.log(gadget3.getInfo());

console.log('Smartpones');
console.log(smartphone1.getInfo());
console.log(smartphone2.getInfo());
console.log(smartphone3.getInfo());

