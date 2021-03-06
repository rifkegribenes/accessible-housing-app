import React from "react";
import PropTypes from "prop-types";

import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import withWidth from "@material-ui/core/withWidth";
import Drawer from "@material-ui/core/Drawer";

import * as formElements from "./FormElements";

import {
  Field,
  reduxForm
  // getFormValues,
  // getFormSubmitErrors
} from "redux-form";

const { renderCheckbox, featuresMap } = formElements;

export const FeaturesSearch = props => {
  const { classes, clearForm, setAndClose, more, toggleDrawer } = props;

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
    <Drawer
      className={classes.drawer}
      data-test="component-features-search"
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      open={more}
      onClose={toggleDrawer}
      anchor="right"
    >
      <div className={classes.featuresPanel}>
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
      </div>
    </Drawer>
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
  form: "listingSearch",
  // validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  updateUnregisteredFields: true
})(FeaturesSearch);

export default withWidth()(FeaturesSearchForm);
