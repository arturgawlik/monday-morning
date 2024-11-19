import { checkbox, select } from "@inquirer/prompts";

type Actions = "fire-vscodes" | "refresh-repos";

export async function askActionTake(): Promise<Actions> {
  const action = await select({
    message: "What you want to do",
    choices: [
      {
        name: "fire vs-code's",
        value: "fire-vscodes",
      },
      {
        name: "refresh repo's",
        value: "refresh-repos",
      },
    ],
  });
  return action as Actions;
}

export async function askCatalogsToChoose(
  catalogOptions: string[]
): Promise<string[]> {
  const choices = catalogOptions.map((v) => ({ name: v, value: v }));
  const chhosedCatalogs = await checkbox({
    message: "Where you want to do",
    choices,
  });
  return chhosedCatalogs;
}
