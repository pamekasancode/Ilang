import { BASE_API } from "../../utils/Constant";
import { AuthType } from "../types/AuthType";

export const SignIn = (form) => async (dispatch) => {
  return await fetch(`${BASE_API}/user/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then((r) => r.json())
    .then((response) => {
      if (response.message === "Authentication Success") {
        sessionStorage.setItem("token", response.token)
        return dispatch({ type: AuthType.AUTHENTICATED });
      } 
       return dispatch({ type: AuthType.LOGIN_INVALID });
    });
};
