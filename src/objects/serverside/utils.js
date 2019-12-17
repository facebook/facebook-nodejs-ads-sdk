/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */


const PHONE_NUMBER_IGNORE_CHAR_SET = /[\-@#<>'",; ]|\(|\)|\+|[a-z]/g;
const PHONE_NUMBER_DROP_PREFIX_ZEROS = /^\+?0{0,2}/;
const US_PHONE_NUMBER_REGEX = /^1\(?\d{3}\)?\d{7}$/;
const INTL_PHONE_NUMBER_REGEX = /^\d{1,4}\(?\d{2,3}\)?\d{4,}$/;
const sha256 = require('js-sha256');

/**
 * ServerSideUtils contains the Utility modules used for sending Server Side Events
 */

export default class ServerSideUtils {

  /**
   * Normalizes and hashes the input given the field name.
   * @param  {String} [input] Value to be normalized. eg: `foo@bar.com` for email input.
   * @param  {String} [field] Key(Type) of Value to be normalized eg: 'em' for email field.
   * @return {String} Normalized and hashed value for the string.
   */
  static normalizeAndHash(input: ?string, field: ?string) {

    if (field == null || input == null) {
      return null;
    }

    let normalized_input = input.trim().toLowerCase();

    if (normalized_input.length == 0) {
      return null;
    }

    switch (field) {

      case 'country':
        normalized_input = ServerSideUtils.normalizeCountry(normalized_input);
        break;
      case 'ct':
        normalized_input = ServerSideUtils.normalizeCity(normalized_input);
        break;
      case 'em':
        normalized_input = ServerSideUtils.normalizeEmail(normalized_input);
        break;
      case 'ge':
        normalized_input = ServerSideUtils.normalizeGender(normalized_input);
        break;
      case 'ph':
        normalized_input = ServerSideUtils.normalizePhone(normalized_input);
        break;
      case 'st':
        normalized_input = ServerSideUtils.normalizeState(normalized_input);
        break;
      case 'zp':
        normalized_input = ServerSideUtils.normalizeZip(normalized_input);
        break;

    }

	  // Hashing the normalized input with SHA 256
    const hashed_input = ServerSideUtils.tosha256(normalized_input);
    return hashed_input;
  }

  /**
   * Normalizes the given country token and returns acceptable two letter ISO country code
   * @param  {String} [country] country value to be normalized.
   * @return {String} Normalized ISO country code.
   */
  static normalizeCountry(country: string) {

    // Retain only alpha characters bounded for ISO code.
    country = country.replace(/[^a-z]/g, '');

    if (country.length != 2) {
      throw new Error("Invalid format for country:'" + country + "'.Please follow ISO 3166-1 2-letter standard for representing country. eg: us");
    }

    return country;
  }

  /**
   * Normalizes the given city and returns acceptable city value
   * @param  {String} [city] city value to be normalized.
   * @return {String} Normalized city value.
   */
  static normalizeCity(city: string) {

    city = city.replace(/[0-9\s().-]/g, '');
    return city;
  }

  /**
   * Normalizes the given currency string and returns acceptable three letter  ISO code
   * @param  {String} [currency] country value to be normalized.
   * @return {String} Normalized ISO currency code.
   */
  static normalizeCurrency(currency: string) {

    // Retain only alpha characters bounded for ISO code.
    currency = currency.replace(/[^a-z]/g, '');

    if (currency.length != 3) {
      throw new Error("Invalid format for currency:'" + currency + "'.Please follow ISO 4217 3-letter standard for representing currency. Eg: usd");
    }

    return currency;
  }

  /**
   * Normalizes the given email to RFC 822 standard and returns acceptable email value
   * @param  {String} [email] email value to be normalized.
   * @return {String} Normalized email value.
   */
  static normalizeEmail(email: string) {

    // RFC 2822 REGEX approximation
    const EMAIL_RE = /^[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;

    if (!EMAIL_RE.test(email)) {
      throw new Error("Invalid email format for the passed email:'" + email + "'.Please check the passed email format.");
    }

    return email;
  }

  /**
   * Normalizes the given gender and returns acceptable('f' or 'm') gender value
   * @param  {String} [gender] gender value to be normalized.
   * @return {String} Normalized gender value.
   */
  static normalizeGender(gender: string) {

    gender = gender.replace(/[^a-z]/g, '');

    if (gender == 'female' || gender == 'f') {
      gender = 'f';
    } else if (gender == 'male' || gender == 'm') {
      gender = 'm';
    } else
      return null;

    return gender;
  }

  /**
   * Normalizes the given phone and returns acceptable phone value
   * @param  {String} [phone] phone number value to be normalized.
   * @return {String} Normalized phone number value.
   */
  static normalizePhone(phone_number: string) {

    // Remove common characters occuring as part of the phone numbers.
    phone_number = phone_number.replace(PHONE_NUMBER_IGNORE_CHAR_SET, '');

    if (ServerSideUtils.isInternationalPhoneNumber(phone_number)) {
      phone_number = phone_number.replace(PHONE_NUMBER_DROP_PREFIX_ZEROS, '');
    }

    if (phone_number.length < 7 || phone_number.length > 15) {
      throw new Error("Invalid phone number format for the passed phone number:'" + phone_number + "'.Please check the passed phone number format.");
    }

    return phone_number;
  }

  /**
   * Normalizes the given state and returns acceptable city value
   * @param  {String} [state] state value to be normalized.
   * @return {String} Normalized state value.
   */
  static normalizeState(state: string) {

    state = state.replace(/[0-9\s().-]/g, '');
    return state;
  }

  /**
   * Normalizes the given zip/postal code and returns acceptable zip code value
   * @param  {String} [zip] zip value to be normalized.
   * @return {String} Normalized zip code value.
   */
  static normalizeZip(zip: string) {
    zip = zip.replace(/[\s]/g, '');

    // If the zip code '-', we retain just the first part alone.
    zip = zip.split('-', 1)[0];

    if (zip.length < 2) {
      return null;
    }

    return zip;
  }

  /**
   * Boolean method which checks if a given number is represented in international format
   * @param  {String} phone_number that has to be tested.
   * @return {Boolean} value if a number is represented international format
   */
  static isInternationalPhoneNumber(phone_number: string) {

    // strip up to 2 leading 0s and +
    phone_number = phone_number.replace(PHONE_NUMBER_DROP_PREFIX_ZEROS, '');

    if (phone_number.startsWith('0')) {
      return false;
    }

    if (phone_number.startsWith('1')) {
      return US_PHONE_NUMBER_REGEX.test(phone_number);
    }

    return INTL_PHONE_NUMBER_REGEX.test(phone_number);
  }

  /**
   * Calculates the SHA 256 hash of a given non-null string.
   * @param  {String} [input] String to be hashed
   * @return {String} SHA 256 Hash of the string
   */
  static tosha256(input: ?string) {
    if (input === null)
      return input;

    return sha256(input);
  }
}
