const lastElement = arr => arr[arr.length - 1];
const resultingPromises = urls.map((url) => makHttpRequest(url));
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);