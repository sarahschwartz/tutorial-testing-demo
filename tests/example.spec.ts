import { test } from '@playwright/test';
import { setupFolders, stopServers } from './utils/setup';
import { runTest } from './utils/runTest';

test('has title', async ({ page, context }) => {
  // SETUP
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await setupFolders('project-folder');

  // TEST
  await runTest(page, 'http://localhost:3000/docs/intro');

  // SHUT DOWN
  stopServers();
});
