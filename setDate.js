const goToTop = () => window.scrollTo(0, 0);
const minNumber = arr => Math.min(...arr);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();