import * as types from "./actionTypes";
import authService from "../../services/authService";

export function login(fish) {
  return async (dispatch, getState) => {
    try {
      authService.login("rj.abreu@outlook.com", "Master1989!");
    } catch (error) {
      console.error(error);
    }
  };
}
