const allResults = await Promise.all(items.map(async (item) => {}));
const uniqueArr = (arr) => [...new Set(arr)];
const copyToClipboard = (text) => navigator.clipboard.writeText(text);