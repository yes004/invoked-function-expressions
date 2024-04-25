const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
console.log(false == '0');
const isEmptyObject = obj => Object.keys(obj).length === 0;
const merge = Object.assign({}, obj1, obj2);
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const result = await makeHttpRequest(url);