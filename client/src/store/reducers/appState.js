import update from "immutability-helper";

import {
  LOGOUT,
  SET_LOGGEDIN,
  SET_REDIRECT_URL,
  SET_SPINNER
} from "../actions";
import {
  VALIDATE_TOKEN_REQUEST,
  VALIDATE_TOKEN_SUCCESS,
  VALIDATE_TOKEN_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE
} from "../actions/apiProfileActions";
import {
  GET_LISTING_BY_ID_REQUEST,
  GET_LISTING_BY_ID_SUCCESS,
  GET_LISTING_BY_ID_FAILURE,
  ADD_LISTING_REQUEST,
  ADD_LISTING_SUCCESS,
  ADD_LISTING_FAILURE,
  UPDATE_LISTING_REQUEST,
  UPDATE_LISTING_SUCCESS,
  UPDATE_LISTING_FAILURE,
  DELETE_LISTING_REQUEST,
  DELETE_LISTING_SUCCESS,
  DELETE_LISTING_FAILURE,
  GET_ALL_LISTINGS_REQUEST,
  GET_ALL_LISTINGS_SUCCESS,
  GET_ALL_LISTINGS_FAILURE
} from "../actions/apiListingActions";

export const INITIAL_STATE = {
  loggedIn: false,
  authToken: "",
  loading: false,
  redirect: "",
  userId: null
};

function appState(state = INITIAL_STATE, action) {
  // let error;
  // console.log(action.type);
  switch (action.type) {
    case LOGOUT:
      return INITIAL_STATE;

    case SET_SPINNER: {
      return update(state, {
        loading: { $set: true }
      });
    }

    case VALIDATE_TOKEN_SUCCESS:
      return update(state, {
        loggedIn: { $set: true },
        authToken: { $set: action.payload.token },
        loading: { $set: false }
      });

    case VALIDATE_TOKEN_FAILURE:
      return update(state, {
        loggedIn: { $set: false },
        loading: { $set: false }
      });

    case SET_REDIRECT_URL:
      return update(state, { redirect: { $set: action.payload } });

    case SET_LOGGEDIN:
      return update(state, {
        loggedIn: { $set: true },
        userId: { $set: action.payload.userId },
        authToken: { $set: action.payload.token }
      });

    case GET_LISTING_BY_ID_REQUEST:
    case ADD_LISTING_REQUEST:
    case UPDATE_LISTING_REQUEST:
    case DELETE_LISTING_REQUEST:
    case GET_ALL_LISTINGS_REQUEST:
    case VALIDATE_TOKEN_REQUEST:
    case GET_PROFILE_REQUEST:
      return update(state, {
        loading: { $set: true }
      });

    case GET_LISTING_BY_ID_SUCCESS:
    case GET_LISTING_BY_ID_FAILURE:
    case ADD_LISTING_SUCCESS:
    case ADD_LISTING_FAILURE:
    case UPDATE_LISTING_SUCCESS:
    case UPDATE_LISTING_FAILURE:
    case DELETE_LISTING_SUCCESS:
    case DELETE_LISTING_FAILURE:
    case GET_ALL_LISTINGS_SUCCESS:
    case GET_ALL_LISTINGS_FAILURE:
    case GET_PROFILE_SUCCESS:
    case GET_PROFILE_FAILURE:
      return update(state, {
        loading: { $set: false }
      });

    default:
      return state;
  }
}

export default appState;
