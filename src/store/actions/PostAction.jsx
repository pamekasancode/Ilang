import { BASE_API } from "../../utils/Constant";
import { PostType } from "../types/PostType";

export const getData = (category, page) => async (dispatch) => {
  dispatch({ type: PostType.BEFORE_STATE });
  return await fetch(`${BASE_API}/post/${category}?page=${page}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((response) => {
      dispatch({ type: PostType.SET_DATA, payload: { data: response.data } });
      if (response.links.next === null) {
        dispatch({ type: PostType.STOP_LOADING });
      }
    });
};
