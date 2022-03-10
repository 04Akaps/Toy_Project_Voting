import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Voting_Contract } from "../Contract/Caver";
import { make_Tx, Unix_timestamp } from "../function";
import { caver } from "../Contract/Caver";
import { Link } from "react-router-dom";

import "./Service.scss";
function Service() {
  const [Data, SetData] = useState(null);

  useEffect(() => {
    Voting_Contract().then(async (method) => {
      await method
        .view_total_Proposal()
        .call()
        .then((result) => {
          SetData(result);
        });
    });
  }, []);

  const Vote_Now = async (index) => {
    Voting_Contract().then(async (method) => {
      const result = await method.view_Proposal(index).call();
      if (result.aggred_User.length > 10) {
        alert("이미 10명이 동의를 하였습니다.");
      } else {
        try {
          let data = method.upgrade_proposal(index).encodeABI();
          let tx = await make_Tx(data);
          await caver.klay.sendTransaction(tx);
        } catch {
          alert("트랜잭션 취소 및 실패");
        }
      }
    });
  };

  return (
    <div className="Service_App">
      <h2>Total_Proposal_List</h2>
      <div className="Service_App_div">
        투표수가 10회 이상이면 투표가 불가능 합니다!
        <p> 자기 자신도 투표가 불가능 합니다.</p>
      </div>
      <div className="Service_container">
        <div className="Service_container_list">
          {Data === null ? (
            "데이터 가져오는중.."
          ) : (
            <>
              {Data.map((a, index) => {
                return (
                  <div className="Proposals_app" key={index}>
                    <h3 className="Proposal_title">{a.title}</h3>
                    <div className="Proposal_name">
                      주최자 : {a.Starter_user}
                    </div>
                    <div className="Proposal_time">
                      종료시간 : {Unix_timestamp(a.end_time)}
                    </div>
                    <div className="Proposal_button_div">
                      <button
                        className="Proposal_button"
                        onClick={() => {
                          Vote_Now(a.id);
                        }}
                      >
                        Vote NoW
                      </button>
                      <div className="Proposal_type">{a.types}</div>
                      <Link to={`/detail/:${a.id}`} className="Link">
                        <div className="Proposal_deep">상세보기</div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Service;
