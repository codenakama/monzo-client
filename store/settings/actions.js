import * as types from "./actionTypes";

export const setTextColor = color => {
  return { type: types.TEXT_COLOR_SET, color };
};
