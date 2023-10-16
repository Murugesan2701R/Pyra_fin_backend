module.exports = function () {
  var TdsRepo = require("../repository/TdsRepository");

  this.getListTdsService = (incomeData) => {
    return new Promise(async function (resolve) {
      var response = {};
      var tdsdataObject = new TdsRepo();
      try {
        var Tdsresult = await tdsdataObject.getListTdsData(incomeData);

        if (Tdsresult.result.length > 0) {
          if (Tdsresult.error == "false") {
            response.error = "false";
            response.data = Tdsresult.result;

            resolve(response);
          } else {
            response.error = "true";
            response.message = "failed to fetch income rate";
            resolve(response);
          }
        } else {
          response.error = "true";
          response.message = "No data";
          resolve(response);
        }
      } catch (err) {
        response.error = "true";
        response.message = "OOPS Service Error";
        resolve(response);
      }
    });
  };

  this.getListTdsquarterService = (incomeData) => {
    return new Promise(async function (resolve) {
      var response = {};
      var tdsdataObject = new TdsRepo();
      try {
        var Tdsresult = await tdsdataObject.getListTdsquarterData(incomeData);

        if (Tdsresult.result.length > 0) {
          if (Tdsresult.error == "false") {
            response.error = "false";
            response.data = Tdsresult.result;

            resolve(response);
          } else {
            response.error = "true";
            response.message = "failed to fetch income rate";
            resolve(response);
          }
        } else {
          response.error = "true";
          response.message = "No data";
          resolve(response);
        }
      } catch (err) {
        response.error = "true";
        response.message = "OOPS Service Error";
        resolve(response);
      }
    });
  };
};
