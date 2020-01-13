import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import withWidth from "@material-ui/core/withWidth";
import FeaturesSearch from "../components/FeaturesSearch";
import Button from "@material-ui/core/Button";
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
  // const inputLabel = React.useRef(null);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);
  const { onSubmit, classes } = props;
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
          formControlName="searchZip"
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
          formControlName="searchBedrooms"
          inputProps={{ style: { paddingLeft: 20 } }}
          inputLabelProps={{ style: { paddingLeft: 20 } }}
        />
        <Field
          label="Max Rent"
          name="maxRent"
          id="maxRent"
          type="number"
          min={0.01}
          step={0.01}
          classes={classes}
          component={renderTextField}
          formControlName="maxRent"
          inputProps={{ style: { paddingLeft: 15, textAlign: "right" } }}
          inputLabelProps={{ style: { paddingLeft: 15 } }}
        />
        <Button
          type="button"
          color="secondary"
          className={classes.moreButton}
          variant="outlined"
          onClick={props.toggleMore}
        >
          More
        </Button>
        <Button
          type="submit"
          color="primary"
          className={classes.searchButton}
          variant="contained"
          onClick={props.search}
        >
          Search
        </Button>
        {props.more && (
          <FeaturesSearch
            classes={classes}
            setAndClose={props.setAndClose}
            clearForm={props.clearForm}
            more={props.more}
            toggleDrawer={props.toggleDrawer}
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
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  updateUnregisteredFields: true
})(SearchBar);

// connect to redux store
export const SearchBarConnected = connect(mapStateToProps)(SearchBarForm);

export default withWidth()(SearchBarConnected);
