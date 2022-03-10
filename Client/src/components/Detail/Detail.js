import React, { useEffect, useState } from "react";
import { Voting_Contract } from "../Contract/Caver";
import { Unix_timestamp } from "../function";
import "./Detail.scss";

function Detail() {
  const [Data, SetData] = useState(false);
  const idx = window.location.pathname.split(":")[1];

  useEffect(async () => {
    Voting_Contract().then(async (method) => {
      const result = await method.view_Proposal(idx).call();
      SetData(result);
    });
  }, []);
  console.log(Data);
  return (
    <div className="Detail_App">
      {Data ? (
        <>
          <div className="Detail_upper_Container">
            <div className="Upper_Container_div">
              <h2 className="Upper_Conatiner_h2">Detail_Page</h2>
              <div className="Upper_Conatiner_under_div">
                You Can See a Detail Information
              </div>
              <span className="Upper_Container_span">
                주최자 :{Data.Starter_user}
              </span>
              <span className="Upper_Container_span">
                투표수 : {Data.count}
              </span>
              <span className="Upper_Container_span">
                끝나는 시간 :{Unix_timestamp(Data.end_time)}
              </span>
            </div>
          </div>
          <div className="Detail_bottom_Container">
            <div className="Detail_bottom_Content_div">
              <div className="Detail_bottom_Conetnt_upper_div">
                <h2 className="Detail_bottom_Content_h2">Content</h2>
                <div className="Detail_bottom_Conetnt_Content">
                  {Data.content}
                </div>
              </div>
              <div className="Detail_bottom_Conetnt_bottom_div">
                <h2 className="Detail_bottom_Content_h2">Voting_User</h2>
                <div className="Deatil_bottom_Conent_Voting_User">
                  {Data.aggred_User.length === 0
                    ? "null"
                    : Data.aggred_User.map((a) => {
                        return <p>a</p>;
                      })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default Detail;
