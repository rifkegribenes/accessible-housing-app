import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";

import * as formElements from "./FormElements";
import { validate } from "../utils/validators";
import { scrollToFirstError } from "../utils";

const {
  renderSelect,
  renderTextField,
  renderCheckbox,
  featuresMap
} = formElements;

export const FeaturesSearch = props => {
  const { classes, edit, width } = props;

  const placeholderOnChange = () => {};

  const features = Object.keys(featuresMap).map(feature => (
    <Field
      label="Vacant?"
      name="vacant"
      id="vacant"
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
      <form id="featuresSearch" className={classes.form}>
        <Typography className={classes.formTitle} variant="h3">
          Add Listing
        </Typography>
        <div className={classes.formSection}>
          <FormLabel className={classes.formLabel} component="legend">
            Features
          </FormLabel>
        </div>
      </form>
    </div>
  );
};

FeaturesSearch.propTypes = {
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

export default withWidth()(FeaturesSearch);
