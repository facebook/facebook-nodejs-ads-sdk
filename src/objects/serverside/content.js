/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

/**
 * Content is part of the Custom Data Parameters of a Server Side Event Request. Content can be used to set the item/product details added in the Custom Data.
 * @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api/parameters#custom}
 */

export default class Content {

	_id: string;
	_quantity: number;
	_item_price: number;

	/**
	 * @param {String} id Product Id of the Item.
	 * @param {Number} quantity Quantity of the Item.
	 * @param {Number} item_price Price per unit of the content/product.
	 */
	constructor(id: string, quantity: number, item_price: number)  {

		this._id = id;
		this._quantity = quantity;
		this._item_price = item_price;
	}

	/**
	 * Gets the Product Id of the Item.
	 * A string representing the unique Id for the product.
	 * Example: XYZ.
	 */
	get  id()  {
		return  this._id;
	}

	/**
	 * Sets the Product Id of the Item.
	 * @param id A string representing the unique Id for the product.
	 * Example: XYZ.
	 */
	set id(id: string)  {
		this._id = id;
	}

    /**
	 * Sets the Product Id of the Item.
	 * @param id is a string representing the unique id for the product.
	 * Example: XYZ.
	 */
	setId(id: string) : Content {
		this._id = id;
        return this;
	}

	/**
	 * Gets the quantity of the Item.
	 * The number/quantity of the content that is being involved in the customer interaction.
	 * Example: 5
	 */
	get quantity()  {
		return  this._quantity;
	}

	/**
	 * Sets the quantity of the Item.
	 * @param quantity The number/quantity of the product that is being involved in the customer interaction.
	 * Example: 5
	 */
	set quantity(quantity: number)  {
		this._quantity = quantity;
	}

    /**
	 * Sets the quantity of the Content/Item.
	 * @param {Number} quantity The number/quantity of the product that is being involved in the customer interaction.
	 * Example: 5
	 */
	setQuantity(quantity: number) : Content  {
		this._quantity = quantity;
        return this;
	}

	/**
	 * Gets the item price for the Product.
	 * The item_price or price per unit of the product.
	 * Example: '123.45'
	 */
	get item_price()  {
		return  this._item_price;
	}

	/**
	 * Sets the item price for the Content.
	 * @param item_price The item_price or price per unit of the product.
	 * Example: '123.45'
	 */
	set item_price(item_price: number)  {
		this._item_price = item_price;
	}

    /**
	 * Sets the item price for the Content.
	 * @param {Number} item_price The item_price or price per unit of the product.
	 * Example: '123.45'
	 */
	setItemPrice(item_price: number) : Content {
		this._item_price = item_price;
        return this;
	}

	/**
	 * Returns the normalized payload for the Content.
	 * @returns {Object} normalized Content payload.
	 */
	normalize(): Object {
		const content = {};

		if (this.id) {
			content['id'] = this.id;
		}

		if (this.quantity) {
			content['quantity'] = this.quantity;
		}

		if (this.item_price) {
			content['item_price'] = this.item_price;
		}

		return content;
	}
}
