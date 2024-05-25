const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const scriptRootPath = path.join(repositoryRootPath, 'script');