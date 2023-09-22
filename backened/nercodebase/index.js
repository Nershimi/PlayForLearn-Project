const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const setUserDetails = require("./setUserDetails");
const updateUserDetails = require("./udateUserDeatils");

module.exports = {
  setUserDetails,
  updateUserDetails,
};
