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

export const Unix_timestamp = (time) => {
  let date = new Date(time * 1000);
  let year = date.getFullYear();
  let month = "0" + (date.getMonth() + 1);
  let day = "0" + date.getDate();
  let hour = "0" + date.getHours();
  let minute = "0" + date.getMinutes();
  let second = "0" + date.getSeconds();
  return (
    year +
    "-" +
    month.substr(-2) +
    "-" +
    day.substr(-2) +
    " " +
    hour.substr(-2) +
    ":" +
    minute.substr(-2) +
    ":" +
    second.substr(-2)
  );
};

export const timestamp = (time) => {
  let date = new Date(time);
  let year = date.getFullYear();
  let month = "0" + (date.getMonth() + 1);
  let day = "0" + date.getDate();
  let hour = "0" + date.getHours();
  let minute = "0" + date.getMinutes();
  let second = "0" + date.getSeconds();
  return (
    year +
    "-" +
    month.substr(-2) +
    "-" +
    day.substr(-2) +
    " " +
    hour.substr(-2) +
    ":" +
    minute.substr(-2) +
    ":" +
    second.substr(-2)
  );
};

export const check_time = (time) => {
  let real_time = Unix_timestamp(Number(time));

  let date = timestamp(new Date());
  if (date < real_time) {
    return true;
  } else {
    return false;
  }
};
