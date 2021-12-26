import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import withWidth from "@material-ui/core/withWidth";
import FeaturesSearch from "../components/FeaturesSearch";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
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
  const { onSubmit, classes, searchState, handleCheck } = props;
  // console.log(handleCheck);
  return (
    <div className={classes.searchBar} data-test="component-search-bar">
      <form
        className={classes.searchForm}
        onSubmit={props.handleSubmit(onSubmit)}
        id="listingSearch"
      >
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          size="small"
          onClick={props.hideSearch}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
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
          options={["", "Studio", "1", "2", "3", "4", "5"]}
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
          inputProps={{
            style: { paddingLeft: 15, textAlign: "right" }
          }}
          inputLabelProps={{ style: { paddingLeft: 15 } }}
          startAdornment="currency"
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
        <Button
          type="button"
          color="secondary"
          className={classes.clearButton}
          variant="outlined"
          onClick={props.clearSearch}
        >
          Reset Filters
        </Button>
        {props.more && (
          <FeaturesSearch
            classes={classes}
            setAndClose={props.setAndClose}
            clearSearch={props.clearSearch}
            more={props.more}
            toggleDrawer={props.toggleDrawer}
            searchState={searchState}
            handleCheck={handleCheck}
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
