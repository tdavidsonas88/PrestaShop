window["order_create"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 375);
/******/ })
/************************************************************************/
/******/ ({

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTICE OF LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This source file is subject to the Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * that is bundled with this package in the file LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * It is also available through the world-wide-web at this URL:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://opensource.org/licenses/OSL-3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * If you did not receive a copy of the license and are unable to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * obtain it through the world-wide-web, please send an email
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to license@prestashop.com so we can send you a copy immediately.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DISCLAIMER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * versions in the future. If you wish to customize PrestaShop for your
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * needs please refer to https://www.prestashop.com for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    PrestaShop SA <contact@prestashop.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * International Registered Trademark & Property of PrestaShop SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _createOrderMap = __webpack_require__(34);

var _createOrderMap2 = _interopRequireDefault(_createOrderMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Renders cart rules (cartRules) block
 */

var CartRulesRenderer = function () {
  function CartRulesRenderer() {
    _classCallCheck(this, CartRulesRenderer);

    this.$cartRulesBlock = $(_createOrderMap2.default.cartRulesBlock);
    this.$cartRulesTable = $(_createOrderMap2.default.cartRulesTable);
    this.$searchResultBox = $(_createOrderMap2.default.cartRulesSearchResultBox);
  }

  /**
   * Responsible for rendering cartRules (a.k.a cart rules/discounts) block
   *
   * @param {Array} cartRules
   * @param {Boolean} emptyCart
   */


  _createClass(CartRulesRenderer, [{
    key: 'renderCartRulesBlock',
    value: function renderCartRulesBlock(cartRules, emptyCart) {
      this._hideErrorBlock();
      // do not render cart rules block at all if cart has no products
      if (emptyCart) {
        this._hideCartRulesBlock();
        return;
      }
      this._showCartRulesBlock();

      // do not render cart rules list when there are no cart rules
      if (cartRules.length === 0) {
        this._hideCartRulesList();

        return;
      }

      this._renderList(cartRules);
    }

    /**
     * Responsible for rendering search results dropdown
     *
     * @param searchResults
     */

  }, {
    key: 'renderSearchResults',
    value: function renderSearchResults(searchResults) {
      this._clearSearchResults();

      if (searchResults.cart_rules.length === 0) {
        this._renderNotFound();
      } else {
        this._renderFoundCartRules(searchResults.cart_rules);
      }

      this._showResultsDropdown();
    }

    /**
     * Displays error message bellow search input
     *
     * @param message
     */

  }, {
    key: 'displayErrorMessage',
    value: function displayErrorMessage(message) {
      $(_createOrderMap2.default.cartRuleErrorText).text(message);
      this._showErrorBlock();
    }

    /**
     * Hides cart rules search result dropdown
     */

  }, {
    key: 'hideResultsDropdown',
    value: function hideResultsDropdown() {
      this.$searchResultBox.addClass('d-none');
    }

    /**
     * Displays cart rules search result dropdown
     *
     * @private
     */

  }, {
    key: '_showResultsDropdown',
    value: function _showResultsDropdown() {
      this.$searchResultBox.removeClass('d-none');
    }

    /**
     * Renders warning that no cart rule was found
     *
     * @private
     */

  }, {
    key: '_renderNotFound',
    value: function _renderNotFound() {
      var $template = $($(_createOrderMap2.default.cartRulesNotFoundTemplate).html()).clone();
      this.$searchResultBox.html($template);
    }

    /**
     * Empties cart rule search results block
     *
     * @private
     */

  }, {
    key: '_clearSearchResults',
    value: function _clearSearchResults() {
      this.$searchResultBox.empty();
    }

    /**
     * Renders found cart rules after search
     *
     * @param cartRules
     *
     * @private
     */

  }, {
    key: '_renderFoundCartRules',
    value: function _renderFoundCartRules(cartRules) {
      var $cartRuleTemplate = $($(_createOrderMap2.default.foundCartRuleTemplate).html());
      for (var key in cartRules) {
        var $template = $cartRuleTemplate.clone();
        var cartRule = cartRules[key];

        var cartRuleName = cartRule.name;
        if (cartRule.code !== '') {
          cartRuleName = cartRule.name + ' - ' + cartRule.code;
        }

        $template.text(cartRuleName);
        $template.data('cart-rule-id', cartRule.cartRuleId);
        this.$searchResultBox.append($template);
      }
    }

    /**
     * Responsible for rendering the list of cart rules
     *
     * @param {Array} cartRules
     *
     * @private
     */

  }, {
    key: '_renderList',
    value: function _renderList(cartRules) {
      this._cleanCartRulesList();
      var $cartRulesTableRowTemplate = $($(_createOrderMap2.default.cartRulesTableRowTemplate).html());

      for (var key in cartRules) {
        var cartRule = cartRules[key];
        var $template = $cartRulesTableRowTemplate.clone();

        $template.find(_createOrderMap2.default.cartRuleNameField).text(cartRule.name);
        $template.find(_createOrderMap2.default.cartRuleDescriptionField).text(cartRule.description);
        $template.find(_createOrderMap2.default.cartRuleValueField).text(cartRule.value);
        $template.find(_createOrderMap2.default.cartRuleDeleteBtn).data('cart-rule-id', cartRule.cartRuleId);

        this.$cartRulesTable.find('tbody').append($template);
      }

      this._showCartRulesList();
    }

    /**
     * Shows error block
     *
     * @private
     */

  }, {
    key: '_showErrorBlock',
    value: function _showErrorBlock() {
      $(_createOrderMap2.default.cartRuleErrorBlock).removeClass('d-none');
    }

    /**
     * Hides error block
     *
     * @private
     */

  }, {
    key: '_hideErrorBlock',
    value: function _hideErrorBlock() {
      $(_createOrderMap2.default.cartRuleErrorBlock).addClass('d-none');
    }

    /**
     * Shows cartRules block
     *
     * @private
     */

  }, {
    key: '_showCartRulesBlock',
    value: function _showCartRulesBlock() {
      this.$cartRulesBlock.removeClass('d-none');
    }

    /**
     * hide cartRules block
     *
     * @private
     */

  }, {
    key: '_hideCartRulesBlock',
    value: function _hideCartRulesBlock() {
      this.$cartRulesBlock.addClass('d-none');
    }

    /**
     * Display the list block of cart rules
     *
     * @private
     */

  }, {
    key: '_showCartRulesList',
    value: function _showCartRulesList() {
      this.$cartRulesTable.removeClass('d-none');
    }

    /**
     * Hide list block of cart rules
     *
     * @private
     */

  }, {
    key: '_hideCartRulesList',
    value: function _hideCartRulesList() {
      this.$cartRulesTable.addClass('d-none');
    }

    /**
     * remove items in cart rules list
     *
     * @private
     */

  }, {
    key: '_cleanCartRulesList',
    value: function _cleanCartRulesList() {
      this.$cartRulesTable.find('tbody').empty();
    }
  }]);

  return CartRulesRenderer;
}();

exports.default = CartRulesRenderer;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTICE OF LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This source file is subject to the Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * that is bundled with this package in the file LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * It is also available through the world-wide-web at this URL:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://opensource.org/licenses/OSL-3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * If you did not receive a copy of the license and are unable to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * obtain it through the world-wide-web, please send an email
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to license@prestashop.com so we can send you a copy immediately.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DISCLAIMER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * versions in the future. If you wish to customize PrestaShop for your
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * needs please refer to https://www.prestashop.com for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    PrestaShop SA <contact@prestashop.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * International Registered Trademark & Property of PrestaShop SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _createOrderMap = __webpack_require__(34);

var _createOrderMap2 = _interopRequireDefault(_createOrderMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

var ProductRenderer = function () {
  function ProductRenderer() {
    _classCallCheck(this, ProductRenderer);

    this.$productsTable = $(_createOrderMap2.default.productsTable);
  }

  /**
   * Renders cart products list
   *
   * @param products
   */


  _createClass(ProductRenderer, [{
    key: 'renderList',
    value: function renderList(products) {
      this._cleanProductsList();

      if (products.length === 0) {
        this._hideProductsList();

        return;
      }

      var $productsTableRowTemplate = $($(_createOrderMap2.default.productsTableRowTemplate).html());

      for (var key in products) {
        var product = products[key];
        var $template = $productsTableRowTemplate.clone();

        $template.find(_createOrderMap2.default.productImageField).text(product.imageLink);
        $template.find(_createOrderMap2.default.productNameField).text(product.name);
        $template.find(_createOrderMap2.default.productAttrField).text(product.attribute);
        $template.find(_createOrderMap2.default.productReferenceField).text(product.reference);
        $template.find(_createOrderMap2.default.productUnitPriceInput).text(product.unitPrice);
        $template.find(_createOrderMap2.default.productTotalPriceField).text(product.price);
        $template.find(_createOrderMap2.default.productRemoveBtn).data('product-id', product.productId);
        $template.find(_createOrderMap2.default.productRemoveBtn).data('attribute-id', product.attributeId);
        $template.find(_createOrderMap2.default.productRemoveBtn).data('customization-id', product.customizationId);

        this.$productsTable.find('tbody').append($template);
      }

      this._showTaxWarning();
      this._showProductsList();
    }

    /**
     * Renders cart products search results block
     *
     * @param foundProducts
     */

  }, {
    key: 'renderSearchResults',
    value: function renderSearchResults(foundProducts) {
      this._cleanSearchResults();
      if (foundProducts.length === 0) {
        this._showNotFound();
        this._hideTaxWarning();

        return;
      }

      this._renderFoundProducts(foundProducts);

      this._hideNotFound();
      this._showTaxWarning();
      this._showResultBlock();
    }

    /**
     * Renders available fields related to selected product
     *
     * @param product
     */

  }, {
    key: 'renderProductMetadata',
    value: function renderProductMetadata(product) {
      this.renderStock(product.stock);
      this._renderCombinations(product.combinations);
      this._renderCustomizations(product.customization_fields);
    }

    /**
     * Updates stock text helper value
     *
     * @param stock
     */

  }, {
    key: 'renderStock',
    value: function renderStock(stock) {
      $(_createOrderMap2.default.inStockCounter).text(stock);
      $(_createOrderMap2.default.quantityInput).attr('max', stock);
    }

    /**
     * Renders found products select
     *
     * @param foundProducts
     *
     * @private
     */

  }, {
    key: '_renderFoundProducts',
    value: function _renderFoundProducts(foundProducts) {
      for (var key in foundProducts) {
        var product = foundProducts[key];

        var name = product.name;
        if (product.combinations.length === 0) {
          name += ' - ' + product.formatted_price;
        }

        $(_createOrderMap2.default.productSelect).append('<option value="' + product.product_id + '">' + name + '</option>');
      }
    }

    /**
     * Cleans product search result fields
     *
     * @private
     */

  }, {
    key: '_cleanSearchResults',
    value: function _cleanSearchResults() {
      $(_createOrderMap2.default.productSelect).empty();
      $(_createOrderMap2.default.combinationsSelect).empty();
      $(_createOrderMap2.default.quantityInput).empty();
    }

    /**
     * Renders combinations row with select options
     *
     * @param {Array} combinations
     *
     * @private
     */

  }, {
    key: '_renderCombinations',
    value: function _renderCombinations(combinations) {
      this._cleanCombinations();

      if (combinations.length === 0) {
        this._hideCombinations();

        return;
      }

      for (var key in combinations) {
        var combination = combinations[key];

        $(_createOrderMap2.default.combinationsSelect).append('<option\n          value="' + combination.attribute_combination_id + '">\n          ' + combination.attribute + ' - ' + combination.formatted_price + '\n        </option>');
      }

      this._showCombinations();
    }

    /**
     * Resolves weather to add customization fields to result block and adds them if needed
     *
     * @param customizationFields
     *
     * @private
     */

  }, {
    key: '_renderCustomizations',
    value: function _renderCustomizations(customizationFields) {
      var _templateTypeMap;

      // represents customization field type "file".
      var fieldTypeFile = 0;
      // represents customization field type "text".
      var fieldTypeText = 1;

      this._cleanCustomizations();
      if (customizationFields.length === 0) {
        this._hideCustomizations();

        return;
      }

      var $customFieldsContainer = $(_createOrderMap2.default.productCustomFieldsContainer);
      var $fileInputTemplate = $($(_createOrderMap2.default.productCustomFileTemplate).html());
      var $textInputTemplate = $($(_createOrderMap2.default.productCustomTextTemplate).html());

      var templateTypeMap = (_templateTypeMap = {}, _defineProperty(_templateTypeMap, fieldTypeFile, $fileInputTemplate), _defineProperty(_templateTypeMap, fieldTypeText, $textInputTemplate), _templateTypeMap);

      for (var key in customizationFields) {
        var customField = customizationFields[key];
        var $template = templateTypeMap[customField.type].clone();

        $template.find(_createOrderMap2.default.productCustomInput).attr('name', 'customizations[' + customField.customization_field_id + ']');
        $template.find(_createOrderMap2.default.productCustomInputLabel).attr('for', 'customizations[' + customField.customization_field_id + ']').text(customField.name);

        $customFieldsContainer.append($template);
      }

      this._showCustomizations();
    }

    /**
     * Shows product customization container
     *
     * @private
     */

  }, {
    key: '_showCustomizations',
    value: function _showCustomizations() {
      $(_createOrderMap2.default.productCustomizationContainer).removeClass('d-none');
    }

    /**
     * Hides product customization container
     *
     * @private
     */

  }, {
    key: '_hideCustomizations',
    value: function _hideCustomizations() {
      $(_createOrderMap2.default.productCustomizationContainer).addClass('d-none');
    }

    /**
     * Empties customization fields container
     *
     * @private
     */

  }, {
    key: '_cleanCustomizations',
    value: function _cleanCustomizations() {
      $(_createOrderMap2.default.productCustomFieldsContainer).empty();
    }

    /**
     * Shows result block
     *
     * @private
     */

  }, {
    key: '_showResultBlock',
    value: function _showResultBlock() {
      $(_createOrderMap2.default.productResultBlock).removeClass('d-none');
    }

    /**
     * Hides result block
     *
     * @private
     */

  }, {
    key: '_hideResultBlock',
    value: function _hideResultBlock() {
      $(_createOrderMap2.default.productResultBlock).addClass('d-none');
    }

    /**
     * Shows products list
     *
     * @private
     */

  }, {
    key: '_showProductsList',
    value: function _showProductsList() {
      this.$productsTable.removeClass('d-none');
    }

    /**
     * Hides products list
     *
     * @private
     */

  }, {
    key: '_hideProductsList',
    value: function _hideProductsList() {
      this.$productsTable.addClass('d-none');
    }

    /**
     * Empties products list
     *
     * @private
     */

  }, {
    key: '_cleanProductsList',
    value: function _cleanProductsList() {
      this.$productsTable.find('tbody').empty();
    }

    /**
     * Empties combinations select
     *
     * @private
     */

  }, {
    key: '_cleanCombinations',
    value: function _cleanCombinations() {
      $(_createOrderMap2.default.combinationsSelect).empty();
    }

    /**
     * Shows combinations row
     *
     * @private
     */

  }, {
    key: '_showCombinations',
    value: function _showCombinations() {
      $(_createOrderMap2.default.combinationsRow).removeClass('d-none');
    }

    /**
     * Hides combinations row
     *
     * @private
     */

  }, {
    key: '_hideCombinations',
    value: function _hideCombinations() {
      $(_createOrderMap2.default.combinationsRow).addClass('d-none');
    }

    /**
     * Shows warning of tax included/excluded
     *
     * @private
     */

  }, {
    key: '_showTaxWarning',
    value: function _showTaxWarning() {
      $(_createOrderMap2.default.productTaxWarning).removeClass('d-none');
    }

    /**
     * Hides warning of tax included/excluded
     *
     * @private
     */

  }, {
    key: '_hideTaxWarning',
    value: function _hideTaxWarning() {
      $(_createOrderMap2.default.productTaxWarning).addClass('d-none');
    }

    /**
     * Shows product not found warning
     *
     * @private
     */

  }, {
    key: '_showNotFound',
    value: function _showNotFound() {
      $(_createOrderMap2.default.noProductsFoundWarning).removeClass('d-none');
    }

    /**
     * Hides product not found warning
     *
     * @private
     */

  }, {
    key: '_hideNotFound',
    value: function _hideNotFound() {
      $(_createOrderMap2.default.noProductsFoundWarning).addClass('d-none');
    }
  }]);

  return ProductRenderer;
}();

exports.default = ProductRenderer;

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventEmitter = undefined;

var _events = __webpack_require__(18);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * We instanciate one EventEmitter (restricted via a const) so that every components
 * register/dispatch on the same one and can communicate with each other.
 */
var EventEmitter = exports.EventEmitter = new _events2.default(); /**
                                                                   * 2007-2019 PrestaShop SA and Contributors
                                                                   *
                                                                   * NOTICE OF LICENSE
                                                                   *
                                                                   * This source file is subject to the Open Software License (OSL 3.0)
                                                                   * that is bundled with this package in the file LICENSE.txt.
                                                                   * It is also available through the world-wide-web at this URL:
                                                                   * https://opensource.org/licenses/OSL-3.0
                                                                   * If you did not receive a copy of the license and are unable to
                                                                   * obtain it through the world-wide-web, please send an email
                                                                   * to license@prestashop.com so we can send you a copy immediately.
                                                                   *
                                                                   * DISCLAIMER
                                                                   *
                                                                   * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                                                                   * versions in the future. If you wish to customize PrestaShop for your
                                                                   * needs please refer to https://www.prestashop.com for more information.
                                                                   *
                                                                   * @author    PrestaShop SA <contact@prestashop.com>
                                                                   * @copyright 2007-2019 PrestaShop SA and Contributors
                                                                   * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                                                                   * International Registered Trademark & Property of PrestaShop SA
                                                                   */

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTICE OF LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This source file is subject to the Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * that is bundled with this package in the file LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * It is also available through the world-wide-web at this URL:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://opensource.org/licenses/OSL-3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * If you did not receive a copy of the license and are unable to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * obtain it through the world-wide-web, please send an email
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to license@prestashop.com so we can send you a copy immediately.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DISCLAIMER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * versions in the future. If you wish to customize PrestaShop for your
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * needs please refer to https://www.prestashop.com for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    PrestaShop SA <contact@prestashop.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * International Registered Trademark & Property of PrestaShop SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _createOrderMap = __webpack_require__(34);

var _createOrderMap2 = _interopRequireDefault(_createOrderMap);

var _customerManager = __webpack_require__(379);

var _customerManager2 = _interopRequireDefault(_customerManager);

var _shippingRenderer = __webpack_require__(382);

var _shippingRenderer2 = _interopRequireDefault(_shippingRenderer);

var _cartProvider = __webpack_require__(377);

var _cartProvider2 = _interopRequireDefault(_cartProvider);

var _addressesRenderer = __webpack_require__(376);

var _addressesRenderer2 = _interopRequireDefault(_addressesRenderer);

var _cartRulesRenderer = __webpack_require__(102);

var _cartRulesRenderer2 = _interopRequireDefault(_cartRulesRenderer);

var _router = __webpack_require__(35);

var _router2 = _interopRequireDefault(_router);

var _eventEmitter = __webpack_require__(17);

var _cartEditor = __webpack_require__(74);

var _cartEditor2 = _interopRequireDefault(_cartEditor);

var _eventMap = __webpack_require__(51);

var _eventMap2 = _interopRequireDefault(_eventMap);

var _cartRuleManager = __webpack_require__(378);

var _cartRuleManager2 = _interopRequireDefault(_cartRuleManager);

var _productManager = __webpack_require__(381);

var _productManager2 = _interopRequireDefault(_productManager);

var _productRenderer = __webpack_require__(103);

var _productRenderer2 = _interopRequireDefault(_productRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Page Object for "Create order" page
 */

var CreateOrderPage = function () {
  function CreateOrderPage() {
    _classCallCheck(this, CreateOrderPage);

    this.cartId = null;
    this.$container = $(_createOrderMap2.default.orderCreationContainer);

    this.cartProvider = new _cartProvider2.default();
    this.customerManager = new _customerManager2.default();
    this.shippingRenderer = new _shippingRenderer2.default();
    this.addressesRenderer = new _addressesRenderer2.default();
    this.cartRulesRenderer = new _cartRulesRenderer2.default();
    this.router = new _router2.default();
    this.cartEditor = new _cartEditor2.default();
    this.cartRuleManager = new _cartRuleManager2.default();
    this.productManager = new _productManager2.default();
    this.productRenderer = new _productRenderer2.default();

    this._initListeners();
  }

  /**
   * Initializes event listeners
   *
   * @private
   */


  _createClass(CreateOrderPage, [{
    key: '_initListeners',
    value: function _initListeners() {
      var _this = this;

      this.$container.on('input', _createOrderMap2.default.customerSearchInput, function (e) {
        return _this._initCustomerSearch(e);
      });
      this.$container.on('click', _createOrderMap2.default.chooseCustomerBtn, function (e) {
        return _this._initCustomerSelect(e);
      });
      this.$container.on('click', _createOrderMap2.default.useCartBtn, function (e) {
        return _this._initCartSelect(e);
      });
      this.$container.on('click', _createOrderMap2.default.useOrderBtn, function (e) {
        return _this._initDuplicateOrderCart(e);
      });
      this.$container.on('input', _createOrderMap2.default.productSearch, function (e) {
        return _this._initProductSearch(e);
      });
      this.$container.on('input', _createOrderMap2.default.cartRuleSearchInput, function (e) {
        return _this._initCartRuleSearch(e);
      });
      this.$container.on('blur', _createOrderMap2.default.cartRuleSearchInput, function () {
        return _this.cartRuleManager.stopSearching();
      });
      this._initCartEditing();
      this._onCartLoaded();
      this._onCartAddressesChanged();
    }

    /**
     * Delegates actions to events associated with cart update (e.g. change cart address)
     *
     * @private
     */

  }, {
    key: '_initCartEditing',
    value: function _initCartEditing() {
      var _this2 = this;

      this.$container.on('change', _createOrderMap2.default.deliveryOptionSelect, function (e) {
        return _this2.cartEditor.changeDeliveryOption(_this2.cartId, e.currentTarget.value);
      });

      this.$container.on('change', _createOrderMap2.default.freeShippingSwitch, function (e) {
        return _this2.cartEditor.setFreeShipping(_this2.cartId, e.currentTarget.value);
      });

      this.$container.on('click', _createOrderMap2.default.addToCartButton, function () {
        return _this2.productManager.addProductToCart(_this2.cartId);
      });

      this.$container.on('change', _createOrderMap2.default.addressSelect, function () {
        return _this2._changeCartAddresses();
      });
      this.$container.on('click', _createOrderMap2.default.productRemoveBtn, function (e) {
        return _this2._initProductRemoveFromCart(e);
      });

      this._addCartRuleToCart();
      this._removeCartRuleFromCart();
    }

    /**
     * Listens for event when cart is loaded
     *
     * @private
     */

  }, {
    key: '_onCartLoaded',
    value: function _onCartLoaded() {
      var _this3 = this;

      _eventEmitter.EventEmitter.on(_eventMap2.default.cartLoaded, function (cartInfo) {
        _this3.cartId = cartInfo.cartId;
        _this3._renderCartInfo(cartInfo);
        _this3.customerManager.loadCustomerCarts(_this3.cartId);
        _this3.customerManager.loadCustomerOrders();
      });
    }

    /**
     * Listens for cart addresses update event
     *
     * @private
     */

  }, {
    key: '_onCartAddressesChanged',
    value: function _onCartAddressesChanged() {
      var _this4 = this;

      _eventEmitter.EventEmitter.on(_eventMap2.default.cartAddressesChanged, function (cartInfo) {
        _this4.addressesRenderer.render(cartInfo.addresses);
        _this4.shippingRenderer.render(cartInfo.shipping, cartInfo.products.length === 0);
      });
    }

    /**
     * Listens for cart delivery option update event
     *
     * @private
     */

  }, {
    key: '_onDeliveryOptionChanged',
    value: function _onDeliveryOptionChanged() {
      var _this5 = this;

      _eventEmitter.EventEmitter.on(_eventMap2.default.cartDeliveryOptionChanged, function (cartInfo) {
        _this5.shippingRenderer.render(cartInfo.shipping, cartInfo.products.length === 0);
      });
    }

    /**
     * Listens for cart free shipping update event
     *
     * @private
     */

  }, {
    key: '_onFreeShippingChanged',
    value: function _onFreeShippingChanged() {
      var _this6 = this;

      _eventEmitter.EventEmitter.on(_eventMap2.default.cartFreeShippingSet, function (cartInfo) {
        _this6.shippingRenderer.render(cartInfo.shipping, cartInfo.products.length === 0);
      });
    }

    /**
     * Init customer searching
     *
     * @param event
     *
     * @private
     */

  }, {
    key: '_initCustomerSearch',
    value: function _initCustomerSearch(event) {
      var _this7 = this;

      setTimeout(function () {
        return _this7.customerManager.search($(event.currentTarget).val());
      }, 300);
    }

    /**
     * Init selecting customer for which order is being created
     *
     * @param event
     *
     * @private
     */

  }, {
    key: '_initCustomerSelect',
    value: function _initCustomerSelect(event) {
      var customerId = this.customerManager.selectCustomer(event);
      this.cartProvider.loadEmptyCart(customerId);
    }

    /**
     * Inits selecting cart to load
     *
     * @param event
     *
     * @private
     */

  }, {
    key: '_initCartSelect',
    value: function _initCartSelect(event) {
      var cartId = $(event.currentTarget).data('cart-id');
      this.cartProvider.getCart(cartId);
    }

    /**
     * Inits duplicating order cart
     *
     * @private
     */

  }, {
    key: '_initDuplicateOrderCart',
    value: function _initDuplicateOrderCart(event) {
      var orderId = $(event.currentTarget).data('order-id');
      this.cartProvider.duplicateOrderCart(orderId);
    }

    /**
     * Triggers cart rule searching
     *
     * @private
     */

  }, {
    key: '_initCartRuleSearch',
    value: function _initCartRuleSearch(event) {
      var searchPhrase = event.currentTarget.value;
      this.cartRuleManager.search(searchPhrase);
    }

    /**
     * Triggers cart rule select
     *
     * @private
     */

  }, {
    key: '_addCartRuleToCart',
    value: function _addCartRuleToCart() {
      var _this8 = this;

      this.$container.on('mousedown', _createOrderMap2.default.foundCartRuleListItem, function (event) {
        // prevent blur event to allow selecting cart rule
        event.preventDefault();
        var cartRuleId = $(event.currentTarget).data('cart-rule-id');
        _this8.cartRuleManager.addCartRuleToCart(cartRuleId, _this8.cartId);

        // manually fire blur event after cart rule is selected.
      }).on('click', _createOrderMap2.default.foundCartRuleListItem, function () {
        $(_createOrderMap2.default.cartRuleSearchInput).blur();
      });
    }

    /**
     * Triggers cart rule removal from cart
     *
     * @private
     */

  }, {
    key: '_removeCartRuleFromCart',
    value: function _removeCartRuleFromCart() {
      var _this9 = this;

      this.$container.on('click', _createOrderMap2.default.cartRuleDeleteBtn, function (event) {
        _this9.cartRuleManager.removeCartRuleFromCart($(event.currentTarget).data('cart-rule-id'), _this9.cartId);
      });
    }

    /**
     * Inits product searching
     *
     * @param event
     *
     * @private
     */

  }, {
    key: '_initProductSearch',
    value: function _initProductSearch(event) {
      var _this10 = this;

      var $productSearchInput = $(event.currentTarget);
      var searchPhrase = $productSearchInput.val();

      setTimeout(function () {
        return _this10.productManager.search(searchPhrase);
      }, 300);
    }

    /**
     * Inits product removing from cart
     *
     * @param event
     *
     * @private
     */

  }, {
    key: '_initProductRemoveFromCart',
    value: function _initProductRemoveFromCart(event) {
      var product = {
        productId: $(event.currentTarget).data('product-id'),
        attributeId: $(event.currentTarget).data('attribute-id'),
        customizationId: $(event.currentTarget).data('customization-id')
      };

      this.productManager.removeProductFromCart(this.cartId, product);
    }

    /**
     * Renders cart summary on the page
     *
     * @param {Object} cartInfo
     *
     * @private
     */

  }, {
    key: '_renderCartInfo',
    value: function _renderCartInfo(cartInfo) {
      this.addressesRenderer.render(cartInfo.addresses);
      this.cartRulesRenderer.renderCartRulesBlock(cartInfo.cartRules, cartInfo.products.length === 0);
      this.shippingRenderer.render(cartInfo.shipping, cartInfo.products.length === 0);
      this.productRenderer.renderList(cartInfo.products);
      // @todo: render Summary block when at least 1 product is in cart
      // and delivery options are available

      $(_createOrderMap2.default.cartBlock).removeClass('d-none');
    }

    /**
     * Changes cart addresses
     *
     * @private
     */

  }, {
    key: '_changeCartAddresses',
    value: function _changeCartAddresses() {
      var addresses = {
        deliveryAddressId: $(_createOrderMap2.default.deliveryAddressSelect).val(),
        invoiceAddressId: $(_createOrderMap2.default.invoiceAddressSelect).val()
      };

      this.cartEditor.changeCartAddresses(this.cartId, addresses);
    }
  }]);

  return CreateOrderPage;
}();

exports.default = CreateOrderPage;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 2007-2019 PrestaShop SA and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

/**
 * Encapsulates selectors for "Create order" page
 */
exports.default = {
  orderCreationContainer: '#order-creation-container',

  // selectors related to customer block
  customerSearchInput: '#customer-search-input',
  customerSearchResultsBlock: '.js-customer-search-results',
  customerSearchResultTemplate: '#customer-search-result-template',
  changeCustomerBtn: '.js-change-customer-btn',
  customerSearchRow: '.js-search-customer-row',
  chooseCustomerBtn: '.js-choose-customer-btn',
  notSelectedCustomerSearchResults: '.js-customer-search-result:not(.border-success)',
  customerSearchResultName: '.js-customer-name',
  customerSearchResultEmail: '.js-customer-email',
  customerSearchResultId: '.js-customer-id',
  customerSearchResultBirthday: '.js-customer-birthday',
  customerDetailsBtn: '.js-details-customer-btn',
  customerSearchResultColumn: '.js-customer-search-result-col',
  customerSearchBlock: '#customer-search-block',
  customerCartsTab: '.js-customer-carts-tab',
  customerOrdersTab: '.js-customer-orders-tab',
  customerCartsTable: '#customer-carts-table',
  customerCartsTableRowTemplate: '#customer-carts-table-row-template',
  customerCheckoutHistory: '#customer-checkout-history',
  customerOrdersTable: '#customer-orders-table',
  customerOrdersTableRowTemplate: '#customer-orders-table-row-template',
  cartRulesTable: '#cart-rules-table',
  cartRulesTableRowTemplate: '#cart-rules-table-row-template',
  useCartBtn: '.js-use-cart-btn',
  cartDetailsBtn: '.js-cart-details-btn',
  cartIdField: '.js-cart-id',
  cartDateField: '.js-cart-date',
  cartTotalField: '.js-cart-total',
  useOrderBtn: '.js-use-order-btn',
  orderDetailsBtn: '.js-order-details-btn',
  orderIdField: '.js-order-id',
  orderDateField: '.js-order-date',
  orderProductsField: '.js-order-products',
  orderTotalField: '.js-order-total-paid',
  orderStatusField: '.js-order-status',

  // selectors related to cart block
  cartBlock: '#cart-block',

  // selectors related to cartRules block
  cartRulesBlock: '#cart-rules-block',
  cartRuleSearchInput: '#search-cart-rules-input',
  cartRulesSearchResultBox: '#search-cart-rules-result-box',
  cartRulesNotFoundTemplate: '#cart-rules-not-found-template',
  foundCartRuleTemplate: '#found-cart-rule-template',
  foundCartRuleListItem: '.js-found-cart-rule',
  cartRuleNameField: '.js-cart-rule-name',
  cartRuleDescriptionField: '.js-cart-rule-description',
  cartRuleValueField: '.js-cart-rule-value',
  cartRuleDeleteBtn: '.js-cart-rule-delete-btn',
  cartRuleErrorBlock: '#js-cart-rule-error-block',
  cartRuleErrorText: '#js-cart-rule-error-text',

  // selectors related to addresses block
  addressesBlock: '#addresses-block',
  deliveryAddressDetails: '#delivery-address-details',
  invoiceAddressDetails: '#invoice-address-details',
  deliveryAddressSelect: '#delivery-address-select',
  invoiceAddressSelect: '#invoice-address-select',
  addressSelect: '.js-address-select',
  addressesContent: '#addresses-content',
  addressesWarning: '#addresses-warning',

  // selectors related to summary block
  summaryBlock: '#summary-block',

  // selectors related to shipping block
  shippingBlock: '#shipping-block',
  shippingForm: '.js-shipping-form',
  noCarrierBlock: '.js-no-carrier-block',
  deliveryOptionSelect: '#delivery-option-select',
  totalShippingField: '.js-total-shipping',
  freeShippingSwitch: '.js-free-shipping-switch',

  // selectors related to cart products block
  productSearch: '#product-search',
  combinationsSelect: '#combination-select',
  productResultBlock: '#product-search-results',
  productSelect: '#product-select',
  quantityInput: '#quantity-input',
  inStockCounter: '.js-in-stock-counter',
  combinationsTemplate: '#combinations-template',
  combinationsRow: '.js-combinations-row',
  productSelectRow: '.js-product-select-row',
  productCustomFieldsContainer: '#js-custom-fields-container',
  productCustomizationContainer: '#js-customization-container',
  productCustomFileTemplate: '#js-product-custom-file-template',
  productCustomTextTemplate: '#js-product-custom-text-template',
  productCustomInputLabel: '.js-product-custom-input-label',
  productCustomInput: '.js-product-custom-input',
  quantityRow: '.js-quantity-row',
  addToCartButton: '#add-product-to-cart-btn',
  productsTable: '#products-table',
  productsTableRowTemplate: '#products-table-row-template',
  productImageField: '.js-product-image',
  productNameField: '.js-product-name',
  productAttrField: '.js-product-attr',
  productReferenceField: '.js-product-ref',
  productUnitPriceInput: '.js-product-unit-input',
  productTotalPriceField: '.js-product-total-price',
  productRemoveBtn: '.js-product-remove-btn',
  productTaxWarning: '.js-tax-warning',
  noProductsFoundWarning: '.js-no-products-found'
};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTICE OF LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This source file is subject to the Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * that is bundled with this package in the file LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * It is also available through the world-wide-web at this URL:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://opensource.org/licenses/OSL-3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * If you did not receive a copy of the license and are unable to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * obtain it through the world-wide-web, please send an email
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to license@prestashop.com so we can send you a copy immediately.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DISCLAIMER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * versions in the future. If you wish to customize PrestaShop for your
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * needs please refer to https://www.prestashop.com for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    PrestaShop SA <contact@prestashop.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * International Registered Trademark & Property of PrestaShop SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _fosRouting = __webpack_require__(82);

var _fosRouting2 = _interopRequireDefault(_fosRouting);

var _fos_js_routes = __webpack_require__(72);

var _fos_js_routes2 = _interopRequireDefault(_fos_js_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Wraps FOSJsRoutingbundle with exposed routes.
 * To expose route add option `expose: true` in .yml routing config
 *
 * e.g.
 *
 * `my_route
 *    path: /my-path
 *    options:
 *      expose: true
 * `
 * And run `bin/console fos:js-routing:dump --format=json --target=admin-dev/themes/new-theme/js/fos_js_routes.json`
 */

var Router = function () {
  function Router() {
    _classCallCheck(this, Router);

    _fosRouting2.default.setData(_fos_js_routes2.default);
    _fosRouting2.default.setBaseUrl($(document).find('body').data('base-url'));

    return this;
  }

  /**
   * Decorated "generate" method, with predefined security token in params
   *
   * @param route
   * @param params
   *
   * @returns {String}
   */


  _createClass(Router, [{
    key: 'generate',
    value: function generate(route) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var tokenizedParams = Object.assign(params, { _token: $(document).find('body').data('token') });

      return _fosRouting2.default.generate(route, tokenizedParams);
    }
  }]);

  return Router;
}();

exports.default = Router;

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createOrderPage = __webpack_require__(282);

var _createOrderPage2 = _interopRequireDefault(_createOrderPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = window.$; /**
                   * 2007-2019 PrestaShop SA and Contributors
                   *
                   * NOTICE OF LICENSE
                   *
                   * This source file is subject to the Open Software License (OSL 3.0)
                   * that is bundled with this package in the file LICENSE.txt.
                   * It is also available through the world-wide-web at this URL:
                   * https://opensource.org/licenses/OSL-3.0
                   * If you did not receive a copy of the license and are unable to
                   * obtain it through the world-wide-web, please send an email
                   * to license@prestashop.com so we can send you a copy immediately.
                   *
                   * DISCLAIMER
                   *
                   * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                   * versions in the future. If you wish to customize PrestaShop for your
                   * needs please refer to https://www.prestashop.com for more information.
                   *
                   * @author    PrestaShop SA <contact@prestashop.com>
                   * @copyright 2007-2019 PrestaShop SA and Contributors
                   * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                   * International Registered Trademark & Property of PrestaShop SA
                   */


$(document).ready(function () {
  new _createOrderPage2.default();
});

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTICE OF LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This source file is subject to the Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * that is bundled with this package in the file LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * It is also available through the world-wide-web at this URL:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://opensource.org/licenses/OSL-3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * If you did not receive a copy of the license and are unable to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * obtain it through the world-wide-web, please send an email
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to license@prestashop.com so we can send you a copy immediately.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DISCLAIMER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * versions in the future. If you wish to customize PrestaShop for your
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * needs please refer to https://www.prestashop.com for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    PrestaShop SA <contact@prestashop.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * International Registered Trademark & Property of PrestaShop SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _createOrderMap = __webpack_require__(34);

var _createOrderMap2 = _interopRequireDefault(_createOrderMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Renders Delivery & Invoice addresses select
 */

var AddressesRenderer = function () {
  function AddressesRenderer() {
    _classCallCheck(this, AddressesRenderer);
  }

  _createClass(AddressesRenderer, [{
    key: 'render',


    /**
     * @param {Array} addresses
     */
    value: function render(addresses) {
      var deliveryAddressDetailsContent = '';
      var invoiceAddressDetailsContent = '';

      var $deliveryAddressDetails = $(_createOrderMap2.default.deliveryAddressDetails);
      var $invoiceAddressDetails = $(_createOrderMap2.default.invoiceAddressDetails);
      var $deliveryAddressSelect = $(_createOrderMap2.default.deliveryAddressSelect);
      var $invoiceAddressSelect = $(_createOrderMap2.default.invoiceAddressSelect);

      var $addressesContent = $(_createOrderMap2.default.addressesContent);
      var $addressesWarningContent = $(_createOrderMap2.default.addressesWarning);

      $deliveryAddressDetails.empty();
      $invoiceAddressDetails.empty();
      $deliveryAddressSelect.empty();
      $invoiceAddressSelect.empty();

      if (addresses.length === 0) {
        $addressesWarningContent.removeClass('d-none');
        $addressesContent.addClass('d-none');

        return;
      }

      $addressesContent.removeClass('d-none');
      $addressesWarningContent.addClass('d-none');

      for (var key in Object.keys(addresses)) {
        var address = addresses[key];

        var deliveryAddressOption = {
          value: address.addressId,
          text: address.alias
        };

        var invoiceAddressOption = {
          value: address.addressId,
          text: address.alias
        };

        if (address.delivery) {
          deliveryAddressDetailsContent = address.formattedAddress;
          deliveryAddressOption.selected = 'selected';
        }

        if (address.invoice) {
          invoiceAddressDetailsContent = address.formattedAddress;
          invoiceAddressOption.selected = 'selected';
        }

        $deliveryAddressSelect.append($('<option>', deliveryAddressOption));
        $invoiceAddressSelect.append($('<option>', invoiceAddressOption));
      }

      if (deliveryAddressDetailsContent) {
        $deliveryAddressDetails.html(deliveryAddressDetailsContent);
      }

      if (invoiceAddressDetailsContent) {
        $invoiceAddressDetails.html(invoiceAddressDetailsContent);
      }

      this._showAddressesBlock();
    }

    /**
     * Shows addresses block
     *
     * @private
     */

  }, {
    key: '_showAddressesBlock',
    value: function _showAddressesBlock() {
      $(_createOrderMap2.default.addressesBlock).removeClass('d-none');
    }
  }]);

  return AddressesRenderer;
}();

exports.default = AddressesRenderer;

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTICE OF LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This source file is subject to the Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * that is bundled with this package in the file LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * It is also available through the world-wide-web at this URL:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://opensource.org/licenses/OSL-3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * If you did not receive a copy of the license and are unable to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * obtain it through the world-wide-web, please send an email
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to license@prestashop.com so we can send you a copy immediately.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DISCLAIMER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * versions in the future. If you wish to customize PrestaShop for your
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * needs please refer to https://www.prestashop.com for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    PrestaShop SA <contact@prestashop.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * International Registered Trademark & Property of PrestaShop SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _createOrderMap = __webpack_require__(34);

var _createOrderMap2 = _interopRequireDefault(_createOrderMap);

var _router = __webpack_require__(35);

var _router2 = _interopRequireDefault(_router);

var _eventEmitter = __webpack_require__(17);

var _eventMap = __webpack_require__(51);

var _eventMap2 = _interopRequireDefault(_eventMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Provides ajax calls for getting cart information
 */

var CartProvider = function () {
  function CartProvider() {
    _classCallCheck(this, CartProvider);

    this.$container = $(_createOrderMap2.default.orderCreationContainer);
    this.router = new _router2.default();
  }

  /**
   * Gets cart information
   *
   * @param cartId
   *
   * @returns {jqXHR}. Object with cart information in response.
   */


  _createClass(CartProvider, [{
    key: 'getCart',
    value: function getCart(cartId) {
      $.get(this.router.generate('admin_carts_info', { cartId: cartId })).then(function (cartInfo) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.cartLoaded, cartInfo);
      });
    }

    /**
     * Gets existing empty cart or creates new empty cart for customer.
     *
     * @param customerId
     *
     * @returns {jqXHR}. Object with cart information in response
     */

  }, {
    key: 'loadEmptyCart',
    value: function loadEmptyCart(customerId) {
      $.post(this.router.generate('admin_carts_create'), {
        customer_id: customerId
      }).then(function (cartInfo) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.cartLoaded, cartInfo);
      });
    }

    /**
     * Duplicates cart from provided order
     *
     * @param orderId
     *
     * @returns {jqXHR}. Object with cart information in response
     */

  }, {
    key: 'duplicateOrderCart',
    value: function duplicateOrderCart(orderId) {
      $.post(this.router.generate('admin_orders_duplicate_cart', { orderId: orderId })).then(function (cartInfo) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.cartLoaded, cartInfo);
      });
    }
  }]);

  return CartProvider;
}();

exports.default = CartProvider;

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTICE OF LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This source file is subject to the Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * that is bundled with this package in the file LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * It is also available through the world-wide-web at this URL:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://opensource.org/licenses/OSL-3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * If you did not receive a copy of the license and are unable to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * obtain it through the world-wide-web, please send an email
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to license@prestashop.com so we can send you a copy immediately.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DISCLAIMER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * versions in the future. If you wish to customize PrestaShop for your
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * needs please refer to https://www.prestashop.com for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    PrestaShop SA <contact@prestashop.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * International Registered Trademark & Property of PrestaShop SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _cartEditor = __webpack_require__(74);

var _cartEditor2 = _interopRequireDefault(_cartEditor);

var _cartRulesRenderer = __webpack_require__(102);

var _cartRulesRenderer2 = _interopRequireDefault(_cartRulesRenderer);

var _createOrderMap = __webpack_require__(34);

var _createOrderMap2 = _interopRequireDefault(_createOrderMap);

var _eventEmitter = __webpack_require__(17);

var _eventMap = __webpack_require__(51);

var _eventMap2 = _interopRequireDefault(_eventMap);

var _router = __webpack_require__(35);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Responsible for searching cart rules and managing cart rules search block
 */

var CartRuleManager = function () {
  function CartRuleManager() {
    var _this = this;

    _classCallCheck(this, CartRuleManager);

    this.router = new _router2.default();
    this.$searchInput = $(_createOrderMap2.default.cartRuleSearchInput);
    this.cartRulesRenderer = new _cartRulesRenderer2.default();
    this.cartEditor = new _cartEditor2.default();

    this._initListeners();

    return {
      search: function search() {
        return _this._search();
      },
      stopSearching: function stopSearching() {
        return _this.cartRulesRenderer.hideResultsDropdown();
      },
      addCartRuleToCart: function addCartRuleToCart(cartRuleId, cartId) {
        return _this.cartEditor.addCartRuleToCart(cartRuleId, cartId);
      },
      removeCartRuleFromCart: function removeCartRuleFromCart(cartRuleId, cartId) {
        return _this.cartEditor.removeCartRuleFromCart(cartRuleId, cartId);
      }
    };
  }

  /**
   * Initiates event listeners for cart rule actions
   *
   * @private
   */


  _createClass(CartRuleManager, [{
    key: '_initListeners',
    value: function _initListeners() {
      this._onCartRuleSearch();
      this._onAddCartRuleToCart();
      this._onAddCartRuleToCartFailure();
      this._onRemoveCartRuleFromCart();
    }

    /**
     * Listens for cart rule search action
     *
     * @private
     */

  }, {
    key: '_onCartRuleSearch',
    value: function _onCartRuleSearch() {
      var _this2 = this;

      _eventEmitter.EventEmitter.on(_eventMap2.default.cartRuleSearched, function (cartRules) {
        _this2.cartRulesRenderer.renderSearchResults(cartRules);
      });
    }

    /**
     * Listens event of add cart rule to cart action
     *
     * @private
     */

  }, {
    key: '_onAddCartRuleToCart',
    value: function _onAddCartRuleToCart() {
      var _this3 = this;

      _eventEmitter.EventEmitter.on(_eventMap2.default.cartRuleAdded, function (cartInfo) {
        _this3.cartRulesRenderer.renderCartRulesBlock(cartInfo.cartRules, cartInfo.products.length === 0);
      });
    }

    /**
     * Listens event when add cart rule to cart fails
     *
     * @private
     */

  }, {
    key: '_onAddCartRuleToCartFailure',
    value: function _onAddCartRuleToCartFailure() {
      var _this4 = this;

      _eventEmitter.EventEmitter.on(_eventMap2.default.cartRuleFailedToAdd, function (message) {
        _this4.cartRulesRenderer.displayErrorMessage(message);
      });
    }

    /**
     * Listens event for remove cart rule from cart action
     *
     * @private
     */

  }, {
    key: '_onRemoveCartRuleFromCart',
    value: function _onRemoveCartRuleFromCart() {
      var _this5 = this;

      _eventEmitter.EventEmitter.on(_eventMap2.default.cartRuleRemoved, function (cartInfo) {
        _this5.cartRulesRenderer.renderCartRulesBlock(cartInfo.cartRules, cartInfo.products.length === 0);
      });
    }

    /**
     * Searches for cart rules by search phrase
     *
     * @private
     */

  }, {
    key: '_search',
    value: function _search(searchPhrase) {
      if (searchPhrase.length < 3) {
        return;
      }

      $.get(this.router.generate('admin_cart_rules_search'), {
        search_phrase: searchPhrase
      }).then(function (cartRules) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.cartRuleSearched, cartRules);
      }).catch(function (e) {
        showErrorMessage(e.responseJSON.message);
      });
    }
  }]);

  return CartRuleManager;
}();

exports.default = CartRuleManager;

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTICE OF LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This source file is subject to the Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * that is bundled with this package in the file LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * It is also available through the world-wide-web at this URL:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://opensource.org/licenses/OSL-3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * If you did not receive a copy of the license and are unable to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * obtain it through the world-wide-web, please send an email
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to license@prestashop.com so we can send you a copy immediately.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DISCLAIMER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * versions in the future. If you wish to customize PrestaShop for your
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * needs please refer to https://www.prestashop.com for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    PrestaShop SA <contact@prestashop.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * International Registered Trademark & Property of PrestaShop SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _createOrderMap = __webpack_require__(34);

var _createOrderMap2 = _interopRequireDefault(_createOrderMap);

var _customerRenderer = __webpack_require__(380);

var _customerRenderer2 = _interopRequireDefault(_customerRenderer);

var _eventEmitter = __webpack_require__(17);

var _eventMap = __webpack_require__(51);

var _eventMap2 = _interopRequireDefault(_eventMap);

var _router = __webpack_require__(35);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Responsible for customers managing. (search, select, get customer info etc.)
 */

var CustomerManager = function () {
  function CustomerManager() {
    var _this = this;

    _classCallCheck(this, CustomerManager);

    this.customerId = null;
    this.activeSearchRequest = null;

    this.router = new _router2.default();
    this.$container = $(_createOrderMap2.default.customerSearchBlock);
    this.$searchInput = $(_createOrderMap2.default.customerSearchInput);
    this.$customerSearchResultBlock = $(_createOrderMap2.default.customerSearchResultsBlock);
    this.customerRenderer = new _customerRenderer2.default();

    this._initListeners();

    return {
      search: function search(searchPhrase) {
        return _this._search(searchPhrase);
      },
      selectCustomer: function selectCustomer(event) {
        return _this._selectCustomer(event);
      },
      loadCustomerCarts: function loadCustomerCarts(currentCartId) {
        return _this._loadCustomerCarts(currentCartId);
      },
      loadCustomerOrders: function loadCustomerOrders() {
        return _this._loadCustomerOrders();
      }
    };
  }

  /**
   * Initializes event listeners
   *
   * @private
   */


  _createClass(CustomerManager, [{
    key: '_initListeners',
    value: function _initListeners() {
      var _this2 = this;

      this.$container.on('click', _createOrderMap2.default.changeCustomerBtn, function () {
        return _this2._changeCustomer();
      });
      this._onCustomerSearch();
      this._onCustomerSelect();
    }

    /**
     * Listens for customer search event
     *
     * @private
     */

  }, {
    key: '_onCustomerSearch',
    value: function _onCustomerSearch() {
      var _this3 = this;

      _eventEmitter.EventEmitter.on(_eventMap2.default.customerSearched, function (response) {
        _this3.activeSearchRequest = null;
        _this3.customerRenderer.renderSearchResults(response.customers);
      });
    }

    /**
     * Listens for customer select event
     *
     * @private
     */

  }, {
    key: '_onCustomerSelect',
    value: function _onCustomerSelect() {
      var _this4 = this;

      _eventEmitter.EventEmitter.on(_eventMap2.default.customerSelected, function (event) {
        var $chooseBtn = $(event.currentTarget);
        _this4.customerId = $chooseBtn.data('customer-id');

        _this4.customerRenderer.displaySelectedCustomerBlock($chooseBtn);
      });
    }

    /**
     * Handles use case when customer is changed
     *
     * @private
     */

  }, {
    key: '_changeCustomer',
    value: function _changeCustomer() {
      this.customerRenderer.showCustomerSearch();
    }

    /**
     * Loads customer carts list
     *
     * @param currentCartId
     */

  }, {
    key: '_loadCustomerCarts',
    value: function _loadCustomerCarts(currentCartId) {
      var _this5 = this;

      var customerId = this.customerId;

      $.get(this.router.generate('admin_customers_carts', { customerId: customerId })).then(function (response) {
        _this5.customerRenderer.renderCarts(response.carts, currentCartId);
      }).catch(function (e) {
        showErrorMessage(e.responseJSON.message);
      });
    }

    /**
     * Loads customer orders list
     */

  }, {
    key: '_loadCustomerOrders',
    value: function _loadCustomerOrders() {
      var _this6 = this;

      var customerId = this.customerId;

      $.get(this.router.generate('admin_customers_orders', { customerId: customerId })).then(function (response) {
        _this6.customerRenderer.renderOrders(response.orders);
      }).catch(function (e) {
        showErrorMessage(e.responseJSON.message);
      });
    }

    /**
     * @param {Event} chooseCustomerEvent
     *
     * @return {Number}
     */

  }, {
    key: '_selectCustomer',
    value: function _selectCustomer(chooseCustomerEvent) {
      _eventEmitter.EventEmitter.emit(_eventMap2.default.customerSelected, chooseCustomerEvent);

      return this.customerId;
    }

    /**
     * Searches for customers
     * @todo: fix showing not found customers and rerender after change customer
     * @private
     */

  }, {
    key: '_search',
    value: function _search(searchPhrase) {
      if (searchPhrase.length < 3) {
        return;
      }

      if (this.activeSearchRequest !== null) {
        this.activeSearchRequest.abort();
      }

      var $searchRequest = $.get(this.router.generate('admin_customers_search'), {
        customer_search: searchPhrase
      });
      this.activeSearchRequest = $searchRequest;

      $searchRequest.then(function (response) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.customerSearched, response);
      }).catch(function (response) {
        if (response.statusText === 'abort') {
          return;
        }

        showErrorMessage(response.responseJSON.message);
      });
    }
  }]);

  return CustomerManager;
}();

exports.default = CustomerManager;

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

/**
 * 2007-2019 PrestaShop SA and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

var _createOrderMap = __webpack_require__(34);

var _createOrderMap2 = _interopRequireDefault(_createOrderMap);

var _router = __webpack_require__(35);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Responsible for customer information rendering
 */

var CustomerRenderer = function () {
  function CustomerRenderer() {
    _classCallCheck(this, CustomerRenderer);

    this.$container = $(_createOrderMap2.default.customerSearchBlock);
    this.$customerSearchResultBlock = $(_createOrderMap2.default.customerSearchResultsBlock);
    this.router = new _router2.default();
  }

  /**
   * Renders customer search results
   *
   * @param foundCustomers
   */


  _createClass(CustomerRenderer, [{
    key: 'renderSearchResults',
    value: function renderSearchResults(foundCustomers) {
      this._clearShownCustomers();

      if (foundCustomers.length === 0) {
        this._showNotFoundCustomers();

        return;
      }

      for (var customerId in foundCustomers) {
        var customerResult = foundCustomers[customerId];
        var customer = {
          id: customerId,
          firstName: customerResult.firstname,
          lastName: customerResult.lastname,
          email: customerResult.email,
          birthday: customerResult.birthday !== '0000-00-00' ? customerResult.birthday : ' '
        };

        this._renderFoundCustomer(customer);
      }
    }

    /**
     * Responsible for displaying customer block after customer select
     *
     * @param $targetedBtn
     */

  }, {
    key: 'displaySelectedCustomerBlock',
    value: function displaySelectedCustomerBlock($targetedBtn) {
      $targetedBtn.addClass('d-none');

      var $customerCard = $targetedBtn.closest('.card');

      $customerCard.addClass('border-success');
      $customerCard.find(_createOrderMap2.default.changeCustomerBtn).removeClass('d-none');

      this.$container.find(_createOrderMap2.default.customerSearchRow).addClass('d-none');
      this.$container.find(_createOrderMap2.default.notSelectedCustomerSearchResults).closest(_createOrderMap2.default.customerSearchResultColumn).remove();
    }

    /**
     * Shows customer search block
     */

  }, {
    key: 'showCustomerSearch',
    value: function showCustomerSearch() {
      this.$container.find(_createOrderMap2.default.customerSearchRow).removeClass('d-none');
    }

    /**
     * Renders customer carts list
     *
     * @param {Array} carts
     * @param {Int} currentCartId
     */

  }, {
    key: 'renderCarts',
    value: function renderCarts(carts, currentCartId) {
      var $cartsTable = $(_createOrderMap2.default.customerCartsTable);
      var $cartsTableRowTemplate = $($(_createOrderMap2.default.customerCartsTableRowTemplate).html());

      $cartsTable.find('tbody').empty();

      if (carts.length === 0) {
        return;
      }

      this._showCheckoutHistoryBlock();

      for (var key in carts) {
        var cart = carts[key];
        // do not render current cart
        if (cart.cartId === currentCartId) {
          continue;
        }
        var $template = $cartsTableRowTemplate.clone();

        $template.find(_createOrderMap2.default.cartIdField).text(cart.cartId);
        $template.find(_createOrderMap2.default.cartDateField).text(cart.creationDate);
        $template.find(_createOrderMap2.default.cartTotalField).text(cart.totalPrice);
        $template.find(_createOrderMap2.default.cartDetailsBtn).prop('href', this.router.generate('admin_carts_view', { cartId: cart.cartId }));

        $template.find(_createOrderMap2.default.useCartBtn).data('cart-id', cart.cartId);

        $cartsTable.find('tbody').append($template);
      }
    }

    /**
     * Renders customer orders list
     *
     * @param {Array} orders
     */

  }, {
    key: 'renderOrders',
    value: function renderOrders(orders) {
      var $ordersTable = $(_createOrderMap2.default.customerOrdersTable);
      var $rowTemplate = $($(_createOrderMap2.default.customerOrdersTableRowTemplate).html());

      $ordersTable.find('tbody').empty();

      if (orders.length === 0) {
        return;
      }

      this._showCheckoutHistoryBlock();

      for (var key in Object.keys(orders)) {
        var order = orders[key];
        var $template = $rowTemplate.clone();

        $template.find(_createOrderMap2.default.orderIdField).text(order.orderId);
        $template.find(_createOrderMap2.default.orderDateField).text(order.orderPlacedDate);
        $template.find(_createOrderMap2.default.orderProductsField).text(order.totalProductsCount);
        $template.find(_createOrderMap2.default.orderTotalField).text(order.totalPaid);
        $template.find(_createOrderMap2.default.orderStatusField).text(order.orderStatus);
        $template.find(_createOrderMap2.default.orderDetailsBtn).prop('href', this.router.generate('admin_orders_view', { orderId: order.orderId }));

        $template.find(_createOrderMap2.default.useOrderBtn).data('order-id', order.orderId);

        $ordersTable.find('tbody').append($template);
      }
    }

    /**
     * Renders customer information after search action
     *
     * @param {Object} customer
     *
     * @return {jQuery}
     *
     * @private
     */

  }, {
    key: '_renderFoundCustomer',
    value: function _renderFoundCustomer(customer) {
      var $customerSearchResultTemplate = $($(_createOrderMap2.default.customerSearchResultTemplate).html());
      var $template = $customerSearchResultTemplate.clone();

      $template.find(_createOrderMap2.default.customerSearchResultName).text(customer.firstName + ' ' + customer.lastName);
      $template.find(_createOrderMap2.default.customerSearchResultEmail).text(customer.email);
      $template.find(_createOrderMap2.default.customerSearchResultId).text(customer.id);
      $template.find(_createOrderMap2.default.customerSearchResultBirthday).text(customer.birthday);
      $template.find(_createOrderMap2.default.chooseCustomerBtn).data('customer-id', customer.id);
      $template.find(_createOrderMap2.default.customerDetailsBtn).prop('href', this.router.generate('admin_customers_view', { customerId: customer.id }));

      return this.$customerSearchResultBlock.append($template);
    }

    /**
     * Shows checkout history block where carts and orders are rendered
     *
     * @private
     */

  }, {
    key: '_showCheckoutHistoryBlock',
    value: function _showCheckoutHistoryBlock() {
      $(_createOrderMap2.default.customerCheckoutHistory).removeClass('d-none');
    }

    /**
     * Clears shown customers
     *
     * @private
     */

  }, {
    key: '_clearShownCustomers',
    value: function _clearShownCustomers() {
      this.$customerSearchResultBlock.empty();
    }

    /**
     * Shows empty result when customer is not found
     *
     * @private
     */

  }, {
    key: '_showNotFoundCustomers',
    value: function _showNotFoundCustomers() {
      var $emptyResultTemplate = $($('#customerSearchEmptyResultTemplate').html());

      this.$customerSearchResultBlock.append($emptyResultTemplate);
    }
  }]);

  return CustomerRenderer;
}();

exports.default = CustomerRenderer;

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTICE OF LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This source file is subject to the Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * that is bundled with this package in the file LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * It is also available through the world-wide-web at this URL:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://opensource.org/licenses/OSL-3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * If you did not receive a copy of the license and are unable to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * obtain it through the world-wide-web, please send an email
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to license@prestashop.com so we can send you a copy immediately.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DISCLAIMER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * versions in the future. If you wish to customize PrestaShop for your
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * needs please refer to https://www.prestashop.com for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    PrestaShop SA <contact@prestashop.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * International Registered Trademark & Property of PrestaShop SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _cartEditor = __webpack_require__(74);

var _cartEditor2 = _interopRequireDefault(_cartEditor);

var _createOrderMap = __webpack_require__(34);

var _createOrderMap2 = _interopRequireDefault(_createOrderMap);

var _eventMap = __webpack_require__(51);

var _eventMap2 = _interopRequireDefault(_eventMap);

var _eventEmitter = __webpack_require__(17);

var _productRenderer = __webpack_require__(103);

var _productRenderer2 = _interopRequireDefault(_productRenderer);

var _router = __webpack_require__(35);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Product component Object for "Create order" page
 */

var ProductManager = function () {
  function ProductManager() {
    var _this = this;

    _classCallCheck(this, ProductManager);

    this.products = {};
    this.selectedProductId = null;
    this.selectedCombinationId = null;
    this.activeSearchRequest = null;

    this.productRenderer = new _productRenderer2.default();
    this.router = new _router2.default();
    this.cartEditor = new _cartEditor2.default();

    this._initListeners();

    return {
      search: function search(searchPhrase) {
        return _this._search(searchPhrase);
      },
      addProductToCart: function addProductToCart(cartId) {
        return _this.cartEditor.addProduct(cartId, _this._getProductData());
      },
      removeProductFromCart: function removeProductFromCart(cartId, product) {
        return _this.cartEditor.removeProductFromCart(cartId, product);
      }
    };
  }

  /**
   * Initializes event listeners
   *
   * @private
   */


  _createClass(ProductManager, [{
    key: '_initListeners',
    value: function _initListeners() {
      var _this2 = this;

      $(_createOrderMap2.default.productSelect).on('change', function (e) {
        return _this2._initProductSelect(e);
      });
      $(_createOrderMap2.default.combinationsSelect).on('change', function (e) {
        return _this2._initCombinationSelect(e);
      });

      this._onProductSearch();
      this._onAddProductToCart();
      this._onRemoveProductFromCart();
    }

    /**
     * Listens for product search event
     *
     * @private
     */

  }, {
    key: '_onProductSearch',
    value: function _onProductSearch() {
      var _this3 = this;

      _eventEmitter.EventEmitter.on(_eventMap2.default.productSearched, function (response) {
        _this3.products = JSON.parse(response);
        _this3.productRenderer.renderSearchResults(_this3.products);
        _this3._selectFirstResult();
      });
    }

    /**
     * Listens for add product to cart event
     *
     * @private
     */

  }, {
    key: '_onAddProductToCart',
    value: function _onAddProductToCart() {
      _eventEmitter.EventEmitter.on(_eventMap2.default.productAddedToCart, function (cartInfo) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.cartLoaded, cartInfo);
      });
    }

    /**
     * Listens for remove product from cart event
     *
     * @private
     */

  }, {
    key: '_onRemoveProductFromCart',
    value: function _onRemoveProductFromCart() {
      _eventEmitter.EventEmitter.on(_eventMap2.default.productRemovedFromCart, function (cartInfo) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.cartLoaded, cartInfo);
      });
    }

    /**
     * Initializes product select
     *
     * @param event
     *
     * @private
     */

  }, {
    key: '_initProductSelect',
    value: function _initProductSelect(event) {
      var productId = Number($(event.currentTarget).find(':selected').val());
      this._selectProduct(productId);
    }

    /**
     * Initializes combination select
     *
     * @param event
     *
     * @private
     */

  }, {
    key: '_initCombinationSelect',
    value: function _initCombinationSelect(event) {
      var combinationId = Number($(event.currentTarget).find(':selected').val());
      this._selectCombination(combinationId);
    }

    /**
     * Searches for product
     *
     * @private
     */

  }, {
    key: '_search',
    value: function _search(searchPhrase) {
      if (searchPhrase.length < 3) {
        return;
      }

      if (this.activeSearchRequest !== null) {
        this.activeSearchRequest.abort();
      }

      $.get(this.router.generate('admin_products_search'), {
        search_phrase: searchPhrase
      }).then(function (response) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.productSearched, response);
      }).catch(function (response) {
        if (response.statusText === 'abort') {
          return;
        }

        showErrorMessage(response.responseJSON.message);
      });
    }

    /**
     * Initiate first result dataset after search
     *
     * @private
     */

  }, {
    key: '_selectFirstResult',
    value: function _selectFirstResult() {
      this._unsetProduct();

      if (this.products.length !== 0) {
        this._selectProduct(Object.keys(this.products)[0]);
      }
    }

    /**
     * Handles use case when product is selected from search results
     *
     * @private
     *
     * @param productId
     */

  }, {
    key: '_selectProduct',
    value: function _selectProduct(productId) {
      this._unsetCombination();

      this.selectedProductId = productId;
      var product = this.products[productId];

      this.productRenderer.renderProductMetadata(product);

      // if product has combinations select the first else leave it null
      if (product.combinations.length !== 0) {
        this._selectCombination(Object.keys(product.combinations)[0]);
      }

      return product;
    }

    /**
     * Handles use case when new combination is selected
     *
     * @param combinationId
     *
     * @private
     */

  }, {
    key: '_selectCombination',
    value: function _selectCombination(combinationId) {
      var combination = this.products[this.selectedProductId].combinations[combinationId];

      this.selectedCombinationId = combinationId;
      this.productRenderer.renderStock(combination.stock);

      return combination;
    }

    /**
     * Sets the selected combination id to null
     *
     * @private
     */

  }, {
    key: '_unsetCombination',
    value: function _unsetCombination() {
      this.selectedCombinationId = null;
    }

    /**
     * Sets the selected product id to null
     *
     * @private
     */

  }, {
    key: '_unsetProduct',
    value: function _unsetProduct() {
      this.selectedProductId = null;
    }

    /**
     * Retrieves product data from product search result block fields
     *
     * @returns {FormData}
     * @private
     */

  }, {
    key: '_getProductData',
    value: function _getProductData() {
      var formData = new FormData();

      formData.append('productId', this.selectedProductId);
      formData.append('quantity', $(_createOrderMap2.default.quantityInput).val());
      formData.append('combinationId', this.selectedCombinationId);

      this._getCustomFieldsData(formData);

      return formData;
    }

    /**
     * Resolves product customization fields to be added to formData object
     *
     * @param {FormData} formData
     *
     * @returns {FormData}
     *
     * @private
     */

  }, {
    key: '_getCustomFieldsData',
    value: function _getCustomFieldsData(formData) {
      var $customFields = $(_createOrderMap2.default.productCustomInput);

      $customFields.each(function (key, field) {
        var $field = $(field);
        var name = $field.attr('name');

        if ($field.attr('type') === 'file') {
          formData.append(name, $field[0].files[0]);
        } else {
          formData.append(name, $field.val());
        }
      });

      return formData;
    }
  }]);

  return ProductManager;
}();

exports.default = ProductManager;

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTICE OF LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This source file is subject to the Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * that is bundled with this package in the file LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * It is also available through the world-wide-web at this URL:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://opensource.org/licenses/OSL-3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * If you did not receive a copy of the license and are unable to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * obtain it through the world-wide-web, please send an email
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to license@prestashop.com so we can send you a copy immediately.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DISCLAIMER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * versions in the future. If you wish to customize PrestaShop for your
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * needs please refer to https://www.prestashop.com for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    PrestaShop SA <contact@prestashop.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * International Registered Trademark & Property of PrestaShop SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _createOrderMap = __webpack_require__(34);

var _createOrderMap2 = _interopRequireDefault(_createOrderMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Manupulates UI of Shipping block in Order creation page
 */

var ShippingRenderer = function () {
  function ShippingRenderer() {
    _classCallCheck(this, ShippingRenderer);

    this.$container = $(_createOrderMap2.default.shippingBlock);
    this.$form = $(_createOrderMap2.default.shippingForm);
    this.$noCarrierBlock = $(_createOrderMap2.default.noCarrierBlock);
  }

  /**
   * @param {Object} shipping
   * @param {Boolean} emptyCart
   */


  _createClass(ShippingRenderer, [{
    key: 'render',
    value: function render(shipping, emptyCart) {
      var shippingIsAvailable = typeof shipping !== 'undefined' && shipping !== null && shipping.length !== 0;

      if (emptyCart) {
        this._hideContainer();
      } else if (shippingIsAvailable) {
        this._displayForm(shipping);
      } else {
        this._displayNoCarriersWarning();
      }
    }

    /**
     * Show form block with rendered delivery options instead of warning message
     *
     * @param shipping
     *
     * @private
     */

  }, {
    key: '_displayForm',
    value: function _displayForm(shipping) {
      this._hideNoCarrierBlock();
      this._renderDeliveryOptions(shipping.deliveryOptions, shipping.selectedCarrierId);
      this._renderTotalShipping(shipping.shippingPrice);
      this._showForm();
      this._showContainer();
    }

    /**
     * Show warning message that no carriers are available and hide form block
     *
     * @private
     */

  }, {
    key: '_displayNoCarriersWarning',
    value: function _displayNoCarriersWarning() {
      this._showContainer();
      this._hideForm();
      this._showNoCarrierBlock();
    }

    /**
     * Renders delivery options selection block
     *
     * @param deliveryOptions
     * @param selectedVal
     *
     * @private
     */

  }, {
    key: '_renderDeliveryOptions',
    value: function _renderDeliveryOptions(deliveryOptions, selectedVal) {
      var $deliveryOptionSelect = $(_createOrderMap2.default.deliveryOptionSelect);
      $deliveryOptionSelect.empty();

      for (var key in Object.keys(deliveryOptions)) {
        var option = deliveryOptions[key];

        var deliveryOption = {
          value: option.carrierId,
          text: option.carrierName + ' - ' + option.carrierDelay
        };

        if (selectedVal === deliveryOption.value) {
          deliveryOption.selected = 'selected';
        }

        $deliveryOptionSelect.append($('<option>', deliveryOption));
      }
    }

    /**
     * Renders dynamic value of shipping price
     *
     * @param shippingPrice
     *
     * @private
     */

  }, {
    key: '_renderTotalShipping',
    value: function _renderTotalShipping(shippingPrice) {
      var $totalShippingField = $(_createOrderMap2.default.totalShippingField);
      $totalShippingField.empty();

      $totalShippingField.append(shippingPrice);
    }

    /**
     * Show whole shipping container
     *
     * @private
     */

  }, {
    key: '_showContainer',
    value: function _showContainer() {
      this.$container.removeClass('d-none');
    }

    /**
     * Hide whole shipping container
     *
     * @private
     */

  }, {
    key: '_hideContainer',
    value: function _hideContainer() {
      this.$container.addClass('d-none');
    }

    /**
     * Show form block
     *
     * @private
     */

  }, {
    key: '_showForm',
    value: function _showForm() {
      this.$form.removeClass('d-none');
    }

    /**
     * Hide form block
     *
     * @private
     */

  }, {
    key: '_hideForm',
    value: function _hideForm() {
      this.$form.addClass('d-none');
    }

    /**
     * Show warning message block which warns that no carriers are available
     *
     * @private
     */

  }, {
    key: '_showNoCarrierBlock',
    value: function _showNoCarrierBlock() {
      this.$noCarrierBlock.removeClass('d-none');
    }

    /**
     * Hide warning message block which warns that no carriers are available
     *
     * @private
     */

  }, {
    key: '_hideNoCarrierBlock',
    value: function _hideNoCarrierBlock() {
      this.$noCarrierBlock.addClass('d-none');
    }
  }]);

  return ShippingRenderer;
}();

exports.default = ShippingRenderer;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 2007-2019 PrestaShop SA and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

/**
 * Encapsulates js events used in create order page
 */
exports.default = {
  // when customer search action is done
  customerSearched: 'customerSearched',
  // when new customer is selected
  customerSelected: 'customerSelected',
  // when new cart is loaded, no matter if its empty, selected from carts list or duplicated by order.
  cartLoaded: 'cartLoaded',
  // when cart addresses information has been changed
  cartAddressesChanged: 'cartAddressesChanged',
  // when cart delivery option has been changed
  cartDeliveryOptionChanged: 'cartDeliveryOptionChanged',
  // when cart free shipping value has been changed
  cartFreeShippingSet: 'cartFreeShippingSet',
  // when cart rules search action is done
  cartRuleSearched: 'cartRuleSearched',
  // when cart rule is removed from cart
  cartRuleRemoved: 'cartRuleRemoved',
  // when cart rule is added to cart
  cartRuleAdded: 'cartRuleAdded',
  // when cart rule cannot be added to cart
  cartRuleFailedToAdd: 'cartRuleFailedToAdd',
  // when product search action is done
  productSearched: 'productSearched',
  // when product is added to cart
  productAddedToCart: 'productAddedToCart',
  // when product is removed from cart
  productRemovedFromCart: 'productRemovedFromCart'
};

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

module.exports = {"base_url":"","routes":{"admin_products_search":{"tokens":[["text","/sell/catalog/products/search"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_cart_rules_search":{"tokens":[["text","/sell/catalog/cart-rules/search"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_customers_view":{"tokens":[["text","/view"],["variable","/","\\d+","customerId"],["text","/sell/customers"]],"defaults":[],"requirements":{"customerId":"\\d+"},"hosttokens":[],"methods":["GET","POST"],"schemes":[]},"admin_customers_search":{"tokens":[["text","/sell/customers/search"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_customers_carts":{"tokens":[["text","/carts"],["variable","/","\\d+","customerId"],["text","/sell/customers"]],"defaults":[],"requirements":{"customerId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_customers_orders":{"tokens":[["text","/orders"],["variable","/","\\d+","customerId"],["text","/sell/customers"]],"defaults":[],"requirements":{"customerId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_carts_view":{"tokens":[["text","/view"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_carts_info":{"tokens":[["text","/info"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_carts_create":{"tokens":[["text","/sell/orders/carts/new"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_edit_addresses":{"tokens":[["text","/addresses"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_edit_carrier":{"tokens":[["text","/carrier"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_set_free_shipping":{"tokens":[["text","/rules/free-shipping"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_add_cart_rule":{"tokens":[["text","/cart-rules"],["variable","/","[^/]++","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_delete_cart_rule":{"tokens":[["text","/delete"],["variable","/","[^/]++","cartRuleId"],["text","/cart-rules"],["variable","/","[^/]++","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_add_product":{"tokens":[["text","/products"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+","productId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_delete_product":{"tokens":[["text","/delete-product"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_orders_view":{"tokens":[["text","/view"],["variable","/","[^/]++","orderId"],["text","/sell/orders/orders"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_orders_duplicate_cart":{"tokens":[["text","/duplicate-cart"],["variable","/","\\d+","orderId"],["text","/sell/orders/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":[]}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTICE OF LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This source file is subject to the Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * that is bundled with this package in the file LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * It is also available through the world-wide-web at this URL:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://opensource.org/licenses/OSL-3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * If you did not receive a copy of the license and are unable to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * obtain it through the world-wide-web, please send an email
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to license@prestashop.com so we can send you a copy immediately.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DISCLAIMER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * versions in the future. If you wish to customize PrestaShop for your
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * needs please refer to https://www.prestashop.com for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    PrestaShop SA <contact@prestashop.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2007-2019 PrestaShop SA and Contributors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * International Registered Trademark & Property of PrestaShop SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _router = __webpack_require__(35);

var _router2 = _interopRequireDefault(_router);

var _eventEmitter = __webpack_require__(17);

var _eventMap = __webpack_require__(51);

var _eventMap2 = _interopRequireDefault(_eventMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Provides ajax calls for cart editing actions
 * Each method emits an event with updated cart information after success.
 */

var CartEditor = function () {
  function CartEditor() {
    _classCallCheck(this, CartEditor);

    this.router = new _router2.default();
  }

  /**
   * Changes cart addresses
   *
   * @param {Number} cartId
   * @param {Object} addresses
   */


  _createClass(CartEditor, [{
    key: 'changeCartAddresses',
    value: function changeCartAddresses(cartId, addresses) {
      $.post(this.router.generate('admin_carts_edit_addresses', { cartId: cartId }), addresses).then(function (cartInfo) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.cartAddressesChanged, cartInfo);
      });
    }

    /**
     * Modifies cart delivery option
     *
     * @param {Number} cartId
     * @param {Number} value
     */

  }, {
    key: 'changeDeliveryOption',
    value: function changeDeliveryOption(cartId, value) {
      $.post(this.router.generate('admin_carts_edit_carrier', { cartId: cartId }), {
        carrierId: value
      }).then(function (cartInfo) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.cartDeliveryOptionChanged, cartInfo);
      });
    }

    /**
     * Changes cart free shipping value
     *
     * @param {Number} cartId
     * @param {Boolean} value
     */

  }, {
    key: 'setFreeShipping',
    value: function setFreeShipping(cartId, value) {
      $.post(this.router.generate('admin_carts_set_free_shipping', { cartId: cartId }), {
        freeShipping: value
      }).then(function (cartInfo) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.cartFreeShippingSet, cartInfo);
      });
    }

    /**
     * Adds cart rule to cart
     *
     * @param {Number} cartRuleId
     * @param {Number} cartId
     */

  }, {
    key: 'addCartRuleToCart',
    value: function addCartRuleToCart(cartRuleId, cartId) {
      $.post(this.router.generate('admin_carts_add_cart_rule', { cartId: cartId }), {
        cartRuleId: cartRuleId
      }).then(function (cartInfo) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.cartRuleAdded, cartInfo);
      }).catch(function (response) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.cartRuleFailedToAdd, response.responseJSON.message);
      });
    }

    /**
     * Removes cart rule from cart
     *
     * @param {Number} cartRuleId
     * @param {Number} cartId
     */

  }, {
    key: 'removeCartRuleFromCart',
    value: function removeCartRuleFromCart(cartRuleId, cartId) {
      $.post(this.router.generate('admin_carts_delete_cart_rule', {
        cartId: cartId,
        cartRuleId: cartRuleId
      })).then(function (cartInfo) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.cartRuleRemoved, cartInfo);
      }).catch(function (response) {
        showErrorMessage(response.responseJSON.message);
      });
    }

    /**
     * Adds product to cart
     *
     * @param {Number} cartId
     * @param {FormData} product
     */

  }, {
    key: 'addProduct',
    value: function addProduct(cartId, product) {
      $.ajax(this.router.generate('admin_carts_add_product', { cartId: cartId }), {
        method: 'POST',
        data: product,
        processData: false,
        contentType: false
      }).then(function (cartInfo) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.productAddedToCart, cartInfo);
      }).catch(function (response) {
        showErrorMessage(response.responseJSON.message);
      });
    }

    /**
     * Removes product from cart
     *
     * @param {Number} cartId
     * @param {Object} product
     */

  }, {
    key: 'removeProductFromCart',
    value: function removeProductFromCart(cartId, product) {
      $.post(this.router.generate('admin_carts_delete_product', { cartId: cartId }), {
        productId: product.productId,
        attributeId: product.attributeId,
        customizationId: product.customizationId
      }).then(function (cartInfo) {
        _eventEmitter.EventEmitter.emit(_eventMap2.default.productRemovedFromCart, cartInfo);
      }).catch(function (response) {
        showErrorMessage(response.responseJSON.message);
      });
    }
  }]);

  return CartEditor;
}();

exports.default = CartEditor;

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var Routing=function a(){var b=this;_classCallCheck(this,a),this.setRoutes=function(a){b.routesRouting=a||[]},this.getRoutes=function(){return b.routesRouting},this.setBaseUrl=function(a){b.contextRouting.base_url=a},this.getBaseUrl=function(){return b.contextRouting.base_url},this.setPrefix=function(a){b.contextRouting.prefix=a},this.setScheme=function(a){b.contextRouting.scheme=a},this.getScheme=function(){return b.contextRouting.scheme},this.setHost=function(a){b.contextRouting.host=a},this.getHost=function(){return b.contextRouting.host},this.buildQueryParams=function(a,c,d){var e=new RegExp(/\[]$/);c instanceof Array?c.forEach(function(c,f){e.test(a)?d(a,c):b.buildQueryParams(a+'['+('object'===('undefined'==typeof c?'undefined':_typeof(c))?f:'')+']',c,d)}):'object'===('undefined'==typeof c?'undefined':_typeof(c))?Object.keys(c).forEach(function(e){return b.buildQueryParams(a+'['+e+']',c[e],d)}):d(a,c)},this.getRoute=function(a){var c=b.contextRouting.prefix+a;if(!!b.routesRouting[c])return b.routesRouting[c];else if(!b.routesRouting[a])throw new Error('The route "'+a+'" does not exist.');return b.routesRouting[a]},this.generate=function(a,c,d){var e=b.getRoute(a),f=c||{},g=_extends({},f),h='_scheme',i='',j=!0,k='';if((e.tokens||[]).forEach(function(b){if('text'===b[0])return i=b[1]+i,void(j=!1);if('variable'===b[0]){var c=(e.defaults||{})[b[3]];if(!1==j||!c||(f||{})[b[3]]&&f[b[3]]!==e.defaults[b[3]]){var d;if((f||{})[b[3]])d=f[b[3]],delete g[b[3]];else if(c)d=e.defaults[b[3]];else{if(j)return;throw new Error('The route "'+a+'" requires the parameter "'+b[3]+'".')}var h=!0===d||!1===d||''===d;if(!h||!j){var k=encodeURIComponent(d).replace(/%2F/g,'/');'null'===k&&null===d&&(k=''),i=b[1]+k+i}j=!1}else c&&delete g[b[3]];return}throw new Error('The token type "'+b[0]+'" is not supported.')}),''==i&&(i='/'),(e.hosttokens||[]).forEach(function(a){var b;return'text'===a[0]?void(k=a[1]+k):void('variable'===a[0]&&((f||{})[a[3]]?(b=f[a[3]],delete g[a[3]]):e.defaults[a[3]]&&(b=e.defaults[a[3]]),k=a[1]+b+k))}),i=b.contextRouting.base_url+i,e.requirements[h]&&b.getScheme()!==e.requirements[h]?i=e.requirements[h]+'://'+(k||b.getHost())+i:k&&b.getHost()!==k?i=b.getScheme()+'://'+k+i:!0===d&&(i=b.getScheme()+'://'+b.getHost()+i),0<Object.keys(g).length){var l=[],m=function(a,b){var c=b;c='function'==typeof c?c():c,c=null===c?'':c,l.push(encodeURIComponent(a)+'='+encodeURIComponent(c))};Object.keys(g).forEach(function(a){return b.buildQueryParams(a,g[a],m)}),i=i+'?'+l.join('&').replace(/%20/g,'+')}return i},this.setData=function(a){b.setBaseUrl(a.base_url),b.setRoutes(a.routes),'prefix'in a&&b.setPrefix(a.prefix),b.setHost(a.host),b.setScheme(a.scheme)},this.contextRouting={base_url:'',prefix:'',host:'',scheme:''}};module.exports=new Routing;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDM1OThmODA5NTYyZTVhMmYxMDI/NWI0MioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL2pzL3BhZ2VzL29yZGVyL2NyZWF0ZS9jYXJ0LXJ1bGVzLXJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL2pzL3BhZ2VzL29yZGVyL2NyZWF0ZS9wcm9kdWN0LXJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL2pzL2NvbXBvbmVudHMvZXZlbnQtZW1pdHRlci5qcz8wZTAzKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9ldmVudHMvZXZlbnRzLmpzPzdjNzEqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9qcy9wYWdlcy9vcmRlci9jcmVhdGUvY3JlYXRlLW9yZGVyLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGFnZXMvb3JkZXIvY3JlYXRlL2NyZWF0ZS1vcmRlci1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9yb3V0ZXIuanM/NDBhYyIsIndlYnBhY2s6Ly8vLi9qcy9wYWdlcy9vcmRlci9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGFnZXMvb3JkZXIvY3JlYXRlL2FkZHJlc3Nlcy1yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wYWdlcy9vcmRlci9jcmVhdGUvY2FydC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wYWdlcy9vcmRlci9jcmVhdGUvY2FydC1ydWxlLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGFnZXMvb3JkZXIvY3JlYXRlL2N1c3RvbWVyLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGFnZXMvb3JkZXIvY3JlYXRlL2N1c3RvbWVyLXJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL2pzL3BhZ2VzL29yZGVyL2NyZWF0ZS9wcm9kdWN0LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGFnZXMvb3JkZXIvY3JlYXRlL3NoaXBwaW5nLXJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL2pzL3BhZ2VzL29yZGVyL2NyZWF0ZS9ldmVudC1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZm9zX2pzX3JvdXRlcy5qc29uP2ExOTkiLCJ3ZWJwYWNrOi8vLy4vanMvcGFnZXMvb3JkZXIvY3JlYXRlL2NhcnQtZWRpdG9yLmpzIiwid2VicGFjazovLy8uL34vZm9zLXJvdXRpbmcvZGlzdC9yb3V0aW5nLmpzP2EzNjMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsIkNhcnRSdWxlc1JlbmRlcmVyIiwiJGNhcnRSdWxlc0Jsb2NrIiwiY3JlYXRlT3JkZXJNYXAiLCJjYXJ0UnVsZXNCbG9jayIsIiRjYXJ0UnVsZXNUYWJsZSIsImNhcnRSdWxlc1RhYmxlIiwiJHNlYXJjaFJlc3VsdEJveCIsImNhcnRSdWxlc1NlYXJjaFJlc3VsdEJveCIsImNhcnRSdWxlcyIsImVtcHR5Q2FydCIsIl9oaWRlRXJyb3JCbG9jayIsIl9oaWRlQ2FydFJ1bGVzQmxvY2siLCJfc2hvd0NhcnRSdWxlc0Jsb2NrIiwibGVuZ3RoIiwiX2hpZGVDYXJ0UnVsZXNMaXN0IiwiX3JlbmRlckxpc3QiLCJzZWFyY2hSZXN1bHRzIiwiX2NsZWFyU2VhcmNoUmVzdWx0cyIsImNhcnRfcnVsZXMiLCJfcmVuZGVyTm90Rm91bmQiLCJfcmVuZGVyRm91bmRDYXJ0UnVsZXMiLCJfc2hvd1Jlc3VsdHNEcm9wZG93biIsIm1lc3NhZ2UiLCJjYXJ0UnVsZUVycm9yVGV4dCIsInRleHQiLCJfc2hvd0Vycm9yQmxvY2siLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiJHRlbXBsYXRlIiwiY2FydFJ1bGVzTm90Rm91bmRUZW1wbGF0ZSIsImh0bWwiLCJjbG9uZSIsImVtcHR5IiwiJGNhcnRSdWxlVGVtcGxhdGUiLCJmb3VuZENhcnRSdWxlVGVtcGxhdGUiLCJrZXkiLCJjYXJ0UnVsZSIsImNhcnRSdWxlTmFtZSIsIm5hbWUiLCJjb2RlIiwiZGF0YSIsImNhcnRSdWxlSWQiLCJhcHBlbmQiLCJfY2xlYW5DYXJ0UnVsZXNMaXN0IiwiJGNhcnRSdWxlc1RhYmxlUm93VGVtcGxhdGUiLCJjYXJ0UnVsZXNUYWJsZVJvd1RlbXBsYXRlIiwiZmluZCIsImNhcnRSdWxlTmFtZUZpZWxkIiwiY2FydFJ1bGVEZXNjcmlwdGlvbkZpZWxkIiwiZGVzY3JpcHRpb24iLCJjYXJ0UnVsZVZhbHVlRmllbGQiLCJ2YWx1ZSIsImNhcnRSdWxlRGVsZXRlQnRuIiwiX3Nob3dDYXJ0UnVsZXNMaXN0IiwiY2FydFJ1bGVFcnJvckJsb2NrIiwiUHJvZHVjdFJlbmRlcmVyIiwiJHByb2R1Y3RzVGFibGUiLCJwcm9kdWN0c1RhYmxlIiwicHJvZHVjdHMiLCJfY2xlYW5Qcm9kdWN0c0xpc3QiLCJfaGlkZVByb2R1Y3RzTGlzdCIsIiRwcm9kdWN0c1RhYmxlUm93VGVtcGxhdGUiLCJwcm9kdWN0c1RhYmxlUm93VGVtcGxhdGUiLCJwcm9kdWN0IiwicHJvZHVjdEltYWdlRmllbGQiLCJpbWFnZUxpbmsiLCJwcm9kdWN0TmFtZUZpZWxkIiwicHJvZHVjdEF0dHJGaWVsZCIsImF0dHJpYnV0ZSIsInByb2R1Y3RSZWZlcmVuY2VGaWVsZCIsInJlZmVyZW5jZSIsInByb2R1Y3RVbml0UHJpY2VJbnB1dCIsInVuaXRQcmljZSIsInByb2R1Y3RUb3RhbFByaWNlRmllbGQiLCJwcmljZSIsInByb2R1Y3RSZW1vdmVCdG4iLCJwcm9kdWN0SWQiLCJhdHRyaWJ1dGVJZCIsImN1c3RvbWl6YXRpb25JZCIsIl9zaG93VGF4V2FybmluZyIsIl9zaG93UHJvZHVjdHNMaXN0IiwiZm91bmRQcm9kdWN0cyIsIl9jbGVhblNlYXJjaFJlc3VsdHMiLCJfc2hvd05vdEZvdW5kIiwiX2hpZGVUYXhXYXJuaW5nIiwiX3JlbmRlckZvdW5kUHJvZHVjdHMiLCJfaGlkZU5vdEZvdW5kIiwiX3Nob3dSZXN1bHRCbG9jayIsInJlbmRlclN0b2NrIiwic3RvY2siLCJfcmVuZGVyQ29tYmluYXRpb25zIiwiY29tYmluYXRpb25zIiwiX3JlbmRlckN1c3RvbWl6YXRpb25zIiwiY3VzdG9taXphdGlvbl9maWVsZHMiLCJpblN0b2NrQ291bnRlciIsInF1YW50aXR5SW5wdXQiLCJhdHRyIiwiZm9ybWF0dGVkX3ByaWNlIiwicHJvZHVjdFNlbGVjdCIsInByb2R1Y3RfaWQiLCJjb21iaW5hdGlvbnNTZWxlY3QiLCJfY2xlYW5Db21iaW5hdGlvbnMiLCJfaGlkZUNvbWJpbmF0aW9ucyIsImNvbWJpbmF0aW9uIiwiYXR0cmlidXRlX2NvbWJpbmF0aW9uX2lkIiwiX3Nob3dDb21iaW5hdGlvbnMiLCJjdXN0b21pemF0aW9uRmllbGRzIiwiZmllbGRUeXBlRmlsZSIsImZpZWxkVHlwZVRleHQiLCJfY2xlYW5DdXN0b21pemF0aW9ucyIsIl9oaWRlQ3VzdG9taXphdGlvbnMiLCIkY3VzdG9tRmllbGRzQ29udGFpbmVyIiwicHJvZHVjdEN1c3RvbUZpZWxkc0NvbnRhaW5lciIsIiRmaWxlSW5wdXRUZW1wbGF0ZSIsInByb2R1Y3RDdXN0b21GaWxlVGVtcGxhdGUiLCIkdGV4dElucHV0VGVtcGxhdGUiLCJwcm9kdWN0Q3VzdG9tVGV4dFRlbXBsYXRlIiwidGVtcGxhdGVUeXBlTWFwIiwiY3VzdG9tRmllbGQiLCJ0eXBlIiwicHJvZHVjdEN1c3RvbUlucHV0IiwiY3VzdG9taXphdGlvbl9maWVsZF9pZCIsInByb2R1Y3RDdXN0b21JbnB1dExhYmVsIiwiX3Nob3dDdXN0b21pemF0aW9ucyIsInByb2R1Y3RDdXN0b21pemF0aW9uQ29udGFpbmVyIiwicHJvZHVjdFJlc3VsdEJsb2NrIiwiY29tYmluYXRpb25zUm93IiwicHJvZHVjdFRheFdhcm5pbmciLCJub1Byb2R1Y3RzRm91bmRXYXJuaW5nIiwiRXZlbnRFbWl0dGVyIiwiRXZlbnRFbWl0dGVyQ2xhc3MiLCJDcmVhdGVPcmRlclBhZ2UiLCJjYXJ0SWQiLCIkY29udGFpbmVyIiwib3JkZXJDcmVhdGlvbkNvbnRhaW5lciIsImNhcnRQcm92aWRlciIsIkNhcnRQcm92aWRlciIsImN1c3RvbWVyTWFuYWdlciIsIkN1c3RvbWVyTWFuYWdlciIsInNoaXBwaW5nUmVuZGVyZXIiLCJTaGlwcGluZ1JlbmRlcmVyIiwiYWRkcmVzc2VzUmVuZGVyZXIiLCJBZGRyZXNzZXNSZW5kZXJlciIsImNhcnRSdWxlc1JlbmRlcmVyIiwicm91dGVyIiwiUm91dGVyIiwiY2FydEVkaXRvciIsIkNhcnRFZGl0b3IiLCJjYXJ0UnVsZU1hbmFnZXIiLCJDYXJ0UnVsZU1hbmFnZXIiLCJwcm9kdWN0TWFuYWdlciIsIlByb2R1Y3RNYW5hZ2VyIiwicHJvZHVjdFJlbmRlcmVyIiwiX2luaXRMaXN0ZW5lcnMiLCJvbiIsImN1c3RvbWVyU2VhcmNoSW5wdXQiLCJfaW5pdEN1c3RvbWVyU2VhcmNoIiwiZSIsImNob29zZUN1c3RvbWVyQnRuIiwiX2luaXRDdXN0b21lclNlbGVjdCIsInVzZUNhcnRCdG4iLCJfaW5pdENhcnRTZWxlY3QiLCJ1c2VPcmRlckJ0biIsIl9pbml0RHVwbGljYXRlT3JkZXJDYXJ0IiwicHJvZHVjdFNlYXJjaCIsIl9pbml0UHJvZHVjdFNlYXJjaCIsImNhcnRSdWxlU2VhcmNoSW5wdXQiLCJfaW5pdENhcnRSdWxlU2VhcmNoIiwic3RvcFNlYXJjaGluZyIsIl9pbml0Q2FydEVkaXRpbmciLCJfb25DYXJ0TG9hZGVkIiwiX29uQ2FydEFkZHJlc3Nlc0NoYW5nZWQiLCJkZWxpdmVyeU9wdGlvblNlbGVjdCIsImNoYW5nZURlbGl2ZXJ5T3B0aW9uIiwiY3VycmVudFRhcmdldCIsImZyZWVTaGlwcGluZ1N3aXRjaCIsInNldEZyZWVTaGlwcGluZyIsImFkZFRvQ2FydEJ1dHRvbiIsImFkZFByb2R1Y3RUb0NhcnQiLCJhZGRyZXNzU2VsZWN0IiwiX2NoYW5nZUNhcnRBZGRyZXNzZXMiLCJfaW5pdFByb2R1Y3RSZW1vdmVGcm9tQ2FydCIsIl9hZGRDYXJ0UnVsZVRvQ2FydCIsIl9yZW1vdmVDYXJ0UnVsZUZyb21DYXJ0IiwiZXZlbnRNYXAiLCJjYXJ0TG9hZGVkIiwiY2FydEluZm8iLCJfcmVuZGVyQ2FydEluZm8iLCJsb2FkQ3VzdG9tZXJDYXJ0cyIsImxvYWRDdXN0b21lck9yZGVycyIsImNhcnRBZGRyZXNzZXNDaGFuZ2VkIiwicmVuZGVyIiwiYWRkcmVzc2VzIiwic2hpcHBpbmciLCJjYXJ0RGVsaXZlcnlPcHRpb25DaGFuZ2VkIiwiY2FydEZyZWVTaGlwcGluZ1NldCIsImV2ZW50Iiwic2V0VGltZW91dCIsInNlYXJjaCIsInZhbCIsImN1c3RvbWVySWQiLCJzZWxlY3RDdXN0b21lciIsImxvYWRFbXB0eUNhcnQiLCJnZXRDYXJ0Iiwib3JkZXJJZCIsImR1cGxpY2F0ZU9yZGVyQ2FydCIsInNlYXJjaFBocmFzZSIsImZvdW5kQ2FydFJ1bGVMaXN0SXRlbSIsInByZXZlbnREZWZhdWx0IiwiYWRkQ2FydFJ1bGVUb0NhcnQiLCJibHVyIiwicmVtb3ZlQ2FydFJ1bGVGcm9tQ2FydCIsIiRwcm9kdWN0U2VhcmNoSW5wdXQiLCJyZW1vdmVQcm9kdWN0RnJvbUNhcnQiLCJyZW5kZXJDYXJ0UnVsZXNCbG9jayIsInJlbmRlckxpc3QiLCJjYXJ0QmxvY2siLCJkZWxpdmVyeUFkZHJlc3NJZCIsImRlbGl2ZXJ5QWRkcmVzc1NlbGVjdCIsImludm9pY2VBZGRyZXNzSWQiLCJpbnZvaWNlQWRkcmVzc1NlbGVjdCIsImNoYW5nZUNhcnRBZGRyZXNzZXMiLCJjdXN0b21lclNlYXJjaFJlc3VsdHNCbG9jayIsImN1c3RvbWVyU2VhcmNoUmVzdWx0VGVtcGxhdGUiLCJjaGFuZ2VDdXN0b21lckJ0biIsImN1c3RvbWVyU2VhcmNoUm93Iiwibm90U2VsZWN0ZWRDdXN0b21lclNlYXJjaFJlc3VsdHMiLCJjdXN0b21lclNlYXJjaFJlc3VsdE5hbWUiLCJjdXN0b21lclNlYXJjaFJlc3VsdEVtYWlsIiwiY3VzdG9tZXJTZWFyY2hSZXN1bHRJZCIsImN1c3RvbWVyU2VhcmNoUmVzdWx0QmlydGhkYXkiLCJjdXN0b21lckRldGFpbHNCdG4iLCJjdXN0b21lclNlYXJjaFJlc3VsdENvbHVtbiIsImN1c3RvbWVyU2VhcmNoQmxvY2siLCJjdXN0b21lckNhcnRzVGFiIiwiY3VzdG9tZXJPcmRlcnNUYWIiLCJjdXN0b21lckNhcnRzVGFibGUiLCJjdXN0b21lckNhcnRzVGFibGVSb3dUZW1wbGF0ZSIsImN1c3RvbWVyQ2hlY2tvdXRIaXN0b3J5IiwiY3VzdG9tZXJPcmRlcnNUYWJsZSIsImN1c3RvbWVyT3JkZXJzVGFibGVSb3dUZW1wbGF0ZSIsImNhcnREZXRhaWxzQnRuIiwiY2FydElkRmllbGQiLCJjYXJ0RGF0ZUZpZWxkIiwiY2FydFRvdGFsRmllbGQiLCJvcmRlckRldGFpbHNCdG4iLCJvcmRlcklkRmllbGQiLCJvcmRlckRhdGVGaWVsZCIsIm9yZGVyUHJvZHVjdHNGaWVsZCIsIm9yZGVyVG90YWxGaWVsZCIsIm9yZGVyU3RhdHVzRmllbGQiLCJhZGRyZXNzZXNCbG9jayIsImRlbGl2ZXJ5QWRkcmVzc0RldGFpbHMiLCJpbnZvaWNlQWRkcmVzc0RldGFpbHMiLCJhZGRyZXNzZXNDb250ZW50IiwiYWRkcmVzc2VzV2FybmluZyIsInN1bW1hcnlCbG9jayIsInNoaXBwaW5nQmxvY2siLCJzaGlwcGluZ0Zvcm0iLCJub0NhcnJpZXJCbG9jayIsInRvdGFsU2hpcHBpbmdGaWVsZCIsImNvbWJpbmF0aW9uc1RlbXBsYXRlIiwicHJvZHVjdFNlbGVjdFJvdyIsInF1YW50aXR5Um93IiwiUm91dGluZyIsInNldERhdGEiLCJyb3V0ZXMiLCJzZXRCYXNlVXJsIiwiZG9jdW1lbnQiLCJyb3V0ZSIsInBhcmFtcyIsInRva2VuaXplZFBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsIl90b2tlbiIsImdlbmVyYXRlIiwicmVhZHkiLCJkZWxpdmVyeUFkZHJlc3NEZXRhaWxzQ29udGVudCIsImludm9pY2VBZGRyZXNzRGV0YWlsc0NvbnRlbnQiLCIkZGVsaXZlcnlBZGRyZXNzRGV0YWlscyIsImNyZWF0ZU9yZGVyUGFnZU1hcCIsIiRpbnZvaWNlQWRkcmVzc0RldGFpbHMiLCIkZGVsaXZlcnlBZGRyZXNzU2VsZWN0IiwiJGludm9pY2VBZGRyZXNzU2VsZWN0IiwiJGFkZHJlc3Nlc0NvbnRlbnQiLCIkYWRkcmVzc2VzV2FybmluZ0NvbnRlbnQiLCJrZXlzIiwiYWRkcmVzcyIsImRlbGl2ZXJ5QWRkcmVzc09wdGlvbiIsImFkZHJlc3NJZCIsImFsaWFzIiwiaW52b2ljZUFkZHJlc3NPcHRpb24iLCJkZWxpdmVyeSIsImZvcm1hdHRlZEFkZHJlc3MiLCJzZWxlY3RlZCIsImludm9pY2UiLCJfc2hvd0FkZHJlc3Nlc0Jsb2NrIiwiZ2V0IiwidGhlbiIsImVtaXQiLCJwb3N0IiwiY3VzdG9tZXJfaWQiLCIkc2VhcmNoSW5wdXQiLCJfc2VhcmNoIiwiaGlkZVJlc3VsdHNEcm9wZG93biIsIl9vbkNhcnRSdWxlU2VhcmNoIiwiX29uQWRkQ2FydFJ1bGVUb0NhcnQiLCJfb25BZGRDYXJ0UnVsZVRvQ2FydEZhaWx1cmUiLCJfb25SZW1vdmVDYXJ0UnVsZUZyb21DYXJ0IiwiY2FydFJ1bGVTZWFyY2hlZCIsInJlbmRlclNlYXJjaFJlc3VsdHMiLCJjYXJ0UnVsZUFkZGVkIiwiY2FydFJ1bGVGYWlsZWRUb0FkZCIsImRpc3BsYXlFcnJvck1lc3NhZ2UiLCJjYXJ0UnVsZVJlbW92ZWQiLCJzZWFyY2hfcGhyYXNlIiwiY2F0Y2giLCJzaG93RXJyb3JNZXNzYWdlIiwicmVzcG9uc2VKU09OIiwiYWN0aXZlU2VhcmNoUmVxdWVzdCIsIiRjdXN0b21lclNlYXJjaFJlc3VsdEJsb2NrIiwiY3VzdG9tZXJSZW5kZXJlciIsIkN1c3RvbWVyUmVuZGVyZXIiLCJfc2VsZWN0Q3VzdG9tZXIiLCJfbG9hZEN1c3RvbWVyQ2FydHMiLCJjdXJyZW50Q2FydElkIiwiX2xvYWRDdXN0b21lck9yZGVycyIsIl9jaGFuZ2VDdXN0b21lciIsIl9vbkN1c3RvbWVyU2VhcmNoIiwiX29uQ3VzdG9tZXJTZWxlY3QiLCJjdXN0b21lclNlYXJjaGVkIiwicmVzcG9uc2UiLCJjdXN0b21lcnMiLCJjdXN0b21lclNlbGVjdGVkIiwiJGNob29zZUJ0biIsImRpc3BsYXlTZWxlY3RlZEN1c3RvbWVyQmxvY2siLCJzaG93Q3VzdG9tZXJTZWFyY2giLCJyZW5kZXJDYXJ0cyIsImNhcnRzIiwicmVuZGVyT3JkZXJzIiwib3JkZXJzIiwiY2hvb3NlQ3VzdG9tZXJFdmVudCIsImFib3J0IiwiJHNlYXJjaFJlcXVlc3QiLCJjdXN0b21lcl9zZWFyY2giLCJzdGF0dXNUZXh0IiwiZm91bmRDdXN0b21lcnMiLCJfY2xlYXJTaG93bkN1c3RvbWVycyIsIl9zaG93Tm90Rm91bmRDdXN0b21lcnMiLCJjdXN0b21lclJlc3VsdCIsImN1c3RvbWVyIiwiaWQiLCJmaXJzdE5hbWUiLCJmaXJzdG5hbWUiLCJsYXN0TmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJiaXJ0aGRheSIsIl9yZW5kZXJGb3VuZEN1c3RvbWVyIiwiJHRhcmdldGVkQnRuIiwiJGN1c3RvbWVyQ2FyZCIsImNsb3Nlc3QiLCJyZW1vdmUiLCIkY2FydHNUYWJsZSIsIiRjYXJ0c1RhYmxlUm93VGVtcGxhdGUiLCJfc2hvd0NoZWNrb3V0SGlzdG9yeUJsb2NrIiwiY2FydCIsImNyZWF0aW9uRGF0ZSIsInRvdGFsUHJpY2UiLCJwcm9wIiwiJG9yZGVyc1RhYmxlIiwiJHJvd1RlbXBsYXRlIiwib3JkZXIiLCJvcmRlclBsYWNlZERhdGUiLCJ0b3RhbFByb2R1Y3RzQ291bnQiLCJ0b3RhbFBhaWQiLCJvcmRlclN0YXR1cyIsIiRjdXN0b21lclNlYXJjaFJlc3VsdFRlbXBsYXRlIiwiJGVtcHR5UmVzdWx0VGVtcGxhdGUiLCJzZWxlY3RlZFByb2R1Y3RJZCIsInNlbGVjdGVkQ29tYmluYXRpb25JZCIsImFkZFByb2R1Y3QiLCJfZ2V0UHJvZHVjdERhdGEiLCJfaW5pdFByb2R1Y3RTZWxlY3QiLCJfaW5pdENvbWJpbmF0aW9uU2VsZWN0IiwiX29uUHJvZHVjdFNlYXJjaCIsIl9vbkFkZFByb2R1Y3RUb0NhcnQiLCJfb25SZW1vdmVQcm9kdWN0RnJvbUNhcnQiLCJwcm9kdWN0U2VhcmNoZWQiLCJKU09OIiwicGFyc2UiLCJfc2VsZWN0Rmlyc3RSZXN1bHQiLCJwcm9kdWN0QWRkZWRUb0NhcnQiLCJwcm9kdWN0UmVtb3ZlZEZyb21DYXJ0IiwiTnVtYmVyIiwiX3NlbGVjdFByb2R1Y3QiLCJjb21iaW5hdGlvbklkIiwiX3NlbGVjdENvbWJpbmF0aW9uIiwiX3Vuc2V0UHJvZHVjdCIsIl91bnNldENvbWJpbmF0aW9uIiwicmVuZGVyUHJvZHVjdE1ldGFkYXRhIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIl9nZXRDdXN0b21GaWVsZHNEYXRhIiwiJGN1c3RvbUZpZWxkcyIsImVhY2giLCJmaWVsZCIsIiRmaWVsZCIsImZpbGVzIiwiJGZvcm0iLCIkbm9DYXJyaWVyQmxvY2siLCJzaGlwcGluZ0lzQXZhaWxhYmxlIiwiX2hpZGVDb250YWluZXIiLCJfZGlzcGxheUZvcm0iLCJfZGlzcGxheU5vQ2FycmllcnNXYXJuaW5nIiwiX2hpZGVOb0NhcnJpZXJCbG9jayIsIl9yZW5kZXJEZWxpdmVyeU9wdGlvbnMiLCJkZWxpdmVyeU9wdGlvbnMiLCJzZWxlY3RlZENhcnJpZXJJZCIsIl9yZW5kZXJUb3RhbFNoaXBwaW5nIiwic2hpcHBpbmdQcmljZSIsIl9zaG93Rm9ybSIsIl9zaG93Q29udGFpbmVyIiwiX2hpZGVGb3JtIiwiX3Nob3dOb0NhcnJpZXJCbG9jayIsInNlbGVjdGVkVmFsIiwiJGRlbGl2ZXJ5T3B0aW9uU2VsZWN0Iiwib3B0aW9uIiwiZGVsaXZlcnlPcHRpb24iLCJjYXJyaWVySWQiLCJjYXJyaWVyTmFtZSIsImNhcnJpZXJEZWxheSIsIiR0b3RhbFNoaXBwaW5nRmllbGQiLCJmcmVlU2hpcHBpbmciLCJhamF4IiwibWV0aG9kIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7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bUQsc0JBQXNCLDJCQUEyQix1QkFBdUIsNkJBQTZCLDRCQUE0Qiw0QkFBNEIsaUNBQWlDLDRCQUE0QiwwQkFBMEIsNEJBQTRCLDBCQUEwQiwyQkFBMkIsK0JBQStCLDBCQUEwQix3QkFBd0IseUJBQXlCLDZCQUE2Qix1Q0FBdUMseUJBQXlCLDJDQUEyQyxvSEFBb0gsK0ZBQStGLDhDQUE4QyxTQUFTLDJCQUEyQixnQ0FBZ0Msa0RBQWtELGlGQUFpRiwwQkFBMEIsK0JBQStCLDJCQUEyQixjQUFjLCtCQUErQixzQ0FBc0MsNENBQTRDLHNCQUFzQixxQkFBcUIsUUFBUSxvQkFBb0IscUNBQXFDLE1BQU0sU0FBUyxpQ0FBaUMsNkJBQTZCLEtBQUssWUFBWSx3RUFBd0UsNkJBQTZCLFdBQVcsZ0RBQWdELHdDQUF3QyxLQUFLLHVCQUF1QixPQUFPLCtEQUErRCx3REFBd0QsTUFBTSxrRUFBa0UsdUZBQXVGLHNQQUFzUCx5QkFBeUIsUUFBUSxzR0FBc0csbUNBQW1DLG9DQUFvQywwQ0FBMEMsU0FBUywwQkFBMEIsMkhBQTJILHNCQUFzQiwwQ0FBMEMsMkIiLCJmaWxlIjoib3JkZXJfY3JlYXRlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzc1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMzU5OGY4MDk1NjJlNWEyZjEwMiIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5cbmltcG9ydCBjcmVhdGVPcmRlck1hcCBmcm9tICcuL2NyZWF0ZS1vcmRlci1tYXAnO1xuXG5jb25zdCAkID0gd2luZG93LiQ7XG5cbi8qKlxuICogUmVuZGVycyBjYXJ0IHJ1bGVzIChjYXJ0UnVsZXMpIGJsb2NrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRSdWxlc1JlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kY2FydFJ1bGVzQmxvY2sgPSAkKGNyZWF0ZU9yZGVyTWFwLmNhcnRSdWxlc0Jsb2NrKTtcbiAgICB0aGlzLiRjYXJ0UnVsZXNUYWJsZSA9ICQoY3JlYXRlT3JkZXJNYXAuY2FydFJ1bGVzVGFibGUpO1xuICAgIHRoaXMuJHNlYXJjaFJlc3VsdEJveCA9ICQoY3JlYXRlT3JkZXJNYXAuY2FydFJ1bGVzU2VhcmNoUmVzdWx0Qm94KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgcmVuZGVyaW5nIGNhcnRSdWxlcyAoYS5rLmEgY2FydCBydWxlcy9kaXNjb3VudHMpIGJsb2NrXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGNhcnRSdWxlc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGVtcHR5Q2FydFxuICAgKi9cbiAgcmVuZGVyQ2FydFJ1bGVzQmxvY2soY2FydFJ1bGVzLCBlbXB0eUNhcnQpIHtcbiAgICB0aGlzLl9oaWRlRXJyb3JCbG9jaygpO1xuICAgIC8vIGRvIG5vdCByZW5kZXIgY2FydCBydWxlcyBibG9jayBhdCBhbGwgaWYgY2FydCBoYXMgbm8gcHJvZHVjdHNcbiAgICBpZiAoZW1wdHlDYXJ0KSB7XG4gICAgICB0aGlzLl9oaWRlQ2FydFJ1bGVzQmxvY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2hvd0NhcnRSdWxlc0Jsb2NrKCk7XG5cbiAgICAvLyBkbyBub3QgcmVuZGVyIGNhcnQgcnVsZXMgbGlzdCB3aGVuIHRoZXJlIGFyZSBubyBjYXJ0IHJ1bGVzXG4gICAgaWYgKGNhcnRSdWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2hpZGVDYXJ0UnVsZXNMaXN0KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJMaXN0KGNhcnRSdWxlcyk7XG4gIH1cblxuICAvKipcbiAgICogUmVzcG9uc2libGUgZm9yIHJlbmRlcmluZyBzZWFyY2ggcmVzdWx0cyBkcm9wZG93blxuICAgKlxuICAgKiBAcGFyYW0gc2VhcmNoUmVzdWx0c1xuICAgKi9cbiAgcmVuZGVyU2VhcmNoUmVzdWx0cyhzZWFyY2hSZXN1bHRzKSB7XG4gICAgdGhpcy5fY2xlYXJTZWFyY2hSZXN1bHRzKCk7XG5cbiAgICBpZiAoc2VhcmNoUmVzdWx0cy5jYXJ0X3J1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fcmVuZGVyTm90Rm91bmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyRm91bmRDYXJ0UnVsZXMoc2VhcmNoUmVzdWx0cy5jYXJ0X3J1bGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zaG93UmVzdWx0c0Ryb3Bkb3duKCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheXMgZXJyb3IgbWVzc2FnZSBiZWxsb3cgc2VhcmNoIGlucHV0XG4gICAqXG4gICAqIEBwYXJhbSBtZXNzYWdlXG4gICAqL1xuICBkaXNwbGF5RXJyb3JNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAkKGNyZWF0ZU9yZGVyTWFwLmNhcnRSdWxlRXJyb3JUZXh0KS50ZXh0KG1lc3NhZ2UpO1xuICAgIHRoaXMuX3Nob3dFcnJvckJsb2NrKCk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgY2FydCBydWxlcyBzZWFyY2ggcmVzdWx0IGRyb3Bkb3duXG4gICAqL1xuICBoaWRlUmVzdWx0c0Ryb3Bkb3duKCkge1xuICAgIHRoaXMuJHNlYXJjaFJlc3VsdEJveC5hZGRDbGFzcygnZC1ub25lJyk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheXMgY2FydCBydWxlcyBzZWFyY2ggcmVzdWx0IGRyb3Bkb3duXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2hvd1Jlc3VsdHNEcm9wZG93bigpIHtcbiAgICB0aGlzLiRzZWFyY2hSZXN1bHRCb3gucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgd2FybmluZyB0aGF0IG5vIGNhcnQgcnVsZSB3YXMgZm91bmRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZW5kZXJOb3RGb3VuZCgpIHtcbiAgICBjb25zdCAkdGVtcGxhdGUgPSAkKCQoY3JlYXRlT3JkZXJNYXAuY2FydFJ1bGVzTm90Rm91bmRUZW1wbGF0ZSkuaHRtbCgpKS5jbG9uZSgpO1xuICAgIHRoaXMuJHNlYXJjaFJlc3VsdEJveC5odG1sKCR0ZW1wbGF0ZSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBFbXB0aWVzIGNhcnQgcnVsZSBzZWFyY2ggcmVzdWx0cyBibG9ja1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NsZWFyU2VhcmNoUmVzdWx0cygpIHtcbiAgICB0aGlzLiRzZWFyY2hSZXN1bHRCb3guZW1wdHkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGZvdW5kIGNhcnQgcnVsZXMgYWZ0ZXIgc2VhcmNoXG4gICAqXG4gICAqIEBwYXJhbSBjYXJ0UnVsZXNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZW5kZXJGb3VuZENhcnRSdWxlcyhjYXJ0UnVsZXMpIHtcbiAgICBjb25zdCAkY2FydFJ1bGVUZW1wbGF0ZSA9ICQoJChjcmVhdGVPcmRlck1hcC5mb3VuZENhcnRSdWxlVGVtcGxhdGUpLmh0bWwoKSk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2FydFJ1bGVzKSB7XG4gICAgICBjb25zdCAkdGVtcGxhdGUgPSAkY2FydFJ1bGVUZW1wbGF0ZS5jbG9uZSgpO1xuICAgICAgY29uc3QgY2FydFJ1bGUgPSBjYXJ0UnVsZXNba2V5XTtcblxuICAgICAgbGV0IGNhcnRSdWxlTmFtZSA9IGNhcnRSdWxlLm5hbWU7XG4gICAgICBpZiAoY2FydFJ1bGUuY29kZSAhPT0gJycpIHtcbiAgICAgICAgY2FydFJ1bGVOYW1lID0gYCR7Y2FydFJ1bGUubmFtZX0gLSAke2NhcnRSdWxlLmNvZGV9YDtcbiAgICAgIH1cblxuICAgICAgJHRlbXBsYXRlLnRleHQoY2FydFJ1bGVOYW1lKTtcbiAgICAgICR0ZW1wbGF0ZS5kYXRhKCdjYXJ0LXJ1bGUtaWQnLCBjYXJ0UnVsZS5jYXJ0UnVsZUlkKTtcbiAgICAgIHRoaXMuJHNlYXJjaFJlc3VsdEJveC5hcHBlbmQoJHRlbXBsYXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzcG9uc2libGUgZm9yIHJlbmRlcmluZyB0aGUgbGlzdCBvZiBjYXJ0IHJ1bGVzXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGNhcnRSdWxlc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlbmRlckxpc3QoY2FydFJ1bGVzKSB7XG4gICAgdGhpcy5fY2xlYW5DYXJ0UnVsZXNMaXN0KCk7XG4gICAgY29uc3QgJGNhcnRSdWxlc1RhYmxlUm93VGVtcGxhdGUgPSAkKCQoY3JlYXRlT3JkZXJNYXAuY2FydFJ1bGVzVGFibGVSb3dUZW1wbGF0ZSkuaHRtbCgpKTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGNhcnRSdWxlcykge1xuICAgICAgY29uc3QgY2FydFJ1bGUgPSBjYXJ0UnVsZXNba2V5XTtcbiAgICAgIGNvbnN0ICR0ZW1wbGF0ZSA9ICRjYXJ0UnVsZXNUYWJsZVJvd1RlbXBsYXRlLmNsb25lKCk7XG5cbiAgICAgICR0ZW1wbGF0ZS5maW5kKGNyZWF0ZU9yZGVyTWFwLmNhcnRSdWxlTmFtZUZpZWxkKS50ZXh0KGNhcnRSdWxlLm5hbWUpO1xuICAgICAgJHRlbXBsYXRlLmZpbmQoY3JlYXRlT3JkZXJNYXAuY2FydFJ1bGVEZXNjcmlwdGlvbkZpZWxkKS50ZXh0KGNhcnRSdWxlLmRlc2NyaXB0aW9uKTtcbiAgICAgICR0ZW1wbGF0ZS5maW5kKGNyZWF0ZU9yZGVyTWFwLmNhcnRSdWxlVmFsdWVGaWVsZCkudGV4dChjYXJ0UnVsZS52YWx1ZSk7XG4gICAgICAkdGVtcGxhdGUuZmluZChjcmVhdGVPcmRlck1hcC5jYXJ0UnVsZURlbGV0ZUJ0bikuZGF0YSgnY2FydC1ydWxlLWlkJywgY2FydFJ1bGUuY2FydFJ1bGVJZCk7XG5cbiAgICAgIHRoaXMuJGNhcnRSdWxlc1RhYmxlLmZpbmQoJ3Rib2R5JykuYXBwZW5kKCR0ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fc2hvd0NhcnRSdWxlc0xpc3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBlcnJvciBibG9ja1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3Nob3dFcnJvckJsb2NrKCkge1xuICAgICQoY3JlYXRlT3JkZXJNYXAuY2FydFJ1bGVFcnJvckJsb2NrKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgZXJyb3IgYmxvY2tcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oaWRlRXJyb3JCbG9jaygpIHtcbiAgICAkKGNyZWF0ZU9yZGVyTWFwLmNhcnRSdWxlRXJyb3JCbG9jaykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGNhcnRSdWxlcyBibG9ja1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3Nob3dDYXJ0UnVsZXNCbG9jaygpIHtcbiAgICB0aGlzLiRjYXJ0UnVsZXNCbG9jay5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIH1cblxuICAvKipcbiAgICogaGlkZSBjYXJ0UnVsZXMgYmxvY2tcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oaWRlQ2FydFJ1bGVzQmxvY2soKSB7XG4gICAgdGhpcy4kY2FydFJ1bGVzQmxvY2suYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgdGhlIGxpc3QgYmxvY2sgb2YgY2FydCBydWxlc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3Nob3dDYXJ0UnVsZXNMaXN0KCkge1xuICAgIHRoaXMuJGNhcnRSdWxlc1RhYmxlLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIGxpc3QgYmxvY2sgb2YgY2FydCBydWxlc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hpZGVDYXJ0UnVsZXNMaXN0KCkge1xuICAgIHRoaXMuJGNhcnRSdWxlc1RhYmxlLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgaXRlbXMgaW4gY2FydCBydWxlcyBsaXN0XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2xlYW5DYXJ0UnVsZXNMaXN0KCkge1xuICAgIHRoaXMuJGNhcnRSdWxlc1RhYmxlLmZpbmQoJ3Rib2R5JykuZW1wdHkoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGFnZXMvb3JkZXIvY3JlYXRlL2NhcnQtcnVsZXMtcmVuZGVyZXIuanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG5pbXBvcnQgY3JlYXRlT3JkZXJNYXAgZnJvbSAnLi9jcmVhdGUtb3JkZXItbWFwJztcblxuY29uc3QgJCA9IHdpbmRvdy4kO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0UmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiRwcm9kdWN0c1RhYmxlID0gJChjcmVhdGVPcmRlck1hcC5wcm9kdWN0c1RhYmxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGNhcnQgcHJvZHVjdHMgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdHNcbiAgICovXG4gIHJlbmRlckxpc3QocHJvZHVjdHMpIHtcbiAgICB0aGlzLl9jbGVhblByb2R1Y3RzTGlzdCgpO1xuXG4gICAgaWYgKHByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5faGlkZVByb2R1Y3RzTGlzdCgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgJHByb2R1Y3RzVGFibGVSb3dUZW1wbGF0ZSA9ICQoJChjcmVhdGVPcmRlck1hcC5wcm9kdWN0c1RhYmxlUm93VGVtcGxhdGUpLmh0bWwoKSk7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9kdWN0cykge1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzW2tleV07XG4gICAgICBjb25zdCAkdGVtcGxhdGUgPSAkcHJvZHVjdHNUYWJsZVJvd1RlbXBsYXRlLmNsb25lKCk7XG5cbiAgICAgICR0ZW1wbGF0ZS5maW5kKGNyZWF0ZU9yZGVyTWFwLnByb2R1Y3RJbWFnZUZpZWxkKS50ZXh0KHByb2R1Y3QuaW1hZ2VMaW5rKTtcbiAgICAgICR0ZW1wbGF0ZS5maW5kKGNyZWF0ZU9yZGVyTWFwLnByb2R1Y3ROYW1lRmllbGQpLnRleHQocHJvZHVjdC5uYW1lKTtcbiAgICAgICR0ZW1wbGF0ZS5maW5kKGNyZWF0ZU9yZGVyTWFwLnByb2R1Y3RBdHRyRmllbGQpLnRleHQocHJvZHVjdC5hdHRyaWJ1dGUpO1xuICAgICAgJHRlbXBsYXRlLmZpbmQoY3JlYXRlT3JkZXJNYXAucHJvZHVjdFJlZmVyZW5jZUZpZWxkKS50ZXh0KHByb2R1Y3QucmVmZXJlbmNlKTtcbiAgICAgICR0ZW1wbGF0ZS5maW5kKGNyZWF0ZU9yZGVyTWFwLnByb2R1Y3RVbml0UHJpY2VJbnB1dCkudGV4dChwcm9kdWN0LnVuaXRQcmljZSk7XG4gICAgICAkdGVtcGxhdGUuZmluZChjcmVhdGVPcmRlck1hcC5wcm9kdWN0VG90YWxQcmljZUZpZWxkKS50ZXh0KHByb2R1Y3QucHJpY2UpO1xuICAgICAgJHRlbXBsYXRlLmZpbmQoY3JlYXRlT3JkZXJNYXAucHJvZHVjdFJlbW92ZUJ0bikuZGF0YSgncHJvZHVjdC1pZCcsIHByb2R1Y3QucHJvZHVjdElkKTtcbiAgICAgICR0ZW1wbGF0ZS5maW5kKGNyZWF0ZU9yZGVyTWFwLnByb2R1Y3RSZW1vdmVCdG4pLmRhdGEoJ2F0dHJpYnV0ZS1pZCcsIHByb2R1Y3QuYXR0cmlidXRlSWQpO1xuICAgICAgJHRlbXBsYXRlLmZpbmQoY3JlYXRlT3JkZXJNYXAucHJvZHVjdFJlbW92ZUJ0bikuZGF0YSgnY3VzdG9taXphdGlvbi1pZCcsIHByb2R1Y3QuY3VzdG9taXphdGlvbklkKTtcblxuICAgICAgdGhpcy4kcHJvZHVjdHNUYWJsZS5maW5kKCd0Ym9keScpLmFwcGVuZCgkdGVtcGxhdGUpO1xuICAgIH1cblxuICAgIHRoaXMuX3Nob3dUYXhXYXJuaW5nKCk7XG4gICAgdGhpcy5fc2hvd1Byb2R1Y3RzTGlzdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgY2FydCBwcm9kdWN0cyBzZWFyY2ggcmVzdWx0cyBibG9ja1xuICAgKlxuICAgKiBAcGFyYW0gZm91bmRQcm9kdWN0c1xuICAgKi9cbiAgcmVuZGVyU2VhcmNoUmVzdWx0cyhmb3VuZFByb2R1Y3RzKSB7XG4gICAgdGhpcy5fY2xlYW5TZWFyY2hSZXN1bHRzKCk7XG4gICAgaWYgKGZvdW5kUHJvZHVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9zaG93Tm90Rm91bmQoKTtcbiAgICAgIHRoaXMuX2hpZGVUYXhXYXJuaW5nKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJGb3VuZFByb2R1Y3RzKGZvdW5kUHJvZHVjdHMpO1xuXG4gICAgdGhpcy5faGlkZU5vdEZvdW5kKCk7XG4gICAgdGhpcy5fc2hvd1RheFdhcm5pbmcoKTtcbiAgICB0aGlzLl9zaG93UmVzdWx0QmxvY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGF2YWlsYWJsZSBmaWVsZHMgcmVsYXRlZCB0byBzZWxlY3RlZCBwcm9kdWN0XG4gICAqXG4gICAqIEBwYXJhbSBwcm9kdWN0XG4gICAqL1xuICByZW5kZXJQcm9kdWN0TWV0YWRhdGEocHJvZHVjdCkge1xuICAgIHRoaXMucmVuZGVyU3RvY2socHJvZHVjdC5zdG9jayk7XG4gICAgdGhpcy5fcmVuZGVyQ29tYmluYXRpb25zKHByb2R1Y3QuY29tYmluYXRpb25zKTtcbiAgICB0aGlzLl9yZW5kZXJDdXN0b21pemF0aW9ucyhwcm9kdWN0LmN1c3RvbWl6YXRpb25fZmllbGRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHN0b2NrIHRleHQgaGVscGVyIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSBzdG9ja1xuICAgKi9cbiAgcmVuZGVyU3RvY2soc3RvY2spIHtcbiAgICAkKGNyZWF0ZU9yZGVyTWFwLmluU3RvY2tDb3VudGVyKS50ZXh0KHN0b2NrKTtcbiAgICAkKGNyZWF0ZU9yZGVyTWFwLnF1YW50aXR5SW5wdXQpLmF0dHIoJ21heCcsIHN0b2NrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGZvdW5kIHByb2R1Y3RzIHNlbGVjdFxuICAgKlxuICAgKiBAcGFyYW0gZm91bmRQcm9kdWN0c1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlbmRlckZvdW5kUHJvZHVjdHMoZm91bmRQcm9kdWN0cykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGZvdW5kUHJvZHVjdHMpIHtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBmb3VuZFByb2R1Y3RzW2tleV07XG5cbiAgICAgIGxldCBuYW1lID0gcHJvZHVjdC5uYW1lO1xuICAgICAgaWYgKHByb2R1Y3QuY29tYmluYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBuYW1lICs9IGAgLSAke3Byb2R1Y3QuZm9ybWF0dGVkX3ByaWNlfWA7XG4gICAgICB9XG5cbiAgICAgICQoY3JlYXRlT3JkZXJNYXAucHJvZHVjdFNlbGVjdCkuYXBwZW5kKGA8b3B0aW9uIHZhbHVlPVwiJHtwcm9kdWN0LnByb2R1Y3RfaWR9XCI+JHtuYW1lfTwvb3B0aW9uPmApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbnMgcHJvZHVjdCBzZWFyY2ggcmVzdWx0IGZpZWxkc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NsZWFuU2VhcmNoUmVzdWx0cygpIHtcbiAgICAkKGNyZWF0ZU9yZGVyTWFwLnByb2R1Y3RTZWxlY3QpLmVtcHR5KCk7XG4gICAgJChjcmVhdGVPcmRlck1hcC5jb21iaW5hdGlvbnNTZWxlY3QpLmVtcHR5KCk7XG4gICAgJChjcmVhdGVPcmRlck1hcC5xdWFudGl0eUlucHV0KS5lbXB0eSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgY29tYmluYXRpb25zIHJvdyB3aXRoIHNlbGVjdCBvcHRpb25zXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGNvbWJpbmF0aW9uc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlbmRlckNvbWJpbmF0aW9ucyhjb21iaW5hdGlvbnMpIHtcbiAgICB0aGlzLl9jbGVhbkNvbWJpbmF0aW9ucygpO1xuXG4gICAgaWYgKGNvbWJpbmF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2hpZGVDb21iaW5hdGlvbnMoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IGluIGNvbWJpbmF0aW9ucykge1xuICAgICAgY29uc3QgY29tYmluYXRpb24gPSBjb21iaW5hdGlvbnNba2V5XTtcblxuICAgICAgJChjcmVhdGVPcmRlck1hcC5jb21iaW5hdGlvbnNTZWxlY3QpLmFwcGVuZChcbiAgICAgICAgYDxvcHRpb25cbiAgICAgICAgICB2YWx1ZT1cIiR7Y29tYmluYXRpb24uYXR0cmlidXRlX2NvbWJpbmF0aW9uX2lkfVwiPlxuICAgICAgICAgICR7Y29tYmluYXRpb24uYXR0cmlidXRlfSAtICR7Y29tYmluYXRpb24uZm9ybWF0dGVkX3ByaWNlfVxuICAgICAgICA8L29wdGlvbj5gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zaG93Q29tYmluYXRpb25zKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgd2VhdGhlciB0byBhZGQgY3VzdG9taXphdGlvbiBmaWVsZHMgdG8gcmVzdWx0IGJsb2NrIGFuZCBhZGRzIHRoZW0gaWYgbmVlZGVkXG4gICAqXG4gICAqIEBwYXJhbSBjdXN0b21pemF0aW9uRmllbGRzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVuZGVyQ3VzdG9taXphdGlvbnMoY3VzdG9taXphdGlvbkZpZWxkcykge1xuICAgIC8vIHJlcHJlc2VudHMgY3VzdG9taXphdGlvbiBmaWVsZCB0eXBlIFwiZmlsZVwiLlxuICAgIGNvbnN0IGZpZWxkVHlwZUZpbGUgPSAwO1xuICAgIC8vIHJlcHJlc2VudHMgY3VzdG9taXphdGlvbiBmaWVsZCB0eXBlIFwidGV4dFwiLlxuICAgIGNvbnN0IGZpZWxkVHlwZVRleHQgPSAxO1xuXG4gICAgdGhpcy5fY2xlYW5DdXN0b21pemF0aW9ucygpO1xuICAgIGlmIChjdXN0b21pemF0aW9uRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5faGlkZUN1c3RvbWl6YXRpb25zKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCAkY3VzdG9tRmllbGRzQ29udGFpbmVyID0gJChjcmVhdGVPcmRlck1hcC5wcm9kdWN0Q3VzdG9tRmllbGRzQ29udGFpbmVyKTtcbiAgICBjb25zdCAkZmlsZUlucHV0VGVtcGxhdGUgPSAkKCQoY3JlYXRlT3JkZXJNYXAucHJvZHVjdEN1c3RvbUZpbGVUZW1wbGF0ZSkuaHRtbCgpKTtcbiAgICBjb25zdCAkdGV4dElucHV0VGVtcGxhdGUgPSAkKCQoY3JlYXRlT3JkZXJNYXAucHJvZHVjdEN1c3RvbVRleHRUZW1wbGF0ZSkuaHRtbCgpKTtcblxuICAgIGNvbnN0IHRlbXBsYXRlVHlwZU1hcCA9IHtcbiAgICAgIFtmaWVsZFR5cGVGaWxlXTogJGZpbGVJbnB1dFRlbXBsYXRlLFxuICAgICAgW2ZpZWxkVHlwZVRleHRdOiAkdGV4dElucHV0VGVtcGxhdGUsXG4gICAgfTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGN1c3RvbWl6YXRpb25GaWVsZHMpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUZpZWxkID0gY3VzdG9taXphdGlvbkZpZWxkc1trZXldO1xuICAgICAgY29uc3QgJHRlbXBsYXRlID0gdGVtcGxhdGVUeXBlTWFwW2N1c3RvbUZpZWxkLnR5cGVdLmNsb25lKCk7XG5cbiAgICAgICR0ZW1wbGF0ZS5maW5kKGNyZWF0ZU9yZGVyTWFwLnByb2R1Y3RDdXN0b21JbnB1dClcbiAgICAgICAgLmF0dHIoJ25hbWUnLCBgY3VzdG9taXphdGlvbnNbJHtjdXN0b21GaWVsZC5jdXN0b21pemF0aW9uX2ZpZWxkX2lkfV1gKTtcbiAgICAgICR0ZW1wbGF0ZS5maW5kKGNyZWF0ZU9yZGVyTWFwLnByb2R1Y3RDdXN0b21JbnB1dExhYmVsKVxuICAgICAgICAuYXR0cignZm9yJywgYGN1c3RvbWl6YXRpb25zWyR7Y3VzdG9tRmllbGQuY3VzdG9taXphdGlvbl9maWVsZF9pZH1dYClcbiAgICAgICAgLnRleHQoY3VzdG9tRmllbGQubmFtZSk7XG5cbiAgICAgICRjdXN0b21GaWVsZHNDb250YWluZXIuYXBwZW5kKCR0ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fc2hvd0N1c3RvbWl6YXRpb25zKCk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgcHJvZHVjdCBjdXN0b21pemF0aW9uIGNvbnRhaW5lclxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3Nob3dDdXN0b21pemF0aW9ucygpIHtcbiAgICAkKGNyZWF0ZU9yZGVyTWFwLnByb2R1Y3RDdXN0b21pemF0aW9uQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgcHJvZHVjdCBjdXN0b21pemF0aW9uIGNvbnRhaW5lclxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hpZGVDdXN0b21pemF0aW9ucygpIHtcbiAgICAkKGNyZWF0ZU9yZGVyTWFwLnByb2R1Y3RDdXN0b21pemF0aW9uQ29udGFpbmVyKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gIH1cblxuICAvKipcbiAgICogRW1wdGllcyBjdXN0b21pemF0aW9uIGZpZWxkcyBjb250YWluZXJcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jbGVhbkN1c3RvbWl6YXRpb25zKCkge1xuICAgICQoY3JlYXRlT3JkZXJNYXAucHJvZHVjdEN1c3RvbUZpZWxkc0NvbnRhaW5lcikuZW1wdHkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyByZXN1bHQgYmxvY2tcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zaG93UmVzdWx0QmxvY2soKSB7XG4gICAgJChjcmVhdGVPcmRlck1hcC5wcm9kdWN0UmVzdWx0QmxvY2spLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyByZXN1bHQgYmxvY2tcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oaWRlUmVzdWx0QmxvY2soKSB7XG4gICAgJChjcmVhdGVPcmRlck1hcC5wcm9kdWN0UmVzdWx0QmxvY2spLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFNob3dzIHByb2R1Y3RzIGxpc3RcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zaG93UHJvZHVjdHNMaXN0KCkge1xuICAgIHRoaXMuJHByb2R1Y3RzVGFibGUucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHByb2R1Y3RzIGxpc3RcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oaWRlUHJvZHVjdHNMaXN0KCkge1xuICAgIHRoaXMuJHByb2R1Y3RzVGFibGUuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtcHRpZXMgcHJvZHVjdHMgbGlzdFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NsZWFuUHJvZHVjdHNMaXN0KCkge1xuICAgIHRoaXMuJHByb2R1Y3RzVGFibGUuZmluZCgndGJvZHknKS5lbXB0eSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtcHRpZXMgY29tYmluYXRpb25zIHNlbGVjdFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NsZWFuQ29tYmluYXRpb25zKCkge1xuICAgICQoY3JlYXRlT3JkZXJNYXAuY29tYmluYXRpb25zU2VsZWN0KS5lbXB0eSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGNvbWJpbmF0aW9ucyByb3dcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zaG93Q29tYmluYXRpb25zKCkge1xuICAgICQoY3JlYXRlT3JkZXJNYXAuY29tYmluYXRpb25zUm93KS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgY29tYmluYXRpb25zIHJvd1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hpZGVDb21iaW5hdGlvbnMoKSB7XG4gICAgJChjcmVhdGVPcmRlck1hcC5jb21iaW5hdGlvbnNSb3cpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyB3YXJuaW5nIG9mIHRheCBpbmNsdWRlZC9leGNsdWRlZFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3Nob3dUYXhXYXJuaW5nKCkge1xuICAgICQoY3JlYXRlT3JkZXJNYXAucHJvZHVjdFRheFdhcm5pbmcpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyB3YXJuaW5nIG9mIHRheCBpbmNsdWRlZC9leGNsdWRlZFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hpZGVUYXhXYXJuaW5nKCkge1xuICAgICQoY3JlYXRlT3JkZXJNYXAucHJvZHVjdFRheFdhcm5pbmcpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBwcm9kdWN0IG5vdCBmb3VuZCB3YXJuaW5nXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2hvd05vdEZvdW5kKCkge1xuICAgICQoY3JlYXRlT3JkZXJNYXAubm9Qcm9kdWN0c0ZvdW5kV2FybmluZykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHByb2R1Y3Qgbm90IGZvdW5kIHdhcm5pbmdcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oaWRlTm90Rm91bmQoKSB7XG4gICAgJChjcmVhdGVPcmRlck1hcC5ub1Byb2R1Y3RzRm91bmRXYXJuaW5nKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BhZ2VzL29yZGVyL2NyZWF0ZS9wcm9kdWN0LXJlbmRlcmVyLmpzIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlckNsYXNzIGZyb20gJ2V2ZW50cyc7XG5cbi8qKlxuICogV2UgaW5zdGFuY2lhdGUgb25lIEV2ZW50RW1pdHRlciAocmVzdHJpY3RlZCB2aWEgYSBjb25zdCkgc28gdGhhdCBldmVyeSBjb21wb25lbnRzXG4gKiByZWdpc3Rlci9kaXNwYXRjaCBvbiB0aGUgc2FtZSBvbmUgYW5kIGNhbiBjb21tdW5pY2F0ZSB3aXRoIGVhY2ggb3RoZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBFdmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyQ2xhc3MoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NvbXBvbmVudHMvZXZlbnQtZW1pdHRlci5qcyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiAkZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiAkZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gJGdldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIFJlZmxlY3RBcHBseSh0aGlzLmxpc3RlbmVyLCB0aGlzLnRhcmdldCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V2ZW50cy9ldmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyA1IDYgNyA4IDExIDEyIDEzIDE0IDMwIDMyIDMzIDM1IDM4IDM5IDQxIDQ1IDQ2IiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuaW1wb3J0IGNyZWF0ZU9yZGVyTWFwIGZyb20gJy4vY3JlYXRlLW9yZGVyLW1hcCc7XG5pbXBvcnQgQ3VzdG9tZXJNYW5hZ2VyIGZyb20gJy4vY3VzdG9tZXItbWFuYWdlcic7XG5pbXBvcnQgU2hpcHBpbmdSZW5kZXJlciBmcm9tICcuL3NoaXBwaW5nLXJlbmRlcmVyJztcbmltcG9ydCBDYXJ0UHJvdmlkZXIgZnJvbSAnLi9jYXJ0LXByb3ZpZGVyJztcbmltcG9ydCBBZGRyZXNzZXNSZW5kZXJlciBmcm9tICcuL2FkZHJlc3Nlcy1yZW5kZXJlcic7XG5pbXBvcnQgQ2FydFJ1bGVzUmVuZGVyZXIgZnJvbSAnLi9jYXJ0LXJ1bGVzLXJlbmRlcmVyJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9yb3V0ZXInO1xuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQgQ2FydEVkaXRvciBmcm9tICcuL2NhcnQtZWRpdG9yJztcbmltcG9ydCBldmVudE1hcCBmcm9tICcuL2V2ZW50LW1hcCc7XG5pbXBvcnQgQ2FydFJ1bGVNYW5hZ2VyIGZyb20gJy4vY2FydC1ydWxlLW1hbmFnZXInO1xuaW1wb3J0IFByb2R1Y3RNYW5hZ2VyIGZyb20gJy4vcHJvZHVjdC1tYW5hZ2VyJztcbmltcG9ydCBQcm9kdWN0UmVuZGVyZXIgZnJvbSAnLi9wcm9kdWN0LXJlbmRlcmVyJztcblxuY29uc3QgJCA9IHdpbmRvdy4kO1xuXG4vKipcbiAqIFBhZ2UgT2JqZWN0IGZvciBcIkNyZWF0ZSBvcmRlclwiIHBhZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlT3JkZXJQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYXJ0SWQgPSBudWxsO1xuICAgIHRoaXMuJGNvbnRhaW5lciA9ICQoY3JlYXRlT3JkZXJNYXAub3JkZXJDcmVhdGlvbkNvbnRhaW5lcik7XG5cbiAgICB0aGlzLmNhcnRQcm92aWRlciA9IG5ldyBDYXJ0UHJvdmlkZXIoKTtcbiAgICB0aGlzLmN1c3RvbWVyTWFuYWdlciA9IG5ldyBDdXN0b21lck1hbmFnZXIoKTtcbiAgICB0aGlzLnNoaXBwaW5nUmVuZGVyZXIgPSBuZXcgU2hpcHBpbmdSZW5kZXJlcigpO1xuICAgIHRoaXMuYWRkcmVzc2VzUmVuZGVyZXIgPSBuZXcgQWRkcmVzc2VzUmVuZGVyZXIoKTtcbiAgICB0aGlzLmNhcnRSdWxlc1JlbmRlcmVyID0gbmV3IENhcnRSdWxlc1JlbmRlcmVyKCk7XG4gICAgdGhpcy5yb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4gICAgdGhpcy5jYXJ0RWRpdG9yID0gbmV3IENhcnRFZGl0b3IoKTtcbiAgICB0aGlzLmNhcnRSdWxlTWFuYWdlciA9IG5ldyBDYXJ0UnVsZU1hbmFnZXIoKTtcbiAgICB0aGlzLnByb2R1Y3RNYW5hZ2VyID0gbmV3IFByb2R1Y3RNYW5hZ2VyKCk7XG4gICAgdGhpcy5wcm9kdWN0UmVuZGVyZXIgPSBuZXcgUHJvZHVjdFJlbmRlcmVyKCk7XG5cbiAgICB0aGlzLl9pbml0TGlzdGVuZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgZXZlbnQgbGlzdGVuZXJzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdExpc3RlbmVycygpIHtcbiAgICB0aGlzLiRjb250YWluZXIub24oJ2lucHV0JywgY3JlYXRlT3JkZXJNYXAuY3VzdG9tZXJTZWFyY2hJbnB1dCwgZSA9PiB0aGlzLl9pbml0Q3VzdG9tZXJTZWFyY2goZSkpO1xuICAgIHRoaXMuJGNvbnRhaW5lci5vbignY2xpY2snLCBjcmVhdGVPcmRlck1hcC5jaG9vc2VDdXN0b21lckJ0biwgZSA9PiB0aGlzLl9pbml0Q3VzdG9tZXJTZWxlY3QoZSkpO1xuICAgIHRoaXMuJGNvbnRhaW5lci5vbignY2xpY2snLCBjcmVhdGVPcmRlck1hcC51c2VDYXJ0QnRuLCBlID0+IHRoaXMuX2luaXRDYXJ0U2VsZWN0KGUpKTtcbiAgICB0aGlzLiRjb250YWluZXIub24oJ2NsaWNrJywgY3JlYXRlT3JkZXJNYXAudXNlT3JkZXJCdG4sIGUgPT4gdGhpcy5faW5pdER1cGxpY2F0ZU9yZGVyQ2FydChlKSk7XG4gICAgdGhpcy4kY29udGFpbmVyLm9uKCdpbnB1dCcsIGNyZWF0ZU9yZGVyTWFwLnByb2R1Y3RTZWFyY2gsIGUgPT4gdGhpcy5faW5pdFByb2R1Y3RTZWFyY2goZSkpO1xuICAgIHRoaXMuJGNvbnRhaW5lci5vbignaW5wdXQnLCBjcmVhdGVPcmRlck1hcC5jYXJ0UnVsZVNlYXJjaElucHV0LCBlID0+IHRoaXMuX2luaXRDYXJ0UnVsZVNlYXJjaChlKSk7XG4gICAgdGhpcy4kY29udGFpbmVyLm9uKCdibHVyJywgY3JlYXRlT3JkZXJNYXAuY2FydFJ1bGVTZWFyY2hJbnB1dCwgKCkgPT4gdGhpcy5jYXJ0UnVsZU1hbmFnZXIuc3RvcFNlYXJjaGluZygpKTtcbiAgICB0aGlzLl9pbml0Q2FydEVkaXRpbmcoKTtcbiAgICB0aGlzLl9vbkNhcnRMb2FkZWQoKTtcbiAgICB0aGlzLl9vbkNhcnRBZGRyZXNzZXNDaGFuZ2VkKCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZWdhdGVzIGFjdGlvbnMgdG8gZXZlbnRzIGFzc29jaWF0ZWQgd2l0aCBjYXJ0IHVwZGF0ZSAoZS5nLiBjaGFuZ2UgY2FydCBhZGRyZXNzKVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXRDYXJ0RWRpdGluZygpIHtcbiAgICB0aGlzLiRjb250YWluZXIub24oJ2NoYW5nZScsIGNyZWF0ZU9yZGVyTWFwLmRlbGl2ZXJ5T3B0aW9uU2VsZWN0LCBlID0+XG4gICAgICB0aGlzLmNhcnRFZGl0b3IuY2hhbmdlRGVsaXZlcnlPcHRpb24odGhpcy5jYXJ0SWQsIGUuY3VycmVudFRhcmdldC52YWx1ZSlcbiAgICApO1xuXG4gICAgdGhpcy4kY29udGFpbmVyLm9uKCdjaGFuZ2UnLCBjcmVhdGVPcmRlck1hcC5mcmVlU2hpcHBpbmdTd2l0Y2gsIGUgPT5cbiAgICAgIHRoaXMuY2FydEVkaXRvci5zZXRGcmVlU2hpcHBpbmcodGhpcy5jYXJ0SWQsIGUuY3VycmVudFRhcmdldC52YWx1ZSlcbiAgICApO1xuXG4gICAgdGhpcy4kY29udGFpbmVyLm9uKCdjbGljaycsIGNyZWF0ZU9yZGVyTWFwLmFkZFRvQ2FydEJ1dHRvbiwgKCkgPT5cbiAgICAgIHRoaXMucHJvZHVjdE1hbmFnZXIuYWRkUHJvZHVjdFRvQ2FydCh0aGlzLmNhcnRJZClcbiAgICApO1xuXG4gICAgdGhpcy4kY29udGFpbmVyLm9uKCdjaGFuZ2UnLCBjcmVhdGVPcmRlck1hcC5hZGRyZXNzU2VsZWN0LCAoKSA9PiB0aGlzLl9jaGFuZ2VDYXJ0QWRkcmVzc2VzKCkpO1xuICAgIHRoaXMuJGNvbnRhaW5lci5vbignY2xpY2snLCBjcmVhdGVPcmRlck1hcC5wcm9kdWN0UmVtb3ZlQnRuLCBlID0+IHRoaXMuX2luaXRQcm9kdWN0UmVtb3ZlRnJvbUNhcnQoZSkpO1xuXG4gICAgdGhpcy5fYWRkQ2FydFJ1bGVUb0NhcnQoKTtcbiAgICB0aGlzLl9yZW1vdmVDYXJ0UnVsZUZyb21DYXJ0KCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyBmb3IgZXZlbnQgd2hlbiBjYXJ0IGlzIGxvYWRlZFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uQ2FydExvYWRlZCgpIHtcbiAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRNYXAuY2FydExvYWRlZCwgKGNhcnRJbmZvKSA9PiB7XG4gICAgICB0aGlzLmNhcnRJZCA9IGNhcnRJbmZvLmNhcnRJZDtcbiAgICAgIHRoaXMuX3JlbmRlckNhcnRJbmZvKGNhcnRJbmZvKTtcbiAgICAgIHRoaXMuY3VzdG9tZXJNYW5hZ2VyLmxvYWRDdXN0b21lckNhcnRzKHRoaXMuY2FydElkKTtcbiAgICAgIHRoaXMuY3VzdG9tZXJNYW5hZ2VyLmxvYWRDdXN0b21lck9yZGVycygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgZm9yIGNhcnQgYWRkcmVzc2VzIHVwZGF0ZSBldmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uQ2FydEFkZHJlc3Nlc0NoYW5nZWQoKSB7XG4gICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50TWFwLmNhcnRBZGRyZXNzZXNDaGFuZ2VkLCAoY2FydEluZm8pID0+IHtcbiAgICAgIHRoaXMuYWRkcmVzc2VzUmVuZGVyZXIucmVuZGVyKGNhcnRJbmZvLmFkZHJlc3Nlcyk7XG4gICAgICB0aGlzLnNoaXBwaW5nUmVuZGVyZXIucmVuZGVyKGNhcnRJbmZvLnNoaXBwaW5nLCBjYXJ0SW5mby5wcm9kdWN0cy5sZW5ndGggPT09IDApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgZm9yIGNhcnQgZGVsaXZlcnkgb3B0aW9uIHVwZGF0ZSBldmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uRGVsaXZlcnlPcHRpb25DaGFuZ2VkKCkge1xuICAgIEV2ZW50RW1pdHRlci5vbihldmVudE1hcC5jYXJ0RGVsaXZlcnlPcHRpb25DaGFuZ2VkLCAoY2FydEluZm8pID0+IHtcbiAgICAgIHRoaXMuc2hpcHBpbmdSZW5kZXJlci5yZW5kZXIoY2FydEluZm8uc2hpcHBpbmcsIGNhcnRJbmZvLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyBmb3IgY2FydCBmcmVlIHNoaXBwaW5nIHVwZGF0ZSBldmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uRnJlZVNoaXBwaW5nQ2hhbmdlZCgpIHtcbiAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRNYXAuY2FydEZyZWVTaGlwcGluZ1NldCwgKGNhcnRJbmZvKSA9PiB7XG4gICAgICB0aGlzLnNoaXBwaW5nUmVuZGVyZXIucmVuZGVyKGNhcnRJbmZvLnNoaXBwaW5nLCBjYXJ0SW5mby5wcm9kdWN0cy5sZW5ndGggPT09IDApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgY3VzdG9tZXIgc2VhcmNoaW5nXG4gICAqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXRDdXN0b21lclNlYXJjaChldmVudCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jdXN0b21lck1hbmFnZXIuc2VhcmNoKCQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCkpLCAzMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgc2VsZWN0aW5nIGN1c3RvbWVyIGZvciB3aGljaCBvcmRlciBpcyBiZWluZyBjcmVhdGVkXG4gICAqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXRDdXN0b21lclNlbGVjdChldmVudCkge1xuICAgIGNvbnN0IGN1c3RvbWVySWQgPSB0aGlzLmN1c3RvbWVyTWFuYWdlci5zZWxlY3RDdXN0b21lcihldmVudCk7XG4gICAgdGhpcy5jYXJ0UHJvdmlkZXIubG9hZEVtcHR5Q2FydChjdXN0b21lcklkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0cyBzZWxlY3RpbmcgY2FydCB0byBsb2FkXG4gICAqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXRDYXJ0U2VsZWN0KGV2ZW50KSB7XG4gICAgY29uc3QgY2FydElkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjYXJ0LWlkJyk7XG4gICAgdGhpcy5jYXJ0UHJvdmlkZXIuZ2V0Q2FydChjYXJ0SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRzIGR1cGxpY2F0aW5nIG9yZGVyIGNhcnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0RHVwbGljYXRlT3JkZXJDYXJ0KGV2ZW50KSB7XG4gICAgY29uc3Qgb3JkZXJJZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnb3JkZXItaWQnKTtcbiAgICB0aGlzLmNhcnRQcm92aWRlci5kdXBsaWNhdGVPcmRlckNhcnQob3JkZXJJZCk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgY2FydCBydWxlIHNlYXJjaGluZ1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXRDYXJ0UnVsZVNlYXJjaChldmVudCkge1xuICAgIGNvbnN0IHNlYXJjaFBocmFzZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgdGhpcy5jYXJ0UnVsZU1hbmFnZXIuc2VhcmNoKHNlYXJjaFBocmFzZSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgY2FydCBydWxlIHNlbGVjdFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FkZENhcnRSdWxlVG9DYXJ0KCkge1xuICAgIHRoaXMuJGNvbnRhaW5lci5vbignbW91c2Vkb3duJywgY3JlYXRlT3JkZXJNYXAuZm91bmRDYXJ0UnVsZUxpc3RJdGVtLCAoZXZlbnQpID0+IHtcbiAgICAgIC8vIHByZXZlbnQgYmx1ciBldmVudCB0byBhbGxvdyBzZWxlY3RpbmcgY2FydCBydWxlXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY2FydFJ1bGVJZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY2FydC1ydWxlLWlkJyk7XG4gICAgICB0aGlzLmNhcnRSdWxlTWFuYWdlci5hZGRDYXJ0UnVsZVRvQ2FydChjYXJ0UnVsZUlkLCB0aGlzLmNhcnRJZCk7XG5cbiAgICAgIC8vIG1hbnVhbGx5IGZpcmUgYmx1ciBldmVudCBhZnRlciBjYXJ0IHJ1bGUgaXMgc2VsZWN0ZWQuXG4gICAgfSkub24oJ2NsaWNrJywgY3JlYXRlT3JkZXJNYXAuZm91bmRDYXJ0UnVsZUxpc3RJdGVtLCAoKSA9PiB7XG4gICAgICAkKGNyZWF0ZU9yZGVyTWFwLmNhcnRSdWxlU2VhcmNoSW5wdXQpLmJsdXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBjYXJ0IHJ1bGUgcmVtb3ZhbCBmcm9tIGNhcnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZW1vdmVDYXJ0UnVsZUZyb21DYXJ0KCkge1xuICAgIHRoaXMuJGNvbnRhaW5lci5vbignY2xpY2snLCBjcmVhdGVPcmRlck1hcC5jYXJ0UnVsZURlbGV0ZUJ0biwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmNhcnRSdWxlTWFuYWdlci5yZW1vdmVDYXJ0UnVsZUZyb21DYXJ0KCQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY2FydC1ydWxlLWlkJyksIHRoaXMuY2FydElkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0cyBwcm9kdWN0IHNlYXJjaGluZ1xuICAgKlxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0UHJvZHVjdFNlYXJjaChldmVudCkge1xuICAgIGNvbnN0ICRwcm9kdWN0U2VhcmNoSW5wdXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IHNlYXJjaFBocmFzZSA9ICRwcm9kdWN0U2VhcmNoSW5wdXQudmFsKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvZHVjdE1hbmFnZXIuc2VhcmNoKHNlYXJjaFBocmFzZSksIDMwMCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdHMgcHJvZHVjdCByZW1vdmluZyBmcm9tIGNhcnRcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdFByb2R1Y3RSZW1vdmVGcm9tQ2FydChldmVudCkge1xuICAgIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgICBwcm9kdWN0SWQ6ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgncHJvZHVjdC1pZCcpLFxuICAgICAgYXR0cmlidXRlSWQ6ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnYXR0cmlidXRlLWlkJyksXG4gICAgICBjdXN0b21pemF0aW9uSWQ6ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY3VzdG9taXphdGlvbi1pZCcpLFxuICAgIH07XG5cbiAgICB0aGlzLnByb2R1Y3RNYW5hZ2VyLnJlbW92ZVByb2R1Y3RGcm9tQ2FydCh0aGlzLmNhcnRJZCwgcHJvZHVjdCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBjYXJ0IHN1bW1hcnkgb24gdGhlIHBhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGNhcnRJbmZvXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVuZGVyQ2FydEluZm8oY2FydEluZm8pIHtcbiAgICB0aGlzLmFkZHJlc3Nlc1JlbmRlcmVyLnJlbmRlcihjYXJ0SW5mby5hZGRyZXNzZXMpO1xuICAgIHRoaXMuY2FydFJ1bGVzUmVuZGVyZXIucmVuZGVyQ2FydFJ1bGVzQmxvY2soY2FydEluZm8uY2FydFJ1bGVzLCBjYXJ0SW5mby5wcm9kdWN0cy5sZW5ndGggPT09IDApO1xuICAgIHRoaXMuc2hpcHBpbmdSZW5kZXJlci5yZW5kZXIoY2FydEluZm8uc2hpcHBpbmcsIGNhcnRJbmZvLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCk7XG4gICAgdGhpcy5wcm9kdWN0UmVuZGVyZXIucmVuZGVyTGlzdChjYXJ0SW5mby5wcm9kdWN0cyk7XG4gICAgLy8gQHRvZG86IHJlbmRlciBTdW1tYXJ5IGJsb2NrIHdoZW4gYXQgbGVhc3QgMSBwcm9kdWN0IGlzIGluIGNhcnRcbiAgICAvLyBhbmQgZGVsaXZlcnkgb3B0aW9ucyBhcmUgYXZhaWxhYmxlXG5cbiAgICAkKGNyZWF0ZU9yZGVyTWFwLmNhcnRCbG9jaykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2FydCBhZGRyZXNzZXNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jaGFuZ2VDYXJ0QWRkcmVzc2VzKCkge1xuICAgIGNvbnN0IGFkZHJlc3NlcyA9IHtcbiAgICAgIGRlbGl2ZXJ5QWRkcmVzc0lkOiAkKGNyZWF0ZU9yZGVyTWFwLmRlbGl2ZXJ5QWRkcmVzc1NlbGVjdCkudmFsKCksXG4gICAgICBpbnZvaWNlQWRkcmVzc0lkOiAkKGNyZWF0ZU9yZGVyTWFwLmludm9pY2VBZGRyZXNzU2VsZWN0KS52YWwoKSxcbiAgICB9O1xuXG4gICAgdGhpcy5jYXJ0RWRpdG9yLmNoYW5nZUNhcnRBZGRyZXNzZXModGhpcy5jYXJ0SWQsIGFkZHJlc3Nlcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BhZ2VzL29yZGVyL2NyZWF0ZS9jcmVhdGUtb3JkZXItcGFnZS5qcyIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5cbi8qKlxuICogRW5jYXBzdWxhdGVzIHNlbGVjdG9ycyBmb3IgXCJDcmVhdGUgb3JkZXJcIiBwYWdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb3JkZXJDcmVhdGlvbkNvbnRhaW5lcjogJyNvcmRlci1jcmVhdGlvbi1jb250YWluZXInLFxuXG4gIC8vIHNlbGVjdG9ycyByZWxhdGVkIHRvIGN1c3RvbWVyIGJsb2NrXG4gIGN1c3RvbWVyU2VhcmNoSW5wdXQ6ICcjY3VzdG9tZXItc2VhcmNoLWlucHV0JyxcbiAgY3VzdG9tZXJTZWFyY2hSZXN1bHRzQmxvY2s6ICcuanMtY3VzdG9tZXItc2VhcmNoLXJlc3VsdHMnLFxuICBjdXN0b21lclNlYXJjaFJlc3VsdFRlbXBsYXRlOiAnI2N1c3RvbWVyLXNlYXJjaC1yZXN1bHQtdGVtcGxhdGUnLFxuICBjaGFuZ2VDdXN0b21lckJ0bjogJy5qcy1jaGFuZ2UtY3VzdG9tZXItYnRuJyxcbiAgY3VzdG9tZXJTZWFyY2hSb3c6ICcuanMtc2VhcmNoLWN1c3RvbWVyLXJvdycsXG4gIGNob29zZUN1c3RvbWVyQnRuOiAnLmpzLWNob29zZS1jdXN0b21lci1idG4nLFxuICBub3RTZWxlY3RlZEN1c3RvbWVyU2VhcmNoUmVzdWx0czogJy5qcy1jdXN0b21lci1zZWFyY2gtcmVzdWx0Om5vdCguYm9yZGVyLXN1Y2Nlc3MpJyxcbiAgY3VzdG9tZXJTZWFyY2hSZXN1bHROYW1lOiAnLmpzLWN1c3RvbWVyLW5hbWUnLFxuICBjdXN0b21lclNlYXJjaFJlc3VsdEVtYWlsOiAnLmpzLWN1c3RvbWVyLWVtYWlsJyxcbiAgY3VzdG9tZXJTZWFyY2hSZXN1bHRJZDogJy5qcy1jdXN0b21lci1pZCcsXG4gIGN1c3RvbWVyU2VhcmNoUmVzdWx0QmlydGhkYXk6ICcuanMtY3VzdG9tZXItYmlydGhkYXknLFxuICBjdXN0b21lckRldGFpbHNCdG46ICcuanMtZGV0YWlscy1jdXN0b21lci1idG4nLFxuICBjdXN0b21lclNlYXJjaFJlc3VsdENvbHVtbjogJy5qcy1jdXN0b21lci1zZWFyY2gtcmVzdWx0LWNvbCcsXG4gIGN1c3RvbWVyU2VhcmNoQmxvY2s6ICcjY3VzdG9tZXItc2VhcmNoLWJsb2NrJyxcbiAgY3VzdG9tZXJDYXJ0c1RhYjogJy5qcy1jdXN0b21lci1jYXJ0cy10YWInLFxuICBjdXN0b21lck9yZGVyc1RhYjogJy5qcy1jdXN0b21lci1vcmRlcnMtdGFiJyxcbiAgY3VzdG9tZXJDYXJ0c1RhYmxlOiAnI2N1c3RvbWVyLWNhcnRzLXRhYmxlJyxcbiAgY3VzdG9tZXJDYXJ0c1RhYmxlUm93VGVtcGxhdGU6ICcjY3VzdG9tZXItY2FydHMtdGFibGUtcm93LXRlbXBsYXRlJyxcbiAgY3VzdG9tZXJDaGVja291dEhpc3Rvcnk6ICcjY3VzdG9tZXItY2hlY2tvdXQtaGlzdG9yeScsXG4gIGN1c3RvbWVyT3JkZXJzVGFibGU6ICcjY3VzdG9tZXItb3JkZXJzLXRhYmxlJyxcbiAgY3VzdG9tZXJPcmRlcnNUYWJsZVJvd1RlbXBsYXRlOiAnI2N1c3RvbWVyLW9yZGVycy10YWJsZS1yb3ctdGVtcGxhdGUnLFxuICBjYXJ0UnVsZXNUYWJsZTogJyNjYXJ0LXJ1bGVzLXRhYmxlJyxcbiAgY2FydFJ1bGVzVGFibGVSb3dUZW1wbGF0ZTogJyNjYXJ0LXJ1bGVzLXRhYmxlLXJvdy10ZW1wbGF0ZScsXG4gIHVzZUNhcnRCdG46ICcuanMtdXNlLWNhcnQtYnRuJyxcbiAgY2FydERldGFpbHNCdG46ICcuanMtY2FydC1kZXRhaWxzLWJ0bicsXG4gIGNhcnRJZEZpZWxkOiAnLmpzLWNhcnQtaWQnLFxuICBjYXJ0RGF0ZUZpZWxkOiAnLmpzLWNhcnQtZGF0ZScsXG4gIGNhcnRUb3RhbEZpZWxkOiAnLmpzLWNhcnQtdG90YWwnLFxuICB1c2VPcmRlckJ0bjogJy5qcy11c2Utb3JkZXItYnRuJyxcbiAgb3JkZXJEZXRhaWxzQnRuOiAnLmpzLW9yZGVyLWRldGFpbHMtYnRuJyxcbiAgb3JkZXJJZEZpZWxkOiAnLmpzLW9yZGVyLWlkJyxcbiAgb3JkZXJEYXRlRmllbGQ6ICcuanMtb3JkZXItZGF0ZScsXG4gIG9yZGVyUHJvZHVjdHNGaWVsZDogJy5qcy1vcmRlci1wcm9kdWN0cycsXG4gIG9yZGVyVG90YWxGaWVsZDogJy5qcy1vcmRlci10b3RhbC1wYWlkJyxcbiAgb3JkZXJTdGF0dXNGaWVsZDogJy5qcy1vcmRlci1zdGF0dXMnLFxuXG4gIC8vIHNlbGVjdG9ycyByZWxhdGVkIHRvIGNhcnQgYmxvY2tcbiAgY2FydEJsb2NrOiAnI2NhcnQtYmxvY2snLFxuXG4gIC8vIHNlbGVjdG9ycyByZWxhdGVkIHRvIGNhcnRSdWxlcyBibG9ja1xuICBjYXJ0UnVsZXNCbG9jazogJyNjYXJ0LXJ1bGVzLWJsb2NrJyxcbiAgY2FydFJ1bGVTZWFyY2hJbnB1dDogJyNzZWFyY2gtY2FydC1ydWxlcy1pbnB1dCcsXG4gIGNhcnRSdWxlc1NlYXJjaFJlc3VsdEJveDogJyNzZWFyY2gtY2FydC1ydWxlcy1yZXN1bHQtYm94JyxcbiAgY2FydFJ1bGVzTm90Rm91bmRUZW1wbGF0ZTogJyNjYXJ0LXJ1bGVzLW5vdC1mb3VuZC10ZW1wbGF0ZScsXG4gIGZvdW5kQ2FydFJ1bGVUZW1wbGF0ZTogJyNmb3VuZC1jYXJ0LXJ1bGUtdGVtcGxhdGUnLFxuICBmb3VuZENhcnRSdWxlTGlzdEl0ZW06ICcuanMtZm91bmQtY2FydC1ydWxlJyxcbiAgY2FydFJ1bGVOYW1lRmllbGQ6ICcuanMtY2FydC1ydWxlLW5hbWUnLFxuICBjYXJ0UnVsZURlc2NyaXB0aW9uRmllbGQ6ICcuanMtY2FydC1ydWxlLWRlc2NyaXB0aW9uJyxcbiAgY2FydFJ1bGVWYWx1ZUZpZWxkOiAnLmpzLWNhcnQtcnVsZS12YWx1ZScsXG4gIGNhcnRSdWxlRGVsZXRlQnRuOiAnLmpzLWNhcnQtcnVsZS1kZWxldGUtYnRuJyxcbiAgY2FydFJ1bGVFcnJvckJsb2NrOiAnI2pzLWNhcnQtcnVsZS1lcnJvci1ibG9jaycsXG4gIGNhcnRSdWxlRXJyb3JUZXh0OiAnI2pzLWNhcnQtcnVsZS1lcnJvci10ZXh0JyxcblxuICAvLyBzZWxlY3RvcnMgcmVsYXRlZCB0byBhZGRyZXNzZXMgYmxvY2tcbiAgYWRkcmVzc2VzQmxvY2s6ICcjYWRkcmVzc2VzLWJsb2NrJyxcbiAgZGVsaXZlcnlBZGRyZXNzRGV0YWlsczogJyNkZWxpdmVyeS1hZGRyZXNzLWRldGFpbHMnLFxuICBpbnZvaWNlQWRkcmVzc0RldGFpbHM6ICcjaW52b2ljZS1hZGRyZXNzLWRldGFpbHMnLFxuICBkZWxpdmVyeUFkZHJlc3NTZWxlY3Q6ICcjZGVsaXZlcnktYWRkcmVzcy1zZWxlY3QnLFxuICBpbnZvaWNlQWRkcmVzc1NlbGVjdDogJyNpbnZvaWNlLWFkZHJlc3Mtc2VsZWN0JyxcbiAgYWRkcmVzc1NlbGVjdDogJy5qcy1hZGRyZXNzLXNlbGVjdCcsXG4gIGFkZHJlc3Nlc0NvbnRlbnQ6ICcjYWRkcmVzc2VzLWNvbnRlbnQnLFxuICBhZGRyZXNzZXNXYXJuaW5nOiAnI2FkZHJlc3Nlcy13YXJuaW5nJyxcblxuICAvLyBzZWxlY3RvcnMgcmVsYXRlZCB0byBzdW1tYXJ5IGJsb2NrXG4gIHN1bW1hcnlCbG9jazogJyNzdW1tYXJ5LWJsb2NrJyxcblxuICAvLyBzZWxlY3RvcnMgcmVsYXRlZCB0byBzaGlwcGluZyBibG9ja1xuICBzaGlwcGluZ0Jsb2NrOiAnI3NoaXBwaW5nLWJsb2NrJyxcbiAgc2hpcHBpbmdGb3JtOiAnLmpzLXNoaXBwaW5nLWZvcm0nLFxuICBub0NhcnJpZXJCbG9jazogJy5qcy1uby1jYXJyaWVyLWJsb2NrJyxcbiAgZGVsaXZlcnlPcHRpb25TZWxlY3Q6ICcjZGVsaXZlcnktb3B0aW9uLXNlbGVjdCcsXG4gIHRvdGFsU2hpcHBpbmdGaWVsZDogJy5qcy10b3RhbC1zaGlwcGluZycsXG4gIGZyZWVTaGlwcGluZ1N3aXRjaDogJy5qcy1mcmVlLXNoaXBwaW5nLXN3aXRjaCcsXG5cbiAgLy8gc2VsZWN0b3JzIHJlbGF0ZWQgdG8gY2FydCBwcm9kdWN0cyBibG9ja1xuICBwcm9kdWN0U2VhcmNoOiAnI3Byb2R1Y3Qtc2VhcmNoJyxcbiAgY29tYmluYXRpb25zU2VsZWN0OiAnI2NvbWJpbmF0aW9uLXNlbGVjdCcsXG4gIHByb2R1Y3RSZXN1bHRCbG9jazogJyNwcm9kdWN0LXNlYXJjaC1yZXN1bHRzJyxcbiAgcHJvZHVjdFNlbGVjdDogJyNwcm9kdWN0LXNlbGVjdCcsXG4gIHF1YW50aXR5SW5wdXQ6ICcjcXVhbnRpdHktaW5wdXQnLFxuICBpblN0b2NrQ291bnRlcjogJy5qcy1pbi1zdG9jay1jb3VudGVyJyxcbiAgY29tYmluYXRpb25zVGVtcGxhdGU6ICcjY29tYmluYXRpb25zLXRlbXBsYXRlJyxcbiAgY29tYmluYXRpb25zUm93OiAnLmpzLWNvbWJpbmF0aW9ucy1yb3cnLFxuICBwcm9kdWN0U2VsZWN0Um93OiAnLmpzLXByb2R1Y3Qtc2VsZWN0LXJvdycsXG4gIHByb2R1Y3RDdXN0b21GaWVsZHNDb250YWluZXI6ICcjanMtY3VzdG9tLWZpZWxkcy1jb250YWluZXInLFxuICBwcm9kdWN0Q3VzdG9taXphdGlvbkNvbnRhaW5lcjogJyNqcy1jdXN0b21pemF0aW9uLWNvbnRhaW5lcicsXG4gIHByb2R1Y3RDdXN0b21GaWxlVGVtcGxhdGU6ICcjanMtcHJvZHVjdC1jdXN0b20tZmlsZS10ZW1wbGF0ZScsXG4gIHByb2R1Y3RDdXN0b21UZXh0VGVtcGxhdGU6ICcjanMtcHJvZHVjdC1jdXN0b20tdGV4dC10ZW1wbGF0ZScsXG4gIHByb2R1Y3RDdXN0b21JbnB1dExhYmVsOiAnLmpzLXByb2R1Y3QtY3VzdG9tLWlucHV0LWxhYmVsJyxcbiAgcHJvZHVjdEN1c3RvbUlucHV0OiAnLmpzLXByb2R1Y3QtY3VzdG9tLWlucHV0JyxcbiAgcXVhbnRpdHlSb3c6ICcuanMtcXVhbnRpdHktcm93JyxcbiAgYWRkVG9DYXJ0QnV0dG9uOiAnI2FkZC1wcm9kdWN0LXRvLWNhcnQtYnRuJyxcbiAgcHJvZHVjdHNUYWJsZTogJyNwcm9kdWN0cy10YWJsZScsXG4gIHByb2R1Y3RzVGFibGVSb3dUZW1wbGF0ZTogJyNwcm9kdWN0cy10YWJsZS1yb3ctdGVtcGxhdGUnLFxuICBwcm9kdWN0SW1hZ2VGaWVsZDogJy5qcy1wcm9kdWN0LWltYWdlJyxcbiAgcHJvZHVjdE5hbWVGaWVsZDogJy5qcy1wcm9kdWN0LW5hbWUnLFxuICBwcm9kdWN0QXR0ckZpZWxkOiAnLmpzLXByb2R1Y3QtYXR0cicsXG4gIHByb2R1Y3RSZWZlcmVuY2VGaWVsZDogJy5qcy1wcm9kdWN0LXJlZicsXG4gIHByb2R1Y3RVbml0UHJpY2VJbnB1dDogJy5qcy1wcm9kdWN0LXVuaXQtaW5wdXQnLFxuICBwcm9kdWN0VG90YWxQcmljZUZpZWxkOiAnLmpzLXByb2R1Y3QtdG90YWwtcHJpY2UnLFxuICBwcm9kdWN0UmVtb3ZlQnRuOiAnLmpzLXByb2R1Y3QtcmVtb3ZlLWJ0bicsXG4gIHByb2R1Y3RUYXhXYXJuaW5nOiAnLmpzLXRheC13YXJuaW5nJyxcbiAgbm9Qcm9kdWN0c0ZvdW5kV2FybmluZzogJy5qcy1uby1wcm9kdWN0cy1mb3VuZCcsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGFnZXMvb3JkZXIvY3JlYXRlL2NyZWF0ZS1vcmRlci1tYXAuanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG5pbXBvcnQgUm91dGluZyBmcm9tICdmb3Mtcm91dGluZyc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4uL2Zvc19qc19yb3V0ZXMuanNvbic7XG5cbmNvbnN0ICQgPSB3aW5kb3cuJDtcblxuLyoqXG4gKiBXcmFwcyBGT1NKc1JvdXRpbmdidW5kbGUgd2l0aCBleHBvc2VkIHJvdXRlcy5cbiAqIFRvIGV4cG9zZSByb3V0ZSBhZGQgb3B0aW9uIGBleHBvc2U6IHRydWVgIGluIC55bWwgcm91dGluZyBjb25maWdcbiAqXG4gKiBlLmcuXG4gKlxuICogYG15X3JvdXRlXG4gKiAgICBwYXRoOiAvbXktcGF0aFxuICogICAgb3B0aW9uczpcbiAqICAgICAgZXhwb3NlOiB0cnVlXG4gKiBgXG4gKiBBbmQgcnVuIGBiaW4vY29uc29sZSBmb3M6anMtcm91dGluZzpkdW1wIC0tZm9ybWF0PWpzb24gLS10YXJnZXQ9YWRtaW4tZGV2L3RoZW1lcy9uZXctdGhlbWUvanMvZm9zX2pzX3JvdXRlcy5qc29uYFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBSb3V0aW5nLnNldERhdGEocm91dGVzKTtcbiAgICBSb3V0aW5nLnNldEJhc2VVcmwoJChkb2N1bWVudCkuZmluZCgnYm9keScpLmRhdGEoJ2Jhc2UtdXJsJykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogRGVjb3JhdGVkIFwiZ2VuZXJhdGVcIiBtZXRob2QsIHdpdGggcHJlZGVmaW5lZCBzZWN1cml0eSB0b2tlbiBpbiBwYXJhbXNcbiAgICpcbiAgICogQHBhcmFtIHJvdXRlXG4gICAqIEBwYXJhbSBwYXJhbXNcbiAgICpcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIGdlbmVyYXRlKHJvdXRlLCBwYXJhbXMgPSB7fSkge1xuICAgIGNvbnN0IHRva2VuaXplZFBhcmFtcyA9IE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7X3Rva2VuOiAkKGRvY3VtZW50KS5maW5kKCdib2R5JykuZGF0YSgndG9rZW4nKX0pO1xuXG4gICAgcmV0dXJuIFJvdXRpbmcuZ2VuZXJhdGUocm91dGUsIHRva2VuaXplZFBhcmFtcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NvbXBvbmVudHMvcm91dGVyLmpzIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cbmltcG9ydCBDcmVhdGVPcmRlclBhZ2UgZnJvbSAnLi9jcmVhdGUvY3JlYXRlLW9yZGVyLXBhZ2UnO1xuXG5jb25zdCAkID0gd2luZG93LiQ7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgbmV3IENyZWF0ZU9yZGVyUGFnZSgpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9wYWdlcy9vcmRlci9jcmVhdGUuanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG5pbXBvcnQgY3JlYXRlT3JkZXJQYWdlTWFwIGZyb20gJy4vY3JlYXRlLW9yZGVyLW1hcCc7XG5cbmNvbnN0ICQgPSB3aW5kb3cuJDtcblxuLyoqXG4gKiBSZW5kZXJzIERlbGl2ZXJ5ICYgSW52b2ljZSBhZGRyZXNzZXMgc2VsZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZHJlc3Nlc1JlbmRlcmVyIHtcblxuICAvKipcbiAgICogQHBhcmFtIHtBcnJheX0gYWRkcmVzc2VzXG4gICAqL1xuICByZW5kZXIoYWRkcmVzc2VzKSB7XG4gICAgbGV0IGRlbGl2ZXJ5QWRkcmVzc0RldGFpbHNDb250ZW50ID0gJyc7XG4gICAgbGV0IGludm9pY2VBZGRyZXNzRGV0YWlsc0NvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0ICRkZWxpdmVyeUFkZHJlc3NEZXRhaWxzID0gJChjcmVhdGVPcmRlclBhZ2VNYXAuZGVsaXZlcnlBZGRyZXNzRGV0YWlscyk7XG4gICAgY29uc3QgJGludm9pY2VBZGRyZXNzRGV0YWlscyA9ICQoY3JlYXRlT3JkZXJQYWdlTWFwLmludm9pY2VBZGRyZXNzRGV0YWlscyk7XG4gICAgY29uc3QgJGRlbGl2ZXJ5QWRkcmVzc1NlbGVjdCA9ICQoY3JlYXRlT3JkZXJQYWdlTWFwLmRlbGl2ZXJ5QWRkcmVzc1NlbGVjdCk7XG4gICAgY29uc3QgJGludm9pY2VBZGRyZXNzU2VsZWN0ID0gJChjcmVhdGVPcmRlclBhZ2VNYXAuaW52b2ljZUFkZHJlc3NTZWxlY3QpO1xuXG4gICAgY29uc3QgJGFkZHJlc3Nlc0NvbnRlbnQgPSAkKGNyZWF0ZU9yZGVyUGFnZU1hcC5hZGRyZXNzZXNDb250ZW50KTtcbiAgICBjb25zdCAkYWRkcmVzc2VzV2FybmluZ0NvbnRlbnQgPSAkKGNyZWF0ZU9yZGVyUGFnZU1hcC5hZGRyZXNzZXNXYXJuaW5nKTtcblxuICAgICRkZWxpdmVyeUFkZHJlc3NEZXRhaWxzLmVtcHR5KCk7XG4gICAgJGludm9pY2VBZGRyZXNzRGV0YWlscy5lbXB0eSgpO1xuICAgICRkZWxpdmVyeUFkZHJlc3NTZWxlY3QuZW1wdHkoKTtcbiAgICAkaW52b2ljZUFkZHJlc3NTZWxlY3QuZW1wdHkoKTtcblxuICAgIGlmIChhZGRyZXNzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAkYWRkcmVzc2VzV2FybmluZ0NvbnRlbnQucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgJGFkZHJlc3Nlc0NvbnRlbnQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJGFkZHJlc3Nlc0NvbnRlbnQucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICRhZGRyZXNzZXNXYXJuaW5nQ29udGVudC5hZGRDbGFzcygnZC1ub25lJyk7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBPYmplY3Qua2V5cyhhZGRyZXNzZXMpKSB7XG4gICAgICBjb25zdCBhZGRyZXNzID0gYWRkcmVzc2VzW2tleV07XG5cbiAgICAgIGNvbnN0IGRlbGl2ZXJ5QWRkcmVzc09wdGlvbiA9IHtcbiAgICAgICAgdmFsdWU6IGFkZHJlc3MuYWRkcmVzc0lkLFxuICAgICAgICB0ZXh0OiBhZGRyZXNzLmFsaWFzLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgaW52b2ljZUFkZHJlc3NPcHRpb24gPSB7XG4gICAgICAgIHZhbHVlOiBhZGRyZXNzLmFkZHJlc3NJZCxcbiAgICAgICAgdGV4dDogYWRkcmVzcy5hbGlhcyxcbiAgICAgIH07XG5cbiAgICAgIGlmIChhZGRyZXNzLmRlbGl2ZXJ5KSB7XG4gICAgICAgIGRlbGl2ZXJ5QWRkcmVzc0RldGFpbHNDb250ZW50ID0gYWRkcmVzcy5mb3JtYXR0ZWRBZGRyZXNzO1xuICAgICAgICBkZWxpdmVyeUFkZHJlc3NPcHRpb24uc2VsZWN0ZWQgPSAnc2VsZWN0ZWQnO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWRkcmVzcy5pbnZvaWNlKSB7XG4gICAgICAgIGludm9pY2VBZGRyZXNzRGV0YWlsc0NvbnRlbnQgPSBhZGRyZXNzLmZvcm1hdHRlZEFkZHJlc3M7XG4gICAgICAgIGludm9pY2VBZGRyZXNzT3B0aW9uLnNlbGVjdGVkID0gJ3NlbGVjdGVkJztcbiAgICAgIH1cblxuICAgICAgJGRlbGl2ZXJ5QWRkcmVzc1NlbGVjdC5hcHBlbmQoJCgnPG9wdGlvbj4nLCBkZWxpdmVyeUFkZHJlc3NPcHRpb24pKTtcbiAgICAgICRpbnZvaWNlQWRkcmVzc1NlbGVjdC5hcHBlbmQoJCgnPG9wdGlvbj4nLCBpbnZvaWNlQWRkcmVzc09wdGlvbikpO1xuICAgIH1cblxuICAgIGlmIChkZWxpdmVyeUFkZHJlc3NEZXRhaWxzQ29udGVudCkge1xuICAgICAgJGRlbGl2ZXJ5QWRkcmVzc0RldGFpbHMuaHRtbChkZWxpdmVyeUFkZHJlc3NEZXRhaWxzQ29udGVudCk7XG4gICAgfVxuXG4gICAgaWYgKGludm9pY2VBZGRyZXNzRGV0YWlsc0NvbnRlbnQpIHtcbiAgICAgICRpbnZvaWNlQWRkcmVzc0RldGFpbHMuaHRtbChpbnZvaWNlQWRkcmVzc0RldGFpbHNDb250ZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl9zaG93QWRkcmVzc2VzQmxvY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBhZGRyZXNzZXMgYmxvY2tcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zaG93QWRkcmVzc2VzQmxvY2soKSB7XG4gICAgJChjcmVhdGVPcmRlclBhZ2VNYXAuYWRkcmVzc2VzQmxvY2spLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGFnZXMvb3JkZXIvY3JlYXRlL2FkZHJlc3Nlcy1yZW5kZXJlci5qcyIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5cbmltcG9ydCBjcmVhdGVPcmRlclBhZ2VNYXAgZnJvbSAnLi9jcmVhdGUtb3JkZXItbWFwJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9yb3V0ZXInO1xuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQgZXZlbnRNYXAgZnJvbSAnLi9ldmVudC1tYXAnO1xuXG5jb25zdCAkID0gd2luZG93LiQ7XG5cbi8qKlxuICogUHJvdmlkZXMgYWpheCBjYWxscyBmb3IgZ2V0dGluZyBjYXJ0IGluZm9ybWF0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJGNvbnRhaW5lciA9ICQoY3JlYXRlT3JkZXJQYWdlTWFwLm9yZGVyQ3JlYXRpb25Db250YWluZXIpO1xuICAgIHRoaXMucm91dGVyID0gbmV3IFJvdXRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgY2FydCBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAcGFyYW0gY2FydElkXG4gICAqXG4gICAqIEByZXR1cm5zIHtqcVhIUn0uIE9iamVjdCB3aXRoIGNhcnQgaW5mb3JtYXRpb24gaW4gcmVzcG9uc2UuXG4gICAqL1xuICBnZXRDYXJ0KGNhcnRJZCkge1xuICAgICQuZ2V0KHRoaXMucm91dGVyLmdlbmVyYXRlKCdhZG1pbl9jYXJ0c19pbmZvJywge2NhcnRJZH0pKS50aGVuKChjYXJ0SW5mbykgPT4ge1xuICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRNYXAuY2FydExvYWRlZCwgY2FydEluZm8pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgZXhpc3RpbmcgZW1wdHkgY2FydCBvciBjcmVhdGVzIG5ldyBlbXB0eSBjYXJ0IGZvciBjdXN0b21lci5cbiAgICpcbiAgICogQHBhcmFtIGN1c3RvbWVySWRcbiAgICpcbiAgICogQHJldHVybnMge2pxWEhSfS4gT2JqZWN0IHdpdGggY2FydCBpbmZvcm1hdGlvbiBpbiByZXNwb25zZVxuICAgKi9cbiAgbG9hZEVtcHR5Q2FydChjdXN0b21lcklkKSB7XG4gICAgJC5wb3N0KHRoaXMucm91dGVyLmdlbmVyYXRlKCdhZG1pbl9jYXJ0c19jcmVhdGUnKSwge1xuICAgICAgY3VzdG9tZXJfaWQ6IGN1c3RvbWVySWQsXG4gICAgfSkudGhlbigoY2FydEluZm8pID0+IHtcbiAgICAgIEV2ZW50RW1pdHRlci5lbWl0KGV2ZW50TWFwLmNhcnRMb2FkZWQsIGNhcnRJbmZvKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEdXBsaWNhdGVzIGNhcnQgZnJvbSBwcm92aWRlZCBvcmRlclxuICAgKlxuICAgKiBAcGFyYW0gb3JkZXJJZFxuICAgKlxuICAgKiBAcmV0dXJucyB7anFYSFJ9LiBPYmplY3Qgd2l0aCBjYXJ0IGluZm9ybWF0aW9uIGluIHJlc3BvbnNlXG4gICAqL1xuICBkdXBsaWNhdGVPcmRlckNhcnQob3JkZXJJZCkge1xuICAgICQucG9zdCh0aGlzLnJvdXRlci5nZW5lcmF0ZSgnYWRtaW5fb3JkZXJzX2R1cGxpY2F0ZV9jYXJ0Jywge29yZGVySWR9KSkudGhlbigoY2FydEluZm8pID0+IHtcbiAgICAgIEV2ZW50RW1pdHRlci5lbWl0KGV2ZW50TWFwLmNhcnRMb2FkZWQsIGNhcnRJbmZvKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGFnZXMvb3JkZXIvY3JlYXRlL2NhcnQtcHJvdmlkZXIuanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG5pbXBvcnQgQ2FydEVkaXRvciBmcm9tICcuL2NhcnQtZWRpdG9yJztcbmltcG9ydCBDYXJ0UnVsZXNSZW5kZXJlciBmcm9tICcuL2NhcnQtcnVsZXMtcmVuZGVyZXInO1xuaW1wb3J0IGNyZWF0ZU9yZGVyTWFwIGZyb20gJy4vY3JlYXRlLW9yZGVyLW1hcCc7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9ldmVudC1lbWl0dGVyJztcbmltcG9ydCBldmVudE1hcCBmcm9tICcuL2V2ZW50LW1hcCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcm91dGVyJztcblxuY29uc3QgJCA9IHdpbmRvdy4kO1xuXG4vKipcbiAqIFJlc3BvbnNpYmxlIGZvciBzZWFyY2hpbmcgY2FydCBydWxlcyBhbmQgbWFuYWdpbmcgY2FydCBydWxlcyBzZWFyY2ggYmxvY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydFJ1bGVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG4gICAgdGhpcy4kc2VhcmNoSW5wdXQgPSAkKGNyZWF0ZU9yZGVyTWFwLmNhcnRSdWxlU2VhcmNoSW5wdXQpO1xuICAgIHRoaXMuY2FydFJ1bGVzUmVuZGVyZXIgPSBuZXcgQ2FydFJ1bGVzUmVuZGVyZXIoKTtcbiAgICB0aGlzLmNhcnRFZGl0b3IgPSBuZXcgQ2FydEVkaXRvcigpO1xuXG4gICAgdGhpcy5faW5pdExpc3RlbmVycygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlYXJjaDogKCkgPT4gdGhpcy5fc2VhcmNoKCksXG4gICAgICBzdG9wU2VhcmNoaW5nOiAoKSA9PiB0aGlzLmNhcnRSdWxlc1JlbmRlcmVyLmhpZGVSZXN1bHRzRHJvcGRvd24oKSxcbiAgICAgIGFkZENhcnRSdWxlVG9DYXJ0OiAoY2FydFJ1bGVJZCwgY2FydElkKSA9PiB0aGlzLmNhcnRFZGl0b3IuYWRkQ2FydFJ1bGVUb0NhcnQoY2FydFJ1bGVJZCwgY2FydElkKSxcbiAgICAgIHJlbW92ZUNhcnRSdWxlRnJvbUNhcnQ6IChjYXJ0UnVsZUlkLCBjYXJ0SWQpID0+IHRoaXMuY2FydEVkaXRvci5yZW1vdmVDYXJ0UnVsZUZyb21DYXJ0KGNhcnRSdWxlSWQsIGNhcnRJZCksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWF0ZXMgZXZlbnQgbGlzdGVuZXJzIGZvciBjYXJ0IHJ1bGUgYWN0aW9uc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fb25DYXJ0UnVsZVNlYXJjaCgpO1xuICAgIHRoaXMuX29uQWRkQ2FydFJ1bGVUb0NhcnQoKTtcbiAgICB0aGlzLl9vbkFkZENhcnRSdWxlVG9DYXJ0RmFpbHVyZSgpO1xuICAgIHRoaXMuX29uUmVtb3ZlQ2FydFJ1bGVGcm9tQ2FydCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgZm9yIGNhcnQgcnVsZSBzZWFyY2ggYWN0aW9uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25DYXJ0UnVsZVNlYXJjaCgpIHtcbiAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRNYXAuY2FydFJ1bGVTZWFyY2hlZCwgKGNhcnRSdWxlcykgPT4ge1xuICAgICAgdGhpcy5jYXJ0UnVsZXNSZW5kZXJlci5yZW5kZXJTZWFyY2hSZXN1bHRzKGNhcnRSdWxlcyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyBldmVudCBvZiBhZGQgY2FydCBydWxlIHRvIGNhcnQgYWN0aW9uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25BZGRDYXJ0UnVsZVRvQ2FydCgpIHtcbiAgICBFdmVudEVtaXR0ZXIub24oZXZlbnRNYXAuY2FydFJ1bGVBZGRlZCwgKGNhcnRJbmZvKSA9PiB7XG4gICAgICB0aGlzLmNhcnRSdWxlc1JlbmRlcmVyLnJlbmRlckNhcnRSdWxlc0Jsb2NrKGNhcnRJbmZvLmNhcnRSdWxlcywgY2FydEluZm8ucHJvZHVjdHMubGVuZ3RoID09PSAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIGV2ZW50IHdoZW4gYWRkIGNhcnQgcnVsZSB0byBjYXJ0IGZhaWxzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25BZGRDYXJ0UnVsZVRvQ2FydEZhaWx1cmUoKSB7XG4gICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50TWFwLmNhcnRSdWxlRmFpbGVkVG9BZGQsIChtZXNzYWdlKSA9PiB7XG4gICAgICB0aGlzLmNhcnRSdWxlc1JlbmRlcmVyLmRpc3BsYXlFcnJvck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyBldmVudCBmb3IgcmVtb3ZlIGNhcnQgcnVsZSBmcm9tIGNhcnQgYWN0aW9uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25SZW1vdmVDYXJ0UnVsZUZyb21DYXJ0KCkge1xuICAgIEV2ZW50RW1pdHRlci5vbihldmVudE1hcC5jYXJ0UnVsZVJlbW92ZWQsIChjYXJ0SW5mbykgPT4ge1xuICAgICAgdGhpcy5jYXJ0UnVsZXNSZW5kZXJlci5yZW5kZXJDYXJ0UnVsZXNCbG9jayhjYXJ0SW5mby5jYXJ0UnVsZXMsIGNhcnRJbmZvLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIGNhcnQgcnVsZXMgYnkgc2VhcmNoIHBocmFzZVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NlYXJjaChzZWFyY2hQaHJhc2UpIHtcbiAgICBpZiAoc2VhcmNoUGhyYXNlLmxlbmd0aCA8IDMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkLmdldCh0aGlzLnJvdXRlci5nZW5lcmF0ZSgnYWRtaW5fY2FydF9ydWxlc19zZWFyY2gnKSwge1xuICAgICAgc2VhcmNoX3BocmFzZTogc2VhcmNoUGhyYXNlLFxuICAgIH0pLnRoZW4oKGNhcnRSdWxlcykgPT4ge1xuICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRNYXAuY2FydFJ1bGVTZWFyY2hlZCwgY2FydFJ1bGVzKTtcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgc2hvd0Vycm9yTWVzc2FnZShlLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGFnZXMvb3JkZXIvY3JlYXRlL2NhcnQtcnVsZS1tYW5hZ2VyLmpzIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuaW1wb3J0IGNyZWF0ZU9yZGVyTWFwIGZyb20gJy4vY3JlYXRlLW9yZGVyLW1hcCc7XG5pbXBvcnQgQ3VzdG9tZXJSZW5kZXJlciBmcm9tICcuL2N1c3RvbWVyLXJlbmRlcmVyJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2V2ZW50LWVtaXR0ZXInO1xuaW1wb3J0IGV2ZW50TWFwIGZyb20gJy4vZXZlbnQtbWFwJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9yb3V0ZXInO1xuXG5jb25zdCAkID0gd2luZG93LiQ7XG5cbi8qKlxuICogUmVzcG9uc2libGUgZm9yIGN1c3RvbWVycyBtYW5hZ2luZy4gKHNlYXJjaCwgc2VsZWN0LCBnZXQgY3VzdG9tZXIgaW5mbyBldGMuKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21lck1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmN1c3RvbWVySWQgPSBudWxsO1xuICAgIHRoaXMuYWN0aXZlU2VhcmNoUmVxdWVzdCA9IG51bGw7XG5cbiAgICB0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbiAgICB0aGlzLiRjb250YWluZXIgPSAkKGNyZWF0ZU9yZGVyTWFwLmN1c3RvbWVyU2VhcmNoQmxvY2spO1xuICAgIHRoaXMuJHNlYXJjaElucHV0ID0gJChjcmVhdGVPcmRlck1hcC5jdXN0b21lclNlYXJjaElucHV0KTtcbiAgICB0aGlzLiRjdXN0b21lclNlYXJjaFJlc3VsdEJsb2NrID0gJChjcmVhdGVPcmRlck1hcC5jdXN0b21lclNlYXJjaFJlc3VsdHNCbG9jayk7XG4gICAgdGhpcy5jdXN0b21lclJlbmRlcmVyID0gbmV3IEN1c3RvbWVyUmVuZGVyZXIoKTtcblxuICAgIHRoaXMuX2luaXRMaXN0ZW5lcnMoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzZWFyY2g6IHNlYXJjaFBocmFzZSA9PiB0aGlzLl9zZWFyY2goc2VhcmNoUGhyYXNlKSxcbiAgICAgIHNlbGVjdEN1c3RvbWVyOiBldmVudCA9PiB0aGlzLl9zZWxlY3RDdXN0b21lcihldmVudCksXG4gICAgICBsb2FkQ3VzdG9tZXJDYXJ0czogY3VycmVudENhcnRJZCA9PiB0aGlzLl9sb2FkQ3VzdG9tZXJDYXJ0cyhjdXJyZW50Q2FydElkKSxcbiAgICAgIGxvYWRDdXN0b21lck9yZGVyczogKCkgPT4gdGhpcy5fbG9hZEN1c3RvbWVyT3JkZXJzKCksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBldmVudCBsaXN0ZW5lcnNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuJGNvbnRhaW5lci5vbignY2xpY2snLCBjcmVhdGVPcmRlck1hcC5jaGFuZ2VDdXN0b21lckJ0biwgKCkgPT4gdGhpcy5fY2hhbmdlQ3VzdG9tZXIoKSk7XG4gICAgdGhpcy5fb25DdXN0b21lclNlYXJjaCgpO1xuICAgIHRoaXMuX29uQ3VzdG9tZXJTZWxlY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIGZvciBjdXN0b21lciBzZWFyY2ggZXZlbnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkN1c3RvbWVyU2VhcmNoKCkge1xuICAgIEV2ZW50RW1pdHRlci5vbihldmVudE1hcC5jdXN0b21lclNlYXJjaGVkLCAocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlU2VhcmNoUmVxdWVzdCA9IG51bGw7XG4gICAgICB0aGlzLmN1c3RvbWVyUmVuZGVyZXIucmVuZGVyU2VhcmNoUmVzdWx0cyhyZXNwb25zZS5jdXN0b21lcnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgZm9yIGN1c3RvbWVyIHNlbGVjdCBldmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uQ3VzdG9tZXJTZWxlY3QoKSB7XG4gICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50TWFwLmN1c3RvbWVyU2VsZWN0ZWQsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgJGNob29zZUJ0biA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICB0aGlzLmN1c3RvbWVySWQgPSAkY2hvb3NlQnRuLmRhdGEoJ2N1c3RvbWVyLWlkJyk7XG5cbiAgICAgIHRoaXMuY3VzdG9tZXJSZW5kZXJlci5kaXNwbGF5U2VsZWN0ZWRDdXN0b21lckJsb2NrKCRjaG9vc2VCdG4pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdXNlIGNhc2Ugd2hlbiBjdXN0b21lciBpcyBjaGFuZ2VkXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2hhbmdlQ3VzdG9tZXIoKSB7XG4gICAgdGhpcy5jdXN0b21lclJlbmRlcmVyLnNob3dDdXN0b21lclNlYXJjaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGN1c3RvbWVyIGNhcnRzIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIGN1cnJlbnRDYXJ0SWRcbiAgICovXG4gIF9sb2FkQ3VzdG9tZXJDYXJ0cyhjdXJyZW50Q2FydElkKSB7XG4gICAgY29uc3QgY3VzdG9tZXJJZCA9IHRoaXMuY3VzdG9tZXJJZDtcblxuICAgICQuZ2V0KHRoaXMucm91dGVyLmdlbmVyYXRlKCdhZG1pbl9jdXN0b21lcnNfY2FydHMnLCB7Y3VzdG9tZXJJZH0pKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5jdXN0b21lclJlbmRlcmVyLnJlbmRlckNhcnRzKHJlc3BvbnNlLmNhcnRzLCBjdXJyZW50Q2FydElkKTtcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgc2hvd0Vycm9yTWVzc2FnZShlLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBjdXN0b21lciBvcmRlcnMgbGlzdFxuICAgKi9cbiAgX2xvYWRDdXN0b21lck9yZGVycygpIHtcbiAgICBjb25zdCBjdXN0b21lcklkID0gdGhpcy5jdXN0b21lcklkO1xuXG4gICAgJC5nZXQodGhpcy5yb3V0ZXIuZ2VuZXJhdGUoJ2FkbWluX2N1c3RvbWVyc19vcmRlcnMnLCB7Y3VzdG9tZXJJZH0pKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5jdXN0b21lclJlbmRlcmVyLnJlbmRlck9yZGVycyhyZXNwb25zZS5vcmRlcnMpO1xuICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICBzaG93RXJyb3JNZXNzYWdlKGUucmVzcG9uc2VKU09OLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGNob29zZUN1c3RvbWVyRXZlbnRcbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgX3NlbGVjdEN1c3RvbWVyKGNob29zZUN1c3RvbWVyRXZlbnQpIHtcbiAgICBFdmVudEVtaXR0ZXIuZW1pdChldmVudE1hcC5jdXN0b21lclNlbGVjdGVkLCBjaG9vc2VDdXN0b21lckV2ZW50KTtcblxuICAgIHJldHVybiB0aGlzLmN1c3RvbWVySWQ7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIGN1c3RvbWVyc1xuICAgKiBAdG9kbzogZml4IHNob3dpbmcgbm90IGZvdW5kIGN1c3RvbWVycyBhbmQgcmVyZW5kZXIgYWZ0ZXIgY2hhbmdlIGN1c3RvbWVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2VhcmNoKHNlYXJjaFBocmFzZSkge1xuICAgIGlmIChzZWFyY2hQaHJhc2UubGVuZ3RoIDwgMykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFjdGl2ZVNlYXJjaFJlcXVlc3QgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYWN0aXZlU2VhcmNoUmVxdWVzdC5hYm9ydCgpO1xuICAgIH1cblxuICAgIGNvbnN0ICRzZWFyY2hSZXF1ZXN0ID0gJC5nZXQodGhpcy5yb3V0ZXIuZ2VuZXJhdGUoJ2FkbWluX2N1c3RvbWVyc19zZWFyY2gnKSwge1xuICAgICAgY3VzdG9tZXJfc2VhcmNoOiBzZWFyY2hQaHJhc2UsXG4gICAgfSk7XG4gICAgdGhpcy5hY3RpdmVTZWFyY2hSZXF1ZXN0ID0gJHNlYXJjaFJlcXVlc3Q7XG5cbiAgICAkc2VhcmNoUmVxdWVzdC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRNYXAuY3VzdG9tZXJTZWFyY2hlZCwgcmVzcG9uc2UpO1xuICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c1RleHQgPT09ICdhYm9ydCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzaG93RXJyb3JNZXNzYWdlKHJlc3BvbnNlLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9wYWdlcy9vcmRlci9jcmVhdGUvY3VzdG9tZXItbWFuYWdlci5qcyIsImltcG9ydCBjcmVhdGVPcmRlck1hcCBmcm9tICcuL2NyZWF0ZS1vcmRlci1tYXAnO1xuXG4vKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG5pbXBvcnQgUm91dGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcm91dGVyJztcblxuY29uc3QgJCA9IHdpbmRvdy4kO1xuXG4vKipcbiAqIFJlc3BvbnNpYmxlIGZvciBjdXN0b21lciBpbmZvcm1hdGlvbiByZW5kZXJpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tZXJSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJGNvbnRhaW5lciA9ICQoY3JlYXRlT3JkZXJNYXAuY3VzdG9tZXJTZWFyY2hCbG9jayk7XG4gICAgdGhpcy4kY3VzdG9tZXJTZWFyY2hSZXN1bHRCbG9jayA9ICQoY3JlYXRlT3JkZXJNYXAuY3VzdG9tZXJTZWFyY2hSZXN1bHRzQmxvY2spO1xuICAgIHRoaXMucm91dGVyID0gbmV3IFJvdXRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgY3VzdG9tZXIgc2VhcmNoIHJlc3VsdHNcbiAgICpcbiAgICogQHBhcmFtIGZvdW5kQ3VzdG9tZXJzXG4gICAqL1xuICByZW5kZXJTZWFyY2hSZXN1bHRzKGZvdW5kQ3VzdG9tZXJzKSB7XG4gICAgdGhpcy5fY2xlYXJTaG93bkN1c3RvbWVycygpO1xuXG4gICAgaWYgKGZvdW5kQ3VzdG9tZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fc2hvd05vdEZvdW5kQ3VzdG9tZXJzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGN1c3RvbWVySWQgaW4gZm91bmRDdXN0b21lcnMpIHtcbiAgICAgIGNvbnN0IGN1c3RvbWVyUmVzdWx0ID0gZm91bmRDdXN0b21lcnNbY3VzdG9tZXJJZF07XG4gICAgICBjb25zdCBjdXN0b21lciA9IHtcbiAgICAgICAgaWQ6IGN1c3RvbWVySWQsXG4gICAgICAgIGZpcnN0TmFtZTogY3VzdG9tZXJSZXN1bHQuZmlyc3RuYW1lLFxuICAgICAgICBsYXN0TmFtZTogY3VzdG9tZXJSZXN1bHQubGFzdG5hbWUsXG4gICAgICAgIGVtYWlsOiBjdXN0b21lclJlc3VsdC5lbWFpbCxcbiAgICAgICAgYmlydGhkYXk6IGN1c3RvbWVyUmVzdWx0LmJpcnRoZGF5ICE9PSAnMDAwMC0wMC0wMCcgPyBjdXN0b21lclJlc3VsdC5iaXJ0aGRheSA6ICcgJyxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX3JlbmRlckZvdW5kQ3VzdG9tZXIoY3VzdG9tZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgZGlzcGxheWluZyBjdXN0b21lciBibG9jayBhZnRlciBjdXN0b21lciBzZWxlY3RcbiAgICpcbiAgICogQHBhcmFtICR0YXJnZXRlZEJ0blxuICAgKi9cbiAgZGlzcGxheVNlbGVjdGVkQ3VzdG9tZXJCbG9jaygkdGFyZ2V0ZWRCdG4pIHtcbiAgICAkdGFyZ2V0ZWRCdG4uYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gICAgY29uc3QgJGN1c3RvbWVyQ2FyZCA9ICR0YXJnZXRlZEJ0bi5jbG9zZXN0KCcuY2FyZCcpO1xuXG4gICAgJGN1c3RvbWVyQ2FyZC5hZGRDbGFzcygnYm9yZGVyLXN1Y2Nlc3MnKTtcbiAgICAkY3VzdG9tZXJDYXJkLmZpbmQoY3JlYXRlT3JkZXJNYXAuY2hhbmdlQ3VzdG9tZXJCdG4pLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcblxuICAgIHRoaXMuJGNvbnRhaW5lci5maW5kKGNyZWF0ZU9yZGVyTWFwLmN1c3RvbWVyU2VhcmNoUm93KS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgdGhpcy4kY29udGFpbmVyLmZpbmQoY3JlYXRlT3JkZXJNYXAubm90U2VsZWN0ZWRDdXN0b21lclNlYXJjaFJlc3VsdHMpXG4gICAgICAuY2xvc2VzdChjcmVhdGVPcmRlck1hcC5jdXN0b21lclNlYXJjaFJlc3VsdENvbHVtbilcbiAgICAgIC5yZW1vdmUoKVxuICAgIDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBjdXN0b21lciBzZWFyY2ggYmxvY2tcbiAgICovXG4gIHNob3dDdXN0b21lclNlYXJjaCgpIHtcbiAgICB0aGlzLiRjb250YWluZXIuZmluZChjcmVhdGVPcmRlck1hcC5jdXN0b21lclNlYXJjaFJvdykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgY3VzdG9tZXIgY2FydHMgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBjYXJ0c1xuICAgKiBAcGFyYW0ge0ludH0gY3VycmVudENhcnRJZFxuICAgKi9cbiAgcmVuZGVyQ2FydHMoY2FydHMsIGN1cnJlbnRDYXJ0SWQpIHtcbiAgICBjb25zdCAkY2FydHNUYWJsZSA9ICQoY3JlYXRlT3JkZXJNYXAuY3VzdG9tZXJDYXJ0c1RhYmxlKTtcbiAgICBjb25zdCAkY2FydHNUYWJsZVJvd1RlbXBsYXRlID0gJCgkKGNyZWF0ZU9yZGVyTWFwLmN1c3RvbWVyQ2FydHNUYWJsZVJvd1RlbXBsYXRlKS5odG1sKCkpO1xuXG4gICAgJGNhcnRzVGFibGUuZmluZCgndGJvZHknKS5lbXB0eSgpO1xuXG4gICAgaWYgKGNhcnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Nob3dDaGVja291dEhpc3RvcnlCbG9jaygpO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2FydHMpIHtcbiAgICAgIGNvbnN0IGNhcnQgPSBjYXJ0c1trZXldO1xuICAgICAgLy8gZG8gbm90IHJlbmRlciBjdXJyZW50IGNhcnRcbiAgICAgIGlmIChjYXJ0LmNhcnRJZCA9PT0gY3VycmVudENhcnRJZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0ICR0ZW1wbGF0ZSA9ICRjYXJ0c1RhYmxlUm93VGVtcGxhdGUuY2xvbmUoKTtcblxuICAgICAgJHRlbXBsYXRlLmZpbmQoY3JlYXRlT3JkZXJNYXAuY2FydElkRmllbGQpLnRleHQoY2FydC5jYXJ0SWQpO1xuICAgICAgJHRlbXBsYXRlLmZpbmQoY3JlYXRlT3JkZXJNYXAuY2FydERhdGVGaWVsZCkudGV4dChjYXJ0LmNyZWF0aW9uRGF0ZSk7XG4gICAgICAkdGVtcGxhdGUuZmluZChjcmVhdGVPcmRlck1hcC5jYXJ0VG90YWxGaWVsZCkudGV4dChjYXJ0LnRvdGFsUHJpY2UpO1xuICAgICAgJHRlbXBsYXRlLmZpbmQoY3JlYXRlT3JkZXJNYXAuY2FydERldGFpbHNCdG4pLnByb3AoXG4gICAgICAgICdocmVmJyxcbiAgICAgICAgdGhpcy5yb3V0ZXIuZ2VuZXJhdGUoJ2FkbWluX2NhcnRzX3ZpZXcnLCB7Y2FydElkOiBjYXJ0LmNhcnRJZH0pXG4gICAgICApO1xuXG4gICAgICAkdGVtcGxhdGUuZmluZChjcmVhdGVPcmRlck1hcC51c2VDYXJ0QnRuKS5kYXRhKCdjYXJ0LWlkJywgY2FydC5jYXJ0SWQpO1xuXG4gICAgICAkY2FydHNUYWJsZS5maW5kKCd0Ym9keScpLmFwcGVuZCgkdGVtcGxhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGN1c3RvbWVyIG9yZGVycyBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IG9yZGVyc1xuICAgKi9cbiAgcmVuZGVyT3JkZXJzKG9yZGVycykge1xuICAgIGNvbnN0ICRvcmRlcnNUYWJsZSA9ICQoY3JlYXRlT3JkZXJNYXAuY3VzdG9tZXJPcmRlcnNUYWJsZSk7XG4gICAgY29uc3QgJHJvd1RlbXBsYXRlID0gJCgkKGNyZWF0ZU9yZGVyTWFwLmN1c3RvbWVyT3JkZXJzVGFibGVSb3dUZW1wbGF0ZSkuaHRtbCgpKTtcblxuICAgICRvcmRlcnNUYWJsZS5maW5kKCd0Ym9keScpLmVtcHR5KCk7XG5cbiAgICBpZiAob3JkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Nob3dDaGVja291dEhpc3RvcnlCbG9jaygpO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gT2JqZWN0LmtleXMob3JkZXJzKSkge1xuICAgICAgY29uc3Qgb3JkZXIgPSBvcmRlcnNba2V5XTtcbiAgICAgIGNvbnN0ICR0ZW1wbGF0ZSA9ICRyb3dUZW1wbGF0ZS5jbG9uZSgpO1xuXG4gICAgICAkdGVtcGxhdGUuZmluZChjcmVhdGVPcmRlck1hcC5vcmRlcklkRmllbGQpLnRleHQob3JkZXIub3JkZXJJZCk7XG4gICAgICAkdGVtcGxhdGUuZmluZChjcmVhdGVPcmRlck1hcC5vcmRlckRhdGVGaWVsZCkudGV4dChvcmRlci5vcmRlclBsYWNlZERhdGUpO1xuICAgICAgJHRlbXBsYXRlLmZpbmQoY3JlYXRlT3JkZXJNYXAub3JkZXJQcm9kdWN0c0ZpZWxkKS50ZXh0KG9yZGVyLnRvdGFsUHJvZHVjdHNDb3VudCk7XG4gICAgICAkdGVtcGxhdGUuZmluZChjcmVhdGVPcmRlck1hcC5vcmRlclRvdGFsRmllbGQpLnRleHQob3JkZXIudG90YWxQYWlkKTtcbiAgICAgICR0ZW1wbGF0ZS5maW5kKGNyZWF0ZU9yZGVyTWFwLm9yZGVyU3RhdHVzRmllbGQpLnRleHQob3JkZXIub3JkZXJTdGF0dXMpO1xuICAgICAgJHRlbXBsYXRlLmZpbmQoY3JlYXRlT3JkZXJNYXAub3JkZXJEZXRhaWxzQnRuKS5wcm9wKFxuICAgICAgICAnaHJlZicsXG4gICAgICAgIHRoaXMucm91dGVyLmdlbmVyYXRlKCdhZG1pbl9vcmRlcnNfdmlldycsIHtvcmRlcklkOiBvcmRlci5vcmRlcklkfSlcbiAgICAgICk7XG5cbiAgICAgICR0ZW1wbGF0ZS5maW5kKGNyZWF0ZU9yZGVyTWFwLnVzZU9yZGVyQnRuKS5kYXRhKCdvcmRlci1pZCcsIG9yZGVyLm9yZGVySWQpO1xuXG4gICAgICAkb3JkZXJzVGFibGUuZmluZCgndGJvZHknKS5hcHBlbmQoJHRlbXBsYXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBjdXN0b21lciBpbmZvcm1hdGlvbiBhZnRlciBzZWFyY2ggYWN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjdXN0b21lclxuICAgKlxuICAgKiBAcmV0dXJuIHtqUXVlcnl9XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVuZGVyRm91bmRDdXN0b21lcihjdXN0b21lcikge1xuICAgIGNvbnN0ICRjdXN0b21lclNlYXJjaFJlc3VsdFRlbXBsYXRlID0gJCgkKGNyZWF0ZU9yZGVyTWFwLmN1c3RvbWVyU2VhcmNoUmVzdWx0VGVtcGxhdGUpLmh0bWwoKSk7XG4gICAgY29uc3QgJHRlbXBsYXRlID0gJGN1c3RvbWVyU2VhcmNoUmVzdWx0VGVtcGxhdGUuY2xvbmUoKTtcblxuICAgICR0ZW1wbGF0ZS5maW5kKGNyZWF0ZU9yZGVyTWFwLmN1c3RvbWVyU2VhcmNoUmVzdWx0TmFtZSkudGV4dChgJHtjdXN0b21lci5maXJzdE5hbWV9ICR7Y3VzdG9tZXIubGFzdE5hbWV9YCk7XG4gICAgJHRlbXBsYXRlLmZpbmQoY3JlYXRlT3JkZXJNYXAuY3VzdG9tZXJTZWFyY2hSZXN1bHRFbWFpbCkudGV4dChjdXN0b21lci5lbWFpbCk7XG4gICAgJHRlbXBsYXRlLmZpbmQoY3JlYXRlT3JkZXJNYXAuY3VzdG9tZXJTZWFyY2hSZXN1bHRJZCkudGV4dChjdXN0b21lci5pZCk7XG4gICAgJHRlbXBsYXRlLmZpbmQoY3JlYXRlT3JkZXJNYXAuY3VzdG9tZXJTZWFyY2hSZXN1bHRCaXJ0aGRheSkudGV4dChjdXN0b21lci5iaXJ0aGRheSk7XG4gICAgJHRlbXBsYXRlLmZpbmQoY3JlYXRlT3JkZXJNYXAuY2hvb3NlQ3VzdG9tZXJCdG4pLmRhdGEoJ2N1c3RvbWVyLWlkJywgY3VzdG9tZXIuaWQpO1xuICAgICR0ZW1wbGF0ZS5maW5kKGNyZWF0ZU9yZGVyTWFwLmN1c3RvbWVyRGV0YWlsc0J0bikucHJvcChcbiAgICAgICdocmVmJyxcbiAgICAgIHRoaXMucm91dGVyLmdlbmVyYXRlKCdhZG1pbl9jdXN0b21lcnNfdmlldycsIHtjdXN0b21lcklkOiBjdXN0b21lci5pZH0pXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLiRjdXN0b21lclNlYXJjaFJlc3VsdEJsb2NrLmFwcGVuZCgkdGVtcGxhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGNoZWNrb3V0IGhpc3RvcnkgYmxvY2sgd2hlcmUgY2FydHMgYW5kIG9yZGVycyBhcmUgcmVuZGVyZWRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zaG93Q2hlY2tvdXRIaXN0b3J5QmxvY2soKSB7XG4gICAgJChjcmVhdGVPcmRlck1hcC5jdXN0b21lckNoZWNrb3V0SGlzdG9yeSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBzaG93biBjdXN0b21lcnNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jbGVhclNob3duQ3VzdG9tZXJzKCkge1xuICAgIHRoaXMuJGN1c3RvbWVyU2VhcmNoUmVzdWx0QmxvY2suZW1wdHkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBlbXB0eSByZXN1bHQgd2hlbiBjdXN0b21lciBpcyBub3QgZm91bmRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zaG93Tm90Rm91bmRDdXN0b21lcnMoKSB7XG4gICAgY29uc3QgJGVtcHR5UmVzdWx0VGVtcGxhdGUgPSAkKCQoJyNjdXN0b21lclNlYXJjaEVtcHR5UmVzdWx0VGVtcGxhdGUnKS5odG1sKCkpO1xuXG4gICAgdGhpcy4kY3VzdG9tZXJTZWFyY2hSZXN1bHRCbG9jay5hcHBlbmQoJGVtcHR5UmVzdWx0VGVtcGxhdGUpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9wYWdlcy9vcmRlci9jcmVhdGUvY3VzdG9tZXItcmVuZGVyZXIuanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG5pbXBvcnQgQ2FydEVkaXRvciBmcm9tICcuL2NhcnQtZWRpdG9yJztcbmltcG9ydCBjcmVhdGVPcmRlck1hcCBmcm9tICcuL2NyZWF0ZS1vcmRlci1tYXAnO1xuaW1wb3J0IGV2ZW50TWFwIGZyb20gJy4vZXZlbnQtbWFwJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2V2ZW50LWVtaXR0ZXInO1xuaW1wb3J0IFByb2R1Y3RSZW5kZXJlciBmcm9tICcuL3Byb2R1Y3QtcmVuZGVyZXInO1xuaW1wb3J0IFJvdXRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3JvdXRlcic7XG5cbmNvbnN0ICQgPSB3aW5kb3cuJDtcblxuLyoqXG4gKiBQcm9kdWN0IGNvbXBvbmVudCBPYmplY3QgZm9yIFwiQ3JlYXRlIG9yZGVyXCIgcGFnZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvZHVjdHMgPSB7fTtcbiAgICB0aGlzLnNlbGVjdGVkUHJvZHVjdElkID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkQ29tYmluYXRpb25JZCA9IG51bGw7XG4gICAgdGhpcy5hY3RpdmVTZWFyY2hSZXF1ZXN0ID0gbnVsbDtcblxuICAgIHRoaXMucHJvZHVjdFJlbmRlcmVyID0gbmV3IFByb2R1Y3RSZW5kZXJlcigpO1xuICAgIHRoaXMucm91dGVyID0gbmV3IFJvdXRlcigpO1xuICAgIHRoaXMuY2FydEVkaXRvciA9IG5ldyBDYXJ0RWRpdG9yKCk7XG5cbiAgICB0aGlzLl9pbml0TGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VhcmNoOiBzZWFyY2hQaHJhc2UgPT4gdGhpcy5fc2VhcmNoKHNlYXJjaFBocmFzZSksXG4gICAgICBhZGRQcm9kdWN0VG9DYXJ0OiBjYXJ0SWQgPT4gdGhpcy5jYXJ0RWRpdG9yLmFkZFByb2R1Y3QoY2FydElkLCB0aGlzLl9nZXRQcm9kdWN0RGF0YSgpKSxcbiAgICAgIHJlbW92ZVByb2R1Y3RGcm9tQ2FydDogKGNhcnRJZCwgcHJvZHVjdCkgPT4gdGhpcy5jYXJ0RWRpdG9yLnJlbW92ZVByb2R1Y3RGcm9tQ2FydChjYXJ0SWQsIHByb2R1Y3QpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgZXZlbnQgbGlzdGVuZXJzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdExpc3RlbmVycygpIHtcbiAgICAkKGNyZWF0ZU9yZGVyTWFwLnByb2R1Y3RTZWxlY3QpLm9uKCdjaGFuZ2UnLCBlID0+IHRoaXMuX2luaXRQcm9kdWN0U2VsZWN0KGUpKTtcbiAgICAkKGNyZWF0ZU9yZGVyTWFwLmNvbWJpbmF0aW9uc1NlbGVjdCkub24oJ2NoYW5nZScsIGUgPT4gdGhpcy5faW5pdENvbWJpbmF0aW9uU2VsZWN0KGUpKTtcblxuICAgIHRoaXMuX29uUHJvZHVjdFNlYXJjaCgpO1xuICAgIHRoaXMuX29uQWRkUHJvZHVjdFRvQ2FydCgpO1xuICAgIHRoaXMuX29uUmVtb3ZlUHJvZHVjdEZyb21DYXJ0KCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyBmb3IgcHJvZHVjdCBzZWFyY2ggZXZlbnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vblByb2R1Y3RTZWFyY2goKSB7XG4gICAgRXZlbnRFbWl0dGVyLm9uKGV2ZW50TWFwLnByb2R1Y3RTZWFyY2hlZCwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnByb2R1Y3RzID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICB0aGlzLnByb2R1Y3RSZW5kZXJlci5yZW5kZXJTZWFyY2hSZXN1bHRzKHRoaXMucHJvZHVjdHMpO1xuICAgICAgdGhpcy5fc2VsZWN0Rmlyc3RSZXN1bHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIGZvciBhZGQgcHJvZHVjdCB0byBjYXJ0IGV2ZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25BZGRQcm9kdWN0VG9DYXJ0KCkge1xuICAgIEV2ZW50RW1pdHRlci5vbihldmVudE1hcC5wcm9kdWN0QWRkZWRUb0NhcnQsIChjYXJ0SW5mbykgPT4ge1xuICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRNYXAuY2FydExvYWRlZCwgY2FydEluZm8pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgZm9yIHJlbW92ZSBwcm9kdWN0IGZyb20gY2FydCBldmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uUmVtb3ZlUHJvZHVjdEZyb21DYXJ0KCkge1xuICAgIEV2ZW50RW1pdHRlci5vbihldmVudE1hcC5wcm9kdWN0UmVtb3ZlZEZyb21DYXJ0LCAoY2FydEluZm8pID0+IHtcbiAgICAgIEV2ZW50RW1pdHRlci5lbWl0KGV2ZW50TWFwLmNhcnRMb2FkZWQsIGNhcnRJbmZvKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBwcm9kdWN0IHNlbGVjdFxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0UHJvZHVjdFNlbGVjdChldmVudCkge1xuICAgIGNvbnN0IHByb2R1Y3RJZCA9IE51bWJlcigkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmZpbmQoJzpzZWxlY3RlZCcpLnZhbCgpKTtcbiAgICB0aGlzLl9zZWxlY3RQcm9kdWN0KHByb2R1Y3RJZCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgY29tYmluYXRpb24gc2VsZWN0XG4gICAqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXRDb21iaW5hdGlvblNlbGVjdChldmVudCkge1xuICAgIGNvbnN0IGNvbWJpbmF0aW9uSWQgPSBOdW1iZXIoJChldmVudC5jdXJyZW50VGFyZ2V0KS5maW5kKCc6c2VsZWN0ZWQnKS52YWwoKSk7XG4gICAgdGhpcy5fc2VsZWN0Q29tYmluYXRpb24oY29tYmluYXRpb25JZCk7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIHByb2R1Y3RcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZWFyY2goc2VhcmNoUGhyYXNlKSB7XG4gICAgaWYgKHNlYXJjaFBocmFzZS5sZW5ndGggPCAzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlU2VhcmNoUmVxdWVzdCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hY3RpdmVTZWFyY2hSZXF1ZXN0LmFib3J0KCk7XG4gICAgfVxuXG4gICAgJC5nZXQodGhpcy5yb3V0ZXIuZ2VuZXJhdGUoJ2FkbWluX3Byb2R1Y3RzX3NlYXJjaCcpLCB7XG4gICAgICBzZWFyY2hfcGhyYXNlOiBzZWFyY2hQaHJhc2UsXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIEV2ZW50RW1pdHRlci5lbWl0KGV2ZW50TWFwLnByb2R1Y3RTZWFyY2hlZCwgcmVzcG9uc2UpO1xuICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c1RleHQgPT09ICdhYm9ydCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzaG93RXJyb3JNZXNzYWdlKHJlc3BvbnNlLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWF0ZSBmaXJzdCByZXN1bHQgZGF0YXNldCBhZnRlciBzZWFyY2hcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZWxlY3RGaXJzdFJlc3VsdCgpIHtcbiAgICB0aGlzLl91bnNldFByb2R1Y3QoKTtcblxuICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy5fc2VsZWN0UHJvZHVjdChPYmplY3Qua2V5cyh0aGlzLnByb2R1Y3RzKVswXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdXNlIGNhc2Ugd2hlbiBwcm9kdWN0IGlzIHNlbGVjdGVkIGZyb20gc2VhcmNoIHJlc3VsdHNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICpcbiAgICogQHBhcmFtIHByb2R1Y3RJZFxuICAgKi9cbiAgX3NlbGVjdFByb2R1Y3QocHJvZHVjdElkKSB7XG4gICAgdGhpcy5fdW5zZXRDb21iaW5hdGlvbigpO1xuXG4gICAgdGhpcy5zZWxlY3RlZFByb2R1Y3RJZCA9IHByb2R1Y3RJZDtcbiAgICBjb25zdCBwcm9kdWN0ID0gdGhpcy5wcm9kdWN0c1twcm9kdWN0SWRdO1xuXG4gICAgdGhpcy5wcm9kdWN0UmVuZGVyZXIucmVuZGVyUHJvZHVjdE1ldGFkYXRhKHByb2R1Y3QpO1xuXG4gICAgLy8gaWYgcHJvZHVjdCBoYXMgY29tYmluYXRpb25zIHNlbGVjdCB0aGUgZmlyc3QgZWxzZSBsZWF2ZSBpdCBudWxsXG4gICAgaWYgKHByb2R1Y3QuY29tYmluYXRpb25zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy5fc2VsZWN0Q29tYmluYXRpb24oT2JqZWN0LmtleXMocHJvZHVjdC5jb21iaW5hdGlvbnMpWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZHVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHVzZSBjYXNlIHdoZW4gbmV3IGNvbWJpbmF0aW9uIGlzIHNlbGVjdGVkXG4gICAqXG4gICAqIEBwYXJhbSBjb21iaW5hdGlvbklkXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2VsZWN0Q29tYmluYXRpb24oY29tYmluYXRpb25JZCkge1xuICAgIGNvbnN0IGNvbWJpbmF0aW9uID0gdGhpcy5wcm9kdWN0c1t0aGlzLnNlbGVjdGVkUHJvZHVjdElkXS5jb21iaW5hdGlvbnNbY29tYmluYXRpb25JZF07XG5cbiAgICB0aGlzLnNlbGVjdGVkQ29tYmluYXRpb25JZCA9IGNvbWJpbmF0aW9uSWQ7XG4gICAgdGhpcy5wcm9kdWN0UmVuZGVyZXIucmVuZGVyU3RvY2soY29tYmluYXRpb24uc3RvY2spO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNlbGVjdGVkIGNvbWJpbmF0aW9uIGlkIHRvIG51bGxcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91bnNldENvbWJpbmF0aW9uKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRDb21iaW5hdGlvbklkID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzZWxlY3RlZCBwcm9kdWN0IGlkIHRvIG51bGxcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91bnNldFByb2R1Y3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZFByb2R1Y3RJZCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHByb2R1Y3QgZGF0YSBmcm9tIHByb2R1Y3Qgc2VhcmNoIHJlc3VsdCBibG9jayBmaWVsZHNcbiAgICpcbiAgICogQHJldHVybnMge0Zvcm1EYXRhfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2dldFByb2R1Y3REYXRhKCkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2R1Y3RJZCcsIHRoaXMuc2VsZWN0ZWRQcm9kdWN0SWQpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgncXVhbnRpdHknLCAkKGNyZWF0ZU9yZGVyTWFwLnF1YW50aXR5SW5wdXQpLnZhbCgpKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbWJpbmF0aW9uSWQnLCB0aGlzLnNlbGVjdGVkQ29tYmluYXRpb25JZCk7XG5cbiAgICB0aGlzLl9nZXRDdXN0b21GaWVsZHNEYXRhKGZvcm1EYXRhKTtcblxuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBwcm9kdWN0IGN1c3RvbWl6YXRpb24gZmllbGRzIHRvIGJlIGFkZGVkIHRvIGZvcm1EYXRhIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YVxuICAgKlxuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2V0Q3VzdG9tRmllbGRzRGF0YShmb3JtRGF0YSkge1xuICAgIGNvbnN0ICRjdXN0b21GaWVsZHMgPSAkKGNyZWF0ZU9yZGVyTWFwLnByb2R1Y3RDdXN0b21JbnB1dCk7XG5cbiAgICAkY3VzdG9tRmllbGRzLmVhY2goKGtleSwgZmllbGQpID0+IHtcbiAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuICAgICAgY29uc3QgbmFtZSA9ICRmaWVsZC5hdHRyKCduYW1lJyk7XG5cbiAgICAgIGlmICgkZmllbGQuYXR0cigndHlwZScpID09PSAnZmlsZScpIHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKG5hbWUsICRmaWVsZFswXS5maWxlc1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQobmFtZSwgJGZpZWxkLnZhbCgpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmb3JtRGF0YTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGFnZXMvb3JkZXIvY3JlYXRlL3Byb2R1Y3QtbWFuYWdlci5qcyIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5cbmltcG9ydCBjcmVhdGVPcmRlclBhZ2VNYXAgZnJvbSAnLi9jcmVhdGUtb3JkZXItbWFwJztcblxuY29uc3QgJCA9IHdpbmRvdy4kO1xuXG4vKipcbiAqIE1hbnVwdWxhdGVzIFVJIG9mIFNoaXBwaW5nIGJsb2NrIGluIE9yZGVyIGNyZWF0aW9uIHBhZ2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHBpbmdSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJGNvbnRhaW5lciA9ICQoY3JlYXRlT3JkZXJQYWdlTWFwLnNoaXBwaW5nQmxvY2spO1xuICAgIHRoaXMuJGZvcm0gPSAkKGNyZWF0ZU9yZGVyUGFnZU1hcC5zaGlwcGluZ0Zvcm0pO1xuICAgIHRoaXMuJG5vQ2FycmllckJsb2NrID0gJChjcmVhdGVPcmRlclBhZ2VNYXAubm9DYXJyaWVyQmxvY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzaGlwcGluZ1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGVtcHR5Q2FydFxuICAgKi9cbiAgcmVuZGVyKHNoaXBwaW5nLCBlbXB0eUNhcnQpIHtcbiAgICBjb25zdCBzaGlwcGluZ0lzQXZhaWxhYmxlID0gdHlwZW9mIHNoaXBwaW5nICE9PSAndW5kZWZpbmVkJyAmJiBzaGlwcGluZyAhPT0gbnVsbCAmJiBzaGlwcGluZy5sZW5ndGggIT09IDA7XG5cbiAgICBpZiAoZW1wdHlDYXJ0KSB7XG4gICAgICB0aGlzLl9oaWRlQ29udGFpbmVyKCk7XG4gICAgfSBlbHNlIGlmIChzaGlwcGluZ0lzQXZhaWxhYmxlKSB7XG4gICAgICB0aGlzLl9kaXNwbGF5Rm9ybShzaGlwcGluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2Rpc3BsYXlOb0NhcnJpZXJzV2FybmluZygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGZvcm0gYmxvY2sgd2l0aCByZW5kZXJlZCBkZWxpdmVyeSBvcHRpb25zIGluc3RlYWQgb2Ygd2FybmluZyBtZXNzYWdlXG4gICAqXG4gICAqIEBwYXJhbSBzaGlwcGluZ1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2Rpc3BsYXlGb3JtKHNoaXBwaW5nKSB7XG4gICAgdGhpcy5faGlkZU5vQ2FycmllckJsb2NrKCk7XG4gICAgdGhpcy5fcmVuZGVyRGVsaXZlcnlPcHRpb25zKHNoaXBwaW5nLmRlbGl2ZXJ5T3B0aW9ucywgc2hpcHBpbmcuc2VsZWN0ZWRDYXJyaWVySWQpO1xuICAgIHRoaXMuX3JlbmRlclRvdGFsU2hpcHBpbmcoc2hpcHBpbmcuc2hpcHBpbmdQcmljZSk7XG4gICAgdGhpcy5fc2hvd0Zvcm0oKTtcbiAgICB0aGlzLl9zaG93Q29udGFpbmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB3YXJuaW5nIG1lc3NhZ2UgdGhhdCBubyBjYXJyaWVycyBhcmUgYXZhaWxhYmxlIGFuZCBoaWRlIGZvcm0gYmxvY2tcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9kaXNwbGF5Tm9DYXJyaWVyc1dhcm5pbmcoKSB7XG4gICAgdGhpcy5fc2hvd0NvbnRhaW5lcigpO1xuICAgIHRoaXMuX2hpZGVGb3JtKCk7XG4gICAgdGhpcy5fc2hvd05vQ2FycmllckJsb2NrKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBkZWxpdmVyeSBvcHRpb25zIHNlbGVjdGlvbiBibG9ja1xuICAgKlxuICAgKiBAcGFyYW0gZGVsaXZlcnlPcHRpb25zXG4gICAqIEBwYXJhbSBzZWxlY3RlZFZhbFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlbmRlckRlbGl2ZXJ5T3B0aW9ucyhkZWxpdmVyeU9wdGlvbnMsIHNlbGVjdGVkVmFsKSB7XG4gICAgY29uc3QgJGRlbGl2ZXJ5T3B0aW9uU2VsZWN0ID0gJChjcmVhdGVPcmRlclBhZ2VNYXAuZGVsaXZlcnlPcHRpb25TZWxlY3QpO1xuICAgICRkZWxpdmVyeU9wdGlvblNlbGVjdC5lbXB0eSgpO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gT2JqZWN0LmtleXMoZGVsaXZlcnlPcHRpb25zKSkge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZGVsaXZlcnlPcHRpb25zW2tleV07XG5cbiAgICAgIGNvbnN0IGRlbGl2ZXJ5T3B0aW9uID0ge1xuICAgICAgICB2YWx1ZTogb3B0aW9uLmNhcnJpZXJJZCxcbiAgICAgICAgdGV4dDogYCR7b3B0aW9uLmNhcnJpZXJOYW1lfSAtICR7b3B0aW9uLmNhcnJpZXJEZWxheX1gLFxuICAgICAgfTtcblxuICAgICAgaWYgKHNlbGVjdGVkVmFsID09PSBkZWxpdmVyeU9wdGlvbi52YWx1ZSkge1xuICAgICAgICBkZWxpdmVyeU9wdGlvbi5zZWxlY3RlZCA9ICdzZWxlY3RlZCc7XG4gICAgICB9XG5cbiAgICAgICRkZWxpdmVyeU9wdGlvblNlbGVjdC5hcHBlbmQoJCgnPG9wdGlvbj4nLCBkZWxpdmVyeU9wdGlvbikpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGR5bmFtaWMgdmFsdWUgb2Ygc2hpcHBpbmcgcHJpY2VcbiAgICpcbiAgICogQHBhcmFtIHNoaXBwaW5nUHJpY2VcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZW5kZXJUb3RhbFNoaXBwaW5nKHNoaXBwaW5nUHJpY2UpIHtcbiAgICBjb25zdCAkdG90YWxTaGlwcGluZ0ZpZWxkID0gJChjcmVhdGVPcmRlclBhZ2VNYXAudG90YWxTaGlwcGluZ0ZpZWxkKTtcbiAgICAkdG90YWxTaGlwcGluZ0ZpZWxkLmVtcHR5KCk7XG5cbiAgICAkdG90YWxTaGlwcGluZ0ZpZWxkLmFwcGVuZChzaGlwcGluZ1ByaWNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHdob2xlIHNoaXBwaW5nIGNvbnRhaW5lclxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3Nob3dDb250YWluZXIoKSB7XG4gICAgdGhpcy4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHdob2xlIHNoaXBwaW5nIGNvbnRhaW5lclxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hpZGVDb250YWluZXIoKSB7XG4gICAgdGhpcy4kY29udGFpbmVyLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGZvcm0gYmxvY2tcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zaG93Rm9ybSgpIHtcbiAgICB0aGlzLiRmb3JtLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIGZvcm0gYmxvY2tcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oaWRlRm9ybSgpIHtcbiAgICB0aGlzLiRmb3JtLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHdhcm5pbmcgbWVzc2FnZSBibG9jayB3aGljaCB3YXJucyB0aGF0IG5vIGNhcnJpZXJzIGFyZSBhdmFpbGFibGVcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zaG93Tm9DYXJyaWVyQmxvY2soKSB7XG4gICAgdGhpcy4kbm9DYXJyaWVyQmxvY2sucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgd2FybmluZyBtZXNzYWdlIGJsb2NrIHdoaWNoIHdhcm5zIHRoYXQgbm8gY2FycmllcnMgYXJlIGF2YWlsYWJsZVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hpZGVOb0NhcnJpZXJCbG9jaygpIHtcbiAgICB0aGlzLiRub0NhcnJpZXJCbG9jay5hZGRDbGFzcygnZC1ub25lJyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BhZ2VzL29yZGVyL2NyZWF0ZS9zaGlwcGluZy1yZW5kZXJlci5qcyIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5cbi8qKlxuICogRW5jYXBzdWxhdGVzIGpzIGV2ZW50cyB1c2VkIGluIGNyZWF0ZSBvcmRlciBwYWdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gd2hlbiBjdXN0b21lciBzZWFyY2ggYWN0aW9uIGlzIGRvbmVcbiAgY3VzdG9tZXJTZWFyY2hlZDogJ2N1c3RvbWVyU2VhcmNoZWQnLFxuICAvLyB3aGVuIG5ldyBjdXN0b21lciBpcyBzZWxlY3RlZFxuICBjdXN0b21lclNlbGVjdGVkOiAnY3VzdG9tZXJTZWxlY3RlZCcsXG4gIC8vIHdoZW4gbmV3IGNhcnQgaXMgbG9hZGVkLCBubyBtYXR0ZXIgaWYgaXRzIGVtcHR5LCBzZWxlY3RlZCBmcm9tIGNhcnRzIGxpc3Qgb3IgZHVwbGljYXRlZCBieSBvcmRlci5cbiAgY2FydExvYWRlZDogJ2NhcnRMb2FkZWQnLFxuICAvLyB3aGVuIGNhcnQgYWRkcmVzc2VzIGluZm9ybWF0aW9uIGhhcyBiZWVuIGNoYW5nZWRcbiAgY2FydEFkZHJlc3Nlc0NoYW5nZWQ6ICdjYXJ0QWRkcmVzc2VzQ2hhbmdlZCcsXG4gIC8vIHdoZW4gY2FydCBkZWxpdmVyeSBvcHRpb24gaGFzIGJlZW4gY2hhbmdlZFxuICBjYXJ0RGVsaXZlcnlPcHRpb25DaGFuZ2VkOiAnY2FydERlbGl2ZXJ5T3B0aW9uQ2hhbmdlZCcsXG4gIC8vIHdoZW4gY2FydCBmcmVlIHNoaXBwaW5nIHZhbHVlIGhhcyBiZWVuIGNoYW5nZWRcbiAgY2FydEZyZWVTaGlwcGluZ1NldDogJ2NhcnRGcmVlU2hpcHBpbmdTZXQnLFxuICAvLyB3aGVuIGNhcnQgcnVsZXMgc2VhcmNoIGFjdGlvbiBpcyBkb25lXG4gIGNhcnRSdWxlU2VhcmNoZWQ6ICdjYXJ0UnVsZVNlYXJjaGVkJyxcbiAgLy8gd2hlbiBjYXJ0IHJ1bGUgaXMgcmVtb3ZlZCBmcm9tIGNhcnRcbiAgY2FydFJ1bGVSZW1vdmVkOiAnY2FydFJ1bGVSZW1vdmVkJyxcbiAgLy8gd2hlbiBjYXJ0IHJ1bGUgaXMgYWRkZWQgdG8gY2FydFxuICBjYXJ0UnVsZUFkZGVkOiAnY2FydFJ1bGVBZGRlZCcsXG4gIC8vIHdoZW4gY2FydCBydWxlIGNhbm5vdCBiZSBhZGRlZCB0byBjYXJ0XG4gIGNhcnRSdWxlRmFpbGVkVG9BZGQ6ICdjYXJ0UnVsZUZhaWxlZFRvQWRkJyxcbiAgLy8gd2hlbiBwcm9kdWN0IHNlYXJjaCBhY3Rpb24gaXMgZG9uZVxuICBwcm9kdWN0U2VhcmNoZWQ6ICdwcm9kdWN0U2VhcmNoZWQnLFxuICAvLyB3aGVuIHByb2R1Y3QgaXMgYWRkZWQgdG8gY2FydFxuICBwcm9kdWN0QWRkZWRUb0NhcnQ6ICdwcm9kdWN0QWRkZWRUb0NhcnQnLFxuICAvLyB3aGVuIHByb2R1Y3QgaXMgcmVtb3ZlZCBmcm9tIGNhcnRcbiAgcHJvZHVjdFJlbW92ZWRGcm9tQ2FydDogJ3Byb2R1Y3RSZW1vdmVkRnJvbUNhcnQnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BhZ2VzL29yZGVyL2NyZWF0ZS9ldmVudC1tYXAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImJhc2VfdXJsXCI6XCJcIixcInJvdXRlc1wiOntcImFkbWluX3Byb2R1Y3RzX3NlYXJjaFwiOntcInRva2Vuc1wiOltbXCJ0ZXh0XCIsXCIvc2VsbC9jYXRhbG9nL3Byb2R1Y3RzL3NlYXJjaFwiXV0sXCJkZWZhdWx0c1wiOltdLFwicmVxdWlyZW1lbnRzXCI6W10sXCJob3N0dG9rZW5zXCI6W10sXCJtZXRob2RzXCI6W1wiR0VUXCJdLFwic2NoZW1lc1wiOltdfSxcImFkbWluX2NhcnRfcnVsZXNfc2VhcmNoXCI6e1widG9rZW5zXCI6W1tcInRleHRcIixcIi9zZWxsL2NhdGFsb2cvY2FydC1ydWxlcy9zZWFyY2hcIl1dLFwiZGVmYXVsdHNcIjpbXSxcInJlcXVpcmVtZW50c1wiOltdLFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIkdFVFwiXSxcInNjaGVtZXNcIjpbXX0sXCJhZG1pbl9jdXN0b21lcnNfdmlld1wiOntcInRva2Vuc1wiOltbXCJ0ZXh0XCIsXCIvdmlld1wiXSxbXCJ2YXJpYWJsZVwiLFwiL1wiLFwiXFxcXGQrXCIsXCJjdXN0b21lcklkXCJdLFtcInRleHRcIixcIi9zZWxsL2N1c3RvbWVyc1wiXV0sXCJkZWZhdWx0c1wiOltdLFwicmVxdWlyZW1lbnRzXCI6e1wiY3VzdG9tZXJJZFwiOlwiXFxcXGQrXCJ9LFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiUE9TVFwiXSxcInNjaGVtZXNcIjpbXX0sXCJhZG1pbl9jdXN0b21lcnNfc2VhcmNoXCI6e1widG9rZW5zXCI6W1tcInRleHRcIixcIi9zZWxsL2N1c3RvbWVycy9zZWFyY2hcIl1dLFwiZGVmYXVsdHNcIjpbXSxcInJlcXVpcmVtZW50c1wiOltdLFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIkdFVFwiXSxcInNjaGVtZXNcIjpbXX0sXCJhZG1pbl9jdXN0b21lcnNfY2FydHNcIjp7XCJ0b2tlbnNcIjpbW1widGV4dFwiLFwiL2NhcnRzXCJdLFtcInZhcmlhYmxlXCIsXCIvXCIsXCJcXFxcZCtcIixcImN1c3RvbWVySWRcIl0sW1widGV4dFwiLFwiL3NlbGwvY3VzdG9tZXJzXCJdXSxcImRlZmF1bHRzXCI6W10sXCJyZXF1aXJlbWVudHNcIjp7XCJjdXN0b21lcklkXCI6XCJcXFxcZCtcIn0sXCJob3N0dG9rZW5zXCI6W10sXCJtZXRob2RzXCI6W1wiR0VUXCJdLFwic2NoZW1lc1wiOltdfSxcImFkbWluX2N1c3RvbWVyc19vcmRlcnNcIjp7XCJ0b2tlbnNcIjpbW1widGV4dFwiLFwiL29yZGVyc1wiXSxbXCJ2YXJpYWJsZVwiLFwiL1wiLFwiXFxcXGQrXCIsXCJjdXN0b21lcklkXCJdLFtcInRleHRcIixcIi9zZWxsL2N1c3RvbWVyc1wiXV0sXCJkZWZhdWx0c1wiOltdLFwicmVxdWlyZW1lbnRzXCI6e1wiY3VzdG9tZXJJZFwiOlwiXFxcXGQrXCJ9LFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIkdFVFwiXSxcInNjaGVtZXNcIjpbXX0sXCJhZG1pbl9jYXJ0c192aWV3XCI6e1widG9rZW5zXCI6W1tcInRleHRcIixcIi92aWV3XCJdLFtcInZhcmlhYmxlXCIsXCIvXCIsXCJcXFxcZCtcIixcImNhcnRJZFwiXSxbXCJ0ZXh0XCIsXCIvc2VsbC9vcmRlcnMvY2FydHNcIl1dLFwiZGVmYXVsdHNcIjpbXSxcInJlcXVpcmVtZW50c1wiOntcImNhcnRJZFwiOlwiXFxcXGQrXCJ9LFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIkdFVFwiXSxcInNjaGVtZXNcIjpbXX0sXCJhZG1pbl9jYXJ0c19pbmZvXCI6e1widG9rZW5zXCI6W1tcInRleHRcIixcIi9pbmZvXCJdLFtcInZhcmlhYmxlXCIsXCIvXCIsXCJcXFxcZCtcIixcImNhcnRJZFwiXSxbXCJ0ZXh0XCIsXCIvc2VsbC9vcmRlcnMvY2FydHNcIl1dLFwiZGVmYXVsdHNcIjpbXSxcInJlcXVpcmVtZW50c1wiOntcImNhcnRJZFwiOlwiXFxcXGQrXCJ9LFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIkdFVFwiXSxcInNjaGVtZXNcIjpbXX0sXCJhZG1pbl9jYXJ0c19jcmVhdGVcIjp7XCJ0b2tlbnNcIjpbW1widGV4dFwiLFwiL3NlbGwvb3JkZXJzL2NhcnRzL25ld1wiXV0sXCJkZWZhdWx0c1wiOltdLFwicmVxdWlyZW1lbnRzXCI6W10sXCJob3N0dG9rZW5zXCI6W10sXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInNjaGVtZXNcIjpbXX0sXCJhZG1pbl9jYXJ0c19lZGl0X2FkZHJlc3Nlc1wiOntcInRva2Vuc1wiOltbXCJ0ZXh0XCIsXCIvYWRkcmVzc2VzXCJdLFtcInZhcmlhYmxlXCIsXCIvXCIsXCJcXFxcZCtcIixcImNhcnRJZFwiXSxbXCJ0ZXh0XCIsXCIvc2VsbC9vcmRlcnMvY2FydHNcIl1dLFwiZGVmYXVsdHNcIjpbXSxcInJlcXVpcmVtZW50c1wiOntcImNhcnRJZFwiOlwiXFxcXGQrXCJ9LFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJzY2hlbWVzXCI6W119LFwiYWRtaW5fY2FydHNfZWRpdF9jYXJyaWVyXCI6e1widG9rZW5zXCI6W1tcInRleHRcIixcIi9jYXJyaWVyXCJdLFtcInZhcmlhYmxlXCIsXCIvXCIsXCJcXFxcZCtcIixcImNhcnRJZFwiXSxbXCJ0ZXh0XCIsXCIvc2VsbC9vcmRlcnMvY2FydHNcIl1dLFwiZGVmYXVsdHNcIjpbXSxcInJlcXVpcmVtZW50c1wiOntcImNhcnRJZFwiOlwiXFxcXGQrXCJ9LFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJzY2hlbWVzXCI6W119LFwiYWRtaW5fY2FydHNfc2V0X2ZyZWVfc2hpcHBpbmdcIjp7XCJ0b2tlbnNcIjpbW1widGV4dFwiLFwiL3J1bGVzL2ZyZWUtc2hpcHBpbmdcIl0sW1widmFyaWFibGVcIixcIi9cIixcIlxcXFxkK1wiLFwiY2FydElkXCJdLFtcInRleHRcIixcIi9zZWxsL29yZGVycy9jYXJ0c1wiXV0sXCJkZWZhdWx0c1wiOltdLFwicmVxdWlyZW1lbnRzXCI6e1wiY2FydElkXCI6XCJcXFxcZCtcIn0sXCJob3N0dG9rZW5zXCI6W10sXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInNjaGVtZXNcIjpbXX0sXCJhZG1pbl9jYXJ0c19hZGRfY2FydF9ydWxlXCI6e1widG9rZW5zXCI6W1tcInRleHRcIixcIi9jYXJ0LXJ1bGVzXCJdLFtcInZhcmlhYmxlXCIsXCIvXCIsXCJbXi9dKytcIixcImNhcnRJZFwiXSxbXCJ0ZXh0XCIsXCIvc2VsbC9vcmRlcnMvY2FydHNcIl1dLFwiZGVmYXVsdHNcIjpbXSxcInJlcXVpcmVtZW50c1wiOltdLFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJzY2hlbWVzXCI6W119LFwiYWRtaW5fY2FydHNfZGVsZXRlX2NhcnRfcnVsZVwiOntcInRva2Vuc1wiOltbXCJ0ZXh0XCIsXCIvZGVsZXRlXCJdLFtcInZhcmlhYmxlXCIsXCIvXCIsXCJbXi9dKytcIixcImNhcnRSdWxlSWRcIl0sW1widGV4dFwiLFwiL2NhcnQtcnVsZXNcIl0sW1widmFyaWFibGVcIixcIi9cIixcIlteL10rK1wiLFwiY2FydElkXCJdLFtcInRleHRcIixcIi9zZWxsL29yZGVycy9jYXJ0c1wiXV0sXCJkZWZhdWx0c1wiOltdLFwicmVxdWlyZW1lbnRzXCI6W10sXCJob3N0dG9rZW5zXCI6W10sXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInNjaGVtZXNcIjpbXX0sXCJhZG1pbl9jYXJ0c19hZGRfcHJvZHVjdFwiOntcInRva2Vuc1wiOltbXCJ0ZXh0XCIsXCIvcHJvZHVjdHNcIl0sW1widmFyaWFibGVcIixcIi9cIixcIlxcXFxkK1wiLFwiY2FydElkXCJdLFtcInRleHRcIixcIi9zZWxsL29yZGVycy9jYXJ0c1wiXV0sXCJkZWZhdWx0c1wiOltdLFwicmVxdWlyZW1lbnRzXCI6e1wiY2FydElkXCI6XCJcXFxcZCtcIixcInByb2R1Y3RJZFwiOlwiXFxcXGQrXCJ9LFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJzY2hlbWVzXCI6W119LFwiYWRtaW5fY2FydHNfZGVsZXRlX3Byb2R1Y3RcIjp7XCJ0b2tlbnNcIjpbW1widGV4dFwiLFwiL2RlbGV0ZS1wcm9kdWN0XCJdLFtcInZhcmlhYmxlXCIsXCIvXCIsXCJcXFxcZCtcIixcImNhcnRJZFwiXSxbXCJ0ZXh0XCIsXCIvc2VsbC9vcmRlcnMvY2FydHNcIl1dLFwiZGVmYXVsdHNcIjpbXSxcInJlcXVpcmVtZW50c1wiOntcImNhcnRJZFwiOlwiXFxcXGQrXCJ9LFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJzY2hlbWVzXCI6W119LFwiYWRtaW5fb3JkZXJzX3ZpZXdcIjp7XCJ0b2tlbnNcIjpbW1widGV4dFwiLFwiL3ZpZXdcIl0sW1widmFyaWFibGVcIixcIi9cIixcIlteL10rK1wiLFwib3JkZXJJZFwiXSxbXCJ0ZXh0XCIsXCIvc2VsbC9vcmRlcnMvb3JkZXJzXCJdXSxcImRlZmF1bHRzXCI6W10sXCJyZXF1aXJlbWVudHNcIjpbXSxcImhvc3R0b2tlbnNcIjpbXSxcIm1ldGhvZHNcIjpbXSxcInNjaGVtZXNcIjpbXX0sXCJhZG1pbl9vcmRlcnNfZHVwbGljYXRlX2NhcnRcIjp7XCJ0b2tlbnNcIjpbW1widGV4dFwiLFwiL2R1cGxpY2F0ZS1jYXJ0XCJdLFtcInZhcmlhYmxlXCIsXCIvXCIsXCJcXFxcZCtcIixcIm9yZGVySWRcIl0sW1widGV4dFwiLFwiL3NlbGwvb3JkZXJzL29yZGVyc1wiXV0sXCJkZWZhdWx0c1wiOltdLFwicmVxdWlyZW1lbnRzXCI6e1wib3JkZXJJZFwiOlwiXFxcXGQrXCJ9LFwiaG9zdHRva2Vuc1wiOltdLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJzY2hlbWVzXCI6W119fSxcInByZWZpeFwiOlwiXCIsXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjpcIlwiLFwic2NoZW1lXCI6XCJodHRwXCIsXCJsb2NhbGVcIjpbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2Zvc19qc19yb3V0ZXMuanNvblxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSA5IDE0IiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuaW1wb3J0IFJvdXRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3JvdXRlcic7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9ldmVudC1lbWl0dGVyJztcbmltcG9ydCBldmVudE1hcCBmcm9tICcuL2V2ZW50LW1hcCc7XG5cbmNvbnN0ICQgPSB3aW5kb3cuJDtcblxuLyoqXG4gKiBQcm92aWRlcyBhamF4IGNhbGxzIGZvciBjYXJ0IGVkaXRpbmcgYWN0aW9uc1xuICogRWFjaCBtZXRob2QgZW1pdHMgYW4gZXZlbnQgd2l0aCB1cGRhdGVkIGNhcnQgaW5mb3JtYXRpb24gYWZ0ZXIgc3VjY2Vzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydEVkaXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucm91dGVyID0gbmV3IFJvdXRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2FydCBhZGRyZXNzZXNcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNhcnRJZFxuICAgKiBAcGFyYW0ge09iamVjdH0gYWRkcmVzc2VzXG4gICAqL1xuICBjaGFuZ2VDYXJ0QWRkcmVzc2VzKGNhcnRJZCwgYWRkcmVzc2VzKSB7XG4gICAgJC5wb3N0KHRoaXMucm91dGVyLmdlbmVyYXRlKCdhZG1pbl9jYXJ0c19lZGl0X2FkZHJlc3NlcycsIHtjYXJ0SWR9KSwgYWRkcmVzc2VzKS50aGVuKChjYXJ0SW5mbykgPT4ge1xuICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRNYXAuY2FydEFkZHJlc3Nlc0NoYW5nZWQsIGNhcnRJbmZvKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb2RpZmllcyBjYXJ0IGRlbGl2ZXJ5IG9wdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gY2FydElkXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgKi9cbiAgY2hhbmdlRGVsaXZlcnlPcHRpb24oY2FydElkLCB2YWx1ZSkge1xuICAgICQucG9zdCh0aGlzLnJvdXRlci5nZW5lcmF0ZSgnYWRtaW5fY2FydHNfZWRpdF9jYXJyaWVyJywge2NhcnRJZH0pLCB7XG4gICAgICBjYXJyaWVySWQ6IHZhbHVlLFxuICAgIH0pLnRoZW4oKGNhcnRJbmZvKSA9PiB7XG4gICAgICBFdmVudEVtaXR0ZXIuZW1pdChldmVudE1hcC5jYXJ0RGVsaXZlcnlPcHRpb25DaGFuZ2VkLCBjYXJ0SW5mbyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBjYXJ0IGZyZWUgc2hpcHBpbmcgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNhcnRJZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAqL1xuICBzZXRGcmVlU2hpcHBpbmcoY2FydElkLCB2YWx1ZSkge1xuICAgICQucG9zdCh0aGlzLnJvdXRlci5nZW5lcmF0ZSgnYWRtaW5fY2FydHNfc2V0X2ZyZWVfc2hpcHBpbmcnLCB7Y2FydElkfSksIHtcbiAgICAgIGZyZWVTaGlwcGluZzogdmFsdWUsXG4gICAgfSkudGhlbigoY2FydEluZm8pID0+IHtcbiAgICAgIEV2ZW50RW1pdHRlci5lbWl0KGV2ZW50TWFwLmNhcnRGcmVlU2hpcHBpbmdTZXQsIGNhcnRJbmZvKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGNhcnQgcnVsZSB0byBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjYXJ0UnVsZUlkXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjYXJ0SWRcbiAgICovXG4gIGFkZENhcnRSdWxlVG9DYXJ0KGNhcnRSdWxlSWQsIGNhcnRJZCkge1xuICAgICQucG9zdCh0aGlzLnJvdXRlci5nZW5lcmF0ZSgnYWRtaW5fY2FydHNfYWRkX2NhcnRfcnVsZScsIHtjYXJ0SWR9KSwge1xuICAgICAgY2FydFJ1bGVJZCxcbiAgICB9KS50aGVuKChjYXJ0SW5mbykgPT4ge1xuICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRNYXAuY2FydFJ1bGVBZGRlZCwgY2FydEluZm8pO1xuICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRNYXAuY2FydFJ1bGVGYWlsZWRUb0FkZCwgcmVzcG9uc2UucmVzcG9uc2VKU09OLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgY2FydCBydWxlIGZyb20gY2FydFxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gY2FydFJ1bGVJZFxuICAgKiBAcGFyYW0ge051bWJlcn0gY2FydElkXG4gICAqL1xuICByZW1vdmVDYXJ0UnVsZUZyb21DYXJ0KGNhcnRSdWxlSWQsIGNhcnRJZCkge1xuICAgICQucG9zdCh0aGlzLnJvdXRlci5nZW5lcmF0ZSgnYWRtaW5fY2FydHNfZGVsZXRlX2NhcnRfcnVsZScsIHtcbiAgICAgIGNhcnRJZCxcbiAgICAgIGNhcnRSdWxlSWQsXG4gICAgfSkpLnRoZW4oKGNhcnRJbmZvKSA9PiB7XG4gICAgICBFdmVudEVtaXR0ZXIuZW1pdChldmVudE1hcC5jYXJ0UnVsZVJlbW92ZWQsIGNhcnRJbmZvKTtcbiAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgIHNob3dFcnJvck1lc3NhZ2UocmVzcG9uc2UucmVzcG9uc2VKU09OLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgcHJvZHVjdCB0byBjYXJ0XG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjYXJ0SWRcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gcHJvZHVjdFxuICAgKi9cbiAgYWRkUHJvZHVjdChjYXJ0SWQsIHByb2R1Y3QpIHtcbiAgICAkLmFqYXgodGhpcy5yb3V0ZXIuZ2VuZXJhdGUoJ2FkbWluX2NhcnRzX2FkZF9wcm9kdWN0Jywge2NhcnRJZH0pLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHByb2R1Y3QsXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgfSkudGhlbigoY2FydEluZm8pID0+IHtcbiAgICAgIEV2ZW50RW1pdHRlci5lbWl0KGV2ZW50TWFwLnByb2R1Y3RBZGRlZFRvQ2FydCwgY2FydEluZm8pO1xuICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2hvd0Vycm9yTWVzc2FnZShyZXNwb25zZS5yZXNwb25zZUpTT04ubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBwcm9kdWN0IGZyb20gY2FydFxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gY2FydElkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9kdWN0XG4gICAqL1xuICByZW1vdmVQcm9kdWN0RnJvbUNhcnQoY2FydElkLCBwcm9kdWN0KSB7XG4gICAgJC5wb3N0KHRoaXMucm91dGVyLmdlbmVyYXRlKCdhZG1pbl9jYXJ0c19kZWxldGVfcHJvZHVjdCcsIHtjYXJ0SWR9KSwge1xuICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LnByb2R1Y3RJZCxcbiAgICAgIGF0dHJpYnV0ZUlkOiBwcm9kdWN0LmF0dHJpYnV0ZUlkLFxuICAgICAgY3VzdG9taXphdGlvbklkOiBwcm9kdWN0LmN1c3RvbWl6YXRpb25JZCxcbiAgICB9KS50aGVuKChjYXJ0SW5mbykgPT4ge1xuICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoZXZlbnRNYXAucHJvZHVjdFJlbW92ZWRGcm9tQ2FydCwgY2FydEluZm8pO1xuICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2hvd0Vycm9yTWVzc2FnZShyZXNwb25zZS5yZXNwb25zZUpTT04ubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BhZ2VzL29yZGVyL2NyZWF0ZS9jYXJ0LWVkaXRvci5qcyIsIid1c2Ugc3RyaWN0Jzt2YXIgX2V4dGVuZHM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWZvcih2YXIgZCBpbiBiPWFyZ3VtZW50c1tjXSxiKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLGQpJiYoYVtkXT1iW2RdKTtyZXR1cm4gYX0sX3R5cGVvZj0nZnVuY3Rpb24nPT10eXBlb2YgU3ltYm9sJiYnc3ltYm9sJz09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihhKXtyZXR1cm4gdHlwZW9mIGF9OmZ1bmN0aW9uKGEpe3JldHVybiBhJiYnZnVuY3Rpb24nPT10eXBlb2YgU3ltYm9sJiZhLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZhIT09U3ltYm9sLnByb3RvdHlwZT8nc3ltYm9sJzp0eXBlb2YgYX07ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGEsYil7aWYoIShhIGluc3RhbmNlb2YgYikpdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyl9dmFyIFJvdXRpbmc9ZnVuY3Rpb24gYSgpe3ZhciBiPXRoaXM7X2NsYXNzQ2FsbENoZWNrKHRoaXMsYSksdGhpcy5zZXRSb3V0ZXM9ZnVuY3Rpb24oYSl7Yi5yb3V0ZXNSb3V0aW5nPWF8fFtdfSx0aGlzLmdldFJvdXRlcz1mdW5jdGlvbigpe3JldHVybiBiLnJvdXRlc1JvdXRpbmd9LHRoaXMuc2V0QmFzZVVybD1mdW5jdGlvbihhKXtiLmNvbnRleHRSb3V0aW5nLmJhc2VfdXJsPWF9LHRoaXMuZ2V0QmFzZVVybD1mdW5jdGlvbigpe3JldHVybiBiLmNvbnRleHRSb3V0aW5nLmJhc2VfdXJsfSx0aGlzLnNldFByZWZpeD1mdW5jdGlvbihhKXtiLmNvbnRleHRSb3V0aW5nLnByZWZpeD1hfSx0aGlzLnNldFNjaGVtZT1mdW5jdGlvbihhKXtiLmNvbnRleHRSb3V0aW5nLnNjaGVtZT1hfSx0aGlzLmdldFNjaGVtZT1mdW5jdGlvbigpe3JldHVybiBiLmNvbnRleHRSb3V0aW5nLnNjaGVtZX0sdGhpcy5zZXRIb3N0PWZ1bmN0aW9uKGEpe2IuY29udGV4dFJvdXRpbmcuaG9zdD1hfSx0aGlzLmdldEhvc3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYi5jb250ZXh0Um91dGluZy5ob3N0fSx0aGlzLmJ1aWxkUXVlcnlQYXJhbXM9ZnVuY3Rpb24oYSxjLGQpe3ZhciBlPW5ldyBSZWdFeHAoL1xcW10kLyk7YyBpbnN0YW5jZW9mIEFycmF5P2MuZm9yRWFjaChmdW5jdGlvbihjLGYpe2UudGVzdChhKT9kKGEsYyk6Yi5idWlsZFF1ZXJ5UGFyYW1zKGErJ1snKygnb2JqZWN0Jz09PSgndW5kZWZpbmVkJz09dHlwZW9mIGM/J3VuZGVmaW5lZCc6X3R5cGVvZihjKSk/ZjonJykrJ10nLGMsZCl9KTonb2JqZWN0Jz09PSgndW5kZWZpbmVkJz09dHlwZW9mIGM/J3VuZGVmaW5lZCc6X3R5cGVvZihjKSk/T2JqZWN0LmtleXMoYykuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gYi5idWlsZFF1ZXJ5UGFyYW1zKGErJ1snK2UrJ10nLGNbZV0sZCl9KTpkKGEsYyl9LHRoaXMuZ2V0Um91dGU9ZnVuY3Rpb24oYSl7dmFyIGM9Yi5jb250ZXh0Um91dGluZy5wcmVmaXgrYTtpZighIWIucm91dGVzUm91dGluZ1tjXSlyZXR1cm4gYi5yb3V0ZXNSb3V0aW5nW2NdO2Vsc2UgaWYoIWIucm91dGVzUm91dGluZ1thXSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrYSsnXCIgZG9lcyBub3QgZXhpc3QuJyk7cmV0dXJuIGIucm91dGVzUm91dGluZ1thXX0sdGhpcy5nZW5lcmF0ZT1mdW5jdGlvbihhLGMsZCl7dmFyIGU9Yi5nZXRSb3V0ZShhKSxmPWN8fHt9LGc9X2V4dGVuZHMoe30sZiksaD0nX3NjaGVtZScsaT0nJyxqPSEwLGs9Jyc7aWYoKGUudG9rZW5zfHxbXSkuZm9yRWFjaChmdW5jdGlvbihiKXtpZigndGV4dCc9PT1iWzBdKXJldHVybiBpPWJbMV0raSx2b2lkKGo9ITEpO2lmKCd2YXJpYWJsZSc9PT1iWzBdKXt2YXIgYz0oZS5kZWZhdWx0c3x8e30pW2JbM11dO2lmKCExPT1qfHwhY3x8KGZ8fHt9KVtiWzNdXSYmZltiWzNdXSE9PWUuZGVmYXVsdHNbYlszXV0pe3ZhciBkO2lmKChmfHx7fSlbYlszXV0pZD1mW2JbM11dLGRlbGV0ZSBnW2JbM11dO2Vsc2UgaWYoYylkPWUuZGVmYXVsdHNbYlszXV07ZWxzZXtpZihqKXJldHVybjt0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicrYSsnXCIgcmVxdWlyZXMgdGhlIHBhcmFtZXRlciBcIicrYlszXSsnXCIuJyl9dmFyIGg9ITA9PT1kfHwhMT09PWR8fCcnPT09ZDtpZighaHx8IWope3ZhciBrPWVuY29kZVVSSUNvbXBvbmVudChkKS5yZXBsYWNlKC8lMkYvZywnLycpOydudWxsJz09PWsmJm51bGw9PT1kJiYoaz0nJyksaT1iWzFdK2sraX1qPSExfWVsc2UgYyYmZGVsZXRlIGdbYlszXV07cmV0dXJufXRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInK2JbMF0rJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJyl9KSwnJz09aSYmKGk9Jy8nKSwoZS5ob3N0dG9rZW5zfHxbXSkuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4ndGV4dCc9PT1hWzBdP3ZvaWQoaz1hWzFdK2spOnZvaWQoJ3ZhcmlhYmxlJz09PWFbMF0mJigoZnx8e30pW2FbM11dPyhiPWZbYVszXV0sZGVsZXRlIGdbYVszXV0pOmUuZGVmYXVsdHNbYVszXV0mJihiPWUuZGVmYXVsdHNbYVszXV0pLGs9YVsxXStiK2spKX0pLGk9Yi5jb250ZXh0Um91dGluZy5iYXNlX3VybCtpLGUucmVxdWlyZW1lbnRzW2hdJiZiLmdldFNjaGVtZSgpIT09ZS5yZXF1aXJlbWVudHNbaF0/aT1lLnJlcXVpcmVtZW50c1toXSsnOi8vJysoa3x8Yi5nZXRIb3N0KCkpK2k6ayYmYi5nZXRIb3N0KCkhPT1rP2k9Yi5nZXRTY2hlbWUoKSsnOi8vJytrK2k6ITA9PT1kJiYoaT1iLmdldFNjaGVtZSgpKyc6Ly8nK2IuZ2V0SG9zdCgpK2kpLDA8T2JqZWN0LmtleXMoZykubGVuZ3RoKXt2YXIgbD1bXSxtPWZ1bmN0aW9uKGEsYil7dmFyIGM9YjtjPSdmdW5jdGlvbic9PXR5cGVvZiBjP2MoKTpjLGM9bnVsbD09PWM/Jyc6YyxsLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGEpKyc9JytlbmNvZGVVUklDb21wb25lbnQoYykpfTtPYmplY3Qua2V5cyhnKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiLmJ1aWxkUXVlcnlQYXJhbXMoYSxnW2FdLG0pfSksaT1pKyc/JytsLmpvaW4oJyYnKS5yZXBsYWNlKC8lMjAvZywnKycpfXJldHVybiBpfSx0aGlzLnNldERhdGE9ZnVuY3Rpb24oYSl7Yi5zZXRCYXNlVXJsKGEuYmFzZV91cmwpLGIuc2V0Um91dGVzKGEucm91dGVzKSwncHJlZml4J2luIGEmJmIuc2V0UHJlZml4KGEucHJlZml4KSxiLnNldEhvc3QoYS5ob3N0KSxiLnNldFNjaGVtZShhLnNjaGVtZSl9LHRoaXMuY29udGV4dFJvdXRpbmc9e2Jhc2VfdXJsOicnLHByZWZpeDonJyxob3N0OicnLHNjaGVtZTonJ319O21vZHVsZS5leHBvcnRzPW5ldyBSb3V0aW5nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mb3Mtcm91dGluZy9kaXN0L3JvdXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gOSAxNCJdLCJzb3VyY2VSb290IjoiIn0=