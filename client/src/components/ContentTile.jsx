import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";

import * as utils from "../utils";

export const styles = theme => ({
  root: {
    margin: 20,
    padding: 20,
    maxWidth: 1200
  },
  tile: {
    border: "1px solid theme.palette.primary.main"
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
    lineHeight: "1em"
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
    filter: "contrast(70%)",
    overflow: "hidden",
    position: "relative",
    height: 200,
    transition: "filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91)",
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
      filter: "contrast(100%)"
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
    justifyContent: "space-between",
    padding: "5px 10px 10px 10px"
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
    border: theme.palette.secondary.main,
    display: "flex",
    padding: "10px 20px",
    color: theme.palette.primary.main,
    borderTop: `1px solid ${theme.palette.primary.main}`,
    width: "100%"
  },
  cardPhoneSmall: {
    border: theme.palette.secondary.main,
    display: "flex",
    padding: 10,
    justifyContent: "center",
    color: theme.palette.primary.main,
    borderTop: `1px solid ${theme.palette.primary.main}`,
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
    marginRight: 15
  }
});

const ContentTile = props => {
  const { classes, listingTile, small } = props;
  const {
    primary_image,
    property_name,
    studio_l,
    studio_h,
    br1_l,
    br1_h,
    br2_l,
    br2_h,
    br3_l,
    br3_h,
    br4_l,
    br4_h,
    br5_l,
    br5_h,
    property_email,
    property_phone,
    listing_url,
    notes
  } = listingTile;
  const bedroomsPriceString = utils.bedroomsPriceString(
    studio_l,
    studio_h,
    br1_l,
    br1_h,
    br2_l,
    br2_h,
    br3_l,
    br3_h,
    br4_l,
    br4_h,
    br5_l,
    br5_h
  );
  // console.log(bedroomsPriceString);
  const imageStyle = { backgroundImage: `url(${primary_image})` };
  // console.log(listingTile);

  return (
    <div data-test="component-listing-tile" className={classes.tile}>
      <a
        href={listing_url}
        rel="noopener noreferrer"
        target="_blank"
        className={classes.cardAction}
      >
        <Typography
          component="h2"
          className={small ? classes.titleSmall : classes.title}
          data-test="title"
        >
          {property_name}
        </Typography>
        <div
          className={small ? classes.cardImageSmall : classes.cardImage}
          style={imageStyle}
          data-test="image"
        />
      </a>
      <div
        className={small ? classes.cardListingSmall : classes.cardListing}
        data-test="card-listing"
      >
        <div className={classes.cardRow}>
          <Typography
            style={{ whiteSpace: "pre-line" }}
            component="p"
            className={small ? classes.contentLight : classes.bodyLight}
            data-test="body"
          >
            {bedroomsPriceString}
          </Typography>
        </div>
        <div className={classes.cardRow}>
          <Typography
            component="p"
            className={small ? classes.contentLight : classes.bodyLight}
            data-test="body2"
          >
            {notes}
          </Typography>
        </div>
        <div className={small ? classes.cardFooterSmall : classes.cardFooter}>
          <a href={`tel:${property_phone}`} className={classes.phoneLink}>
            <div className={small ? classes.cardPhoneSmall : classes.cardPhone}>
              <Phone className={classes.icon} />
              <Typography
                component="span"
                className={small ? classes.contentBold : classes.body}
                data-test="body"
              >
                {property_phone}
              </Typography>
            </div>
          </a>
          <a
            href={`mailto:${property_email}`}
            className={classes.emailLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.cardEmail}>
              <Email className={classes.icon} />
              <Typography
                component="span"
                className={small ? classes.contentBold : classes.body}
                data-test="body"
              >
                Email
              </Typography>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

ContentTile.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(ContentTile);
