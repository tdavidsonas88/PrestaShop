window["manufacturer_address_form"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 369);
/******/ })
/************************************************************************/
/******/ ({

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 2007-2019 PrestaShop and Contributors
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

var $ = window.$;

/**
 * Toggle DNI input requirement on country selection
 *
 * Usage:
 *
 * <!-- Country select options must have need_dni attribute when needed -->
 * <select name="id_country" id="id_country" states-url="path/to/states/api">
 *   ...
 *   <option value="6" need_dni="1">Spain</value>
 *   ...
 * </select>
 *
 * In JS:
 *
 * new CountryDniRequiredToggler('#id_country', '#id_country_dni', 'label[for="id_country_dni"]');
 */

var CountryDniRequiredToggler = function () {
  function CountryDniRequiredToggler(countryInputSelector, countryDniInput, countryDniInputLabel) {
    var _this = this;

    _classCallCheck(this, CountryDniRequiredToggler);

    this.$countryDniInput = $(countryDniInput);
    this.$countryDniInputLabel = $(countryDniInputLabel);
    this.$countryInput = $(countryInputSelector);
    this.countryInputSelectedSelector = countryInputSelector + '>option:selected';
    this.countryDniInputLabelDangerSelector = countryDniInputLabel + '>span.text-danger';

    this.$countryInput.on('change', function () {
      return _this._toggle();
    });

    // toggle on page load
    this._toggle();
  }

  /**
   * Toggles DNI input required
   *
   * @private
   */


  _createClass(CountryDniRequiredToggler, [{
    key: '_toggle',
    value: function _toggle() {
      var $countrySelectedOption = $(this.countryInputSelectedSelector);
      $(this.countryDniInputLabelDangerSelector).remove();
      this.$countryDniInput.attr('required', false);
      if (1 === parseInt($countrySelectedOption.attr('need_dni'), 10)) {
        this.$countryDniInput.attr('required', true);
        this.$countryDniInputLabel.prepend($('<span class="text-danger">*</span>'));
      }
    }
  }]);

  return CountryDniRequiredToggler;
}();

exports.default = CountryDniRequiredToggler;

/***/ }),

/***/ 277:
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
  manufacturerAddressCountrySelect: '#manufacturer_address_id_country',
  manufacturerAddressStateSelect: '#manufacturer_address_id_state',
  manufacturerAddressStateBlock: '.js-manufacturer-address-state',
  manufacturerAddressDniInput: '#manufacturer_address_dni',
  manufacturerAddressDniInputLabel: 'label[for="manufacturer_address_dni"]'
};

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _countryStateSelectionToggler = __webpack_require__(62);

var _countryStateSelectionToggler2 = _interopRequireDefault(_countryStateSelectionToggler);

var _manufacturerAddressMap = __webpack_require__(277);

var _manufacturerAddressMap2 = _interopRequireDefault(_manufacturerAddressMap);

var _countryDniRequiredToggler = __webpack_require__(246);

var _countryDniRequiredToggler2 = _interopRequireDefault(_countryDniRequiredToggler);

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
  new _countryStateSelectionToggler2.default(_manufacturerAddressMap2.default.manufacturerAddressCountrySelect, _manufacturerAddressMap2.default.manufacturerAddressStateSelect, _manufacturerAddressMap2.default.manufacturerAddressStateBlock);
  new _countryDniRequiredToggler2.default(_manufacturerAddressMap2.default.manufacturerAddressCountrySelect, _manufacturerAddressMap2.default.manufacturerAddressDniInput, _manufacturerAddressMap2.default.manufacturerAddressDniInputLabel);
});

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var $ = window.$;

/**
 * Displays, fills or hides State selection block depending on selected country.
 *
 * Usage:
 *
 * <!-- Country select must have unique identifier & url for states API -->
 * <select name="id_country" id="id_country" states-url="path/to/states/api">
 *   ...
 * </select>
 *
 * <!-- If selected country does not have states, then this block will be hidden -->
 * <div class="js-state-selection-block">
 *   <select name="id_state">
 *     ...
 *   </select>
 * </div>
 *
 * In JS:
 *
 * new CountryStateSelectionToggler('#id_country', '#id_state', '.js-state-selection-block');
 */

var CountryStateSelectionToggler = function () {
  function CountryStateSelectionToggler(countryInputSelector, countryStateSelector, stateSelectionBlockSelector) {
    var _this2 = this;

    _classCallCheck(this, CountryStateSelectionToggler);

    this.$stateSelectionBlock = $(stateSelectionBlockSelector);
    this.$countryStateSelector = $(countryStateSelector);
    this.$countryInput = $(countryInputSelector);

    this.$countryInput.on('change', function () {
      return _this2._toggle();
    });

    // toggle on page load
    this._toggle(true);

    return {};
  }

  /**
   * Toggles State selection
   *
   * @private
   */


  _createClass(CountryStateSelectionToggler, [{
    key: '_toggle',
    value: function _toggle() {
      var _this3 = this;

      var isFirstToggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      $.ajax({
        url: this.$countryInput.data('states-url'),
        method: 'GET',
        dataType: 'json',
        data: {
          id_country: this.$countryInput.val()
        }
      }).then(function (response) {
        if (response.states.length === 0) {
          _this3.$stateSelectionBlock.fadeOut();

          return;
        }

        _this3.$stateSelectionBlock.fadeIn();

        if (isFirstToggle === false) {
          _this3.$countryStateSelector.empty();
          var _this = _this3;
          $.each(response.states, function (index, value) {
            _this.$countryStateSelector.append($('<option></option>').attr('value', value).text(index));
          });
        }
      }).catch(function (response) {
        if (typeof response.responseJSON !== 'undefined') {
          showErrorMessage(response.responseJSON.message);
        }
      });
    }
  }]);

  return CountryStateSelectionToggler;
}();

exports.default = CountryStateSelectionToggler;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDM1OThmODA5NTYyZTVhMmYxMDI/NWI0MioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9jb3VudHJ5LWRuaS1yZXF1aXJlZC10b2dnbGVyLmpzIiwid2VicGFjazovLy8uL2pzL3BhZ2VzL21hbnVmYWN0dXJlci9tYW51ZmFjdHVyZXItYWRkcmVzcy1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGFnZXMvbWFudWZhY3R1cmVyL21hbnVmYWN0dXJlcl9hZGRyZXNzX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9jb3VudHJ5LXN0YXRlLXNlbGVjdGlvbi10b2dnbGVyLmpzPzc2NzAiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsIkNvdW50cnlEbmlSZXF1aXJlZFRvZ2dsZXIiLCJjb3VudHJ5SW5wdXRTZWxlY3RvciIsImNvdW50cnlEbmlJbnB1dCIsImNvdW50cnlEbmlJbnB1dExhYmVsIiwiJGNvdW50cnlEbmlJbnB1dCIsIiRjb3VudHJ5RG5pSW5wdXRMYWJlbCIsIiRjb3VudHJ5SW5wdXQiLCJjb3VudHJ5SW5wdXRTZWxlY3RlZFNlbGVjdG9yIiwiY291bnRyeURuaUlucHV0TGFiZWxEYW5nZXJTZWxlY3RvciIsIm9uIiwiX3RvZ2dsZSIsIiRjb3VudHJ5U2VsZWN0ZWRPcHRpb24iLCJyZW1vdmUiLCJhdHRyIiwicGFyc2VJbnQiLCJwcmVwZW5kIiwibWFudWZhY3R1cmVyQWRkcmVzc0NvdW50cnlTZWxlY3QiLCJtYW51ZmFjdHVyZXJBZGRyZXNzU3RhdGVTZWxlY3QiLCJtYW51ZmFjdHVyZXJBZGRyZXNzU3RhdGVCbG9jayIsIm1hbnVmYWN0dXJlckFkZHJlc3NEbmlJbnB1dCIsIm1hbnVmYWN0dXJlckFkZHJlc3NEbmlJbnB1dExhYmVsIiwiZG9jdW1lbnQiLCJyZWFkeSIsIkNvdW50cnlTdGF0ZVNlbGVjdGlvblRvZ2dsZXIiLCJNYW51ZmFjdHVyZXJBZGRyZXNzTWFwIiwiY291bnRyeVN0YXRlU2VsZWN0b3IiLCJzdGF0ZVNlbGVjdGlvbkJsb2NrU2VsZWN0b3IiLCIkc3RhdGVTZWxlY3Rpb25CbG9jayIsIiRjb3VudHJ5U3RhdGVTZWxlY3RvciIsImlzRmlyc3RUb2dnbGUiLCJhamF4IiwidXJsIiwiZGF0YSIsIm1ldGhvZCIsImRhdGFUeXBlIiwiaWRfY291bnRyeSIsInZhbCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXRlcyIsImxlbmd0aCIsImZhZGVPdXQiLCJmYWRlSW4iLCJlbXB0eSIsIl90aGlzIiwiZWFjaCIsImluZGV4IiwidmFsdWUiLCJhcHBlbmQiLCJ0ZXh0IiwiY2F0Y2giLCJyZXNwb25zZUpTT04iLCJzaG93RXJyb3JNZXNzYWdlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxJQUFNQSxJQUFJQyxPQUFPRCxDQUFqQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQnFCRSx5QjtBQUNuQixxQ0FBWUMsb0JBQVosRUFBa0NDLGVBQWxDLEVBQW1EQyxvQkFBbkQsRUFBeUU7QUFB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bUI4QixHQUFuQjtBQURSO0FBSkQsT0FBUCxFQU9HQyxJQVBILENBT1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ3BCLFlBQUlBLFNBQVNDLE1BQVQsQ0FBZ0JDLE1BQWhCLEtBQTJCLENBQS9CLEVBQWtDO0FBQ2hDLGlCQUFLYixvQkFBTCxDQUEwQmMsT0FBMUI7O0FBRUE7QUFDRDs7QUFFRCxlQUFLZCxvQkFBTCxDQUEwQmUsTUFBMUI7O0FBRUEsWUFBSWIsa0JBQWtCLEtBQXRCLEVBQTZCO0FBQzNCLGlCQUFLRCxxQkFBTCxDQUEyQmUsS0FBM0I7QUFDQSxjQUFJQyxRQUFRLE1BQVo7QUFDQTlDLFlBQUUrQyxJQUFGLENBQU9QLFNBQVNDLE1BQWhCLEVBQXdCLFVBQVVPLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQzlDSCxrQkFBTWhCLHFCQUFOLENBQTRCb0IsTUFBNUIsQ0FBbUNsRCxFQUFFLG1CQUFGLEVBQXVCZSxJQUF2QixDQUE0QixPQUE1QixFQUFxQ2tDLEtBQXJDLEVBQTRDRSxJQUE1QyxDQUFpREgsS0FBakQsQ0FBbkM7QUFDRCxXQUZEO0FBR0Q7QUFDRixPQXZCRCxFQXVCR0ksS0F2QkgsQ0F1QlMsVUFBQ1osUUFBRCxFQUFjO0FBQ3JCLFlBQUksT0FBT0EsU0FBU2EsWUFBaEIsS0FBaUMsV0FBckMsRUFBa0Q7QUFDaERDLDJCQUFpQmQsU0FBU2EsWUFBVCxDQUFzQkUsT0FBdkM7QUFDRDtBQUNGLE9BM0JEO0FBNEJEOzs7Ozs7a0JBaERrQjlCLDRCIiwiZmlsZSI6Im1hbnVmYWN0dXJlcl9hZGRyZXNzX2Zvcm0uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNjkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAzNTk4ZjgwOTU2MmU1YTJmMTAyIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuY29uc3QgJCA9IHdpbmRvdy4kO1xuXG4vKipcbiAqIFRvZ2dsZSBETkkgaW5wdXQgcmVxdWlyZW1lbnQgb24gY291bnRyeSBzZWxlY3Rpb25cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiA8IS0tIENvdW50cnkgc2VsZWN0IG9wdGlvbnMgbXVzdCBoYXZlIG5lZWRfZG5pIGF0dHJpYnV0ZSB3aGVuIG5lZWRlZCAtLT5cbiAqIDxzZWxlY3QgbmFtZT1cImlkX2NvdW50cnlcIiBpZD1cImlkX2NvdW50cnlcIiBzdGF0ZXMtdXJsPVwicGF0aC90by9zdGF0ZXMvYXBpXCI+XG4gKiAgIC4uLlxuICogICA8b3B0aW9uIHZhbHVlPVwiNlwiIG5lZWRfZG5pPVwiMVwiPlNwYWluPC92YWx1ZT5cbiAqICAgLi4uXG4gKiA8L3NlbGVjdD5cbiAqXG4gKiBJbiBKUzpcbiAqXG4gKiBuZXcgQ291bnRyeURuaVJlcXVpcmVkVG9nZ2xlcignI2lkX2NvdW50cnknLCAnI2lkX2NvdW50cnlfZG5pJywgJ2xhYmVsW2Zvcj1cImlkX2NvdW50cnlfZG5pXCJdJyk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnlEbmlSZXF1aXJlZFRvZ2dsZXIge1xuICBjb25zdHJ1Y3Rvcihjb3VudHJ5SW5wdXRTZWxlY3RvciwgY291bnRyeURuaUlucHV0LCBjb3VudHJ5RG5pSW5wdXRMYWJlbCkge1xuICAgIHRoaXMuJGNvdW50cnlEbmlJbnB1dCA9ICQoY291bnRyeURuaUlucHV0KTtcbiAgICB0aGlzLiRjb3VudHJ5RG5pSW5wdXRMYWJlbCA9ICQoY291bnRyeURuaUlucHV0TGFiZWwpO1xuICAgIHRoaXMuJGNvdW50cnlJbnB1dCA9ICQoY291bnRyeUlucHV0U2VsZWN0b3IpO1xuICAgIHRoaXMuY291bnRyeUlucHV0U2VsZWN0ZWRTZWxlY3RvciA9IGAke2NvdW50cnlJbnB1dFNlbGVjdG9yfT5vcHRpb246c2VsZWN0ZWRgO1xuICAgIHRoaXMuY291bnRyeURuaUlucHV0TGFiZWxEYW5nZXJTZWxlY3RvciA9IGAke2NvdW50cnlEbmlJbnB1dExhYmVsfT5zcGFuLnRleHQtZGFuZ2VyYDtcblxuICAgIHRoaXMuJGNvdW50cnlJbnB1dC5vbignY2hhbmdlJywgKCkgPT4gdGhpcy5fdG9nZ2xlKCkpO1xuXG4gICAgLy8gdG9nZ2xlIG9uIHBhZ2UgbG9hZFxuICAgIHRoaXMuX3RvZ2dsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgRE5JIGlucHV0IHJlcXVpcmVkXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdG9nZ2xlKCkge1xuICAgIGNvbnN0ICRjb3VudHJ5U2VsZWN0ZWRPcHRpb24gPSAkKHRoaXMuY291bnRyeUlucHV0U2VsZWN0ZWRTZWxlY3Rvcik7XG4gICAgJCh0aGlzLmNvdW50cnlEbmlJbnB1dExhYmVsRGFuZ2VyU2VsZWN0b3IpLnJlbW92ZSgpO1xuICAgIHRoaXMuJGNvdW50cnlEbmlJbnB1dC5hdHRyKCdyZXF1aXJlZCcsIGZhbHNlKTtcbiAgICBpZiAoMSA9PT0gcGFyc2VJbnQoJGNvdW50cnlTZWxlY3RlZE9wdGlvbi5hdHRyKCduZWVkX2RuaScpLCAxMCkpIHtcbiAgICAgIHRoaXMuJGNvdW50cnlEbmlJbnB1dC5hdHRyKCdyZXF1aXJlZCcsIHRydWUpO1xuICAgICAgdGhpcy4kY291bnRyeURuaUlucHV0TGFiZWwucHJlcGVuZCgkKCc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj4nKSk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jb21wb25lbnRzL2NvdW50cnktZG5pLXJlcXVpcmVkLXRvZ2dsZXIuanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1hbnVmYWN0dXJlckFkZHJlc3NDb3VudHJ5U2VsZWN0OiAnI21hbnVmYWN0dXJlcl9hZGRyZXNzX2lkX2NvdW50cnknLFxuICBtYW51ZmFjdHVyZXJBZGRyZXNzU3RhdGVTZWxlY3Q6ICcjbWFudWZhY3R1cmVyX2FkZHJlc3NfaWRfc3RhdGUnLFxuICBtYW51ZmFjdHVyZXJBZGRyZXNzU3RhdGVCbG9jazogJy5qcy1tYW51ZmFjdHVyZXItYWRkcmVzcy1zdGF0ZScsXG4gIG1hbnVmYWN0dXJlckFkZHJlc3NEbmlJbnB1dDogJyNtYW51ZmFjdHVyZXJfYWRkcmVzc19kbmknLFxuICBtYW51ZmFjdHVyZXJBZGRyZXNzRG5pSW5wdXRMYWJlbDogJ2xhYmVsW2Zvcj1cIm1hbnVmYWN0dXJlcl9hZGRyZXNzX2RuaVwiXScsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGFnZXMvbWFudWZhY3R1cmVyL21hbnVmYWN0dXJlci1hZGRyZXNzLW1hcC5qcyIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5cbmltcG9ydCBDb3VudHJ5U3RhdGVTZWxlY3Rpb25Ub2dnbGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY291bnRyeS1zdGF0ZS1zZWxlY3Rpb24tdG9nZ2xlcic7XG5pbXBvcnQgTWFudWZhY3R1cmVyQWRkcmVzc01hcCBmcm9tICcuL21hbnVmYWN0dXJlci1hZGRyZXNzLW1hcCc7XG5pbXBvcnQgQ291bnRyeURuaVJlcXVpcmVkVG9nZ2xlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvdW50cnktZG5pLXJlcXVpcmVkLXRvZ2dsZXInO1xuXG5jb25zdCAkID0gd2luZG93LiQ7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgbmV3IENvdW50cnlTdGF0ZVNlbGVjdGlvblRvZ2dsZXIoXG4gICAgTWFudWZhY3R1cmVyQWRkcmVzc01hcC5tYW51ZmFjdHVyZXJBZGRyZXNzQ291bnRyeVNlbGVjdCxcbiAgICBNYW51ZmFjdHVyZXJBZGRyZXNzTWFwLm1hbnVmYWN0dXJlckFkZHJlc3NTdGF0ZVNlbGVjdCxcbiAgICBNYW51ZmFjdHVyZXJBZGRyZXNzTWFwLm1hbnVmYWN0dXJlckFkZHJlc3NTdGF0ZUJsb2NrXG4gICk7XG4gIG5ldyBDb3VudHJ5RG5pUmVxdWlyZWRUb2dnbGVyKFxuICAgIE1hbnVmYWN0dXJlckFkZHJlc3NNYXAubWFudWZhY3R1cmVyQWRkcmVzc0NvdW50cnlTZWxlY3QsXG4gICAgTWFudWZhY3R1cmVyQWRkcmVzc01hcC5tYW51ZmFjdHVyZXJBZGRyZXNzRG5pSW5wdXQsXG4gICAgTWFudWZhY3R1cmVyQWRkcmVzc01hcC5tYW51ZmFjdHVyZXJBZGRyZXNzRG5pSW5wdXRMYWJlbFxuICApO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9wYWdlcy9tYW51ZmFjdHVyZXIvbWFudWZhY3R1cmVyX2FkZHJlc3NfZm9ybS5qcyIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5cbmNvbnN0ICQgPSB3aW5kb3cuJDtcblxuLyoqXG4gKiBEaXNwbGF5cywgZmlsbHMgb3IgaGlkZXMgU3RhdGUgc2VsZWN0aW9uIGJsb2NrIGRlcGVuZGluZyBvbiBzZWxlY3RlZCBjb3VudHJ5LlxuICpcbiAqIFVzYWdlOlxuICpcbiAqIDwhLS0gQ291bnRyeSBzZWxlY3QgbXVzdCBoYXZlIHVuaXF1ZSBpZGVudGlmaWVyICYgdXJsIGZvciBzdGF0ZXMgQVBJIC0tPlxuICogPHNlbGVjdCBuYW1lPVwiaWRfY291bnRyeVwiIGlkPVwiaWRfY291bnRyeVwiIHN0YXRlcy11cmw9XCJwYXRoL3RvL3N0YXRlcy9hcGlcIj5cbiAqICAgLi4uXG4gKiA8L3NlbGVjdD5cbiAqXG4gKiA8IS0tIElmIHNlbGVjdGVkIGNvdW50cnkgZG9lcyBub3QgaGF2ZSBzdGF0ZXMsIHRoZW4gdGhpcyBibG9jayB3aWxsIGJlIGhpZGRlbiAtLT5cbiAqIDxkaXYgY2xhc3M9XCJqcy1zdGF0ZS1zZWxlY3Rpb24tYmxvY2tcIj5cbiAqICAgPHNlbGVjdCBuYW1lPVwiaWRfc3RhdGVcIj5cbiAqICAgICAuLi5cbiAqICAgPC9zZWxlY3Q+XG4gKiA8L2Rpdj5cbiAqXG4gKiBJbiBKUzpcbiAqXG4gKiBuZXcgQ291bnRyeVN0YXRlU2VsZWN0aW9uVG9nZ2xlcignI2lkX2NvdW50cnknLCAnI2lkX3N0YXRlJywgJy5qcy1zdGF0ZS1zZWxlY3Rpb24tYmxvY2snKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRyeVN0YXRlU2VsZWN0aW9uVG9nZ2xlciB7XG4gIGNvbnN0cnVjdG9yKGNvdW50cnlJbnB1dFNlbGVjdG9yLCBjb3VudHJ5U3RhdGVTZWxlY3Rvciwgc3RhdGVTZWxlY3Rpb25CbG9ja1NlbGVjdG9yKSB7XG4gICAgdGhpcy4kc3RhdGVTZWxlY3Rpb25CbG9jayA9ICQoc3RhdGVTZWxlY3Rpb25CbG9ja1NlbGVjdG9yKTtcbiAgICB0aGlzLiRjb3VudHJ5U3RhdGVTZWxlY3RvciA9ICQoY291bnRyeVN0YXRlU2VsZWN0b3IpO1xuICAgIHRoaXMuJGNvdW50cnlJbnB1dCA9ICQoY291bnRyeUlucHV0U2VsZWN0b3IpO1xuXG4gICAgdGhpcy4kY291bnRyeUlucHV0Lm9uKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLl90b2dnbGUoKSk7XG5cbiAgICAvLyB0b2dnbGUgb24gcGFnZSBsb2FkXG4gICAgdGhpcy5fdG9nZ2xlKHRydWUpO1xuXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgU3RhdGUgc2VsZWN0aW9uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdG9nZ2xlKGlzRmlyc3RUb2dnbGUgPSBmYWxzZSkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IHRoaXMuJGNvdW50cnlJbnB1dC5kYXRhKCdzdGF0ZXMtdXJsJyksXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWRfY291bnRyeTogdGhpcy4kY291bnRyeUlucHV0LnZhbCgpLFxuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLiRzdGF0ZVNlbGVjdGlvbkJsb2NrLmZhZGVPdXQoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJHN0YXRlU2VsZWN0aW9uQmxvY2suZmFkZUluKCk7XG5cbiAgICAgIGlmIChpc0ZpcnN0VG9nZ2xlID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLiRjb3VudHJ5U3RhdGVTZWxlY3Rvci5lbXB0eSgpO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAkLmVhY2gocmVzcG9uc2Uuc3RhdGVzLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgX3RoaXMuJGNvdW50cnlTdGF0ZVNlbGVjdG9yLmFwcGVuZCgkKCc8b3B0aW9uPjwvb3B0aW9uPicpLmF0dHIoJ3ZhbHVlJywgdmFsdWUpLnRleHQoaW5kZXgpKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2UucmVzcG9uc2VKU09OICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzaG93RXJyb3JNZXNzYWdlKHJlc3BvbnNlLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY29tcG9uZW50cy9jb3VudHJ5LXN0YXRlLXNlbGVjdGlvbi10b2dnbGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==