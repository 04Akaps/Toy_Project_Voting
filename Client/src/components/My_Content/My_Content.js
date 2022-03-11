import React, { useEffect, useState } from "react";
import { Voting_Contract } from "../Contract/Caver";
import { Link } from "react-router-dom";
import { check_time, get_Logined_Account } from "../function";
import "./My_Content.scss";
function My_Content() {
  const [Data, SetData] = useState(false);
  useEffect(async () => {
    const account = await get_Logined_Account();

    Voting_Contract().then(async (method) => {
      const data = await method.view_address_Proposal(account).call();
      SetData(data);
    });
  }, []);

  return (
    <>
      {Data
        ? Data.map((a, index) => {
            const ch = check_time(a.end_time);
            return (
              <div className="Mypage_Content_List" key={index}>
                <Link to={`/detail/:${a.id}`} className="Link">
                  <h2>{a.title}</h2>
                </Link>
                <button className="Mypage_Active_Button">
                  {ch ? "Active" : "End"}
                </button>
              </div>
            );
          })
        : null}
    </>
  );
}

export default My_Content;
