import React, { useState } from "react";

import BootstrapCard from "components/BootstrapCard";
import BulmaCard from "components/BulmaCard";
import RSCard from "components/ReactStrapCard";
import RBCoCard from "components/RBCoCard";

import StyledRSCard from "components/StyledReactStrapCard";
import StyledRBCoCard from "components/StyledRBCoCard";

import Layout from "components/Layout";
import Search from "components/Search";
import Tabs from "components/Tabs";

import useGitHub from "hooks/github";

export const Cards = () => {
  const [username, changeUsername] = useState("icyJoseph");
  const { data } = useGitHub({ username });

  return (
    <>
      <Search handleSubmit={changeUsername} />
      <Tabs>
        <Layout reverse name="HTML + CSS">
          <Layout.Element>
            <BootstrapCard {...data} />
          </Layout.Element>
          <Layout.Element>
            <BulmaCard {...data} />
          </Layout.Element>
        </Layout>
        <Layout name="NPM">
          <Layout.Element>
            <RSCard {...data} />
          </Layout.Element>
          <Layout.Element>
            <RBCoCard {...data} />
          </Layout.Element>
        </Layout>
        <Layout name="Styled">
          <Layout.Element>
            <StyledRSCard {...data} />
          </Layout.Element>
          <Layout.Element>
            <StyledRBCoCard {...data} />
          </Layout.Element>
        </Layout>
      </Tabs>
    </>
  );
};

export default Cards;
