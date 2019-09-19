import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import * as apiListingActions from "../store/actions/apiListingActions";
import * as utils from "../utils";

import { openSnackbar } from "./Notifier";
import ButtonWithSpinner from "../components/ButtonWithSpinner";

const styles = theme => ({
  root: {},
  container: {
    padding: "80px 0 140px 0",
    background: "white",
    minHeight: "100vh"
  },
  head: {
    color: theme.palette.primary.light
  },
  form: {
    maxWidth: 600,
    margin: "auto"
  },
  group: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center"
  },
  input: {
    width: "100%",
    margin: "0 0 20px 0"
  },
  textarea: {
    width: "100%",
    margin: "0 0 20px 0"
  },
  formButton: {
    width: "100%",
    padding: 20
  },
  formControl: {
    width: "100%"
  },
  radioLabel: {
    width: "100%",
    textAlign: "center"
  }
});

export class TextInputFormUnconnected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: []
    };
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    if (this.props.edit && this.props.match.params.id) {
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
            // console.log(this.props.listing.form)
          }
        })
        .catch(err => openSnackbar("error", err));
    }
  }

  handleClose = () => {
    const newState = { ...this.state };
    newState.open = false;
    this.setState({ ...newState }, () => {
      this.props.apiListing.clearForm();
      this.props.history.push("/library");
    });
  };

  handleSave = files => {
    // save files to component state; close modal
    const newState = { ...this.state };
    newState.open = false;
    newState.files = files;
    this.setState({ ...newState }, () => {
      this.handleUpload(this.state.files[0]);
    });
  };

  handleOpen = () => {
    const newState = { ...this.state };
    newState.open = true;
    this.setState({ ...newState });
  };

  onDropRejected = rejected => {
    let errors = [];
    if (rejected[0].size > 2000000) {
      errors.push("File too large. File size limit 2MB.");
    }
    if (
      rejected[0].type !== "image/jpeg" &&
      rejected[0].type !== "image/jpg" &&
      rejected[0].type !== "image/png" &&
      rejected[0].type !== "image/gif"
    ) {
      errors.push(
        "Invalid file type. Accepted file types are .jpeg, .jpg, .png, and .gif."
      );
    }
    // display errors
    if (errors.length) {
      openSnackbar("error", errors.join(" "));
    }
  };

  handleUpload = file => {
    const { authToken } = this.props.appState;
    const filename = file ? file.name.split(".")[0] : "";
    const edit = this.props.edit;
    const id = this.props.edit ? this.props.match.params.id : undefined;
    this.props.apiListing
      .uploadImage(file, edit, id)
      .then(result => {
        if (
          result.type === "UPLOAD_IMAGE_FAILURE" ||
          this.props.listing.error
        ) {
          openSnackbar(
            "error",
            this.props.listing.error ||
              "An error occured while trying to upload your image."
          );
        } else {
          openSnackbar("success", `${filename} Saved.`);
          this.props.apiListing.clearForm();
          this.props.apiListing.getAllListing(authToken);
          this.props.history.push("/library");
        }
      })
      .catch(err => openSnackbar("error", err));
  };

  submit(e) {
    e.preventDefault();
    const { listing_type, listing } = this.props.listing.form;
    const authToken = this.props.appState.authToken;
    const body = {
      listing_type,
      listing
    };
    let id;
    if (this.props.match.params.id) {
      id = this.props.match.params.id;
    }
    if (!this.props.edit) {
      this.props.apiListing
        .addListing(authToken, body)
        .then(result => {
          if (
            result.type === "ADD_LISTING_FAILURE" ||
            this.props.listing.error
          ) {
            openSnackbar(
              "error",
              this.props.listing.error ||
                "An error occured while trying to save your listing."
            );
          } else {
            openSnackbar("success", `Saved listing.`);
            this.props.apiListing.clearForm();
            this.props.history.push("/library");
          }
        })
        .catch(err => openSnackbar("error", err));
    } else if (id) {
      this.props.apiListing
        .updateListing(authToken, id, body)
        .then(result => {
          if (
            result.type === "UPDATE_LISTING_FAILURE" ||
            this.props.listing.error
          ) {
            openSnackbar(
              "error",
              this.props.listing.error ||
                "An error occured while trying to update your listing."
            );
          } else {
            openSnackbar("success", `Updated listing.`);
            this.props.apiListing.clearForm();
            this.props.history.push("/library");
          }
        })
        .catch(err => openSnackbar("error", err));
    } else {
      openSnackbar(
        "error",
        this.props.listing.error ||
          "An error occured while trying to save your listing."
      );
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container} data-test="component-text-input-form">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          className={classes.head}
          style={{ paddingTop: 20 }}
        >
          Admin Dashboard
        </Typography>
        <form
          className={classes.form}
          onError={errors => console.log(errors)}
          id="form"
        >
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" className={classes.radioLabel}>
              Listing Type
            </FormLabel>
            <RadioGroup
              aria-label="Listing Type"
              name="listing_type"
              className={classes.group}
              value={this.props.listing.form.listing_type || ""}
              onChange={this.props.apiListing.handleInput}
            >
              <FormControlLabel
                value="headline"
                control={<Radio />}
                label="Headline"
              />
              <FormControlLabel
                value="bodyCopy"
                control={<Radio />}
                label="Body"
              />
              <FormControlLabel
                value="image"
                control={<Radio />}
                label="Image"
              />
              <FormControlLabel
                value="redirectUrl"
                control={<Radio />}
                label="Redirect URL"
              />
            </RadioGroup>
          </FormControl>
          {this.props.listing.form.listing_type &&
          this.props.listing.form.listing_type !== "image" ? (
            <React.Fragment>
              <TextField
                name="listing"
                id="listing"
                label="listing"
                type={
                  this.props.listing.form.listing_type &&
                  this.props.listing.form.listing_type.includes("Url")
                    ? "url"
                    : "text"
                }
                multiline={this.props.listing.form.listing_type === "bodyCopy"}
                rows={
                  this.props.listing.form.listing_type === "bodyCopy" ? 5 : 1
                }
                variant="outlined"
                required
                value={this.props.listing.form.listing}
                onChange={this.props.apiListing.handleInput}
                className={classes.input}
              />
              <ButtonWithSpinner
                type="submit"
                color="secondary"
                className={classes.formButton}
                variant="contained"
                loading={this.props.listing.loading}
                onClick={e => this.submit(e)}
              >
                Save Listing
              </ButtonWithSpinner>
            </React.Fragment>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}

TextInputFormUnconnected.propTypes = {
  type: PropTypes.string,
  appState: PropTypes.shape({
    authToken: PropTypes.string
  }),
  listing: PropTypes.shape({
    form: PropTypes.shape({
      listing_type: PropTypes.string,
      listing: PropTypes.string
    }),
    loading: PropTypes.bool
  }).isRequired,
  apiListing: PropTypes.shape({
    handleInput: PropTypes.func,
    addListing: PropTypes.func,
    clearForm: PropTypes.func,
    uploadImage: PropTypes.func
  }),
  classes: PropTypes.object
};

const mapStateToProps = state => ({
  listing: state.listing,
  appState: state.appState
});

const mapDispatchToProps = dispatch => ({
  apiListing: bindActionCreators(apiListingActions, dispatch)
});

export const TextInputFormConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInputFormUnconnected);

export default withStyles(styles)(TextInputFormConnected);
