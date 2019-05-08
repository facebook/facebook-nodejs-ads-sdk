/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 * @format
 */
import Http from './http';
import {FacebookRequestError} from './exceptions';

/**
 * Facebook Ads API
 */
export default class FacebookAdsApi {
  _debug: boolean;
  accessToken: string;
  appsecretProof: string;
  locale: string;
  static _defaultApi: FacebookAdsApi;
  static get VERSION () {
    return 'v3.3';
  }
  static get GRAPH () {
    return 'https://graph.facebook.com';
  }

  static get GRAPH_VIDEO () {
    return 'https://graph-video.facebook.com';
  }

  /**
   * @param {String} accessToken
   * @param {String} [locale]
   */
  constructor (accessToken: string, appsecretProof: string = null, locale: string = 'en_US') {
    if (!accessToken) {
      throw new Error('Access token required');
    }
    this.accessToken = accessToken;
    this.appsecretProof = appsecretProof;
    this.locale = locale;
    this._debug = false;
  }

  /**
   * Instantiate an API and store it as the default
   * @param  {String} accessToken
   * @param  {String} [locale]
   * @return {FacebookAdsApi}
   */
  static init (accessToken: string, locale: string = 'en_US') {
    const api = new this(accessToken, locale);
    this.setDefaultApi(api);
    return api;
  }

  static setDefaultApi (api: FacebookAdsApi) {
    this._defaultApi = api;
  }

  static getDefaultApi () {
    return this._defaultApi;
  }

  setDebug (flag: boolean) {
    this._debug = flag;
    return this;
  }

  /**
   * Http Request
   * @param  {String} method
   * @param  {String} path
   * @param  {Object} [params]
   * @param  {Object} [files]
   * @return {Promise}
   */
  call (
    method: string,
    path: string | Array<string> | String,
    params: Object = {},
    files: Object = {},
    useMultipartFormData: Boolean = false,
    urlOverride: string
  ): Promise<*> {
    let url: any;
    let data: Object = {};
    if (method === 'POST' || method === 'PUT') {
      data = params;
      params = {};
    }
    const domain = urlOverride || FacebookAdsApi.GRAPH;
    if (typeof path !== 'string' && !(path instanceof String)) {
      url = [domain, FacebookAdsApi.VERSION, ...path].join('/');
      if (!params.access_token) {
        params['access_token'] = this.accessToken;
      }

      url += `?${FacebookAdsApi._encodeParams(params)}`;
    } else {
      url = path;
    }

    if (this.appsecretProof && !url.includes('appsecret_proof')) {
      let connector: string = '?';
      if (url.indexOf('?') > -1) {
        connector = '&';
      }
      url += connector + 'appsecret_proof=' + this.appsecretProof;
    }
    const strUrl: string = (url: any);

    return Http.request(method, strUrl, data, files, useMultipartFormData)
      .then(response => {
        if (this._debug) {
          console.log(
            `200 ${method} ${url} ${data ? JSON.stringify(data) : ''}`
          );
          console.log(
            `Response: ${response ? JSON.stringify(response) : ''}`
          );
        }
        return Promise.resolve(response);
      })
      .catch(response => {
        if (this._debug) {
          console.log(
            `${response.status} ${method} ${url}
            ${data ? JSON.stringify(data) : ''}`
          );
        }
        throw new FacebookRequestError(response, method, url, data);
      });
  }

  static _encodeParams (params: Object) {
    return Object.keys(params)
      .map(key => {
        var param = params[key];
        if (typeof param === 'object') {
          param = param ? JSON.stringify(param) : '';
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(param)}`;
      })
      .join('&');
  }
}
