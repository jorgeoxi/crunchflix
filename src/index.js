import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import List from "./containers/List";

import "bootswatch/dist/sandstone/bootstrap.min.css";

const App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="/" className="navbar-brand">
            CrunchFlix
          </a>
      </nav>
      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
      </main>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
