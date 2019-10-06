import React from "react";

export const BootstrapCard = ({ avatar, username, bio, profile, name }) => (
  <div className="card" style={{ width: "18rem" }}>
    <img src={avatar} className="card-img-top" alt={username} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h6 className="card-subtitle">@{username}</h6>
      <br />
      <p className="card-text">{bio}</p>
      <a
        href={profile}
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        To profile
      </a>
    </div>
  </div>
);

export default BootstrapCard;
