import React, { useState } from "react";
import "./Proposal.scss";
function Proposal() {
  const [Title, SetTitle] = useState("");
  const [Types, SetTypes] = useState("");
  const [Content, SetContent] = useState("");
  const Submit = async () => {
    if (Title.length === 0 || Types.length === 0 || Content.length === 0) {
      alert("모든 항목을 확인하고 입력해 주세요");
    } else {
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
        <button className="Proposal_button" onClick={Submit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Proposal;
