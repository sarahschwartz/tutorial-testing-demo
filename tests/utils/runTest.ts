import type { Page } from '@playwright/test';

import { runCommand } from './runCommand';
import { getTestActions } from './getTestActions';
import { visit } from './visit';
import { writeToFile } from './files';
import { findText, clickButtonByText } from './button';

export async function runTest(
  page: Page,
  url: string
) {
  await visit(page, url);
  console.log('GETTING TEST ACTIONS');
  const steps: any[] = await getTestActions(page);

  console.log('STARTING TEST');
  for (const step of steps) {
    console.log('STEP:', step);
    await page.waitForTimeout(1000);
    switch (step['data-name']) {
      case 'runCommand':
          await runCommand(
            page,
            step.id,
            step['data-command-folder'],
            step['data-pre-command']
          );
        break;
      case 'goToUrl':
        await visit(page, step['data-url']);
        break;
      case 'wait':
        await page.waitForTimeout(Number.parseInt(step['data-timeout']));
        break;
      case 'writeToFile':
        await writeToFile(page, step.id, step['data-filepath']);
        break;
      case 'clickButtonFromText':
        await clickButtonByText(page, step['data-button-text']);
        break;
      case 'findText':
        await findText(page, step['data-find-text']);
        break;
      default:
        console.log('STEP NOT FOUND:', step);
    }
  }
}

  