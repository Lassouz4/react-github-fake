import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import RepositoryItem from "../RepositoryItem/";

class RepositoryList extends Component {
  state = {
    repos: []
  };

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const response = await axios.get(
      "https://api.github.com/orgs/reactjs/repos"
    );
    this.setState({ repos: response.data });
  };

  render() {
    const { repos } = this.state;
    return (
      <div className="repository-list">
        {repos.map(el => (
          <ul className="list" key={el.id}>
            <RepositoryItem repo={el} />
          </ul>
        ))}
      </div>
    );
  }
}

export default RepositoryList;
