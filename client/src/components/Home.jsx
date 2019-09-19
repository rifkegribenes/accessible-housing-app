import React from "react";
import PropTypes from "prop-types";

const Home = props => (
  <div className={props.classes.home} data-test="component-home">
    Home
  </div>
);

Home.propTypes = {
  classes: PropTypes.object
};

export default Home;
