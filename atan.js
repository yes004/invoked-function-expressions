const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const flattenedArray = arr => [].concat(...arr);
const symbolsPath = path.join(buildOutputPath, 'symbols');