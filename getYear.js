const goToTop = () => window.scrollTo(0, 0);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const maxNumber = arr => Math.max(...arr);