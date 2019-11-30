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
  renderCheckbox,
  featuresMap
} = formElements;

export const AddListing = props => {
  const {
    onSubmit,
    classes,
    edit,
    // formValues,
    width,
    verifyCallback
  } = props;

  const placeholderOnChange = () => {};

  const features = Object.keys(featuresMap).map(feature => (
    <Field
      label={featuresMap[feature]}
      name={feature}
      id={feature}
      key={feature}
      type="checkbox"
      formControlName={`checkbox_${feature}`}
      classes={classes}
      component={renderCheckbox}
    />
  ));

  return (
    <div data-test="component-add-listing" className={classes.sectionContainer}>
      <form
        onSubmit={props.handleSubmit(onSubmit)}
        id="addListing"
        className={classes.form}
      >
        <div className={classes.formSection}>
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
              options={["", "OR", "WA"]}
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
          </FormGroup>
          <FormGroup row classes={{ root: classes.formGroup2Col }}>
            <Field
              data-test="select-quadrant"
              label="Quadrant"
              name="quadrant"
              id="quadrant"
              type="select"
              classes={classes}
              component={renderSelect}
              options={["", "N", "NE", "NW", "SE", "SW"]}
              onChange={placeholderOnChange}
              labelWidth={100}
              twocol
            />
            <Field
              label="County"
              name="propertyCounty"
              id="propertyCounty"
              type="text"
              classes={classes}
              component={renderSelect}
              options={["", "Multnomah", "Washington", "Clackamas", "Clark"]}
              labelWidth={100}
            />
          </FormGroup>
          <Field
            label="Property contact phone"
            name="propertyPhone"
            id="propertyPhone"
            type="tel"
            classes={classes}
            component={renderTextField}
          />
          <Field
            label="Link to property listing"
            name="listingUrl"
            id="listingUrl"
            type="url"
            classes={classes}
            component={renderTextField}
          />
          <Field
            label="Link to property image"
            name="primaryImage"
            id="primaryImage"
            type="url"
            classes={classes}
            component={renderTextField}
          />

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
            <Field
              label="Monthly Rent"
              name="monthlyRent"
              id="monthlyRent"
              type="number"
              min={0.01}
              step={0.01}
              classes={classes}
              component={renderTextField}
              formControlName="currency"
              InputProps={{ style: { paddingLeft: 20 } }}
              InputLabelProps={{ style: { paddingLeft: 20 } }}
            />
            <Field
              label="Deposit"
              name="deposit"
              id="deposit"
              type="number"
              min={0.01}
              step={0.01}
              classes={classes}
              component={renderTextField}
              formControlName="currency"
              InputProps={{ style: { paddingLeft: 20 } }}
              InputLabelProps={{ style: { paddingLeft: 20 } }}
            />
          </FormGroup>
          <FormGroup row classes={{ root: classes.formGroupTopMargin }}>
            <Field
              label="Vacant?"
              name="vacant"
              id="vacant"
              type="checkbox"
              formControlName="controlCheckbox"
              classes={classes}
              component={renderCheckbox}
            />
          </FormGroup>
          <FormGroup row classes={{ root: classes.formGroup2Col }}>
            <Field
              data-test="input-bedrooms"
              label="Bedrooms"
              name="bedrooms"
              id="bedrooms"
              min={1}
              max={4}
              step={1}
              classes={classes}
              component={renderTextField}
              twocol
            />
            <Field
              data-test="input-lease-length"
              label="Lease Length"
              name="leaseLength"
              id="leaseLength"
              min={1}
              max={12}
              step={1}
              classes={classes}
              component={renderTextField}
              twocol
              formControlName="months"
              InputProps={{ style: { paddingRight: 30 } }}
              InputLabelProps={{ style: { paddingRight: 30 } }}
            />
            <Field
              label="Square Ft"
              name="squareFt"
              id="squareFt"
              type="number"
              min={0}
              step={50}
              classes={classes}
              component={renderTextField}
            />
          </FormGroup>
          <FormGroup row classes={{ root: classes.formGroup2Col }}>
            <Field
              label="Laundry Type"
              name="laundry"
              id="laundry"
              type="select"
              classes={classes}
              component={renderSelect}
              labelWidth={41}
              options={[
                "Washer/Dryer In-unit",
                "Washer/Dryer hookup",
                "Laundry facilities"
              ]}
            />
            <Field
              label="Parking Type"
              name="parking"
              id="parking"
              type="select"
              classes={classes}
              component={renderSelect}
              labelWidth={41}
              options={["Surface lot", "Covered", "Street", "Garage"]}
            />
            <Field
              label="Parking Fee / Month"
              name="parkingFee"
              id="parkingFee"
              type="number"
              min={0}
              step={0.5}
              classes={classes}
              component={renderTextField}
              formControlName="currency"
              InputProps={{ style: { paddingLeft: 20 } }}
              InputLabelProps={{ style: { paddingLeft: 20 } }}
            />
          </FormGroup>
          <FormGroup row classes={{ root: classes.formGroupFeatures }}>
            {features}
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
              {edit ? "Update Listing" : "Create Listing"}
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
