const stringReverse = str => str.split("").reverse().join("");
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");