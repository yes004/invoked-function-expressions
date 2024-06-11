const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);