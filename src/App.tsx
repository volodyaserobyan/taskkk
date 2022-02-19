import React from "react";
import { Router, Redirect, RouteComponentProps } from "@reach/router";

import WrapperContainer from "./containers/WrapperContainer";

import "./App.scss";

const App: React.FC = () => {
  const WrapperContainerWithProps = (_: RouteComponentProps) => (
    <WrapperContainer />
  );

  return (
    <div className="App">
      <Router>
        <WrapperContainerWithProps path="/" />
        <WrapperContainerWithProps path="/:id" />
        {/* <Redirect from="*" to="category/1" noThrow /> */}
      </Router>
    </div>
  );
};

export default App;
