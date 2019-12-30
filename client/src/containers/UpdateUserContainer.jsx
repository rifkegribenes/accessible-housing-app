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
// import * as utils from "../utils";
import * as apiListingActions from "../store/actions/apiListingActions";
import * as apiProfileActions from "../store/actions/apiProfileActions";
import * as actions from "../store/actions";

import { formStyles, handleError } from "../components/FormElements";

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
    this.getUserProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      (!prevProps.appState.authToken && this.props.appState.authToken) ||
      (!prevProps.appState.userId && this.props.appState.userId)
    ) {
      this.getUserProfile();
    }
  }

  getUserProfile() {
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
            console.log(this.props.profile.profile);
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

  async updateProfile() {
    console.log("updateProfile");
    const token = this.props.appState.authToken;
    console.log(token);
    const body = await this.generateUserBody();
    console.log(body);
    const id = this.props.match.params.id;

    if (token && id && body) {
      const userResult = await this.props.apiProfile
        .updateProfile(token, id, body)
        .catch(err => {
          console.error(err);
          return handleError(err);
        });
      console.log(userResult.type);
      if (
        (userResult && userResult.type !== "UPDATE_PROFILE_SUCCESS") ||
        this.props.profile.error
      ) {
        console.log(this.props.profile.error);
        return handleError(this.props.profile.error);
      } else {
        return userResult.type;
      }
    } else {
      console.log("no profile body or no token or no id");
      return "no profile body or no token or no id";
    }
  }

  async handleSubmit() {
    console.log("handleSubmit");

    // verify recaptcha score

    this.updateProfile()
      .then(result => {
        if (result === "UPDATE_PROFILE_SUCCESS") {
          openSnackbar("success", "Profile updated");
          // redirect to manager dashboard here
          this.props.history.push("/new");
        } else {
          console.log(result);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div data-test="container-update-user">
        <UpdateUserForm
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
  initialValues: state.profile.profile,
  formValues: getFormValues("updateUser")(state) || {},
  pristine: isPristine("updateUser")(state),
  submitting: isSubmitting("updateUser")(state),
  valid: isValid("updateUser")(state),
  submitErrors: getFormSubmitErrors("updateUser")(state),
  reset: reset
});

const mapDispatchToProps = dispatch => ({
  apiListing: bindActionCreators(apiListingActions, dispatch),
  apiProfile: bindActionCreators(apiProfileActions, dispatch),
  actions: bindActionCreators(actions, dispatch),
  submitForm: () => dispatch(submit("updateUser"))
});

export const UpdateUserContainerConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateUserContainer);

export default withStyles(formStyles)(UpdateUserContainerConnected);
