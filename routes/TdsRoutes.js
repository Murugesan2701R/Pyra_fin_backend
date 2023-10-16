const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const authorizeJWT = require("./authmiddleware");

const TdsController = new (require("../Controller/TdsController"))();

router.get("/getexpensetdsdetails", authorizeJWT, function (request, response) {
  TdsController.getListTdsController(request, function ({ data }) {
    return response.send(data);
  });
});

router.get("/getexpensetdsdetails", authorizeJWT, function (request, response) {
  TdsController.getListTdsquarterController(request, function ({ data }) {
    return response.send(data);
  });
});

module.exports = router;
