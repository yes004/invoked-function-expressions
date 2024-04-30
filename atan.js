const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();