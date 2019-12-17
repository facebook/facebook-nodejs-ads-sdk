/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import ServerSideUtils from './utils';
import Content from './content.js';

/**
 * CustomData represents the Custom Data Parameters of a Server Side Event Request. Use these parameters to send additional data we can use for ads delivery optimization.
 * @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#custom}
 */

export default class CustomData {

	_value: number;
	_currency: string;
	_content_name: string;
	_content_category: string;
	_content_ids: Array<string>;
	_contents: Array<Content>;
	_content_type: string;
	_order_id: string;
	_predicted_ltv: number;
	_num_items: number;
	_search_string: string;
	_status: string;

	/**
	 * @param {Number} value value of the item Eg: 123.45
	 * @param {String} currency currency involved in the transaction Eg: usd
	 * @param {String} content_name name of the Content Eg: lettuce
	 * @param {String} content_category category of the content Eg: grocery
	 * @param {Array} content_ids list of content unique ids involved in the event
	 * @param {Array} contents Array of Content Objects. Use {Content} class to define a content.
	 * @param {String} content_type Type of the Content group or Product SKU
	 * @param {String} order_id Unique id representing the order
	 * @param {Number} predicted_ltv Predicted LifeTime Value for the customer involved in the event
	 * @param {Number} num_items Number of items involved
	 * @param {String} search_string query string used for the Search event
	 * @param {String} status Status of the registration in Registration event
	 */
	constructor(value: number, currency: string, content_name: string, content_category: string, content_ids: Array<string>, contents: Array<Content>,
		content_type: string, order_id: string, predicted_ltv: number, num_items: number, search_string: string, status: string)  {

		this._value = value;
		this._currency = currency;
		this._content_name = content_name;
		this._content_category = content_category;
		this._content_ids = content_ids;
		this._contents = contents;
		this._content_type = content_type;
		this._order_id = order_id;
		this._predicted_ltv = predicted_ltv;
		this._num_items = num_items;
		this._search_string = search_string;
		this._status = status;
	}

	/**
	 * Gets the value of the custom data.
	 * A numeric value associated with this event. This could be a monetary value or a value in some other metric.
	 * Example: 142.54.
	 */
	get  value()  {
		return  this._value;
	}

	/**
	 * Sets the value of the custom data.
	 * @param value A numeric value associated with this event. This could be a monetary value or a value in some other metric.
	 * Example: 142.54.
	 */
	set value(value: number)  {
		this._value = value;
	}

	/**
	 * Sets the value of the custom data.
	 * @param {Number} value A numeric value associated with this event. This could be a monetary value or a value in some other metric.
	 * Example: 142.54.
	 */
	setValue(value: number) : CustomData {
		this._value = value;
		return this;
	}

	/**
	 * Gets the currency for the custom data.
	 * The currency for the value specified, if applicable. Currency must be a valid ISO 4217 three digit currency code.
	 * Example: 'usd'
	 */
	get currency()  {
		return  this._currency;
	}

	/**
	 * Sets the currency for the custom data.
	 * @param currency The currency for the value specified, if applicable. Currency must be a valid ISO 4217 three digit currency code.
	 * Example: 'usd'
	 */
	set currency(currency: string)  {
		this._currency = currency;
	}

	/**
	 * Sets the currency for the custom data.
	 * @param {String} currency The currency for the value specified, if applicable. Currency must be a valid ISO 4217 three digit currency code.
	 * Example: 'usd'
	 */
	setCurrency(currency: string) : CustomData {
		this._currency = currency;
		return this;
	}

	/**
	 * Gets the content name for the custom data. The name of the page or product associated with the event.
	 * The name of the page or product associated with the event.
	 * Example: 'lettuce'
	 */
	get content_name()  {
		return  this._content_name;
	}

	/**
	 * Sets the content name for the custom data.
	 * @param content_name The name of the page or product associated with the event.
	 * Example: 'lettuce'
	 */
	set content_name(content_name: string)  {
		this._content_name = content_name;
	}

	/**
	 * Sets the content name for the custom data.
	 * @param content_name The name of the page or product associated with the event.
	 * Example: 'lettuce'
	 */
	setContentName(content_name: string) : CustomData {
		this._content_name = content_name;
		return this;
	}

	/**
	 * Gets the content category for the custom data.
	 * The category of the content associated with the event.
	 * Example: 'grocery'
	 */
	get content_category()  {
		return  this._content_category;
	}

	/**
	 * Sets the content_category for the custom data.
	 * @param content_category The category of the content associated with the event.
	 * Example: 'grocery'
	 */
	set content_category(content_category: string)  {
		this._content_category = content_category;
	}

	/**
	 * Sets the content_category for the custom data.
	 * @param content_category The category of the content associated with the event.
	 * Example: 'grocery'
	 */
	setContentCategory(content_category: string) : CustomData {
		this._content_category = content_category;
		return this;
	}

	/**
	 * Gets the content_ids for the custom data.
	 * The content IDs associated with the event, such as product SKUs for items in an AddToCart, represented as Array of string.
	 * If content_type is a product, then your content IDs must be an array with a single string value. Otherwise, this array can contain any number of string values.
	 * Example: ['ABC123', 'XYZ789']
	 */
	get content_ids()  {
		return  this._content_ids;
	}

	/**
	 * Sets the content_ids for the custom data.
	 * @param content_ids The content IDs associated with the event, such as product SKUs for items in an AddToCart, represented as Array of string.
	 * If content_type is a product, then your content IDs must be an array with a single string value. Otherwise, this array can contain any number of string values.
	 * Example: ['ABC123', 'XYZ789']
	 */
	set content_ids(content_ids: Array<string>)  {
		this._content_ids = content_ids;
	}

	/**
	 * Sets the content_ids for the custom data.
	 * @param {Array} content_ids The content IDs associated with the event, such as product SKUs for items in an AddToCart, represented as Array of string.
	 * If content_type is a product, then your content IDs must be an array with a single string value. Otherwise, this array can contain any number of string values.
	 * Example: ['ABC123', 'XYZ789']
	 */
	setContentIds(content_ids: Array<string>) : CustomData {
		this._content_ids = content_ids;
		return this;
	}

	/**
	 * Gets the contents for the custom data.
	 * An array of Content objects that contain the product IDs associated with the event plus information about the products. id, quantity, and item_price are available fields.
	 * Example: [{'id':'ABC123','quantity' :2,'item_price':5.99}, {'id':'XYZ789','quantity':2, 'item_price':9.99}]
	 */
	get contents()  {
		return  this._contents;
	}

	/**
	 * Sets the contents for the custom data.
	 * @param contents An array of Content objects that contain the product IDs associated with the event plus information about the products. id, quantity, and item_price are available fields.
	 * Example: [{'id':'ABC123','quantity' :2,'item_price':5.99}, {'id':'XYZ789','quantity':2, 'item_price':9.99}]
	 */
	set contents(contents: Array<Content>)  {
		this._contents = contents;
	}

	/**
	 * Sets the contents for the custom data.
	 * @param {Array} contents An array of Content objects that contain the product IDs associated with the event plus information about the products. id, quantity, and item_price are available fields.
	 * Example: [{'id':'ABC123','quantity' :2,'item_price':5.99}, {'id':'XYZ789','quantity':2, 'item_price':9.99}]
	 */
	setContents(contents: Array<Content>) : CustomData {
		this._contents = contents;
		return this;
	}

	/**
	 * Gets the content type for the custom data.
	 * A String equal to either product or product_group. Set to product if the keys you send content_ids or contents represent products.
	 * Set to product_group if the keys you send in content_ids represent product groups.
	 */
	get content_type()  {
		return  this._content_type;
	}

	/**
	 * Sets the content type for the custom data.
	 * A String equal to either product or product_group. Set to product if the keys you send content_ids or contents represent products.
	 * Set to product_group if the keys you send in content_ids represent product groups.
	 */
	set content_type(content_type: string)  {
		this._content_type = content_type;
	}

	/**
	 * Sets the content type for the custom data.
	 * @param {String} content_type A string equal to either product or product_group. Set to product if the keys you send content_ids or contents represent products.
	 * Set to product_group if the keys you send in content_ids represent product groups.
	 */
	setContentType(content_type: string) : CustomData {
		this._content_type = content_type;
		return this;
	}

	/**
	 * Gets the order id for the custom data.
	 * order_id is the order ID for this transaction as a String.
	 * Example: 'order1234'
	 */
	get order_id()  {
		return  this._order_id;
	}

	/**
	 * Sets the order_id for the custom data.
	 * @param order_id The order ID for this transaction as a String.
	 * Example: 'order1234'
	 */
	set order_id(order_id: string)  {
		this._order_id = order_id;
	}

	/**
	 * Sets the order_id for the custom data.
	 * @param {String} order_id The order ID for this transaction as a String.
	 * Example: 'order1234'
	 */
	setOrderId(order_id: string) : CustomData {
		this._order_id = order_id;
		return this;
	}

	/**
	 * Gets the predicted LifeTimeValue for the (user) in custom data.
	 * The predicted lifetime value of a conversion event, as a String.
	 * Example: '432.12'
	 */
	get predicted_ltv()  {
		return  this._predicted_ltv;
	}

	/**
	 * Sets the predicted LifeTimeValue for the custom data.
	 * @param predicted_ltv The predicted lifetime value of a conversion event, as a String.
	 * Example: '432.12'
	 */
	set predicted_ltv(predicted_ltv: number)  {
		this._predicted_ltv = predicted_ltv;
	}

	/**
	 * Sets the predicted LifeTimeValue for the custom data.
	 * @param {Number} predicted_ltv The predicted lifetime value of a conversion event, as a String.
	 * Example: '432.12'
	 */
	setPredictedLtv(predicted_ltv: number) : CustomData {
		this._predicted_ltv = predicted_ltv;
		return this;
	}

	/**
	 * Gets the number of items for the custom data.
	 * The number of items that a user tries to buy during checkout. Use only with InitiateCheckout type events.
	 * Example: 5
	 */
	get num_items()  {
		return  this._num_items;
	}

	/**
	 * Sets the number of items for the custom data.
	 * @param num_items The number of items that a user tries to buy during checkout. Use only with InitiateCheckout type events.
	 * Example: 5
	 */
	set num_items(num_items: number)  {
		this._num_items = num_items;
	}

	/**
	 * Sets the number of items for the custom data.
	 * @param {Number} num_items The number of items that a user tries to buy during checkout. Use only with InitiateCheckout type events.
	 * Example: 5
	 */
	setNumItems(num_items: number) : CustomData {
		this._num_items = num_items;
		return this;
	}

	/**
	 * Gets the search string for the custom data.
	 * A search query made by a user.Use only with Search events.
	 * Eg: 'lettuce'
	 */
	get search_string()  {
		return  this._search_string;
	}

	/**
	 * Sets the search string for the custom data.
	 * @param {Number} search_string A search query made by a user.Use only with Search events.
	 * Eg: 'lettuce'
	 */
	set search_string(search_string: string)  {
		this._search_string = search_string;
	}

	/**
	 * Sets the search string for the custom data.
	 * @param search_string A search query made by a user.Use only with Search events.
	 * Eg: 'lettuce'
	 */
	setSearchString(search_string: string) : CustomData {
		this._search_string = search_string;
		return this;
	}


	/**
	 * Gets the status of the registration event.
	 * Status of the registration event, as a String.Use only with CompleteRegistration events.
	 */
	get status()  {
		return  this._status;
	}

	/**
	 * Sets the status of the registration event.
	 * @param status Status of the registration event, as a String.Use only with CompleteRegistration events.
	 */
	set status(status: string)  {
		this._status = status;
	}

	/**
	 * Sets the status of the registration event.
	 * @param {String} status Status of the registration event, as a String. Use only with CompleteRegistration events.
	 */
	setStatus(status: string) : CustomData {
		this._status = status;
		return this;
	}

	/**
	 * Returns the normalized payload for the custom_data.
	 * @returns {Object} normalized custom_data payload.
	 */
	normalize(): Object {
		const customData = {};

		if (this.value) {
			customData['value'] = this.value;
		}

		if (this.currency) {
			customData['currency'] = ServerSideUtils.normalizeCurrency(this.currency);
		}

		if (this.content_name) {
			customData['content_name'] = this.content_name;
		}

		if (this.content_category) {
			customData['content_category'] = this.content_category;
		}


		if (this.content_ids) {
			customData['content_ids'] = this.content_ids;
		}

		if (this.contents) {
			let normalized_contents = [];

			for (let i = 0; i < this.contents.length; i++) {
				const content = this.contents[i];
				const normalized_content = content.normalize.call(content);
				normalized_contents.push(normalized_content);
			}

			customData['contents'] = normalized_contents;
		}

		if (this.content_type) {
			customData['content_type'] = this.content_type;
		}

		if (this.order_id) {
			customData['order_id'] = this.order_id;
		}

		if (this.predicted_ltv) {
			customData['predicted_ltv'] = this.predicted_ltv;
		}

		if (this.num_items) {
			customData['num_items'] = this.num_items;
		}

		if (this.search_string) {
			customData['search_string'] = this.search_string;
		}

		if (this.status) {
			customData['status'] = this.status;
		}

		return customData;
	}
}
