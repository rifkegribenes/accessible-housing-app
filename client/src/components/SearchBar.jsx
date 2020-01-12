import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import withWidth from "@material-ui/core/withWidth";
import FeaturesSearch from "../components/FeaturesSearch";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import * as formElements from "./FormElements";

import {
  Field,
  reduxForm,
  getFormValues,
  getFormSubmitErrors
} from "redux-form";

const {
  renderSelect,
  renderTextField
  // renderCheckbox
} = formElements;

export function SearchBar(props) {
  // const [labelWidth, setLabelWidth] = React.useState(0);
  const inputLabel = React.useRef(null);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);
  const { onSubmit, classes } = props;
  console.log(onSubmit);
  console.log(props);
  return (
    <div className={classes.searchBar} data-test="component-search-bar">
      <form
        className={classes.searchForm}
        onSubmit={props.handleSubmit(onSubmit)}
        id="listingSearch"
      >
        <Field
          label="Zip code"
          name="searchZip"
          id="searchZip"
          type="text"
          classes={classes}
          component={renderTextField}
        />

        <Field
          data-test="input-bedrooms"
          label="Bedrooms"
          name="bedrooms"
          id="bedrooms"
          type="select"
          options={["", "Studio", "1", "2", "3", "4+"]}
          classes={classes}
          labelWidth={41}
          component={renderSelect}
          formControlName="flexStatic"
          InputProps={{ style: { paddingLeft: 20 } }}
          InputLabelProps={{ style: { paddingLeft: 20 } }}
        />
        <Field
          label="Max Rent"
          name="monthlyRent"
          id="monthlyRent"
          type="number"
          min={0.01}
          step={0.01}
          classes={classes}
          component={renderTextField}
          formControlName="currency"
          InputProps={{ style: { paddingLeft: 15 } }}
          InputLabelProps={{ style: { paddingLeft: 15 } }}
        />
        <Button
          type="button"
          color="primary"
          className={classes.moreButton}
          variant="contained"
          onClick={props.toggleMore}
        >
          More
        </Button>
        {props.more && (
          <FeaturesSearch
            classes={this.classes}
            setAndClose={props.setAndClose}
            clearForm={props.clearForm}
          />
        )}
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  classes: PropTypes.object,
  moreButton: PropTypes.func
};

const mapStateToProps = state => ({
  listing: state.listing,
  initialValues: state.listing.search,
  formValues: getFormValues("listingSearch")(state) || {},
  submitErrors: getFormSubmitErrors("listingSearch")(state)
});

// add reduxForm to component
export const SearchBarForm = reduxForm({
  form: "listingSearch",
  // validate,
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  updateUnregisteredFields: true
})(SearchBar);

// connect to redux store
export const SearchBarConnected = connect(mapStateToProps)(SearchBarForm);

export default withWidth()(SearchBarConnected);
