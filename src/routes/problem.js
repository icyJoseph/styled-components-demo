import React, { useState } from "react";
import { BootstrapCard } from "components/BootstrapCard";
import { BulmaCard } from "components/BulmaCard";

import { Layout } from "components/Layout";

import useGitHub from "hooks/github";
import Search from "components/Search";

export const Problem = () => {
  const [username, changeUsername] = useState("icyJoseph");
  const { data } = useGitHub({ username });

  const {
    avatar_url: avatar,
    html_url: profile,
    login,
    bio,
    company,
    location,
    name,
    followers
  } = data;
  const userProps = {
    avatar,
    profile,
    username: login,
    bio,
    company,
    location,
    name,
    followers
  };
  return (
    <>
      <Search handleSubmit={changeUsername} />
      <Layout>
        <Layout.Element>
          <div>
            <BootstrapCard {...userProps} />
          </div>
        </Layout.Element>
        <Layout.Element>
          <div>
            <BulmaCard {...userProps} />
          </div>
        </Layout.Element>
      </Layout>
    </>
  );
};

export default Problem;
