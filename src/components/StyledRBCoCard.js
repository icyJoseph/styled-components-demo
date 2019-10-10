import React from "react";
import {
  Card as BCard,
  Content as BContent,
  Heading as BHeading,
  Image,
  Media
} from "react-bulma-components";

import styled, { css } from "styled-components";

const background = css`
  background: ${({ theme }) => theme.gray};
`;

const fontColor = css`
  color: ${({ theme }) => theme.fontColor};
`;

const Card = styled(BCard)`
  ${background}
`;

Card.Footer = styled(BCard.Footer)`
  background: ${({ theme }) => theme.primary};
`;

const Content = styled(BContent)`
  ${background}
  ${fontColor}
`;

const Heading = styled(BHeading)`
  ${fontColor}
`;

export const StyledRBCoCard = ({ avatar, username, bio, profile, name }) => (
  <Card>
    <Card.Content>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image size={64} alt={username} src={avatar} />
        </Media.Item>
        <Media.Item>
          <Heading size={4}>{name}</Heading>
          <Heading subtitle size={6}>
            @{username}
          </Heading>
        </Media.Item>
      </Media>
      <Content>{bio}</Content>
    </Card.Content>
    <Card.Footer>
      <Card.Footer.Item renderAs="a" href={profile} rel="noopener noreferrer">
        To Profile
      </Card.Footer.Item>
    </Card.Footer>
  </Card>
);

export default StyledRBCoCard;
