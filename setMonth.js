var c = new Counter(); c.add(); c.add(); c.add();
const isEmptyArray = arr => !arr.length;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());