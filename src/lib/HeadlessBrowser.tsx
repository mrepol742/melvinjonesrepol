export function isHeadlessBrowser(): boolean {
  return (
    navigator.webdriver === true ||
    navigator.plugins.length === 0 ||
    navigator.languages.length === 0
  );
}
