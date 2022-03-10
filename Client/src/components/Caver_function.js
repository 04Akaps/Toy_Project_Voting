import { Voting_Contract } from "./Contract/Caver.js";

export const check_Personal_Proposal_amount = async () => {
  // 진행중인 제안이 3개 이상인지 확인하는 함수
 const amount = await Voting_Contract().then(async (method) => {
    const result  =  await method.check_Personal_Proposal_amount().call();
    return result;
  });

  return amount
};
