import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import queryString from "query-string";

export class NoAccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "You must log in or sign up to post a listing."
    };
  }
  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    if (params.message) {
      this.setState({
        message: decodeURIComponent(params.message)
      });
    }
  }
  render() {
    return (
      <div
        className={this.props.classes.message}
        data-test="component-no-access"
      >
        <p>
          {this.props.message ? this.props.message : this.state.message}
          <br />
        </p>
        <div className={this.props.classes.buttonWrap}>
          <Button
            type="button"
            color="primary"
            className={this.props.classes.next}
            variant="contained"
            href={this.props.link}
            onClick={this.props.setRedirect}
          >
            {this.props.buttonText}
          </Button>
        </div>
      </div>
    );
  }
}

NoAccess.propTypes = {
  classes: PropTypes.object,
  buttonText: PropTypes.string,
  link: PropTypes.string,
  message: PropTypes.string
};

export default withRouter(NoAccess);
