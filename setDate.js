const resultingPromises = urls.map((url) => makHttpRequest(url));
const merge = [...new Set([...a, ...b])];
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;