import React from "react";
import PropTypes from "prop-types";

import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
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
  const {
    classes,
    clearSearch,
    setAndClose,
    more,
    toggleDrawer,
    searchState
  } = props;

  const features = Object.keys(featuresMap).map(feature => {
    return (
      <FormControl
        component="fieldset"
        className={classes.checkboxFieldSet}
        key={featuresMap[feature][0]}
      >
        <FormLabel component="legend" className={classes.featuresLabel}>
          {featuresMap[feature][0]}
        </FormLabel>
        <FormGroup
          data-test="component-checkbox-group"
          aria-label={featuresMap[feature][0]}
          name={featuresMap[feature][0]}
          className={classes.verticalGroup}
        >
          {featuresMap[feature][2].map(item => (
            <Field
              label={item}
              name={item}
              id={item}
              key={item}
              type="checkbox"
              formControlName="controlCheckbox"
              classes={classes}
              searchState={searchState}
              component={renderCheckbox}
              // legendClass={classes.indCheckboxInGroup}
            />
          ))}
        </FormGroup>
      </FormControl>
    );
  });

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
        <div className={classes.buttonWrap}>
          <Button
            type="button"
            color="secondary"
            className={classes.leftButton}
            variant="outlined"
            onClick={clearSearch}
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
        <FormGroup row classes={{ root: classes.formGroupFeatures }}>
          {features}
        </FormGroup>
        <div className={classes.buttonWrap}>
          <Button
            type="button"
            color="secondary"
            className={classes.leftButton}
            variant="outlined"
            onClick={clearSearch}
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
