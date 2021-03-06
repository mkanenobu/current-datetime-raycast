import dayjs from "dayjs";
import { copyToClipboard } from "./main";

const main = async () => {
  const now = dayjs().format("YYYY-MM-DD");

  await copyToClipboard(now);
};

export default main;
