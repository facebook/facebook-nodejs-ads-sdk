/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdsPixelEventLastFiredTime
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelEventLastFiredTime extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      event: 'event',
      last_fired_time: 'last_fired_time',
      id: 'id'
    });
  }

  get (fields, params): AdsPixelEventLastFiredTime {
    return this.read(
      fields,
      params
    );
  }
}
