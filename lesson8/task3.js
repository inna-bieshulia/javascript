let person = {
    firstName: "Inna",
    lastName: "Ozer",
    age: 30
};

person.email = "inna.b@qamadness.com";

delete person.age;

console.log(person);