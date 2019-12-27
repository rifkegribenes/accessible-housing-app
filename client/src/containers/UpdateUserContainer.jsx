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
// import queryString from "query-string";

import { withStyles } from "@material-ui/core/styles";

import { openSnackbar } from "./Notifier";
import UpdateUserForm from "../components/UpdateUser";
import * as utils from "../utils";
import * as apiListingActions from "../store/actions/apiListingActions";
import * as apiProfileActions from "../store/actions/apiProfileActions";
import * as actions from "../store/actions";

import {
  formStyles,
  handleError,
  calcFeatures
} from "../components/FormElements";

export class UpdateUserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.verifyRecaptchaScore = this.verifyRecaptchaScore.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const token = this.props.appState.authToken;
    const id = this.props.match.params.id;
    if (token && id) {
      this.props.apiProfile
        .getProfile(token, id)
        .then(result => {
          if (
            result.type === "GET_PROFILE_FAILURE" ||
            this.props.profile.error
          ) {
            openSnackbar(
              "error",
              this.props.profile.error ||
                "An error occurred while trying to fetch your profile."
            );
          } else {
            // console.log(this.props.listing.form)
          }
        })
        .catch(err => openSnackbar("error", err));
    } else {
      console.log("missing token or id");
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

  async generateUserBody() {
    // console.log("generateUserBody");
    const { formValues } = this.props;

    // cleanup body fields
    const user_type = "manager";

    // generate body
    const body = {
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
      company_name: formValues.companyName,
      company_street: formValues.companyStreet,
      company_city: formValues.companyCity,
      company_state: formValues.companyState,
      company_zip: formValues.companyZip,
      user_type
    };
    console.log(body);
    return body;
  }

  async updateUser() {
    console.log("updateUser");
    const token = this.props.appState.authToken;
    console.log(token);
    const body = await this.generateUserBody();
    console.log(body);
    const id = this.props.match.params.id;

    if (token && id && body) {
      const userResult = await this.props.apiProfile
        .updateListing(token, id, body)
        .catch(err => {
          console.error(err);
          return handleError(err);
        });
      console.log(listingResult.type);
      if (
        (listingResult && listingResult.type !== "UPDATE_LISTING_SUCCESS") ||
        this.props.listing.error
      ) {
        console.log(this.props.listing.error);
        return handleError(this.props.listing.error);
      } else {
        return listingResult.type;
      }
    } else {
      console.log("no listing body or no token or no id");
      return "no listing body or no token or no id";
    }
  }

  async handleSubmit() {
    console.log("handleSubmit");
    console.log(this.props.edit);

    // verify recaptcha score

    if (this.props.edit) {
      this.updateListing()
        .then(result => {
          if (result === "UPDATE_LISTING_SUCCESS") {
            openSnackbar("success", "Listing updated");
            // redirect to manager dashboard here
            this.props.history.push("/listings");
          } else {
            console.log(result);
          }
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      this.addListing()
        .then(result => {
          if (result === "ADD_LISTING_SUCCESS") {
            openSnackbar("success", "Listing created");
            // redirect to manager dashboard here
            this.props.history.push("/listings");
          } else {
            console.log(result);
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
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
