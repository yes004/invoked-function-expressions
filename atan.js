console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const added = [0, 1, 2, 3, 4].map((item) => item + 1);