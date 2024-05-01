const updated = numbers.filter(element => element > 6);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());