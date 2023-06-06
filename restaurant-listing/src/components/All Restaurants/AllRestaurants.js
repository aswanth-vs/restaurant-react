import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import RestaurantCard from "../RestaurantCard";
import { RestaurantListAction } from "../../Actions/allrestaurantAction";
import { useDispatch, useSelector } from "react-redux";

function AllRestaurants() {
  //to dispatch action
  const dispatch = useDispatch();

  // const [restaurants, setrestaurants] = useState([]);
  // const base_url = "http://localhost:4000";
  //code for api call
  // const fetchData = async () => {
  //   const response = await axios.get(`${base_url}/restaurants`);

  //   setrestaurants(response.data);
  // };

  useEffect(() => {
    dispatch(RestaurantListAction());
  }, []);

  //select updated state from store
  const { allrestaurants } = useSelector((state) => state.allrestaurantReducer);
  console.log(allrestaurants);
  return (
    <Row>
      {allrestaurants.map((restaurant) => (
        <Col key={restaurant.id} sm={12} md={6} lg={4} xl={3}>
          <RestaurantCard restaurant={restaurant} />
        </Col>
      ))}
    </Row>
  );
}

export default AllRestaurants;
