import { BASE_API } from "../../utils/Constant";
import { PostType } from "../types/PostType";

export const getData = (category, page) => async (dispatch) => {
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

export const createPostData = (form, token) => async (dispatch) => {
  dispatch({type: PostType.BEFORE_STATE})
  return await fetch(`${BASE_API}/post/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(form),
  })
    .then((r) => r.json())
    .then((response) => {
      if (response.message === "Data Has Been Created") {
        return dispatch({ type: PostType.CREATED });
      } else if (response.message === "Authentication Fail") {
        return dispatch({ type: PostType.CREATE_FAIL });
      } else {
        return dispatch({
          type: PostType.ERROR_CREATE,
          payload: { createError: response.message },
        });
      }
    });
};
