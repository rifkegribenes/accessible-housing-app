import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import { openSnackbar } from "../containers/Notifier";

import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

// import { formatDate, formatDateTime } from "../utils";

import { forwardRef } from "react";
// import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

export const tableIcons = {
  // Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  // Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  // Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  CheckBoxBlank: forwardRef((props, ref) => (
    <CheckBoxOutlineBlankIcon {...props} ref={ref} />
  )),
  CheckBoxChecked: forwardRef((props, ref) => (
    <CheckBoxIcon {...props} ref={ref} />
  )),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  // DetailPanel: forwardRef((props, ref) => (
  //   <ChevronRight {...props} ref={ref} />
  // )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export const handleError = err => {
  // console.log(err);
  return openSnackbar(
    "error",
    err || "Sorry, something went wrong. Please try again."
  );
};

export const removeFalsy = obj => {
  let newObj = {};
  Object.keys(obj).forEach(prop => {
    if (obj[prop]) {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};

// hardcoded select options
export const monthList = [
  "",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];

// switch helper for dateOptions
export const getMaxDay = month => {
  switch (month) {
    case "02":
      return 29;
    case "04":
    case "06":
    case "09":
    case "11":
      return 30;
    default:
      return 31;
  }
};
// function to adjust date select based on mm value
export const dateOptions = props => {
  const mm = props.formValues.mm || props.formValues.hiremm;
  const max = getMaxDay(mm);
  let dates = [];
  for (let i = 1; i <= max; i++) {
    if (i < 10) {
      dates.push("0" + i);
    } else {
      dates.push(i.toString());
    }
  }
  dates.unshift("");
  return dates;
};
// dynamically fills yyyy select with last 110 years
export const yearOptions = () => {
  let years = [];
  for (
    let i = new Date().getFullYear() - 109;
    i <= new Date().getFullYear();
    i++
  ) {
    years.unshift(i.toString());
  }
  years.unshift("");
  return years;
};

// helper function for reverse lookup from object
export const getKeyByValue = (object, value) => {
  return Object.keys(object).find(
    key => object[key].toLowerCase() === value.toLowerCase()
  );
};

// date formatter for submitting to Salesforce
export const formatSFDate = date => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

// convert MM DD YYYY to SF-formatted birthdate
export const formatBirthdate = formValues => {
  const dobRaw = `${formValues.mm}/${formValues.dd}/${formValues.yyyy}`;
  return formatSFDate(dobRaw);
};

// MUI styles objects
export const formStyles = theme => ({
  formContainer: {
    padding: "80px 0 140px 0",
    margin: "auto 0 auto 50%",
    [theme.breakpoints.down("xl")]: {
      margin: "44px 0 auto 50%"
    },
    [theme.breakpoints.down("lg")]: {
      padding: "20px 0"
    },
    [theme.breakpoints.down("md")]: {
      margin: "44px auto"
    },
    [theme.breakpoints.only("xs")]: {
      width: "100vw",
      position: "absolute",
      left: 0,
      top: 0,
      margin: "36px auto"
    }
  },
  formContainerEmbed: {
    padding: "80px 0 140px 0",
    margin: "auto",
    [theme.breakpoints.only("xs")]: {
      width: "100vw",
      position: "absolute",
      left: 0,
      top: 0,
      margin: "auto"
    }
  },
  sectionContainer: {},
  head: {
    color: theme.palette.primary.light,
    fontSize: "2em",
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: 15
  },
  form: {
    maxWidth: 600,
    margin: "auto",
    background: "white",
    padding: "20px 20px 40px 20px",
    borderRadius: "0 0 4px 4px",
    marginTop: 100,
    [theme.breakpoints.only("xs")]: {
      padding: "15px 15px 40px 15px"
    }
  },
  buttonWrap: {
    width: "100%",
    padding: "0 20px 40px 0",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 20
  },
  buttonWrapTab3: {
    width: "100%",
    padding: "40px 20px 0 0",
    display: "flex",
    justifyContent: "flex-start"
  },
  buttonWrapCAPE: {
    width: "100%",
    padding: "0 20px 40px 0",
    display: "flex",
    justifyContent: "space-between"
  },
  next: {
    textTransform: "none",
    fontSize: "1.3rem",
    padding: "6px 20px",
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  },
  nextSmall: {
    textTransform: "none",
    fontSize: ".8rem",
    padding: "3px 10px",
    color: theme.palette.secondary.light,
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  },
  backSmall: {
    textTransform: "none",
    fontSize: ".8rem",
    padding: "3px 10px",
    color: theme.palette.secondary.light,
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  },
  verticalGroup: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  horizGroup: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  back: {
    textTransform: "none",
    fontSize: "1.3rem",
    padding: "6px 20px",
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    },
    marginRight: 40
  },
  formSection: {
    paddingTop: 20
  },
  group: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center"
  },
  groupLeft: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  select: {
    width: "100%",
    margin: "0 0 30px 0"
  },
  selectRight: {
    textAlign: "right",
    width: "100%",
    margin: "0 0 30px 0",
    direction: "rtl"
  },
  failedText: {
    color: "red"
  },
  formButton: {
    width: "100%",
    padding: 20,
    margin: "25px 0 40px"
  },
  clearButton: {
    width: "100%",
    padding: 10,
    margin: "0"
  },
  formControl: {
    width: "100%"
  },
  formControlLabel: {
    width: "100%"
  },
  formControlDate: {
    width: "15%",
    minWidth: 80,
    marginRight: 20
  },
  formLabel: {
    margin: "10px 0"
  },
  currency: {
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='30px' width='85px'><text x='10' y='20' fill='gray' font-size='20' font-family='arial'>$</text></svg>")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center"
  },
  months: {
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='30px' width='85px'><text x='10' y='20' fill='gray' font-size='20' font-family='arial'>mos</text></svg>")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center"
  },
  formHelperText: {
    margin: "-25px 0 30px 0"
  },
  checkboxErrorText: {
    margin: "-10px 0 10px 0"
  },
  formGroup: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  },
  formGroup2Col: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap"
    }
  },
  formGroup2ColShort: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between"
    // width: 280
  },
  formGroupTopMargin: {
    marginTop: 30
  },
  input: {
    width: "100%",
    margin: "0 0 30px 0"
  },
  input2Col: {
    width: "48%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      display: "block"
    }
  },
  controlCheckbox: {
    margin: "-35px 0 0 0"
  },
  controlCheckboxMargin: {
    margin: "-35px 0 40px 0"
  },
  formHelperTextLegal: {
    margin: "-50px 0 50px 0",
    fontSize: "14px",
    lineHeight: "1.2em"
  },
  sigBox: {
    border: "1px solid lightgrey",
    "border-radius": "5px",
    margin: "0 0 32px",
    width: "100%"
  },
  buttonLink: {
    background: "none",
    border: "none",
    padding: "0",
    font: " inherit",
    "border-bottom": "1px solid blue",
    cursor: " pointer",
    color: "blue"
  },
  horizRadio: {
    display: "flex",
    flexDirection: "row"
  },
  horizRadioCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "auto",
    textAlign: "center"
  },
  horizRadioBold: {
    fontWeight: 700
  },
  subhead: {
    color: theme.palette.primary.light,
    fontSize: "1.5em",
    fontWeight: 400,
    paddingBottom: 20
  },
  paymentCopy: {
    paddingBottom: "1.5em"
  },
  card: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    minWidth: 200,
    minHeight: 200
  },
  cardHead: {
    color: theme.palette.primary.light,
    fontWeight: 400,
    paddingBottom: 10
  },
  quoteAttr: {
    color: theme.palette.primary.light,
    fontStyle: "italic",
    paddingTop: 10
  },
  pullQuote: {
    textIndent: 20
  },
  suggestedAmounts: {
    display: "block",
    flexWrap: "wrap",
    margin: "0 -1.666666666666667% 13px",
    paddingTop: 20,
    marginTop: 15,
    backgroundColor: "#FBE796"
  },
  suggestedAmountBoxes: {
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  suggestedAmountBox: {
    width: "21%",
    height: 60,
    margin: "13px 1.666666666666667% 0",
    display: "inline-block"
  },
  boxLabel: {
    height: "100%",
    fontSize: 20,
    lineHeight: "60px",
    fontWeight: 300,
    color: "#4C4C4C",
    textAlign: "center",
    border: "1px solid #C4C3C3",
    borderRadius: 3,
    display: "block",
    transition:
      "color 0.1s, background-color 0.1s, border-color 0.1s, font-weight 0.1s",
    position: "relative",
    cursor: "pointer",
    margin: 0
  },
  boxInput: {
    float: "left",
    opacity: 0,
    width: 0,
    height: 0,
    position: "absolute",
    padding: 0,
    margin: 0,
    border: 0,
    "&:focus + label": {
      outline: "rgba(83,16,120, 0.5) auto 3px"
    },
    "&:checked + label": {
      borderColor: "#531078",
      color: "#531078",
      borderWidth: 2,
      fontWeight: 700
    },
    "&:checked + $boxLabel": {
      borderColor: "#531078",
      color: "#531078",
      borderWidth: 2,
      fontWeight: 700
    }
  },
  capeAmount: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  boxCurrency: {
    fontSize: 14,
    lineHeight: "14px",
    fontWeight: 400,
    verticalAlign: "text-top",
    position: "absolute",
    top: 22,
    left: -22,
    whiteSpace: "nowrap"
  },
  boxItem: {
    position: "absolute",
    height: "100%"
  },
  boxAmount: {
    position: "relative",
    left: -10
  },
  radioLabel: {
    textAlign: "center"
  },
  bodyCenter: {
    width: "100%",
    textAlign: "center"
  },
  capeRadioLabel: {
    fontSize: "1.2em",
    color: theme.palette.primary.light,
    fontWeight: 700,
    textAlign: "center"
  }
});

export const featuresMap = {
  dogs: "Dogs OK",
  cats: "Cats OK",
  no_pets: "No pets",
  furnished: "Furnished",
  no_smoking: "No smoking",
  gated_entry: "Gated entry",
  "60_in_circular_space_for_turning": "60-inch circular space for turning",
  "32_in_wide_doorways": "32-inch wide doorways",
  accessible_route_to_unit: "Accessible route to unit",
  bathroom_wall_reinforcements: "Wall reinforcements in bathroom",
  bathroom_grab_bars: "Grab bars in bathroom",
  shower_seat: "Shower seat",
  bathroom_56_x_60_in_floor_clearance: "56x60-inch floor clearance in bathroom",
  kitchen_40_in_aisle: "40-inch aisle in kitchen",
  kitchen_60_in_floor_clearance_if_U_shaped:
    "60-inch floor clearance in U-shaped kitchen",
  kitchen_sink_knee_and_toe_clearance: "Knee and toe clearance at kitchen sink",
  kitchen_sink_34_in_above_floor:
    "Kitchen sink no more than 34 inches above floor",
  kitchen_work_surface_34_in_above_floor:
    "Work surface in kitchen no more than 34 inches above floor",
  front_control_range: "Front-control range",
  visible_notification_alarm_system: "Visible notification alarm system",
  operable_parts_48_in_above_floor:
    "Operable parts (light switches, thermostats, peepholes) no more than 48 inches above floor"
};

// custom MUI friendly TEXT input with translated label
export const renderTextField = ({
  input,
  id,
  name,
  label,
  meta: { touched, error },
  classes,
  twocol,
  short,
  mobile,
  additionalOnChange,
  min,
  step,
  formControlName,
  ...custom
}) => {
  return (
    <TextField
      label={label}
      error={!!(touched && error)}
      variant="outlined"
      className={classes[formControlName] || classes.input}
      style={
        twocol && !mobile
          ? { width: "48%" }
          : short
          ? { width: 150 }
          : { width: "100%", marginBottom: 30 }
      }
      helperText={touched && error}
      required={!!(touched && error)}
      {...input}
      {...custom}
      data-test="component-text-field"
      inputProps={{ id: id, min: min, step: step }}
      onBlur={event => {
        input.onBlur();
        if (additionalOnChange) {
          additionalOnChange(event);
        }
      }}
    />
  );
};

const selectStyle = align => (align === "right" ? { direction: "ltr" } : {});

// custom MUI friendly SELECT input with translated label
export const renderSelect = ({
  input,
  name,
  id,
  label,
  classes,
  align,
  meta: { error, touched },
  labelWidth,
  options,
  short,
  twocol,
  mobile,
  formControlName,
  ...custom
}) => (
  <FormControl
    variant="outlined"
    className={classes[formControlName] || classes.formControl}
    error={!!(error && touched)}
    {...custom}
    required={touched && error === "Required"}
    style={
      short
        ? { width: 80 }
        : mobile
        ? { width: "100%" }
        : twocol
        ? { marginRight: 20 }
        : {}
    }
  >
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Select
      native
      input={<OutlinedInput labelWidth={labelWidth} inputProps={{ id: id }} />}
      className={align === "right" ? classes.selectRight : classes.select}
      value={input.value ? input.value.toLowerCase() : ""}
      onChange={input.onChange}
      {...custom}
      data-test="component-select"
    >
      {options.map(item => (
        <option
          key={shortid()}
          value={item ? item.toLowerCase() : ""}
          style={selectStyle(align)}
        >
          {item}
        </option>
      ))}
    </Select>
  </FormControl>
);

// custom MUI friendly CHECKBOX input with translated label
export const renderCheckbox = ({
  input,
  label,
  id,
  validate,
  classes,
  meta: { touched, error },
  formControlName,
  ...custom
}) => (
  <FormControl
    error={!!(touched && error)}
    className={classes[formControlName] || classes.formControl}
  >
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          color="primary"
          checked={input.value ? true : false}
          {...custom}
          {...input}
          className={classes.checkbox}
          data-test="component-checkbox"
          name="checkbox"
          inputProps={{ id: id }}
        />
      }
    />
    {touched && error && (
      <FormHelperText className={classes.checkboxErrorText}>
        {error}
      </FormHelperText>
    )}
  </FormControl>
);

// custom MUI friendly RADIO group with translated label
export const renderRadioGroup = ({
  input,
  id,
  label,
  options,
  validate,
  classes,
  direction,
  meta: { touched, error },
  formControlName,
  legendClass,
  additionalOnChange,
  ...custom
}) => (
  <FormControl
    component="fieldset"
    error={!!(touched && error)}
    className={classes[formControlName] || classes.formControl}
  >
    <FormLabel component="legend" className={classes.radioLabel}>
      {label}
    </FormLabel>

    <RadioGroup
      data-test="component-radio-group"
      aria-label={formControlName}
      name={formControlName}
      className={
        direction === "vert" ? classes.verticalGroup : classes.horizGroup
      }
      onChange={(event, value) => {
        // console.log(value);
        // console.log(event.target.value);
        input.onChange(value);
        if (additionalOnChange) {
          additionalOnChange(value);
        }
      }}
    >
      {options.map(item => {
        return (
          <FormControlLabel
            key={shortid()}
            value={item}
            className={legendClass}
            control={
              <Radio
                checked={item.toString() === input.value.toString()}
                color="primary"
                inputProps={{ id: id }}
                data-test="component-radio"
              />
            }
            label={item}
          />
        );
      })}
    </RadioGroup>
    {touched && error && (
      <FormHelperText className={classes.checkboxErrorText}>
        {error}
      </FormHelperText>
    )}
  </FormControl>
);

TextField.propTypes = {
  input: PropTypes.shape({
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string
  }),
  name: PropTypes.string,
  label: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};
Select.propTypes = {
  input: PropTypes.shape({
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string
  }),
  name: PropTypes.string,
  label: PropTypes.string,
  labelWidth: PropTypes.string,
  formControlName: PropTypes.string,
  options: PropTypes.array,
  touched: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};
Checkbox.propTypes = {
  input: PropTypes.shape({
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string
  }),
  name: PropTypes.string,
  label: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  checked: PropTypes.bool
};
FormControl.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};
