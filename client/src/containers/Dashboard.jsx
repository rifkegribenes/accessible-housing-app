import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { openSnackbar } from "./Notifier";

import * as Actions from "../store/actions";
import * as apiProfileActions from "../store/actions/apiProfileActions";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  root: {
    margin: 20,
    padding: 20,
    maxWidth: 1200
  },
  card: {
    margin: "auto",
    width: "100%",
    maxWidth: 300,
    position: "relative",
    backgroundColor: "transparent"
  },
  media: {
    height: 0,
    paddingTop: "20%",
    position: "relative",
    backgroundColor: "transparent"
  },
  avatar: {
    width: 80,
    height: 80,
    position: "absolute",
    top: 20,
    left: "calc(50% - 40px)"
  },
  container: {
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  name: {
    color: theme.palette.primary.main,
    textAlign: "center",
    marginTop: 35
  },
  secondary: {
    color: theme.palette.textColor,
    textAlign: "center"
  },
  content: {
    backgroundColor: "white",
    borderRadius: 4
  }
});

export class DashboardUnconnected extends React.Component {
  componentDidMount() {
    let userId, token;
    // check route params for user id and token
    if (this.props.match && this.props.match.params.id) {
      userId = this.props.match.params.id;
      token = this.props.match.params.token;

      // if logged in for first time through social auth,
      // save userId & token to local storage
      window.localStorage.setItem("userId", userId);
      window.localStorage.setItem("authToken", token);
      console.log("setting logged in here");
      this.props.actions.setLoggedIn(userId, token);
      console.log(this.props.appState);
      // remove id & token from route params after saving to local storage
      window.history.replaceState(
        null,
        null,
        `${window.location.origin}/admin`
      );
    } else {
      // if userId is not in route params
      // look in redux store or local storage
      userId =
        this.props.profile.profile._id || window.localStorage.getItem("userId");
      if (window.localStorage.getItem("authToken")) {
        token = window.localStorage.getItem("authToken");
      } else {
        token = this.props.appState.authToken;
      }
    }
    // retrieve user profile & save to redux store
    this.props.api
      .getProfile(token, userId)
      .then(result => {
        // console.log(result.type);
        if (result.type === "GET_PROFILE_SUCCESS") {
          console.log("setting logged in, userId, authToken");
          console.log(userId, token);
          this.props.actions.setLoggedIn(userId, token);
          console.log(this.props.appState);
          // check for redirect url in local storage
          const redirect = window.localStorage.getItem("redirect");
          if (redirect) {
            console.log(`redirect: ${redirect}`);
            // redirect to originally requested page and then
            // clear value from local storage
            this.props.history.push(redirect);
            window.localStorage.removeItem("redirect");
          }
        } else {
          console.log("not logged in");
          console.log(result);
          openSnackbar("error", "Please log in to view this page.");
        }
      })
      .catch(err => {
        // console.log(err);
        openSnackbar("error", err);
      });
  }

  render() {
    const { classes, profile } = this.props;
    const { loggedIn } = this.props.appState;
    const redirect = window.localStorage.getItem("redirect");
    const address2 = profile.profile.companyCity
      ? `${profile.profile.companyCity}, ${profile.profile.companyState} ${profile.profile.companyZip}`
      : "";

    return (
      <div className={classes.container} data-test="component-dashboard">
        {loggedIn && !redirect && (
          <Card className={classes.card}>
            <CardMedia className={classes.media}>
              <Avatar
                alt={`${profile.profile.name}`}
                className={classes.avatar}
                src={profile.profile.avatarUrl}
              />
            </CardMedia>
            <CardContent className={classes.content}>
              <Typography variant="h5" className={classes.name}>
                {`${profile.profile.name}`}
              </Typography>
              <Typography variant="h6" className={classes.secondary}>
                {`${profile.profile.email}`}
              </Typography>
              {profile.profile.phone && (
                <Typography variant="h6" className={classes.secondary}>
                  {`${profile.profile.phone}`}
                </Typography>
              )}
              {profile.profile.companyName && (
                <div>
                  <Typography variant="h5" className={classes.name}>
                    {`${profile.profile.companyName}`}
                  </Typography>
                  <Typography variant="h6" className={classes.secondary}>
                    {`${profile.profile.companyStreet}`}
                  </Typography>
                  <Typography variant="h6" className={classes.secondary}>
                    {address2}
                  </Typography>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    );
  }
}

DashboardUnconnected.propTypes = {
  appState: PropTypes.shape({
    loggedIn: PropTypes.bool,
    authToken: PropTypes.string
  }).isRequired,
  actions: PropTypes.shape({
    setLoggedIn: PropTypes.func
  }).isRequired,
  api: PropTypes.shape({
    getProfile: PropTypes.func
  }).isRequired,
  profile: PropTypes.shape({
    profile: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      avatar_url: PropTypes.string
    }).isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      token: PropTypes.string
    })
  })
};

const mapStateToProps = state => ({
  appState: state.appState,
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
  api: bindActionCreators(apiProfileActions, dispatch)
});

export const DashboardConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardUnconnected);

export default withRouter(withStyles(styles)(DashboardConnected));
