// @flow
import actionsType from "./actionsType";
import UserApi from "../api/UserApi";
import { type Dispatch } from "redux";

export function login(email: string, password: string): Function {
  return (dispatch: Dispatch) => {
    dispatch({ type: actionsType.LOADING_LOGIN });

    return UserApi.login(email, password)
      .then(({ data }) => {
        let { success, message, token, user } = data;

        if (!success) {
          throw data;
        }

        if (success) {
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem("user", JSON.stringify(user));
        }

        dispatch(loginSuccess(success, message, user));
      })
      .catch(({ success, message }) => {
        dispatch(loginError(success, message, {}));
      });
  };
}

export function logout(): Function {
  return (dispatch: Dispatch) => {
    return UserApi.logout().then(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("state");
      dispatch(logoutSuccess());
    });
  };
}

export function loginSuccess(
  success: boolean,
  message: ?string,
  user: Object
): Object {
  return {
    type: actionsType.LOGIN_SUCCESS,
    success: success,
    message: message,
    user
  };
}

export function loginError(
  success: boolean,
  message: string,
  user: Object
): Object {
  return {
    type: actionsType.LOGIN_ERROR,
    success: success,
    message: message,
    user
  };
}

export function logoutSuccess(): Object {
  return { type: actionsType.LOGOUT_SUCCESS };
}
