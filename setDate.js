console.log(false === '0');
console.log("1 && 2 = "+(1 && 2));
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;