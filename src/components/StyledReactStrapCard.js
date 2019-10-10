import React from "react";
import styled, { css } from "styled-components";

import {
  Card as RSCard,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  Button as RSButton
} from "reactstrap";

const mixin = css`
  color: ${({ theme }) => theme.fontColor};
`;

const Button = styled(RSButton)`
  background: ${({ theme }) => theme.primary};
`;

const Card = styled(RSCard)`
  background: ${({ theme }) => theme.gray};
`;

Card.Title = styled(CardTitle)`
  ${mixin}
`;

Card.Subtitle = styled(CardSubtitle)`
  ${mixin}
`;

Card.Body = styled(CardBody)`
  ${mixin}
`;

Card.Text = styled(CardText)`
  ${mixin}
`;

export const StyledRSCard = ({ avatar, username, bio, profile, name }) => {
  return (
    <Card style={{ width: "14rem" }}>
      <CardImg top src={avatar} alt={username} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>@{username}</Card.Subtitle>
        <CardText>{bio}</CardText>
        <Button
          tag="a"
          color="primary"
          href={profile}
          target="_blank"
          rel="noopener noreferrer"
        >
          To Profile
        </Button>
      </Card.Body>
    </Card>
  );
};

export default StyledRSCard;
