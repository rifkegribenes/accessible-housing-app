import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import LocalLaundryServiceIcon from "@material-ui/icons/LocalLaundryService";
import PetsIcon from "@material-ui/icons/Pets";
import PeopleIcon from "@material-ui/icons/People";
import AccessibleForwardIcon from "@material-ui/icons/AccessibleForward";
import InfoIcon from "@material-ui/icons/Info";
import SvgIcon from "@material-ui/core/SvgIcon";

import defaultImage from "../img/apartment.png";

import * as apiListingActions from "../store/actions/apiListingActions";
import * as utils from "../utils";
import { openSnackbar } from "../containers/Notifier";
import { bindActionCreators } from "redux";
import * as actions from "../store/actions";
import { connect } from "react-redux";

export const styles = theme => ({
  root: {
    margin: 20,
    padding: 20,
    maxWidth: 1200
  },
  tile: {
    width: "100%",
    maxWidth: 800,
    margin: "auto",
    height: "100vh",
    position: "relative",
    top: 60,
    background: "white",
    padding: 20
  },
  button: {
    margin: 8,
    flex: "0 0 auto",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      right: 7,
      top: 20,
      flex: "1 1 auto"
    }
  },
  cardListing: {
    display: "flex",
    flexDirection: "column"
  },
  cardListingSmall: {
    display: "flex",
    flexDirection: "column",
    padding: "5px 0px 0px 0px",
    border: "1px solid theme.palette.primary.main"
  },
  deleteButton: {
    position: "absolute",
    top: 20,
    right: 20,
    visibility: "hidden",
    zIndex: 2
  },
  contentBold: {
    fontWeight: 700
  },
  contentLight: {
    fontWeight: 100
  },
  contentRegular: {
    fontWeight: 400
  },
  title: {
    fontSize: 36,
    fontWeight: 100,
    marginTop: 20,
    textTransform: "capitalize",
    lineHeight: "1em",
    paddingBottom: 10,
    borderBottom: "1px solid rgb(0, 170, 164)",
    color: theme.palette.primary.main
  },
  titleSmall: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    margin: "-5px -10px 5px -10px",
    padding: "10px 20px 15px",
    textAlign: "center",
    borderRadius: "4px 4px 0 0",
    fontSize: "1.5em"
  },
  body: {
    fontSize: "1.1em",
    fontWeight: 100,
    marginTop: 10
  },
  spinner: {
    position: "absolute",
    left: "calc(50% - 10px)",
    top: "calc(50% - 10px)"
  },
  tag: {
    padding: "3px 5px",
    margin: 5,
    border: `1px solid ${theme.palette.primary.main}`,
    textTransform: "capitalize",
    fontWeight: 100
  },
  tagText: {
    display: "inline",
    color: theme.palette.secondary.main
  },
  tags: {
    margin: "20px -5px 10px",
    display: "flex",
    flexWrap: "wrap"
  },
  cardAction: {
    textDecoration: "none"
  },
  cardImage: {
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // filter: "contrast(70%)",
    overflow: "hidden",
    position: "relative",
    height: 300,
    // transition: "filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91)",
    margin: "-20px -20px 20px -20px",
    "&::before": {
      content: `""`,
      paddingTop: "66.6%",
      display: "block",
      [theme.breakpoints.down("md")]: {
        paddingTop: "56.25%"
      }
    },
    "&:hover": {
      // filter: "contrast(100%)"
    }
  },
  cardImageSmall: {
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "contrast(70%)",
    overflow: "hidden",
    position: "relative",
    height: 150,
    transition: "filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91)",
    margin: "-10px -10px 10px -10px",
    "&::before": {
      content: `""`,
      paddingTop: "66.6%",
      display: "block",
      [theme.breakpoints.down("md")]: {
        paddingTop: "56.25%"
      }
    },
    "&:hover": {
      filter: "contrast(100%)"
    }
  },
  cardRow: {
    display: "flex",
    width: "100%",
    justifyContent: "left",
    padding: "5px 10px 10px 10px"
  },
  cardRowTight: {
    display: "flex",
    width: "100%",
    justifyContent: "left",
    padding: "5px 10px 10px 10px",
    marginTop: -5,
    marginLeft: -10
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0px 0px 0px",
    margin: "0px -10px -5px -10px"
  },
  cardFooterSmall: {
    display: "flex",
    flexDirection: "column",
    padding: "5px 0px 0px 0px",
    margin: "0px -10px -5px -10px"
  },
  cardPhone: {
    background: theme.palette.primary.main,
    display: "flex",
    padding: "10px 20px 10px 10px",
    color: "white",
    width: "100%"
  },
  cardEmail: {
    background: theme.palette.secondary.main,
    color: "white",
    display: "flex",
    justifyContent: "center",
    padding: 10,
    minWidth: "40%",
    borderRadius: "0px 0px 4px 0px"
  },
  emailLink: {
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 1,
    textDecoration: "none",
    "&:hover": {
      color: "white"
    },
    "&:visited": {
      color: "white"
    }
  },
  phoneLink: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.main
    },
    "&:visited": {
      color: theme.palette.primary.main
    }
  },
  icon: {
    marginRight: 15,
    color: "white"
  },
  svgIcon: {
    marginRight: 15,
    color: theme.palette.secondary.main
  },
  commsLink: {
    marginTop: 0,
    color: "white"
  }
});

export class ListingFullContainer extends React.Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      console.log(this.props.match.params.id);
      this.props.apiListing
        .getListingById(this.props.match.params.id)
        .then(result => {
          if (
            result.type === "GET_LISTING_BY_ID_FAILURE" ||
            this.props.listing.error
          ) {
            openSnackbar(
              "error",
              this.props.listing.error ||
                "An error occured while trying to fetch your listing."
            );
          } else {
            console.log(this.props.listing.currentListing);
          }
        })
        .catch(err => openSnackbar("error", err));
    }
  }

  render() {
    const { classes, listing } = this.props;
    console.log(listing.currentListing);
    const {
      primaryImage,
      propertyName,
      availability,
      laundryType,
      pets,
      age,
      accessibility,
      propertyStreet,
      propertyCity,
      propertyState,
      propertyZip,
      propertyEmail,
      propertyPhone,
      listingUrl,
      notes,
      bedroomsPriceString
    } = listing.currentListing;
    const propertyAddress = `${propertyStreet}\n${propertyCity}, ${propertyState} ${propertyZip}`;
    console.log(bedroomsPriceString);
    const imageStyle = {
      backgroundImage: `url(${primaryImage ? primaryImage : defaultImage})`
    };

    const rowsArray = [
      propertyAddress,
      bedroomsPriceString,
      availability,
      laundryType,
      pets,
      age,
      accessibility,
      notes
    ];
    console.log(rowsArray);

    const iconsArr = [
      LocationOnIcon,
      AttachMoneyIcon,
      EventAvailableIcon,
      LocalLaundryServiceIcon,
      PetsIcon,
      PeopleIcon,
      AccessibleForwardIcon,
      InfoIcon
    ];

    console.log(iconsArr[0]);

    const propertyInfo = rowsArray.map((rowItem, index) => {
      if (!!rowItem) {
        return (
          <div className={classes.cardRow} key={index}>
            <SvgIcon
              component={iconsArr[index]}
              className={classes.svgIcon}
            ></SvgIcon>
            <Typography
              style={{ whiteSpace: "pre-line" }}
              component="p"
              className={classes.bodyLight}
              data-test="body"
            >
              {rowItem}
            </Typography>
          </div>
        );
      }
    });

    return (
      <div data-test="component-listing-tile" className={classes.tile}>
        <a
          href={listingUrl}
          rel="noopener noreferrer"
          className={classes.cardAction}
        >
          <div
            className={classes.cardImage}
            style={imageStyle}
            data-test="image"
          />
          <Typography
            component="h2"
            className={classes.title}
            data-test="title"
          >
            {propertyName}
          </Typography>
        </a>
        <div className={classes.cardRowTight}>
          {propertyPhone && (
            <a href={`tel:${propertyPhone}`} className={classes.phoneLink}>
              <div className={classes.cardPhone}>
                <PhoneIcon className={classes.icon} />
                <Typography
                  component="span"
                  className={classes.commsLink}
                  data-test="body"
                >
                  {propertyPhone}
                </Typography>
              </div>
            </a>
          )}
          {propertyEmail && (
            <a
              href={`mailto:${propertyEmail}`}
              className={classes.emailLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={classes.cardEmail}>
                <EmailIcon className={classes.icon} />
                <Typography
                  component="span"
                  className={classes.commsLink}
                  data-test="body"
                >
                  Email
                </Typography>
              </div>
            </a>
          )}
        </div>
        <div className={classes.cardListing} data-test="card-listing">
          {propertyInfo}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listing: state.listing,
  appState: state.appState
});

const mapDispatchToProps = dispatch => ({
  apiListing: bindActionCreators(apiListingActions, dispatch),
  actions: bindActionCreators(actions, dispatch)
});

export const ListingFullConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingFullContainer);

export default withStyles(styles)(ListingFullConnected);
