import Immutable from "seamless-immutable";
import * as types from "./actionTypes";

const initialState = Immutable({
  textColor: true
});

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.TEXT_COLOR_SET: {
      return Immutable.merge(state, {
        textColor: action.color
      });
    }

    default:
      break;
  }
  return state;
}
