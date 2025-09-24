const handleNum = (num, handleEven, handleOdd) => {
    num % 2 === 0 ? handleEven() : handleOdd();
};

const handleEven = () => console.log("Number is even");


const handleOdd = () => console.log("Number is odd");

handleNum(10, handleEven, handleOdd);
handleNum(11, handleEven, handleOdd);  
