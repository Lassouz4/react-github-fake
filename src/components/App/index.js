import React from "react";
import "./style.css";

import Header from "../Header/";
import RepositoryList from "../RepositoryList/";

const App = () => (
  <div className="app">
    <Header />
    <RepositoryList />
  </div>
);

export default App;
