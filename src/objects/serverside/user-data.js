/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import ServerSideUtils from './utils';

/**
 * UserData represents the User Data Parameters(user_data) of a Server Side Event Request.
 * 'user_data' is a set of identifiers Facebook can use for targeted attribution. See Custom Audiences from CRM Data for details on how to normalize and hash the data you send.
 * @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#user}
 */

export default class UserData {

	_email: string;
	_phone: string;
	_gender: string;
	_first_name: string;
	_last_name: string;
	_date_of_birth: string;
	_city: string;
	_state: string;
	_zip: string;
	_country: string;
	_external_id: string;
	_client_ip_address: string;
	_client_user_agent: string;
	_fbc: string;
	_fbp: string;
	_subscription_id: string;

	/**
	 * @param {String} email An email address, in lowercase.
	 * @param {String} phone A phone number. Include only digits with country code, area code, and number.
	 * @param {String} gender Gender, in lowercase. Either f or m.
	 * @param {String} first_name A first name in lowercase.
	 * @param {String} last_name A last name in lowercase.
	 * @param {String} date_of_birth A date of birth given as year, month, and day in YYYYMMDD format.
	 * @param {String} city A city in lower-case without spaces or punctuation.
	 * @param {String} state A two-letter state code in lowercase.
	 * @param {String} country A two-letter country code in lowercase.
	 * @param {String} zip Postal code of the city in your country standard
	 * @param {String} external_id Any unique ID from the advertiser,
	 * @param {String} client_ip_address The IP address of the browser corresponding to the event.
	 * @param {String} client_user_agent The user agent for the browser corresponding to the event.
	 * @param {String} fbp The Facebook click ID value stored in the _fbc browser cookie under your domain.
	 * @param {String} fbc The Facebook browser ID value stored in the _fbp browser cookie under your domain.
	 * @param {String} subscription_id The subscription ID for the user in this transaction.
	 */
	constructor(email: string, phone: string, gender: string, first_name: string, last_name: string, date_of_birth: string,
		city: string, state: string, zip: string, country: string, external_id: string, client_ip_address: string, client_user_agent: string, fbp: string, fbc: string, subscription_id: string) {

		this._email = email;
		this._phone = phone;
		this._gender = gender;
		this._first_name = first_name;
		this._last_name = last_name;
		this._date_of_birth = date_of_birth;
		this._city = city;
		this._state = state;
		this._country = country;
		this._zip = zip;
		this._external_id = external_id;
		this._client_ip_address = client_ip_address;
		this._client_user_agent = client_user_agent;
		this._fbp = fbp;
		this._fbc = fbc;
		this._subscription_id = subscription_id;
	}

	static get Gender(): Object {
		return Object.freeze({
			MALE: 'm',
			FEMALE: 'f',
		});
	}


	/**
	 * Gets the email address for the user data field.
	 * An email address, in lowercase.
	 * Example: joe@eg.com
	 */
	get email() {
		return this._email;
	}

	/**
	 * Sets the email address for the user data field.
	 * @param email An email address, in lowercase.
	 * Example: joe@eg.com
	 */
	set email(email: string) {
		this._email = email;
	}

	/**
	 * Sets the email address for the user data field.
	 * @param {String} email An email address, in lowercase.
	 * Example: joe@eg.com
	 */
	setEmail(email: string) : UserData {
		this._email = email;
		return this;
	}

	/**
	 * Gets the phone number for the user data.
	 * A phone number. Include only digits with country code, area code, and number.
	 * Example: 16505551212
	 */
	get phone() {
		return this._phone;
	}

	/**
	 * Sets the phone number for the user data.
	 * @param phone A phone number. Include only digits with country code, area code, and number.
	 * Example: 16505551212
	 */
	set phone(phone: string) {
		this._phone = phone;
	}

	/**
	 * Sets the phone number for the user data.
	 * @param {String} phone A phone number. Include only digits with country code, area code, and number.
	 * Example: 16505551212
	 */
	setPhone(phone: string) : UserData {
		this._phone = phone;
		return this;
	}

	/**
	 * Gets the gender value for the user data.
	 * Gender in lowercase. Either f for FEMALE or m for MALE.
	 * Example: f
	 */
	get gender() {
		return this._gender;
	}

	/**
	 * Sets the gender value for the user data.
	 * @param gender Gender in lowercase. Either f for FEMALE or m for MALE.
	 * Example: f
	 */
	set gender(gender: string) {
		this._gender = gender;
	}

	/**
	 * Sets the gender value for the user data.
	 * @param {String} gender Gender in lowercase. Either f for FEMALE or m for MALE.
	 * Example: f
	 */
	setGender(gender: string) : UserData {
		this._gender = gender;
		return this;
	}

	/**
	 * Gets the date of birth for the user data.
	 * A date of birth given as year, month, and day in the Format YYYYMMDD
	 * Example: 19971226 for December 26, 1997.
	 */
	get date_of_birth() {
		return this._date_of_birth;
	}

	/**
	 * Sets the date of birth for the user data.
	 * @param date_of_birth A date of birth given as year, month, and day in the Format YYYYMMDD
	 * Example: 19971226 for December 26, 1997.
	 */
	set date_of_birth(date_of_birth: string) {
		this._date_of_birth = date_of_birth;
	}

	/**
	 * Sets the date of birth for the user data.
	 * @param {String} date_of_birth A date of birth given as year, month, and day in the Format YYYYMMDD
	 * Example: 19971226 for December 26, 1997.
	 */
	setDateOfBirth(date_of_birth: string) : UserData {
		this._date_of_birth = date_of_birth;
		return this;
	}

	/**
	 * Gets the last name for the user data.
	 * last_name is the last name in lowercase.
	 * Example: smith
	 */
	get last_name() {
		return this._last_name;
	}

	/**
	 * Sets the last name for the user data.
	 * @param last_name is last name in lowercase.
	 * Example: smith
	 */
	set last_name(last_name: string) {
		this._last_name = last_name;
	}

	/**
	 * Sets the last name for the user data.
	 * @param {String} last_name is last name in lowercase.
	 * Example: smith
	 */
	setLastName(last_name: string) : UserData {
		this._last_name = last_name;
		return this;
	}

	/**
	 * Gets the first name for the user data.
	 * first_name is first name in lowercase.
	 * Example: joe
	 */
	get first_name() {
		return this._first_name;
	}

	/**
	 * Sets the first name for the user data.
	 * @param first_name is first name in lowercase.
	 * Example: joe
	 */
	set first_name(first_name: string) {
		this._first_name = first_name;
	}

	/**
	 * Sets the first name for the user data.
	 * @param {String} first_name is first name in lowercase.
	 * Example: joe
	 */
	setFirstName(first_name: string) : UserData {
		this._first_name = first_name;
		return this;
	}

	/**
	 * Gets the city for the user data.
	 * city is city in lower-case without spaces or punctuation.
	 * Example: menlopark
	 */
	get city() {
		return this._city;
	}

	/**
	 * Sets the city for the user data.
	 * @param city is city in lower-case without spaces or punctuation.
	 * Example: menlopark
	 */
	set city(city: string) {
		this._city = city;
	}

	/**
	 * Sets the city for the user data.
	 * @param {String} city is city in lower-case without spaces or punctuation.
	 * Example: menlopark
	 */
	setCity(city: string) : UserData {
		this._city = city;
		return this;
	}

	/**
	 * Gets the zip/postal code for the user data.
	 * zip is a five-digit zip code for United States.For other locations, follow each country's standards.
	 * Example: 98121 (for United States Zipcode)
	 */
	get zip() {
		return this._zip;
	}

	/**
	 * Sets the zip/postal code for the user data.
	 * @param zip is a five-digit zip code for United States.For other locations, follow each country's standards.
	 * Example: 98121 (for United States Zipcode)
	 */
	set zip(zip: string) {
		this._zip = zip;
	}

	/**
	 * Sets the zip/postal code for the user data.
	 * @param {String} zip is a five-digit zip code for United States.For other locations, follow each country's standards.
	 * Example: 98121 (for United States Zipcode)
	 */
	setZip(zip: string) : UserData{
		this._zip = zip;
		return this;
	}

	/**
	 * Gets the state for the user data.
	 * state is state in lower-case without spaces or punctuation.
	 * Example: ca
	 */
	get state() {
		return this._state;
	}

	/**
	 * Sets the state for the user data.
	 * @param state is state in lower-case without spaces or punctuation.
	 * Example: ca
	 */
	set state(state: string) {
		this._state = state;
	}

	/**
	 * Sets the state for the user data.
	 * @param {String} state is state in lower-case without spaces or punctuation.
	 * Example: ca
	 */
	setState(state: string) : UserData {
		this._state = state;
		return this;
	}

	/**
	 * Gets the country for the user data.
	 * country is A two-letter country code in lowercase.
	 * Example: usa
	 */
	get country() {
		return this._country;
	}

	/**
	 * Sets the country for the user data.
	 * @param country is A two-letter country code in lowercase.
	 * Example: usa
	 */
	set country(country: string) {
		this._country = country;
	}

	/**
	 * Sets the country for the user data.
	 * @param {String} country is A two-letter country code in lowercase.
	 * Example: usa
	 */
	setCountry(country: string) : UserData {
		this._country = country;
		return this;
	}

	/**
	 * Gets the external id for the user data.
	 * external_id is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
	 * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
	 * If External ID is being sent via other channels, then it should be sent in the same format via the server-side API
	 * @see {@link https://www.facebook.com/business/help/104039186799009}
	 */
	get external_id() {
		return this._external_id;
	}

	/**
	 * Sets the external id for the user data.
	 * @param external_id is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
	 * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
	 * If External ID is being sent via other channels, then it should be sent in the same format via the server-side API
	 * @see {@link https://www.facebook.com/business/help/104039186799009}
	 */
	set external_id(external_id: string) {
		this._external_id = external_id;
	}

	/**
	 * Sets the external id for the user data.
	 * @param {String} external_id is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
	 * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
	 * If External ID is being sent via other channels, then it should be sent in the same format via the server-side API
	 * @see {@link https://www.facebook.com/business/help/104039186799009}
	 */
	setExternalId(external_id: string) : UserData {
		this._external_id = external_id;
		return this;
	}


	/**
	 * Gets the client ip address for the user data.
	 * client_ip_address is the IP address of the browser corresponding to the event.
	 */
	get client_ip_address() {
		return this._client_ip_address;
	}

	/**
	 * Sets the client ip address for the user data.
	 * @param client_ip_address is the IP address of the browser corresponding to the event.
	 */
	set client_ip_address(client_ip_address: string) {
		this._client_ip_address = client_ip_address;
	}

	/**
	 * Sets the client ip address for the user data.
	 * @param {String} client_ip_address is the IP address of the browser corresponding to the event.
	 */
	setClientIpAddress(client_ip_address: string) : UserData {
		this._client_ip_address = client_ip_address;
		return this;
	}

	/**
	 * Gets the client user agent for the user data.
	 * client_user_agent is the user agent for the browser corresponding to the event.
	 */
	get client_user_agent() {
		return this._client_user_agent;
	}

	/**
	 * Sets the client user agent for the user data.
	 * @param client_user_agent is the user agent for the browser corresponding to the event.
	 */
	set client_user_agent(client_user_agent: string) {
		this._client_user_agent = client_user_agent;
	}

	/**
	 * Sets the client user agent for the user data.
	 * @param {String} client_user_agent is the user agent for the browser corresponding to the event.
	 */
	setClientUserAgent(client_user_agent: string) : UserData {
		this._client_user_agent = client_user_agent;
		return this;
	}

	/**
	 * Gets the fbc for the user data.
	 * fbc is the Facebook click ID value stored in the _fbc browser cookie under your domain.
	 * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#fbc},
	 * You can also generate this value from a fbclid query parameter.
	 */
	get fbc() {
		return this._fbc;
	}

	/**
	 * Sets the fbc for the user data.
	 * @param fbc is the Facebook click ID value stored in the _fbc browser cookie under your domain.
	 * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#fbc},
	 * You can also generate this value from a fbclid query parameter.
	 */
	set fbc(fbc: string) {
		this._fbc = fbc;
	}

	/**
	 * Sets the fbc for the user data.
	 * @param {String} fbc is the Facebook click ID value stored in the _fbc browser cookie under your domain.
	 * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#fbc},
	 * You can also generate this value from a fbclid query parameter.
	 */
	setFbc(fbc: string) : UserData {
		this._fbc = fbc;
		return this;
	}


	/**
	 * Gets the fbp for the user data.
	 * fbp is Facebook browser ID value stored in the _fbp browser cookie under your domain.
	 * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#fbc},
	 */
	get fbp() {
		return this._fbp;
	}

	/**
	 * Sets the fbp for the user data.
	 * @param fbp is Facebook browser ID value stored in the _fbp browser cookie under your domain.
	 * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#fbc},
	 */
	set fbp(fbp: string) {
		this._fbp = fbp;
	}

	/**
	 * Sets the fbp for the user data.
	 * @param {String} fbp is Facebook browser ID value stored in the _fbp browser cookie under your domain.
	 * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#fbc},
	 */
	setFbp(fbp: string) : UserData {
		this._fbp = fbp;
		return this;
	}

	/**
	 * Gets the subscription id for the user data.
	 * @param subscription_id is the subscription ID for the user in this transaction. This is similar to the order ID for an individual product.
	 * Example: anid1234.
	 */
	get subscription_id() {
		return this._subscription_id;
	}

	/**
	 * Sets the subscription id for the user data.
	 * @param {String} subscription_id is the subscription ID for the user in this transaction. This is similar to the order ID for an individual product.
	 * Example: anid1234.
	 */
	set subscription_id(subscription_id: string) {
		this._subscription_id = subscription_id;
	}

	/**
	 * Sets the subscription id for the user data.
	 * @param {String} subscription_id is the subscription ID for the user in this transaction. This is similar to the order ID for an individual product.
	 * Example: anid1234.
	 */
	setSubscriptionId(subscription_id: string) : UserData {
		this._subscription_id = subscription_id;
		return this;
	}

	/**
	 * Returns the normalized payload for the user_data parameter.
	 * @returns {Object} normalized user data payload.
	 */
	normalize(): Object {
		const userData = {};

		if (this.email) {
			userData['em'] = ServerSideUtils.normalizeAndHash(this.email, 'em');
		}

		if (this.phone) {
			userData['ph'] = ServerSideUtils.normalizeAndHash(this.phone, 'ph');
		}

		if (this.gender) {
			userData['ge'] = ServerSideUtils.normalizeAndHash(this.gender, 'ge');
		}

		if (this.date_of_birth) {
			userData['db'] = ServerSideUtils.normalizeAndHash(this.date_of_birth, 'db');
		}

		if (this.last_name) {
			userData['ln'] = ServerSideUtils.normalizeAndHash(this.last_name, 'ln');
		}

		if (this.first_name) {
			userData['fn'] = ServerSideUtils.normalizeAndHash(this.first_name, 'fn');
		}

		if (this.city) {
			userData['ct'] = ServerSideUtils.normalizeAndHash(this.city, 'ct');
		}

		if (this.state) {
			userData['st'] = ServerSideUtils.normalizeAndHash(this.state, 'st');
		}

		if (this.zip) {
			userData['zp'] = ServerSideUtils.normalizeAndHash(this.zip, 'zp');
		}

		if (this.country) {
			userData['country'] = ServerSideUtils.normalizeAndHash(this.country, 'country');
		}

		if (this.external_id) {
			userData['external_id'] = this.external_id;
		}

		if (this.client_ip_address) {
			userData['client_ip_address'] = this.client_ip_address;
		}

		if (this.client_user_agent) {
			userData['client_user_agent'] = this.client_user_agent;
		}

		if (this.fbc) {
			userData['fbc'] = this.fbc;
		}

		if (this.fbp) {
			userData['fbp'] = this.fbp;
		}

		if (this.subscription_id) {
			userData['subscription_id'] = this.subscription_id;
		}

		return userData;
	}
}
