import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";

import * as Actions from "./store/actions";
import * as apiProfileActions from "./store/actions/apiProfileActions";
import * as apiListingActions from "./store/actions/apiListingActions";

import NavBar from "./containers/NavBar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./containers/Logout";
import Dashboard from "./containers/Dashboard";
import AddListingContainer from "./containers/AddListingContainer";
import Notifier from "./containers/Notifier";
import ContentLibrary from "./containers/ContentLibrary";
import Spinner from "./components/Spinner";
import ListingsMap from "./containers/ListingsMap";

import Hero from "./img/hero_keys_1920x1080.jpg";

const styles = theme => ({
  root: {
    flexGrow: 1,
    boxSizing: "border-box"
  },
  notFound: {
    height: "80vh",
    width: "auto",
    marginTop: "-60px"
  },
  container: {
    maxWidth: 1200,
    margin: "auto",
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  appRoot: {
    width: "100vw",
    height: "100%",
    minHeight: "80vh",
    backgroundImage: `url("${Hero}")`,
    backgroundAttachment: "fixed",
    backgroundPosition: "bottom",
    [theme.breakpoints.up("xl")]: {
      backgroundSize: "cover"
    }
  },
  message: {
    margin: "auto",
    width: "50%",
    textAlign: "center",
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%"
    },
    lineHeight: "2em",
    background: "white",
    borderRadius: "4px",
    padding: 60,
    fontSize: "1.2em"
  },
  row: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap"
    }
  },
  button: {
    height: 100,
    margin: "20px auto",
    width: 100
  },
  footer: {
    width: "100vw",
    margin: "auto",
    position: "fixed",
    backgroundColor: "white",
    bottom: 0,
    padding: 25,
    height: 73,
    [theme.breakpoints.down("sm")]: {
      height: 53
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "middle",
    boxShadow: "0 1px 5px 2px rgba(0,0,0,.2)",
    zIndex: 2,
    color: "white"
  },
  footerIcon: {
    width: 30,
    height: "auto",
    marginTop: 15,
    [theme.breakpoints.down("sm")]: {
      marginTop: 5
    },
    fill: theme.palette.secondary.main
  },
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "block"
  },
  form: {
    background: "white"
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "middle"
  },
  heroHead: {
    fontFamily: "'Alfa Slab One', cursive",
    fontSize: "4.5em",
    letterSpacing: "2px",
    color: "white",
    textShadow: "0 0 20px rgba(0, 0, 0, 0.63)",
    textAlign: "center"
  },
  heroSubhead: {
    fontSize: "3.5em",
    color: "white",
    textShadow: "0 0 20px rgba(0, 0, 0, 0.63)",
    textAlign: "center"
  },
  heroForm: {
    width: "70vw",
    margin: "auto",
    display: "flex"
  },
  heroInput: {
    width: "100%",
    height: 60,
    fontSize: "2em",
    padding: 10,
    borderRadius: 4
  },
  searchButton: {
    fontSize: "1.5em",
    textTransform: "none",
    padding: "10px 20px",
    borderRadius: 4,
    marginLeft: 10
  }
});

export class AppUnconnected extends Component {
  constructor(props) {
    super(props);
    this.main_ref = React.createRef();
    this.state = {
      deleteDialogOpen: false
    };
    this.searchZip = React.createRef();
  }

  componentDidMount() {
    // If not logged in, check local storage for authToken
    // if it doesn't exist, it returns the string "undefined"
    if (!this.props.appState.loggedIn) {
      const authToken = window.localStorage.getItem("authToken");
      const userId = window.localStorage.getItem("userId");
      if (
        authToken &&
        authToken !== "undefined" &&
        userId &&
        userId !== "undefined"
      ) {
        this.props.apiProfile
          .validateToken(authToken, userId)
          .then(result => {
            if (result.type === "VALIDATE_TOKEN_FAILURE") {
              window.localStorage.clear();
            }
          })
          .catch(err => console.log(err));
      }
    }
  }

  search = () => {
    console.log(`searching... ${this.searchZip.current.value}`);
    if (!this.searchZip.current.value) {
      console.log("no zip provided");
    } else {
      this.props.apiListing.handleSearch({
        target: { name: "propertyZip", value: this.searchZip.current.value }
      });
      this.props.history.push("/map");
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div data-test="component-app" className={classes.appRoot}>
        <CssBaseline />
        <NavBar main_ref={this.main_ref} />
        <Notifier />
        {this.props.appState.loading && <Spinner />}
        <main className={classes.container} id="main" ref={this.main_ref}>
          <Switch>
            <Route
              exact
              path="/"
              render={routeProps => (
                <Home
                  {...routeProps}
                  classes={this.props.classes}
                  searchZip={this.searchZip}
                  searchFunc={this.search}
                />
              )}
            />
            <Route
              path="/admin/:id?/:token?"
              render={routeProps => <Dashboard {...routeProps} />}
            />
            <Route
              path="/new"
              render={routeProps => (
                <AddListingContainer
                  setRedirect={this.setRedirect}
                  {...routeProps}
                />
              )}
            />
            <Route
              path="/map"
              render={routeProps => (
                <ListingsMap
                  listing={this.props.listing}
                  setRedirect={this.setRedirect}
                  {...routeProps}
                />
              )}
            />
            <Route
              path="/edit/:id"
              render={routeProps => (
                <AddListingContainer
                  edit={true}
                  setRedirect={this.setRedirect}
                  {...routeProps}
                />
              )}
            />
            <Route
              path="/listings"
              render={routeProps => (
                <ContentLibrary
                  setRedirect={this.setRedirect}
                  {...routeProps}
                />
              )}
            />
            <Route
              path="/logout"
              render={routeProps => (
                <Logout classes={this.props.classes} {...routeProps} />
              )}
            />
            <Route
              path="/login"
              render={routeProps => (
                <Login classes={this.props.classes} {...routeProps} />
              )}
            />
            <Route
              path="*"
              render={routeProps => (
                <NotFound classes={this.props.classes} {...routeProps} />
              )}
            />
          </Switch>
        </main>
        <Footer classes={this.props.classes} />
      </div>
    );
  }
}

AppUnconnected.propTypes = {
  classes: PropTypes.object.isRequired,
  appState: PropTypes.shape({
    loggedIn: PropTypes.bool,
    authToken: PropTypes.string
  }).isRequired,
  apiProfile: PropTypes.shape({
    validateToken: PropTypes.func
  }).isRequired,
  apiListing: PropTypes.shape({
    handleInput: PropTypes.func
  }).isRequired,
  listing: PropTypes.shape({
    form: PropTypes.shape({
      property_name: PropTypes.string,
      property_street: PropTypes.string
    }),
    error: PropTypes.string,
    deleteDialogOpen: PropTypes.bool,
    currentListing: PropTypes.shape({
      property_name: PropTypes.string,
      property_street: PropTypes.string
    })
  }).isRequired,
  profile: PropTypes.shape({
    profile: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      avatar_url: PropTypes.string
    })
  }).isRequired
};

const mapStateToProps = state => ({
  appState: state.appState,
  profile: state.profile,
  listing: state.listing
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
  apiListing: bindActionCreators(apiListingActions, dispatch),
  apiProfile: bindActionCreators(apiProfileActions, dispatch)
});

export const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppUnconnected);

export default withStyles(styles)(withRouter(AppConnected));
