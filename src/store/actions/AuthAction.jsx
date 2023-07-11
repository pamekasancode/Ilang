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
        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("profile", JSON.stringify(response.data));
        return dispatch({ type: AuthType.AUTHENTICATED });
      }
      return dispatch({ type: AuthType.LOGIN_INVALID });
    });
};

export const SingnUp = (form) => async (dispatch) => {
  return await fetch(`${BASE_API}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then((r) => r.json())
    .then((response) => {
      if (response.message === "Register Success") {
        return dispatch({ type: AuthType.REGISTERED });
      } else if (response.message === "Register Fail") {
        return dispatch({ type: AuthType.FAIL_REGISTER });
      }
      return dispatch({
        type: AuthType.ERROR_REGISTER,
        payload: { errorRegister: response.message },
      });
    });
};
