import React from "react";
import PropTypes from "prop-types";

const Home = props => {
  const { classes } = props;
  return (
    <div className={classes.home} data-test="component-home">
      <h2 className={classes.heroHead}>Find your accessible home.</h2>
      <form className={classes.heroForm}>
        <input
          className={classes.heroInput}
          type="text"
          placeholder="Zip code"
          name="zip"
          id="zip"
        />
      </form>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object
};

export default Home;
