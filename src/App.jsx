import logo from "./logo.svg";

import "./App.scss";
import Nav from "../src/components/Nav";
import Main from "../src/components/Main";
import { Fragment } from "react";
import AppRoutes from "./AppRoutes";
import LayOutComponent from "./Layout/LayOutComponent";

const App = () => {
  console.log("Render app ");
  return (
    <div className="outerWrap">
      <div className="App">
        <LayOutComponent>
          <AppRoutes />
        </LayOutComponent>
      </div>
      <div className="musicControls">Music controls</div>
    </div>
  );
};

export default App;
