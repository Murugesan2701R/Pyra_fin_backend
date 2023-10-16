module.exports = function () {
  var TdsServices = require("../service/TdsService");

  this.getListTdsController = async (req, callback) => {
    var response = {};
    var TdsServiceObject = new TdsServices();
    var TdsService = await TdsServiceObject.getListTdsService(req);

    if (TdsService.error == "true") {
      response.error = "true";
      response.message = TdsService.message;
      response.status = TdsService.status;
    } else {
      response.error = "false";
      response.data = TdsService.data;
    }

    callback(response);
  };

  this.getListTdsquarterController = async (req, callback) => {
    var response = {};
    var TdsServiceObject = new TdsServices();
    var TdsService = await TdsServiceObject.getListTdsquarterService(req);

    if (TdsService.error == "true") {
      response.error = "true";
      response.message = TdsService.message;
      response.status = TdsService.status;
    } else {
      response.error = "false";
      response.data = TdsService.data;
    }

    callback(response);
  };
};
