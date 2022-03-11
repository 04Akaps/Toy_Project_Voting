import React, { useEffect, useState } from "react";
import { Voting_Contract } from "../Contract/Caver";
import { check_time, get_Logined_Account } from "../function";
import { Link } from "react-router-dom";

import "./Participate_Content.scss";
function Participate_Content() {
  const [Data, SetData] = useState(false);

  useEffect(async () => {
    const account = await get_Logined_Account();
    Voting_Contract().then(async (method) => {
      await method
        .view_participate_Proposal(account)
        .call()
        .then((result) => {
          SetData(result);
        });
    });
  }, []);
  return (
    <div className="Participate_app">
      {Data === false
        ? null
        : Data.map((a, index) => {
            const ch = check_time(a.end_time);
            return (
              <div className="Participate_container" key={index}>
                <Link to={`/detail/:${a.id}`} className="Link">
                  <h2>{a.title}</h2>
                </Link>

                <button className="Participate_button">
                  {ch ? "Active" : "End"}
                </button>
              </div>
            );
          })}
    </div>
  );
}

export default Participate_Content;
