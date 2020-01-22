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

import { getFormValues } from "redux-form";
import { calcFeatures, filterListings } from "../components/FormElements";

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
    color: theme.palette.primary.main,
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
    height: 55,
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      justifyContent: "space-between",
      height: 240,
      paddingTop: 10
    }
  },
  searchZip: {
    maxWidth: 200,
    marginRight: 20,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "46%",
      marginBottom: `15px !important`,
      marginRight: 0
    }
  },
  searchBedrooms: {
    minWidth: 150,
    marginRight: 20,
    [theme.breakpoints.down("sm")]: {
      width: "46%",
      marginBottom: `15px !important`,
      marginRight: 0
    }
  },
  maxRent: {
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='30px' width='85px'><text x='10' y='20' fill='gray' font-size='20' font-family='source sans pro'>$</text></svg>")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
    flexGrow: 0,
    maxWidth: 150,
    marginRight: 20,
    textAlign: "right",
    height: 55,
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='30px' width='85px'><text x='10' y='20' fill='gray' font-size='20' font-family='source sans pro'>$</text></svg>")`,
      maxWidth: "46%",
      // width: "100%",
      marginBottom: `15px !important`,
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
    height: 55,
    marginRight: 20,
    [theme.breakpoints.down("sm")]: {
      width: "46%",
      marginRight: 0,
      marginBottom: 10,
      padding: 0,
      boxShadow: "none"
    }
  },
  searchButton: {
    width: 120,
    borderRadius: 4,
    position: "relative",
    textTransform: "none",
    fontSize: "1.2em",
    fontWeight: 700,
    height: 55,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: 0,
      boxShadow: "none"
    }
  },
  drawer: {
    width: 500,
    maxWidth: "50%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%"
    },
    position: "absolute",
    right: 0,
    top: 0,
    // zIndex: 3,
    backgroundColor: "white",
    padding: 20,
    minHeight: "100vh"
  },
  drawerPaper: {
    width: 500,
    padding: 20,
    position: "absolute",
    top: 0,
    paddingBottom: 135,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      paddingBottom: 160
    }
  },
  buttonWrap: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "white"
  },
  leftButton: {
    marginRight: 20
  },
  closeButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "absolute",
      top: 5,
      right: 5
    }
  },
  clearButton: {
    marginLeft: 20,
    borderRadius: 4,
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
      marginLeft: 0,
      width: "100%"
    }
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
      more: false,
      search: true
    };
  }

  componentDidMount() {
    this.getAllListings();
  }

  getAllListings = () => {
    const { authToken } = this.props.appState;
    this.props.apiListing
      .getAllListings(authToken)
      .then(result => {
        // console.log(result.payload);
        if (
          result.type === "GET_ALL_LISTINGS_FAILURE" ||
          this.props.listing.error
        ) {
          openSnackbar(
            "error",
            this.props.listing.error ||
              "An error occured while fetching listings"
          );
        }
      })
      .catch(err => {
        openSnackbar("error", err);
      });
  };

  toggleMore = () => {
    console.log("toggleMore");
    const newState = { ...this.state };
    newState.more = !this.state.more;
    this.setState({ ...newState });
  };

  clearSearch = () => {
    console.log("clearSearch");
    this.props.apiListing.clearSearch();
    this.getAllListings();
  };

  clearFeatures = () => {
    console.log("clearFeatures");
    this.props.apiListing.clearFeatures();
  };

  setAndClose = () => {
    console.log("setAndClose");
    this.toggleMore();
  };

  hideSearch = () => {
    console.log("hideSearch");
    const newState = { ...this.state };
    newState.search = false;
    this.setState({ ...newState });
  };

  handleSubmit = () => {
    console.log("handleSubmit");
    const { formValues } = this.props;
    // generate array of features from selected options
    let features = calcFeatures(formValues);
    const query = {
      features,
      property_zip: formValues.searchZip,
      bedrooms: formValues.bedrooms,
      max_rent: formValues.maxRent
    };
    const filteredListings = filterListings(
      this.props.listing.allListings,
      query
    );
    console.log(filteredListings);
    this.props.apiListing.updateFilter(filteredListings);
    if (!filteredListings.length) {
      openSnackbar(
        "error",
        "No listings match your search criteria. Try broadening your search."
      );
    }
  };

  render() {
    const markers = this.props.listing.filteredListings.map(listingData => (
      <MapMarker
        listing={listingData}
        key={listingData.id}
        lat={listingData.property_lat}
        lng={listingData.property_lon}
        classes={this.props.classes}
      />
    ));

    // console.log(markers);
    return (
      // Important! Always set the container height explicitly
      <div
        className={this.props.classes.mapContainer}
        style={{ height: "100vh", width: "100%" }}
      >
        {this.state.search && (
          <SearchBarForm
            classes={this.props.classes}
            toggleMore={this.toggleMore}
            toggleDrawer={this.toggleMore}
            listing={this.props.listing}
            more={this.state.more}
            setAndClose={this.setAndClose}
            clearSearch={this.clearSearch}
            onSubmit={this.handleSubmit}
            hideSearch={this.hideSearch}
          />
        )}
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
    allListings: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        monthly_rent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        property_name: PropTypes.string,
        property_zip: PropTypes.string,
        bedrooms: PropTypes.string,
        features: PropTypes.arrayOf(PropTypes.string)
      })
    ),
    currentListing: PropTypes.shape({
      id: PropTypes.string,
      monthly_rent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      property_name: PropTypes.string,
      property_zip: PropTypes.string,
      bedrooms: PropTypes.string,
      features: PropTypes.arrayOf(PropTypes.string)
    }),
    deleteDialogOpen: PropTypes.bool,
    apiListing: PropTypes.shape({
      getAllListings: PropTypes.func,
      handleDeleteOpen: PropTypes.func,
      deleteListing: PropTypes.func,
      deleteImage: PropTypes.func
    })
  })
};

const mapStateToProps = state => ({
  appState: state.appState,
  profile: state.profile,
  listing: state.listing,
  formValues: getFormValues("listingSearch")(state) || {}
});

const mapDispatchToProps = dispatch => ({
  apiListing: bindActionCreators(apiListingActions, dispatch)
});

export const ListingsMapConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingsMapUnconnected);

export default withStyles(styles)(ListingsMapConnected);
