import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Nav, Nav_bottom, Service, Mypage, Proposal } from "./components/main";

function App() {
  const [Logined, SetLogined] = useState(
    false || localStorage.getItem("logined")
  );
  const [Address, SetAddress] = useState("");

  useEffect(async () => {
    if (Logined !== null && Logined !== false) {
      const account = await window.klaytn.enable();
      SetAddress(account[0]);
    } else {
      SetAddress("");
    }
  }, [Logined]);
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Nav_bottom />
          <Service />
        </Route>
        <Route path="/MyPage">
          <Mypage />
        </Route>
        <Route path="/Proposal">
          <Proposal />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
