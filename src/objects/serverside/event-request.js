/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import AdsPixel from './../ads-pixel';
import FacebookAdsApi from './../../api';
import EventResponse from './event-response';
import ServerEvent from './server-event';

/**
 * EventRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters}
 */

export default class EventRequest {
	_access_token: string;
	_pixel_id: string;
	_events: Array<ServerEvent> ;
	_test_event_code: ?string;
	_debug_mode: bool;
	_api: Object

	/**
	 * @param {String} access_token Access Token for the user calling Graph API
	 * @param {String} pixel_id Pixel Id to which you are sending the events
	 * @param {Array<ServerEvent>} events data for the request Payload for a Server Side Event
	 * @param {String} test_event_code Test Event Code used to verify that your server events are received correctly by Facebook.
	 * @param {Boolean} debug_mode_flag Set to true if you want to enable more logging in SDK
	 */
	constructor(access_token: string, pixel_id: string, events: Array<ServerEvent> = [], test_event_code: ?string = null, debug_mode_flag: bool = false ) {

		this._access_token = access_token;
		this._pixel_id = pixel_id;
		this._events = events;
		this._test_event_code = test_event_code;
		this._debug_mode = debug_mode_flag;

		this._api = FacebookAdsApi.init(this._access_token);
	}

	/**
	 * Gets the data for the request Payload for a Server Side Event. events is represented by a list/array of ServerEvent objects.
	 */
	get events() {
		return this._events;
	}

	/**
	 * Sets the events for the request Payload for a Server Side Event.
	 * events is represented by a list/array of ServerEvent objects.
	 * @param events for the current server event
	 */
	set events(events: Array<ServerEvent>) {
		this._events = events;
	}

	/**
	 * Sets the events for the request Payload for a Server Side Event.
	 * events is represented by a list/array of ServerEvent objects.
	 * @param events for the current server event
	 */
	setEvents(events: Array<ServerEvent>) : EventRequest {
		this._events = events;
		return this;
	}


	/**
	 * Gets the test_event_code for the request
	 * Code used to verify that your server events are received correctly by Facebook.
	 * Use this code to test your server events in the Test Events feature in Events Manager.
	 * See Test Events Tool @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/using-the-api#testEvents} for an example.
	 */
	get test_event_code() {
		return this._test_event_code;
	}

	/**
	 * Sets the test_event_code for the request
	 * Code used to verify that your server events are received correctly by Facebook.
	 * Use this code to test your server events in the Test Events feature in Events Manager.
	 * See Test Events Tool @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/using-the-api#testEvents} for an example.
	 */
	set test_event_code(test_event_code: string) {
		this._test_event_code = test_event_code;
	}

	/**
	 * Sets the test_event_code for the request
	 * Code used to verify that your server events are received correctly by Facebook.
	 * Use this code to test your server events in the Test Events feature in Events Manager.
	 * See Test Events Tool @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/using-the-api#testEvents} for an example.
	 */
	setTestEventCode(test_event_code: string) : EventRequest {
		this._test_event_code = test_event_code;
		return this;
	}


	/**
	 * Gets the debug mode flag for the Graph API request
	 */
	get debug_mode() {
		return this._debug_mode;
	}

	/**
	 * Sets the debug mode flag for the Graph API request
	 * @param debug_mode boolean value representing whether you want to send the request in debug mode to get detailed logging.
	 */
	set debug_mode(debug_mode: boolean) {
		this._debug_mode = debug_mode;
	}

	/**
	 * Sets the debug mode flag for the Graph API request
	 * @param {Boolean} debug_mode boolean value representing whether you want to send the request in debug mode to get detailed logging.
	 */
	setDebugMode(debug_mode: boolean) : EventRequest {
		this._debug_mode = debug_mode;
		return this;
	}

	/**
	 * Gets the access token for the Graph API request
	 */
	get access_token() {
		return this._access_token;
	}

	/**
	 * Sets the access token for the Graph API request
	 * @param access_token string representing the access token that is used to make the Graph API.
	 */
	set access_token(access_token: string) {
		this._access_token = access_token;
	}

	/**
	 * Sets the access token for the Graph API request
	 * @param {String} access_token string representing the access token that is used to make the Graph API.
	 */
	setAccessToken(access_token: string) : EventRequest {
		this._access_token = access_token;
		return this;
	}

	/**
	 * Gets the pixel against which we send the events
	 */
	get pixel() {
		return this._pixel_id;
	}

	/**
	 * Sets the pixel against which we send the events
	 * @param {String} pixel string value representing whether you want to send the request in debug mode to get detailed logging.
	 */
	set pixel_id(pixel_id: string) {
		this._pixel_id = pixel_id;
	}

	/**
	 * Sets the pixel against which we send the events
	 * @param {String} pixel_id String value for the pixel_id against which you want to send the events.
	 */
	setPixelId(pixel_id: string) : EventRequest {
		this._pixel_id = pixel_id;
		return this;
	}

	/**
	 * Executes the current event_request data by making a call to the Facebook Graph API.
	 */
	execute(): EventResponse {
		let fields, params;
		fields = [];

		let normalized_events = [];

		for (let i = 0; i < this.events.length; i++) {
			const event = this.events[i];
			const normalized_event = event.normalize.call(event);
			normalized_events.push(normalized_event);
		}

		if (this.debug_mode) {
			this._api.setDebug(true);
		}


		params = {
			'data': normalized_events,
			'test_event_code' : this.test_event_code
		}

		const response = (new AdsPixel(this._pixel_id)).createEvent(
			fields,
			params
		);

		const eventResponse = new EventResponse(response.events_received, response.messages, response.fbtrace_id);

		return eventResponse;
	}
}
