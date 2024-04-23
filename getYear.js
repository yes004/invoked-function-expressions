const stringReverse = str => str.split("").reverse().join("");
const flattenedArray = arr => [].concat(...arr);
const updated = numbers.filter(element => element > 6);
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
console.log("1 && 2 = "+(1 && 2));
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');