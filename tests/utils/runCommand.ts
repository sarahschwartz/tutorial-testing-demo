import { Page } from "@playwright/test";
import { execSync } from "node:child_process";
import { clickCopyButton } from "./button";

export async function runCommand(
    page: Page,
    buttonName: string,
    goToFolder: string = 'tests-output',
    preCommand?: string
  ) {
    const copied = await clickCopyButton(page, buttonName);
    console.log('COPIED', copied);
    let command = copied;
    if (preCommand) {
      if (preCommand.includes('<COMMAND>')) {
        command = preCommand.replace('<COMMAND>', copied);
      } else {
        command = preCommand + copied;
      }
    }
    if (goToFolder) {
      command = `cd ${goToFolder} && ${command}`;
    }
    console.log('COMMAND', command);
    const commandOutput = execSync(command, {
      encoding: 'utf-8',
    });
    console.log('COMMAND OUTPUT', commandOutput);
  }