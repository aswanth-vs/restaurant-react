import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import RestOp from "./RestOp";
import RestReview from "./RestReview";

function ViewRestaurant() {
  const base_url = "http://localhost:4000";
  const { id } = useParams();
  //state
  const [restaurant, setRestaurant] = useState({});
  const fetchData = async () => {
    const { data } = await axios.get(`${base_url}/restaurants/${id}`);

    setRestaurant(data);
  };
  console.log(restaurant);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {restaurant && (
        <Row className="p-5">
          <Col sm={12} md={3}>
            {/* image */}
            <Image className="rounded border p-1" src={`${restaurant?.photograph}`} fluid />
          </Col>
          <Col md={1}></Col>
          <Col md={8}>
            <h2>{restaurant?.name} </h2>
            <h6>{restaurant?.neighborhood}</h6>
            <ListGroup>
              <ListGroup.Item>Cuisine : {restaurant?.cuisine_type}</ListGroup.Item>
              <ListGroup.Item>
                <RestOp op={restaurant?.operating_hours} />
              </ListGroup.Item>
              <ListGroup.Item>
                <RestReview reviews={restaurant?.reviews} />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
}

export default ViewRestaurant;
