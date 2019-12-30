export const validate = values => {
  const errors = {};
  const requiredFields = [
    "propertyName",
    "dd",
    "mm",
    "yyyy",
    "propertyStreet",
    "propertyZip",
    "propertyState",
    "propertyCity",
    "propertyEmail",
    "propertyPhone",
    "quadrant",
    "propertyCounty",
    "listingUrl",
    "primaryImage",
    "monthlyRent",
    "deposit",
    "leaseLength",
    "bedrooms",
    "squareFt",
    "features",
    "laundryType",
    "parkingType",
    "parkingFee"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.homeEmail &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.homeEmail)
  ) {
    errors.homeEmail = "Invalid email address (e.g. sample@email.com)";
  }
  if (
    values.listingUrl &&
    !/^(ftp|http|https):\/\/[^ "]+$/.test(values.listingUrl)
  ) {
    errors.listingUrl = "Please enter a valid URL";
  }
  if (
    values.primaryImage &&
    !/^(ftp|http|https):\/\/[^ "]+$/.test(values.primaryImage)
  ) {
    errors.primaryImage = "Please enter a valid URL";
  }
  if (
    values.propertyPhone &&
    !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
      values.propertyPhone
    )
  ) {
    errors.propertyPhone = "Invalid phone number (e.g. 555-123-4567)";
  }
  if (values.propertyZip && values.propertyZip.length !== 5) {
    errors.propertyZip = `Must be at exactly 5 characters long`;
  }
  return errors;
};

export const validateUser = values => {
  const errors = {};
  const requiredFields = [
    "name",
    "email",
    "phone",
    "companyName",
    "companyStreet",
    "companyZip",
    "companyState",
    "companyCity"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address (e.g. sample@email.com)";
  }
  if (
    values.phone &&
    !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(values.phone)
  ) {
    errors.phone = "Invalid phone number (e.g. 555-123-4567)";
  }
  if (values.companyZip && values.companyZip.length !== 5) {
    errors.companyZip = `Must be at exactly 5 characters long`;
  }
  return errors;
};
