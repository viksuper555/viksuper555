require('dotenv/config');

module.exports = function () {
  var diff_ms = Date.now() - new Date(2001, 8, 14).getTime();
  var age_dt = new Date(diff_ms); 

  return `${Math.abs(age_dt.getUTCFullYear() - 1970)}`;
};