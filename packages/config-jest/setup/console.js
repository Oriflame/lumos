function mockedConsole(message) {
  throw new Error(message);
}

console.warn = mockedConsole;
console.error = mockedConsole;
