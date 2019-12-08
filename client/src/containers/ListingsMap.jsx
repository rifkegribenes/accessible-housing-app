import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import { openSnackbar } from "./Notifier";

import * as apiListingActions from "../store/actions/apiListingActions";

const styles = theme => ({
  root: {}
});

const MapMarker = ({ text }) => <div>{text}</div>;

class ListingsMapUnconnected extends Component {
  static defaultProps = {
    center: {
      lat: 45.5051,
      lng: -122.675
    },
    zoom: 12
  };

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

  render() {
    const markers = this.props.listing.allListing.map(listing => (
      <MapMarker
        key={listing.id}
        lat={listing.property_lat}
        lng={listing.property_lon}
        text={listing.property_name}
      />
    ));

    console.log(markers);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCzzv8kgYfdr9TIKQVG1Y6iexdL90rWYqg" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {markers}
        </GoogleMapReact>
      </div>
    );
  }
}

ListingsMapUnconnected.propTypes = {
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

export const ListingsMapConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingsMapUnconnected);

export default withStyles(styles)(ListingsMapConnected);
