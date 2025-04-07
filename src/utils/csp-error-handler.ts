const originalConsoleError: typeof console.error = console.error;

console.error = (...args: Parameters<typeof console.error>): void => {
  const message = args[0];
  if (
    typeof message === 'string' &&
    message.includes('Content Security Policy directive') &&
    message.includes('style-src')
  ) {
    return;
  }

  originalConsoleError.apply(console, args);
};
