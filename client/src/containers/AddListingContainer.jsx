import React from "react";
import {
  getFormValues,
  submit,
  isSubmitting,
  isPristine,
  isValid,
  getFormSubmitErrors,
  reset
  // change
} from "redux-form";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import queryString from "query-string";

import { withStyles } from "@material-ui/core/styles";

// import { openSnackbar } from "./Notifier";
import AddListingForm from "../components/AddListing";
// import * as utils from "../utils";
import * as apiListingActions from "../store/actions/apiListingActions";
import * as apiProfileActions from "../store/actions/apiProfileActions";
import * as actions from "../store/actions";

import {
  formStyles,
  // formatSFDate,
  handleError
} from "../components/FormElements";

export class AddListingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.verifyRecaptchaScore = this.verifyRecaptchaScore.bind(this);
  }

  componentDidMount() {
    // check for listing id in query string
    const params = queryString.parse(this.props.location.search);
    // if find both ids, call API to fetch contact info for prefill
    if (params.lId) {
      const { lId } = params;
      this.props.apiListing
        .getListingById(lId)
        .then(result => {
          // console.log(result);
        })
        .catch(err => {
          console.error(err);
          this.props.apiListing.clearForm();
        });
    }
  }

  handleOpen() {
    const newState = { ...this.state };
    newState.open = true;
    this.setState({ ...newState });
  }

  handleClose() {
    const newState = { ...this.state };
    newState.open = false;
    this.setState({ ...newState });
  }

  async verifyRecaptchaScore() {
    // fetch token
    await this.props.recaptcha.execute();

    // then verify
    const token = this.props.listing.form.reCaptchaValue;

    // check for token every 200ms until returned to avoid race condition
    (async () => {
      while (!token) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    })();
    if (token) {
      const result = await this.props.apiListing.verify(token).catch(err => {
        console.error(err);
        return handleError(
          "ReCaptcha verification failed, please reload the page and try again."
        );
      });

      if (result) {
        // console.log(`recaptcha score: ${result.payload.score}`);
        return result.payload.score;
      }
    }
  }

  async generateListingBody() {
    // console.log("generateListingBody");
    const { formValues } = this.props;

    // cleeanup body fields
    // lookup lat/lon
    let lat, lon;

    // concatenate availableDate
    let availableDate;

    // generate body
    const body = {
      property_name: formValues.propertyName,
      property_street: formValues.propertyStreet,
      property_city: formValues.propertyCity,
      property_state: formValues.propertyState,
      property_zip: formValues.propertyZip,
      property_quadrant: formValues.propertyQuadrant,
      property_lat: lat,
      property_lon: lon,
      property_county: formValues.propertyCounty,
      property_phone: formValues.propertyPhone,
      listing_url: formValues.listingUrl,
      vacant: formValues.vacant,
      available_date: availableDate,
      monthly_rent: formValues.monthlyRent,
      primary_image: formValues.primaryImage,
      features: formValues.features
    };
    console.log(body);
    return body;
  }

  async createListing() {
    console.log("createListing");
    const body = await this.generateListingBody();
    // console.log(body);
    if (body) {
      const listingResult = await this.props.apiListing
        .createListing(body)
        .catch(err => {
          console.error(err);
          return handleError(err);
        });

      if (
        (listingResult && listingResult.type !== "CREATE_LISTING_SUCCESS") ||
        this.props.listing.error
      ) {
        console.log(this.props.listing.error);
        return handleError(this.props.listing.error);
      }
    } else {
      console.log("no listing body generated");
    }
  }

  async handleSubmit() {
    console.log("handleSubmit");
    // const { formValues } = this.props;

    // verify recaptcha score

    this.createListing()
      .then(() => {
        console.log("listing created");
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div data-test="container-add-listing">
        <AddListingForm
          {...this.props}
          onSubmit={this.handleSubmit}
          handleError={handleError}
          verifyRecaptchaScore={this.verifyRecaptchaScore}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listing: state.listing,
  appState: state.appState,
  profile: state.profile,
  initialValues: state.listing.form,
  formValues: getFormValues("addListing")(state) || {},
  pristine: isPristine("addListing")(state),
  submitting: isSubmitting("addListing")(state),
  valid: isValid("addListing")(state),
  submitErrors: getFormSubmitErrors("addListing")(state),
  reset: reset
});

const mapDispatchToProps = dispatch => ({
  apiListing: bindActionCreators(apiListingActions, dispatch),
  apiProfile: bindActionCreators(apiProfileActions, dispatch),
  actions: bindActionCreators(actions, dispatch),
  submitForm: () => dispatch(submit("addListing"))
});

export const AddListingContainerConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddListingContainer);

export default withStyles(formStyles)(AddListingContainerConnected);
