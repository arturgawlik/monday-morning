import { cwd } from "node:process";
import { join } from "node:path";

import * as helper from "./helpers.ts";
import * as cli from "./cli-helpers.ts";
import { spawnVsCode } from "./vscode-helpers.ts";
import { callGitPull } from "./git-helpers.ts";

const CWD = cwd();

const action = await cli.askActionTake();
const allCatalogs = await helper.listCatalogs(CWD);
const catalogs = await cli.askCatalogsToChoose(allCatalogs);
const catalogsFullPaths = catalogs.map((v) => join(CWD, v));

if (action === "fire-vscodes") {
  for (const catalog of catalogsFullPaths) {
    spawnVsCode(catalog);
  }
}

if (action === "refresh-repos") {
  for (const catalog of catalogsFullPaths) {
    callGitPull(catalog);
  }
}
