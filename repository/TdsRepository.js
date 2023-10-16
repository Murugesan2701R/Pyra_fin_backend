module.exports = function () {
  var mysqlExecute = require("../db/db");

  this.getListTdsData = (req) => {
    return new Promise(async function (resolve) {
      try {
        var mysqlExecuteCall = new mysqlExecute();
        var query =
          "SELECT id, Section, Particulars, TDS, TDSAmount, TotalAmount, DueDate, ActionDate, InvoiceNumber FROM expense_table WHERE TDSStatus = 'Applicable' AND IsDeleted = 0;";
        var queryResponse = await mysqlExecuteCall.executeWithoutParams(query);
        if (queryResponse.error == "false") {
          resolve(queryResponse);
        } else {
          resolve(queryResponse);
        }
      } catch (err) {
        err.error = "true";
        err.message = "OOPS DAO Exception";
        resolve(err);
      }
    });
  };

  this.getListTdsquarterData = (req) => {
    return new Promise(async function (resolve) {
      try {
        if (req.query.quarter && req.query.year) {
          var mysqlExecuteCall = new mysqlExecute();

          let startDate, endDate;
          const { quarter, year } = req.query;

          if (quarter === "1") {
            startDate = `${year}-01-01`;
            endDate = `${year}-03-31`;
          } else if (quarter === "2") {
            startDate = `${year}-04-01`;
            endDate = `${year}-05-31`;
          } else if (quarter === "3") {
            startDate = `${year}-07-01`;
            endDate = `${year}-09-30`;
          } else if (quarter === "4") {
            startDate = `${year}-10-01`;
            endDate = `${year}-12-31`;
          } else {
            resolve({ error: "Invalid quarter" });
          }

          var query = `SELECT id, Section, Particulars, TDS, TDSAmount, TotalAmount, TDSAmount, DueDate, InvoiceNumber FROM expense_table WHERE TDSStatus = 'Applicable' AND IsDeleted = 0 AND DueDate BETWEEN '${startDate}' AND '${endDate}';`;
          var queryResponse = await mysqlExecuteCall.executeWithoutParams(
            query
          );

          if (queryResponse.error == "false") {
            resolve(queryResponse);
          } else {
            resolve(queryResponse);
          }
        } else {
          resolve({ error: "Quarter and year parameters are required." });
        }
      } catch (err) {
        err.error = "true";
        err.message = "OOPS DAO Exception";
        resolve(err);
      }
    });
  };
};
