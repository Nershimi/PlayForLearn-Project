const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const { onCall } = require("firebase-functions/v2/https");

admin.initializeApp();

const firestore = admin.firestore();

exports.test = functions.https.onCall((data, context) => {
  return "Hello";
});

exports.setUserDetails = functions.https.onRequest((request, response) => {
  const email = "ner12@gmail.com";
  const firstName = "shimi";
  const lastName = "ner";
  // const birthday = date;\
  const lastModified = firestore.Timestamp.now();

  const doc = firestore.collection("User'sDetails").doc();
  doc.set({
    email,
    firstName,
    lastName,
    lastModified,
    // ,birthday
  });

  response.send("Document saved successfully.");
});
