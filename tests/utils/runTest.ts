import type { Page } from '@playwright/test';

import { runCommand } from './runCommand';
import { getTestActions } from './getTestActions';
import { visit } from './visit';

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
    //   case 'compareFiles':
    //     await compareFiles(
    //       step['data-test-path-name'],
    //       step['data-ref-path-name']
    //     );
    //     break;
    //   case 'compareToFile':
    //     await compareToFile(page, step.id, step['data-filepath']);
    //     break;
    //   case 'writeToFile':
    //     await writeToFile(page, step.id, step['data-filepath']);
    //     break;
    //   case 'modifyFile':
    //     await modifyFile(
    //       page,
    //       step.id,
    //       step['data-filepath'],
    //       Number.parseInt(step['data-add-spaces-before']),
    //       step['data-add-spaces-after'],
    //       Number.parseInt(step['data-at-line']),
    //       step['data-remove-lines'],
    //       step['data-use-set-data']
    //     );
    //     break;
    //   case 'clickByRole':
    //     await page
    //       .getByRole(step['data-role'], { name: step['data-element-name'] })
    //       .click();
    //     break;
    //   case 'clickByTestId':
    //     await page.getByTestId(step['data-testid']).click();
    //     break;
    //   case 'clickByLocator':
    //     await clickByLocator(page, step['data-click-by-locator']);
    //     break;
    //   case 'clickByLabel':
    //     await clickByLabel(page, step['data-click-by-label']);
    //     break;
      default:
        console.log('STEP NOT FOUND:', step);
    }
  }
}

  