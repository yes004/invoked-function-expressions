const merge = [...new Set(a.concat(b))];
const currentDate = () => new Date().toLocaleDateString('en-US');
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);