const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
var regexp  = new RegExp('{{([^}]+)}}', 'g');