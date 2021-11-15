import update from "immutability-helper";
import * as utils from "../../utils";

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
  GET_USER_LISTINGS_REQUEST,
  GET_USER_LISTINGS_SUCCESS,
  GET_USER_LISTINGS_FAILURE,
  HANDLE_INPUT,
  HANDLE_SEARCH,
  HANDLE_DELETE_OPEN,
  HANDLE_DELETE_CLOSE,
  CLEAR_FORM,
  CLEAR_SEARCH,
  CLEAR_FEATURES,
  UPDATE_FILTER
} from "../actions/apiListingActions";

export const INITIAL_STATE = {
  filteredListings: [],
  allListings: [],
  userListings: [],
  deleteDialogOpen: false,
  currentListing: {
    listing_type: null,
    listing: "",
    created_at: "",
    updated_at: ""
  },
  search: {
    bedrooms: "",
    maxRent: "",
    dialogOpen: false,
    searchZip: "97201",
    features: []
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

    case HANDLE_SEARCH:
      return update(state, {
        search: {
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

    case CLEAR_SEARCH:
      console.log("clear search");
      return update(state, {
        search: {
          $set: {}
        }
      });

    case CLEAR_FEATURES:
      console.log("clear features");
      return update(state, {
        search: {
          features: {
            $set: []
          }
        }
      });

    case UPDATE_FILTER:
      console.log("UPDATE_FILTER");
      console.log(action.payload);
      return update(state, {
        filteredListings: { $set: [...action.payload] }
      });

    case GET_LISTING_BY_ID_REQUEST:
    case ADD_LISTING_REQUEST:
    case UPDATE_LISTING_REQUEST:
    case DELETE_LISTING_REQUEST:
    case GET_ALL_LISTINGS_REQUEST:
    case GET_USER_LISTINGS_REQUEST:
      return update(state, {
        error: { $set: null }
      });

    case GET_LISTING_BY_ID_SUCCESS:
    case ADD_LISTING_SUCCESS:
    case UPDATE_LISTING_SUCCESS:
      // reverse-engineer available date
      const availableDate = utils.splitDate(action.payload.available_date);

      // reverse-engineer features list
      const formFeatures = {};
      if (action.payload.features) {
        action.payload.features.forEach(feature => {
          formFeatures[feature] = true;
        });
      }
      const mergeForm = {
        propertyName: action.payload.property_name,
        propertyStreet: action.payload.property_street,
        propertyCity: action.payload.property_city,
        propertyState: action.payload.property_state,
        propertyZip: action.payload.property_zip,
        quadrant: action.payload.property_quadrant,
        propertyCounty: action.payload.property_county,
        propertyPhone: action.payload.property_phone,
        propertyEmail: action.payload.property_email,
        listingUrl: action.payload.listing_url,
        // vacant: action.payload.vacant,
        // mm: availableDate.mm,
        // dd: availableDate.dd,
        // yyyy: availableDate.yyyy,
        // monthlyRent: action.payload.monthly_rent,
        primaryImage:
          action.payload.primary_image ||
          "https://www.oregonlive.com/resizer/WT8ZztMJGjquhHZQN--FpxQzghA=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/expo.advance.net/img/1c2d086149/width2048/0ce_bronaughapartmentsportlandoregon.jpeg",
        bedroomsPriceString: utils.bedroomsPriceString(
          action.payload.studio_l,
          action.payload.studio_h,
          action.payload.br_1l,
          action.payload.br_1h,
          action.payload.br_2l,
          action.payload.br_2h,
          action.payload.br_3l,
          action.payload.br_3h,
          action.payload.br_4l,
          action.payload.br_4h,
          action.payload.br_5l,
          action.payload.br_5h
        ),
        // deposit: action.payload.deposit,
        // bedrooms: action.payload.bedrooms,
        notes: action.payload.notes,
        availability: action.payload.availability,
        pets: action.payload.pets,
        // leaseLength: action.payload.lease_length,
        // squareFt: action.payload.square_feet,
        laundryType: action.payload.laundry_type,
        // parkingType: action.payload.parking_type,
        // parkingFee: action.payload.parking_fee,
        userId: action.payload.user_id,
        dialogOpen: false
      };
      const form = { ...mergeForm, ...formFeatures };
      return update(state, {
        form: { $set: form },
        error: { $set: null }
      });

    case GET_ALL_LISTINGS_SUCCESS:
      return update(state, {
        allListings: { $set: action.payload },
        filteredListings: { $set: action.payload },
        error: { $set: null }
      });

    case GET_USER_LISTINGS_SUCCESS:
      return update(state, {
        userListings: { $set: action.payload },
        error: { $set: null }
      });

    case GET_LISTING_BY_ID_FAILURE:
    case ADD_LISTING_FAILURE:
    case UPDATE_LISTING_FAILURE:
    case DELETE_LISTING_FAILURE:
    case GET_ALL_LISTINGS_FAILURE:
    case GET_USER_LISTINGS_FAILURE:
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
