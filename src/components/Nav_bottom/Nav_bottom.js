import { Link } from "react-router-dom";
import React from "react";
import "./Nav_bottom.scss";
function Nav_bottom() {
  return (
    <div className="Nav_bottom_app">
      <div className="Nav_bottom_container">
        <h3 className="Nav_bottom_h2">Voting</h3>
        <div className="Nav_bottom_explain">
          Have your say in the future of the Block_Chain Using Klaytn!
        </div>
        <Link to="/Proposal">
          <button className="Nav_bottom_button">Make a Proposal</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav_bottom;
