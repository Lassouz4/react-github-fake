import React, { Component } from "react";
import axios from "axios";
import "./style.css";
class Header extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.getDataHeader();
  }
  getDataHeader = async () => {
    const response = await axios.get("https://api.github.com/orgs/reactjs");
    this.setState({ data: response.data });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="header">
        <img src={data.avatar_url} alt="logo_github" className="avatar" />
        <div className="title-desc">
          <h1 className="header-name">{data.name}</h1>
          <p className="header-description">{data.description}</p>
        </div>
      </div>
    );
  }
}

export default Header;
