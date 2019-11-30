import update from "immutability-helper";

import { LOGOUT } from "../actions";
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
  GET_ALL_LISTINGS_FAILURE,
  HANDLE_INPUT,
  HANDLE_DELETE_OPEN,
  HANDLE_DELETE_CLOSE,
  CLEAR_FORM
} from "../actions/apiListingActions";

export const INITIAL_STATE = {
  filteredList: [],
  allListing: [],
  deleteDialogOpen: false,
  currentListing: {
    listing_type: null,
    listing: "",
    created_at: "",
    updated_at: ""
  },
  form: {
    listing_type: "",
    listing: "",
    dialogOpen: false
  },
  error: null
};

function Listing(state = INITIAL_STATE, action) {
  let error;

  switch (action.type) {
    case LOGOUT:
      return INITIAL_STATE;

    case HANDLE_INPUT:
      return update(state, {
        form: {
          [action.payload.name]: { $set: action.payload.value }
        }
      });

    case HANDLE_DELETE_OPEN:
      return update(state, {
        deleteDialogOpen: { $set: true },
        currentListing: { $set: { ...action.payload.selectedListing } }
      });

    case HANDLE_DELETE_CLOSE:
    case DELETE_LISTING_SUCCESS:
      return update(state, {
        deleteDialogOpen: { $set: false },
        currentListing: {
          id: { $set: "" },
          listing_type: { $set: "" },
          listing: { $set: "" },
          created_at: { $set: "" },
          updated_at: { $set: "" }
        },
        error: { $set: null }
      });

    case CLEAR_FORM:
      console.log("clear form");
      return update(state, {
        form: {
          $set: {}
        }
      });

    case GET_LISTING_BY_ID_REQUEST:
    case ADD_LISTING_REQUEST:
    case UPDATE_LISTING_REQUEST:
    case DELETE_LISTING_REQUEST:
    case GET_ALL_LISTINGS_REQUEST:
      return update(state, {
        error: { $set: null }
      });

    case GET_LISTING_BY_ID_SUCCESS:
    case ADD_LISTING_SUCCESS:
    case UPDATE_LISTING_SUCCESS:
      // reverse-engineer available date and features list
      return update(state, {
        form: {
          propertyName: { $set: action.payload.property_name },
          propertyStreet: { $set: action.payload.property_street },
          propertyCity: { $set: action.payload.property_city },
          propertyState: { $set: action.payload.property_state },
          propertyZip: { $set: action.payload.property_zip },
          quadrant: { $set: action.payload.property_quadrant },
          propertyCounty: { $set: action.payload.property_county },
          propertyPhone: { $set: action.payload.property_phone },
          listingUrl: { $set: action.payload.listing_url },
          vacant: { $set: action.payload.vacant },
          // availableDate: { $set: action.payload.available_date },
          monthlyRent: { $set: action.payload.monthly_rent },
          primaryImage: { $set: action.payload.primary_image },
          // features { $set:  },
          // user_id
          dialogOpen: { $set: false }
        },
        error: { $set: null }
      });

    case GET_ALL_LISTINGS_SUCCESS:
      return update(state, {
        allListing: { $set: action.payload },
        error: { $set: null }
      });

    case GET_LISTING_BY_ID_FAILURE:
    case ADD_LISTING_FAILURE:
    case UPDATE_LISTING_FAILURE:
    case DELETE_LISTING_FAILURE:
    case GET_ALL_LISTINGS_FAILURE:
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

export default Listing;
