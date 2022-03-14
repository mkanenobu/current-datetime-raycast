import { showHUD, Clipboard } from "@raycast/api";

export const copyToClipboard = async (datetimeString: string) => {
  await Clipboard.copy(datetimeString);

  await showHUD(`Copied date to clipboard, ${datetimeString}`);
};
