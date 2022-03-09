import { CA } from "./Contract/Contract.js";

export const get_Logined_Account = async () => {
  // 로그인 되어 있다면 로그인된 주소를 가져오는 함수
  if (typeof window.Klaytn === "undefined") {
    const account = await window.klaytn.enable();
    return account[0];
  } else {
    alert("로그인 해주세요..");
  }
};

export const make_Tx = async (data) => {
  // msg.sender로 동작시킬떄 Transaction객체를 만드는 함수
  const account = await get_Logined_Account().then((a) => {
    return a;
  });

  return {
    from: account,
    to: CA,
    gas: 5000000,
    data: data,
  };
};
