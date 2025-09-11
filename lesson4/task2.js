

let hour = Math.floor(Math.random() * 24);

if (hour >= 0 && hour <= 5) {
    console.log("Good night!");
} else if (hour >= 6 && hour <= 11) {
    console.log("Good morning!");
} else if (hour >= 12 && hour <= 17) {
    console.log("Good day!");
} else if (hour >= 18 && hour <= 23) {
    console.log("Good evening!");
}