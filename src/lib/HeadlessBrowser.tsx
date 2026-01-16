export function isHeadlessBrowser(): boolean {
  return (
    navigator.webdriver === true ||
    navigator.languages.length === 0
  );
}
