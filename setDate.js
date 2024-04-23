const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const value = ( 5 < 7 ) ? "True" : "False" ;
const timeFromDate = date => date.toTimeString().slice(0, 8);
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));