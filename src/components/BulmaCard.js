import React from "react";

export const BulmaCard = ({ avatar, username, profile, bio, name }) => (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={avatar} alt={username} />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">@{username}</p>
        </div>
      </div>

      <div className="content">{bio}</div>
    </div>
    <footer className="card-footer">
      <a href={profile} className="card-footer-item">
        To Profile
      </a>
    </footer>
  </div>
);
