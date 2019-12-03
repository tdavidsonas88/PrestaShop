window["cldr"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 319);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
/**
 * These placeholders are used in CLDR number formatting templates.
 * They are meant to be replaced by the correct localized symbols in the number formatting process.
 */


var _numberSymbol = __webpack_require__(69);

var _numberSymbol2 = _interopRequireDefault(_numberSymbol);

var _price = __webpack_require__(97);

var _price2 = _interopRequireDefault(_price);

var _number = __webpack_require__(70);

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var escapeRE = __webpack_require__(457);

var CURRENCY_SYMBOL_PLACEHOLDER = '¤';
var DECIMAL_SEPARATOR_PLACEHOLDER = '.';
var GROUP_SEPARATOR_PLACEHOLDER = ',';
var MINUS_SIGN_PLACEHOLDER = '-';
var PERCENT_SYMBOL_PLACEHOLDER = '%';
var PLUS_SIGN_PLACEHOLDER = '+';

var NumberFormatter = function () {
  /**
   * @param NumberSpecification specification Number specification to be used
   *   (can be a number spec, a price spec, a percentage spec)
   */
  function NumberFormatter(specification) {
    _classCallCheck(this, NumberFormatter);

    this.numberSpecification = specification;
  }

  /**
   * Formats the passed number according to specifications.
   *
   * @param int|float|string number The number to format
   * @param NumberSpecification specification Number specification to be used
   *   (can be a number spec, a price spec, a percentage spec)
   *
   * @return string The formatted number
   *                You should use this this value for display, without modifying it
   */


  _createClass(NumberFormatter, [{
    key: 'format',
    value: function format(number, specification) {
      if (specification !== undefined) {
        this.numberSpecification = specification;
      }

      /*
       * We need to work on the absolute value first.
       * Then the CLDR pattern will add the sign if relevant (at the end).
       */
      var num = Math.abs(number).toFixed(this.numberSpecification.getMaxFractionDigits());

      var _extractMajorMinorDig = this.extractMajorMinorDigits(num),
          _extractMajorMinorDig2 = _slicedToArray(_extractMajorMinorDig, 2),
          majorDigits = _extractMajorMinorDig2[0],
          minorDigits = _extractMajorMinorDig2[1];

      majorDigits = this.splitMajorGroups(majorDigits);
      minorDigits = this.adjustMinorDigitsZeroes(minorDigits);

      // Assemble the final number
      var formattedNumber = majorDigits;
      if (minorDigits) {
        formattedNumber += DECIMAL_SEPARATOR_PLACEHOLDER + minorDigits;
      }

      // Get the good CLDR formatting pattern. Sign is important here !
      var pattern = this.getCldrPattern(majorDigits < 0);
      formattedNumber = this.addPlaceholders(formattedNumber, pattern);
      formattedNumber = this.replaceSymbols(formattedNumber);

      formattedNumber = this.performSpecificReplacements(formattedNumber);

      return formattedNumber;
    }

    /**
     * Get number's major and minor digits.
     *
     * Major digits are the "integer" part (before decimal separator),
     * minor digits are the fractional part
     * Result will be an array of exactly 2 items: [majorDigits, minorDigits]
     *
     * Usage example:
     *  list(majorDigits, minorDigits) = this.getMajorMinorDigits(decimalNumber);
     *
     * @param DecimalNumber number
     *
     * @return string[]
     */

  }, {
    key: 'extractMajorMinorDigits',
    value: function extractMajorMinorDigits(number) {
      // Get the number's major and minor digits.
      var result = number.toString().split('.');
      var majorDigits = result[0];
      var minorDigits = result[1] === undefined ? '' : result[1];
      return [majorDigits, minorDigits];
    }

    /**
     * Splits major digits into groups.
     *
     * e.g.: Given the major digits "1234567", and major group size
     *  configured to 3 digits, the result would be "1 234 567"
     *
     * @param string majorDigits The major digits to be grouped
     *
     * @return string The grouped major digits
     */

  }, {
    key: 'splitMajorGroups',
    value: function splitMajorGroups(digit) {
      if (!this.numberSpecification.isGroupingUsed()) {
        return digit;
      }

      // Reverse the major digits, since they are grouped from the right.
      var majorDigits = digit.split('').reverse();

      // Group the major digits.
      var groups = [];
      groups.push(majorDigits.splice(0, this.numberSpecification.getPrimaryGroupSize()));
      while (majorDigits.length) {
        groups.push(majorDigits.splice(0, this.numberSpecification.getSecondaryGroupSize()));
      }

      // Reverse back the digits and the groups
      groups = groups.reverse();
      var newGroups = [];
      groups.forEach(function (group) {
        newGroups.push(group.reverse().join(''));
      });

      // Reconstruct the major digits.
      return newGroups.join(GROUP_SEPARATOR_PLACEHOLDER);
    }

    /**
     * Adds or remove trailing zeroes, depending on specified min and max fraction digits numbers.
     *
     * @param string minorDigits Digits to be adjusted with (trimmed or padded) zeroes
     *
     * @return string The adjusted minor digits
     */

  }, {
    key: 'adjustMinorDigitsZeroes',
    value: function adjustMinorDigitsZeroes(minorDigits) {
      var digit = minorDigits;
      if (digit.length > this.numberSpecification.getMaxFractionDigits()) {
        // Strip any trailing zeroes.
        digit = digit.replace(/0+$/, '');
      }

      if (digit.length < this.numberSpecification.getMinFractionDigits()) {
        // Re-add needed zeroes
        digit = digit.padEnd(this.numberSpecification.getMinFractionDigits(), '0');
      }

      return digit;
    }

    /**
     * Get the CLDR formatting pattern.
     *
     * @see http://cldr.unicode.org/translation/number-patterns
     *
     * @param bool isNegative If true, the negative pattern
     * will be returned instead of the positive one
     *
     * @return string The CLDR formatting pattern
     */

  }, {
    key: 'getCldrPattern',
    value: function getCldrPattern(isNegative) {
      if (isNegative) {
        return this.numberSpecification.getNegativePattern();
      }

      return this.numberSpecification.getPositivePattern();
    }

    /**
     * Replace placeholder number symbols with relevant numbering system's symbols.
     *
     * @param string number
     *                       The number to process
     *
     * @return string
     *                The number with replaced symbols
     */

  }, {
    key: 'replaceSymbols',
    value: function replaceSymbols(number) {
      var symbols = this.numberSpecification.getSymbol();

      var map = {};
      map[DECIMAL_SEPARATOR_PLACEHOLDER] = symbols.getDecimal();
      map[GROUP_SEPARATOR_PLACEHOLDER] = symbols.getGroup();
      map[MINUS_SIGN_PLACEHOLDER] = symbols.getMinusSign();
      map[PERCENT_SYMBOL_PLACEHOLDER] = symbols.getPercentSign();
      map[PLUS_SIGN_PLACEHOLDER] = symbols.getPlusSign();

      return this.strtr(number, map);
    }

    /**
     * strtr() for JavaScript
     * Translate characters or replace substrings
     *
     * @param str
     *  String to parse
     * @param pairs
     *  Hash of ('from' => 'to', ...).
     *
     * @return string
     */

  }, {
    key: 'strtr',
    value: function strtr(str, pairs) {
      var substrs = Object.keys(pairs).map(escapeRE);
      return str.split(RegExp('(' + substrs.join('|') + ')')).map(function (part) {
        return pairs[part] || part;
      }).join('');
    }

    /**
     * Add missing placeholders to the number using the passed CLDR pattern.
     *
     * Missing placeholders can be the percent sign, currency symbol, etc.
     *
     * e.g. with a currency CLDR pattern:
     *  - Passed number (partially formatted): 1,234.567
     *  - Returned number: 1,234.567 ¤
     *  ("¤" symbol is the currency symbol placeholder)
     *
     * @see http://cldr.unicode.org/translation/number-patterns
     *
     * @param formattedNumber
     *  Number to process
     * @param pattern
     *  CLDR formatting pattern to use
     *
     * @return string
     */

  }, {
    key: 'addPlaceholders',
    value: function addPlaceholders(formattedNumber, pattern) {
      /*
       * Regex groups explanation:
       * #          : literal "#" character. Once.
       * (,#+)*     : any other "#" characters group, separated by ",". Zero to infinity times.
       * 0          : literal "0" character. Once.
       * (\.[0#]+)* : any combination of "0" and "#" characters groups, separated by '.'.
       *              Zero to infinity times.
       */
      return pattern.replace(/#?(,#+)*0(\.[0#]+)*/, formattedNumber);
    }

    /**
     * Perform some more specific replacements.
     *
     * Specific replacements are needed when number specification is extended.
     * For instance, prices have an extended number specification in order to
     * add currency symbol to the formatted number.
     *
     * @param string formattedNumber
     *
     * @return mixed
     */

  }, {
    key: 'performSpecificReplacements',
    value: function performSpecificReplacements(formattedNumber) {
      if (this.numberSpecification instanceof _price2.default) {
        return formattedNumber.split(CURRENCY_SYMBOL_PLACEHOLDER).join(this.numberSpecification.getCurrencySymbol());
      }

      return formattedNumber;
    }
  }], [{
    key: 'build',
    value: function build(specifications) {
      var symbol = new (Function.prototype.bind.apply(_numberSymbol2.default, [null].concat(_toConsumableArray(specifications.symbol))))();
      var specification = void 0;
      if (specifications.currencySymbol) {
        specification = new _price2.default(specifications.positivePattern, specifications.negativePattern, symbol, parseInt(specifications.maxFractionDigits, 10), parseInt(specifications.minFractionDigits, 10), specifications.groupingUsed, specifications.primaryGroupSize, specifications.secondaryGroupSize, specifications.currencySymbol, specifications.currencyCode);
      } else {
        specification = new _number2.default(specifications.positivePattern, specifications.negativePattern, symbol, parseInt(specifications.maxFractionDigits, 10), parseInt(specifications.minFractionDigits, 10), specifications.groupingUsed, specifications.primaryGroupSize, specifications.secondaryGroupSize);
      }

      return new NumberFormatter(specification);
    }
  }]);

  return NumberFormatter;
}();

exports.default = NumberFormatter;

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberSymbol = exports.NumberFormatter = exports.NumberSpecification = exports.PriceSpecification = undefined;

var _numberFormatter = __webpack_require__(237);

var _numberFormatter2 = _interopRequireDefault(_numberFormatter);

var _numberSymbol = __webpack_require__(69);

var _numberSymbol2 = _interopRequireDefault(_numberSymbol);

var _price = __webpack_require__(97);

var _price2 = _interopRequireDefault(_price);

var _number = __webpack_require__(70);

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
exports.PriceSpecification = _price2.default;
exports.NumberSpecification = _number2.default;
exports.NumberFormatter = _numberFormatter2.default;
exports.NumberSymbol = _numberSymbol2.default;

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

module.exports = escapeRegExp;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 69:
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


var _localization = __webpack_require__(73);

var _localization2 = _interopRequireDefault(_localization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NumberSymbol = function () {
  /**
   * NumberSymbolList constructor.
   *
   * @param string decimal Decimal separator character
   * @param string group Digits group separator character
   * @param string list List elements separator character
   * @param string percentSign Percent sign character
   * @param string minusSign Minus sign character
   * @param string plusSign Plus sign character
   * @param string exponential Exponential character
   * @param string superscriptingExponent Superscripting exponent character
   * @param string perMille Permille sign character
   * @param string infinity The infinity sign. Corresponds to the IEEE infinity bit pattern.
   * @param string nan The NaN (Not A Number) sign. Corresponds to the IEEE NaN bit pattern.
   *
   * @throws LocalizationException
   */
  function NumberSymbol(decimal, group, list, percentSign, minusSign, plusSign, exponential, superscriptingExponent, perMille, infinity, nan) {
    _classCallCheck(this, NumberSymbol);

    this.decimal = decimal;
    this.group = group;
    this.list = list;
    this.percentSign = percentSign;
    this.minusSign = minusSign;
    this.plusSign = plusSign;
    this.exponential = exponential;
    this.superscriptingExponent = superscriptingExponent;
    this.perMille = perMille;
    this.infinity = infinity;
    this.nan = nan;

    this.validateData();
  }

  /**
   * Get the decimal separator.
   *
   * @return string
   */


  _createClass(NumberSymbol, [{
    key: 'getDecimal',
    value: function getDecimal() {
      return this.decimal;
    }

    /**
     * Get the digit groups separator.
     *
     * @return string
     */

  }, {
    key: 'getGroup',
    value: function getGroup() {
      return this.group;
    }

    /**
     * Get the list elements separator.
     *
     * @return string
     */

  }, {
    key: 'getList',
    value: function getList() {
      return this.list;
    }

    /**
     * Get the percent sign.
     *
     * @return string
     */

  }, {
    key: 'getPercentSign',
    value: function getPercentSign() {
      return this.percentSign;
    }

    /**
     * Get the minus sign.
     *
     * @return string
     */

  }, {
    key: 'getMinusSign',
    value: function getMinusSign() {
      return this.minusSign;
    }

    /**
     * Get the plus sign.
     *
     * @return string
     */

  }, {
    key: 'getPlusSign',
    value: function getPlusSign() {
      return this.plusSign;
    }

    /**
     * Get the exponential character.
     *
     * @return string
     */

  }, {
    key: 'getExponential',
    value: function getExponential() {
      return this.exponential;
    }

    /**
     * Get the exponent character.
     *
     * @return string
     */

  }, {
    key: 'getSuperscriptingExponent',
    value: function getSuperscriptingExponent() {
      return this.superscriptingExponent;
    }

    /**
     * Gert the per mille symbol (often "‰").
     *
     * @see https://en.wikipedia.org/wiki/Per_mille
     *
     * @return string
     */

  }, {
    key: 'getPerMille',
    value: function getPerMille() {
      return this.perMille;
    }

    /**
     * Get the infinity symbol (often "∞").
     *
     * @see https://en.wikipedia.org/wiki/Infinity_symbol
     *
     * @return string
     */

  }, {
    key: 'getInfinity',
    value: function getInfinity() {
      return this.infinity;
    }

    /**
     * Get the NaN (not a number) sign.
     *
     * @return string
     */

  }, {
    key: 'getNan',
    value: function getNan() {
      return this.nan;
    }

    /**
     * Symbols list validation.
     *
     * @throws LocalizationException
     */

  }, {
    key: 'validateData',
    value: function validateData() {
      if (!this.decimal || typeof this.decimal !== 'string') {
        throw new _localization2.default('Invalid decimal');
      }

      if (!this.group || typeof this.group !== 'string') {
        throw new _localization2.default('Invalid group');
      }

      if (!this.list || typeof this.list !== 'string') {
        throw new _localization2.default('Invalid symbol list');
      }

      if (!this.percentSign || typeof this.percentSign !== 'string') {
        throw new _localization2.default('Invalid percentSign');
      }

      if (!this.minusSign || typeof this.minusSign !== 'string') {
        throw new _localization2.default('Invalid minusSign');
      }

      if (!this.plusSign || typeof this.plusSign !== 'string') {
        throw new _localization2.default('Invalid plusSign');
      }

      if (!this.exponential || typeof this.exponential !== 'string') {
        throw new _localization2.default('Invalid exponential');
      }

      if (!this.superscriptingExponent || typeof this.superscriptingExponent !== 'string') {
        throw new _localization2.default('Invalid superscriptingExponent');
      }

      if (!this.perMille || typeof this.perMille !== 'string') {
        throw new _localization2.default('Invalid perMille');
      }

      if (!this.infinity || typeof this.infinity !== 'string') {
        throw new _localization2.default('Invalid infinity');
      }

      if (!this.nan || typeof this.nan !== 'string') {
        throw new _localization2.default('Invalid nan');
      }
    }
  }]);

  return NumberSymbol;
}();

exports.default = NumberSymbol;

/***/ }),

/***/ 70:
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


var _localization = __webpack_require__(73);

var _localization2 = _interopRequireDefault(_localization);

var _numberSymbol = __webpack_require__(69);

var _numberSymbol2 = _interopRequireDefault(_numberSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NumberSpecification = function () {
  /**
   * Number specification constructor.
   *
   * @param string positivePattern CLDR formatting pattern for positive amounts
   * @param string negativePattern CLDR formatting pattern for negative amounts
   * @param NumberSymbol symbol Number symbol
   * @param int maxFractionDigits Maximum number of digits after decimal separator
   * @param int minFractionDigits Minimum number of digits after decimal separator
   * @param bool groupingUsed Is digits grouping used ?
   * @param int primaryGroupSize Size of primary digits group in the number
   * @param int secondaryGroupSize Size of secondary digits group in the number
   *
   * @throws LocalizationException
   */
  function NumberSpecification(positivePattern, negativePattern, symbol, maxFractionDigits, minFractionDigits, groupingUsed, primaryGroupSize, secondaryGroupSize) {
    _classCallCheck(this, NumberSpecification);

    this.positivePattern = positivePattern;
    this.negativePattern = negativePattern;
    this.symbol = symbol;

    this.maxFractionDigits = maxFractionDigits;
    // eslint-disable-next-line
    this.minFractionDigits = maxFractionDigits < minFractionDigits ? maxFractionDigits : minFractionDigits;

    this.groupingUsed = groupingUsed;
    this.primaryGroupSize = primaryGroupSize;
    this.secondaryGroupSize = secondaryGroupSize;

    if (!this.positivePattern || typeof this.positivePattern !== 'string') {
      throw new _localization2.default('Invalid positivePattern');
    }

    if (!this.negativePattern || typeof this.negativePattern !== 'string') {
      throw new _localization2.default('Invalid negativePattern');
    }

    if (!this.symbol || !(this.symbol instanceof _numberSymbol2.default)) {
      throw new _localization2.default('Invalid symbol');
    }

    if (typeof this.maxFractionDigits !== 'number') {
      throw new _localization2.default('Invalid maxFractionDigits');
    }

    if (typeof this.minFractionDigits !== 'number') {
      throw new _localization2.default('Invalid minFractionDigits');
    }

    if (typeof this.groupingUsed !== 'boolean') {
      throw new _localization2.default('Invalid groupingUsed');
    }

    if (typeof this.primaryGroupSize !== 'number') {
      throw new _localization2.default('Invalid primaryGroupSize');
    }

    if (typeof this.secondaryGroupSize !== 'number') {
      throw new _localization2.default('Invalid secondaryGroupSize');
    }
  }

  /**
   * Get symbol.
   *
   * @return NumberSymbol
   */


  _createClass(NumberSpecification, [{
    key: 'getSymbol',
    value: function getSymbol() {
      return this.symbol;
    }

    /**
     * Get the formatting rules for this number (when positive).
     *
     * This pattern uses the Unicode CLDR number pattern syntax
     *
     * @return string
     */

  }, {
    key: 'getPositivePattern',
    value: function getPositivePattern() {
      return this.positivePattern;
    }

    /**
     * Get the formatting rules for this number (when negative).
     *
     * This pattern uses the Unicode CLDR number pattern syntax
     *
     * @return string
     */

  }, {
    key: 'getNegativePattern',
    value: function getNegativePattern() {
      return this.negativePattern;
    }

    /**
     * Get the maximum number of digits after decimal separator (rounding if needed).
     *
     * @return int
     */

  }, {
    key: 'getMaxFractionDigits',
    value: function getMaxFractionDigits() {
      return this.maxFractionDigits;
    }

    /**
     * Get the minimum number of digits after decimal separator (fill with "0" if needed).
     *
     * @return int
     */

  }, {
    key: 'getMinFractionDigits',
    value: function getMinFractionDigits() {
      return this.minFractionDigits;
    }

    /**
     * Get the "grouping" flag. This flag defines if digits
     * grouping should be used when formatting this number.
     *
     * @return bool
     */

  }, {
    key: 'isGroupingUsed',
    value: function isGroupingUsed() {
      return this.groupingUsed;
    }

    /**
     * Get the size of primary digits group in the number.
     *
     * @return int
     */

  }, {
    key: 'getPrimaryGroupSize',
    value: function getPrimaryGroupSize() {
      return this.primaryGroupSize;
    }

    /**
     * Get the size of secondary digits groups in the number.
     *
     * @return int
     */

  }, {
    key: 'getSecondaryGroupSize',
    value: function getSecondaryGroupSize() {
      return this.secondaryGroupSize;
    }
  }]);

  return NumberSpecification;
}();

exports.default = NumberSpecification;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
var LocalizationException = function LocalizationException(message) {
  _classCallCheck(this, LocalizationException);

  this.message = message;
  this.name = 'LocalizationException';
};

exports.default = LocalizationException;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _localization = __webpack_require__(73);

var _localization2 = _interopRequireDefault(_localization);

var _number = __webpack_require__(70);

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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
 * Currency display option: symbol notation.
 */
var CURRENCY_DISPLAY_SYMBOL = 'symbol';

var PriceSpecification = function (_NumberSpecification) {
  _inherits(PriceSpecification, _NumberSpecification);

  /**
   * Price specification constructor.
   *
   * @param string positivePattern CLDR formatting pattern for positive amounts
   * @param string negativePattern CLDR formatting pattern for negative amounts
   * @param NumberSymbol symbol Number symbol
   * @param int maxFractionDigits Maximum number of digits after decimal separator
   * @param int minFractionDigits Minimum number of digits after decimal separator
   * @param bool groupingUsed Is digits grouping used ?
   * @param int primaryGroupSize Size of primary digits group in the number
   * @param int secondaryGroupSize Size of secondary digits group in the number
   * @param string currencySymbol Currency symbol of this price (eg. : €)
   * @param currencyCode Currency code of this price (e.g.: EUR)
   *
   * @throws LocalizationException
   */
  function PriceSpecification(positivePattern, negativePattern, symbol, maxFractionDigits, minFractionDigits, groupingUsed, primaryGroupSize, secondaryGroupSize, currencySymbol, currencyCode) {
    _classCallCheck(this, PriceSpecification);

    var _this = _possibleConstructorReturn(this, (PriceSpecification.__proto__ || Object.getPrototypeOf(PriceSpecification)).call(this, positivePattern, negativePattern, symbol, maxFractionDigits, minFractionDigits, groupingUsed, primaryGroupSize, secondaryGroupSize));

    _this.currencySymbol = currencySymbol;
    _this.currencyCode = currencyCode;

    if (!_this.currencySymbol || typeof _this.currencySymbol !== 'string') {
      throw new _localization2.default('Invalid currencySymbol');
    }

    if (!_this.currencyCode || typeof _this.currencyCode !== 'string') {
      throw new _localization2.default('Invalid currencyCode');
    }
    return _this;
  }

  /**
   * Get type of display for currency symbol.
   *
   * @return string
   */


  _createClass(PriceSpecification, [{
    key: 'getCurrencySymbol',


    /**
     * Get the currency symbol
     * e.g.: €.
     *
     * @return string
     */
    value: function getCurrencySymbol() {
      return this.currencySymbol;
    }

    /**
     * Get the currency ISO code
     * e.g.: EUR.
     *
     * @return string
     */

  }, {
    key: 'getCurrencyCode',
    value: function getCurrencyCode() {
      return this.currencyCode;
    }
  }], [{
    key: 'getCurrencyDisplay',
    value: function getCurrencyDisplay() {
      return CURRENCY_DISPLAY_SYMBOL;
    }
  }]);

  return PriceSpecification;
}(_number2.default);

exports.default = PriceSpecification;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDM1OThmODA5NTYyZTVhMmYxMDI/NWI0MioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/MzY5OCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwL2NsZHIvbnVtYmVyLWZvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAvY2xkci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC5lc2NhcGVyZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwL2NsZHIvbnVtYmVyLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAvY2xkci9zcGVjaWZpY2F0aW9ucy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwL2NsZHIvZXhjZXB0aW9uL2xvY2FsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAvY2xkci9zcGVjaWZpY2F0aW9ucy9wcmljZS5qcyJdLCJuYW1lcyI6WyJlc2NhcGVSRSIsInJlcXVpcmUiLCJDVVJSRU5DWV9TWU1CT0xfUExBQ0VIT0xERVIiLCJERUNJTUFMX1NFUEFSQVRPUl9QTEFDRUhPTERFUiIsIkdST1VQX1NFUEFSQVRPUl9QTEFDRUhPTERFUiIsIk1JTlVTX1NJR05fUExBQ0VIT0xERVIiLCJQRVJDRU5UX1NZTUJPTF9QTEFDRUhPTERFUiIsIlBMVVNfU0lHTl9QTEFDRUhPTERFUiIsIk51bWJlckZvcm1hdHRlciIsInNwZWNpZmljYXRpb24iLCJudW1iZXJTcGVjaWZpY2F0aW9uIiwibnVtYmVyIiwidW5kZWZpbmVkIiwibnVtIiwiTWF0aCIsImFicyIsInRvRml4ZWQiLCJnZXRNYXhGcmFjdGlvbkRpZ2l0cyIsImV4dHJhY3RNYWpvck1pbm9yRGlnaXRzIiwibWFqb3JEaWdpdHMiLCJtaW5vckRpZ2l0cyIsInNwbGl0TWFqb3JHcm91cHMiLCJhZGp1c3RNaW5vckRpZ2l0c1plcm9lcyIsImZvcm1hdHRlZE51bWJlciIsInBhdHRlcm4iLCJnZXRDbGRyUGF0dGVybiIsImFkZFBsYWNlaG9sZGVycyIsInJlcGxhY2VTeW1ib2xzIiwicGVyZm9ybVNwZWNpZmljUmVwbGFjZW1lbnRzIiwicmVzdWx0IiwidG9TdHJpbmciLCJzcGxpdCIsImRpZ2l0IiwiaXNHcm91cGluZ1VzZWQiLCJyZXZlcnNlIiwiZ3JvdXBzIiwicHVzaCIsInNwbGljZSIsImdldFByaW1hcnlHcm91cFNpemUiLCJsZW5ndGgiLCJnZXRTZWNvbmRhcnlHcm91cFNpemUiLCJuZXdHcm91cHMiLCJmb3JFYWNoIiwiZ3JvdXAiLCJqb2luIiwicmVwbGFjZSIsImdldE1pbkZyYWN0aW9uRGlnaXRzIiwicGFkRW5kIiwiaXNOZWdhdGl2ZSIsImdldE5lZ2F0aXZlUGF0dGVybiIsImdldFBvc2l0aXZlUGF0dGVybiIsInN5bWJvbHMiLCJnZXRTeW1ib2wiLCJtYXAiLCJnZXREZWNpbWFsIiwiZ2V0R3JvdXAiLCJnZXRNaW51c1NpZ24iLCJnZXRQZXJjZW50U2lnbiIsImdldFBsdXNTaWduIiwic3RydHIiLCJzdHIiLCJwYWlycyIsInN1YnN0cnMiLCJPYmplY3QiLCJrZXlzIiwiUmVnRXhwIiwicGFydCIsIlByaWNlU3BlY2lmaWNhdGlvbiIsImdldEN1cnJlbmN5U3ltYm9sIiwic3BlY2lmaWNhdGlvbnMiLCJzeW1ib2wiLCJOdW1iZXJTeW1ib2wiLCJjdXJyZW5jeVN5bWJvbCIsInBvc2l0aXZlUGF0dGVybiIsIm5lZ2F0aXZlUGF0dGVybiIsInBhcnNlSW50IiwibWF4RnJhY3Rpb25EaWdpdHMiLCJtaW5GcmFjdGlvbkRpZ2l0cyIsImdyb3VwaW5nVXNlZCIsInByaW1hcnlHcm91cFNpemUiLCJzZWNvbmRhcnlHcm91cFNpemUiLCJjdXJyZW5jeUNvZGUiLCJOdW1iZXJTcGVjaWZpY2F0aW9uIiwiZGVjaW1hbCIsImxpc3QiLCJwZXJjZW50U2lnbiIsIm1pbnVzU2lnbiIsInBsdXNTaWduIiwiZXhwb25lbnRpYWwiLCJzdXBlcnNjcmlwdGluZ0V4cG9uZW50IiwicGVyTWlsbGUiLCJpbmZpbml0eSIsIm5hbiIsInZhbGlkYXRlRGF0YSIsIkxvY2FsaXphdGlvbkV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJuYW1lIiwiQ1VSUkVOQ1lfRElTUExBWV9TWU1CT0wiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7OztxakJDcEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsbUJBQUFDLENBQVEsR0FBUixDQUFqQjs7QUFFQSxJQUFNQyw4QkFBOEIsR0FBcEM7QUFDQSxJQUFNQyxnQ0FBZ0MsR0FBdEM7QUFDQSxJQUFNQyw4QkFBOEIsR0FBcEM7QUFDQSxJQUFNQyx5QkFBeUIsR0FBL0I7QUFDQSxJQUFNQyw2QkFBNkIsR0FBbkM7QUFDQSxJ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QjtBQUMxQixhQUFPZ0IsdUJBQVA7QUFDRDs7OztFQTFEOEJmLGdCOztrQkFpRmxCZixrQiIsImZpbGUiOiJjbGRyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzE5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMzU5OGY4MDk1NjJlNWEyZjEwMiIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzYgMzkgNDggNTEiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuLyoqXG4gKiBUaGVzZSBwbGFjZWhvbGRlcnMgYXJlIHVzZWQgaW4gQ0xEUiBudW1iZXIgZm9ybWF0dGluZyB0ZW1wbGF0ZXMuXG4gKiBUaGV5IGFyZSBtZWFudCB0byBiZSByZXBsYWNlZCBieSB0aGUgY29ycmVjdCBsb2NhbGl6ZWQgc3ltYm9scyBpbiB0aGUgbnVtYmVyIGZvcm1hdHRpbmcgcHJvY2Vzcy5cbiAqL1xuaW1wb3J0IE51bWJlclN5bWJvbCBmcm9tICcuL251bWJlci1zeW1ib2wnO1xuaW1wb3J0IFByaWNlU3BlY2lmaWNhdGlvbiBmcm9tICcuL3NwZWNpZmljYXRpb25zL3ByaWNlJztcbmltcG9ydCBOdW1iZXJTcGVjaWZpY2F0aW9uIGZyb20gJy4vc3BlY2lmaWNhdGlvbnMvbnVtYmVyJztcblxuY29uc3QgZXNjYXBlUkUgPSByZXF1aXJlKCdsb2Rhc2guZXNjYXBlcmVnZXhwJyk7XG5cbmNvbnN0IENVUlJFTkNZX1NZTUJPTF9QTEFDRUhPTERFUiA9ICfCpCc7XG5jb25zdCBERUNJTUFMX1NFUEFSQVRPUl9QTEFDRUhPTERFUiA9ICcuJztcbmNvbnN0IEdST1VQX1NFUEFSQVRPUl9QTEFDRUhPTERFUiA9ICcsJztcbmNvbnN0IE1JTlVTX1NJR05fUExBQ0VIT0xERVIgPSAnLSc7XG5jb25zdCBQRVJDRU5UX1NZTUJPTF9QTEFDRUhPTERFUiA9ICclJztcbmNvbnN0IFBMVVNfU0lHTl9QTEFDRUhPTERFUiA9ICcrJztcblxuY2xhc3MgTnVtYmVyRm9ybWF0dGVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBOdW1iZXJTcGVjaWZpY2F0aW9uIHNwZWNpZmljYXRpb24gTnVtYmVyIHNwZWNpZmljYXRpb24gdG8gYmUgdXNlZFxuICAgKiAgIChjYW4gYmUgYSBudW1iZXIgc3BlYywgYSBwcmljZSBzcGVjLCBhIHBlcmNlbnRhZ2Ugc3BlYylcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNwZWNpZmljYXRpb24pIHtcbiAgICB0aGlzLm51bWJlclNwZWNpZmljYXRpb24gPSBzcGVjaWZpY2F0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgdGhlIHBhc3NlZCBudW1iZXIgYWNjb3JkaW5nIHRvIHNwZWNpZmljYXRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0gaW50fGZsb2F0fHN0cmluZyBudW1iZXIgVGhlIG51bWJlciB0byBmb3JtYXRcbiAgICogQHBhcmFtIE51bWJlclNwZWNpZmljYXRpb24gc3BlY2lmaWNhdGlvbiBOdW1iZXIgc3BlY2lmaWNhdGlvbiB0byBiZSB1c2VkXG4gICAqICAgKGNhbiBiZSBhIG51bWJlciBzcGVjLCBhIHByaWNlIHNwZWMsIGEgcGVyY2VudGFnZSBzcGVjKVxuICAgKlxuICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgZm9ybWF0dGVkIG51bWJlclxuICAgKiAgICAgICAgICAgICAgICBZb3Ugc2hvdWxkIHVzZSB0aGlzIHRoaXMgdmFsdWUgZm9yIGRpc3BsYXksIHdpdGhvdXQgbW9kaWZ5aW5nIGl0XG4gICAqL1xuICBmb3JtYXQobnVtYmVyLCBzcGVjaWZpY2F0aW9uKSB7XG4gICAgaWYgKHNwZWNpZmljYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5udW1iZXJTcGVjaWZpY2F0aW9uID0gc3BlY2lmaWNhdGlvbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFdlIG5lZWQgdG8gd29yayBvbiB0aGUgYWJzb2x1dGUgdmFsdWUgZmlyc3QuXG4gICAgICogVGhlbiB0aGUgQ0xEUiBwYXR0ZXJuIHdpbGwgYWRkIHRoZSBzaWduIGlmIHJlbGV2YW50IChhdCB0aGUgZW5kKS5cbiAgICAgKi9cbiAgICBjb25zdCBudW0gPSBNYXRoLmFicyhudW1iZXIpLnRvRml4ZWQodGhpcy5udW1iZXJTcGVjaWZpY2F0aW9uLmdldE1heEZyYWN0aW9uRGlnaXRzKCkpO1xuXG4gICAgbGV0IFttYWpvckRpZ2l0cywgbWlub3JEaWdpdHNdID0gdGhpcy5leHRyYWN0TWFqb3JNaW5vckRpZ2l0cyhudW0pO1xuICAgIG1ham9yRGlnaXRzID0gdGhpcy5zcGxpdE1ham9yR3JvdXBzKG1ham9yRGlnaXRzKTtcbiAgICBtaW5vckRpZ2l0cyA9IHRoaXMuYWRqdXN0TWlub3JEaWdpdHNaZXJvZXMobWlub3JEaWdpdHMpO1xuXG4gICAgLy8gQXNzZW1ibGUgdGhlIGZpbmFsIG51bWJlclxuICAgIGxldCBmb3JtYXR0ZWROdW1iZXIgPSBtYWpvckRpZ2l0cztcbiAgICBpZiAobWlub3JEaWdpdHMpIHtcbiAgICAgIGZvcm1hdHRlZE51bWJlciArPSBERUNJTUFMX1NFUEFSQVRPUl9QTEFDRUhPTERFUiArIG1pbm9yRGlnaXRzO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgZ29vZCBDTERSIGZvcm1hdHRpbmcgcGF0dGVybi4gU2lnbiBpcyBpbXBvcnRhbnQgaGVyZSAhXG4gICAgY29uc3QgcGF0dGVybiA9IHRoaXMuZ2V0Q2xkclBhdHRlcm4obWFqb3JEaWdpdHMgPCAwKTtcbiAgICBmb3JtYXR0ZWROdW1iZXIgPSB0aGlzLmFkZFBsYWNlaG9sZGVycyhmb3JtYXR0ZWROdW1iZXIsIHBhdHRlcm4pO1xuICAgIGZvcm1hdHRlZE51bWJlciA9IHRoaXMucmVwbGFjZVN5bWJvbHMoZm9ybWF0dGVkTnVtYmVyKTtcblxuICAgIGZvcm1hdHRlZE51bWJlciA9IHRoaXMucGVyZm9ybVNwZWNpZmljUmVwbGFjZW1lbnRzKGZvcm1hdHRlZE51bWJlcik7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkTnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBudW1iZXIncyBtYWpvciBhbmQgbWlub3IgZGlnaXRzLlxuICAgKlxuICAgKiBNYWpvciBkaWdpdHMgYXJlIHRoZSBcImludGVnZXJcIiBwYXJ0IChiZWZvcmUgZGVjaW1hbCBzZXBhcmF0b3IpLFxuICAgKiBtaW5vciBkaWdpdHMgYXJlIHRoZSBmcmFjdGlvbmFsIHBhcnRcbiAgICogUmVzdWx0IHdpbGwgYmUgYW4gYXJyYXkgb2YgZXhhY3RseSAyIGl0ZW1zOiBbbWFqb3JEaWdpdHMsIG1pbm9yRGlnaXRzXVxuICAgKlxuICAgKiBVc2FnZSBleGFtcGxlOlxuICAgKiAgbGlzdChtYWpvckRpZ2l0cywgbWlub3JEaWdpdHMpID0gdGhpcy5nZXRNYWpvck1pbm9yRGlnaXRzKGRlY2ltYWxOdW1iZXIpO1xuICAgKlxuICAgKiBAcGFyYW0gRGVjaW1hbE51bWJlciBudW1iZXJcbiAgICpcbiAgICogQHJldHVybiBzdHJpbmdbXVxuICAgKi9cbiAgZXh0cmFjdE1ham9yTWlub3JEaWdpdHMobnVtYmVyKSB7XG4gICAgLy8gR2V0IHRoZSBudW1iZXIncyBtYWpvciBhbmQgbWlub3IgZGlnaXRzLlxuICAgIGNvbnN0IHJlc3VsdCA9IG51bWJlci50b1N0cmluZygpLnNwbGl0KCcuJyk7XG4gICAgY29uc3QgbWFqb3JEaWdpdHMgPSByZXN1bHRbMF07XG4gICAgY29uc3QgbWlub3JEaWdpdHMgPSAocmVzdWx0WzFdID09PSB1bmRlZmluZWQpID8gJycgOiByZXN1bHRbMV07XG4gICAgcmV0dXJuIFttYWpvckRpZ2l0cywgbWlub3JEaWdpdHNdO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0cyBtYWpvciBkaWdpdHMgaW50byBncm91cHMuXG4gICAqXG4gICAqIGUuZy46IEdpdmVuIHRoZSBtYWpvciBkaWdpdHMgXCIxMjM0NTY3XCIsIGFuZCBtYWpvciBncm91cCBzaXplXG4gICAqICBjb25maWd1cmVkIHRvIDMgZGlnaXRzLCB0aGUgcmVzdWx0IHdvdWxkIGJlIFwiMSAyMzQgNTY3XCJcbiAgICpcbiAgICogQHBhcmFtIHN0cmluZyBtYWpvckRpZ2l0cyBUaGUgbWFqb3IgZGlnaXRzIHRvIGJlIGdyb3VwZWRcbiAgICpcbiAgICogQHJldHVybiBzdHJpbmcgVGhlIGdyb3VwZWQgbWFqb3IgZGlnaXRzXG4gICAqL1xuICBzcGxpdE1ham9yR3JvdXBzKGRpZ2l0KSB7XG4gICAgaWYgKCF0aGlzLm51bWJlclNwZWNpZmljYXRpb24uaXNHcm91cGluZ1VzZWQoKSkge1xuICAgICAgcmV0dXJuIGRpZ2l0O1xuICAgIH1cblxuICAgIC8vIFJldmVyc2UgdGhlIG1ham9yIGRpZ2l0cywgc2luY2UgdGhleSBhcmUgZ3JvdXBlZCBmcm9tIHRoZSByaWdodC5cbiAgICBjb25zdCBtYWpvckRpZ2l0cyA9IGRpZ2l0LnNwbGl0KCcnKS5yZXZlcnNlKCk7XG5cbiAgICAvLyBHcm91cCB0aGUgbWFqb3IgZGlnaXRzLlxuICAgIGxldCBncm91cHMgPSBbXTtcbiAgICBncm91cHMucHVzaChtYWpvckRpZ2l0cy5zcGxpY2UoMCwgdGhpcy5udW1iZXJTcGVjaWZpY2F0aW9uLmdldFByaW1hcnlHcm91cFNpemUoKSkpO1xuICAgIHdoaWxlIChtYWpvckRpZ2l0cy5sZW5ndGgpIHtcbiAgICAgIGdyb3Vwcy5wdXNoKG1ham9yRGlnaXRzLnNwbGljZSgwLCB0aGlzLm51bWJlclNwZWNpZmljYXRpb24uZ2V0U2Vjb25kYXJ5R3JvdXBTaXplKCkpKTtcbiAgICB9XG5cbiAgICAvLyBSZXZlcnNlIGJhY2sgdGhlIGRpZ2l0cyBhbmQgdGhlIGdyb3Vwc1xuICAgIGdyb3VwcyA9IGdyb3Vwcy5yZXZlcnNlKCk7XG4gICAgY29uc3QgbmV3R3JvdXBzID0gW107XG4gICAgZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBuZXdHcm91cHMucHVzaChncm91cC5yZXZlcnNlKCkuam9pbignJykpO1xuICAgIH0pO1xuXG4gICAgLy8gUmVjb25zdHJ1Y3QgdGhlIG1ham9yIGRpZ2l0cy5cbiAgICByZXR1cm4gbmV3R3JvdXBzLmpvaW4oR1JPVVBfU0VQQVJBVE9SX1BMQUNFSE9MREVSKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG9yIHJlbW92ZSB0cmFpbGluZyB6ZXJvZXMsIGRlcGVuZGluZyBvbiBzcGVjaWZpZWQgbWluIGFuZCBtYXggZnJhY3Rpb24gZGlnaXRzIG51bWJlcnMuXG4gICAqXG4gICAqIEBwYXJhbSBzdHJpbmcgbWlub3JEaWdpdHMgRGlnaXRzIHRvIGJlIGFkanVzdGVkIHdpdGggKHRyaW1tZWQgb3IgcGFkZGVkKSB6ZXJvZXNcbiAgICpcbiAgICogQHJldHVybiBzdHJpbmcgVGhlIGFkanVzdGVkIG1pbm9yIGRpZ2l0c1xuICAgKi9cbiAgYWRqdXN0TWlub3JEaWdpdHNaZXJvZXMobWlub3JEaWdpdHMpIHtcbiAgICBsZXQgZGlnaXQgPSBtaW5vckRpZ2l0cztcbiAgICBpZiAoZGlnaXQubGVuZ3RoID4gdGhpcy5udW1iZXJTcGVjaWZpY2F0aW9uLmdldE1heEZyYWN0aW9uRGlnaXRzKCkpIHtcbiAgICAgIC8vIFN0cmlwIGFueSB0cmFpbGluZyB6ZXJvZXMuXG4gICAgICBkaWdpdCA9IGRpZ2l0LnJlcGxhY2UoLzArJC8sICcnKTtcbiAgICB9XG5cbiAgICBpZiAoZGlnaXQubGVuZ3RoIDwgdGhpcy5udW1iZXJTcGVjaWZpY2F0aW9uLmdldE1pbkZyYWN0aW9uRGlnaXRzKCkpIHtcbiAgICAgIC8vIFJlLWFkZCBuZWVkZWQgemVyb2VzXG4gICAgICBkaWdpdCA9IGRpZ2l0LnBhZEVuZChcbiAgICAgICAgdGhpcy5udW1iZXJTcGVjaWZpY2F0aW9uLmdldE1pbkZyYWN0aW9uRGlnaXRzKCksXG4gICAgICAgICcwJyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpZ2l0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgQ0xEUiBmb3JtYXR0aW5nIHBhdHRlcm4uXG4gICAqXG4gICAqIEBzZWUgaHR0cDovL2NsZHIudW5pY29kZS5vcmcvdHJhbnNsYXRpb24vbnVtYmVyLXBhdHRlcm5zXG4gICAqXG4gICAqIEBwYXJhbSBib29sIGlzTmVnYXRpdmUgSWYgdHJ1ZSwgdGhlIG5lZ2F0aXZlIHBhdHRlcm5cbiAgICogd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkIG9mIHRoZSBwb3NpdGl2ZSBvbmVcbiAgICpcbiAgICogQHJldHVybiBzdHJpbmcgVGhlIENMRFIgZm9ybWF0dGluZyBwYXR0ZXJuXG4gICAqL1xuICBnZXRDbGRyUGF0dGVybihpc05lZ2F0aXZlKSB7XG4gICAgaWYgKGlzTmVnYXRpdmUpIHtcbiAgICAgIHJldHVybiB0aGlzLm51bWJlclNwZWNpZmljYXRpb24uZ2V0TmVnYXRpdmVQYXR0ZXJuKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubnVtYmVyU3BlY2lmaWNhdGlvbi5nZXRQb3NpdGl2ZVBhdHRlcm4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIHBsYWNlaG9sZGVyIG51bWJlciBzeW1ib2xzIHdpdGggcmVsZXZhbnQgbnVtYmVyaW5nIHN5c3RlbSdzIHN5bWJvbHMuXG4gICAqXG4gICAqIEBwYXJhbSBzdHJpbmcgbnVtYmVyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICBUaGUgbnVtYmVyIHRvIHByb2Nlc3NcbiAgICpcbiAgICogQHJldHVybiBzdHJpbmdcbiAgICogICAgICAgICAgICAgICAgVGhlIG51bWJlciB3aXRoIHJlcGxhY2VkIHN5bWJvbHNcbiAgICovXG4gIHJlcGxhY2VTeW1ib2xzKG51bWJlcikge1xuICAgIGNvbnN0IHN5bWJvbHMgPSB0aGlzLm51bWJlclNwZWNpZmljYXRpb24uZ2V0U3ltYm9sKCk7XG5cbiAgICBjb25zdCBtYXAgPSB7fTtcbiAgICBtYXBbREVDSU1BTF9TRVBBUkFUT1JfUExBQ0VIT0xERVJdID0gc3ltYm9scy5nZXREZWNpbWFsKCk7XG4gICAgbWFwW0dST1VQX1NFUEFSQVRPUl9QTEFDRUhPTERFUl0gPSBzeW1ib2xzLmdldEdyb3VwKCk7XG4gICAgbWFwW01JTlVTX1NJR05fUExBQ0VIT0xERVJdID0gc3ltYm9scy5nZXRNaW51c1NpZ24oKTtcbiAgICBtYXBbUEVSQ0VOVF9TWU1CT0xfUExBQ0VIT0xERVJdID0gc3ltYm9scy5nZXRQZXJjZW50U2lnbigpO1xuICAgIG1hcFtQTFVTX1NJR05fUExBQ0VIT0xERVJdID0gc3ltYm9scy5nZXRQbHVzU2lnbigpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RydHIobnVtYmVyLCBtYXApO1xuICB9XG5cbiAgLyoqXG4gICAqIHN0cnRyKCkgZm9yIEphdmFTY3JpcHRcbiAgICogVHJhbnNsYXRlIGNoYXJhY3RlcnMgb3IgcmVwbGFjZSBzdWJzdHJpbmdzXG4gICAqXG4gICAqIEBwYXJhbSBzdHJcbiAgICogIFN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0gcGFpcnNcbiAgICogIEhhc2ggb2YgKCdmcm9tJyA9PiAndG8nLCAuLi4pLlxuICAgKlxuICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgKi9cbiAgc3RydHIoc3RyLCBwYWlycykge1xuICAgIGNvbnN0IHN1YnN0cnMgPSBPYmplY3Qua2V5cyhwYWlycykubWFwKGVzY2FwZVJFKTtcbiAgICByZXR1cm4gc3RyLnNwbGl0KFJlZ0V4cChgKCR7c3Vic3Rycy5qb2luKCd8Jyl9KWApKVxuICAgICAgICAgICAgICAubWFwKHBhcnQgPT4gcGFpcnNbcGFydF0gfHwgcGFydClcbiAgICAgICAgICAgICAgLmpvaW4oJycpO1xuICB9XG5cblxuICAvKipcbiAgICogQWRkIG1pc3NpbmcgcGxhY2Vob2xkZXJzIHRvIHRoZSBudW1iZXIgdXNpbmcgdGhlIHBhc3NlZCBDTERSIHBhdHRlcm4uXG4gICAqXG4gICAqIE1pc3NpbmcgcGxhY2Vob2xkZXJzIGNhbiBiZSB0aGUgcGVyY2VudCBzaWduLCBjdXJyZW5jeSBzeW1ib2wsIGV0Yy5cbiAgICpcbiAgICogZS5nLiB3aXRoIGEgY3VycmVuY3kgQ0xEUiBwYXR0ZXJuOlxuICAgKiAgLSBQYXNzZWQgbnVtYmVyIChwYXJ0aWFsbHkgZm9ybWF0dGVkKTogMSwyMzQuNTY3XG4gICAqICAtIFJldHVybmVkIG51bWJlcjogMSwyMzQuNTY3IMKkXG4gICAqICAoXCLCpFwiIHN5bWJvbCBpcyB0aGUgY3VycmVuY3kgc3ltYm9sIHBsYWNlaG9sZGVyKVxuICAgKlxuICAgKiBAc2VlIGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL3RyYW5zbGF0aW9uL251bWJlci1wYXR0ZXJuc1xuICAgKlxuICAgKiBAcGFyYW0gZm9ybWF0dGVkTnVtYmVyXG4gICAqICBOdW1iZXIgdG8gcHJvY2Vzc1xuICAgKiBAcGFyYW0gcGF0dGVyblxuICAgKiAgQ0xEUiBmb3JtYXR0aW5nIHBhdHRlcm4gdG8gdXNlXG4gICAqXG4gICAqIEByZXR1cm4gc3RyaW5nXG4gICAqL1xuICBhZGRQbGFjZWhvbGRlcnMoZm9ybWF0dGVkTnVtYmVyLCBwYXR0ZXJuKSB7XG4gICAgLypcbiAgICAgKiBSZWdleCBncm91cHMgZXhwbGFuYXRpb246XG4gICAgICogIyAgICAgICAgICA6IGxpdGVyYWwgXCIjXCIgY2hhcmFjdGVyLiBPbmNlLlxuICAgICAqICgsIyspKiAgICAgOiBhbnkgb3RoZXIgXCIjXCIgY2hhcmFjdGVycyBncm91cCwgc2VwYXJhdGVkIGJ5IFwiLFwiLiBaZXJvIHRvIGluZmluaXR5IHRpbWVzLlxuICAgICAqIDAgICAgICAgICAgOiBsaXRlcmFsIFwiMFwiIGNoYXJhY3Rlci4gT25jZS5cbiAgICAgKiAoXFwuWzAjXSspKiA6IGFueSBjb21iaW5hdGlvbiBvZiBcIjBcIiBhbmQgXCIjXCIgY2hhcmFjdGVycyBncm91cHMsIHNlcGFyYXRlZCBieSAnLicuXG4gICAgICogICAgICAgICAgICAgIFplcm8gdG8gaW5maW5pdHkgdGltZXMuXG4gICAgICovXG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZSgvIz8oLCMrKSowKFxcLlswI10rKSovLCBmb3JtYXR0ZWROdW1iZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gc29tZSBtb3JlIHNwZWNpZmljIHJlcGxhY2VtZW50cy5cbiAgICpcbiAgICogU3BlY2lmaWMgcmVwbGFjZW1lbnRzIGFyZSBuZWVkZWQgd2hlbiBudW1iZXIgc3BlY2lmaWNhdGlvbiBpcyBleHRlbmRlZC5cbiAgICogRm9yIGluc3RhbmNlLCBwcmljZXMgaGF2ZSBhbiBleHRlbmRlZCBudW1iZXIgc3BlY2lmaWNhdGlvbiBpbiBvcmRlciB0b1xuICAgKiBhZGQgY3VycmVuY3kgc3ltYm9sIHRvIHRoZSBmb3JtYXR0ZWQgbnVtYmVyLlxuICAgKlxuICAgKiBAcGFyYW0gc3RyaW5nIGZvcm1hdHRlZE51bWJlclxuICAgKlxuICAgKiBAcmV0dXJuIG1peGVkXG4gICAqL1xuICBwZXJmb3JtU3BlY2lmaWNSZXBsYWNlbWVudHMoZm9ybWF0dGVkTnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubnVtYmVyU3BlY2lmaWNhdGlvbiBpbnN0YW5jZW9mIFByaWNlU3BlY2lmaWNhdGlvbikge1xuICAgICAgcmV0dXJuIGZvcm1hdHRlZE51bWJlclxuICAgICAgICAuc3BsaXQoQ1VSUkVOQ1lfU1lNQk9MX1BMQUNFSE9MREVSKVxuICAgICAgICAuam9pbih0aGlzLm51bWJlclNwZWNpZmljYXRpb24uZ2V0Q3VycmVuY3lTeW1ib2woKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZE51bWJlcjtcbiAgfVxuXG4gIHN0YXRpYyBidWlsZChzcGVjaWZpY2F0aW9ucykge1xuICAgIGNvbnN0IHN5bWJvbCA9IG5ldyBOdW1iZXJTeW1ib2woLi4uc3BlY2lmaWNhdGlvbnMuc3ltYm9sKTtcbiAgICBsZXQgc3BlY2lmaWNhdGlvbjtcbiAgICBpZiAoc3BlY2lmaWNhdGlvbnMuY3VycmVuY3lTeW1ib2wpIHtcbiAgICAgIHNwZWNpZmljYXRpb24gPSBuZXcgUHJpY2VTcGVjaWZpY2F0aW9uKFxuICAgICAgICBzcGVjaWZpY2F0aW9ucy5wb3NpdGl2ZVBhdHRlcm4sXG4gICAgICAgIHNwZWNpZmljYXRpb25zLm5lZ2F0aXZlUGF0dGVybixcbiAgICAgICAgc3ltYm9sLFxuICAgICAgICBwYXJzZUludChzcGVjaWZpY2F0aW9ucy5tYXhGcmFjdGlvbkRpZ2l0cywgMTApLFxuICAgICAgICBwYXJzZUludChzcGVjaWZpY2F0aW9ucy5taW5GcmFjdGlvbkRpZ2l0cywgMTApLFxuICAgICAgICBzcGVjaWZpY2F0aW9ucy5ncm91cGluZ1VzZWQsXG4gICAgICAgIHNwZWNpZmljYXRpb25zLnByaW1hcnlHcm91cFNpemUsXG4gICAgICAgIHNwZWNpZmljYXRpb25zLnNlY29uZGFyeUdyb3VwU2l6ZSxcbiAgICAgICAgc3BlY2lmaWNhdGlvbnMuY3VycmVuY3lTeW1ib2wsXG4gICAgICAgIHNwZWNpZmljYXRpb25zLmN1cnJlbmN5Q29kZSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwZWNpZmljYXRpb24gPSBuZXcgTnVtYmVyU3BlY2lmaWNhdGlvbihcbiAgICAgICAgc3BlY2lmaWNhdGlvbnMucG9zaXRpdmVQYXR0ZXJuLFxuICAgICAgICBzcGVjaWZpY2F0aW9ucy5uZWdhdGl2ZVBhdHRlcm4sXG4gICAgICAgIHN5bWJvbCxcbiAgICAgICAgcGFyc2VJbnQoc3BlY2lmaWNhdGlvbnMubWF4RnJhY3Rpb25EaWdpdHMsIDEwKSxcbiAgICAgICAgcGFyc2VJbnQoc3BlY2lmaWNhdGlvbnMubWluRnJhY3Rpb25EaWdpdHMsIDEwKSxcbiAgICAgICAgc3BlY2lmaWNhdGlvbnMuZ3JvdXBpbmdVc2VkLFxuICAgICAgICBzcGVjaWZpY2F0aW9ucy5wcmltYXJ5R3JvdXBTaXplLFxuICAgICAgICBzcGVjaWZpY2F0aW9ucy5zZWNvbmRhcnlHcm91cFNpemUsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgTnVtYmVyRm9ybWF0dGVyKHNwZWNpZmljYXRpb24pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckZvcm1hdHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC9jbGRyL251bWJlci1mb3JtYXR0ZXIuanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuaW1wb3J0IE51bWJlckZvcm1hdHRlciBmcm9tICcuL251bWJlci1mb3JtYXR0ZXInO1xuaW1wb3J0IE51bWJlclN5bWJvbCBmcm9tICcuL251bWJlci1zeW1ib2wnO1xuaW1wb3J0IFByaWNlU3BlY2lmaWNhdGlvbiBmcm9tICcuL3NwZWNpZmljYXRpb25zL3ByaWNlJztcbmltcG9ydCBOdW1iZXJTcGVjaWZpY2F0aW9uIGZyb20gJy4vc3BlY2lmaWNhdGlvbnMvbnVtYmVyJztcblxuZXhwb3J0IHtcbiAgUHJpY2VTcGVjaWZpY2F0aW9uLFxuICBOdW1iZXJTcGVjaWZpY2F0aW9uLFxuICBOdW1iZXJGb3JtYXR0ZXIsXG4gIE51bWJlclN5bWJvbCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAvY2xkci9pbmRleC5qcyIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csXG4gICAgcmVIYXNSZWdFeHBDaGFyID0gUmVnRXhwKHJlUmVnRXhwQ2hhci5zb3VyY2UpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBFc2NhcGVzIHRoZSBgUmVnRXhwYCBzcGVjaWFsIGNoYXJhY3RlcnMgXCJeXCIsIFwiJFwiLCBcIlxcXCIsIFwiLlwiLCBcIipcIiwgXCIrXCIsXG4gKiBcIj9cIiwgXCIoXCIsIFwiKVwiLCBcIltcIiwgXCJdXCIsIFwie1wiLCBcIn1cIiwgYW5kIFwifFwiIGluIGBzdHJpbmdgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGVzY2FwZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGVzY2FwZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmVzY2FwZVJlZ0V4cCgnW2xvZGFzaF0oaHR0cHM6Ly9sb2Rhc2guY29tLyknKTtcbiAqIC8vID0+ICdcXFtsb2Rhc2hcXF1cXChodHRwczovL2xvZGFzaFxcLmNvbS9cXCknXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHJpbmcpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcmV0dXJuIChzdHJpbmcgJiYgcmVIYXNSZWdFeHBDaGFyLnRlc3Qoc3RyaW5nKSlcbiAgICA/IHN0cmluZy5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gICAgOiBzdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXNjYXBlUmVnRXhwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC5lc2NhcGVyZWdleHAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDM2IiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cbmltcG9ydCBMb2NhbGl6YXRpb25FeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24vbG9jYWxpemF0aW9uJztcblxuY2xhc3MgTnVtYmVyU3ltYm9sIHtcbiAgLyoqXG4gICAqIE51bWJlclN5bWJvbExpc3QgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSBzdHJpbmcgZGVjaW1hbCBEZWNpbWFsIHNlcGFyYXRvciBjaGFyYWN0ZXJcbiAgICogQHBhcmFtIHN0cmluZyBncm91cCBEaWdpdHMgZ3JvdXAgc2VwYXJhdG9yIGNoYXJhY3RlclxuICAgKiBAcGFyYW0gc3RyaW5nIGxpc3QgTGlzdCBlbGVtZW50cyBzZXBhcmF0b3IgY2hhcmFjdGVyXG4gICAqIEBwYXJhbSBzdHJpbmcgcGVyY2VudFNpZ24gUGVyY2VudCBzaWduIGNoYXJhY3RlclxuICAgKiBAcGFyYW0gc3RyaW5nIG1pbnVzU2lnbiBNaW51cyBzaWduIGNoYXJhY3RlclxuICAgKiBAcGFyYW0gc3RyaW5nIHBsdXNTaWduIFBsdXMgc2lnbiBjaGFyYWN0ZXJcbiAgICogQHBhcmFtIHN0cmluZyBleHBvbmVudGlhbCBFeHBvbmVudGlhbCBjaGFyYWN0ZXJcbiAgICogQHBhcmFtIHN0cmluZyBzdXBlcnNjcmlwdGluZ0V4cG9uZW50IFN1cGVyc2NyaXB0aW5nIGV4cG9uZW50IGNoYXJhY3RlclxuICAgKiBAcGFyYW0gc3RyaW5nIHBlck1pbGxlIFBlcm1pbGxlIHNpZ24gY2hhcmFjdGVyXG4gICAqIEBwYXJhbSBzdHJpbmcgaW5maW5pdHkgVGhlIGluZmluaXR5IHNpZ24uIENvcnJlc3BvbmRzIHRvIHRoZSBJRUVFIGluZmluaXR5IGJpdCBwYXR0ZXJuLlxuICAgKiBAcGFyYW0gc3RyaW5nIG5hbiBUaGUgTmFOIChOb3QgQSBOdW1iZXIpIHNpZ24uIENvcnJlc3BvbmRzIHRvIHRoZSBJRUVFIE5hTiBiaXQgcGF0dGVybi5cbiAgICpcbiAgICogQHRocm93cyBMb2NhbGl6YXRpb25FeGNlcHRpb25cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGRlY2ltYWwsXG4gICAgZ3JvdXAsXG4gICAgbGlzdCxcbiAgICBwZXJjZW50U2lnbixcbiAgICBtaW51c1NpZ24sXG4gICAgcGx1c1NpZ24sXG4gICAgZXhwb25lbnRpYWwsXG4gICAgc3VwZXJzY3JpcHRpbmdFeHBvbmVudCxcbiAgICBwZXJNaWxsZSxcbiAgICBpbmZpbml0eSxcbiAgICBuYW4sXG4gICkge1xuICAgIHRoaXMuZGVjaW1hbCA9IGRlY2ltYWw7XG4gICAgdGhpcy5ncm91cCA9IGdyb3VwO1xuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgdGhpcy5wZXJjZW50U2lnbiA9IHBlcmNlbnRTaWduO1xuICAgIHRoaXMubWludXNTaWduID0gbWludXNTaWduO1xuICAgIHRoaXMucGx1c1NpZ24gPSBwbHVzU2lnbjtcbiAgICB0aGlzLmV4cG9uZW50aWFsID0gZXhwb25lbnRpYWw7XG4gICAgdGhpcy5zdXBlcnNjcmlwdGluZ0V4cG9uZW50ID0gc3VwZXJzY3JpcHRpbmdFeHBvbmVudDtcbiAgICB0aGlzLnBlck1pbGxlID0gcGVyTWlsbGU7XG4gICAgdGhpcy5pbmZpbml0eSA9IGluZmluaXR5O1xuICAgIHRoaXMubmFuID0gbmFuO1xuXG4gICAgdGhpcy52YWxpZGF0ZURhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRlY2ltYWwgc2VwYXJhdG9yLlxuICAgKlxuICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgKi9cbiAgZ2V0RGVjaW1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNpbWFsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGlnaXQgZ3JvdXBzIHNlcGFyYXRvci5cbiAgICpcbiAgICogQHJldHVybiBzdHJpbmdcbiAgICovXG4gIGdldEdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLmdyb3VwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGlzdCBlbGVtZW50cyBzZXBhcmF0b3IuXG4gICAqXG4gICAqIEByZXR1cm4gc3RyaW5nXG4gICAqL1xuICBnZXRMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmxpc3Q7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwZXJjZW50IHNpZ24uXG4gICAqXG4gICAqIEByZXR1cm4gc3RyaW5nXG4gICAqL1xuICBnZXRQZXJjZW50U2lnbigpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJjZW50U2lnbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbnVzIHNpZ24uXG4gICAqXG4gICAqIEByZXR1cm4gc3RyaW5nXG4gICAqL1xuICBnZXRNaW51c1NpZ24oKSB7XG4gICAgcmV0dXJuIHRoaXMubWludXNTaWduO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcGx1cyBzaWduLlxuICAgKlxuICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgKi9cbiAgZ2V0UGx1c1NpZ24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGx1c1NpZ247XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBleHBvbmVudGlhbCBjaGFyYWN0ZXIuXG4gICAqXG4gICAqIEByZXR1cm4gc3RyaW5nXG4gICAqL1xuICBnZXRFeHBvbmVudGlhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHBvbmVudGlhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGV4cG9uZW50IGNoYXJhY3Rlci5cbiAgICpcbiAgICogQHJldHVybiBzdHJpbmdcbiAgICovXG4gIGdldFN1cGVyc2NyaXB0aW5nRXhwb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJzY3JpcHRpbmdFeHBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXJ0IHRoZSBwZXIgbWlsbGUgc3ltYm9sIChvZnRlbiBcIuKAsFwiKS5cbiAgICpcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QZXJfbWlsbGVcbiAgICpcbiAgICogQHJldHVybiBzdHJpbmdcbiAgICovXG4gIGdldFBlck1pbGxlKCkge1xuICAgIHJldHVybiB0aGlzLnBlck1pbGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW5maW5pdHkgc3ltYm9sIChvZnRlbiBcIuKInlwiKS5cbiAgICpcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JbmZpbml0eV9zeW1ib2xcbiAgICpcbiAgICogQHJldHVybiBzdHJpbmdcbiAgICovXG4gIGdldEluZmluaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmluZmluaXR5O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgTmFOIChub3QgYSBudW1iZXIpIHNpZ24uXG4gICAqXG4gICAqIEByZXR1cm4gc3RyaW5nXG4gICAqL1xuICBnZXROYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMubmFuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bWJvbHMgbGlzdCB2YWxpZGF0aW9uLlxuICAgKlxuICAgKiBAdGhyb3dzIExvY2FsaXphdGlvbkV4Y2VwdGlvblxuICAgKi9cbiAgdmFsaWRhdGVEYXRhKCkge1xuICAgIGlmICghdGhpcy5kZWNpbWFsIHx8IHR5cGVvZiB0aGlzLmRlY2ltYWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgTG9jYWxpemF0aW9uRXhjZXB0aW9uKCdJbnZhbGlkIGRlY2ltYWwnKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZ3JvdXAgfHwgdHlwZW9mIHRoaXMuZ3JvdXAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgTG9jYWxpemF0aW9uRXhjZXB0aW9uKCdJbnZhbGlkIGdyb3VwJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmxpc3QgfHwgdHlwZW9mIHRoaXMubGlzdCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBMb2NhbGl6YXRpb25FeGNlcHRpb24oJ0ludmFsaWQgc3ltYm9sIGxpc3QnKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucGVyY2VudFNpZ24gfHwgdHlwZW9mIHRoaXMucGVyY2VudFNpZ24gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgTG9jYWxpemF0aW9uRXhjZXB0aW9uKCdJbnZhbGlkIHBlcmNlbnRTaWduJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm1pbnVzU2lnbiB8fCB0eXBlb2YgdGhpcy5taW51c1NpZ24gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgTG9jYWxpemF0aW9uRXhjZXB0aW9uKCdJbnZhbGlkIG1pbnVzU2lnbicpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5wbHVzU2lnbiB8fCB0eXBlb2YgdGhpcy5wbHVzU2lnbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBMb2NhbGl6YXRpb25FeGNlcHRpb24oJ0ludmFsaWQgcGx1c1NpZ24nKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZXhwb25lbnRpYWwgfHwgdHlwZW9mIHRoaXMuZXhwb25lbnRpYWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgTG9jYWxpemF0aW9uRXhjZXB0aW9uKCdJbnZhbGlkIGV4cG9uZW50aWFsJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN1cGVyc2NyaXB0aW5nRXhwb25lbnQgfHwgdHlwZW9mIHRoaXMuc3VwZXJzY3JpcHRpbmdFeHBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBMb2NhbGl6YXRpb25FeGNlcHRpb24oJ0ludmFsaWQgc3VwZXJzY3JpcHRpbmdFeHBvbmVudCcpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5wZXJNaWxsZSB8fCB0eXBlb2YgdGhpcy5wZXJNaWxsZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBMb2NhbGl6YXRpb25FeGNlcHRpb24oJ0ludmFsaWQgcGVyTWlsbGUnKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaW5maW5pdHkgfHwgdHlwZW9mIHRoaXMuaW5maW5pdHkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgTG9jYWxpemF0aW9uRXhjZXB0aW9uKCdJbnZhbGlkIGluZmluaXR5Jyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm5hbiB8fCB0eXBlb2YgdGhpcy5uYW4gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgTG9jYWxpemF0aW9uRXhjZXB0aW9uKCdJbnZhbGlkIG5hbicpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAvY2xkci9udW1iZXItc3ltYm9sLmpzIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cbmltcG9ydCBMb2NhbGl6YXRpb25FeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uL2xvY2FsaXphdGlvbic7XG5pbXBvcnQgTnVtYmVyU3ltYm9sIGZyb20gJy4uL251bWJlci1zeW1ib2wnO1xuXG5jbGFzcyBOdW1iZXJTcGVjaWZpY2F0aW9uIHtcbiAgLyoqXG4gICAqIE51bWJlciBzcGVjaWZpY2F0aW9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0gc3RyaW5nIHBvc2l0aXZlUGF0dGVybiBDTERSIGZvcm1hdHRpbmcgcGF0dGVybiBmb3IgcG9zaXRpdmUgYW1vdW50c1xuICAgKiBAcGFyYW0gc3RyaW5nIG5lZ2F0aXZlUGF0dGVybiBDTERSIGZvcm1hdHRpbmcgcGF0dGVybiBmb3IgbmVnYXRpdmUgYW1vdW50c1xuICAgKiBAcGFyYW0gTnVtYmVyU3ltYm9sIHN5bWJvbCBOdW1iZXIgc3ltYm9sXG4gICAqIEBwYXJhbSBpbnQgbWF4RnJhY3Rpb25EaWdpdHMgTWF4aW11bSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIGRlY2ltYWwgc2VwYXJhdG9yXG4gICAqIEBwYXJhbSBpbnQgbWluRnJhY3Rpb25EaWdpdHMgTWluaW11bSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIGRlY2ltYWwgc2VwYXJhdG9yXG4gICAqIEBwYXJhbSBib29sIGdyb3VwaW5nVXNlZCBJcyBkaWdpdHMgZ3JvdXBpbmcgdXNlZCA/XG4gICAqIEBwYXJhbSBpbnQgcHJpbWFyeUdyb3VwU2l6ZSBTaXplIG9mIHByaW1hcnkgZGlnaXRzIGdyb3VwIGluIHRoZSBudW1iZXJcbiAgICogQHBhcmFtIGludCBzZWNvbmRhcnlHcm91cFNpemUgU2l6ZSBvZiBzZWNvbmRhcnkgZGlnaXRzIGdyb3VwIGluIHRoZSBudW1iZXJcbiAgICpcbiAgICogQHRocm93cyBMb2NhbGl6YXRpb25FeGNlcHRpb25cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBvc2l0aXZlUGF0dGVybixcbiAgICBuZWdhdGl2ZVBhdHRlcm4sXG4gICAgc3ltYm9sLFxuICAgIG1heEZyYWN0aW9uRGlnaXRzLFxuICAgIG1pbkZyYWN0aW9uRGlnaXRzLFxuICAgIGdyb3VwaW5nVXNlZCxcbiAgICBwcmltYXJ5R3JvdXBTaXplLFxuICAgIHNlY29uZGFyeUdyb3VwU2l6ZSxcbiAgKSB7XG4gICAgdGhpcy5wb3NpdGl2ZVBhdHRlcm4gPSBwb3NpdGl2ZVBhdHRlcm47XG4gICAgdGhpcy5uZWdhdGl2ZVBhdHRlcm4gPSBuZWdhdGl2ZVBhdHRlcm47XG4gICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG5cbiAgICB0aGlzLm1heEZyYWN0aW9uRGlnaXRzID0gbWF4RnJhY3Rpb25EaWdpdHM7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgdGhpcy5taW5GcmFjdGlvbkRpZ2l0cyA9IG1heEZyYWN0aW9uRGlnaXRzIDwgbWluRnJhY3Rpb25EaWdpdHMgPyBtYXhGcmFjdGlvbkRpZ2l0cyA6IG1pbkZyYWN0aW9uRGlnaXRzO1xuXG4gICAgdGhpcy5ncm91cGluZ1VzZWQgPSBncm91cGluZ1VzZWQ7XG4gICAgdGhpcy5wcmltYXJ5R3JvdXBTaXplID0gcHJpbWFyeUdyb3VwU2l6ZTtcbiAgICB0aGlzLnNlY29uZGFyeUdyb3VwU2l6ZSA9IHNlY29uZGFyeUdyb3VwU2l6ZTtcblxuICAgIGlmICghdGhpcy5wb3NpdGl2ZVBhdHRlcm4gfHwgdHlwZW9mIHRoaXMucG9zaXRpdmVQYXR0ZXJuICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IExvY2FsaXphdGlvbkV4Y2VwdGlvbignSW52YWxpZCBwb3NpdGl2ZVBhdHRlcm4nKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubmVnYXRpdmVQYXR0ZXJuIHx8IHR5cGVvZiB0aGlzLm5lZ2F0aXZlUGF0dGVybiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBMb2NhbGl6YXRpb25FeGNlcHRpb24oJ0ludmFsaWQgbmVnYXRpdmVQYXR0ZXJuJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN5bWJvbCB8fCAhKHRoaXMuc3ltYm9sIGluc3RhbmNlb2YgTnVtYmVyU3ltYm9sKSkge1xuICAgICAgdGhyb3cgbmV3IExvY2FsaXphdGlvbkV4Y2VwdGlvbignSW52YWxpZCBzeW1ib2wnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMubWF4RnJhY3Rpb25EaWdpdHMgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgTG9jYWxpemF0aW9uRXhjZXB0aW9uKCdJbnZhbGlkIG1heEZyYWN0aW9uRGlnaXRzJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm1pbkZyYWN0aW9uRGlnaXRzICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IExvY2FsaXphdGlvbkV4Y2VwdGlvbignSW52YWxpZCBtaW5GcmFjdGlvbkRpZ2l0cycpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5ncm91cGluZ1VzZWQgIT09ICdib29sZWFuJykge1xuICAgICAgdGhyb3cgbmV3IExvY2FsaXphdGlvbkV4Y2VwdGlvbignSW52YWxpZCBncm91cGluZ1VzZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJpbWFyeUdyb3VwU2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBMb2NhbGl6YXRpb25FeGNlcHRpb24oJ0ludmFsaWQgcHJpbWFyeUdyb3VwU2l6ZScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5zZWNvbmRhcnlHcm91cFNpemUgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgTG9jYWxpemF0aW9uRXhjZXB0aW9uKCdJbnZhbGlkIHNlY29uZGFyeUdyb3VwU2l6ZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3ltYm9sLlxuICAgKlxuICAgKiBAcmV0dXJuIE51bWJlclN5bWJvbFxuICAgKi9cbiAgZ2V0U3ltYm9sKCkge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGZvcm1hdHRpbmcgcnVsZXMgZm9yIHRoaXMgbnVtYmVyICh3aGVuIHBvc2l0aXZlKS5cbiAgICpcbiAgICogVGhpcyBwYXR0ZXJuIHVzZXMgdGhlIFVuaWNvZGUgQ0xEUiBudW1iZXIgcGF0dGVybiBzeW50YXhcbiAgICpcbiAgICogQHJldHVybiBzdHJpbmdcbiAgICovXG4gIGdldFBvc2l0aXZlUGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGl2ZVBhdHRlcm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBmb3JtYXR0aW5nIHJ1bGVzIGZvciB0aGlzIG51bWJlciAod2hlbiBuZWdhdGl2ZSkuXG4gICAqXG4gICAqIFRoaXMgcGF0dGVybiB1c2VzIHRoZSBVbmljb2RlIENMRFIgbnVtYmVyIHBhdHRlcm4gc3ludGF4XG4gICAqXG4gICAqIEByZXR1cm4gc3RyaW5nXG4gICAqL1xuICBnZXROZWdhdGl2ZVBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRpdmVQYXR0ZXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4aW11bSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIGRlY2ltYWwgc2VwYXJhdG9yIChyb3VuZGluZyBpZiBuZWVkZWQpLlxuICAgKlxuICAgKiBAcmV0dXJuIGludFxuICAgKi9cbiAgZ2V0TWF4RnJhY3Rpb25EaWdpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4RnJhY3Rpb25EaWdpdHM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaW5pbXVtIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgZGVjaW1hbCBzZXBhcmF0b3IgKGZpbGwgd2l0aCBcIjBcIiBpZiBuZWVkZWQpLlxuICAgKlxuICAgKiBAcmV0dXJuIGludFxuICAgKi9cbiAgZ2V0TWluRnJhY3Rpb25EaWdpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWluRnJhY3Rpb25EaWdpdHM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBcImdyb3VwaW5nXCIgZmxhZy4gVGhpcyBmbGFnIGRlZmluZXMgaWYgZGlnaXRzXG4gICAqIGdyb3VwaW5nIHNob3VsZCBiZSB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGlzIG51bWJlci5cbiAgICpcbiAgICogQHJldHVybiBib29sXG4gICAqL1xuICBpc0dyb3VwaW5nVXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5ncm91cGluZ1VzZWQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzaXplIG9mIHByaW1hcnkgZGlnaXRzIGdyb3VwIGluIHRoZSBudW1iZXIuXG4gICAqXG4gICAqIEByZXR1cm4gaW50XG4gICAqL1xuICBnZXRQcmltYXJ5R3JvdXBTaXplKCkge1xuICAgIHJldHVybiB0aGlzLnByaW1hcnlHcm91cFNpemU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzaXplIG9mIHNlY29uZGFyeSBkaWdpdHMgZ3JvdXBzIGluIHRoZSBudW1iZXIuXG4gICAqXG4gICAqIEByZXR1cm4gaW50XG4gICAqL1xuICBnZXRTZWNvbmRhcnlHcm91cFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vjb25kYXJ5R3JvdXBTaXplO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlclNwZWNpZmljYXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAvY2xkci9zcGVjaWZpY2F0aW9ucy9udW1iZXIuanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuY2xhc3MgTG9jYWxpemF0aW9uRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5uYW1lID0gJ0xvY2FsaXphdGlvbkV4Y2VwdGlvbic7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxpemF0aW9uRXhjZXB0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwL2NsZHIvZXhjZXB0aW9uL2xvY2FsaXphdGlvbi5qcyIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5pbXBvcnQgTG9jYWxpemF0aW9uRXhjZXB0aW9uIGZyb20gJy4uL2V4Y2VwdGlvbi9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IE51bWJlclNwZWNpZmljYXRpb24gZnJvbSAnLi9udW1iZXInO1xuXG4vKipcbiAqIEN1cnJlbmN5IGRpc3BsYXkgb3B0aW9uOiBzeW1ib2wgbm90YXRpb24uXG4gKi9cbmNvbnN0IENVUlJFTkNZX0RJU1BMQVlfU1lNQk9MID0gJ3N5bWJvbCc7XG5cblxuY2xhc3MgUHJpY2VTcGVjaWZpY2F0aW9uIGV4dGVuZHMgTnVtYmVyU3BlY2lmaWNhdGlvbiB7XG4gIC8qKlxuICAgKiBQcmljZSBzcGVjaWZpY2F0aW9uIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0gc3RyaW5nIHBvc2l0aXZlUGF0dGVybiBDTERSIGZvcm1hdHRpbmcgcGF0dGVybiBmb3IgcG9zaXRpdmUgYW1vdW50c1xuICAgKiBAcGFyYW0gc3RyaW5nIG5lZ2F0aXZlUGF0dGVybiBDTERSIGZvcm1hdHRpbmcgcGF0dGVybiBmb3IgbmVnYXRpdmUgYW1vdW50c1xuICAgKiBAcGFyYW0gTnVtYmVyU3ltYm9sIHN5bWJvbCBOdW1iZXIgc3ltYm9sXG4gICAqIEBwYXJhbSBpbnQgbWF4RnJhY3Rpb25EaWdpdHMgTWF4aW11bSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIGRlY2ltYWwgc2VwYXJhdG9yXG4gICAqIEBwYXJhbSBpbnQgbWluRnJhY3Rpb25EaWdpdHMgTWluaW11bSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIGRlY2ltYWwgc2VwYXJhdG9yXG4gICAqIEBwYXJhbSBib29sIGdyb3VwaW5nVXNlZCBJcyBkaWdpdHMgZ3JvdXBpbmcgdXNlZCA/XG4gICAqIEBwYXJhbSBpbnQgcHJpbWFyeUdyb3VwU2l6ZSBTaXplIG9mIHByaW1hcnkgZGlnaXRzIGdyb3VwIGluIHRoZSBudW1iZXJcbiAgICogQHBhcmFtIGludCBzZWNvbmRhcnlHcm91cFNpemUgU2l6ZSBvZiBzZWNvbmRhcnkgZGlnaXRzIGdyb3VwIGluIHRoZSBudW1iZXJcbiAgICogQHBhcmFtIHN0cmluZyBjdXJyZW5jeVN5bWJvbCBDdXJyZW5jeSBzeW1ib2wgb2YgdGhpcyBwcmljZSAoZWcuIDog4oKsKVxuICAgKiBAcGFyYW0gY3VycmVuY3lDb2RlIEN1cnJlbmN5IGNvZGUgb2YgdGhpcyBwcmljZSAoZS5nLjogRVVSKVxuICAgKlxuICAgKiBAdGhyb3dzIExvY2FsaXphdGlvbkV4Y2VwdGlvblxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcG9zaXRpdmVQYXR0ZXJuLFxuICAgIG5lZ2F0aXZlUGF0dGVybixcbiAgICBzeW1ib2wsXG4gICAgbWF4RnJhY3Rpb25EaWdpdHMsXG4gICAgbWluRnJhY3Rpb25EaWdpdHMsXG4gICAgZ3JvdXBpbmdVc2VkLFxuICAgIHByaW1hcnlHcm91cFNpemUsXG4gICAgc2Vjb25kYXJ5R3JvdXBTaXplLFxuICAgIGN1cnJlbmN5U3ltYm9sLFxuICAgIGN1cnJlbmN5Q29kZSxcbiAgKSB7XG4gICAgc3VwZXIoXG4gICAgICBwb3NpdGl2ZVBhdHRlcm4sXG4gICAgICBuZWdhdGl2ZVBhdHRlcm4sXG4gICAgICBzeW1ib2wsXG4gICAgICBtYXhGcmFjdGlvbkRpZ2l0cyxcbiAgICAgIG1pbkZyYWN0aW9uRGlnaXRzLFxuICAgICAgZ3JvdXBpbmdVc2VkLFxuICAgICAgcHJpbWFyeUdyb3VwU2l6ZSxcbiAgICAgIHNlY29uZGFyeUdyb3VwU2l6ZSxcbiAgICApO1xuICAgIHRoaXMuY3VycmVuY3lTeW1ib2wgPSBjdXJyZW5jeVN5bWJvbDtcbiAgICB0aGlzLmN1cnJlbmN5Q29kZSA9IGN1cnJlbmN5Q29kZTtcblxuICAgIGlmICghdGhpcy5jdXJyZW5jeVN5bWJvbCB8fCB0eXBlb2YgdGhpcy5jdXJyZW5jeVN5bWJvbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBMb2NhbGl6YXRpb25FeGNlcHRpb24oJ0ludmFsaWQgY3VycmVuY3lTeW1ib2wnKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY3VycmVuY3lDb2RlIHx8IHR5cGVvZiB0aGlzLmN1cnJlbmN5Q29kZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBMb2NhbGl6YXRpb25FeGNlcHRpb24oJ0ludmFsaWQgY3VycmVuY3lDb2RlJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0eXBlIG9mIGRpc3BsYXkgZm9yIGN1cnJlbmN5IHN5bWJvbC5cbiAgICpcbiAgICogQHJldHVybiBzdHJpbmdcbiAgICovXG4gIHN0YXRpYyBnZXRDdXJyZW5jeURpc3BsYXkoKSB7XG4gICAgcmV0dXJuIENVUlJFTkNZX0RJU1BMQVlfU1lNQk9MO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVuY3kgc3ltYm9sXG4gICAqIGUuZy46IOKCrC5cbiAgICpcbiAgICogQHJldHVybiBzdHJpbmdcbiAgICovXG4gIGdldEN1cnJlbmN5U3ltYm9sKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbmN5U3ltYm9sO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVuY3kgSVNPIGNvZGVcbiAgICogZS5nLjogRVVSLlxuICAgKlxuICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgKi9cbiAgZ2V0Q3VycmVuY3lDb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbmN5Q29kZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmljZVNwZWNpZmljYXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAvY2xkci9zcGVjaWZpY2F0aW9ucy9wcmljZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=