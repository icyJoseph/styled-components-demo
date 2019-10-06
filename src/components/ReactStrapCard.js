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

const RSCard = ({ avatar, username, bio, profile, name }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <CardImg top src={avatar} alt={username} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>@{username}</CardSubtitle>
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
      </CardBody>
    </Card>
  );
};

export default RSCard;
