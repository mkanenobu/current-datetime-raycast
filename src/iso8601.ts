import dayjs from "dayjs";
import { copyToClipboard } from "./main";

const main = async () => {
  const now = dayjs().toISOString();
  await copyToClipboard(now)
}

export default main;
