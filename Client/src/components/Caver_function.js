import { Voting_Contract } from "./Contract/Caver";

export const check_Personal_Proposal_amount = async () => {
  // 진행중인 제안이 3개 이상인지 확인하는 함수
  let amount = Voting_Contract().then(async (method) => {
    return await method.check_Personal_Proposal_amount().call();
  });

  if (amount < 3) {
    return true;
  } else {
    false;
  }
};
