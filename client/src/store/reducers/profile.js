import update from "immutability-helper";

import { LOGOUT } from "../actions";
import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE
} from "../actions/apiProfileActions";

export const INITIAL_STATE = {
  profile: {
    id: "",
    name: "",
    email: "",
    phone: "",
    avatarUrl: "",
    companyName: "",
    companyStreet: "",
    companyCity: "",
    companyState: "",
    companyZip: ""
  },
  error: null
};

function profile(state = INITIAL_STATE, action) {
  let error;

  switch (action.type) {
    case LOGOUT:
      return INITIAL_STATE;

    case GET_PROFILE_REQUEST:
    case UPDATE_PROFILE_REQUEST:
      return update(state, {
        error: { $set: null }
      });

    case GET_PROFILE_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      console.log(action.payload.name);
      const name =
        action.payload.name && action.payload.name.includes(":")
          ? `${JSON.parse(action.payload.name).givenName} ${
              JSON.parse(action.payload.name).familyName
            }`
          : action.payload.name && typeof action.payload.name === "object"
          ? `${action.payload.name.givenName} ${action.payload.name.familyName}`
          : "";
      return update(state, {
        profile: {
          id: { $set: action.payload.id },
          name: { $set: name },
          email: { $set: action.payload.email },
          phone: { $set: action.payload.phone },
          avatarUrl: { $set: action.payload.avatar_url },
          companyName: { $set: action.payload.company_name },
          companyStreet: { $set: action.payload.company_street },
          companyCity: { $set: action.payload.company_city },
          companyState: { $set: action.payload.company_state },
          companyZip: { $set: action.payload.company_zip }
        },
        error: { $set: null }
      });

    case GET_PROFILE_FAILURE:
    case UPDATE_PROFILE_FAILURE:
      if (typeof action.payload.message === "string") {
        error = action.payload.message;
      } else {
        error = "Sorry, something went wrong :(\nPlease try again.";
      }
      return update(state, {
        error: { $set: error }
      });

    default:
      return state;
  }
}

export default profile;
