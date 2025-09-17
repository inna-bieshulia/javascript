
function area1(width, height) {
    return width * height;
}
console.log("Function Declaration:", area1(2, 5));


const area2 = function (width, height) {
    return width * height;
};
console.log("Function Expression:", area2(5, 10));


const area3 = (width, height) => width * height;
console.log("Arrow Function:", area3(7, 17));
