import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import * as formElements from "./FormElements";

import {
  Field,
  reduxForm,
  getFormValues,
  getFormSubmitErrors
} from "redux-form";

const { renderCheckbox, featuresMap } = formElements;

export const FeaturesSearch = props => {
  const { classes, clearForm, setAndClose } = props;

  const features = Object.keys(featuresMap).map(feature => (
    <Field
      label={featuresMap[feature]}
      name={feature}
      id={feature}
      key={feature}
      type="checkbox"
      formControlName="controlCheckbox"
      classes={classes}
      component={renderCheckbox}
    />
  ));

  return (
    <div
      data-test="component-features-search"
      className={classes.sectionContainer}
    >
      <form id="featuresSearch" className={classes.featuresPanel}>
        <div className={classes.formSection}>
          <FormLabel className={classes.formLabel} component="legend">
            Features
          </FormLabel>
        </div>
        <FormGroup row classes={{ root: classes.formGroupFeatures }}>
          <Field
            label="Vacant?"
            name="vacant"
            id="vacant"
            type="checkbox"
            formControlName="controlCheckbox"
            classes={classes}
            component={renderCheckbox}
          />
          {features}
        </FormGroup>
        <div className={classes.buttonWrap}>
          <Button
            type="button"
            color="secondary"
            className={classes.leftButton}
            variant="outlined"
            onClick={clearForm}
          >
            Clear
          </Button>
          <Button
            type="button"
            color="primary"
            className={classes.next}
            variant="contained"
            onClick={setAndClose}
          >
            Done
          </Button>
        </div>
      </form>
    </div>
  );
};

FeaturesSearch.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
  renderSelect: PropTypes.func,
  renderTextField: PropTypes.func,
  renderCheckbox: PropTypes.func,
  formValues: PropTypes.object,
  width: PropTypes.string,
  handleInput: PropTypes.func
};

// add reduxForm to component
export const FeaturesSearchForm = reduxForm({
  form: "featuresSearch",
  // validate,
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  updateUnregisteredFields: true
})(FeaturesSearch);

export default withWidth()(FeaturesSearchForm);
