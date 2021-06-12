/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import Api from './api';
import HTTP_STATUS from './http-status';
const requestPromise = require('request-promise');

/**
 * Isomorphic Http Promise Requests Class
 * @flow
 */
export default class Http {
  /**
   * Request
   * @param   {String}  method
   * @param   {String}  url
   * @param   {Object}  [data]
   * @return  {Promise}
   */
  static request(
    method: string,
    url: string,
    data: Object,
    files: Object,
    useMultipartFormData: Boolean,
    showHeader: Boolean,
  ): Promise<*> {
    if (typeof window !== 'undefined' && window.XMLHttpRequest) {
      return Http.xmlHttpRequest(method, url, data);
    }
    return Http.requestPromise(method, url, data, files, useMultipartFormData, showHeader);
  }

  /**
   * XmlHttpRequest request
   * @param   {String}  method
   * @param   {String}  url
   * @param   {Object}  [data]
   * @return  {Promise}
   */
  static xmlHttpRequest(method, url, data): Promise<*> {
    return new Promise((resolve, reject) => {
      const request = new window.XMLHttpRequest();
      request.open(method, url);
      request.onload = function () {
        let response;
        try {
          response = JSON.parse(request.response);
        } catch (e) {
          // JSON failed to parse. Create a placeholder response.
          response = {
            error: {
              message: 'Failed to parse response JSON.',
            }
          };
          reject(convertXhrErrorToRequestPromiseError(request, response));
          return;
        }
        if (request.status.toString() !== HTTP_STATUS.OK) {
          reject(convertXhrErrorToRequestPromiseError(request, response));
          return;
        }
        
        resolve(response);
      };
      request.setRequestHeader('Content-Type', 'application/json');
      request.setRequestHeader('Accept', 'application/json');
      request.send(JSON.stringify(data));
    });
  }

  /**
   * Request Promise
   * @param   {String}  method The HTTP method name (e.g. 'GET').
   * @param   {String}  url A full URL string.
   * @param   {Object}  [data] A mapping of request parameters where a key
   *   is the parameter name and its value is a string or an object
   *   which can be JSON-encoded.
   * @param   {Object}  [files] An optional mapping of file names to ReadStream
   *   objects. These files will be attached to the request.
   * @param   {Boolean} [useMultipartFormData] An optional flag to call with
   *   multipart/form-data.
   * @return  {Promise}
   */
  static requestPromise(
    method: string,
    url: string,
    data: Object,
    files: Object,
    useMultipartFormData: Boolean = false,
    showHeader: Boolean = false,
  ): Promise<*> {
    const options = {
      method: method,
      uri: url,
      json: !useMultipartFormData,
      headers: {'User-Agent': `fbbizsdk-nodejs-v${Api.SDK_VERSION}`},
      body: Object,
      resolveWithFullResponse: showHeader,
    };
    // Prevent null or undefined input
    // because it can be merged with the files argument later
    if (!data) {
      data = {};
    }

    options.body = data;

    // Handle file attachments if provided
    if (useMultipartFormData || (files && Object.keys(files).length > 0)) {
      // Use formData instead of body (required by the request-promise library)
      options.formData = Object.assign(data, files);
      delete options.body;
    }

    return requestPromise(options).catch((response: Object) => {
      throw response;
    });
  }
}

/**
 * Converts the given XHR error to an error that looks like one that would
 * be returned by the request-promise API.
 * @param {XMLHttpRequest} request 
 * @param {any} response 
 */
function convertXhrErrorToRequestPromiseError(request, response) {
  return {
    name: 'StatusCodeError',
    error: response,
    statusCode: request.status,
  };
}
