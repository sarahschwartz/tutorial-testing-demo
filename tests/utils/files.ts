import { writeFileSync } from "node:fs";
import { clickCopyButton } from "./button";
import type { Page } from "@playwright/test";

export async function writeToFile(
    page: Page,
    buttonName: string,
    filePath: string
  ) {
    const content = await clickCopyButton(page, buttonName);
    writeFileSync(filePath, `${content}\n\n`);
  }