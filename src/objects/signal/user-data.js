/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import BusinessDataUserData from '../businessdataapi/user-data';
import ServerUserData from '../serverside/user-data';
import Utils from './utils';
import Business from '../business';
import ServerEvent from '../serverside/server-event';

/**
 * UserData represents the User Data Parameters(user_data) of Business Data API and Conversion API Request.
 */
export default class UserData {

    _business_data_user_data: BusinessDataUserData;
    _server_user_data: ServerUserData;

    /**
     * @param {String} email An email address, in lowercase.
     * @param {String} phone A phone number. Include only digits with country code, area code, and number.
     * @param {String} first_name A first name in lowercase.
     * @param {String} last_name A last name in lowercase.
     * @param {String} date_of_birth A date of birth given as year, month, and day in YYYYMMDD format.
     * @param {String} city A city in lower-case without spaces or punctuation.
     * @param {String} state A two-letter state code in lowercase.
     * @param {String} country A two-letter country code in lowercase.
     * @param {String} zip Postal code of the city in your country standard
     * @param {String} external_id Any unique ID from the advertiser,
     * @param {String} gender Gender, in lowercase. Either f or m.
     * @param {String} client_ip_address The IP address of the browser corresponding to the event.
     * @param {String} client_user_agent The user agent for the browser corresponding to the event.
     * @param {String} fbp The Facebook click ID value stored in the _fbc browser cookie under your domain.
     * @param {String} fbc The Facebook browser ID value stored in the _fbp browser cookie under your domain.
     * @param {String} subscription_id The subscription ID for the user in this transaction.
     * @param {String} fb_login_id The FB login ID for the user.
     * @param {String} lead_id The Id associated with a lead generated by Facebook's Lead Ads.
     * @param {String} dobd The date of birth day in DD format.
     * @param {String} dobm The date of birth month in MM format.
     * @param {String} doby The date of birth year in YYYY format.
     * @param {String} f5first The first 5 characters of the first name.
     * @param {String} f5last The first 5 characters of the last name.
     * @param {String} fi The first Name Initial
     * @param {String} address An physical address.
     */
    constructor(email: string, phone: string, first_name: string, last_name: string, date_of_birth: string,
        city: string, state: string, zip: string, country: string, external_id: string, gender: string,
        client_ip_address: string, client_user_agent: string, fbp: string, fbc: string, subscription_id: string,
        fb_login_id: string, lead_id: string, dobd: string, dobm: string, doby: string, f5first: string, f5last: string,
        fi: string, address: string) {
        this._business_data_user_data = new BusinessDataUserData(
            email,
            phone,
            first_name,
            last_name,
            date_of_birth,
            city,
            state,
            zip,
            country,
            external_id,
            address
        );
        this._server_user_data = new ServerUserData(
            email,
            phone,
            gender,
            first_name,
            last_name,
            date_of_birth,
            city,
            state,
            zip,
            country,
            external_id,
            client_ip_address,
            client_user_agent,
            fbp,
            fbc,
            subscription_id,
            fb_login_id,lead_id,dobd,dobm, doby
        );

        // conversion api
        this._server_user_data.f5first = f5first;
        this._server_user_data.f5last = f5last;
        this._server_user_data.fi = fi;
    }


    /**
     * Gets the email address for the user data field.
     * An email address, in lowercase.
     * Example: joe@eg.com
     */
    get email() {
        return Utils.constructResponse(this._server_user_data.email, this._business_data_user_data.email);
    }

    /**
     * Sets the email address for the user data field.
     * @param email An email address, in lowercase.
     * Example: joe@eg.com
     */
    set email(email: string) {
        this._business_data_user_data._email = email;
        this._server_user_data._email = email;
    }

    /**
     * Sets the email address for the user data field.
     * @param {String} email An email address, in lowercase.
     * Example: joe@eg.com
     */
    setEmail(email: string): UserData {
        this._business_data_user_data.email = email;
        this._server_user_data.email = email;
        return this;
    }

    /**
     * Gets the phone number for the user data.
     * A phone number. Include only digits with country code, area code, and number.
     * Example: 16505551212
     */
    get phone() {
        return Utils.constructResponse(this._server_user_data.phone, this._business_data_user_data.phone);
    }

    /**
     * Sets the phone number for the user data.
     * @param phone A phone number. Include only digits with country code, area code, and number.
     * Example: 16505551212
     */
    set phone(phone: string) {
        this._business_data_user_data.phone = phone;
        this._server_user_data.phone = phone;
    }

    /**
     * Sets the phone number for the user data.
     * @param {String} phone A phone number. Include only digits with country code, area code, and number.
     * Example: 16505551212
     */
    setPhone(phone: string): UserData {
        this._business_data_user_data.phone = phone;
        this._server_user_data.phone = phone;
        return this;
    }


    /**
     * Gets the date of birth for the user data.
     * A date of birth given as year, month, and day in the Format YYYYMMDD
     * Example: 19971226 for December 26, 1997.
     */
    get date_of_birth() {
        return Utils.constructResponse(this._server_user_data.date_of_birth, this._business_data_user_data.date_of_birth);
    }

    /**
     * Sets the date of birth for the user data.
     * @param date_of_birth A date of birth given as year, month, and day in the Format YYYYMMDD
     * Example: 19971226 for December 26, 1997.
     */
    set date_of_birth(date_of_birth: string) {
        this._business_data_user_data.date_of_birth = date_of_birth;
        this._server_user_data.date_of_birth = date_of_birth;
    }

    /**
     * Sets the date of birth for the user data.
     * @param {String} date_of_birth A date of birth given as year, month, and day in the Format YYYYMMDD
     * Example: 19971226 for December 26, 1997.
     */
    setDateOfBirth(date_of_birth: string): UserData {
        this._business_data_user_data.date_of_birth = date_of_birth;
        this._server_user_data.date_of_birth = date_of_birth;
        return this;
    }

    /**
     * Gets the last name for the user data.
     * last_name is the last name in lowercase.
     * Example: smith
     */
    get last_name() {
        return Utils.constructResponse(this._server_user_data.last_name, this._business_data_user_data.last_name);
    }

    /**
     * Sets the last name for the user data.
     * @param last_name is last name in lowercase.
     * Example: smith
     */
    set last_name(last_name: string) {
        this._business_data_user_data.last_name = last_name;
        this._server_user_data.last_name = last_name;
    }

    /**
     * Sets the last name for the user data.
     * @param {String} last_name is last name in lowercase.
     * Example: smith
     */
    setLastName(last_name: string): UserData {
        this._business_data_user_data.last_name = last_name;
        this._server_user_data.last_name = last_name;
        return this;
    }

    /**
     * Gets the first name for the user data.
     * first_name is first name in lowercase.
     * Example: joe
     */
    get first_name() {
        return Utils.constructResponse(this._server_user_data.first_name, this._business_data_user_data.first_name);
    }

    /**
     * Sets the first name for the user data.
     * @param first_name is first name in lowercase.
     * Example: joe
     */
    set first_name(first_name: string) {
        this._business_data_user_data.first_name = first_name;
        this._server_user_data.first_name = first_name;
    }

    /**
     * Sets the first name for the user data.
     * @param {String} first_name is first name in lowercase.
     * Example: joe
     */
    setFirstName(first_name: string): UserData {
        this._business_data_user_data.first_name = first_name;
        this._server_user_data.first_name = first_name;
        return this;
    }

    /**
     * Gets the city for the user data.
     * city is city in lower-case without spaces or punctuation.
     * Example: menlopark
     */
    get city() {
        return Utils.constructResponse(this._server_user_data.city, this._business_data_user_data.city);
    }

    /**
     * Sets the city for the user data.
     * @param city is city in lower-case without spaces or punctuation.
     * Example: menlopark
     */
    set city(city: string) {
        this._business_data_user_data.city = city;
        this._server_user_data.city = city;
    }

    /**
     * Sets the city for the user data.
     * @param {String} city is city in lower-case without spaces or punctuation.
     * Example: menlopark
     */
    setCity(city: string): UserData {
        this._business_data_user_data.city = city;
        this._server_user_data.city = city;
        return this;
    }

    /**
     * Gets the zip/postal code for the user data.
     * zip is a five-digit zip code for United States.For other locations, follow each country's standards.
     * Example: 98121 (for United States zip code)
     */
    get zip() {
        return Utils.constructResponse(this._server_user_data.zip, this._business_data_user_data.zip);
    }

    /**
     * Sets the zip/postal code for the user data.
     * @param zip is a five-digit zip code for United States.For other locations, follow each country's standards.
     * Example: 98121 (for United States zip code)
     */
    set zip(zip: string) {
        this._business_data_user_data.zip = zip;
        this._server_user_data.zip = zip;
    }

    /**
     * Sets the zip/postal code for the user data.
     * @param {String} zip is a five-digit zip code for United States.For other locations, follow each country's standards.
     * Example: 98121 (for United States zip code)
     */
    setZip(zip: string): UserData {
        this._business_data_user_data.zip = zip;
        this._server_user_data.zip = zip;
        return this;
    }

    /**
     * Gets the state for the user data.
     * state is state in lower-case without spaces or punctuation.
     * Example: ca
     */
    get state() {
        return Utils.constructResponse(this._server_user_data.state, this._business_data_user_data.state);
    }

    /**
     * Sets the state for the user data.
     * @param state is state in lower-case without spaces or punctuation.
     * Example: ca
     */
    set state(state: string) {
        this._business_data_user_data.state = state;
        this._server_user_data.state = state;
    }

    /**
     * Sets the state for the user data.
     * @param {String} state is state in lower-case without spaces or punctuation.
     * Example: ca
     */
    setState(state: string): UserData {
        this._business_data_user_data.state = state;
        this._server_user_data.state = state;
        return this;
    }

    /**
     * Gets the country for the user data.
     * country is A two-letter country code in lowercase.
     * Example: usa
     */
    get country() {
        return Utils.constructResponse(this._server_user_data.country, this._business_data_user_data.country);
    }

    /**
     * Sets the country for the user data.
     * @param country is A two-letter country code in lowercase.
     * Example: usa
     */
    set country(country: string) {
        this._business_data_user_data.country = country;
        this._server_user_data.country = country;
    }

    /**
     * Sets the country for the user data.
     * @param {String} country is A two-letter country code in lowercase.
     * Example: usa
     */
    setCountry(country: string): UserData {
        this._business_data_user_data.country = country;
        this._server_user_data.country = country;
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
        return Utils.constructResponse(this._server_user_data.external_id, this._business_data_user_data.external_id);
    }

    /**
     * Sets the external id for the user data.
     * @param external_id is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
     * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
     * If External ID is being sent via other channels, then it should be sent in the same format via the server-side API
     * @see {@link https://www.facebook.com/business/help/104039186799009}
     */
    set external_id(external_id: string) {
        this._business_data_user_data.external_id = external_id;
        this._server_user_data.external_id = external_id;
    }

    /**
     * Sets the external id for the user data.
     * @param {String} external_id is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
     * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
     * If External ID is being sent via other channels, then it should be sent in the same format via the server-side API
     * @see {@link https://www.facebook.com/business/help/104039186799009}
     */
    setExternalId(external_id: string): UserData {
        this._business_data_user_data.external_id = external_id;
        this._server_user_data.external_id = external_id;
        return this;
    }

    /**
     * Gets the gender value for the user data.
     * Gender in lowercase. Either f for FEMALE or m for MALE.
     * Example: f
     */
    get gender() {
        return Utils.constructResponse(this._server_user_data.gender, null);
    }

    /**
     * Sets the gender value for the user data.
     * @param gender Gender in lowercase. Either f for FEMALE or m for MALE.
     * Example: f
     */
    set gender(gender: string) {
        this._server_user_data.gender = gender;
    }

    /**
     * Sets the gender value for the user data.
     * @param {String} gender Gender in lowercase. Either f for FEMALE or m for MALE.
     * Example: f
     */
    setGender(gender: string): UserData {
        this._server_user_data.gender = gender;
        return this;
    }

    /**
     * Gets the client ip address for the user data.
     * client_ip_address is the IP address of the browser corresponding to the event.
     */
    get client_ip_address() {
        return Utils.constructResponse(this._server_user_data.client_ip_address, null);
    }

    /**
     * Sets the client ip address for the user data.
     * @param client_ip_address is the IP address of the browser corresponding to the event.
     */
    set client_ip_address(client_ip_address: string) {
        this._server_user_data.client_ip_address = client_ip_address;
    }

    /**
     * Sets the client ip address for the user data.
     * @param {String} client_ip_address is the IP address of the browser corresponding to the event.
     */
    setClientIpAddress(client_ip_address: string): UserData {
        this._server_user_data.client_ip_address = client_ip_address;
        return this;
    }

    /**
     * Gets the client user agent for the user data.
     * client_user_agent is the user agent for the browser corresponding to the event.
     */
    get client_user_agent() {
        return Utils.constructResponse(this._server_user_data.client_user_agent, null);
    }

    /**
     * Sets the client user agent for the user data.
     * @param client_user_agent is the user agent for the browser corresponding to the event.
     */
    set client_user_agent(client_user_agent: string) {
        this._server_user_data.client_user_agent = client_user_agent;
    }

    /**
     * Sets the client user agent for the user data.
     * @param {String} client_user_agent is the user agent for the browser corresponding to the event.
     */
    setClientUserAgent(client_user_agent: string): UserData {
        this._server_user_data.client_user_agent = client_user_agent;
        return this;
    }

    /**
     * Gets the fbc for the user data.
     * fbc is the Facebook click ID value stored in the _fbc browser cookie under your domain.
     * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#fbc},
     * You can also generate this value from a fbclid query parameter.
     */
    get fbc() {
        return Utils.constructResponse(this._server_user_data.fbc, null);
    }

    /**
     * Sets the fbc for the user data.
     * @param fbc is the Facebook click ID value stored in the _fbc browser cookie under your domain.
     * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#fbc},
     * You can also generate this value from a fbclid query parameter.
     */
    set fbc(fbc: string) {
        this._server_user_data.fbc = fbc;
    }

    /**
     * Sets the fbc for the user data.
     * @param {String} fbc is the Facebook click ID value stored in the _fbc browser cookie under your domain.
     * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#fbc},
     * You can also generate this value from a fbclid query parameter.
     */
    setFbc(fbc: string): UserData {
        this._server_user_data.fbc = fbc;
        return this;
    }

    /**
     * Gets the fbp for the user data.
     * fbp is Facebook browser ID value stored in the _fbp browser cookie under your domain.
     * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#fbc},
     */
    get fbp() {
        return Utils.constructResponse(this._server_user_data.fbp, null);
    }

    /**
     * Sets the fbp for the user data.
     * @param fbp is Facebook browser ID value stored in the _fbp browser cookie under your domain.
     * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#fbc},
     */
    set fbp(fbp: string) {
        this._server_user_data.fbp = fbp;
    }

    /**
     * Sets the fbp for the user data.
     * @param {String} fbp is Facebook browser ID value stored in the _fbp browser cookie under your domain.
     * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#fbc},
     */
    setFbp(fbp: string): UserData {
        this._server_user_data.fbp = fbp;
        return this;
    }

    /**
     * Gets the subscription id for the user data.
     * @return subscription_id is the subscription ID for the user in this transaction. This is similar to the order ID for an individual product.
     * Example: anid1234.
     */
    get subscription_id() {
        return Utils.constructResponse(this._server_user_data.subscription_id, null);
    }

    /**
     * Sets the subscription id for the user data.
     * @param {String} subscription_id is the subscription ID for the user in this transaction. This is similar to the order ID for an individual product.
     * Example: anid1234.
     */
    set subscription_id(subscription_id: string) {
        this._server_user_data.subscription_id = subscription_id;
    }

    /**
     * Sets the subscription id for the user data.
     * @param {String} subscription_id is the subscription ID for the user in this transaction. This is similar to the order ID for an individual product.
     * Example: anid1234.
     */
    setSubscriptionId(subscription_id: string): UserData {
        this._server_user_data.subscription_id = subscription_id;
        return this;
    }

    /**
     * Gets the fb_login_id for the user data.
     */
    get fb_login_id() {
        return Utils.constructResponse(this._server_user_data.fb_login_id, null);
    }

    /**
     * Sets the fb_login_id for the user data.
     * @param fb_login_id
     */
    set fb_login_id(fb_login_id: string) {
        this._server_user_data.fb_login_id = fb_login_id;
    }

    /**
     * Sets the fb_login_id for the user data.
     * @param {String} fb_login_id
     */
    setFbLoginId(fb_login_id: string): UserData {
        this._server_user_data.fb_login_id = fb_login_id;
        return this;
    }

    /**
     * Gets the lead_id for the user data. Lead ID is associated with a lead generated by Facebook's Lead Ads.
     */
    get lead_id() {
        return Utils.constructResponse(this._server_user_data.lead_id, null);
    }

    /**
     * Sets the lead_id for the user data. Lead ID is associated with a lead generated by Facebook's Lead Ads.
     * @param lead_id
     */
    set lead_id(lead_id: string) {
        this._server_user_data.lead_id = lead_id;
    }

    /**
     * Sets the lead_id for the user data. Lead ID is associated with a lead generated by Facebook's Lead Ads.
     * @param {String} lead_id
     */
    setLeadId(lead_id: string): UserData {
        this._server_user_data.lead_id = lead_id;
        return this;
    }

    /**
     * Gets the first 5 characters of the FirstName.
     */
    get f5first() {
        return Utils.constructResponse(this._server_user_data.f5first, null);
    }

    /**
     * Sets the Gets the first 5 characters of the FirstName.
     * @param f5first
     */
    set f5first(f5first: string) {
        this._server_user_data.f5first = f5first;
    }

    /**
     * Sets the first 5 characters of the FirstName.
     * @param {String} f5first
     */
    setF5First(f5first: string): UserData {
        this._server_user_data.f5first = f5first;
        return this;
    }

    /**
     * Gets the first 5 characters of the LastName.
     */
    get f5last() {
        return Utils.constructResponse(this._server_user_data.f5last, null);
    }

    /**
     * Sets the first 5 characters of the LastName.
     * @param f5last
     */
    set f5last(f5last: string) {
        this._server_user_data.f5last = f5last;
    }

    /**
     * Sets the first 5 characters of the LastName.
     * @param {String} f5last
     */
    setF5Last(f5last: string): UserData {
        this._server_user_data.f5last = f5last;
        return this;
    }

    /**
     * Gets the first Name Initial.
     */
    get fi() {
        return Utils.constructResponse(this._server_user_data.fi, null);
    }

    /**
     * Sets the first Name Initial.
     * @param fi
     */
    set fi(fi: string) {
        this._server_user_data.fi = fi;
    }

    /**
     * Sets the first Name Initial.
     * @param {String} fi
     */
    setFi(fi: string): UserData {
        this._server_user_data.fi = fi;
        return this;
    }

    /**
     * Gets the date of birth day.
     */
    get dobd() {
        return Utils.constructResponse(this._server_user_data.dobd, null);
    }

    /**
     * Sets the date of birth day.
     * @param dobd
     */
    set dobd(dobd: string) {
        this._server_user_data.dobd = dobd;
    }

    /**
     * Sets the date of birth day.
     * @param {String} dobd
     */
    setDobd(dobd: string): UserData {
        this._server_user_data.dobd = dobd;
        return this;
    }

    /**
     * Gets the date of birth month.
     */
    get dobm() {
        return Utils.constructResponse(this._server_user_data.dobm, null);
    }

    /**
     * Sets the date of birth month.
     * @param dobm
     */
    set dobm(dobm: string) {
        this._server_user_data.dobm = dobm;
    }

    /**
     * Sets the date of birth month.
     * @param {String} dobm
     */
    setDobm(dobm: string): UserData {
        this._server_user_data.dobm = dobm;
        return this;
    }

    /**
     * Gets the date of birth year.
     */
    get doby() {
        return Utils.constructResponse(this._server_user_data.doby, null);
    }

    /**
     * Sets the date of birth year.
     * @param {String} doby
     */
    set doby(doby: string) {
        this._server_user_data.doby = doby;
    }

    /**
     * Sets the date of birth year.
     * @param {String} doby
     */
    setDoby(doby: string): UserData {
        this._server_user_data.doby = doby;
        return this;
    }

    /**
     * Gets the address for the user data.
     * address is a physical address
     */
    get address(): string {
        return Utils.constructResponse(null, this._business_data_user_data.address);
    }

    /**
     * Sets the address for the user data.
     * @param address is a physical address
     */
    set address(address: string) {
        this._business_data_user_data.address = address;
    }

    /**
     * Sets the date of birth year.
     * @param {String} address
     */
    setAddress(address: string): UserData {
        this._business_data_user_data.address = address;
        return this;
    }

    /**
     * Gets the user_data for the Business Data API.
     */
    get business_data_user_data(): BusinessDataUserData {
        return this._business_data_user_data;
    }

    /**
     * Gets the user_data for the Conversion API.
     */
    get server_user_data(): ServerUserData {
        return this._server_user_data;
    }

}
