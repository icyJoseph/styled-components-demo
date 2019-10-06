import React from "react";
import {
  Card,
  Content,
  Heading,
  Image,
  Media
} from "react-bulma-components";

export const RBCoCard = ({ avatar, username, bio, profile, name }) => (
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

export default RBCoCard;
