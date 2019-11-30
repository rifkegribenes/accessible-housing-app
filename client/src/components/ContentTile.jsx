import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

export const styles = theme => ({
  root: {
    margin: 20,
    padding: 20,
    maxWidth: 1200
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
  deleteButton: {
    position: "absolute",
    top: 20,
    right: 20,
    visibility: "hidden",
    zIndex: 2
  },
  listingBold: {
    fontWeight: 700
  },
  listingLight: {
    fontWeight: 100
  },
  listingRegular: {
    fontWeight: 400
  },
  title: {
    fontSize: 36,
    fontWeight: 100,
    marginTop: 20,
    textTransform: "capitalize",
    lineHeight: "1em"
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
      listing: `""`,
      paddingTop: "66.6%",
      display: "block",
      [theme.breakpoints.down("md")]: {
        paddingTop: "56.25%"
      }
    },
    "&:hover": {
      filter: "contrast(100%)"
    }
  }
});

const ContentTile = props => {
  const { classes, listingTile } = props;
  const {
    primary_image,
    property_name,
    property_street,
    property_city,
    property_zip
  } = listingTile;
  const imageStyle = { backgroundImage: `url(${primary_image})` };

  return (
    <div data-test="component-listing-tile">
      <div className={classes.cardImage} style={imageStyle} data-test="image" />
      <div className={classes.cardListing} data-test="card-listing">
        <Typography component="h2" className={classes.title} data-test="title">
          {property_name}
        </Typography>

        <Typography component="p" className={classes.body} data-test="body">
          {property_street}, {property_city} {property_zip}
        </Typography>
      </div>
    </div>
  );
};

ContentTile.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(ContentTile);
