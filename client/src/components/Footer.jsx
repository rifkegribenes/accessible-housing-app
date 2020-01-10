import React from "react";
import PropTypes from "prop-types";

const Footer = props => (
  <div className={props.classes.footer} data-test="component-footer">
    &copy;{new Date().getFullYear()}&nbsp;
    <a
      classname={props.classes.fLink}
      href="http://realchoiceoregon.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Real Choice Initiative
    </a>
    &nbsp;•&nbsp;
    <a
      classname={props.classes.footerLink}
      href="https://www.multifamilynw.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Multi-Family NW
    </a>
  </div>
);

Footer.propTypes = {
  classes: PropTypes.object
};

export default Footer;
