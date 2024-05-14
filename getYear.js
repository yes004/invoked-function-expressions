var arr2 = arr1.reverse();
const uniqueArray = arr => [...new Set(arr)];
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);