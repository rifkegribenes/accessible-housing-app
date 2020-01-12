import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import { openSnackbar } from "./Notifier";

import * as apiListingActions from "../store/actions/apiListingActions";
import ContentTile from "../components/ContentTile";
import SearchBarForm from "../components/SearchBar";
import Tooltip from "@material-ui/core/Tooltip";
import RoomIcon from "@material-ui/icons/Room";

const styles = theme => ({
  root: {},
  markerCard: {
    width: 200,
    padding: 0,
    // margin: 10,
    position: "relative",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "10px 0px"
    }
  },
  mapIcon: {
    "&:hover": {
      color: "red",
      cursor: "pointer"
    }
  },
  mapContainer: {
    marginTop: 60,
    [theme.breakpoints.down("sm")]: {
      marginTop: 100
    }
  },
  searchBar: {
    backgroundColor: "white",
    padding: 20,
    position: "fixed",
    zIndex: 2,
    width: "100%"
  },
  searchForm: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      justifyContent: "space-between"
    }
  },
  searchZip: {
    width: 200,
    marginRight: 20,
    [theme.breakpoints.down("sm")]: {
      width: "46%",
      marginBottom: 10,
      marginRight: 0
    }
  },
  marginRight: {
    marginRight: 20
  },
  currency: {
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='30px' width='85px'><text x='10' y='20' fill='gray' font-size='20' font-family='source sans pro'>$</text></svg>")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
    flexGrow: 0,
    marginRight: 20,
    [theme.breakpoints.down("sm")]: {
      width: "46%",
      marginRight: 0
    }
  },
  bedrooms: {
    width: 120,
    marginRight: 20,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "46%",
      marginBottom: 10,
      marginRight: 0
    }
  },
  moreButton: {
    width: 120,
    borderRadius: 4,
    position: "relative",
    textTransform: "none",
    fontSize: "1.2em",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      width: "46%",
      marginRight: 0,
      padding: 0,
      boxShadow: "none"
    }
  },
  featuresPanel: {
    width: 500,
    maxWidth: "50%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%"
    },
    position: "fixed",
    right: 0,
    top: 64,
    zIndex: 3,
    backgroundColor: "white",
    padding: 20
  },
  buttonWrap: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "white"
  },
  leftButton: {
    marginRight: 20
  }
});

const MapMarker = props => (
  <div data-test="component-map-marker" className={props.classes.mapMarker}>
    <HtmlTooltip
      title={
        <div className={props.classes.markerCard}>
          <ContentTile listingTile={props.listing} small={true} />
        </div>
      }
    >
      <RoomIcon className={props.classes.mapIcon} />
    </HtmlTooltip>
  </div>
);

const TooltipInteractive = props => <Tooltip interactive {...props} />;

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: theme.typography.pxToRem(12)
    // border: "1px solid #dadde9"
  }
}))(TooltipInteractive);

class ListingsMapUnconnected extends Component {
  static defaultProps = {
    center: {
      lat: 45.5051,
      lng: -122.675
    },
    zoom: 12
  };

  constructor(props) {
    super(props);
    this.state = {
      more: false
    };
  }

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

  toggleMore = () => {
    console.log("toggleMore");
    const newState = { ...this.state };
    newState.more = !this.state.more;
    this.setState({ ...newState });
  };

  clearForm = () => {
    console.log("clearForm");
  };

  setAndClose = () => {
    console.log("setAndClose");
    this.toggleMore();
  };

  handleSubmit = () => {
    console.log("handleSubmit");
  };

  render() {
    const markers = this.props.listing.allListing.map(listingData => (
      <MapMarker
        listing={listingData}
        key={listingData.id}
        lat={listingData.property_lat}
        lng={listingData.property_lon}
        classes={this.props.classes}
      />
    ));

    console.log(markers);
    return (
      // Important! Always set the container height explicitly
      <div
        className={this.props.classes.mapContainer}
        style={{ height: "100vh", width: "100%" }}
      >
        <SearchBarForm
          classes={this.props.classes}
          toggleMore={this.toggleMore}
          listing={this.props.listing}
          more={this.state.more}
          setAndClose={this.setAndClose}
          clearForm={this.clearForm}
          onSubmit={this.handleSubmit}
        />
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
