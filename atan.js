const isArray = (arr) => Array.isArray(arr);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const shuffledArray = array.sort(() => Math.random() - 0.5); 