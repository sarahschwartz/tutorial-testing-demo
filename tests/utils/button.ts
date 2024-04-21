import type { Page } from '@playwright/test';

// export function getButtonByText(page: Page, selector: string | RegExp) {
//   return page.locator('button').getByText(selector);
// }

// export async function clickByLocator(page: Page, locator: string) {
//   await page.locator(locator).click();
// }

// export async function clickByLabel(page: Page, label: string) {
//   await page.getByLabel(label, { exact: true }).click();
// }

export async function clickCopyButton(page: Page, id: string) {
  const buttonAriaLabel = 'Copy code to clipboard';
  const selector = `//*[@id='${id}']//following::button[@aria-label='${buttonAriaLabel}'][1]`;
  const button = page.locator(selector);
  await button.click();
  const rawText: string = await page.evaluate('navigator.clipboard.readText()');
  return rawText;
}

