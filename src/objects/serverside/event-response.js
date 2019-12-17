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

/**
 * EventResponse
 * @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters}
 */

export default class EventResponse {

	_events_received: number;
	_messages: Array<string>;
	_fbtrace_id: string;

	/**
	 * @param {Number} _events_received
	 * @param {Array<string>} _messages
	 * @param {String} _fbtrace_id
	 */
	constructor(events_received: number, messages: Array<string>, fbtrace_id: string)  {

		this._events_received = events_received;
		this._messages = messages;
		this._fbtrace_id = fbtrace_id;
	}

	/**
	 * Sets the events received for the response received from Graph API.
	 * events_received is represented by integer.
	 * @param events_received representing the number of events received for the event Request
	 */
	get  events_received()  {
		return  this._events_received;
	}

	/**
	 * Sets the events received for the response received from Graph API.
	 * events_received is represented by integer.
	 * @param events_received representing the number of events received for the event Request
	 */
	set  events_received(events_received: number)  {
		this._events_received = events_received;
	}

    /**
	 * Sets the events received for the response received from Graph API.
	 * events_received is represented by integer.
	 * @param {Number} events_received representing the number of events received for the event Request
	 */
	setEventsReceived(events_received: number) : EventResponse {
		this._events_received = events_received;
        return this;
	}


	/**
	 * Sets the messages as array for the response received from Graph API.
	 * @param messages in the event Response
	 */
	get  messages()  {
		return  this.messages;
	}

	/**
	 * Sets the messages as array for the response received from Graph API.
	 * @param messages in the event Response
	 */
	set messages(messages: Array<string>)  {
		this._messages = messages;
	}

    /**
	 * Sets the messages as array for the response received from Graph API.
	 * @param {Array} messages in the event Response
	 */
	setMessages(messages: Array<string>)  : EventResponse {
		this._messages = messages;
        return this;
	}

	/**
	 * Gets the fbtrace_id for the response received from Graph API.
	 * @param fbtrace_id in the event Response that can used for debugging purposes
	 */
	get  fbtrace_id()  {
		return  this.fbtrace_id;
	}

	/**
	 * Sets the fbtrace_id for the response received from Graph API.
	 * @param fbtrace_id in the event Response that can used for debugging purposes
	 */
	set fbtrace_id(fbtrace_id: string)  {
		this._fbtrace_id = fbtrace_id;
	}

    /**
	 * Sets the fbtrace_id for the response received from Graph API.
	 * @param {String} fbtrace_id in the event Response that can used for debugging purposes
	 */
	setFbtraceId(fbtrace_id: string)  : EventResponse {
		this._fbtrace_id = fbtrace_id;
        return this;
	}
}
