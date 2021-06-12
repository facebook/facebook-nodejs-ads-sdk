/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdAccount from './ad-account';
import Business from './business';
import CustomAudience from './custom-audience';
import CustomConversion from './custom-conversion';

/**
 * OfflineConversionDataSet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      business: 'business',
      config: 'config',
      creation_time: 'creation_time',
      description: 'description',
      duplicate_entries: 'duplicate_entries',
      enable_auto_assign_to_accounts: 'enable_auto_assign_to_accounts',
      event_stats: 'event_stats',
      event_time_max: 'event_time_max',
      event_time_min: 'event_time_min',
      id: 'id',
      is_mta_use: 'is_mta_use',
      is_restricted_use: 'is_restricted_use',
      is_unavailable: 'is_unavailable',
      last_upload_app: 'last_upload_app',
      last_upload_app_changed_time: 'last_upload_app_changed_time',
      match_rate_approx: 'match_rate_approx',
      matched_entries: 'matched_entries',
      name: 'name',
      usage: 'usage',
      valid_entries: 'valid_entries',
    });
  }

  static get PermittedRoles (): Object {
    return Object.freeze({
      admin: 'ADMIN',
      advertiser: 'ADVERTISER',
      uploader: 'UPLOADER',
    });
  }
  static get RelationshipType (): Object {
    return Object.freeze({
      ad_manager: 'AD_MANAGER',
      agency: 'AGENCY',
      aggregator: 'AGGREGATOR',
      audience_manager: 'AUDIENCE_MANAGER',
      other: 'OTHER',
    });
  }

  getAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/adaccounts'
    );
  }

  createAdAccount (fields: Array<string>, params: Object = {}): Promise<OfflineConversionDataSet> {
    return this.createEdge(
      '/adaccounts',
      fields,
      params,
      OfflineConversionDataSet
    );
  }

  getAgencies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  createAgency (fields: Array<string>, params: Object = {}): Promise<OfflineConversionDataSet> {
    return this.createEdge(
      '/agencies',
      fields,
      params,
      OfflineConversionDataSet
    );
  }

  getAudiences (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CustomAudience,
      fields,
      params,
      fetchFirstPage,
      '/audiences'
    );
  }

  getCustomConversions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CustomConversion,
      fields,
      params,
      fetchFirstPage,
      '/customconversions'
    );
  }

  createEvent (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/events',
      fields,
      params,
      AbstractObject
    );
  }

  getStats (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/stats'
    );
  }

  getUploads (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/uploads'
    );
  }

  createUpload (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/uploads',
      fields,
      params,
      
    );
  }

  createValidate (fields: Array<string>, params: Object = {}): Promise<OfflineConversionDataSet> {
    return this.createEdge(
      '/validate',
      fields,
      params,
      OfflineConversionDataSet
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): OfflineConversionDataSet {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): OfflineConversionDataSet {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
