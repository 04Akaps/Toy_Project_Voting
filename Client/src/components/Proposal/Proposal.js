import React, { useState } from "react";
import { check_Personal_Proposal_amount } from "../Caver_function";
import { Voting_Contract } from "../Contract/Caver";
import { make_Tx } from "../function";

import "./Proposal.scss";
function Proposal() {
  const [Title, SetTitle] = useState("");
  const [Types, SetTypes] = useState("");
  const [Content, SetContent] = useState("");

  const [errorMessage, SetErrorMessage] = useState("");
  const [check, SetCheck] = useState(true);

  let ch_Submit = () => {
    if (Title.length === 0 || Types.length === 0 || Content.length === 0) {
      SetErrorMessage("모든 항목을 확인하고 입력해 주세요");
      SetCheck(false);
    } else if (Types.length >= 5) {
      SetErrorMessage("Types의 길이는 5자리 아래만 가능합니다.");
      SetCheck(false);
    } else if (Title.length >= 10) {
      SetErrorMessage("Title의 길이는 10자리 아래여야 합니다.");
      SetCheck(false);
    } else {
      SetCheck(true);
      SetErrorMessage("");
    }
  };
  const Submit = async () => {
    await ch_Submit();

    if (check) {
      if (check_Personal_Proposal_amount()) {
        // True라면 생성이 가능
        // 왜냐하면 자신이 내놓은 제안중 아직 처리되지 않은 제안은 3가지로 한정지어놓을 것이기 떄문에
        Voting_Contract().then(async (method) => {
          let data = method.make_proposal(Title, Types, Content).encodeABI();
          let tx = await make_Tx(data);
          // await caver.klay.sendTransaction(tx);
        });
      } else {
        alert("이미 진행중인 제안이 3개 존재 합니다.");
      }

      // check를 통과함
    }
  };
  return (
    <div className="Proposal_app">
      <div className="Proposal_container">
        <div className="Proposal_Title_div">
          <h2>Title</h2>
          <input
            type="text"
            className="Proposal_input"
            placeholder="제목을 입력해 주세요!"
            onChange={(e) => {
              SetTitle(e.target.value);
            }}
          />
        </div>
        <div className="Proposal_Types_div">
          <h2>types</h2>
          <input
            type="text"
            className="Proposal_input_types"
            placeholder="주제를 설정해 주세요!"
            onChange={(e) => {
              SetTypes(e.target.value);
            }}
          />
        </div>
        <div className="Proposal_Content_div">
          <h2>content</h2>
          <textarea
            className="Proposal_textarea"
            placeholder="내용을 입력해 주세요!"
            spellCheck="false"
            onChange={(e) => {
              SetContent(e.target.value);
            }}
          />
        </div>
        {check ? null : <div className="errorMessage">{errorMessage}</div>}

        <button className="Proposal_button" onClick={Submit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Proposal;
