const currentDate = () => new Date().toLocaleDateString('en-US');
const merge = (a, b) => [...a, ...b];
const scriptRootPath = path.join(repositoryRootPath, 'script');