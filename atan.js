[foo, bar] = [bar, foo];
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;