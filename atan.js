const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const timeFromDate = date => date.toTimeString().slice(0, 8);
const updated = numbers.filter(element => element > 6);