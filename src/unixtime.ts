import dayjs from "dayjs";
import {copyToClipboard} from "./main";

const main = async () => {
  const now = dayjs().unix().toString();

  await copyToClipboard(now)
}

export default main;
