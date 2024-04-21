import { test } from '@playwright/test';
import { setupFolders, startServers, stopServers } from './utils/setup';
import { runTest } from './utils/runTest';

test('has title', async ({ page, context }) => {
  // SETUP
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await setupFolders('project-folder');
  await startServers(page);

  // TEST
  await runTest(page, 'http://localhost:3000/docs/intro');

  // SHUT DOWN
  stopServers();
});
