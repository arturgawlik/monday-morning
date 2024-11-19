import { exec } from "node:child_process";

const CODE_COMMAND = "git pull";

export function callGitPull(path: string) {
  exec(`${CODE_COMMAND} ${path}`);
}
