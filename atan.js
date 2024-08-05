const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const removeDuplicates = (arr) => [...new Set(arr)];
var arr3 = "jones".split('');