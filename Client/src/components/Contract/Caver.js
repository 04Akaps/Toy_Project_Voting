import Caver from "caver-js";
import { abi, CA } from "./Contract.js";

export const caver = new Caver(window.klaytn);

export const Voting_Contract = async () => {
  return await new caver.klay.Contract(abi, CA).methods;
};
