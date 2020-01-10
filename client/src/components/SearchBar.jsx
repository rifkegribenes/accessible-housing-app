import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";

export default function SearchBar(props) {
  // const [labelWidth, setLabelWidth] = React.useState(0);
  const inputLabel = React.useRef(null);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);
  return (
    <div className={props.classes.searchBar} data-test="component-search-bar">
      <form className={props.classes.searchForm}>
        <TextField
          className={props.classes.searchZip}
          placeholder="Zip code"
          name="zip"
          id="zip"
          variant="outlined"
          value={props.listing.searchForm.propertyZip}
          onChange={props.handleChange}
        />
        <FormControl variant="outlined" className={props.classes.bedrooms}>
          <InputLabel ref={inputLabel} htmlFor="bedrooms">
            Bedrooms
          </InputLabel>
          <Select
            value={props.listing.searchForm.bedrooms}
            onChange={props.handleChange}
            input={<OutlinedInput name="bedrooms" id="bedrooms" />}
          >
            <MenuItem value="">&nbsp;</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4+</MenuItem>
          </Select>
        </FormControl>
        <TextField
          data-test="input-monthly-rent"
          label="Monthly Rent"
          name="monthlyRent"
          id="monthlyRent"
          type="number"
          min={0.01}
          step={0.01}
          className={props.classes.currency}
          InputProps={{ style: { paddingLeft: 15 } }}
          InputLabelProps={{ style: { paddingLeft: 15 } }}
          variant="outlined"
        />
        <Button
          type="button"
          color="primary"
          className={props.classes.moreButton}
          variant="contained"
          onClick={props.toggleMore}
        >
          More
        </Button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  classes: PropTypes.object,
  moreButton: PropTypes.func
};
