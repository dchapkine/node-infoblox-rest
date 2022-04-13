const request = require('request');
const InfobloxRestError = require(`${__dirname}/InfobloxRestError`);
const InfobloxRestResponse = require(`${__dirname}/InfobloxRestResponse`);

/**
 * Infoblox REST Api client
 */
class InfobloxRestClient {

  /**
   * Ctor
   *
   * @param {Object} params
   */
  constructor(params) {
    this.params = params;
  }

  /**
   * Generic method to request Infoblox REST API
   *
   * @param {String} http method
   * @param {String} uri
   * @param {Object|undefined} data
   *
   * @return {Promise}
   */
  async request(reqParams) {
    const client = this;
    let {method, uri, data} = reqParams;
    const params = this.params;
    const headers = {};
    const options = {};

    while (uri.startsWith('/')) {
      uri = uri.substr(1);
    }

    options.method = method;
    options.url = `${params.url}/wapi/${params.version}/${uri}`;
    options.auth = {
      user: params.user,
      pass: params.pass
    };
    options.headers = headers;
    options.timeout = params.timeout || 5000;
    options.json = true;
    options.strictSSL = params.strict;
    if (data) {
      options.body = data;
    }
    return new Promise((resolve, reject) => {
      request(options, (e, r, obj) => {
        if (e) {
          reject(new InfobloxRestError({message: e.message, client: client}));
        } else if (r.statusCode && r.statusCode != 200 && r.statusCode != 201) {
          // obj.text, obj.Error, obj.code
          reject(new InfobloxRestError({message: obj.text, errorCode: obj.code, httpStatus: r.statusCode, client: client}));
        } else {
          resolve(new InfobloxRestResponse({request: r, data: obj, client: client}));
        }
      });
    });
  }
}

module.exports = InfobloxRestClient;
