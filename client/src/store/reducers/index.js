import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import appState from "../reducers/appState";
import profile from "../reducers/profile";
import listing from "../reducers/listing";

const rootReducer = combineReducers({
  appState,
  profile,
  listing,
  form: formReducer
});

export default rootReducer;
