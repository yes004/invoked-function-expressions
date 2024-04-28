const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const intermediateAppPath = path.join(buildOutputPath, 'app');
const randomString = () => Math.random().toString(36).slice(2);
console.log(+"1" +  "1" + "2");
const toggleBool = () => (bool = !bool);
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;