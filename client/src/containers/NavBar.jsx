import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Slide from "@material-ui/core/Slide";
import Avatar from "@material-ui/core/Avatar";

import { skip } from "../utils";
import rci_logo from "../img/RCI_140x100.png";
import mfnw_logo from "../img/mfnw-red.svg";
// import { openSnackbar } from "./Notifier";

// const BASE_URL = process.env.REACT_APP_BASE_URL;

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    color: theme.palette.primary.main
  },
  flex: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "white",
    position: "fixed",
    height: 60,
    [theme.breakpoints.down("sm")]: {
      height: 100
    }
  },
  menuButton: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      left: 12,
      top: 12
    }
  },
  menuWrap: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  menuLink: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    textTransform: "capitalize",
    fontSize: "1.5em",
    fontWeight: "bold",
    padding: "6px 12px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1rem",
      textAlign: "center",
      lineHeight: 1.1,
      padding: "8px 12px"
    }
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.main,
    fontFamily: '"Alegreya Sans", sans-serif',
    fontSize: "2.4rem",
    textDecoration: "none",
    paddingLeft: 10,
    fontWeight: 200,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.6rem",
      lineHeight: 1.1,
      fontWeight: 400
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: 10,
      paddingLeft: 0
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem"
    }
  },
  loginButton: {
    textDecoration: "none",
    height: 30,
    margin: "auto",
    backgroundColor: theme.palette.primary.main
  },
  buttonRight: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    position: "absolute",
    right: 0,
    top: 0,
    height: 60,
    padding: "10px 20px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main
    }
  },
  avatar: {
    marginRight: 20,
    right: 85,
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  admin: {
    display: "flex"
  },
  skip: {
    position: "absolute",
    top: "-1000px",
    left: "-1000px",
    height: "1px",
    width: "1px",
    textAlign: "left",
    overflow: "hidden",

    "&:focus": {
      position: "relative",
      top: 0,
      left: "-13px",
      width: "auto",
      height: "auto",
      overflow: "visible",
      textAlign: "center",
      zIndex: "1000"
    }
  },
  menuItem: {
    // padding: "24px 16px",
    textAlign: "left",
    textTransform: "capitalize",
    fontFamily: [
      '"Source Sans Pro"',
      '"Helvetica Neue"',
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(","),
    fontWeight: 700,
    color: theme.palette.secondary.main
  },
  ListItemText: {
    color: theme.palette.secondary.main
  },
  logo: {
    height: 30,
    width: "auto",
    marginRight: 10,
    [theme.breakpoints.down("sm")]: {
      margin: "0 10px"
    }
  },
  logoLink: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center"
    }
  },
  menuLabel: {
    marginLeft: 3
  },
  toolbar: {
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      paddingTop: 20
    }
  },
  drawer: {
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
  }
});

export class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(e) {
    this.setState({ anchorEl: e.currentTarget });
    this.props.main_ref.current.classList.add("is-blurred");
  }

  handleClose() {
    this.setState({ anchorEl: null });
    this.props.main_ref.current.classList.remove("is-blurred");
  }

  skipToMain() {
    return skip("main");
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const { loggedIn } = this.props.appState;
    // console.log(`loggedIn: ${loggedIn}`);
    const links = ["new", "map"];
    const adminLinks = ["new", "map", "logout"];
    const adminLinksLabels = {
      new: "Add a Listing",
      listings: "Browse Listings",
      map: "Search Listings",
      logout: "Logout"
    };
    const menuLinks = loggedIn ? adminLinks : links;
    const ListItemLink = props => {
      const { primary, handleClose, link } = props;
      return (
        <MenuItem
          button
          component={Button}
          href={`/${link}`}
          onClick={() => {
            this.props.history.push(`/${link}`);
            handleClose();
          }}
          className={classes.menuItem}
          data-test="menu-item-mobile"
        >
          <ListItemText
            primary={primary}
            primaryTypographyProps={{
              color: "secondary"
            }}
          />
        </MenuItem>
      );
    };
    const mobileLinks = (
      <div data-test="mobile-links">
        {menuLinks.map((link, index) => {
          return (
            <ListItemLink
              key={index}
              primary={adminLinksLabels[link]}
              handleClose={this.handleClose}
              link={link}
              data-test="mobile-link"
            />
          );
        })}
      </div>
    );

    return (
      <div className={classes.root} data-test="component-navbar">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Button
              color="primary"
              variant="contained"
              className={classes.skip}
              onClick={this.skipToMain}
              data-test="skiplink-button"
            >
              Skip to content &rsaquo;
            </Button>
            <React.Fragment>
              <IconButton
                className={classes.menuButton}
                color="secondary"
                aria-label="Menu"
                aria-owns={anchorEl ? "nav-menu" : null}
                aria-haspopup="true"
                onClick={e => this.handleClick(e)}
                data-test="menu-button"
              >
                <MenuIcon />
                <Typography className={classes.menuLabel}>Menu</Typography>
              </IconButton>
              <Menu
                id="nav-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                component="nav"
                className="drawer"
                elevation={0}
                anchorOrigin={{ horizontal: "left", vertical: "top" }}
                transformOrigin={{ horizontal: "left", vertical: "top" }}
                TransitionComponent={Slide}
                TransitionProps={{ direction: "right" }}
                PaperProps={{ className: classes.drawer }}
                data-test="menu"
              >
                {mobileLinks}
              </Menu>
            </React.Fragment>
            <Link to="/" className={classes.logoLink} data-test="logo-link">
              <img
                src={rci_logo}
                alt="Accessible Housing Hotsheet"
                className={classes.logo}
                data-test="logo-image"
              />
              <img
                src={mfnw_logo}
                alt="Accessible Housing Hotsheet"
                className={classes.logo}
                data-test="logo-image"
              />
            </Link>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.title}
              data-test="title"
            >
              <Link to="/" className={classes.title}>
                Accessible Housing Hotsheet
              </Link>
            </Typography>
            {loggedIn && (
              <div className={classes.admin}>
                <Avatar
                  alt={this.props.profile.profile.name}
                  src={this.props.profile.profile.avatarUrl}
                  className={classes.avatar}
                />
              </div>
            )}
            <Button
              className={classes.buttonRight}
              data-test="button-right"
              href="/new"
              type="button"
            >
              Add a Listing
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  appState: PropTypes.shape({
    loggedIn: PropTypes.bool
  }),
  profile: PropTypes.shape({
    profile: PropTypes.shape({
      name: PropTypes.string,
      avatar_url: PropTypes.string
    })
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

const mapStateToProps = state => ({
  appState: state.appState,
  profile: state.profile
});

export default withRouter(withStyles(styles)(connect(mapStateToProps)(NavBar)));
