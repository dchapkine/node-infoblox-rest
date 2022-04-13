const validator = require('validator');
const InfobloxRestClient = require('./InfobloxRestClient');

/**
 * Infoblox Rest API module
 *
 * @param {Object} { url:string, user:string, pass:string, [strict:bool], [logger:Object] }
 */
const InfobloxRest = (params) => {
  params = params || {};

  // check required params
  if (params.url === undefined) {
    throw new Error("Bad params, url is missing");
  } else if (!validator.isURL(params.url)) {
    throw new Error("Bad params, url is invalid");
  } else if (params.url.endsWith("/")) {
    throw new Error("Bad params, url can NOT end with a /");
  } else if (params.user === undefined) {
    throw new Error("Bad params, user is required");
  } else if (params.pass === undefined) {
    throw new Error("Bad params, pass is required");
  } else if (params.version === undefined) {
    throw new Error("Bad params, api version required");
  }

  // set default values for optional params
  params.strict = !!params.strict;
  params.logger = params.logger || null;

  return new InfobloxRestClient(params);
};


module.exports = InfobloxRest;
