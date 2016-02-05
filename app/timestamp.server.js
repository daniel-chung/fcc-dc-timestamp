// /app/controllers/rsvpController.server.js
'use strict';

// Set up ----------------------------------------------------------------------


// Main export class -----------------------------------------------------------
function timestampServer () {

  // convert method ------------------------------------------------------- //
  this.convert = function (req, res) {

    var inputDate = req.params.apiInput;
    var monthName = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    function getDateObj (p) {
      var resObj = { "unix": null, "natural": null };
      var d = isNaN(Number(p)) ? new Date(Date.parse(p)) : new Date(p*1000);

      resObj.unix = Math.round((d.getTime() - (d.getTimezoneOffset())) / 1000);
      resObj.natural = monthName[d.getUTCMonth()] + " " +
        d.getUTCDate() + ", " +
        d.getUTCFullYear();

      return resObj;
    }

    res.send(getDateObj(inputDate));

  };  // End convert method ----------------------------------------------- //
};


// Export the handler class ----------------------------------------------------
module.exports = timestampServer;


// EOF -------------------------------------------------------------------------
