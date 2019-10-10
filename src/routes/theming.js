import React from "react";
import { withTheme } from "styled-components";

import Layout from "components/Layout";
import { useChangeTheme } from "providers";
import { LIGHT } from "styles/theme";

import Switch from "components/Switch";

export const Theming = ({ theme }) => {
  const { mode, toggle } = useChangeTheme();
  console.log(mode, theme);
  return (
    <Layout>
      <Switch
        id="theme"
        name="theme-switch"
        label={`${mode} - 💅`}
        isOn={mode !== LIGHT}
        handleToggle={toggle}
      />
    </Layout>
  );
};

export default withTheme(Theming);
