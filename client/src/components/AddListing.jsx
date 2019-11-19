import React from "react";
import {
  Field,
  reduxForm,
  getFormValues,
  getFormSubmitErrors
} from "redux-form";
import { connect } from "react-redux";

import FormLabel from "@material-ui/core/FormLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import PropTypes from "prop-types";

import * as formElements from "./FormElements";
import { validate } from "../utils/validators";
import { scrollToFirstError } from "../utils";

const {
  monthList,
  dateOptions,
  yearOptions,
  renderSelect,
  renderTextField,
  renderCheckbox
} = formElements;

export const AddListing = props => {
  const {
    onSubmit,
    classes,
    // formValues,
    width,
    verifyCallback
  } = props;

  const placeholderOnChange = () => {};

  return (
    <div data-test="component-add-listing" className={classes.sectionContainer}>
      <form
        onSubmit={props.handleSubmit(onSubmit)}
        id="addListing"
        className={classes.form}
      >
        <div className={classes.formSection}>
          <FormGroup row classes={{ root: classes.formGroup2ColShort }}>
            <Field
              data-test="select-quadrant"
              label="Quadrant"
              name="quadrant"
              id="quadrant"
              type="select"
              classes={classes}
              component={renderSelect}
              options={["N", "NE", "NW", "SE", "SW"]}
              onChange={placeholderOnChange}
              labelWidth={100}
            />
            <Field
              label="County"
              name="propertyCounty"
              id="propertyCounty"
              type="text"
              classes={classes}
              component={renderSelect}
              options={["Multnomah", "Washington", "Clackamas", "Clark"]}
              labelWidth={100}
            />
          </FormGroup>

          <FormLabel className={classes.formLabel} component="legend">
            Date Available
          </FormLabel>
          <FormGroup row classes={{ root: classes.formGroup2ColShort }}>
            <Field
              label="Month"
              name="mm"
              id="mm"
              type="select"
              classes={classes}
              formControlName="formControlDate"
              component={renderSelect}
              labelWidth={41}
              options={monthList}
            />

            <Field
              label="Day"
              name="dd"
              id="dd"
              type="select"
              formControlName="formControlDate"
              classes={classes}
              component={renderSelect}
              labelWidth={24}
              options={dateOptions(props)}
            />

            <Field
              label="Year"
              name="yyyy"
              id="yyyy"
              type="select"
              formControlName="formControlDate"
              classes={classes}
              component={renderSelect}
              labelWidth={30}
              options={yearOptions()}
            />
          </FormGroup>

          <Field
            label="Property Name"
            name="propertyName"
            id="propertyName"
            type="text"
            classes={classes}
            component={renderTextField}
          />

          <FormLabel className={classes.formLabel} component="legend">
            Address
          </FormLabel>

          <Field
            label="Street Address"
            name="propertyStreet"
            id="propertyStreet"
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
              name="propertyCity"
              id="propertyCity"
              type="text"
              twocol
              mobile={!isWidthUp("sm", width)}
              classes={classes}
              component={renderTextField}
            />

            <Field
              label="State"
              name="propertyState"
              id="propertyState"
              type="select"
              short
              mobile={!isWidthUp("sm", width)}
              classes={classes}
              component={renderSelect}
              options={["OR", "WA"]}
              labelWidth={80}
            />

            <Field
              label="Zip"
              name="propertyZip"
              id="propertyZip"
              short
              mobile={!isWidthUp("sm", width)}
              type="text"
              classes={classes}
              component={renderTextField}
            />

            <Field
              label="Phone"
              name="propertyPhone"
              id="propertyPhone"
              type="tel"
              classes={classes}
              component={renderTextField}
            />
          </FormGroup>

          <FormGroup>
            <Field
              label="Currently Vacant?"
              name="vacant"
              id="vacant"
              type="checkbox"
              formControlName="controlCheckbox"
              classes={classes}
              component={renderCheckbox}
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
              Next
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddListing.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
  employerTypesList: PropTypes.array,
  employerList: PropTypes.array,
  updateEmployersPicklist: PropTypes.func,
  renderSelect: PropTypes.func,
  renderTextField: PropTypes.func,
  renderCheckbox: PropTypes.func,
  formValues: PropTypes.object,
  width: PropTypes.string,
  handleTab: PropTypes.func,
  handleInput: PropTypes.func
};

const mapStateToProps = state => ({
  listing: state.listing,
  initialValues: state.listing.form,
  formValues: getFormValues("addListing")(state) || {},
  submitErrors: getFormSubmitErrors("addListing")(state)
});

// add reduxForm to component
export const AddListingForm = reduxForm({
  form: "addListing",
  validate,
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  updateUnregisteredFields: true,
  onSubmitFail: scrollToFirstError
})(AddListing);

// connect to redux store
export const AddListingConnected = connect(mapStateToProps)(AddListingForm);

export default withWidth()(AddListingConnected);
