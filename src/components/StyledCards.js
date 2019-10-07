import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import styled from "styled-components";

const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.primary};
`;

const StyledCard = styled(Card)``;

StyledCard.Img = styled(CardImg)``;

StyledCard.Body = styled(CardBody)`
  background: ${({ theme }) => theme.gray};
`;

StyledCard.Title = styled(CardTitle)`
  color: ${({ theme }) => theme.fontColor};
`;
StyledCard.Subtitle = styled(CardSubtitle)`
  color: ${({ theme }) => theme.fontColor};
`;
StyledCard.Text = styled(CardText)`
  color: ${({ theme }) => theme.fontColor};
`;

export const StyledRSCard = ({ avatar, username, bio, profile, name }) => {
  return (
    <StyledCard style={{ width: "14rem" }}>
      <StyledCard.Img top src={avatar} alt={username} />
      <StyledCard.Body>
        <StyledCard.Title>{name}</StyledCard.Title>
        <StyledCard.Subtitle>@{username}</StyledCard.Subtitle>
        <StyledCard.Text>{bio}</StyledCard.Text>
        <StyledButton
          tag="a"
          color="primary"
          href={profile}
          target="_blank"
          rel="noopener noreferrer"
        >
          To Profile
        </StyledButton>
      </StyledCard.Body>
    </StyledCard>
  );
};

export default StyledRSCard;
