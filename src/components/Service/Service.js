import { Button } from "@mui/material";
import React from "react";

import "./Service.scss";
function Service() {
  return (
    <div className="Service_App">
      <h2>Total_Proposal_List</h2>
      <div className="Service_App_div">
        투표수가 10회 이상이면 투표가 불가능 합니다!
      </div>
      <div className="Service_container">
        <div className="Service_container_list">
          // 1
          <div className="Proposals_app">
            <h3 className="Proposal_title">Title</h3>
            <div className="Proposal_name">주최자</div>
            <div className="Proposal_button_div">
              <button className="Proposal_button">Vote NoW</button>
              <div className="Proposal_type">항목</div>
              <div className="Proposal_deep">상세보기</div>
            </div>
          </div>
          // 2
        </div>
      </div>
    </div>
  );
}

export default Service;
