import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const Home = props => {
  const { classes, searchFunc, searchZip } = props;

  return (
    <div className={classes.home} data-test="component-home">
      <h2 className={classes.heroHead}>Accessible housing starts here</h2>
      <p className={classes.heroSubhead}>What are you searching for?</p>
      <form className={classes.heroForm}>
        <input
          ref={searchZip}
          className={classes.heroInput}
          type="text"
          placeholder="Zip code"
          name="zip"
          id="zip"
        />
        <Button
          type="button"
          color="primary"
          className={props.classes.searchButton}
          variant="contained"
          onClick={searchFunc}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object
};

export default Home;
