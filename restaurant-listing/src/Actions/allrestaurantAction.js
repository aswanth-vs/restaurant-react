import axios from "axios";
import { FAIL, SUCCESS } from "../constants/allrestaurantConstant";

//logic for updating state
export const RestaurantListAction = () => async (dispatch) => {
  try {
    //api call
    const base_url = "http://localhost:4000";
    const { data } = await axios.get(`${base_url}/restaurants`);
    // console.log(data);
    //need to add type so that the reducer can determine which is success and fail
    dispatch({
      type: SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      payload: error,
      type: FAIL,
    });
  }
};
