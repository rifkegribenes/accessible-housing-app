import { RSAA } from "redux-api-middleware";
import BASE_URL from "./apiConfig.js";

export const HANDLE_INPUT = "HANDLE_INPUT";
export const HANDLE_DELETE_OPEN = "HANDLE_DELETE_OPEN";
export const HANDLE_DELETE_CLOSE = "HANDLE_DELETE_CLOSE";
export const CLEAR_FORM = "CLEAR_FORM";
export const GET_LISTING_BY_ID_REQUEST = "GET_LISTING_BY_ID_REQUEST";
export const GET_LISTING_BY_ID_SUCCESS = "GET_LISTING_BY_ID_SUCCESS";
export const GET_LISTING_BY_ID_FAILURE = "GET_LISTING_BY_ID_FAILURE";
export const ADD_LISTING_REQUEST = "ADD_LISTING_REQUEST";
export const ADD_LISTING_SUCCESS = "ADD_LISTING_SUCCESS";
export const ADD_LISTING_FAILURE = "ADD_LISTING_FAILURE";
export const GET_ALL_LISTINGS_REQUEST = "GET_ALL_LISTINGS_REQUEST";
export const GET_ALL_LISTINGS_SUCCESS = "GET_ALL_LISTINGS_SUCCESS";
export const GET_ALL_LISTINGS_FAILURE = "GET_ALL_LISTINGS_FAILURE";
export const DELETE_LISTING_REQUEST = "DELETE_LISTING_REQUEST";
export const DELETE_LISTING_SUCCESS = "DELETE_LISTING_SUCCESS";
export const DELETE_LISTING_FAILURE = "DELETE_LISTING_FAILURE";
export const UPDATE_LISTING_REQUEST = "UPDATE_LISTING_REQUEST";
export const UPDATE_LISTING_SUCCESS = "UPDATE_LISTING_SUCCESS";
export const UPDATE_LISTING_FAILURE = "UPDATE_LISTING_FAILURE";

export function handleInput({ target: { name, value } }) {
  return {
    type: HANDLE_INPUT,
    payload: { name, value }
  };
}

export function handleDeleteOpen(selectedListing) {
  return {
    type: HANDLE_DELETE_OPEN,
    payload: { selectedListing }
  };
}

export function handleDeleteClose() {
  return {
    type: HANDLE_DELETE_CLOSE
  };
}

export function clearForm() {
  return {
    type: CLEAR_FORM
  };
}

/*
 * Function: getListingById -- get a single Listing item by id
 * @param {string} id
 * This action dispatches additional actions as it executes:
 *   GET_LISTING_BY_ID_REQUEST:
 *     Initiates a spinner on the home page.
 *   GET_LISTING_BY_ID_SUCCESS:
 *     If Listing successfully retrieved, hides spinner
 *   GET_LISTING_BY_ID_FAILURE:
 *     If database error, hides spinner, displays error toastr
 */
export function getListingById(id) {
  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/api/listing/${id}`,
      method: "GET",
      types: [
        GET_LISTING_BY_ID_REQUEST,
        GET_LISTING_BY_ID_SUCCESS,
        {
          type: GET_LISTING_BY_ID_FAILURE,
          payload: (action, state, res) => {
            return res.json().then(data => {
              let message = "Sorry, something went wrong :(";
              if (data && data.message) {
                message = data.message;
              }
              return { message };
            });
          }
        }
      ]
    }
  };
}

/*
 * Function: getAllListings -- get all Listing items in database
 * @param {string} id
 * This action dispatches additional actions as it executes:
 *   GET_ALL_LISTINGS_REQUEST:
 *     Initiates a spinner on the home page.
 *   GET_ALL_LISTINGS_SUCCESS:
 *     If Listing successfully retrieved, hides spinner
 *   GET_ALL_LISTINGS_FAILURE:
 *     If database error, hides spinner, displays error toastr
 */
export function getAllListings(token) {
  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/api/listing`,
      method: "GET",
      types: [
        GET_ALL_LISTINGS_REQUEST,
        GET_ALL_LISTINGS_SUCCESS,
        {
          type: GET_ALL_LISTINGS_FAILURE,
          payload: (action, state, res) => {
            return res.json().then(data => {
              let message = "Sorry, something went wrong :(";
              if (data && data.message) {
                message = data.message;
              }
              return { message };
            });
          }
        }
      ],
      headers: {
        Authorization: `Bearer ${token}`,
        "Listing-Type": "application/json"
      }
    }
  };
}

/*
 * Function: addListing -- add new Listing to db
 * @param {object} body (Listing object)
 *  --  @param {string} listingType,
 *  --  @param {string} listing
 * This action dispatches additional actions as it executes:
 *   ADD_LISTING_REQUEST:
 *     Initiates a spinner on the home page.
 *   ADD_LISTING_SUCCESS:
 *     If Listing successfully added, hides spinner
 *   ADD_LISTING_FAILURE:
 *     If database error, hides spinner, displays error toastr
 */
export function addListing(token, body) {
  console.log(body);
  console.log(JSON.stringify(body));
  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/api/listing/`,
      method: "POST",
      types: [
        ADD_LISTING_REQUEST,
        ADD_LISTING_SUCCESS,
        {
          type: ADD_LISTING_FAILURE,
          payload: (action, state, res) => {
            return res.json().then(data => {
              let message = "Sorry, something went wrong :(";
              if (data && data.message) {
                message = data.message;
              }
              return { message };
            });
          }
        }
      ],
      headers: {
        Authorization: `Bearer ${token}`,
        "Listing-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
  };
}

/*
 * Function: updateListing -- update existing Listing
 * @param {string} id Listing id
 * @param {object} body (Listing object)
 *  --  @param {object} updates
 * This action dispatches additional actions as it executes:
 *   UDPATE_LISTING_REQUEST:
 *     Initiates a spinner on the home page.
 *   UDPATE_LISTING_SUCCESS:
 *     If Listing successfully updated, hides spinner
 *   UDPATE_LISTING_FAILURE:
 *     If database error, hides spinner, displays error toastr
 */
export function updateListing(token, id, body) {
  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/api/listing/${id}`,
      method: "PUT",
      types: [
        UPDATE_LISTING_REQUEST,
        UPDATE_LISTING_SUCCESS,
        {
          type: UPDATE_LISTING_FAILURE,
          payload: (action, state, res) => {
            return res.json().then(data => {
              let message = "Sorry, something went wrong :(";
              if (data && data.message) {
                message = data.message;
              }
              return { message };
            });
          }
        }
      ],
      headers: {
        Authorization: `Bearer ${token}`,
        "Listing-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
  };
}

/*
 * Function: deleteListing -- delete Listing from database
 * @param {string} id
 * This action dispatches additional actions as it executes:
 *   DELETE_LISTING_REQUEST:
 *     Initiates a spinner on the home page.
 *   DELETE_LISTING_SUCCESS:
 *     If Listing successfully deleted, hides spinner
 *   DELETE_LISTING_FAILURE:
 *     If database error, hides spinner, displays error toastr
 */
export function deleteListing(token, id) {
  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/api/listing/${id}`,
      method: "DELETE",
      types: [
        DELETE_LISTING_REQUEST,
        DELETE_LISTING_SUCCESS,
        {
          type: DELETE_LISTING_FAILURE,
          payload: (action, state, res) => {
            return res.json().then(data => {
              let message = "Sorry, something went wrong :(";
              if (data && data.message) {
                message = data.message;
              }
              return { message };
            });
          }
        }
      ],
      headers: { Authorization: `Bearer ${token}` }
    }
  };
}
