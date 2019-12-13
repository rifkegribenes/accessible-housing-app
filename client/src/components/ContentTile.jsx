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
  cardListingSmall: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 10px 10px 10px",
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
  }
});

const ContentTile = props => {
  const { classes, listingTile, small } = props;
  const { primary_image, property_name, bedrooms, monthly_rent } = listingTile;
  const imageStyle = { backgroundImage: `url(${primary_image})` };

  return (
    <div data-test="component-listing-tile" className={classes.tile}>
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
      <div
        className={small ? classes.cardListingSmall : classes.cardListing}
        data-test="card-listing"
      >
        <Typography
          component="span"
          className={small ? classes.contentLight : classes.bodyLight}
          data-test="body"
        >
          {bedrooms} BR
        </Typography>
        <Typography
          component="span"
          className={small ? classes.contentBold : classes.body}
          data-test="body"
        >
          ${Math.trunc(monthly_rent)}
        </Typography>
      </div>
    </div>
  );
};

ContentTile.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(ContentTile);
