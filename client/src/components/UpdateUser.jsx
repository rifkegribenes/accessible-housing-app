import React from "react";
import {
  Field,
  reduxForm,
  getFormValues,
  getFormSubmitErrors
} from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FormLabel from "@material-ui/core/FormLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";

import * as formElements from "./FormElements";
import { validate } from "../utils/validators";
import { scrollToFirstError } from "../utils";

const {
  renderSelect,
  renderTextField
  // renderCheckbox
} = formElements;

export const UpdateUser = props => {
  const {
    onSubmit,
    classes,
    // formValues,
    width,
    verifyCallback
  } = props;

  const placeholderOnChange = () => {};

  return (
    <div data-test="component-update-user" className={classes.sectionContainer}>
      <form
        onSubmit={props.handleSubmit(onSubmit)}
        id="updateUser"
        className={classes.form}
      >
        <Typography className={classes.formTitle} variant="h3">
          Property Manager Account Information
        </Typography>
        <div className={classes.formSection}>
          <Field
            label="Your Name"
            name="name"
            id="name"
            type="text"
            classes={classes}
            component={renderTextField}
          />

          <Field
            label="Email"
            name="email"
            id="email"
            type="email"
            classes={classes}
            component={renderTextField}
          />

          <Field
            label="Phone"
            name="phone"
            id="phone"
            type="tel"
            classes={classes}
            component={renderTextField}
          />

          <Field
            label="Company Name"
            name="companyName"
            id="companyName"
            type="text"
            classes={classes}
            component={renderTextField}
          />

          <FormLabel className={classes.formLabel} component="legend">
            Company Address
          </FormLabel>

          <Field
            label="Street Address or PO Box"
            name="companyStreet"
            id="companyStreet"
            type="text"
            classes={classes}
            component={renderTextField}
          />

          <FormGroup
            className={classes.formGroup}
            row
            classes={{ root: classes.formGroup2Col }}
          >
            <Field
              label="City"
              name="companyCity"
              id="companyCity"
              type="text"
              twocol
              mobile={!isWidthUp("sm", width)}
              classes={classes}
              component={renderTextField}
            />

            <Field
              label="State"
              name="companyState"
              id="companyState"
              type="select"
              short
              mobile={!isWidthUp("sm", width)}
              classes={classes}
              component={renderSelect}
              options={["", "OR", "WA"]}
              labelWidth={80}
            />

            <Field
              label="Zip"
              name="companyZip"
              id="companyZip"
              short
              mobile={!isWidthUp("sm", width)}
              type="text"
              classes={classes}
              component={renderTextField}
            />
          </FormGroup>
          <div className={classes.buttonWrap}>
            <Button
              type="submit"
              color="primary"
              className={`${classes.next} g-recaptcha`}
              variant="contained"
              data-sitekey="6LdzULcUAAAAAJ37JEr5WQDpAj6dCcPUn1bIXq2O"
              data-callback={verifyCallback}
            >
              Update User
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

UpdateUser.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
  renderSelect: PropTypes.func,
  renderTextField: PropTypes.func,
  renderCheckbox: PropTypes.func,
  formValues: PropTypes.object,
  width: PropTypes.string,
  handleTab: PropTypes.func,
  handleInput: PropTypes.func
};

const mapStateToProps = state => ({
  profile: state.profile,
  initialValues: state.profile.form,
  formValues: getFormValues("updateUser")(state) || {},
  submitErrors: getFormSubmitErrors("updateUser")(state)
});

// add reduxForm to component
export const UpdateUserForm = reduxForm({
  form: "updateUser",
  validate,
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  updateUnregisteredFields: true,
  onSubmitFail: scrollToFirstError
})(UpdateUser);

// connect to redux store
export const UpdateUserConnected = connect(mapStateToProps)(UpdateUserForm);

export default withWidth()(UpdateUserConnected);
