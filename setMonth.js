const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const executableName = getExecutableName(channel, appName);
const merge = (a, b) => a.concat(b);