import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  console.log(restaurant);
  return (
    <Link style={{ textDecoration: "none", color: "white" }} to={`/view/${restaurant.id}`}>
      <Card className="m-4">
        <Card.Img variant="top" src={restaurant.photograph} />
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Text>{restaurant.neighborhood}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default RestaurantCard;
