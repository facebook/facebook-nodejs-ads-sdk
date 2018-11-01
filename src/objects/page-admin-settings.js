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
 * PageAdminSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageAdminSettings extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      setting: 'setting',
      value: 'value',
      id: 'id'
    });
  }

  get (fields, params): PageAdminSettings {
    return this.read(
      fields,
      params
    );
  }
}
