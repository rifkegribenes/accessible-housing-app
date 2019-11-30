import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import FAB from "@material-ui/core/Fab";
import Create from "@material-ui/icons/Create";
import Delete from "@material-ui/icons/Delete";

import * as apiListingActions from "../store/actions/apiListingActions";
// import * as utils from "../utils";
import ContentTile from "../components/ContentTile";
import Spinner from "../components/Spinner";
import AlertDialog from "../components/AlertDialog";
import { openSnackbar } from "./Notifier";

const styles = theme => ({
  root: {
    margin: "0 auto",
    width: "100%",
    maxWidth: 1920,
    paddingBottom: 60,
    background: "white",
    minHeight: "100vh"
  },
  section: {
    padding: "60px 0 0 0"
  },
  head: {
    color: theme.palette.primary.main
  },
  buttonEdit: {
    position: "absolute",
    bottom: 20,
    right: 20,
    visibility: "hidden",
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  },
  buttonDelete: {
    position: "absolute",
    bottom: 20,
    right: 80,
    visibility: "hidden",
    backgroundColor: theme.palette.danger.main,
    "&:hover": {
      backgroundColor: theme.palette.danger.light
    }
  },
  actionArea: {
    borderRadius: 6,
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,.05)"
    },
    "&:hover $buttonEdit": {
      visibility: "visible"
    },
    "&:hover $buttonDelete": {
      visibility: "visible"
    }
  },
  gridWrapper: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "50px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px"
    }
  },
  card: {
    width: "31%",
    padding: 20,
    margin: "10px",
    position: "relative",
    border: `1px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down("md")]: {
      width: "47%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "10px 0px"
    }
  }
});

export class ContentLibraryUnconnected extends React.Component {
  componentDidMount() {
    const { authToken } = this.props.appState;
    this.props.apiListing
      .getAllListings(authToken)
      .then(result => {
        console.log(result.payload);
        if (
          result.type === "GET_ALL_LISTING_FAILURE" ||
          this.props.listing.error
        ) {
          openSnackbar(
            "error",
            this.props.listing.error ||
              "An error occured while fetching listing"
          );
        }
      })
      .catch(err => {
        openSnackbar("error", err);
      });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      (!prevProps.appState.authToken && this.props.appState.authToken) ||
      prevProps.listing.allListing.length !==
        this.props.listing.allListing.length
    ) {
      this.props.apiListing
        .getAllListings(this.props.appState.authToken)
        .then(result => {
          if (
            result.type === "GET_ALL_LISTING_FAILURE" ||
            this.props.listing.error
          ) {
            openSnackbar(
              "error",
              this.props.listing.error ||
                "An error occured while fetching listing"
            );
          }
        })
        .catch(err => {
          openSnackbar("error", err);
        });
    }
  }

  handleDeleteDialogOpen = tile => {
    if (tile && this.props.appState.loggedIn) {
      this.props.apiListing.handleDeleteOpen(tile);
    }
  };

  async deleteListing(listingData) {
    const token = this.props.appState.authToken;
    const listingDeleteResult = await this.props.apiListing.deleteListing(
      token,
      listingData.id
    );
    if (
      !listingDeleteResult.type ||
      listingDeleteResult.type !== "DELETE_LISTING_SUCCESS"
    ) {
      openSnackbar("error", this.props.listing.error);
    } else if (
      listingDeleteResult.type === "DELETE_LISTING_SUCCESS" &&
      listingData.listing_type === "image"
    ) {
      const keyParts = listingData.listing.split("/");
      const key = keyParts[keyParts.length - 1];
      const imageDeleteResult = await this.props.apiListing.deleteImage(
        token,
        key
      );
      if (imageDeleteResult.type === "DELETE_IMAGE_SUCCESS") {
        openSnackbar("success", `Deleted ${listingData.listing_type}.`);
        this.props.apiListing.getAllListing(token);
      }
    } else if (listingDeleteResult.type === "DELETE_LISTING_SUCCESS") {
      openSnackbar("success", `Deleted ${listingData.listing_type}.`);
      this.props.apiListing.getAllListing(token);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div data-test="component-listing-library" className={classes.root}>
        {this.props.appState.loading && <Spinner />}
        {this.props.listing.deleteDialogOpen && (
          <AlertDialog
            open={this.props.listing.deleteDialogOpen}
            handleClose={this.props.apiListing.handleDeleteClose}
            title="Delete Listing"
            listing={`Are you sure you want to delete this listing?`}
            danger={true}
            action={() => {
              this.deleteListing(this.props.listing.currentListing);
              this.props.apiListing.handleDeleteClose();
            }}
            buttonText="Delete"
            data-test="alert-dialog"
          />
        )}
        <div className={classes.section}>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            className={classes.head}
            style={{ paddingTop: 20 }}
            data-test="headline"
          >
            Listings
          </Typography>
          <div className={classes.gridWrapper}>
            {this.props.listing.allListing.map(tile => {
              return (
                <div className={classes.card} key={tile.id} data-test="tile">
                  <div className={classes.actionArea}>
                    <FAB
                      className={classes.buttonDelete}
                      onClick={() => this.handleDeleteDialogOpen(tile)}
                      color="primary"
                      aria-label="Delete Listing"
                      data-test="delete"
                    >
                      <Delete />
                    </FAB>
                    <FAB
                      className={classes.buttonEdit}
                      onClick={() =>
                        this.props.history.push(`/edit/${tile.id}`)
                      }
                      color="primary"
                      aria-label="Edit Listing"
                      data-test="edit"
                    >
                      <Create />
                    </FAB>
                  </div>
                  <ContentTile listingTile={tile} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

ContentLibraryUnconnected.propTypes = {
  classes: PropTypes.object.isRequired,
  appState: PropTypes.shape({
    loggedIn: PropTypes.bool,
    authToken: PropTypes.string
  }),
  listing: PropTypes.shape({
    filteredList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        listing_type: PropTypes.string,
        listing: PropTypes.string,
        updated_at: PropTypes.string
      })
    ),
    allListing: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        listing_type: PropTypes.string,
        listing: PropTypes.string,
        updated_at: PropTypes.string
      })
    ),
    currentListing: PropTypes.shape({
      id: PropTypes.string,
      listing_type: PropTypes.string,
      listing: PropTypes.string,
      updated_at: PropTypes.string
    }),
    deleteDialogOpen: PropTypes.bool,
    apiListing: PropTypes.shape({
      getAllListing: PropTypes.func,
      handleDeleteOpen: PropTypes.func,
      deleteListing: PropTypes.func,
      deleteImage: PropTypes.func
    })
  })
};

const mapStateToProps = state => ({
  appState: state.appState,
  profile: state.profile,
  listing: state.listing
});

const mapDispatchToProps = dispatch => ({
  apiListing: bindActionCreators(apiListingActions, dispatch)
});

export const ContentLibraryConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentLibraryUnconnected);

export default withRouter(withStyles(styles)(ContentLibraryConnected));
