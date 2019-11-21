import React from "react";
import PropTypes from "prop-types";

const Home = props => {
  const { classes } = props;
  return (
    <div className={classes.home} data-test="component-home">
      <h2 className={classes.heroHead}>Accessible housing starts here</h2>
      <p className={classes.heroSubhead}>What are you searching for?</p>
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
