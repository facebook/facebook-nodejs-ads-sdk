/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import UserData from './user-data';
import CustomData from './custom-data';

/**
 * ServerEvent
 * @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#serv}
 */
export default class ServerEvent {

	_event_name: string;
	_event_time: number;
	_event_source_url: string;
	_event_id: string;
	_opt_out: bool;
	_user_data: UserData;
	_custom_data: CustomData;

	/**
	 * @param {String} event_name A Facebook pixel Standard Event or Custom Event name.
	 * @param {Number} event_time A Unix timestamp in seconds indicating when the actual event occurred.
	 * @param {String} event_source_url The browser URL where the event happened.
	 * @param {String} event_id This ID can be any string chosen by the advertiser.
	 * @param {Boolean} opt_out A flag that indicates we should not use this event for ads delivery optimization.
	 * @param {UserData} user_data A map that contains user data. See UserData Class for options.
	 * @param {CustomData} custom_data A map that contains user data. See CustomData Class for options.
	 */
	constructor(event_name: string, event_time: number, event_source_url: string, user_data: UserData, custom_data: CustomData, event_id: string, opt_out: boolean) {

		this._event_name = event_name;
		this._event_time = event_time;
		this._user_data = user_data;
		this._custom_data = custom_data;
		this._event_source_url = event_source_url;
		this.event_id = event_id;
		this._opt_out = opt_out;
	}

	/**
	 * Gets the Event Name for the current Event.
	 */
	get event_name() {
		return this._event_name;
	}

	/**
	 * Sets the Event Name for the current Event.
	 * @param {String} event_name a Facebook pixel Standard Event or Custom Event name.
	 */
	set event_name(event_name: string) {
		this._event_name = event_name;
	}

	/**
	 * Sets the Event Name for the current Event.
	 * @param {String} event_name Facebook pixel Standard Event or Custom Event name.
	 */
	setEventName(event_name: string) : ServerEvent {
		this._event_name = event_name;
		return this;
	}

	/**
	 * Gets the Event Time when the current Event happened.
	 */
	get event_time() {
		return this._event_time;
	}

	/**
	 * Sets the Event Time when the current Event happened.
	 * @param {Number} event_time is a Unix timestamp in seconds indicating when the actual event occurred.
	 */
	set event_time(event_time: number) {
		this._event_time = event_time;
	}

	/**
	 * Sets the Event Time when the current Event happened.
	 * @param {Number} event_time is a Unix timestamp in seconds indicating when the actual event occurred.
	 */
	setEventTime(event_time: number) : ServerEvent {
		this._event_time = event_time;
		return this;
	}

	/**
	 * Gets the browser url source for the current event.
	 */
	get event_source_url() {
		return this._event_source_url;
	}

	/**
	 * Sets the browser url source for the current event.
	 * @param {String} event_source_url The browser URL where the event happened.
	 */
	set event_source_url(event_source_url: string) {
		this._event_source_url = event_source_url;
	}

	/**
	 * Sets the browser url source for the current event.
	 * @param {String} event_source_url The browser URL where the event happened.
	 */
	setEventSourceUrl(event_source_url: string) : ServerEvent {
		this._event_source_url = event_source_url;
		return this;
	}

	/**
	 * Gets the event_id for the current Event.
	 */
	get event_id() {
		return this._event_id;
	}

	/**
	 * Sets the event Id for the current Event.
	 * @param {String} event_id can be any string chosen by the advertiser. This is used with event_name to determine if events are identical.Learn about Deduplicate Pixel and Server-Side Events
	 * @see {@link https://developers.facebook.com/docs/marketing-api/server-side-api/using-the-api#dedup}
	 */
	set event_id(event_id: string) {
		this._event_id = event_id;
	}

	/**
	 * Sets the event Id for the current Event.
	 * @param {String} event_id can be any string chosen by the advertiser. This is used with event_name to determine if events are identical. Learn about Deduplicate Pixel and Server-Side Events.
	 * @see {@link https://developers.facebook.com/docs/marketing-api/server-side-api/using-the-api#dedup}
	 */
	setEventId(event_id: string)  : ServerEvent{
		this._event_id = event_id;
		return this;
	}

	/**
	 * Gets the opt_out feature for the current event.opt_out is a boolean flag that indicates we should not use this event for ads delivery optimization. If set to true, we only use the event for attribution.
	 */
	get opt_out() {
		return this._opt_out;
	}

	/**
	 * Sets the opt_out feature for the current event.
	 * @param {Boolean} opt_out is a boolean flag that indicates we should not use this event for ads delivery optimization. If set to true, we only use the event for attribution.
	 */
	set opt_out(opt_out: boolean) {
		this._opt_out = opt_out;
	}

	/**
	 * Sets the opt_out feature for the current event.
	 * @param {Boolean} opt_out is a boolean flag that indicates we should not use this event for ads delivery optimization. If set to true, we only use the event for attribution.
	 */
	setOptOut(opt_out: boolean) : ServerEvent {
		this._opt_out = opt_out;
		return this;
	}

	/**
	 * Gets the user data object for the current Server Event.
	 * @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#user}
	 */
	get user_data() {
		return this._user_data;
	}

	/**
	 * Sets the user data object for the current Server Event.
	 * @param {UserData} user_data user_data is a map that contains user data. See User Data Parameter Table for options. Also see Advanced Matching with the Pixel to see comparable options available for data sent via Facebook pixel.
	 * @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#user}
	 */
	set user_data(user_data: UserData) {
		this._user_data = user_data;
	}

	/**
	 * Sets the user data object for the current Server Event.
	 * @param {UserData} user_data user_data is a map that contains user data. See User Data Parameter Table for options. Also see Advanced Matching with the Pixel to see comparable options available for data sent via Facebook pixel.
	 * @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#user}
	 */
	setUserData(user_data: UserData) : ServerEvent {
		this._user_data = user_data;
		return this;
	}

	/**
	 * Gets the custom data object for the current Server Event.
	 * @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#custom}
	 */
	get custom_data() {
		return this._custom_data;
	}

	/**
	 * Sets the custom data object for the current Server Event.
	 * @param {CustomData} custom_data is a map that includes additional business data about the event.
	 * @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#custom}
	 */
	set custom_data(custom_data: CustomData) {
		this._custom_data = custom_data;
	}

	/**
	 * Sets the custom data object for the current Server Event.
	 * @param {CustomData} custom_data is a map that includes additional business data about the event.
	 * @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#custom}
	 */
	setCustomData(custom_data: CustomData) : ServerEvent {
		this._custom_data = custom_data;
		return this;
	}

	/**
	 * Returns the normalized payload for the event.
	 * @returns {Object} normalized event payload.
	 */
	normalize(): Object {

		const serverEvent = {};

		if (this.event_name) {
			serverEvent.event_name = this.event_name;
		}

		if (this.event_time) {
			serverEvent.event_time = this.event_time;
		}

		if (this.user_data) {
			serverEvent.user_data = this.user_data.normalize();
		}

		if (this.custom_data) {
			serverEvent.custom_data = this.custom_data.normalize();
		}

		if (this.opt_out) {
			serverEvent.opt_out = this.opt_out;
		}

		if (this.event_id) {
			serverEvent.event_id = this.event_id;
		}

		if (this.event_source_url) {
			serverEvent.event_source_url = this.event_source_url;
		}

		return serverEvent;
	}
}
