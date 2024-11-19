import { exec } from "node:child_process";

const CODE_COMMAND = "code-insiders";

export function spawnVsCode(path: string) {
  exec(`${CODE_COMMAND} ${path}`);
}
