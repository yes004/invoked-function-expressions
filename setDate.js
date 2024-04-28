const executableName = getExecutableName(channel, appName);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const randomString = () => Math.random().toString(36).slice(2);
console.log(1 +  -"1" + "2");