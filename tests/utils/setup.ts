import { execSync } from 'child_process';
import fs from 'fs';

export function stopServers() {
  const isRunning = checkIfServersRunning();
  if (isRunning) {
    console.log('STOPPING SERVERS');
    // stop & delete pm2 servers
    const STOP_SERVERS = 'pnpm pm2 delete all';
    execSync(STOP_SERVERS, {
      encoding: 'utf-8',
    });
    console.log('DONE STOPPING SERVERS');
  }
}

export function checkIfServersRunning() {
  try {
    const output = execSync('pm2 list --no-color').toString();
    return output.includes('online');
  } catch (error) {
    console.error('Error checking PM2 servers:', error);
    return false;
  }
}

export async function setupFolders(projectFolder: string) {
  console.log('SETTING UP FOLDERS');
  fs.mkdirSync('tests-output', { recursive: true });
  const projectPath = `tests-output/${projectFolder}`;
  if (fs.existsSync(projectPath)) {
    await fs.promises.rm(projectPath, {
      recursive: true,
      force: true,
    });
  }
}
