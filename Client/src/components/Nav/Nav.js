import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Nav.scss";
function Nav() {
  const [Status, SetStatus] = useState(
    false || localStorage.getItem("logined")
  );

  const Login_To_KaiKas = async () => {
    if (typeof window.Klaytn === "undefined") {
      await window.klaytn.enable();
      window.localStorage.setItem("logined", true);
      SetStatus(!Status);
    } else {
      alert("KaiKas가 실행중에 있습니다.");
    }
  };

  const Logout = () => {
    window.localStorage.removeItem("logined");
    console.log(window.localStorage.getItem("logined"));
    SetStatus(!Status);
  };

  return (
    <div className="Nav">
      <Link to="/" className="Link">
        <Button variant="contained">Voting_Site</Button>
      </Link>

      <div className="Nav_button">
        <Link to="/MyPage" className="Link">
          <Button variant="contained">My_Page</Button>
        </Link>
        {Status ? (
          <Button variant="contained" onClick={Logout}>
            Logout
          </Button>
        ) : (
          <Button variant="contained" onClick={Login_To_KaiKas}>
            Connect Wallet
          </Button>
        )}

        <Button
          variant="text"
          href="https://baobab.wallet.klaytn.com/access?next=faucet"
          target="_blank"
        >
          Get Klay
        </Button>
      </div>
    </div>
  );
}

export default Nav;
