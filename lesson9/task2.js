class Gadget {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this._year = year;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        const currentYear = new Date().getFullYear();
        if (typeof value === 'number' && value >= 2000 && value <= currentYear) {
            this._year = value;
        } else {
            console.log('Error: invalid year');
        }
    }

    getInfo() {
        return `Gadget: ${this.brand} ${this.model}, year: ${this.year}`;
    }
}

class Smartphone extends Gadget {
    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year);
        this._operatingSystem = operatingSystem;
    }

    get operatingSystem() {
        return this._operatingSystem;
    }

    set operatingSystem(value) {
        const allowedOS = ['iOS', 'Android', 'HarmonyOS'];
        if (allowedOS.includes(value)) {
            this._operatingSystem = value;
        } else {
            console.log('Error: invalid operating system');
        }
    }

    getInfo() {
        return `Phone: ${this.brand} ${this.model}, year: ${this.year}, ОS: ${this.operatingSystem}`;
    }
}

const gadget1 = new Gadget('Sony', 'PlayStation 5', 2020);
const gadget2 = new Gadget('Apple', 'iPad Pro', 2023);
const gadget3 = new Gadget('Samsung', 'Galaxy Watch 6', 2023);

const smartphone1 = new Smartphone('Apple', 'iPhone 15 Pro', 2023, 'iOS');
const smartphone2 = new Smartphone('Samsung', 'Galaxy S24', 2024, 'Android');
const smartphone3 = new Smartphone('Google', 'Pixel 8', 2023, 'Android');

console.log('Gadgets');
console.log(gadget1.getInfo());
console.log(gadget2.getInfo());
console.log(gadget3.getInfo());

console.log('Smartphones');
console.log(smartphone1.getInfo());
console.log(smartphone2.getInfo());
console.log(smartphone3.getInfo());

console.log('Trying to set year = 1999 (error):');
gadget1.year = 1999;
console.log('Trying to set year = 2030 (error):');
gadget1.year = 2030;
console.log('Trying to set year = 2021 (correct value):');
gadget1.year = 2021;

console.log('Trying to set OS = "Windows" (error):');
smartphone1.operatingSystem = 'Windows';
console.log('Trying to set OS = "Linux" (error):');
smartphone1.operatingSystem = 'Linux';
console.log('Trying to set OS = "iOS" (correct value):');
smartphone1.operatingSystem = 'iOS';


