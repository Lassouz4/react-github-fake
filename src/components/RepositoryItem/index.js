import React from "react";
import "./style.css";

const RepositoryItem = ({ repo }) => (
  <li className="repository-item">
    <h2 className="title-blue">{repo.name}</h2>
    <p className="description">{repo.description}</p>
  </li>
);

export default RepositoryItem;
