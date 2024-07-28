const repositoryRootPath = path.resolve(__dirname, '..');
const buildOutputPath = path.join(repositoryRootPath, 'out');
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);