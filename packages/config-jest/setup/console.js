/* eslint-disable no-console */
function mockedConsole(message) {
  throw new Error(message);
}

console.warn = mockedConsole;
console.error = mockedConsole;
