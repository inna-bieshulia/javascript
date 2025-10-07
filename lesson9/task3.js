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

    static getOldestGadget(gadgetsArray) {
        if (!gadgetsArray || gadgetsArray.length === 0) {
            return null;
        }

        let oldest = gadgetsArray[0];
        for (let i = 1; i < gadgetsArray.length; i++) {
            if (gadgetsArray[i].year < oldest.year) {
                oldest = gadgetsArray[i];
            }
        }
        return oldest;
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
        return `Phone: ${this.brand} ${this.model}, year: ${this.year}, OS: ${this.operatingSystem}`;
    }
}

const gadget1 = new Gadget('Sony', 'PlayStation 2', 2000);
const gadget2 = new Gadget('Apple', 'iPod Classic', 2007);
const gadget3 = new Gadget('Sony', 'PlayStation 5', 2020);
const gadget4 = new Gadget('Apple', 'iPad Pro', 2023);
const gadget5 = new Gadget('Samsung', 'Galaxy Watch 6', 2024);

const smartphone1 = new Smartphone('Apple', 'iPhone 3G', 2008, 'iOS');
const smartphone2 = new Smartphone('Samsung', 'Galaxy S', 2010, 'Android');
const smartphone3 = new Smartphone('Apple', 'iPhone 15 Pro', 2023, 'iOS');
const smartphone4 = new Smartphone('Samsung', 'Galaxy S24', 2024, 'Android');
const smartphone5 = new Smartphone('Google', 'Pixel 8', 2023, 'Android');

console.log('All Gadgets');
console.log(gadget1.getInfo());
console.log(gadget2.getInfo());
console.log(gadget3.getInfo());
console.log(gadget4.getInfo());
console.log(gadget5.getInfo());

console.log('All Smartphones');
console.log(smartphone1.getInfo());
console.log(smartphone2.getInfo());
console.log(smartphone3.getInfo());
console.log(smartphone4.getInfo());
console.log(smartphone5.getInfo());

const allGadgets = [
    gadget1, gadget2, gadget3, gadget4, gadget5,
    smartphone1, smartphone2, smartphone3, smartphone4, smartphone5
];

const oldest = Gadget.getOldestGadget(allGadgets);
console.log('The oldest gadget is:');
console.log(oldest.getInfo());



