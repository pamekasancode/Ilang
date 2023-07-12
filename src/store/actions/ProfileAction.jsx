import { BASE_API } from "../../utils/Constant";
import { ProfileType } from "../types/ProfileType";

export const getDataProfile = (id) => async (dispatch) => {
  dispatch({ type: ProfileType.BEFORE_STATE });
  return await fetch(`${BASE_API}/user/profile/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((response) => {
      return dispatch({
        type: ProfileType.SET_PROFILE,
        payload: { profile: response.data },
      });
    });
};

export const getPostProfile = (id, page) => async (dispatch) => {
  return await fetch(`${BASE_API}/user/profile/${id}/post?page=${page}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((response) => {
      dispatch({
        type: ProfileType.SET_POSTS,
        payload: { posts: response.data },
      });
      if (response.links.next === null) {
        dispatch({ type: ProfileType.STOP_LOADING });
      }
    });
};
