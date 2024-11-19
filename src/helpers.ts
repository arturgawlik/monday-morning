import { readdir } from "node:fs/promises";

export async function listCatalogs(path: string) {
  const folders = await readdir(path);
  return folders;
}
