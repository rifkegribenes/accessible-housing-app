import React from "react";
import PropTypes from "prop-types";

const Footer = props => (
  <div className={props.classes.footer} data-test="component-footer">
    &copy;{new Date().getFullYear()}&nbsp;
    <a
      className={props.classes.fLink}
      href="https://cvision.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Community Vision
    </a>
  </div>
);

Footer.propTypes = {
  classes: PropTypes.object
};

export default Footer;
