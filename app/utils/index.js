/** miscellaneous utility methods **/

const jwt = require("jsonwebtoken");
const http = require("http");
const https = require("https");
const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "google",
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
  formatter: null
};

const geocoder = NodeGeocoder(options);

const geocodeAddress = async address => {
  // Get latidude & longitude from address.
  geocoder
    .geocode(address)
    .then(res => {
      const { latitude, longitude } = res[0];
      console.log(`utils/geocodeAddress > 21`);
      console.log({ property_lat: latitude, property_lon: longitude });
      return { property_lat: latitude, property_lon: longitude };
    })
    .catch(err => {
      console.log(`utils/geocodeAddress > 26`);
      console.error(err);
      return err;
    });
};

/** Helper method to generate random text strings for testing */
const randomText = () => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

/** Error handler for route controllers */
const handleError = (res, err) => {
  return res.status(500).json({ message: err });
};

/** Extract id from user object for use in generating JWT */
const setUserInfo = req => {
  const getUserInfo = {
    id: req.id
  };

  return getUserInfo;
};

/** Generate JWT */
generateToken = user => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
};

module.exports = {
  randomText,
  handleError,
  setUserInfo,
  generateToken,
  geocodeAddress
};
