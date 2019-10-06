import React, { useState } from "react";

import BootstrapCard from "components/BootstrapCard";
import BulmaCard from "components/BulmaCard";
import RSCard from "components/ReactStrapCard";
import RBCoCard from "components/RBCoCard";
import Layout from "components/Layout";
import Search from "components/Search";

import useGitHub from "hooks/github";

export const Cards = () => {
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
          <BootstrapCard {...userProps} />
        </Layout.Element>
        <Layout.Element>
          <BulmaCard {...userProps} />
        </Layout.Element>
      </Layout>
      <Layout reverse>
        <Layout.Element>
          <RSCard {...userProps} />
        </Layout.Element>
        <Layout.Element>
          <RBCoCard {...userProps} />
        </Layout.Element>
      </Layout>
    </>
  );
};

export default Cards;
