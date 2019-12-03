window["order_view"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 385);
/******/ })
/************************************************************************/
/******/ ({

/***/ 283:
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


var _OrderViewPageMap = __webpack_require__(71);

var _OrderViewPageMap2 = _interopRequireDefault(_OrderViewPageMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Manages adding/editing note for invoice documents.
 */

var InvoiceNoteManager = function () {
  function InvoiceNoteManager() {
    _classCallCheck(this, InvoiceNoteManager);

    this._initShowNoteFormEventHandler();
    this._initCloseNoteFormEventHandler();
    this._initEnterPaymentEventHandler();

    return {};
  }

  _createClass(InvoiceNoteManager, [{
    key: '_initShowNoteFormEventHandler',
    value: function _initShowNoteFormEventHandler() {
      $('.js-open-invoice-note-btn').on('click', function (event) {
        event.preventDefault();

        var $btn = $(event.currentTarget);
        var $noteRow = $btn.closest('tr').siblings('tr:first');

        $noteRow.removeClass('d-none');
      });
    }
  }, {
    key: '_initCloseNoteFormEventHandler',
    value: function _initCloseNoteFormEventHandler() {
      $('.js-cancel-invoice-note-btn').on('click', function (event) {
        $(event.currentTarget).closest('tr').addClass('d-none');
      });
    }
  }, {
    key: '_initEnterPaymentEventHandler',
    value: function _initEnterPaymentEventHandler() {
      $('.js-enter-payment-btn').on('click', function (event) {

        var $btn = $(event.currentTarget);
        var paymentAmount = $btn.data('payment-amount');

        $(_OrderViewPageMap2.default.viewOrderPaymentsBlock).get(0).scrollIntoView({ behavior: "smooth" });
        $(_OrderViewPageMap2.default.orderPaymentFormAmountInput).val(paymentAmount);
      });
    }
  }]);

  return InvoiceNoteManager;
}();

exports.default = InvoiceNoteManager;

/***/ }),

/***/ 284:
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


var _OrderViewPageMap = __webpack_require__(71);

var _OrderViewPageMap2 = _interopRequireDefault(_OrderViewPageMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

var OrderShippingManager = function () {
  function OrderShippingManager() {
    _classCallCheck(this, OrderShippingManager);

    this._initOrderShippingUpdateEventHandler();
  }

  _createClass(OrderShippingManager, [{
    key: '_initOrderShippingUpdateEventHandler',
    value: function _initOrderShippingUpdateEventHandler() {
      $(_OrderViewPageMap2.default.showOrderShippingUpdateModalBtn).on('click', function (event) {
        var $btn = $(event.currentTarget);

        $(_OrderViewPageMap2.default.updateOrderShippingTrackingNumberInput).val($btn.data('order-tracking-number'));
        $(_OrderViewPageMap2.default.updateOrderShippingCurrentOrderCarrierIdInput).val($btn.data('order-carrier-id'));
      });
    }
  }]);

  return OrderShippingManager;
}();

exports.default = OrderShippingManager;

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _OrderViewPageMap = __webpack_require__(71);

var _OrderViewPageMap2 = _interopRequireDefault(_OrderViewPageMap);

var _orderShippingManager = __webpack_require__(284);

var _orderShippingManager2 = _interopRequireDefault(_orderShippingManager);

var _invoiceNoteManager = __webpack_require__(283);

var _invoiceNoteManager2 = _interopRequireDefault(_invoiceNoteManager);

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

$(function () {
  var DISCOUNT_TYPE_AMOUNT = 'amount';
  var DISCOUNT_TYPE_PERCENT = 'percent';
  var DISCOUNT_TYPE_FREE_SHIPPING = 'free_shipping';

  new _orderShippingManager2.default();

  handlePaymentDetailsToggle();
  handlePrivateNoteChange();
  handleUpdateOrderStatusButton();

  new _invoiceNoteManager2.default();

  $(_OrderViewPageMap2.default.privateNoteToggleBtn).on('click', function (event) {
    event.preventDefault();
    togglePrivateNoteBlock();
  });

  initAddCartRuleFormHandler();
  initAddProductFormHandler();

  function handlePaymentDetailsToggle() {
    $(_OrderViewPageMap2.default.orderPaymentDetailsBtn).on('click', function (event) {
      var $paymentDetailRow = $(event.currentTarget).closest('tr').next(':first');

      $paymentDetailRow.toggleClass('d-none');
    });
  }

  function togglePrivateNoteBlock() {
    var $block = $(_OrderViewPageMap2.default.privateNoteBlock);
    var $btn = $(_OrderViewPageMap2.default.privateNoteToggleBtn);
    var isPrivateNoteOpened = $btn.hasClass('is-opened');

    if (isPrivateNoteOpened) {
      $btn.removeClass('is-opened');
      $block.addClass('d-none');
    } else {
      $btn.addClass('is-opened');
      $block.removeClass('d-none');
    }

    var $icon = $btn.find('.material-icons');
    $icon.text(isPrivateNoteOpened ? 'add' : 'remove');
  }

  function handlePrivateNoteChange() {
    var $submitBtn = $(_OrderViewPageMap2.default.privateNoteSubmitBtn);

    $(_OrderViewPageMap2.default.privateNoteInput).on('input', function (event) {
      var note = $(event.currentTarget).val();
      $submitBtn.prop('disabled', !note);
    });
  }

  function initAddProductFormHandler() {
    var $modal = $(_OrderViewPageMap2.default.updateOrderProductModal);

    $modal.on('click', '.js-order-product-update-btn', function (event) {
      var $btn = $(event.currentTarget);

      $modal.find('.js-update-product-name').text($btn.data('product-name'));
      $modal.find(_OrderViewPageMap2.default.updateOrderProductPriceTaxExclInput).val($btn.data('product-price-tax-excl'));
      $modal.find(_OrderViewPageMap2.default.updateOrderProductPriceTaxInclInput).val($btn.data('product-price-tax-incl'));
      $modal.find(_OrderViewPageMap2.default.updateOrderProductQuantityInput).val($btn.data('product-quantity'));
      $modal.find('form').attr('action', $btn.data('update-url'));
    });
  }

  function initAddCartRuleFormHandler() {
    var $modal = $(_OrderViewPageMap2.default.addCartRuleModal);
    var $form = $modal.find('form');
    var $valueHelp = $modal.find(_OrderViewPageMap2.default.cartRuleHelpText);
    var $invoiceSelect = $modal.find(_OrderViewPageMap2.default.addCartRuleInvoiceIdSelect);
    var $valueInput = $form.find(_OrderViewPageMap2.default.addCartRuleValueInput);
    var $valueFormGroup = $valueInput.closest('.form-group');

    $form.find(_OrderViewPageMap2.default.addCartRuleApplyOnAllInvoicesCheckbox).on('change', function (event) {
      var isChecked = $(event.currentTarget).is(':checked');

      $invoiceSelect.attr('disabled', isChecked);
    });

    $form.find(_OrderViewPageMap2.default.addCartRuleTypeSelect).on('change', function (event) {
      var selectedCartRuleType = $(event.currentTarget).val();

      if (selectedCartRuleType === DISCOUNT_TYPE_AMOUNT) {
        $valueHelp.removeClass('d-none');
      } else {
        $valueHelp.addClass('d-none');
      }

      if (selectedCartRuleType === DISCOUNT_TYPE_FREE_SHIPPING) {
        $valueFormGroup.addClass('d-none');
        $valueInput.attr('disabled', true);
      } else {
        $valueFormGroup.removeClass('d-none');
        $valueInput.attr('disabled', false);
      }
    });
  }

  function handleUpdateOrderStatusButton() {
    var $btn = $(_OrderViewPageMap2.default.updateOrderStatusActionBtn);

    $(_OrderViewPageMap2.default.updateOrderStatusActionInput).on('change', function (event) {
      var selectedOrderStatusId = $(event.currentTarget).val();

      $btn.prop('disabled', parseInt(selectedOrderStatusId, 10) === $btn.data('order-status-id'));
    });
  }
});

/***/ }),

/***/ 71:
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

exports.default = {
  orderPaymentDetailsBtn: '.js-payment-details-btn',
  orderPaymentFormAmountInput: '#order_payment_amount',
  viewOrderPaymentsBlock: '#view_order_payments_block',
  privateNoteToggleBtn: '.js-private-note-toggle-btn',
  privateNoteBlock: '.js-private-note-block',
  privateNoteInput: '#private_note_note',
  privateNoteSubmitBtn: '.js-private-note-btn',
  updateOrderProductModal: '#updateOrderProductModal',
  updateOrderProductPriceTaxExclInput: '#update_order_product_price_tax_excl',
  updateOrderProductPriceTaxInclInput: '#update_order_product_price_tax_incl',
  updateOrderProductQuantityInput: '#update_order_product_quantity',
  addCartRuleModal: '#addOrderDiscountModal',
  addCartRuleApplyOnAllInvoicesCheckbox: '#add_order_cart_rule_apply_on_all_invoices',
  addCartRuleInvoiceIdSelect: '#add_order_cart_rule_invoice_id',
  addCartRuleTypeSelect: '#add_order_cart_rule_type',
  addCartRuleValueInput: '#add_order_cart_rule_value',
  cartRuleHelpText: '.js-cart-rule-value-help',
  updateOrderStatusActionBtn: '#update_order_status_action_btn',
  updateOrderStatusActionInput: '#update_order_status_action_input',
  updateOrderStatusActionForm: '#update_order_status_action_form',
  showOrderShippingUpdateModalBtn: '.js-update-shipping-btn',
  updateOrderShippingTrackingNumberInput: '#update_order_shipping_tracking_number',
  updateOrderShippingCurrentOrderCarrierIdInput: '#update_order_shipping_current_order_carrier_id'
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDM1OThmODA5NTYyZTVhMmYxMDI/NWI0MioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9qcy9wYWdlcy9vcmRlci9pbnZvaWNlLW5vdGUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wYWdlcy9vcmRlci9vcmRlci1zaGlwcGluZy1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL3BhZ2VzL29yZGVyL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGFnZXMvb3JkZXIvT3JkZXJWaWV3UGFnZU1hcC5qcyJdLCJuYW1lcyI6WyIkIiwid2luZG93IiwiSW52b2ljZU5vdGVNYW5hZ2VyIiwiX2luaXRTaG93Tm90ZUZvcm1FdmVudEhhbmRsZXIiLCJfaW5pdENsb3NlTm90ZUZvcm1FdmVudEhhbmRsZXIiLCJfaW5pdEVudGVyUGF5bWVudEV2ZW50SGFuZGxlciIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRidG4iLCJjdXJyZW50VGFyZ2V0IiwiJG5vdGVSb3ciLCJjbG9zZXN0Iiwic2libGluZ3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicGF5bWVudEFtb3VudCIsImRhdGEiLCJPcmRlclZpZXdQYWdlTWFwIiwidmlld09yZGVyUGF5bWVudHNCbG9jayIsImdldCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJvcmRlclBheW1lbnRGb3JtQW1vdW50SW5wdXQiLCJ2YWwiLCJPcmRlclNoaXBwaW5nTWFuYWdlciIsIl9pbml0T3JkZXJTaGlwcGluZ1VwZGF0ZUV2ZW50SGFuZGxlciIsInNob3dPcmRlclNoaXBwaW5nVXBkYXRlTW9kYWxCdG4iLCJ1cGRhdGVPcmRlclNoaXBwaW5nVHJhY2tpbmdOdW1iZXJJbnB1dCIsInVwZGF0ZU9yZGVyU2hpcHBpbmdDdXJyZW50T3JkZXJDYXJyaWVySWRJbnB1dCIsIkRJU0NPVU5UX1RZUEVfQU1PVU5UIiwiRElTQ09VTlRfVFlQRV9QRVJDRU5UIiwiRElTQ09VTlRfVFlQRV9GUkVFX1NISVBQSU5HIiwiaGFuZGxlUGF5bWVudERldGFpbHNUb2dnbGUiLCJoYW5kbGVQcml2YXRlTm90ZUNoYW5nZSIsImhhbmRsZVVwZGF0ZU9yZGVyU3RhdHVzQnV0dG9uIiwicHJpdmF0ZU5vdGVUb2dnbGVCdG4iLCJ0b2dnbGVQcml2YXRlTm90ZUJsb2NrIiwiaW5pdEFkZENhcnRSdWxlRm9ybUhhbmRsZXIiLCJpbml0QWRkUHJvZHVjdEZvcm1IYW5kbGVyIiwib3JkZXJQYXltZW50RGV0YWlsc0J0biIsIiRwYXltZW50RGV0YWlsUm93IiwibmV4dCIsInRvZ2dsZUNsYXNzIiwiJGJsb2NrIiwicHJpdmF0ZU5vdGVCbG9jayIsImlzUHJpdmF0ZU5vdGVPcGVuZWQiLCJoYXNDbGFzcyIsIiRpY29uIiwiZmluZCIsInRleHQiLCIkc3VibWl0QnRuIiwicHJpdmF0ZU5vdGVTdWJtaXRCdG4iLCJwcml2YXRlTm90ZUlucHV0Iiwibm90ZSIsInByb3AiLCIkbW9kYWwiLCJ1cGRhdGVPcmRlclByb2R1Y3RNb2RhbCIsInVwZGF0ZU9yZGVyUHJvZHVjdFByaWNlVGF4RXhjbElucHV0IiwidXBkYXRlT3JkZXJQcm9kdWN0UHJpY2VUYXhJbmNsSW5wdXQiLCJ1cGRhdGVPcmRlclByb2R1Y3RRdWFudGl0eUlucHV0IiwiYXR0ciIsImFkZENhcnRSdWxlTW9kYWwiLCIkZm9ybSIsIiR2YWx1ZUhlbHAiLCJjYXJ0UnVsZUhlbHBUZXh0IiwiJGludm9pY2VTZWxlY3QiLCJhZGRDYXJ0UnVsZUludm9pY2VJZFNlbGVjdCIsIiR2YWx1ZUlucHV0IiwiYWRkQ2FydFJ1bGVWYWx1ZUlucHV0IiwiJHZhbHVlRm9ybUdyb3VwIiwiYWRkQ2FydFJ1bGVBcHBseU9uQWxsSW52b2ljZXNDaGVja2JveCIsImlzQ2hlY2tlZCIsImlzIiwiYWRkQ2FydFJ1bGVUeXBlU2VsZWN0Iiwic2VsZWN0ZWRDYXJ0UnVsZVR5cGUiLCJ1cGRhdGVPcmRlclN0YXR1c0FjdGlvbkJ0biIsInVwZGF0ZU9yZGVyU3RhdHVzQWN0aW9uSW5wdXQiLCJzZWxlY3RlZE9yZGVyU3RhdHVzSWQiLCJwYXJzZUludCIsInVwZGF0ZU9yZGVyU3RhdHVzQWN0aW9uRm9ybSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O3FqQkNoRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBOzs7Ozs7OztBQUVBLElBQU1BLElBQUlDLE9BQU9ELENBQWpCOztBQUVBOzs7O0lBR3FCRSxrQjtBQUVuQixnQ0FBYztBQUFBOztBQUNaLFNBQUtDLDZCQUFMO0FBQ0EsU0FBS0MsOEJBQUw7QUFDQSxTQUFLQyw2QkFBTDs7QUFFQSxXQUFPLEVBQVA7QUFDRDs7OztvREFFK0I7QUFDOUJMLFFBQUUsMkJBQUYsRUFBK0JNLEVBQS9CLENBQWtDLE9BQWxDLEVBQTJDLFVBQUNDLEtBQUQsRUFBVztBQUNwREEsY0FBTUMsY0FBTjs7QUFFQSxZQUFNQyxPQUFPVCxFQUFFTyxNQUFNRyxhQUFSLENBQWI7QUFDQSxZQUFNQyxXQUFXRixLQUFLRyxPQUFMLENBQWEsSUFBYixFQUFtQkMsUUFBbkIsQ0FBNEIsVUFBNUIsQ0FBakI7O0FBRUFGLGlCQUFTRyxXQUFULENBQXFCLFFBQXJCO0FBQ0QsT0FQRDtBQVFEOzs7cURBRWdDO0FBQy9CZCxRQUFFLDZCQUFGLEVBQWlDTSxFQUFqQyxDQUFvQyxPQUFwQyxFQUE2QyxVQUFDQyxLQUFELEVBQVc7QUFDdERQLFVBQUVPLE1BQU1HLGFBQVIsRUFBdUJFLE9BQXZCLENBQStCLElBQS9CLEVBQXFDRyxRQUFyQyxDQUE4QyxRQUE5QztBQUNELE9BRkQ7QUFHRDs7O29EQUUrQjtBQUM5QmYsUUFBRSx1QkFBRixFQUEyQk0sRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBQ0MsS0FBRCxFQUFXOztBQUVoRCxZQUFNRSxPQUFPVCxFQUFFTyxNQUFNRyxhQUFSLENBQWI7QUFDQSxZQUFJTSxnQkFBZ0JQLEtBQUtRLElBQUwsQ0FBVSxnQkFBVixDQUFwQjs7QUFFQWpCLFVBQUVrQiwyQkFBaUJDLHNCQUFuQixFQUEyQ0MsR0FBM0MsQ0FBK0MsQ0FBL0MsRUFBa0RDLGNBQWxELENBQWlFLEVBQUNDLFVBQVUsUUFBWCxFQUFqRTtBQUNBdEIsVUFBRWtCLDJCQUFpQkssMkJBQW5CLEVBQWdEQyxHQUFoRCxDQUFvRFIsYUFBcEQ7QUFDRCxPQVBEO0FBUUQ7Ozs7OztrQkFwQ2tCZCxrQjs7Ozs7Ozs7Ozs7Ozs7cWpCQy9CckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBOzs7Ozs7OztBQUVBLElBQU1GLElBQUlDLE9BQU9ELENBQWpCOztJQUVxQnlCLG9CO0FBQ25CLGtDQUFjO0FBQUE7O0FBQ1osU0FBS0Msb0NBQUw7QUFDRDs7OzsyREFFc0M7QUFDckMxQixRQUFFa0IsMkJBQWlCUywrQkFBbkIsRUFBb0RyQixFQUFwRCxDQUF1RCxPQUF2RCxFQUFnRSxVQUFDQyxLQUFELEVBQVc7QUFDekUsWUFBTUUsT0FBT1QsRUFBRU8sTUFBTUcsYUFBUixDQUFiOztBQUVBVixVQUFFa0IsMkJBQWlCVSxzQ0FBbkIsRUFBMkRKLEdBQTNELENBQStEZixLQUFLUSxJQUFMLENBQVUsdUJBQVYsQ0FBL0Q7QUFDQWpCLFVBQUVrQiwyQkFBaUJXLDZDQUFuQixFQUFrRUwsR0FBbEUsQ0FBc0VmLEtBQUtRLElBQUwsQ0FBVSxrQkFBVixDQUF0RTtBQUNELE9BTEQ7QUFNRDs7Ozs7O2tCQVprQlEsb0I7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNekIsSUFBSUMsT0FBT0QsQ0FBakIsQyxDQTdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQUEsRUFBRSxZQUFNO0FBQ04sTUFBTThCLHVCQUF1QixRQUE3QjtBQUNBLE1BQU1DLHdCQUF3QixTQUE5QjtBQUNBLE1BQU1DLDhCQUE4QixlQUFwQzs7QUFFQSxNQUFJUCw4QkFBSjs7QUFFQVE7QUFDQUM7QUFDQUM7O0FBRUEsTUFBSWpDLDRCQUFKOztBQUVBRixJQUFFa0IsMkJBQWlCa0Isb0JBQW5CLEVBQXlDOUIsRUFBekMsQ0FBNEMsT0FBNUMsRUFBcUQsVUFBQ0MsS0FBRCxFQUFXO0FBQzlEQSxVQUFNQyxjQUFOO0FBQ0E2QjtBQUNELEdBSEQ7O0FBS0FDO0FBQ0FDOztBQUVBLFdBQVNOLDBCQUFULEdBQXNDO0FBQ3BDakMsTUFBRWtCLDJCQUFpQnNCLHNCQUFuQixFQUEyQ2xDLEVBQTNDLENBQThDLE9BQTlDLEVBQXVELFVBQUNDLEtBQUQsRUFBVztBQUNoRSxVQUFNa0Msb0JBQW9CekMsRUFBRU8sTUFBTUcsYUFBUixFQUF1QkUsT0FBdkIsQ0FBK0IsSUFBL0IsRUFBcUM4QixJQUFyQyxDQUEwQyxRQUExQyxDQUExQjs7QUFFQUQsd0JBQWtCRSxXQUFsQixDQUE4QixRQUE5QjtBQUNELEtBSkQ7QUFLRDs7QUFFRCxXQUFTTixzQkFBVCxHQUFrQztBQUNoQyxRQUFNTyxTQUFTNUMsRUFBRWtCLDJCQUFpQjJCLGdCQUFuQixDQUFmO0FBQ0EsUUFBTXBDLE9BQU9ULEVBQUVrQiwyQkFBaUJrQixvQkFBbkIsQ0FBYjtBQUNBLFFBQU1VLHNCQUFzQnJDLEtBQUtzQyxRQUFMLENBQWMsV0FBZCxDQUE1Qjs7QUFFQSxRQUFJRCxtQkFBSixFQUF5QjtBQUN2QnJDLFdBQUtLLFdBQUwsQ0FBaUIsV0FBakI7QUFDQThCLGFBQU83QixRQUFQLENBQWdCLFFBQWhCO0FBQ0QsS0FIRCxNQUdPO0FBQ0xOLFdBQUtNLFFBQUwsQ0FBYyxXQUFkO0FBQ0E2QixhQUFPOUIsV0FBUCxDQUFtQixRQUFuQjtBQUNEOztBQUVELFFBQU1rQyxRQUFRdkMsS0FBS3dDLElBQUwsQ0FBVSxpQkFBVixDQUFkO0FBQ0FELFVBQU1FLElBQU4sQ0FBV0osc0JBQXNCLEtBQXRCLEdBQThCLFFBQXpDO0FBQ0Q7O0FBRUQsV0FBU1osdUJBQVQsR0FBbUM7QUFDakMsUUFBTWlCLGFBQWFuRCxFQUFFa0IsMkJBQWlCa0Msb0JBQW5CLENBQW5COztBQUVBcEQsTUFBRWtCLDJCQUFpQm1DLGdCQUFuQixFQUFxQy9DLEVBQXJDLENBQXdDLE9BQXhDLEVBQWlELFVBQUNDLEtBQUQsRUFBVztBQUMxRCxVQUFNK0MsT0FBT3RELEVBQUVPLE1BQU1HLGFBQVIsRUFBdUJjLEdBQXZCLEVBQWI7QUFDQTJCLGlCQUFXSSxJQUFYLENBQWdCLFVBQWhCLEVBQTRCLENBQUNELElBQTdCO0FBQ0QsS0FIRDtBQUlEOztBQUVELFdBQVNmLHlCQUFULEdBQXFDO0FBQ25DLFFBQU1pQixTQUFTeEQsRUFBRWtCLDJCQUFpQnVDLHVCQUFuQixDQUFmOztBQUVBRCxXQUFPbEQsRUFBUCxDQUFVLE9BQVYsRUFBbUIsOEJBQW5CLEVBQW1ELFVBQUNDLEtBQUQsRUFBVztBQUM1RCxVQUFNRSxPQUFPVCxFQUFFTyxNQUFNRyxhQUFSLENBQWI7O0FBRUE4QyxhQUFPUCxJQUFQLENBQVkseUJBQVosRUFBdUNDLElBQXZDLENBQTRDekMsS0FBS1EsSUFBTCxDQUFVLGNBQVYsQ0FBNUM7QUFDQXVDLGFBQU9QLElBQVAsQ0FBWS9CLDJCQUFpQndDLG1DQUE3QixFQUFrRWxDLEdBQWxFLENBQXNFZixLQUFLUSxJQUFMLENBQVUsd0JBQVYsQ0FBdEU7QUFDQXVDLGFBQU9QLElBQVAsQ0FBWS9CLDJCQUFpQnlDLG1DQUE3QixFQUFrRW5DLEdBQWxFLENBQXNFZixLQUFLUSxJQUFMLENBQVUsd0JBQVYsQ0FBdEU7QUFDQXVDLGFBQU9QLElBQVAsQ0FBWS9CLDJCQUFpQjBDLCtCQUE3QixFQUE4RHBDLEdBQTlELENBQWtFZixLQUFLUSxJQUFMLENBQVUsa0JBQVYsQ0FBbEU7QUFDQXVDLGFBQU9QLElBQVAsQ0FBWSxNQUFaLEVBQW9CWSxJQUFwQixDQUF5QixRQUF6QixFQUFtQ3BELEtBQUtRLElBQUwsQ0FBVSxZQUFWLENBQW5DO0FBQ0QsS0FSRDtBQVNEOztBQUVELFdBQVNxQiwwQkFBVCxHQUFzQztBQUNwQyxRQUFNa0IsU0FBU3hELEVBQUVrQiwyQkFBaUI0QyxnQkFBbkIsQ0FBZjtBQUNBLFFBQU1DLFFBQVFQLE9BQU9QLElBQVAsQ0FBWSxNQUFaLENBQWQ7QUFDQSxRQUFNZSxhQUFhUixPQUFPUCxJQUFQLENBQVkvQiwyQkFBaUIrQyxnQkFBN0IsQ0FBbkI7QUFDQSxRQUFNQyxpQkFBaUJWLE9BQU9QLElBQVAsQ0FBWS9CLDJCQUFpQmlELDBCQUE3QixDQUF2QjtBQUNBLFFBQU1DLGNBQWNMLE1BQU1kLElBQU4sQ0FBVy9CLDJCQUFpQm1ELHFCQUE1QixDQUFwQjtBQUNBLFFBQU1DLGtCQUFrQkYsWUFBWXhELE9BQVosQ0FBb0IsYUFBcEIsQ0FBeEI7O0FBRUFtRCxVQUFNZCxJQUFOLENBQVcvQiwyQkFBaUJxRCxxQ0FBNUIsRUFBbUVqRSxFQUFuRSxDQUFzRSxRQUF0RSxFQUFnRixVQUFDQyxLQUFELEVBQVc7QUFDekYsVUFBTWlFLFlBQVl4RSxFQUFFTyxNQUFNRyxhQUFSLEVBQXVCK0QsRUFBdkIsQ0FBMEIsVUFBMUIsQ0FBbEI7O0FBRUFQLHFCQUFlTCxJQUFmLENBQW9CLFVBQXBCLEVBQWdDVyxTQUFoQztBQUNELEtBSkQ7O0FBTUFULFVBQU1kLElBQU4sQ0FBVy9CLDJCQUFpQndELHFCQUE1QixFQUFtRHBFLEVBQW5ELENBQXNELFFBQXRELEVBQWdFLFVBQUNDLEtBQUQsRUFBVztBQUN6RSxVQUFNb0UsdUJBQXVCM0UsRUFBRU8sTUFBTUcsYUFBUixFQUF1QmMsR0FBdkIsRUFBN0I7O0FBRUEsVUFBSW1ELHlCQUF5QjdDLG9CQUE3QixFQUFtRDtBQUNqRGtDLG1CQUFXbEQsV0FBWCxDQUF1QixRQUF2QjtBQUNELE9BRkQsTUFFTztBQUNMa0QsbUJBQVdqRCxRQUFYLENBQW9CLFFBQXBCO0FBQ0Q7O0FBRUQsVUFBSTRELHlCQUF5QjNDLDJCQUE3QixFQUEwRDtBQUN4RHNDLHdCQUFnQnZELFFBQWhCLENBQXlCLFFBQXpCO0FBQ0FxRCxvQkFBWVAsSUFBWixDQUFpQixVQUFqQixFQUE2QixJQUE3QjtBQUNELE9BSEQsTUFHTztBQUNMUyx3QkFBZ0J4RCxXQUFoQixDQUE0QixRQUE1QjtBQUNBc0Qsb0JBQVlQLElBQVosQ0FBaUIsVUFBakIsRUFBNkIsS0FBN0I7QUFDRDtBQUNGLEtBaEJEO0FBaUJEOztBQUVELFdBQVMxQiw2QkFBVCxHQUF5QztBQUN2QyxRQUFNMUIsT0FBT1QsRUFBRWtCLDJCQUFpQjBELDBCQUFuQixDQUFiOztBQUVBNUUsTUFBRWtCLDJCQUFpQjJELDRCQUFuQixFQUFpRHZFLEVBQWpELENBQW9ELFFBQXBELEVBQThELFVBQUNDLEtBQUQsRUFBVztBQUN2RSxVQUFNdUUsd0JBQXdCOUUsRUFBRU8sTUFBTUcsYUFBUixFQUF1QmMsR0FBdkIsRUFBOUI7O0FBRUFmLFdBQUs4QyxJQUFMLENBQVUsVUFBVixFQUFzQndCLFNBQVNELHFCQUFULEVBQWdDLEVBQWhDLE1BQXdDckUsS0FBS1EsSUFBTCxDQUFVLGlCQUFWLENBQTlEO0FBQ0QsS0FKRDtBQUtEO0FBQ0YsQ0EvR0QsRTs7Ozs7Ozs7Ozs7OztBQy9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkF5QmU7QUFDYnVCLDBCQUF3Qix5QkFEWDtBQUViakIsK0JBQTZCLHVCQUZoQjtBQUdiSiwwQkFBd0IsNEJBSFg7QUFJYmlCLHdCQUFzQiw2QkFKVDtBQUtiUyxvQkFBa0Isd0JBTEw7QUFNYlEsb0JBQWtCLG9CQU5MO0FBT2JELHdCQUFzQixzQkFQVDtBQVFiSywyQkFBeUIsMEJBUlo7QUFTYkMsdUNBQXFDLHNDQVR4QjtBQVViQyx1Q0FBcUMsc0NBVnhCO0FBV2JDLG1DQUFpQyxnQ0FYcEI7QUFZYkUsb0JBQWtCLHdCQVpMO0FBYWJTLHlDQUF1Qyw0Q0FiMUI7QUFjYkosOEJBQTRCLGlDQWRmO0FBZWJPLHlCQUF1QiwyQkFmVjtBQWdCYkwseUJBQXVCLDRCQWhCVjtBQWlCYkosb0JBQWtCLDBCQWpCTDtBQWtCYlcsOEJBQTRCLGlDQWxCZjtBQW1CYkMsZ0NBQThCLG1DQW5CakI7QUFvQmJHLCtCQUE2QixrQ0FwQmhCO0FBcUJickQsbUNBQWlDLHlCQXJCcEI7QUFzQmJDLDBDQUF3Qyx3Q0F0QjNCO0FBdUJiQyxpREFBK0M7QUF2QmxDLEMiLCJmaWxlIjoib3JkZXJfdmlldy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM4NSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDM1OThmODA5NTYyZTVhMmYxMDIiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuaW1wb3J0IE9yZGVyVmlld1BhZ2VNYXAgZnJvbSBcIi4vT3JkZXJWaWV3UGFnZU1hcFwiO1xuXG5jb25zdCAkID0gd2luZG93LiQ7XG5cbi8qKlxuICogTWFuYWdlcyBhZGRpbmcvZWRpdGluZyBub3RlIGZvciBpbnZvaWNlIGRvY3VtZW50cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2ljZU5vdGVNYW5hZ2VyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9pbml0U2hvd05vdGVGb3JtRXZlbnRIYW5kbGVyKCk7XG4gICAgdGhpcy5faW5pdENsb3NlTm90ZUZvcm1FdmVudEhhbmRsZXIoKTtcbiAgICB0aGlzLl9pbml0RW50ZXJQYXltZW50RXZlbnRIYW5kbGVyKCk7XG5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICBfaW5pdFNob3dOb3RlRm9ybUV2ZW50SGFuZGxlcigpIHtcbiAgICAkKCcuanMtb3Blbi1pbnZvaWNlLW5vdGUtYnRuJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCAkYnRuID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIGNvbnN0ICRub3RlUm93ID0gJGJ0bi5jbG9zZXN0KCd0cicpLnNpYmxpbmdzKCd0cjpmaXJzdCcpO1xuXG4gICAgICAkbm90ZVJvdy5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgfSk7XG4gIH1cblxuICBfaW5pdENsb3NlTm90ZUZvcm1FdmVudEhhbmRsZXIoKSB7XG4gICAgJCgnLmpzLWNhbmNlbC1pbnZvaWNlLW5vdGUtYnRuJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmNsb3Nlc3QoJ3RyJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH0pO1xuICB9XG5cbiAgX2luaXRFbnRlclBheW1lbnRFdmVudEhhbmRsZXIoKSB7XG4gICAgJCgnLmpzLWVudGVyLXBheW1lbnQtYnRuJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cbiAgICAgIGNvbnN0ICRidG4gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgbGV0IHBheW1lbnRBbW91bnQgPSAkYnRuLmRhdGEoJ3BheW1lbnQtYW1vdW50Jyk7XG5cbiAgICAgICQoT3JkZXJWaWV3UGFnZU1hcC52aWV3T3JkZXJQYXltZW50c0Jsb2NrKS5nZXQoMCkuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSk7XG4gICAgICAkKE9yZGVyVmlld1BhZ2VNYXAub3JkZXJQYXltZW50Rm9ybUFtb3VudElucHV0KS52YWwocGF5bWVudEFtb3VudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BhZ2VzL29yZGVyL2ludm9pY2Utbm90ZS1tYW5hZ2VyLmpzIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cbmltcG9ydCBPcmRlclZpZXdQYWdlTWFwIGZyb20gJy4vT3JkZXJWaWV3UGFnZU1hcCc7XG5cbmNvbnN0ICQgPSB3aW5kb3cuJDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJTaGlwcGluZ01hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9pbml0T3JkZXJTaGlwcGluZ1VwZGF0ZUV2ZW50SGFuZGxlcigpO1xuICB9XG5cbiAgX2luaXRPcmRlclNoaXBwaW5nVXBkYXRlRXZlbnRIYW5kbGVyKCkge1xuICAgICQoT3JkZXJWaWV3UGFnZU1hcC5zaG93T3JkZXJTaGlwcGluZ1VwZGF0ZU1vZGFsQnRuKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0ICRidG4gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAkKE9yZGVyVmlld1BhZ2VNYXAudXBkYXRlT3JkZXJTaGlwcGluZ1RyYWNraW5nTnVtYmVySW5wdXQpLnZhbCgkYnRuLmRhdGEoJ29yZGVyLXRyYWNraW5nLW51bWJlcicpKTtcbiAgICAgICQoT3JkZXJWaWV3UGFnZU1hcC51cGRhdGVPcmRlclNoaXBwaW5nQ3VycmVudE9yZGVyQ2FycmllcklkSW5wdXQpLnZhbCgkYnRuLmRhdGEoJ29yZGVyLWNhcnJpZXItaWQnKSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BhZ2VzL29yZGVyL29yZGVyLXNoaXBwaW5nLW1hbmFnZXIuanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG5pbXBvcnQgT3JkZXJWaWV3UGFnZU1hcCBmcm9tICcuL09yZGVyVmlld1BhZ2VNYXAnO1xuaW1wb3J0IE9yZGVyU2hpcHBpbmdNYW5hZ2VyIGZyb20gJy4vb3JkZXItc2hpcHBpbmctbWFuYWdlcic7XG5pbXBvcnQgSW52b2ljZU5vdGVNYW5hZ2VyIGZyb20gJy4vaW52b2ljZS1ub3RlLW1hbmFnZXInO1xuXG5jb25zdCAkID0gd2luZG93LiQ7XG5cbiQoKCkgPT4ge1xuICBjb25zdCBESVNDT1VOVF9UWVBFX0FNT1VOVCA9ICdhbW91bnQnO1xuICBjb25zdCBESVNDT1VOVF9UWVBFX1BFUkNFTlQgPSAncGVyY2VudCc7XG4gIGNvbnN0IERJU0NPVU5UX1RZUEVfRlJFRV9TSElQUElORyA9ICdmcmVlX3NoaXBwaW5nJztcblxuICBuZXcgT3JkZXJTaGlwcGluZ01hbmFnZXIoKTtcblxuICBoYW5kbGVQYXltZW50RGV0YWlsc1RvZ2dsZSgpO1xuICBoYW5kbGVQcml2YXRlTm90ZUNoYW5nZSgpO1xuICBoYW5kbGVVcGRhdGVPcmRlclN0YXR1c0J1dHRvbigpO1xuXG4gIG5ldyBJbnZvaWNlTm90ZU1hbmFnZXIoKTtcblxuICAkKE9yZGVyVmlld1BhZ2VNYXAucHJpdmF0ZU5vdGVUb2dnbGVCdG4pLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlUHJpdmF0ZU5vdGVCbG9jaygpO1xuICB9KTtcblxuICBpbml0QWRkQ2FydFJ1bGVGb3JtSGFuZGxlcigpO1xuICBpbml0QWRkUHJvZHVjdEZvcm1IYW5kbGVyKCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlUGF5bWVudERldGFpbHNUb2dnbGUoKSB7XG4gICAgJChPcmRlclZpZXdQYWdlTWFwLm9yZGVyUGF5bWVudERldGFpbHNCdG4pLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgJHBheW1lbnREZXRhaWxSb3cgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmNsb3Nlc3QoJ3RyJykubmV4dCgnOmZpcnN0Jyk7XG5cbiAgICAgICRwYXltZW50RGV0YWlsUm93LnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVByaXZhdGVOb3RlQmxvY2soKSB7XG4gICAgY29uc3QgJGJsb2NrID0gJChPcmRlclZpZXdQYWdlTWFwLnByaXZhdGVOb3RlQmxvY2spO1xuICAgIGNvbnN0ICRidG4gPSAkKE9yZGVyVmlld1BhZ2VNYXAucHJpdmF0ZU5vdGVUb2dnbGVCdG4pO1xuICAgIGNvbnN0IGlzUHJpdmF0ZU5vdGVPcGVuZWQgPSAkYnRuLmhhc0NsYXNzKCdpcy1vcGVuZWQnKTtcblxuICAgIGlmIChpc1ByaXZhdGVOb3RlT3BlbmVkKSB7XG4gICAgICAkYnRuLnJlbW92ZUNsYXNzKCdpcy1vcGVuZWQnKTtcbiAgICAgICRibG9jay5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRidG4uYWRkQ2xhc3MoJ2lzLW9wZW5lZCcpO1xuICAgICAgJGJsb2NrLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICB9XG5cbiAgICBjb25zdCAkaWNvbiA9ICRidG4uZmluZCgnLm1hdGVyaWFsLWljb25zJyk7XG4gICAgJGljb24udGV4dChpc1ByaXZhdGVOb3RlT3BlbmVkID8gJ2FkZCcgOiAncmVtb3ZlJyk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcml2YXRlTm90ZUNoYW5nZSgpIHtcbiAgICBjb25zdCAkc3VibWl0QnRuID0gJChPcmRlclZpZXdQYWdlTWFwLnByaXZhdGVOb3RlU3VibWl0QnRuKTtcblxuICAgICQoT3JkZXJWaWV3UGFnZU1hcC5wcml2YXRlTm90ZUlucHV0KS5vbignaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG5vdGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xuICAgICAgJHN1Ym1pdEJ0bi5wcm9wKCdkaXNhYmxlZCcsICFub3RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRBZGRQcm9kdWN0Rm9ybUhhbmRsZXIoKSB7XG4gICAgY29uc3QgJG1vZGFsID0gJChPcmRlclZpZXdQYWdlTWFwLnVwZGF0ZU9yZGVyUHJvZHVjdE1vZGFsKTtcblxuICAgICRtb2RhbC5vbignY2xpY2snLCAnLmpzLW9yZGVyLXByb2R1Y3QtdXBkYXRlLWJ0bicsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgJGJ0biA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICRtb2RhbC5maW5kKCcuanMtdXBkYXRlLXByb2R1Y3QtbmFtZScpLnRleHQoJGJ0bi5kYXRhKCdwcm9kdWN0LW5hbWUnKSk7XG4gICAgICAkbW9kYWwuZmluZChPcmRlclZpZXdQYWdlTWFwLnVwZGF0ZU9yZGVyUHJvZHVjdFByaWNlVGF4RXhjbElucHV0KS52YWwoJGJ0bi5kYXRhKCdwcm9kdWN0LXByaWNlLXRheC1leGNsJykpO1xuICAgICAgJG1vZGFsLmZpbmQoT3JkZXJWaWV3UGFnZU1hcC51cGRhdGVPcmRlclByb2R1Y3RQcmljZVRheEluY2xJbnB1dCkudmFsKCRidG4uZGF0YSgncHJvZHVjdC1wcmljZS10YXgtaW5jbCcpKTtcbiAgICAgICRtb2RhbC5maW5kKE9yZGVyVmlld1BhZ2VNYXAudXBkYXRlT3JkZXJQcm9kdWN0UXVhbnRpdHlJbnB1dCkudmFsKCRidG4uZGF0YSgncHJvZHVjdC1xdWFudGl0eScpKTtcbiAgICAgICRtb2RhbC5maW5kKCdmb3JtJykuYXR0cignYWN0aW9uJywgJGJ0bi5kYXRhKCd1cGRhdGUtdXJsJykpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFkZENhcnRSdWxlRm9ybUhhbmRsZXIoKSB7XG4gICAgY29uc3QgJG1vZGFsID0gJChPcmRlclZpZXdQYWdlTWFwLmFkZENhcnRSdWxlTW9kYWwpO1xuICAgIGNvbnN0ICRmb3JtID0gJG1vZGFsLmZpbmQoJ2Zvcm0nKTtcbiAgICBjb25zdCAkdmFsdWVIZWxwID0gJG1vZGFsLmZpbmQoT3JkZXJWaWV3UGFnZU1hcC5jYXJ0UnVsZUhlbHBUZXh0KTtcbiAgICBjb25zdCAkaW52b2ljZVNlbGVjdCA9ICRtb2RhbC5maW5kKE9yZGVyVmlld1BhZ2VNYXAuYWRkQ2FydFJ1bGVJbnZvaWNlSWRTZWxlY3QpO1xuICAgIGNvbnN0ICR2YWx1ZUlucHV0ID0gJGZvcm0uZmluZChPcmRlclZpZXdQYWdlTWFwLmFkZENhcnRSdWxlVmFsdWVJbnB1dCk7XG4gICAgY29uc3QgJHZhbHVlRm9ybUdyb3VwID0gJHZhbHVlSW5wdXQuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKTtcblxuICAgICRmb3JtLmZpbmQoT3JkZXJWaWV3UGFnZU1hcC5hZGRDYXJ0UnVsZUFwcGx5T25BbGxJbnZvaWNlc0NoZWNrYm94KS5vbignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBpc0NoZWNrZWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAkaW52b2ljZVNlbGVjdC5hdHRyKCdkaXNhYmxlZCcsIGlzQ2hlY2tlZCk7XG4gICAgfSk7XG5cbiAgICAkZm9ybS5maW5kKE9yZGVyVmlld1BhZ2VNYXAuYWRkQ2FydFJ1bGVUeXBlU2VsZWN0KS5vbignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZENhcnRSdWxlVHlwZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XG5cbiAgICAgIGlmIChzZWxlY3RlZENhcnRSdWxlVHlwZSA9PT0gRElTQ09VTlRfVFlQRV9BTU9VTlQpIHtcbiAgICAgICAgJHZhbHVlSGVscC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkdmFsdWVIZWxwLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdGVkQ2FydFJ1bGVUeXBlID09PSBESVNDT1VOVF9UWVBFX0ZSRUVfU0hJUFBJTkcpIHtcbiAgICAgICAgJHZhbHVlRm9ybUdyb3VwLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICAgJHZhbHVlSW5wdXQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICR2YWx1ZUZvcm1Hcm91cC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gICAgICAgICR2YWx1ZUlucHV0LmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlT3JkZXJTdGF0dXNCdXR0b24oKSB7XG4gICAgY29uc3QgJGJ0biA9ICQoT3JkZXJWaWV3UGFnZU1hcC51cGRhdGVPcmRlclN0YXR1c0FjdGlvbkJ0bik7XG5cbiAgICAkKE9yZGVyVmlld1BhZ2VNYXAudXBkYXRlT3JkZXJTdGF0dXNBY3Rpb25JbnB1dCkub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRPcmRlclN0YXR1c0lkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKTtcblxuICAgICAgJGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHBhcnNlSW50KHNlbGVjdGVkT3JkZXJTdGF0dXNJZCwgMTApID09PSAkYnRuLmRhdGEoJ29yZGVyLXN0YXR1cy1pZCcpKTtcbiAgICB9KTtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9wYWdlcy9vcmRlci92aWV3LmpzIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvcmRlclBheW1lbnREZXRhaWxzQnRuOiAnLmpzLXBheW1lbnQtZGV0YWlscy1idG4nLFxuICBvcmRlclBheW1lbnRGb3JtQW1vdW50SW5wdXQ6ICcjb3JkZXJfcGF5bWVudF9hbW91bnQnLFxuICB2aWV3T3JkZXJQYXltZW50c0Jsb2NrOiAnI3ZpZXdfb3JkZXJfcGF5bWVudHNfYmxvY2snLFxuICBwcml2YXRlTm90ZVRvZ2dsZUJ0bjogJy5qcy1wcml2YXRlLW5vdGUtdG9nZ2xlLWJ0bicsXG4gIHByaXZhdGVOb3RlQmxvY2s6ICcuanMtcHJpdmF0ZS1ub3RlLWJsb2NrJyxcbiAgcHJpdmF0ZU5vdGVJbnB1dDogJyNwcml2YXRlX25vdGVfbm90ZScsXG4gIHByaXZhdGVOb3RlU3VibWl0QnRuOiAnLmpzLXByaXZhdGUtbm90ZS1idG4nLFxuICB1cGRhdGVPcmRlclByb2R1Y3RNb2RhbDogJyN1cGRhdGVPcmRlclByb2R1Y3RNb2RhbCcsXG4gIHVwZGF0ZU9yZGVyUHJvZHVjdFByaWNlVGF4RXhjbElucHV0OiAnI3VwZGF0ZV9vcmRlcl9wcm9kdWN0X3ByaWNlX3RheF9leGNsJyxcbiAgdXBkYXRlT3JkZXJQcm9kdWN0UHJpY2VUYXhJbmNsSW5wdXQ6ICcjdXBkYXRlX29yZGVyX3Byb2R1Y3RfcHJpY2VfdGF4X2luY2wnLFxuICB1cGRhdGVPcmRlclByb2R1Y3RRdWFudGl0eUlucHV0OiAnI3VwZGF0ZV9vcmRlcl9wcm9kdWN0X3F1YW50aXR5JyxcbiAgYWRkQ2FydFJ1bGVNb2RhbDogJyNhZGRPcmRlckRpc2NvdW50TW9kYWwnLFxuICBhZGRDYXJ0UnVsZUFwcGx5T25BbGxJbnZvaWNlc0NoZWNrYm94OiAnI2FkZF9vcmRlcl9jYXJ0X3J1bGVfYXBwbHlfb25fYWxsX2ludm9pY2VzJyxcbiAgYWRkQ2FydFJ1bGVJbnZvaWNlSWRTZWxlY3Q6ICcjYWRkX29yZGVyX2NhcnRfcnVsZV9pbnZvaWNlX2lkJyxcbiAgYWRkQ2FydFJ1bGVUeXBlU2VsZWN0OiAnI2FkZF9vcmRlcl9jYXJ0X3J1bGVfdHlwZScsXG4gIGFkZENhcnRSdWxlVmFsdWVJbnB1dDogJyNhZGRfb3JkZXJfY2FydF9ydWxlX3ZhbHVlJyxcbiAgY2FydFJ1bGVIZWxwVGV4dDogJy5qcy1jYXJ0LXJ1bGUtdmFsdWUtaGVscCcsXG4gIHVwZGF0ZU9yZGVyU3RhdHVzQWN0aW9uQnRuOiAnI3VwZGF0ZV9vcmRlcl9zdGF0dXNfYWN0aW9uX2J0bicsXG4gIHVwZGF0ZU9yZGVyU3RhdHVzQWN0aW9uSW5wdXQ6ICcjdXBkYXRlX29yZGVyX3N0YXR1c19hY3Rpb25faW5wdXQnLFxuICB1cGRhdGVPcmRlclN0YXR1c0FjdGlvbkZvcm06ICcjdXBkYXRlX29yZGVyX3N0YXR1c19hY3Rpb25fZm9ybScsXG4gIHNob3dPcmRlclNoaXBwaW5nVXBkYXRlTW9kYWxCdG46ICcuanMtdXBkYXRlLXNoaXBwaW5nLWJ0bicsXG4gIHVwZGF0ZU9yZGVyU2hpcHBpbmdUcmFja2luZ051bWJlcklucHV0OiAnI3VwZGF0ZV9vcmRlcl9zaGlwcGluZ190cmFja2luZ19udW1iZXInLFxuICB1cGRhdGVPcmRlclNoaXBwaW5nQ3VycmVudE9yZGVyQ2FycmllcklkSW5wdXQ6ICcjdXBkYXRlX29yZGVyX3NoaXBwaW5nX2N1cnJlbnRfb3JkZXJfY2Fycmllcl9pZCcsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGFnZXMvb3JkZXIvT3JkZXJWaWV3UGFnZU1hcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=