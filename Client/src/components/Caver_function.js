import { caver, Voting_Contract } from "./Contract/Caver.js";
import { check_time, make_Tx } from "./function.js";
import dotenv from "dotenv";
dotenv.config();

const KEY = process.env.REACT_APP_Key;
const FeePayer = process.env.REACT_APP_FeePayer;

export const check_Personal_Proposal_amount = async () => {
  // 진행중인 제안이 3개 이상인지 확인하는 함수
  const amount = await Voting_Contract().then(async (method) => {
    const result = await method.check_Personal_Proposal_amount().call();
    return result;
  });

  return amount;
};

export const check_time_for_delete = async () => {
  Voting_Contract().then(async (method) => {
    const data = await method.view_total_Proposal().call();

    for (let i = 0; i < data.length; i++) {
      if (!check_time(data[i].end_time)) {
        let delete_data = method.done_Proposal(data[i].id).encodeABI();
        let tx = await make_Tx(delete_data);
        
        /*
          사실 이 부분은 tx에서 값을 따오지 않고 바로 data[i]에서 값을 따와도 됩니다.

          이렇게 작성한 이유는 제가 이런식으로 작성을 하였고 후에 다시 생각을 해보니 이런 부분이 수정되었으면 좋겠다는 생각이 들어서 기록하기 위해서 이런방향으로 작성을 하였습니다.
        */

        const { rawTransaction: senderRawTransaction } =
          await caver.klay.accounts.signTransaction(
            {
              type: "FEE_DELEGATED_SMART_CONTRACT_EXECUTION",
              from: tx.from,
              to: tx.to,
              gas: tx.gas,
              data: tx.data,
            },
            KEY
          );

        await caver.klay.sendTransaction({
          senderRawTransaction: senderRawTransaction,
          feePayer: FeePayer,
        });
      }
    }
  });
};
