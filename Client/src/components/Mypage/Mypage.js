import React, { useState } from "react";
import { My_Content, Participate_Content } from "../main";

import "./Mypage.scss";
function Mypage() {
  const [Active2, SetActive2] = useState(false);
  const [Active, SetActive] = useState(true);

  return (
    <div className="Mypage_app">
      <div className="MyPage_container">
        <div className="MyPage_category">
          <ul className="Mypage_ul">
            <div
              className="Mypage_ul_div"
              onClick={() => {
                SetActive(!Active);
                if (Active2) {
                  SetActive2(!Active2);
                }
              }}
            >
              <button
                className={Active ? "Mypage_button change" : "Mypage_button"}
              />
              <li className="Mypage_li">나의 제안</li>
            </div>

            <div
              className="Mypage_ul_div"
              onClick={() => {
                SetActive2(!Active2);
                if (Active) {
                  SetActive(!Active);
                }
              }}
            >
              <button
                className={Active2 ? "Mypage_button change" : "Mypage_button"}
              />
              <li className="Mypage_li">참여한 제안</li>
            </div>
          </ul>
        </div>
        <div className="Mypage_Content">
          {Active ? <My_Content /> : <Participate_Content />}
        </div>
      </div>
    </div>
  );
}

export default Mypage;
