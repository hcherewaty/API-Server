'use strict';
/**
 * Middleware Module
 * @module src/auth/middleware
 */

const User = require('./users-model.js');

/**
 * Exports middleware auth for different capabilities
 * @param {*} capability
 * @returns {*}
 */
module.exports = (capability) => {

  return (req, res, next) => {

    try {
      let [authType, authString] = req.headers.authorization.split(/\s+/);

      switch (authType.toLowerCase()) {
      case 'basic':
        return _authBasic(authString);
      case 'bearer':
        return _authBearer(authString);
      default:
        return _authError();
      }
    } catch (e) {
      _authError();
    }


    /**
     * Basic authorization encryption
     * @param {*} str
     * @returns auth
     */
    function _authBasic(str) {
      // str: am9objpqb2hubnk=
      let base64Buffer = Buffer.from(str, 'base64'); // <Buffer 01 02 ...>
      let bufferString = base64Buffer.toString();    // john:mysecret
      let [username, password] = bufferString.split(':'); // john='john'; mysecret='mysecret']
      let auth = { username, password }; // { username:'john', password:'mysecret' }

      return User.authenticateBasic(auth)
        .then(user => _authenticate(user))
        .catch(_authError);
    }

    /**
     * Bearer token auth
     * @param {*} authString
     * @returns bearer token auth
     */
    function _authBearer(authString) {
      return User.authenticateToken(authString)
        .then(user => _authenticate(user))
        .catch(_authError);
    }

    /**
     * Authenticates user capabilities
     * @param {*} user
     */
    function _authenticate(user) {
      if (user && (!capability || (user.can(capability)))) {
        req.user = user;
        req.token = user.generateToken();
        next();
      }
      else {
        _authError();
      }
    }

    /**
     * Errror function for authentication
     */
    function _authError() {
      next('Invalid User ID/Password');
    }

  };

};