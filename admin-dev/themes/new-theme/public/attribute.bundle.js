window["attribute"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 339);
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

/***/ 11:
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
 * Class SubmitRowActionExtension handles submitting of row action
 */

var SubmitRowActionExtension = function () {
  function SubmitRowActionExtension() {
    _classCallCheck(this, SubmitRowActionExtension);
  }

  _createClass(SubmitRowActionExtension, [{
    key: 'extend',

    /**
     * Extend grid
     *
     * @param {Grid} grid
     */
    value: function extend(grid) {
      grid.getContainer().on('click', '.js-submit-row-action', function (event) {
        event.preventDefault();

        var $button = $(event.currentTarget);
        var confirmMessage = $button.data('confirm-message');

        if (confirmMessage.length && !confirm(confirmMessage)) {
          return;
        }

        var method = $button.data('method');
        var isGetOrPostMethod = ['GET', 'POST'].includes(method);

        var $form = $('<form>', {
          'action': $button.data('url'),
          'method': isGetOrPostMethod ? method : 'POST'
        }).appendTo('body');

        if (!isGetOrPostMethod) {
          $form.append($('<input>', {
            'type': '_hidden',
            'name': '_method',
            'value': method
          }));
        }

        $form.submit();
      });
    }
  }]);

  return SubmitRowActionExtension;
}();

exports.default = SubmitRowActionExtension;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

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

var $ = global.$;

/**
 * Makes a table sortable by columns.
 * This forces a page reload with more query parameters.
 */

var TableSorting = function () {

  /**
   * @param {jQuery} table
   */
  function TableSorting(table) {
    _classCallCheck(this, TableSorting);

    this.selector = '.ps-sortable-column';
    this.columns = $(table).find(this.selector);
  }

  /**
   * Attaches the listeners
   */


  _createClass(TableSorting, [{
    key: 'attach',
    value: function attach() {
      var _this = this;

      this.columns.on('click', function (e) {
        var $column = $(e.delegateTarget);
        _this._sortByColumn($column, _this._getToggledSortDirection($column));
      });
    }

    /**
     * Sort using a column name
     * @param {string} columnName
     * @param {string} direction "asc" or "desc"
     */

  }, {
    key: 'sortBy',
    value: function sortBy(columnName, direction) {
      var $column = this.columns.is('[data-sort-col-name="' + columnName + '"]');
      if (!$column) {
        throw new Error('Cannot sort by "' + columnName + '": invalid column');
      }

      this._sortByColumn($column, direction);
    }

    /**
     * Sort using a column element
     * @param {jQuery} column
     * @param {string} direction "asc" or "desc"
     * @private
     */

  }, {
    key: '_sortByColumn',
    value: function _sortByColumn(column, direction) {
      window.location = this._getUrl(column.data('sortColName'), direction === 'desc' ? 'desc' : 'asc', column.data('sortPrefix'));
    }

    /**
     * Returns the inverted direction to sort according to the column's current one
     * @param {jQuery} column
     * @return {string}
     * @private
     */

  }, {
    key: '_getToggledSortDirection',
    value: function _getToggledSortDirection(column) {
      return column.data('sortDirection') === 'asc' ? 'desc' : 'asc';
    }

    /**
     * Returns the url for the sorted table
     * @param {string} colName
     * @param {string} direction
     * @param {string} prefix
     * @return {string}
     * @private
     */

  }, {
    key: '_getUrl',
    value: function _getUrl(colName, direction, prefix) {
      var url = new URL(window.location.href);
      var params = url.searchParams;

      if (prefix) {
        params.set(prefix + '[orderBy]', colName);
        params.set(prefix + '[sortOrder]', direction);
      } else {
        params.set('orderBy', colName);
        params.set('sortOrder', direction);
      }

      return url.toString();
    }
  }]);

  return TableSorting;
}();

exports.default = TableSorting;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

(function() { module.exports = window["jQuery"]; }());

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

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
 * Send a Post Request to reset search Action.
 */

var $ = global.$;

var init = function resetSearch(url, redirectUrl) {
  $.post(url).then(function () {
    return window.location.assign(redirectUrl);
  });
};

exports.default = init;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 2:
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
 * Class is responsible for handling Grid events
 */

var Grid = function () {
  /**
   * Grid id
   *
   * @param {string} id
   */
  function Grid(id) {
    _classCallCheck(this, Grid);

    this.id = id;
    this.$container = $('#' + this.id + '_grid');
  }

  /**
   * Get grid id
   *
   * @returns {string}
   */


  _createClass(Grid, [{
    key: 'getId',
    value: function getId() {
      return this.id;
    }

    /**
     * Get grid container
     *
     * @returns {jQuery}
     */

  }, {
    key: 'getContainer',
    value: function getContainer() {
      return this.$container;
    }

    /**
     * Get grid header container
     *
     * @returns {jQuery}
     */

  }, {
    key: 'getHeaderContainer',
    value: function getHeaderContainer() {
      return this.$container.closest('.js-grid-panel').find('.js-grid-header');
    }

    /**
     * Extend grid with external extensions
     *
     * @param {object} extension
     */

  }, {
    key: 'addExtension',
    value: function addExtension(extension) {
      extension.extend(this);
    }
  }]);

  return Grid;
}();

exports.default = Grid;

/***/ }),

/***/ 3:
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

var _reset_search = __webpack_require__(14);

var _reset_search2 = _interopRequireDefault(_reset_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Class FiltersResetExtension extends grid with filters resetting
 */

var FiltersResetExtension = function () {
  function FiltersResetExtension() {
    _classCallCheck(this, FiltersResetExtension);
  }

  _createClass(FiltersResetExtension, [{
    key: 'extend',


    /**
     * Extend grid
     *
     * @param {Grid} grid
     */
    value: function extend(grid) {
      grid.getContainer().on('click', '.js-reset-search', function (event) {
        (0, _reset_search2.default)($(event.currentTarget).data('url'), $(event.currentTarget).data('redirect'));
      });
    }
  }]);

  return FiltersResetExtension;
}();

exports.default = FiltersResetExtension;

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _grid = __webpack_require__(2);

var _grid2 = _interopRequireDefault(_grid);

var _sortingExtension = __webpack_require__(4);

var _sortingExtension2 = _interopRequireDefault(_sortingExtension);

var _filtersResetExtension = __webpack_require__(3);

var _filtersResetExtension2 = _interopRequireDefault(_filtersResetExtension);

var _reloadListExtension = __webpack_require__(5);

var _reloadListExtension2 = _interopRequireDefault(_reloadListExtension);

var _submitRowActionExtension = __webpack_require__(11);

var _submitRowActionExtension2 = _interopRequireDefault(_submitRowActionExtension);

var _submitBulkActionExtension = __webpack_require__(9);

var _submitBulkActionExtension2 = _interopRequireDefault(_submitBulkActionExtension);

var _bulkActionCheckboxExtension = __webpack_require__(8);

var _bulkActionCheckboxExtension2 = _interopRequireDefault(_bulkActionCheckboxExtension);

var _exportToSqlManagerExtension = __webpack_require__(6);

var _exportToSqlManagerExtension2 = _interopRequireDefault(_exportToSqlManagerExtension);

var _filtersSubmitButtonEnablerExtension = __webpack_require__(7);

var _filtersSubmitButtonEnablerExtension2 = _interopRequireDefault(_filtersSubmitButtonEnablerExtension);

var _positionExtension = __webpack_require__(46);

var _positionExtension2 = _interopRequireDefault(_positionExtension);

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

var $ = window.$;

$(function () {
  var grid = new _grid2.default('attribute');

  grid.addExtension(new _exportToSqlManagerExtension2.default());
  grid.addExtension(new _reloadListExtension2.default());
  grid.addExtension(new _sortingExtension2.default());
  grid.addExtension(new _filtersResetExtension2.default());
  grid.addExtension(new _submitRowActionExtension2.default());
  grid.addExtension(new _submitBulkActionExtension2.default());
  grid.addExtension(new _bulkActionCheckboxExtension2.default());
  grid.addExtension(new _filtersSubmitButtonEnablerExtension2.default());
  grid.addExtension(new _positionExtension2.default());
});

/***/ }),

/***/ 4:
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

var _tableSorting = __webpack_require__(12);

var _tableSorting2 = _interopRequireDefault(_tableSorting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class ReloadListExtension extends grid with "List reload" action
 */
var SortingExtension = function () {
  function SortingExtension() {
    _classCallCheck(this, SortingExtension);
  }

  _createClass(SortingExtension, [{
    key: 'extend',

    /**
     * Extend grid
     *
     * @param {Grid} grid
     */
    value: function extend(grid) {
      var $sortableTable = grid.getContainer().find('table.table');

      new _tableSorting2.default($sortableTable).attach();
    }
  }]);

  return SortingExtension;
}();

exports.default = SortingExtension;

/***/ }),

/***/ 46:
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

var _jqueryTablednd = __webpack_require__(50);

var _jqueryTablednd2 = _interopRequireDefault(_jqueryTablednd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Class PositionExtension extends Grid with reorderable positions
 */

var PositionExtension = function () {
  function PositionExtension() {
    var _this = this;

    _classCallCheck(this, PositionExtension);

    return {
      extend: function extend(grid) {
        return _this.extend(grid);
      }
    };
  }

  /**
   * Extend grid
   *
   * @param {Grid} grid
   */


  _createClass(PositionExtension, [{
    key: 'extend',
    value: function extend(grid) {
      var _this2 = this;

      this.grid = grid;
      this._addIdsToGridTableRows();
      grid.getContainer().find('.js-grid-table').tableDnD({
        onDragClass: 'position-row-while-drag',
        dragHandle: '.js-drag-handle',
        onDrop: function onDrop(table, row) {
          return _this2._handlePositionChange(row);
        }
      });
      grid.getContainer().find('.js-drag-handle').hover(function () {
        $(this).closest('tr').addClass('hover');
      }, function () {
        $(this).closest('tr').removeClass('hover');
      });
    }

    /**
     * When position is changed handle update
     *
     * @param {HTMLElement} row
     *
     * @private
     */

  }, {
    key: '_handlePositionChange',
    value: function _handlePositionChange(row) {
      var $rowPositionContainer = $(row).find('.js-' + this.grid.getId() + '-position:first');
      var updateUrl = $rowPositionContainer.data('update-url');
      var method = $rowPositionContainer.data('update-method');
      var paginationOffset = parseInt($rowPositionContainer.data('pagination-offset'), 10);
      var positions = this._getRowsPositions(paginationOffset);
      var params = { positions: positions };

      this._updatePosition(updateUrl, params, method);
    }

    /**
     * Returns the current table positions
     * @returns {Array}
     * @private
     */

  }, {
    key: '_getRowsPositions',
    value: function _getRowsPositions(paginationOffset) {
      var tableData = JSON.parse($.tableDnD.jsonize());
      var rowsData = tableData[this.grid.getId() + '_grid_table'];
      var regex = /^row_(\d+)_(\d+)$/;

      var rowsNb = rowsData.length;
      var positions = [];
      var rowData = void 0,
          i = void 0;
      for (i = 0; i < rowsNb; ++i) {
        rowData = regex.exec(rowsData[i]);
        positions.push({
          rowId: rowData[1],
          newPosition: paginationOffset + i,
          oldPosition: parseInt(rowData[2], 10)
        });
      }

      return positions;
    }

    /**
     * Add ID's to Grid table rows to make tableDnD.onDrop() function work.
     *
     * @private
     */

  }, {
    key: '_addIdsToGridTableRows',
    value: function _addIdsToGridTableRows() {
      this.grid.getContainer().find('.js-grid-table .js-' + this.grid.getId() + '-position').each(function (index, positionWrapper) {
        var $positionWrapper = $(positionWrapper);
        var rowId = $positionWrapper.data('id');
        var position = $positionWrapper.data('position');
        var id = 'row_' + rowId + '_' + position;
        $positionWrapper.closest('tr').attr('id', id);
        $positionWrapper.closest('td').addClass('js-drag-handle');
      });
    }

    /**
     * Process rows positions update
     *
     * @param {String} url
     * @param {Object} params
     * @param {String} method
     *
     * @private
     */

  }, {
    key: '_updatePosition',
    value: function _updatePosition(url, params, method) {
      var isGetOrPostMethod = ['GET', 'POST'].includes(method);

      var $form = $('<form>', {
        'action': url,
        'method': isGetOrPostMethod ? method : 'POST'
      }).appendTo('body');

      var positionsNb = params.positions.length;
      var position = void 0;
      for (var i = 0; i < positionsNb; ++i) {
        position = params.positions[i];
        $form.append($('<input>', {
          'type': 'hidden',
          'name': 'positions[' + i + '][rowId]',
          'value': position.rowId
        }), $('<input>', {
          'type': 'hidden',
          'name': 'positions[' + i + '][oldPosition]',
          'value': position.oldPosition
        }), $('<input>', {
          'type': 'hidden',
          'name': 'positions[' + i + '][newPosition]',
          'value': position.newPosition
        }));
      }

      // This _method param is used by Symfony to simulate DELETE and PUT methods
      if (!isGetOrPostMethod) {
        $form.append($('<input>', {
          'type': 'hidden',
          'name': '_method',
          'value': method
        }));
      }

      $form.submit();
    }
  }]);

  return PositionExtension;
}();

exports.default = PositionExtension;

/***/ }),

/***/ 5:
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

/**
 * Class ReloadListExtension extends grid with "List reload" action
 */
var ReloadListExtension = function () {
  function ReloadListExtension() {
    _classCallCheck(this, ReloadListExtension);
  }

  _createClass(ReloadListExtension, [{
    key: 'extend',

    /**
     * Extend grid
     *
     * @param {Grid} grid
     */
    value: function extend(grid) {
      grid.getHeaderContainer().on('click', '.js-common_refresh_list-grid-action', function () {
        location.reload();
      });
    }
  }]);

  return ReloadListExtension;
}();

exports.default = ReloadListExtension;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*! jquery.tablednd.js 30-12-2017 */
!function(a,b,c,d){var e="touchstart mousedown",f="touchmove mousemove",g="touchend mouseup";a(c).ready(function(){function b(a){for(var b={},c=a.match(/([^;:]+)/g)||[];c.length;)b[c.shift()]=c.shift().trim();return b}a("table").each(function(){"dnd"===a(this).data("table")&&a(this).tableDnD({onDragStyle:a(this).data("ondragstyle")&&b(a(this).data("ondragstyle"))||null,onDropStyle:a(this).data("ondropstyle")&&b(a(this).data("ondropstyle"))||null,onDragClass:a(this).data("ondragclass")===d&&"tDnD_whileDrag"||a(this).data("ondragclass"),onDrop:a(this).data("ondrop")&&new Function("table","row",a(this).data("ondrop")),onDragStart:a(this).data("ondragstart")&&new Function("table","row",a(this).data("ondragstart")),onDragStop:a(this).data("ondragstop")&&new Function("table","row",a(this).data("ondragstop")),scrollAmount:a(this).data("scrollamount")||5,sensitivity:a(this).data("sensitivity")||10,hierarchyLevel:a(this).data("hierarchylevel")||0,indentArtifact:a(this).data("indentartifact")||'<div class="indent">&nbsp;</div>',autoWidthAdjust:a(this).data("autowidthadjust")||!0,autoCleanRelations:a(this).data("autocleanrelations")||!0,jsonPretifySeparator:a(this).data("jsonpretifyseparator")||"\t",serializeRegexp:a(this).data("serializeregexp")&&new RegExp(a(this).data("serializeregexp"))||/[^\-]*$/,serializeParamName:a(this).data("serializeparamname")||!1,dragHandle:a(this).data("draghandle")||null})})}),jQuery.tableDnD={currentTable:null,dragObject:null,mouseOffset:null,oldX:0,oldY:0,build:function(b){return this.each(function(){this.tableDnDConfig=a.extend({onDragStyle:null,onDropStyle:null,onDragClass:"tDnD_whileDrag",onDrop:null,onDragStart:null,onDragStop:null,scrollAmount:5,sensitivity:10,hierarchyLevel:0,indentArtifact:'<div class="indent">&nbsp;</div>',autoWidthAdjust:!0,autoCleanRelations:!0,jsonPretifySeparator:"\t",serializeRegexp:/[^\-]*$/,serializeParamName:!1,dragHandle:null},b||{}),a.tableDnD.makeDraggable(this),this.tableDnDConfig.hierarchyLevel&&a.tableDnD.makeIndented(this)}),this},makeIndented:function(b){var c,d,e=b.tableDnDConfig,f=b.rows,g=a(f).first().find("td:first")[0],h=0,i=0;if(a(b).hasClass("indtd"))return null;d=a(b).addClass("indtd").attr("style"),a(b).css({whiteSpace:"nowrap"});for(var j=0;j<f.length;j++)i<a(f[j]).find("td:first").text().length&&(i=a(f[j]).find("td:first").text().length,c=j);for(a(g).css({width:"auto"}),j=0;j<e.hierarchyLevel;j++)a(f[c]).find("td:first").prepend(e.indentArtifact);for(g&&a(g).css({width:g.offsetWidth}),d&&a(b).css(d),j=0;j<e.hierarchyLevel;j++)a(f[c]).find("td:first").children(":first").remove();return e.hierarchyLevel&&a(f).each(function(){(h=a(this).data("level")||0)<=e.hierarchyLevel&&a(this).data("level",h)||a(this).data("level",0);for(var b=0;b<a(this).data("level");b++)a(this).find("td:first").prepend(e.indentArtifact)}),this},makeDraggable:function(b){var c=b.tableDnDConfig;c.dragHandle&&a(c.dragHandle,b).each(function(){a(this).bind(e,function(d){return a.tableDnD.initialiseDrag(a(this).parents("tr")[0],b,this,d,c),!1})})||a(b.rows).each(function(){a(this).hasClass("nodrag")?a(this).css("cursor",""):a(this).bind(e,function(d){if("TD"===d.target.tagName)return a.tableDnD.initialiseDrag(this,b,this,d,c),!1}).css("cursor","move")})},currentOrder:function(){var b=this.currentTable.rows;return a.map(b,function(b){return(a(b).data("level")+b.id).replace(/\s/g,"")}).join("")},initialiseDrag:function(b,d,e,h,i){this.dragObject=b,this.currentTable=d,this.mouseOffset=this.getMouseOffset(e,h),this.originalOrder=this.currentOrder(),a(c).bind(f,this.mousemove).bind(g,this.mouseup),i.onDragStart&&i.onDragStart(d,e)},updateTables:function(){this.each(function(){this.tableDnDConfig&&a.tableDnD.makeDraggable(this)})},mouseCoords:function(a){return a.originalEvent.changedTouches?{x:a.originalEvent.changedTouches[0].clientX,y:a.originalEvent.changedTouches[0].clientY}:a.pageX||a.pageY?{x:a.pageX,y:a.pageY}:{x:a.clientX+c.body.scrollLeft-c.body.clientLeft,y:a.clientY+c.body.scrollTop-c.body.clientTop}},getMouseOffset:function(a,c){var d,e;return c=c||b.event,e=this.getPosition(a),d=this.mouseCoords(c),{x:d.x-e.x,y:d.y-e.y}},getPosition:function(a){var b=0,c=0;for(0===a.offsetHeight&&(a=a.firstChild);a.offsetParent;)b+=a.offsetLeft,c+=a.offsetTop,a=a.offsetParent;return b+=a.offsetLeft,c+=a.offsetTop,{x:b,y:c}},autoScroll:function(a){var d=this.currentTable.tableDnDConfig,e=b.pageYOffset,f=b.innerHeight?b.innerHeight:c.documentElement.clientHeight?c.documentElement.clientHeight:c.body.clientHeight;c.all&&(void 0!==c.compatMode&&"BackCompat"!==c.compatMode?e=c.documentElement.scrollTop:void 0!==c.body&&(e=c.body.scrollTop)),a.y-e<d.scrollAmount&&b.scrollBy(0,-d.scrollAmount)||f-(a.y-e)<d.scrollAmount&&b.scrollBy(0,d.scrollAmount)},moveVerticle:function(a,b){0!==a.vertical&&b&&this.dragObject!==b&&this.dragObject.parentNode===b.parentNode&&(0>a.vertical&&this.dragObject.parentNode.insertBefore(this.dragObject,b.nextSibling)||0<a.vertical&&this.dragObject.parentNode.insertBefore(this.dragObject,b))},moveHorizontal:function(b,c){var d,e=this.currentTable.tableDnDConfig;if(!e.hierarchyLevel||0===b.horizontal||!c||this.dragObject!==c)return null;d=a(c).data("level"),0<b.horizontal&&d>0&&a(c).find("td:first").children(":first").remove()&&a(c).data("level",--d),0>b.horizontal&&d<e.hierarchyLevel&&a(c).prev().data("level")>=d&&a(c).children(":first").prepend(e.indentArtifact)&&a(c).data("level",++d)},mousemove:function(b){var c,d,e,f,g,h=a(a.tableDnD.dragObject),i=a.tableDnD.currentTable.tableDnDConfig;return b&&b.preventDefault(),!!a.tableDnD.dragObject&&("touchmove"===b.type&&event.preventDefault(),i.onDragClass&&h.addClass(i.onDragClass)||h.css(i.onDragStyle),d=a.tableDnD.mouseCoords(b),f=d.x-a.tableDnD.mouseOffset.x,g=d.y-a.tableDnD.mouseOffset.y,a.tableDnD.autoScroll(d),c=a.tableDnD.findDropTargetRow(h,g),e=a.tableDnD.findDragDirection(f,g),a.tableDnD.moveVerticle(e,c),a.tableDnD.moveHorizontal(e,c),!1)},findDragDirection:function(a,b){var c=this.currentTable.tableDnDConfig.sensitivity,d=this.oldX,e=this.oldY,f=d-c,g=d+c,h=e-c,i=e+c,j={horizontal:a>=f&&a<=g?0:a>d?-1:1,vertical:b>=h&&b<=i?0:b>e?-1:1};return 0!==j.horizontal&&(this.oldX=a),0!==j.vertical&&(this.oldY=b),j},findDropTargetRow:function(b,c){for(var d=0,e=this.currentTable.rows,f=this.currentTable.tableDnDConfig,g=0,h=null,i=0;i<e.length;i++)if(h=e[i],g=this.getPosition(h).y,d=parseInt(h.offsetHeight)/2,0===h.offsetHeight&&(g=this.getPosition(h.firstChild).y,d=parseInt(h.firstChild.offsetHeight)/2),c>g-d&&c<g+d)return b.is(h)||f.onAllowDrop&&!f.onAllowDrop(b,h)||a(h).hasClass("nodrop")?null:h;return null},processMouseup:function(){if(!this.currentTable||!this.dragObject)return null;var b=this.currentTable.tableDnDConfig,d=this.dragObject,e=0,h=0;a(c).unbind(f,this.mousemove).unbind(g,this.mouseup),b.hierarchyLevel&&b.autoCleanRelations&&a(this.currentTable.rows).first().find("td:first").children().each(function(){(h=a(this).parents("tr:first").data("level"))&&a(this).parents("tr:first").data("level",--h)&&a(this).remove()})&&b.hierarchyLevel>1&&a(this.currentTable.rows).each(function(){if((h=a(this).data("level"))>1)for(e=a(this).prev().data("level");h>e+1;)a(this).find("td:first").children(":first").remove(),a(this).data("level",--h)}),b.onDragClass&&a(d).removeClass(b.onDragClass)||a(d).css(b.onDropStyle),this.dragObject=null,b.onDrop&&this.originalOrder!==this.currentOrder()&&a(d).hide().fadeIn("fast")&&b.onDrop(this.currentTable,d),b.onDragStop&&b.onDragStop(this.currentTable,d),this.currentTable=null},mouseup:function(b){return b&&b.preventDefault(),a.tableDnD.processMouseup(),!1},jsonize:function(a){var b=this.currentTable;return a?JSON.stringify(this.tableData(b),null,b.tableDnDConfig.jsonPretifySeparator):JSON.stringify(this.tableData(b))},serialize:function(){return a.param(this.tableData(this.currentTable))},serializeTable:function(a){for(var b="",c=a.tableDnDConfig.serializeParamName||a.id,d=a.rows,e=0;e<d.length;e++){b.length>0&&(b+="&");var f=d[e].id;f&&a.tableDnDConfig&&a.tableDnDConfig.serializeRegexp&&(f=f.match(a.tableDnDConfig.serializeRegexp)[0],b+=c+"[]="+f)}return b},serializeTables:function(){var b=[];return a("table").each(function(){this.id&&b.push(a.param(a.tableDnD.tableData(this)))}),b.join("&")},tableData:function(b){var c,d,e,f,g=b.tableDnDConfig,h=[],i=0,j=0,k=null,l={};if(b||(b=this.currentTable),!b||!b.rows||!b.rows.length)return{error:{code:500,message:"Not a valid table."}};if(!b.id&&!g.serializeParamName)return{error:{code:500,message:"No serializable unique id provided."}};f=g.autoCleanRelations&&b.rows||a.makeArray(b.rows),d=g.serializeParamName||b.id,e=d,c=function(a){return a&&g&&g.serializeRegexp?a.match(g.serializeRegexp)[0]:a},l[e]=[],!g.autoCleanRelations&&a(f[0]).data("level")&&f.unshift({id:"undefined"});for(var m=0;m<f.length;m++)if(g.hierarchyLevel){if(0===(j=a(f[m]).data("level")||0))e=d,h=[];else if(j>i)h.push([e,i]),e=c(f[m-1].id);else if(j<i)for(var n=0;n<h.length;n++)h[n][1]===j&&(e=h[n][0]),h[n][1]>=i&&(h[n][1]=0);i=j,a.isArray(l[e])||(l[e]=[]),k=c(f[m].id),k&&l[e].push(k)}else(k=c(f[m].id))&&l[e].push(k);return l}},jQuery.fn.extend({tableDnD:a.tableDnD.build,tableDnDUpdate:a.tableDnD.updateTables,tableDnDSerialize:a.proxy(a.tableDnD.serialize,a.tableDnD),tableDnDSerializeAll:a.tableDnD.serializeTables,tableDnDData:a.proxy(a.tableDnD.tableData,a.tableDnD)})}(jQuery,window,window.document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),

/***/ 6:
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
 * Class ExportToSqlManagerExtension extends grid with exporting query to SQL Manager
 */

var ExportToSqlManagerExtension = function () {
  function ExportToSqlManagerExtension() {
    _classCallCheck(this, ExportToSqlManagerExtension);
  }

  _createClass(ExportToSqlManagerExtension, [{
    key: 'extend',

    /**
     * Extend grid
     *
     * @param {Grid} grid
     */
    value: function extend(grid) {
      var _this = this;

      grid.getHeaderContainer().on('click', '.js-common_show_query-grid-action', function () {
        return _this._onShowSqlQueryClick(grid);
      });
      grid.getHeaderContainer().on('click', '.js-common_export_sql_manager-grid-action', function () {
        return _this._onExportSqlManagerClick(grid);
      });
    }

    /**
     * Invoked when clicking on the "show sql query" toolbar button
     *
     * @param {Grid} grid
     *
     * @private
     */

  }, {
    key: '_onShowSqlQueryClick',
    value: function _onShowSqlQueryClick(grid) {
      var $sqlManagerForm = $('#' + grid.getId() + '_common_show_query_modal_form');
      this._fillExportForm($sqlManagerForm, grid);

      var $modal = $('#' + grid.getId() + '_grid_common_show_query_modal');
      $modal.modal('show');

      $modal.on('click', '.btn-sql-submit', function () {
        return $sqlManagerForm.submit();
      });
    }

    /**
     * Invoked when clicking on the "export to the sql query" toolbar button
     *
     * @param {Grid} grid
     *
     * @private
     */

  }, {
    key: '_onExportSqlManagerClick',
    value: function _onExportSqlManagerClick(grid) {
      var $sqlManagerForm = $('#' + grid.getId() + '_common_show_query_modal_form');

      this._fillExportForm($sqlManagerForm, grid);

      $sqlManagerForm.submit();
    }

    /**
     * Fill export form with SQL and it's name
     *
     * @param {jQuery} $sqlManagerForm
     * @param {Grid} grid
     *
     * @private
     */

  }, {
    key: '_fillExportForm',
    value: function _fillExportForm($sqlManagerForm, grid) {
      var query = grid.getContainer().find('.js-grid-table').data('query');

      $sqlManagerForm.find('textarea[name="sql"]').val(query);
      $sqlManagerForm.find('input[name="name"]').val(this._getNameFromBreadcrumb());
    }

    /**
     * Get export name from page's breadcrumb
     *
     * @return {String}
     *
     * @private
     */

  }, {
    key: '_getNameFromBreadcrumb',
    value: function _getNameFromBreadcrumb() {
      var $breadcrumbs = $('.header-toolbar').find('.breadcrumb-item');
      var name = '';

      $breadcrumbs.each(function (i, item) {
        var $breadcrumb = $(item);

        var breadcrumbTitle = 0 < $breadcrumb.find('a').length ? $breadcrumb.find('a').text() : $breadcrumb.text();

        if (0 < name.length) {
          name = name.concat(' > ');
        }

        name = name.concat(breadcrumbTitle);
      });

      return name;
    }
  }]);

  return ExportToSqlManagerExtension;
}();

exports.default = ExportToSqlManagerExtension;

/***/ }),

/***/ 7:
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

/**
 * Responsible for grid filters search and reset button availability when filter inputs changes.
 */
var FiltersSubmitButtonEnablerExtension = function () {
  function FiltersSubmitButtonEnablerExtension() {
    _classCallCheck(this, FiltersSubmitButtonEnablerExtension);
  }

  _createClass(FiltersSubmitButtonEnablerExtension, [{
    key: 'extend',


    /**
     * Extend grid
     *
     * @param {Grid} grid
     */
    value: function extend(grid) {
      var $filtersRow = grid.getContainer().find('.column-filters');
      $filtersRow.find('.grid-search-button').prop('disabled', true);

      $filtersRow.find('input, select').on('input dp.change', function () {
        $filtersRow.find('.grid-search-button').prop('disabled', false);
        $filtersRow.find('.js-grid-reset-button').prop('hidden', false);
      });
    }
  }]);

  return FiltersSubmitButtonEnablerExtension;
}();

exports.default = FiltersSubmitButtonEnablerExtension;

/***/ }),

/***/ 8:
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
 * Class BulkActionSelectCheckboxExtension
 */

var BulkActionCheckboxExtension = function () {
  function BulkActionCheckboxExtension() {
    _classCallCheck(this, BulkActionCheckboxExtension);
  }

  _createClass(BulkActionCheckboxExtension, [{
    key: 'extend',

    /**
     * Extend grid with bulk action checkboxes handling functionality
     *
     * @param {Grid} grid
     */
    value: function extend(grid) {
      this._handleBulkActionCheckboxSelect(grid);
      this._handleBulkActionSelectAllCheckbox(grid);
    }

    /**
     * Handles "Select all" button in the grid
     *
     * @param {Grid} grid
     *
     * @private
     */

  }, {
    key: '_handleBulkActionSelectAllCheckbox',
    value: function _handleBulkActionSelectAllCheckbox(grid) {
      var _this = this;

      grid.getContainer().on('change', '.js-bulk-action-select-all', function (e) {
        var $checkbox = $(e.currentTarget);

        var isChecked = $checkbox.is(':checked');
        if (isChecked) {
          _this._enableBulkActionsBtn(grid);
        } else {
          _this._disableBulkActionsBtn(grid);
        }

        grid.getContainer().find('.js-bulk-action-checkbox').prop('checked', isChecked);
      });
    }

    /**
     * Handles each bulk action checkbox select in the grid
     *
     * @param {Grid} grid
     *
     * @private
     */

  }, {
    key: '_handleBulkActionCheckboxSelect',
    value: function _handleBulkActionCheckboxSelect(grid) {
      var _this2 = this;

      grid.getContainer().on('change', '.js-bulk-action-checkbox', function () {
        var checkedRowsCount = grid.getContainer().find('.js-bulk-action-checkbox:checked').length;

        if (checkedRowsCount > 0) {
          _this2._enableBulkActionsBtn(grid);
        } else {
          _this2._disableBulkActionsBtn(grid);
        }
      });
    }

    /**
     * Enable bulk actions button
     *
     * @param {Grid} grid
     *
     * @private
     */

  }, {
    key: '_enableBulkActionsBtn',
    value: function _enableBulkActionsBtn(grid) {
      grid.getContainer().find('.js-bulk-actions-btn').prop('disabled', false);
    }

    /**
     * Disable bulk actions button
     *
     * @param {Grid} grid
     *
     * @private
     */

  }, {
    key: '_disableBulkActionsBtn',
    value: function _disableBulkActionsBtn(grid) {
      grid.getContainer().find('.js-bulk-actions-btn').prop('disabled', true);
    }
  }]);

  return BulkActionCheckboxExtension;
}();

exports.default = BulkActionCheckboxExtension;

/***/ }),

/***/ 9:
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
 * Handles submit of grid actions
 */

var SubmitBulkActionExtension = function () {
  function SubmitBulkActionExtension() {
    var _this = this;

    _classCallCheck(this, SubmitBulkActionExtension);

    return {
      extend: function extend(grid) {
        return _this.extend(grid);
      }
    };
  }

  /**
   * Extend grid with bulk action submitting
   *
   * @param {Grid} grid
   */


  _createClass(SubmitBulkActionExtension, [{
    key: 'extend',
    value: function extend(grid) {
      var _this2 = this;

      grid.getContainer().on('click', '.js-bulk-action-submit-btn', function (event) {
        _this2.submit(event, grid);
      });
    }

    /**
     * Handle bulk action submitting
     *
     * @param {Event} event
     * @param {Grid} grid
     *
     * @private
     */

  }, {
    key: 'submit',
    value: function submit(event, grid) {
      var $submitBtn = $(event.currentTarget);
      var confirmMessage = $submitBtn.data('confirm-message');

      if (typeof confirmMessage !== "undefined" && 0 < confirmMessage.length && !confirm(confirmMessage)) {
        return;
      }

      var $form = $('#' + grid.getId() + '_filter_form');

      $form.attr('action', $submitBtn.data('form-url'));
      $form.attr('method', $submitBtn.data('form-method'));
      $form.submit();
    }
  }]);

  return SubmitBulkActionExtension;
}();

exports.default = SubmitBulkActionExtension;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDM1OThmODA5NTYyZTVhMmYxMDI/NWI0MioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2dyaWQvZXh0ZW5zaW9uL2FjdGlvbi9yb3cvc3VibWl0LXJvdy1hY3Rpb24tZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC91dGlscy90YWJsZS1zb3J0aW5nLmpzPzE1ZDQqKioqKioqKioqKioqIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiPzBjYjgqKioqKioiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwL3V0aWxzL3Jlc2V0X3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2dyaWQvZ3JpZC5qcz84MTNhKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2dyaWQvZXh0ZW5zaW9uL2ZpbHRlcnMtcmVzZXQtZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL2pzL3BhZ2VzL2F0dHJpYnV0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2dyaWQvZXh0ZW5zaW9uL3NvcnRpbmctZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL2pzL2NvbXBvbmVudHMvZ3JpZC9leHRlbnNpb24vcG9zaXRpb24tZXh0ZW5zaW9uLmpzPzUyYjkqIiwid2VicGFjazovLy8uL2pzL2NvbXBvbmVudHMvZ3JpZC9leHRlbnNpb24vcmVsb2FkLWxpc3QtZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uL34vdGFibGVkbmQvZGlzdC9qcXVlcnkudGFibGVkbmQubWluLmpzPzMxMDgqKiIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2dyaWQvZXh0ZW5zaW9uL2V4cG9ydC10by1zcWwtbWFuYWdlci1leHRlbnNpb24uanM/ZWQyYSoqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2dyaWQvZXh0ZW5zaW9uL2ZpbHRlcnMtc3VibWl0LWJ1dHRvbi1lbmFibGVyLWV4dGVuc2lvbi5qcz8wMzc5KioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9ncmlkL2V4dGVuc2lvbi9idWxrLWFjdGlvbi1jaGVja2JveC1leHRlbnNpb24uanM/YjA5NyoqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2dyaWQvZXh0ZW5zaW9uL3N1Ym1pdC1idWxrLWFjdGlvbi1leHRlbnNpb24uanM/MWIxZioqKioqKioqKioqKiJdLCJuYW1lcyI6WyIkIiwid2luZG93IiwiU3VibWl0Um93QWN0aW9uRXh0ZW5zaW9uIiwiZ3JpZCIsImdldENvbnRhaW5lciIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRidXR0b24iLCJjdXJyZW50VGFyZ2V0IiwiY29uZmlybU1lc3NhZ2UiLCJkYXRhIiwibGVuZ3RoIiwiY29uZmlybSIsIm1ldGhvZCIsImlzR2V0T3JQb3N0TWV0aG9kIiwiaW5jbHVkZXMiLCIkZm9ybSIsImFwcGVuZFRvIiwiYXBwZW5kIiwic3VibWl0IiwiZ2xvYmFsIiwiVGFibGVTb3J0aW5nIiwidGFibGUiLCJzZWxlY3RvciIsImNvbHVtbnMiLCJmaW5kIiwiZSIsIiRjb2x1bW4iLCJkZWxlZ2F0ZVRhcmdldCIsIl9zb3J0QnlDb2x1bW4iLCJfZ2V0VG9nZ2xlZFNvcnREaXJlY3Rpb24iLCJjb2x1bW5OYW1lIiwiZGlyZWN0aW9uIiwiaXMiLCJFcnJvciIsImNvbHVtbiIsImxvY2F0aW9uIiwiX2dldFVybCIsImNvbE5hbWUiLCJwcmVmaXgiLCJ1cmwiLCJVUkwiLCJocmVmIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwidG9TdHJpbmciLCJpbml0IiwicmVzZXRTZWFyY2giLCJyZWRpcmVjdFVybCIsInBvc3QiLCJ0aGVuIiwiYXNzaWduIiwiR3JpZCIsImlkIiwiJGNvbnRhaW5lciIsImNsb3Nlc3QiLCJleHRlbnNpb24iLCJleHRlbmQiLCJGaWx0ZXJzUmVzZXRFeHRlbnNpb24iLCJhZGRFeHRlbnNpb24iLCJFeHBvcnRUb1NxbE1hbmFnZXJFeHRlbnNpb24iLCJSZWxvYWRMaXN0QWN0aW9uRXh0ZW5zaW9uIiwiU29ydGluZ0V4dGVuc2lvbiIsIlN1Ym1pdEJ1bGtFeHRlbnNpb24iLCJCdWxrQWN0aW9uQ2hlY2tib3hFeHRlbnNpb24iLCJGaWx0ZXJzU3VibWl0QnV0dG9uRW5hYmxlckV4dGVuc2lvbiIsIlBvc2l0aW9uRXh0ZW5zaW9uIiwiJHNvcnRhYmxlVGFibGUiLCJhdHRhY2giLCJfYWRkSWRzVG9HcmlkVGFibGVSb3dzIiwidGFibGVEbkQiLCJvbkRyYWdDbGFzcyIsImRyYWdIYW5kbGUiLCJvbkRyb3AiLCJyb3ciLCJfaGFuZGxlUG9zaXRpb25DaGFuZ2UiLCJob3ZlciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCIkcm93UG9zaXRpb25Db250YWluZXIiLCJnZXRJZCIsInVwZGF0ZVVybCIsInBhZ2luYXRpb25PZmZzZXQiLCJwYXJzZUludCIsInBvc2l0aW9ucyIsIl9nZXRSb3dzUG9zaXRpb25zIiwiX3VwZGF0ZVBvc2l0aW9uIiwidGFibGVEYXRhIiwiSlNPTiIsInBhcnNlIiwianNvbml6ZSIsInJvd3NEYXRhIiwicmVnZXgiLCJyb3dzTmIiLCJyb3dEYXRhIiwiaSIsImV4ZWMiLCJwdXNoIiwicm93SWQiLCJuZXdQb3NpdGlvbiIsIm9sZFBvc2l0aW9uIiwiZWFjaCIsImluZGV4IiwicG9zaXRpb25XcmFwcGVyIiwiJHBvc2l0aW9uV3JhcHBlciIsInBvc2l0aW9uIiwiYXR0ciIsInBvc2l0aW9uc05iIiwiUmVsb2FkTGlzdEV4dGVuc2lvbiIsImdldEhlYWRlckNvbnRhaW5lciIsInJlbG9hZCIsIl9vblNob3dTcWxRdWVyeUNsaWNrIiwiX29uRXhwb3J0U3FsTWFuYWdlckNsaWNrIiwiJHNxbE1hbmFnZXJGb3JtIiwiX2ZpbGxFeHBvcnRGb3JtIiwiJG1vZGFsIiwibW9kYWwiLCJxdWVyeSIsInZhbCIsIl9nZXROYW1lRnJvbUJyZWFkY3J1bWIiLCIkYnJlYWRjcnVtYnMiLCJuYW1lIiwiaXRlbSIsIiRicmVhZGNydW1iIiwiYnJlYWRjcnVtYlRpdGxlIiwidGV4dCIsImNvbmNhdCIsIiRmaWx0ZXJzUm93IiwicHJvcCIsIl9oYW5kbGVCdWxrQWN0aW9uQ2hlY2tib3hTZWxlY3QiLCJfaGFuZGxlQnVsa0FjdGlvblNlbGVjdEFsbENoZWNrYm94IiwiJGNoZWNrYm94IiwiaXNDaGVja2VkIiwiX2VuYWJsZUJ1bGtBY3Rpb25zQnRuIiwiX2Rpc2FibGVCdWxrQWN0aW9uc0J0biIsImNoZWNrZWRSb3dzQ291bnQiLCJTdWJtaXRCdWxrQWN0aW9uRXh0ZW5zaW9uIiwiJHN1Ym1pdEJ0biJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNoRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsSUFBTUEsSUFBSUMs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RUFBb0c7QUFDbEc7QUFDRDs7QUFFRCxVQUFNTyxRQUFRakIsRUFBRSxNQUFNRyxLQUFLK0UsS0FBTCxFQUFOLEdBQXFCLGNBQXZCLENBQWQ7O0FBRUFqRSxZQUFNMkYsSUFBTixDQUFXLFFBQVgsRUFBcUIrQixXQUFXaEksSUFBWCxDQUFnQixVQUFoQixDQUFyQjtBQUNBTSxZQUFNMkYsSUFBTixDQUFXLFFBQVgsRUFBcUIrQixXQUFXaEksSUFBWCxDQUFnQixhQUFoQixDQUFyQjtBQUNBTSxZQUFNRyxNQUFOO0FBQ0Q7Ozs7OztrQkF2Q2tCc0gseUIiLCJmaWxlIjoiYXR0cmlidXRlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzM5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMzU5OGY4MDk1NjJlNWEyZjEwMiIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgMzIgMzYgMzkgNDggNTEiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG5jb25zdCAkID0gd2luZG93LiQ7XG5cbi8qKlxuICogQ2xhc3MgU3VibWl0Um93QWN0aW9uRXh0ZW5zaW9uIGhhbmRsZXMgc3VibWl0dGluZyBvZiByb3cgYWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1Ym1pdFJvd0FjdGlvbkV4dGVuc2lvbiB7XG4gIC8qKlxuICAgKiBFeHRlbmQgZ3JpZFxuICAgKlxuICAgKiBAcGFyYW0ge0dyaWR9IGdyaWRcbiAgICovXG4gIGV4dGVuZChncmlkKSB7XG4gICAgZ3JpZC5nZXRDb250YWluZXIoKS5vbignY2xpY2snLCAnLmpzLXN1Ym1pdC1yb3ctYWN0aW9uJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCAkYnV0dG9uID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIGNvbnN0IGNvbmZpcm1NZXNzYWdlID0gJGJ1dHRvbi5kYXRhKCdjb25maXJtLW1lc3NhZ2UnKTtcblxuICAgICAgaWYgKGNvbmZpcm1NZXNzYWdlLmxlbmd0aCAmJiAhY29uZmlybShjb25maXJtTWVzc2FnZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXRob2QgPSAkYnV0dG9uLmRhdGEoJ21ldGhvZCcpO1xuICAgICAgY29uc3QgaXNHZXRPclBvc3RNZXRob2QgPSBbJ0dFVCcsICdQT1NUJ10uaW5jbHVkZXMobWV0aG9kKTtcblxuICAgICAgY29uc3QgJGZvcm0gPSAkKCc8Zm9ybT4nLCB7XG4gICAgICAgICdhY3Rpb24nOiAkYnV0dG9uLmRhdGEoJ3VybCcpLFxuICAgICAgICAnbWV0aG9kJzogaXNHZXRPclBvc3RNZXRob2QgPyBtZXRob2QgOiAnUE9TVCcsXG4gICAgICB9KS5hcHBlbmRUbygnYm9keScpO1xuXG4gICAgICBpZiAoIWlzR2V0T3JQb3N0TWV0aG9kKSB7XG4gICAgICAgICRmb3JtLmFwcGVuZCgkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICd0eXBlJzogJ19oaWRkZW4nLFxuICAgICAgICAgICduYW1lJzogJ19tZXRob2QnLFxuICAgICAgICAgICd2YWx1ZSc6IG1ldGhvZFxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgICRmb3JtLnN1Ym1pdCgpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jb21wb25lbnRzL2dyaWQvZXh0ZW5zaW9uL2FjdGlvbi9yb3cvc3VibWl0LXJvdy1hY3Rpb24tZXh0ZW5zaW9uLmpzIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuY29uc3QgJCA9IGdsb2JhbC4kO1xuXG4vKipcbiAqIE1ha2VzIGEgdGFibGUgc29ydGFibGUgYnkgY29sdW1ucy5cbiAqIFRoaXMgZm9yY2VzIGEgcGFnZSByZWxvYWQgd2l0aCBtb3JlIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gKi9cbmNsYXNzIFRhYmxlU29ydGluZyB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSB0YWJsZVxuICAgKi9cbiAgY29uc3RydWN0b3IodGFibGUpIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gJy5wcy1zb3J0YWJsZS1jb2x1bW4nO1xuICAgIHRoaXMuY29sdW1ucyA9ICQodGFibGUpLmZpbmQodGhpcy5zZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgdGhlIGxpc3RlbmVyc1xuICAgKi9cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuY29sdW1ucy5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgJGNvbHVtbiA9ICQoZS5kZWxlZ2F0ZVRhcmdldCk7XG4gICAgICB0aGlzLl9zb3J0QnlDb2x1bW4oJGNvbHVtbiwgdGhpcy5fZ2V0VG9nZ2xlZFNvcnREaXJlY3Rpb24oJGNvbHVtbikpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvcnQgdXNpbmcgYSBjb2x1bW4gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29sdW1uTmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyZWN0aW9uIFwiYXNjXCIgb3IgXCJkZXNjXCJcbiAgICovXG4gIHNvcnRCeShjb2x1bW5OYW1lLCBkaXJlY3Rpb24pIHtcbiAgICBjb25zdCAkY29sdW1uID0gdGhpcy5jb2x1bW5zLmlzKGBbZGF0YS1zb3J0LWNvbC1uYW1lPVwiJHtjb2x1bW5OYW1lfVwiXWApO1xuICAgIGlmICghJGNvbHVtbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc29ydCBieSBcIiR7Y29sdW1uTmFtZX1cIjogaW52YWxpZCBjb2x1bW5gKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zb3J0QnlDb2x1bW4oJGNvbHVtbiwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0IHVzaW5nIGEgY29sdW1uIGVsZW1lbnRcbiAgICogQHBhcmFtIHtqUXVlcnl9IGNvbHVtblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyZWN0aW9uIFwiYXNjXCIgb3IgXCJkZXNjXCJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zb3J0QnlDb2x1bW4oY29sdW1uLCBkaXJlY3Rpb24pIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLl9nZXRVcmwoY29sdW1uLmRhdGEoJ3NvcnRDb2xOYW1lJyksIChkaXJlY3Rpb24gPT09ICdkZXNjJykgPyAnZGVzYycgOiAnYXNjJywgY29sdW1uLmRhdGEoJ3NvcnRQcmVmaXgnKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW52ZXJ0ZWQgZGlyZWN0aW9uIHRvIHNvcnQgYWNjb3JkaW5nIHRvIHRoZSBjb2x1bW4ncyBjdXJyZW50IG9uZVxuICAgKiBAcGFyYW0ge2pRdWVyeX0gY29sdW1uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9nZXRUb2dnbGVkU29ydERpcmVjdGlvbihjb2x1bW4pIHtcbiAgICByZXR1cm4gY29sdW1uLmRhdGEoJ3NvcnREaXJlY3Rpb24nKSA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB1cmwgZm9yIHRoZSBzb3J0ZWQgdGFibGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbE5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9nZXRVcmwoY29sTmFtZSwgZGlyZWN0aW9uLCBwcmVmaXgpIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuXG4gICAgaWYgKHByZWZpeCkge1xuICAgICAgcGFyYW1zLnNldChwcmVmaXgrJ1tvcmRlckJ5XScsIGNvbE5hbWUpO1xuICAgICAgcGFyYW1zLnNldChwcmVmaXgrJ1tzb3J0T3JkZXJdJywgZGlyZWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zLnNldCgnb3JkZXJCeScsIGNvbE5hbWUpO1xuICAgICAgcGFyYW1zLnNldCgnc29ydE9yZGVyJywgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsLnRvU3RyaW5nKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVTb3J0aW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwL3V0aWxzL3RhYmxlLXNvcnRpbmcuanMiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gd2luZG93W1wialF1ZXJ5XCJdOyB9KCkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDYgMTUgMTkgMzQgMzUgNDEgNDIgNDgiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG4vKipcbiAqIFNlbmQgYSBQb3N0IFJlcXVlc3QgdG8gcmVzZXQgc2VhcmNoIEFjdGlvbi5cbiAqL1xuXG5jb25zdCAkID0gZ2xvYmFsLiQ7XG5cbmNvbnN0IGluaXQgPSBmdW5jdGlvbiByZXNldFNlYXJjaCh1cmwsIHJlZGlyZWN0VXJsKSB7XG4gICAgJC5wb3N0KHVybCkudGhlbigoKSA9PiB3aW5kb3cubG9jYXRpb24uYXNzaWduKHJlZGlyZWN0VXJsKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwL3V0aWxzL3Jlc2V0X3NlYXJjaC5qcyIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5cbmNvbnN0ICQgPSB3aW5kb3cuJDtcblxuLyoqXG4gKiBDbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgR3JpZCBldmVudHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gIC8qKlxuICAgKiBHcmlkIGlkXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgKi9cbiAgY29uc3RydWN0b3IoaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy4kY29udGFpbmVyID0gJCgnIycgKyB0aGlzLmlkICsgJ19ncmlkJyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGdyaWQgaWRcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBncmlkIGNvbnRhaW5lclxuICAgKlxuICAgKiBAcmV0dXJucyB7alF1ZXJ5fVxuICAgKi9cbiAgZ2V0Q29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLiRjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGdyaWQgaGVhZGVyIGNvbnRhaW5lclxuICAgKlxuICAgKiBAcmV0dXJucyB7alF1ZXJ5fVxuICAgKi9cbiAgZ2V0SGVhZGVyQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLiRjb250YWluZXIuY2xvc2VzdCgnLmpzLWdyaWQtcGFuZWwnKS5maW5kKCcuanMtZ3JpZC1oZWFkZXInKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRlbmQgZ3JpZCB3aXRoIGV4dGVybmFsIGV4dGVuc2lvbnNcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV4dGVuc2lvblxuICAgKi9cbiAgYWRkRXh0ZW5zaW9uKGV4dGVuc2lvbikge1xuICAgIGV4dGVuc2lvbi5leHRlbmQodGhpcyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmpzIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuaW1wb3J0IHJlc2V0U2VhcmNoIGZyb20gJy4uLy4uLy4uL2FwcC91dGlscy9yZXNldF9zZWFyY2gnO1xuXG5jb25zdCAkID0gd2luZG93LiQ7XG5cbi8qKlxuICogQ2xhc3MgRmlsdGVyc1Jlc2V0RXh0ZW5zaW9uIGV4dGVuZHMgZ3JpZCB3aXRoIGZpbHRlcnMgcmVzZXR0aW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlcnNSZXNldEV4dGVuc2lvbiB7XG5cbiAgLyoqXG4gICAqIEV4dGVuZCBncmlkXG4gICAqXG4gICAqIEBwYXJhbSB7R3JpZH0gZ3JpZFxuICAgKi9cbiAgZXh0ZW5kKGdyaWQpIHtcbiAgICBncmlkLmdldENvbnRhaW5lcigpLm9uKCdjbGljaycsICcuanMtcmVzZXQtc2VhcmNoJywgKGV2ZW50KSA9PiB7XG4gICAgICByZXNldFNlYXJjaCgkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3VybCcpLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3JlZGlyZWN0JykpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jb21wb25lbnRzL2dyaWQvZXh0ZW5zaW9uL2ZpbHRlcnMtcmVzZXQtZXh0ZW5zaW9uLmpzIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuaW1wb3J0IEdyaWQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ncmlkL2dyaWQnO1xuaW1wb3J0IFNvcnRpbmdFeHRlbnNpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ncmlkL2V4dGVuc2lvbi9zb3J0aW5nLWV4dGVuc2lvbic7XG5pbXBvcnQgRmlsdGVyc1Jlc2V0RXh0ZW5zaW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZ3JpZC9leHRlbnNpb24vZmlsdGVycy1yZXNldC1leHRlbnNpb24nO1xuaW1wb3J0IFJlbG9hZExpc3RBY3Rpb25FeHRlbnNpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ncmlkL2V4dGVuc2lvbi9yZWxvYWQtbGlzdC1leHRlbnNpb24nO1xuaW1wb3J0IFN1Ym1pdFJvd0FjdGlvbkV4dGVuc2lvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2dyaWQvZXh0ZW5zaW9uL2FjdGlvbi9yb3cvc3VibWl0LXJvdy1hY3Rpb24tZXh0ZW5zaW9uJztcbmltcG9ydCBTdWJtaXRCdWxrRXh0ZW5zaW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZ3JpZC9leHRlbnNpb24vc3VibWl0LWJ1bGstYWN0aW9uLWV4dGVuc2lvbic7XG5pbXBvcnQgQnVsa0FjdGlvbkNoZWNrYm94RXh0ZW5zaW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZ3JpZC9leHRlbnNpb24vYnVsay1hY3Rpb24tY2hlY2tib3gtZXh0ZW5zaW9uJztcbmltcG9ydCBFeHBvcnRUb1NxbE1hbmFnZXJFeHRlbnNpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ncmlkL2V4dGVuc2lvbi9leHBvcnQtdG8tc3FsLW1hbmFnZXItZXh0ZW5zaW9uJztcbmltcG9ydCBGaWx0ZXJzU3VibWl0QnV0dG9uRW5hYmxlckV4dGVuc2lvblxuICBmcm9tICcuLi8uLi9jb21wb25lbnRzL2dyaWQvZXh0ZW5zaW9uL2ZpbHRlcnMtc3VibWl0LWJ1dHRvbi1lbmFibGVyLWV4dGVuc2lvbic7XG5pbXBvcnQgUG9zaXRpb25FeHRlbnNpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ncmlkL2V4dGVuc2lvbi9wb3NpdGlvbi1leHRlbnNpb24nO1xuXG5jb25zdCAkID0gd2luZG93LiQ7XG5cbiQoKCkgPT4ge1xuICBjb25zdCBncmlkID0gbmV3IEdyaWQoJ2F0dHJpYnV0ZScpO1xuXG4gIGdyaWQuYWRkRXh0ZW5zaW9uKG5ldyBFeHBvcnRUb1NxbE1hbmFnZXJFeHRlbnNpb24oKSk7XG4gIGdyaWQuYWRkRXh0ZW5zaW9uKG5ldyBSZWxvYWRMaXN0QWN0aW9uRXh0ZW5zaW9uKCkpO1xuICBncmlkLmFkZEV4dGVuc2lvbihuZXcgU29ydGluZ0V4dGVuc2lvbigpKTtcbiAgZ3JpZC5hZGRFeHRlbnNpb24obmV3IEZpbHRlcnNSZXNldEV4dGVuc2lvbigpKTtcbiAgZ3JpZC5hZGRFeHRlbnNpb24obmV3IFN1Ym1pdFJvd0FjdGlvbkV4dGVuc2lvbigpKTtcbiAgZ3JpZC5hZGRFeHRlbnNpb24obmV3IFN1Ym1pdEJ1bGtFeHRlbnNpb24oKSk7XG4gIGdyaWQuYWRkRXh0ZW5zaW9uKG5ldyBCdWxrQWN0aW9uQ2hlY2tib3hFeHRlbnNpb24oKSk7XG4gIGdyaWQuYWRkRXh0ZW5zaW9uKG5ldyBGaWx0ZXJzU3VibWl0QnV0dG9uRW5hYmxlckV4dGVuc2lvbigpKTtcbiAgZ3JpZC5hZGRFeHRlbnNpb24obmV3IFBvc2l0aW9uRXh0ZW5zaW9uKCkpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9wYWdlcy9hdHRyaWJ1dGUvaW5kZXguanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG5pbXBvcnQgVGFibGVTb3J0aW5nIGZyb20gJy4uLy4uLy4uL2FwcC91dGlscy90YWJsZS1zb3J0aW5nJztcblxuLyoqXG4gKiBDbGFzcyBSZWxvYWRMaXN0RXh0ZW5zaW9uIGV4dGVuZHMgZ3JpZCB3aXRoIFwiTGlzdCByZWxvYWRcIiBhY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydGluZ0V4dGVuc2lvbiB7XG4gIC8qKlxuICAgKiBFeHRlbmQgZ3JpZFxuICAgKlxuICAgKiBAcGFyYW0ge0dyaWR9IGdyaWRcbiAgICovXG4gIGV4dGVuZChncmlkKSB7XG4gICAgY29uc3QgJHNvcnRhYmxlVGFibGUgPSBncmlkLmdldENvbnRhaW5lcigpLmZpbmQoJ3RhYmxlLnRhYmxlJyk7XG5cbiAgICBuZXcgVGFibGVTb3J0aW5nKCRzb3J0YWJsZVRhYmxlKS5hdHRhY2goKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY29tcG9uZW50cy9ncmlkL2V4dGVuc2lvbi9zb3J0aW5nLWV4dGVuc2lvbi5qcyIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5cbmltcG9ydCB0YWJsZURuRCBmcm9tIFwidGFibGVkbmQvZGlzdC9qcXVlcnkudGFibGVkbmQubWluXCI7XG5cbmNvbnN0ICQgPSB3aW5kb3cuJDtcblxuLyoqXG4gKiBDbGFzcyBQb3NpdGlvbkV4dGVuc2lvbiBleHRlbmRzIEdyaWQgd2l0aCByZW9yZGVyYWJsZSBwb3NpdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb25FeHRlbnNpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXh0ZW5kOiAoZ3JpZCkgPT4gdGhpcy5leHRlbmQoZ3JpZCksXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4dGVuZCBncmlkXG4gICAqXG4gICAqIEBwYXJhbSB7R3JpZH0gZ3JpZFxuICAgKi9cbiAgZXh0ZW5kKGdyaWQpIHtcbiAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgIHRoaXMuX2FkZElkc1RvR3JpZFRhYmxlUm93cygpO1xuICAgIGdyaWQuZ2V0Q29udGFpbmVyKCkuZmluZCgnLmpzLWdyaWQtdGFibGUnKS50YWJsZURuRCh7XG4gICAgICBvbkRyYWdDbGFzczogJ3Bvc2l0aW9uLXJvdy13aGlsZS1kcmFnJyxcbiAgICAgIGRyYWdIYW5kbGU6ICcuanMtZHJhZy1oYW5kbGUnLFxuICAgICAgb25Ecm9wOiAodGFibGUsIHJvdykgPT4gdGhpcy5faGFuZGxlUG9zaXRpb25DaGFuZ2Uocm93KSxcbiAgICB9KTtcbiAgICBncmlkLmdldENvbnRhaW5lcigpLmZpbmQoJy5qcy1kcmFnLWhhbmRsZScpLmhvdmVyKFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5hZGRDbGFzcygnaG92ZXInKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZUNsYXNzKCdob3ZlcicpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBwb3NpdGlvbiBpcyBjaGFuZ2VkIGhhbmRsZSB1cGRhdGVcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm93XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaGFuZGxlUG9zaXRpb25DaGFuZ2Uocm93KSB7XG4gICAgY29uc3QgJHJvd1Bvc2l0aW9uQ29udGFpbmVyID0gJChyb3cpLmZpbmQoJy5qcy0nICsgdGhpcy5ncmlkLmdldElkKCkgKyAnLXBvc2l0aW9uOmZpcnN0Jyk7XG4gICAgY29uc3QgdXBkYXRlVXJsID0gJHJvd1Bvc2l0aW9uQ29udGFpbmVyLmRhdGEoJ3VwZGF0ZS11cmwnKTtcbiAgICBjb25zdCBtZXRob2QgPSAkcm93UG9zaXRpb25Db250YWluZXIuZGF0YSgndXBkYXRlLW1ldGhvZCcpO1xuICAgIGNvbnN0IHBhZ2luYXRpb25PZmZzZXQgPSBwYXJzZUludCgkcm93UG9zaXRpb25Db250YWluZXIuZGF0YSgncGFnaW5hdGlvbi1vZmZzZXQnKSwgMTApO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuX2dldFJvd3NQb3NpdGlvbnMocGFnaW5hdGlvbk9mZnNldCk7XG4gICAgY29uc3QgcGFyYW1zID0ge3Bvc2l0aW9uc307XG5cbiAgICB0aGlzLl91cGRhdGVQb3NpdGlvbih1cGRhdGVVcmwsIHBhcmFtcywgbWV0aG9kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHRhYmxlIHBvc2l0aW9uc1xuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2V0Um93c1Bvc2l0aW9ucyhwYWdpbmF0aW9uT2Zmc2V0KSB7XG4gICAgY29uc3QgdGFibGVEYXRhID0gSlNPTi5wYXJzZSgkLnRhYmxlRG5ELmpzb25pemUoKSk7XG4gICAgY29uc3Qgcm93c0RhdGEgPSB0YWJsZURhdGFbdGhpcy5ncmlkLmdldElkKCkrJ19ncmlkX3RhYmxlJ107XG4gICAgY29uc3QgcmVnZXggPSAvXnJvd18oXFxkKylfKFxcZCspJC87XG5cbiAgICBjb25zdCByb3dzTmIgPSByb3dzRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW107XG4gICAgbGV0IHJvd0RhdGEsIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IHJvd3NOYjsgKytpKSB7XG4gICAgICByb3dEYXRhID0gcmVnZXguZXhlYyhyb3dzRGF0YVtpXSk7XG4gICAgICBwb3NpdGlvbnMucHVzaCh7XG4gICAgICAgIHJvd0lkOiByb3dEYXRhWzFdLFxuICAgICAgICBuZXdQb3NpdGlvbjogcGFnaW5hdGlvbk9mZnNldCArIGksXG4gICAgICAgIG9sZFBvc2l0aW9uOiBwYXJzZUludChyb3dEYXRhWzJdLCAxMCksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBJRCdzIHRvIEdyaWQgdGFibGUgcm93cyB0byBtYWtlIHRhYmxlRG5ELm9uRHJvcCgpIGZ1bmN0aW9uIHdvcmsuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYWRkSWRzVG9HcmlkVGFibGVSb3dzKCkge1xuICAgIHRoaXMuZ3JpZC5nZXRDb250YWluZXIoKVxuICAgICAgLmZpbmQoJy5qcy1ncmlkLXRhYmxlIC5qcy0nICsgdGhpcy5ncmlkLmdldElkKCkgKyAnLXBvc2l0aW9uJylcbiAgICAgIC5lYWNoKChpbmRleCwgcG9zaXRpb25XcmFwcGVyKSA9PiB7XG4gICAgICAgIGNvbnN0ICRwb3NpdGlvbldyYXBwZXIgPSAkKHBvc2l0aW9uV3JhcHBlcik7XG4gICAgICAgIGNvbnN0IHJvd0lkID0gJHBvc2l0aW9uV3JhcHBlci5kYXRhKCdpZCcpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICRwb3NpdGlvbldyYXBwZXIuZGF0YSgncG9zaXRpb24nKTtcbiAgICAgICAgY29uc3QgaWQgPSBgcm93XyR7cm93SWR9XyR7cG9zaXRpb259YDtcbiAgICAgICAgJHBvc2l0aW9uV3JhcHBlci5jbG9zZXN0KCd0cicpLmF0dHIoJ2lkJywgaWQpO1xuICAgICAgICAkcG9zaXRpb25XcmFwcGVyLmNsb3Nlc3QoJ3RkJykuYWRkQ2xhc3MoJ2pzLWRyYWctaGFuZGxlJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzIHJvd3MgcG9zaXRpb25zIHVwZGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VwZGF0ZVBvc2l0aW9uKHVybCwgcGFyYW1zLCBtZXRob2QpIHtcbiAgICBjb25zdCBpc0dldE9yUG9zdE1ldGhvZCA9IFsnR0VUJywgJ1BPU1QnXS5pbmNsdWRlcyhtZXRob2QpO1xuXG4gICAgY29uc3QgJGZvcm0gPSAkKCc8Zm9ybT4nLCB7XG4gICAgICAnYWN0aW9uJzogdXJsLFxuICAgICAgJ21ldGhvZCc6IGlzR2V0T3JQb3N0TWV0aG9kID8gbWV0aG9kIDogJ1BPU1QnLFxuICAgIH0pLmFwcGVuZFRvKCdib2R5Jyk7XG5cbiAgICBjb25zdCBwb3NpdGlvbnNOYiA9IHBhcmFtcy5wb3NpdGlvbnMubGVuZ3RoO1xuICAgIGxldCBwb3NpdGlvbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9uc05iOyArK2kpIHtcbiAgICAgIHBvc2l0aW9uID0gcGFyYW1zLnBvc2l0aW9uc1tpXTtcbiAgICAgICRmb3JtLmFwcGVuZChcbiAgICAgICAgJCgnPGlucHV0PicsIHtcbiAgICAgICAgICAndHlwZSc6ICdoaWRkZW4nLFxuICAgICAgICAgICduYW1lJzogJ3Bvc2l0aW9uc1snK2krJ11bcm93SWRdJyxcbiAgICAgICAgICAndmFsdWUnOiBwb3NpdGlvbi5yb3dJZFxuICAgICAgICB9KSxcbiAgICAgICAgJCgnPGlucHV0PicsIHtcbiAgICAgICAgICAndHlwZSc6ICdoaWRkZW4nLFxuICAgICAgICAgICduYW1lJzogJ3Bvc2l0aW9uc1snK2krJ11bb2xkUG9zaXRpb25dJyxcbiAgICAgICAgICAndmFsdWUnOiBwb3NpdGlvbi5vbGRQb3NpdGlvblxuICAgICAgICB9KSxcbiAgICAgICAgJCgnPGlucHV0PicsIHtcbiAgICAgICAgICAndHlwZSc6ICdoaWRkZW4nLFxuICAgICAgICAgICduYW1lJzogJ3Bvc2l0aW9uc1snK2krJ11bbmV3UG9zaXRpb25dJyxcbiAgICAgICAgICAndmFsdWUnOiBwb3NpdGlvbi5uZXdQb3NpdGlvblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIF9tZXRob2QgcGFyYW0gaXMgdXNlZCBieSBTeW1mb255IHRvIHNpbXVsYXRlIERFTEVURSBhbmQgUFVUIG1ldGhvZHNcbiAgICBpZiAoIWlzR2V0T3JQb3N0TWV0aG9kKSB7XG4gICAgICAkZm9ybS5hcHBlbmQoJCgnPGlucHV0PicsIHtcbiAgICAgICAgJ3R5cGUnOiAnaGlkZGVuJyxcbiAgICAgICAgJ25hbWUnOiAnX21ldGhvZCcsXG4gICAgICAgICd2YWx1ZSc6IG1ldGhvZCxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAkZm9ybS5zdWJtaXQoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY29tcG9uZW50cy9ncmlkL2V4dGVuc2lvbi9wb3NpdGlvbi1leHRlbnNpb24uanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG4vKipcbiAqIENsYXNzIFJlbG9hZExpc3RFeHRlbnNpb24gZXh0ZW5kcyBncmlkIHdpdGggXCJMaXN0IHJlbG9hZFwiIGFjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxvYWRMaXN0RXh0ZW5zaW9uIHtcbiAgLyoqXG4gICAqIEV4dGVuZCBncmlkXG4gICAqXG4gICAqIEBwYXJhbSB7R3JpZH0gZ3JpZFxuICAgKi9cbiAgZXh0ZW5kKGdyaWQpIHtcbiAgICBncmlkLmdldEhlYWRlckNvbnRhaW5lcigpLm9uKCdjbGljaycsICcuanMtY29tbW9uX3JlZnJlc2hfbGlzdC1ncmlkLWFjdGlvbicsICgpID0+IHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jb21wb25lbnRzL2dyaWQvZXh0ZW5zaW9uL3JlbG9hZC1saXN0LWV4dGVuc2lvbi5qcyIsIi8qISBqcXVlcnkudGFibGVkbmQuanMgMzAtMTItMjAxNyAqL1xuIWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPVwidG91Y2hzdGFydCBtb3VzZWRvd25cIixmPVwidG91Y2htb3ZlIG1vdXNlbW92ZVwiLGc9XCJ0b3VjaGVuZCBtb3VzZXVwXCI7YShjKS5yZWFkeShmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSl7Zm9yKHZhciBiPXt9LGM9YS5tYXRjaCgvKFteOzpdKykvZyl8fFtdO2MubGVuZ3RoOyliW2Muc2hpZnQoKV09Yy5zaGlmdCgpLnRyaW0oKTtyZXR1cm4gYn1hKFwidGFibGVcIikuZWFjaChmdW5jdGlvbigpe1wiZG5kXCI9PT1hKHRoaXMpLmRhdGEoXCJ0YWJsZVwiKSYmYSh0aGlzKS50YWJsZURuRCh7b25EcmFnU3R5bGU6YSh0aGlzKS5kYXRhKFwib25kcmFnc3R5bGVcIikmJmIoYSh0aGlzKS5kYXRhKFwib25kcmFnc3R5bGVcIikpfHxudWxsLG9uRHJvcFN0eWxlOmEodGhpcykuZGF0YShcIm9uZHJvcHN0eWxlXCIpJiZiKGEodGhpcykuZGF0YShcIm9uZHJvcHN0eWxlXCIpKXx8bnVsbCxvbkRyYWdDbGFzczphKHRoaXMpLmRhdGEoXCJvbmRyYWdjbGFzc1wiKT09PWQmJlwidERuRF93aGlsZURyYWdcInx8YSh0aGlzKS5kYXRhKFwib25kcmFnY2xhc3NcIiksb25Ecm9wOmEodGhpcykuZGF0YShcIm9uZHJvcFwiKSYmbmV3IEZ1bmN0aW9uKFwidGFibGVcIixcInJvd1wiLGEodGhpcykuZGF0YShcIm9uZHJvcFwiKSksb25EcmFnU3RhcnQ6YSh0aGlzKS5kYXRhKFwib25kcmFnc3RhcnRcIikmJm5ldyBGdW5jdGlvbihcInRhYmxlXCIsXCJyb3dcIixhKHRoaXMpLmRhdGEoXCJvbmRyYWdzdGFydFwiKSksb25EcmFnU3RvcDphKHRoaXMpLmRhdGEoXCJvbmRyYWdzdG9wXCIpJiZuZXcgRnVuY3Rpb24oXCJ0YWJsZVwiLFwicm93XCIsYSh0aGlzKS5kYXRhKFwib25kcmFnc3RvcFwiKSksc2Nyb2xsQW1vdW50OmEodGhpcykuZGF0YShcInNjcm9sbGFtb3VudFwiKXx8NSxzZW5zaXRpdml0eTphKHRoaXMpLmRhdGEoXCJzZW5zaXRpdml0eVwiKXx8MTAsaGllcmFyY2h5TGV2ZWw6YSh0aGlzKS5kYXRhKFwiaGllcmFyY2h5bGV2ZWxcIil8fDAsaW5kZW50QXJ0aWZhY3Q6YSh0aGlzKS5kYXRhKFwiaW5kZW50YXJ0aWZhY3RcIil8fCc8ZGl2IGNsYXNzPVwiaW5kZW50XCI+Jm5ic3A7PC9kaXY+JyxhdXRvV2lkdGhBZGp1c3Q6YSh0aGlzKS5kYXRhKFwiYXV0b3dpZHRoYWRqdXN0XCIpfHwhMCxhdXRvQ2xlYW5SZWxhdGlvbnM6YSh0aGlzKS5kYXRhKFwiYXV0b2NsZWFucmVsYXRpb25zXCIpfHwhMCxqc29uUHJldGlmeVNlcGFyYXRvcjphKHRoaXMpLmRhdGEoXCJqc29ucHJldGlmeXNlcGFyYXRvclwiKXx8XCJcXHRcIixzZXJpYWxpemVSZWdleHA6YSh0aGlzKS5kYXRhKFwic2VyaWFsaXplcmVnZXhwXCIpJiZuZXcgUmVnRXhwKGEodGhpcykuZGF0YShcInNlcmlhbGl6ZXJlZ2V4cFwiKSl8fC9bXlxcLV0qJC8sc2VyaWFsaXplUGFyYW1OYW1lOmEodGhpcykuZGF0YShcInNlcmlhbGl6ZXBhcmFtbmFtZVwiKXx8ITEsZHJhZ0hhbmRsZTphKHRoaXMpLmRhdGEoXCJkcmFnaGFuZGxlXCIpfHxudWxsfSl9KX0pLGpRdWVyeS50YWJsZURuRD17Y3VycmVudFRhYmxlOm51bGwsZHJhZ09iamVjdDpudWxsLG1vdXNlT2Zmc2V0Om51bGwsb2xkWDowLG9sZFk6MCxidWlsZDpmdW5jdGlvbihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dGhpcy50YWJsZURuRENvbmZpZz1hLmV4dGVuZCh7b25EcmFnU3R5bGU6bnVsbCxvbkRyb3BTdHlsZTpudWxsLG9uRHJhZ0NsYXNzOlwidERuRF93aGlsZURyYWdcIixvbkRyb3A6bnVsbCxvbkRyYWdTdGFydDpudWxsLG9uRHJhZ1N0b3A6bnVsbCxzY3JvbGxBbW91bnQ6NSxzZW5zaXRpdml0eToxMCxoaWVyYXJjaHlMZXZlbDowLGluZGVudEFydGlmYWN0Oic8ZGl2IGNsYXNzPVwiaW5kZW50XCI+Jm5ic3A7PC9kaXY+JyxhdXRvV2lkdGhBZGp1c3Q6ITAsYXV0b0NsZWFuUmVsYXRpb25zOiEwLGpzb25QcmV0aWZ5U2VwYXJhdG9yOlwiXFx0XCIsc2VyaWFsaXplUmVnZXhwOi9bXlxcLV0qJC8sc2VyaWFsaXplUGFyYW1OYW1lOiExLGRyYWdIYW5kbGU6bnVsbH0sYnx8e30pLGEudGFibGVEbkQubWFrZURyYWdnYWJsZSh0aGlzKSx0aGlzLnRhYmxlRG5EQ29uZmlnLmhpZXJhcmNoeUxldmVsJiZhLnRhYmxlRG5ELm1ha2VJbmRlbnRlZCh0aGlzKX0pLHRoaXN9LG1ha2VJbmRlbnRlZDpmdW5jdGlvbihiKXt2YXIgYyxkLGU9Yi50YWJsZURuRENvbmZpZyxmPWIucm93cyxnPWEoZikuZmlyc3QoKS5maW5kKFwidGQ6Zmlyc3RcIilbMF0saD0wLGk9MDtpZihhKGIpLmhhc0NsYXNzKFwiaW5kdGRcIikpcmV0dXJuIG51bGw7ZD1hKGIpLmFkZENsYXNzKFwiaW5kdGRcIikuYXR0cihcInN0eWxlXCIpLGEoYikuY3NzKHt3aGl0ZVNwYWNlOlwibm93cmFwXCJ9KTtmb3IodmFyIGo9MDtqPGYubGVuZ3RoO2orKylpPGEoZltqXSkuZmluZChcInRkOmZpcnN0XCIpLnRleHQoKS5sZW5ndGgmJihpPWEoZltqXSkuZmluZChcInRkOmZpcnN0XCIpLnRleHQoKS5sZW5ndGgsYz1qKTtmb3IoYShnKS5jc3Moe3dpZHRoOlwiYXV0b1wifSksaj0wO2o8ZS5oaWVyYXJjaHlMZXZlbDtqKyspYShmW2NdKS5maW5kKFwidGQ6Zmlyc3RcIikucHJlcGVuZChlLmluZGVudEFydGlmYWN0KTtmb3IoZyYmYShnKS5jc3Moe3dpZHRoOmcub2Zmc2V0V2lkdGh9KSxkJiZhKGIpLmNzcyhkKSxqPTA7ajxlLmhpZXJhcmNoeUxldmVsO2orKylhKGZbY10pLmZpbmQoXCJ0ZDpmaXJzdFwiKS5jaGlsZHJlbihcIjpmaXJzdFwiKS5yZW1vdmUoKTtyZXR1cm4gZS5oaWVyYXJjaHlMZXZlbCYmYShmKS5lYWNoKGZ1bmN0aW9uKCl7KGg9YSh0aGlzKS5kYXRhKFwibGV2ZWxcIil8fDApPD1lLmhpZXJhcmNoeUxldmVsJiZhKHRoaXMpLmRhdGEoXCJsZXZlbFwiLGgpfHxhKHRoaXMpLmRhdGEoXCJsZXZlbFwiLDApO2Zvcih2YXIgYj0wO2I8YSh0aGlzKS5kYXRhKFwibGV2ZWxcIik7YisrKWEodGhpcykuZmluZChcInRkOmZpcnN0XCIpLnByZXBlbmQoZS5pbmRlbnRBcnRpZmFjdCl9KSx0aGlzfSxtYWtlRHJhZ2dhYmxlOmZ1bmN0aW9uKGIpe3ZhciBjPWIudGFibGVEbkRDb25maWc7Yy5kcmFnSGFuZGxlJiZhKGMuZHJhZ0hhbmRsZSxiKS5lYWNoKGZ1bmN0aW9uKCl7YSh0aGlzKS5iaW5kKGUsZnVuY3Rpb24oZCl7cmV0dXJuIGEudGFibGVEbkQuaW5pdGlhbGlzZURyYWcoYSh0aGlzKS5wYXJlbnRzKFwidHJcIilbMF0sYix0aGlzLGQsYyksITF9KX0pfHxhKGIucm93cykuZWFjaChmdW5jdGlvbigpe2EodGhpcykuaGFzQ2xhc3MoXCJub2RyYWdcIik/YSh0aGlzKS5jc3MoXCJjdXJzb3JcIixcIlwiKTphKHRoaXMpLmJpbmQoZSxmdW5jdGlvbihkKXtpZihcIlREXCI9PT1kLnRhcmdldC50YWdOYW1lKXJldHVybiBhLnRhYmxlRG5ELmluaXRpYWxpc2VEcmFnKHRoaXMsYix0aGlzLGQsYyksITF9KS5jc3MoXCJjdXJzb3JcIixcIm1vdmVcIil9KX0sY3VycmVudE9yZGVyOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5jdXJyZW50VGFibGUucm93cztyZXR1cm4gYS5tYXAoYixmdW5jdGlvbihiKXtyZXR1cm4oYShiKS5kYXRhKFwibGV2ZWxcIikrYi5pZCkucmVwbGFjZSgvXFxzL2csXCJcIil9KS5qb2luKFwiXCIpfSxpbml0aWFsaXNlRHJhZzpmdW5jdGlvbihiLGQsZSxoLGkpe3RoaXMuZHJhZ09iamVjdD1iLHRoaXMuY3VycmVudFRhYmxlPWQsdGhpcy5tb3VzZU9mZnNldD10aGlzLmdldE1vdXNlT2Zmc2V0KGUsaCksdGhpcy5vcmlnaW5hbE9yZGVyPXRoaXMuY3VycmVudE9yZGVyKCksYShjKS5iaW5kKGYsdGhpcy5tb3VzZW1vdmUpLmJpbmQoZyx0aGlzLm1vdXNldXApLGkub25EcmFnU3RhcnQmJmkub25EcmFnU3RhcnQoZCxlKX0sdXBkYXRlVGFibGVzOmZ1bmN0aW9uKCl7dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dGhpcy50YWJsZURuRENvbmZpZyYmYS50YWJsZURuRC5tYWtlRHJhZ2dhYmxlKHRoaXMpfSl9LG1vdXNlQ29vcmRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXM/e3g6YS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgseTphLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WX06YS5wYWdlWHx8YS5wYWdlWT97eDphLnBhZ2VYLHk6YS5wYWdlWX06e3g6YS5jbGllbnRYK2MuYm9keS5zY3JvbGxMZWZ0LWMuYm9keS5jbGllbnRMZWZ0LHk6YS5jbGllbnRZK2MuYm9keS5zY3JvbGxUb3AtYy5ib2R5LmNsaWVudFRvcH19LGdldE1vdXNlT2Zmc2V0OmZ1bmN0aW9uKGEsYyl7dmFyIGQsZTtyZXR1cm4gYz1jfHxiLmV2ZW50LGU9dGhpcy5nZXRQb3NpdGlvbihhKSxkPXRoaXMubW91c2VDb29yZHMoYykse3g6ZC54LWUueCx5OmQueS1lLnl9fSxnZXRQb3NpdGlvbjpmdW5jdGlvbihhKXt2YXIgYj0wLGM9MDtmb3IoMD09PWEub2Zmc2V0SGVpZ2h0JiYoYT1hLmZpcnN0Q2hpbGQpO2Eub2Zmc2V0UGFyZW50OyliKz1hLm9mZnNldExlZnQsYys9YS5vZmZzZXRUb3AsYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYis9YS5vZmZzZXRMZWZ0LGMrPWEub2Zmc2V0VG9wLHt4OmIseTpjfX0sYXV0b1Njcm9sbDpmdW5jdGlvbihhKXt2YXIgZD10aGlzLmN1cnJlbnRUYWJsZS50YWJsZURuRENvbmZpZyxlPWIucGFnZVlPZmZzZXQsZj1iLmlubmVySGVpZ2h0P2IuaW5uZXJIZWlnaHQ6Yy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0P2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDpjLmJvZHkuY2xpZW50SGVpZ2h0O2MuYWxsJiYodm9pZCAwIT09Yy5jb21wYXRNb2RlJiZcIkJhY2tDb21wYXRcIiE9PWMuY29tcGF0TW9kZT9lPWMuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDp2b2lkIDAhPT1jLmJvZHkmJihlPWMuYm9keS5zY3JvbGxUb3ApKSxhLnktZTxkLnNjcm9sbEFtb3VudCYmYi5zY3JvbGxCeSgwLC1kLnNjcm9sbEFtb3VudCl8fGYtKGEueS1lKTxkLnNjcm9sbEFtb3VudCYmYi5zY3JvbGxCeSgwLGQuc2Nyb2xsQW1vdW50KX0sbW92ZVZlcnRpY2xlOmZ1bmN0aW9uKGEsYil7MCE9PWEudmVydGljYWwmJmImJnRoaXMuZHJhZ09iamVjdCE9PWImJnRoaXMuZHJhZ09iamVjdC5wYXJlbnROb2RlPT09Yi5wYXJlbnROb2RlJiYoMD5hLnZlcnRpY2FsJiZ0aGlzLmRyYWdPYmplY3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kcmFnT2JqZWN0LGIubmV4dFNpYmxpbmcpfHwwPGEudmVydGljYWwmJnRoaXMuZHJhZ09iamVjdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmRyYWdPYmplY3QsYikpfSxtb3ZlSG9yaXpvbnRhbDpmdW5jdGlvbihiLGMpe3ZhciBkLGU9dGhpcy5jdXJyZW50VGFibGUudGFibGVEbkRDb25maWc7aWYoIWUuaGllcmFyY2h5TGV2ZWx8fDA9PT1iLmhvcml6b250YWx8fCFjfHx0aGlzLmRyYWdPYmplY3QhPT1jKXJldHVybiBudWxsO2Q9YShjKS5kYXRhKFwibGV2ZWxcIiksMDxiLmhvcml6b250YWwmJmQ+MCYmYShjKS5maW5kKFwidGQ6Zmlyc3RcIikuY2hpbGRyZW4oXCI6Zmlyc3RcIikucmVtb3ZlKCkmJmEoYykuZGF0YShcImxldmVsXCIsLS1kKSwwPmIuaG9yaXpvbnRhbCYmZDxlLmhpZXJhcmNoeUxldmVsJiZhKGMpLnByZXYoKS5kYXRhKFwibGV2ZWxcIik+PWQmJmEoYykuY2hpbGRyZW4oXCI6Zmlyc3RcIikucHJlcGVuZChlLmluZGVudEFydGlmYWN0KSYmYShjKS5kYXRhKFwibGV2ZWxcIiwrK2QpfSxtb3VzZW1vdmU6ZnVuY3Rpb24oYil7dmFyIGMsZCxlLGYsZyxoPWEoYS50YWJsZURuRC5kcmFnT2JqZWN0KSxpPWEudGFibGVEbkQuY3VycmVudFRhYmxlLnRhYmxlRG5EQ29uZmlnO3JldHVybiBiJiZiLnByZXZlbnREZWZhdWx0KCksISFhLnRhYmxlRG5ELmRyYWdPYmplY3QmJihcInRvdWNobW92ZVwiPT09Yi50eXBlJiZldmVudC5wcmV2ZW50RGVmYXVsdCgpLGkub25EcmFnQ2xhc3MmJmguYWRkQ2xhc3MoaS5vbkRyYWdDbGFzcyl8fGguY3NzKGkub25EcmFnU3R5bGUpLGQ9YS50YWJsZURuRC5tb3VzZUNvb3JkcyhiKSxmPWQueC1hLnRhYmxlRG5ELm1vdXNlT2Zmc2V0LngsZz1kLnktYS50YWJsZURuRC5tb3VzZU9mZnNldC55LGEudGFibGVEbkQuYXV0b1Njcm9sbChkKSxjPWEudGFibGVEbkQuZmluZERyb3BUYXJnZXRSb3coaCxnKSxlPWEudGFibGVEbkQuZmluZERyYWdEaXJlY3Rpb24oZixnKSxhLnRhYmxlRG5ELm1vdmVWZXJ0aWNsZShlLGMpLGEudGFibGVEbkQubW92ZUhvcml6b250YWwoZSxjKSwhMSl9LGZpbmREcmFnRGlyZWN0aW9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jdXJyZW50VGFibGUudGFibGVEbkRDb25maWcuc2Vuc2l0aXZpdHksZD10aGlzLm9sZFgsZT10aGlzLm9sZFksZj1kLWMsZz1kK2MsaD1lLWMsaT1lK2Msaj17aG9yaXpvbnRhbDphPj1mJiZhPD1nPzA6YT5kPy0xOjEsdmVydGljYWw6Yj49aCYmYjw9aT8wOmI+ZT8tMToxfTtyZXR1cm4gMCE9PWouaG9yaXpvbnRhbCYmKHRoaXMub2xkWD1hKSwwIT09ai52ZXJ0aWNhbCYmKHRoaXMub2xkWT1iKSxqfSxmaW5kRHJvcFRhcmdldFJvdzpmdW5jdGlvbihiLGMpe2Zvcih2YXIgZD0wLGU9dGhpcy5jdXJyZW50VGFibGUucm93cyxmPXRoaXMuY3VycmVudFRhYmxlLnRhYmxlRG5EQ29uZmlnLGc9MCxoPW51bGwsaT0wO2k8ZS5sZW5ndGg7aSsrKWlmKGg9ZVtpXSxnPXRoaXMuZ2V0UG9zaXRpb24oaCkueSxkPXBhcnNlSW50KGgub2Zmc2V0SGVpZ2h0KS8yLDA9PT1oLm9mZnNldEhlaWdodCYmKGc9dGhpcy5nZXRQb3NpdGlvbihoLmZpcnN0Q2hpbGQpLnksZD1wYXJzZUludChoLmZpcnN0Q2hpbGQub2Zmc2V0SGVpZ2h0KS8yKSxjPmctZCYmYzxnK2QpcmV0dXJuIGIuaXMoaCl8fGYub25BbGxvd0Ryb3AmJiFmLm9uQWxsb3dEcm9wKGIsaCl8fGEoaCkuaGFzQ2xhc3MoXCJub2Ryb3BcIik/bnVsbDpoO3JldHVybiBudWxsfSxwcm9jZXNzTW91c2V1cDpmdW5jdGlvbigpe2lmKCF0aGlzLmN1cnJlbnRUYWJsZXx8IXRoaXMuZHJhZ09iamVjdClyZXR1cm4gbnVsbDt2YXIgYj10aGlzLmN1cnJlbnRUYWJsZS50YWJsZURuRENvbmZpZyxkPXRoaXMuZHJhZ09iamVjdCxlPTAsaD0wO2EoYykudW5iaW5kKGYsdGhpcy5tb3VzZW1vdmUpLnVuYmluZChnLHRoaXMubW91c2V1cCksYi5oaWVyYXJjaHlMZXZlbCYmYi5hdXRvQ2xlYW5SZWxhdGlvbnMmJmEodGhpcy5jdXJyZW50VGFibGUucm93cykuZmlyc3QoKS5maW5kKFwidGQ6Zmlyc3RcIikuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKCl7KGg9YSh0aGlzKS5wYXJlbnRzKFwidHI6Zmlyc3RcIikuZGF0YShcImxldmVsXCIpKSYmYSh0aGlzKS5wYXJlbnRzKFwidHI6Zmlyc3RcIikuZGF0YShcImxldmVsXCIsLS1oKSYmYSh0aGlzKS5yZW1vdmUoKX0pJiZiLmhpZXJhcmNoeUxldmVsPjEmJmEodGhpcy5jdXJyZW50VGFibGUucm93cykuZWFjaChmdW5jdGlvbigpe2lmKChoPWEodGhpcykuZGF0YShcImxldmVsXCIpKT4xKWZvcihlPWEodGhpcykucHJldigpLmRhdGEoXCJsZXZlbFwiKTtoPmUrMTspYSh0aGlzKS5maW5kKFwidGQ6Zmlyc3RcIikuY2hpbGRyZW4oXCI6Zmlyc3RcIikucmVtb3ZlKCksYSh0aGlzKS5kYXRhKFwibGV2ZWxcIiwtLWgpfSksYi5vbkRyYWdDbGFzcyYmYShkKS5yZW1vdmVDbGFzcyhiLm9uRHJhZ0NsYXNzKXx8YShkKS5jc3MoYi5vbkRyb3BTdHlsZSksdGhpcy5kcmFnT2JqZWN0PW51bGwsYi5vbkRyb3AmJnRoaXMub3JpZ2luYWxPcmRlciE9PXRoaXMuY3VycmVudE9yZGVyKCkmJmEoZCkuaGlkZSgpLmZhZGVJbihcImZhc3RcIikmJmIub25Ecm9wKHRoaXMuY3VycmVudFRhYmxlLGQpLGIub25EcmFnU3RvcCYmYi5vbkRyYWdTdG9wKHRoaXMuY3VycmVudFRhYmxlLGQpLHRoaXMuY3VycmVudFRhYmxlPW51bGx9LG1vdXNldXA6ZnVuY3Rpb24oYil7cmV0dXJuIGImJmIucHJldmVudERlZmF1bHQoKSxhLnRhYmxlRG5ELnByb2Nlc3NNb3VzZXVwKCksITF9LGpzb25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5jdXJyZW50VGFibGU7cmV0dXJuIGE/SlNPTi5zdHJpbmdpZnkodGhpcy50YWJsZURhdGEoYiksbnVsbCxiLnRhYmxlRG5EQ29uZmlnLmpzb25QcmV0aWZ5U2VwYXJhdG9yKTpKU09OLnN0cmluZ2lmeSh0aGlzLnRhYmxlRGF0YShiKSl9LHNlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBhLnBhcmFtKHRoaXMudGFibGVEYXRhKHRoaXMuY3VycmVudFRhYmxlKSl9LHNlcmlhbGl6ZVRhYmxlOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cIlwiLGM9YS50YWJsZURuRENvbmZpZy5zZXJpYWxpemVQYXJhbU5hbWV8fGEuaWQsZD1hLnJvd3MsZT0wO2U8ZC5sZW5ndGg7ZSsrKXtiLmxlbmd0aD4wJiYoYis9XCImXCIpO3ZhciBmPWRbZV0uaWQ7ZiYmYS50YWJsZURuRENvbmZpZyYmYS50YWJsZURuRENvbmZpZy5zZXJpYWxpemVSZWdleHAmJihmPWYubWF0Y2goYS50YWJsZURuRENvbmZpZy5zZXJpYWxpemVSZWdleHApWzBdLGIrPWMrXCJbXT1cIitmKX1yZXR1cm4gYn0sc2VyaWFsaXplVGFibGVzOmZ1bmN0aW9uKCl7dmFyIGI9W107cmV0dXJuIGEoXCJ0YWJsZVwiKS5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5pZCYmYi5wdXNoKGEucGFyYW0oYS50YWJsZURuRC50YWJsZURhdGEodGhpcykpKX0pLGIuam9pbihcIiZcIil9LHRhYmxlRGF0YTpmdW5jdGlvbihiKXt2YXIgYyxkLGUsZixnPWIudGFibGVEbkRDb25maWcsaD1bXSxpPTAsaj0wLGs9bnVsbCxsPXt9O2lmKGJ8fChiPXRoaXMuY3VycmVudFRhYmxlKSwhYnx8IWIucm93c3x8IWIucm93cy5sZW5ndGgpcmV0dXJue2Vycm9yOntjb2RlOjUwMCxtZXNzYWdlOlwiTm90IGEgdmFsaWQgdGFibGUuXCJ9fTtpZighYi5pZCYmIWcuc2VyaWFsaXplUGFyYW1OYW1lKXJldHVybntlcnJvcjp7Y29kZTo1MDAsbWVzc2FnZTpcIk5vIHNlcmlhbGl6YWJsZSB1bmlxdWUgaWQgcHJvdmlkZWQuXCJ9fTtmPWcuYXV0b0NsZWFuUmVsYXRpb25zJiZiLnJvd3N8fGEubWFrZUFycmF5KGIucm93cyksZD1nLnNlcmlhbGl6ZVBhcmFtTmFtZXx8Yi5pZCxlPWQsYz1mdW5jdGlvbihhKXtyZXR1cm4gYSYmZyYmZy5zZXJpYWxpemVSZWdleHA/YS5tYXRjaChnLnNlcmlhbGl6ZVJlZ2V4cClbMF06YX0sbFtlXT1bXSwhZy5hdXRvQ2xlYW5SZWxhdGlvbnMmJmEoZlswXSkuZGF0YShcImxldmVsXCIpJiZmLnVuc2hpZnQoe2lkOlwidW5kZWZpbmVkXCJ9KTtmb3IodmFyIG09MDttPGYubGVuZ3RoO20rKylpZihnLmhpZXJhcmNoeUxldmVsKXtpZigwPT09KGo9YShmW21dKS5kYXRhKFwibGV2ZWxcIil8fDApKWU9ZCxoPVtdO2Vsc2UgaWYoaj5pKWgucHVzaChbZSxpXSksZT1jKGZbbS0xXS5pZCk7ZWxzZSBpZihqPGkpZm9yKHZhciBuPTA7bjxoLmxlbmd0aDtuKyspaFtuXVsxXT09PWomJihlPWhbbl1bMF0pLGhbbl1bMV0+PWkmJihoW25dWzFdPTApO2k9aixhLmlzQXJyYXkobFtlXSl8fChsW2VdPVtdKSxrPWMoZlttXS5pZCksayYmbFtlXS5wdXNoKGspfWVsc2Uoaz1jKGZbbV0uaWQpKSYmbFtlXS5wdXNoKGspO3JldHVybiBsfX0salF1ZXJ5LmZuLmV4dGVuZCh7dGFibGVEbkQ6YS50YWJsZURuRC5idWlsZCx0YWJsZURuRFVwZGF0ZTphLnRhYmxlRG5ELnVwZGF0ZVRhYmxlcyx0YWJsZURuRFNlcmlhbGl6ZTphLnByb3h5KGEudGFibGVEbkQuc2VyaWFsaXplLGEudGFibGVEbkQpLHRhYmxlRG5EU2VyaWFsaXplQWxsOmEudGFibGVEbkQuc2VyaWFsaXplVGFibGVzLHRhYmxlRG5ERGF0YTphLnByb3h5KGEudGFibGVEbkQudGFibGVEYXRhLGEudGFibGVEbkQpfSl9KGpRdWVyeSx3aW5kb3csd2luZG93LmRvY3VtZW50KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGFibGVkbmQvZGlzdC9qcXVlcnkudGFibGVkbmQubWluLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNiAxNSAxOSIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5cbmNvbnN0ICQgPSB3aW5kb3cuJDtcblxuLyoqXG4gKiBDbGFzcyBFeHBvcnRUb1NxbE1hbmFnZXJFeHRlbnNpb24gZXh0ZW5kcyBncmlkIHdpdGggZXhwb3J0aW5nIHF1ZXJ5IHRvIFNRTCBNYW5hZ2VyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cG9ydFRvU3FsTWFuYWdlckV4dGVuc2lvbiB7XG4gIC8qKlxuICAgKiBFeHRlbmQgZ3JpZFxuICAgKlxuICAgKiBAcGFyYW0ge0dyaWR9IGdyaWRcbiAgICovXG4gIGV4dGVuZChncmlkKSB7XG4gICAgZ3JpZC5nZXRIZWFkZXJDb250YWluZXIoKS5vbignY2xpY2snLCAnLmpzLWNvbW1vbl9zaG93X3F1ZXJ5LWdyaWQtYWN0aW9uJywgKCkgPT4gdGhpcy5fb25TaG93U3FsUXVlcnlDbGljayhncmlkKSk7XG4gICAgZ3JpZC5nZXRIZWFkZXJDb250YWluZXIoKS5vbignY2xpY2snLCAnLmpzLWNvbW1vbl9leHBvcnRfc3FsX21hbmFnZXItZ3JpZC1hY3Rpb24nLCAoKSA9PiB0aGlzLl9vbkV4cG9ydFNxbE1hbmFnZXJDbGljayhncmlkKSk7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIGNsaWNraW5nIG9uIHRoZSBcInNob3cgc3FsIHF1ZXJ5XCIgdG9vbGJhciBidXR0b25cbiAgICpcbiAgICogQHBhcmFtIHtHcmlkfSBncmlkXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25TaG93U3FsUXVlcnlDbGljayhncmlkKSB7XG4gICAgY29uc3QgJHNxbE1hbmFnZXJGb3JtID0gJCgnIycgKyBncmlkLmdldElkKCkgKyAnX2NvbW1vbl9zaG93X3F1ZXJ5X21vZGFsX2Zvcm0nKTtcbiAgICB0aGlzLl9maWxsRXhwb3J0Rm9ybSgkc3FsTWFuYWdlckZvcm0sIGdyaWQpO1xuXG4gICAgY29uc3QgJG1vZGFsID0gJCgnIycgKyBncmlkLmdldElkKCkgKyAnX2dyaWRfY29tbW9uX3Nob3dfcXVlcnlfbW9kYWwnKTtcbiAgICAkbW9kYWwubW9kYWwoJ3Nob3cnKTtcblxuICAgICRtb2RhbC5vbignY2xpY2snLCAnLmJ0bi1zcWwtc3VibWl0JywgKCkgPT4gJHNxbE1hbmFnZXJGb3JtLnN1Ym1pdCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gY2xpY2tpbmcgb24gdGhlIFwiZXhwb3J0IHRvIHRoZSBzcWwgcXVlcnlcIiB0b29sYmFyIGJ1dHRvblxuICAgKlxuICAgKiBAcGFyYW0ge0dyaWR9IGdyaWRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkV4cG9ydFNxbE1hbmFnZXJDbGljayhncmlkKSB7XG4gICAgY29uc3QgJHNxbE1hbmFnZXJGb3JtID0gJCgnIycgKyBncmlkLmdldElkKCkgKyAnX2NvbW1vbl9zaG93X3F1ZXJ5X21vZGFsX2Zvcm0nKTtcblxuICAgIHRoaXMuX2ZpbGxFeHBvcnRGb3JtKCRzcWxNYW5hZ2VyRm9ybSwgZ3JpZCk7XG5cbiAgICAkc3FsTWFuYWdlckZvcm0uc3VibWl0KCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsbCBleHBvcnQgZm9ybSB3aXRoIFNRTCBhbmQgaXQncyBuYW1lXG4gICAqXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkc3FsTWFuYWdlckZvcm1cbiAgICogQHBhcmFtIHtHcmlkfSBncmlkXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZmlsbEV4cG9ydEZvcm0oJHNxbE1hbmFnZXJGb3JtLCBncmlkKSB7XG4gICAgY29uc3QgcXVlcnkgPSBncmlkLmdldENvbnRhaW5lcigpLmZpbmQoJy5qcy1ncmlkLXRhYmxlJykuZGF0YSgncXVlcnknKTtcblxuICAgICRzcWxNYW5hZ2VyRm9ybS5maW5kKCd0ZXh0YXJlYVtuYW1lPVwic3FsXCJdJykudmFsKHF1ZXJ5KTtcbiAgICAkc3FsTWFuYWdlckZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIm5hbWVcIl0nKS52YWwodGhpcy5fZ2V0TmFtZUZyb21CcmVhZGNydW1iKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBleHBvcnQgbmFtZSBmcm9tIHBhZ2UncyBicmVhZGNydW1iXG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9nZXROYW1lRnJvbUJyZWFkY3J1bWIoKSB7XG4gICAgY29uc3QgJGJyZWFkY3J1bWJzID0gJCgnLmhlYWRlci10b29sYmFyJykuZmluZCgnLmJyZWFkY3J1bWItaXRlbScpO1xuICAgIGxldCBuYW1lID0gJyc7XG5cbiAgICAkYnJlYWRjcnVtYnMuZWFjaCgoaSwgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgJGJyZWFkY3J1bWIgPSAkKGl0ZW0pO1xuXG4gICAgICBjb25zdCBicmVhZGNydW1iVGl0bGUgPSAwIDwgJGJyZWFkY3J1bWIuZmluZCgnYScpLmxlbmd0aCA/XG4gICAgICAgICRicmVhZGNydW1iLmZpbmQoJ2EnKS50ZXh0KCkgOlxuICAgICAgICAkYnJlYWRjcnVtYi50ZXh0KCk7XG5cbiAgICAgIGlmICgwIDwgbmFtZS5sZW5ndGgpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUuY29uY2F0KCcgPiAnKTtcbiAgICAgIH1cblxuICAgICAgbmFtZSA9IG5hbWUuY29uY2F0KGJyZWFkY3J1bWJUaXRsZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY29tcG9uZW50cy9ncmlkL2V4dGVuc2lvbi9leHBvcnQtdG8tc3FsLW1hbmFnZXItZXh0ZW5zaW9uLmpzIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuLyoqXG4gKiBSZXNwb25zaWJsZSBmb3IgZ3JpZCBmaWx0ZXJzIHNlYXJjaCBhbmQgcmVzZXQgYnV0dG9uIGF2YWlsYWJpbGl0eSB3aGVuIGZpbHRlciBpbnB1dHMgY2hhbmdlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyc1N1Ym1pdEJ1dHRvbkVuYWJsZXJFeHRlbnNpb24ge1xuXG4gIC8qKlxuICAgKiBFeHRlbmQgZ3JpZFxuICAgKlxuICAgKiBAcGFyYW0ge0dyaWR9IGdyaWRcbiAgICovXG4gIGV4dGVuZChncmlkKSB7XG4gICAgY29uc3QgJGZpbHRlcnNSb3cgPSBncmlkLmdldENvbnRhaW5lcigpLmZpbmQoJy5jb2x1bW4tZmlsdGVycycpO1xuICAgICRmaWx0ZXJzUm93LmZpbmQoJy5ncmlkLXNlYXJjaC1idXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgJGZpbHRlcnNSb3cuZmluZCgnaW5wdXQsIHNlbGVjdCcpLm9uKCdpbnB1dCBkcC5jaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAkZmlsdGVyc1Jvdy5maW5kKCcuZ3JpZC1zZWFyY2gtYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAkZmlsdGVyc1Jvdy5maW5kKCcuanMtZ3JpZC1yZXNldC1idXR0b24nKS5wcm9wKCdoaWRkZW4nLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NvbXBvbmVudHMvZ3JpZC9leHRlbnNpb24vZmlsdGVycy1zdWJtaXQtYnV0dG9uLWVuYWJsZXItZXh0ZW5zaW9uLmpzIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuY29uc3QgJCA9IHdpbmRvdy4kO1xuXG4vKipcbiAqIENsYXNzIEJ1bGtBY3Rpb25TZWxlY3RDaGVja2JveEV4dGVuc2lvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxrQWN0aW9uQ2hlY2tib3hFeHRlbnNpb24ge1xuICAvKipcbiAgICogRXh0ZW5kIGdyaWQgd2l0aCBidWxrIGFjdGlvbiBjaGVja2JveGVzIGhhbmRsaW5nIGZ1bmN0aW9uYWxpdHlcbiAgICpcbiAgICogQHBhcmFtIHtHcmlkfSBncmlkXG4gICAqL1xuICBleHRlbmQoZ3JpZCkge1xuICAgIHRoaXMuX2hhbmRsZUJ1bGtBY3Rpb25DaGVja2JveFNlbGVjdChncmlkKTtcbiAgICB0aGlzLl9oYW5kbGVCdWxrQWN0aW9uU2VsZWN0QWxsQ2hlY2tib3goZ3JpZCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBcIlNlbGVjdCBhbGxcIiBidXR0b24gaW4gdGhlIGdyaWRcbiAgICpcbiAgICogQHBhcmFtIHtHcmlkfSBncmlkXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaGFuZGxlQnVsa0FjdGlvblNlbGVjdEFsbENoZWNrYm94KGdyaWQpIHtcbiAgICBncmlkLmdldENvbnRhaW5lcigpLm9uKCdjaGFuZ2UnLCAnLmpzLWJ1bGstYWN0aW9uLXNlbGVjdC1hbGwnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgJGNoZWNrYm94ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICBjb25zdCBpc0NoZWNrZWQgPSAkY2hlY2tib3guaXMoJzpjaGVja2VkJyk7XG4gICAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICAgIHRoaXMuX2VuYWJsZUJ1bGtBY3Rpb25zQnRuKGdyaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZUJ1bGtBY3Rpb25zQnRuKGdyaWQpO1xuICAgICAgfVxuXG4gICAgICBncmlkLmdldENvbnRhaW5lcigpLmZpbmQoJy5qcy1idWxrLWFjdGlvbi1jaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCBpc0NoZWNrZWQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZWFjaCBidWxrIGFjdGlvbiBjaGVja2JveCBzZWxlY3QgaW4gdGhlIGdyaWRcbiAgICpcbiAgICogQHBhcmFtIHtHcmlkfSBncmlkXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaGFuZGxlQnVsa0FjdGlvbkNoZWNrYm94U2VsZWN0KGdyaWQpIHtcbiAgICBncmlkLmdldENvbnRhaW5lcigpLm9uKCdjaGFuZ2UnLCAnLmpzLWJ1bGstYWN0aW9uLWNoZWNrYm94JywgKCkgPT4ge1xuICAgICAgY29uc3QgY2hlY2tlZFJvd3NDb3VudCA9IGdyaWQuZ2V0Q29udGFpbmVyKCkuZmluZCgnLmpzLWJ1bGstYWN0aW9uLWNoZWNrYm94OmNoZWNrZWQnKS5sZW5ndGg7XG5cbiAgICAgIGlmIChjaGVja2VkUm93c0NvdW50ID4gMCkge1xuICAgICAgICB0aGlzLl9lbmFibGVCdWxrQWN0aW9uc0J0bihncmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVCdWxrQWN0aW9uc0J0bihncmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYnVsayBhY3Rpb25zIGJ1dHRvblxuICAgKlxuICAgKiBAcGFyYW0ge0dyaWR9IGdyaWRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9lbmFibGVCdWxrQWN0aW9uc0J0bihncmlkKSB7XG4gICAgZ3JpZC5nZXRDb250YWluZXIoKS5maW5kKCcuanMtYnVsay1hY3Rpb25zLWJ0bicpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYnVsayBhY3Rpb25zIGJ1dHRvblxuICAgKlxuICAgKiBAcGFyYW0ge0dyaWR9IGdyaWRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9kaXNhYmxlQnVsa0FjdGlvbnNCdG4oZ3JpZCkge1xuICAgIGdyaWQuZ2V0Q29udGFpbmVyKCkuZmluZCgnLmpzLWJ1bGstYWN0aW9ucy1idG4nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jb21wb25lbnRzL2dyaWQvZXh0ZW5zaW9uL2J1bGstYWN0aW9uLWNoZWNrYm94LWV4dGVuc2lvbi5qcyIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5cbmNvbnN0ICQgPSB3aW5kb3cuJDtcblxuLyoqXG4gKiBIYW5kbGVzIHN1Ym1pdCBvZiBncmlkIGFjdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VibWl0QnVsa0FjdGlvbkV4dGVuc2lvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHJldHVybiB7XG4gICAgICBleHRlbmQ6IChncmlkKSA9PiB0aGlzLmV4dGVuZChncmlkKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dGVuZCBncmlkIHdpdGggYnVsayBhY3Rpb24gc3VibWl0dGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge0dyaWR9IGdyaWRcbiAgICovXG4gIGV4dGVuZChncmlkKSB7XG4gICAgZ3JpZC5nZXRDb250YWluZXIoKS5vbignY2xpY2snLCAnLmpzLWJ1bGstYWN0aW9uLXN1Ym1pdC1idG4nLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc3VibWl0KGV2ZW50LCBncmlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYnVsayBhY3Rpb24gc3VibWl0dGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge0dyaWR9IGdyaWRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN1Ym1pdChldmVudCwgZ3JpZCkge1xuICAgIGNvbnN0ICRzdWJtaXRCdG4gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IGNvbmZpcm1NZXNzYWdlID0gJHN1Ym1pdEJ0bi5kYXRhKCdjb25maXJtLW1lc3NhZ2UnKTtcblxuICAgIGlmICh0eXBlb2YgY29uZmlybU1lc3NhZ2UgIT09IFwidW5kZWZpbmVkXCIgJiYgMCA8IGNvbmZpcm1NZXNzYWdlLmxlbmd0aCAmJiAhY29uZmlybShjb25maXJtTWVzc2FnZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCAkZm9ybSA9ICQoJyMnICsgZ3JpZC5nZXRJZCgpICsgJ19maWx0ZXJfZm9ybScpO1xuXG4gICAgJGZvcm0uYXR0cignYWN0aW9uJywgJHN1Ym1pdEJ0bi5kYXRhKCdmb3JtLXVybCcpKTtcbiAgICAkZm9ybS5hdHRyKCdtZXRob2QnLCAkc3VibWl0QnRuLmRhdGEoJ2Zvcm0tbWV0aG9kJykpO1xuICAgICRmb3JtLnN1Ym1pdCgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jb21wb25lbnRzL2dyaWQvZXh0ZW5zaW9uL3N1Ym1pdC1idWxrLWFjdGlvbi1leHRlbnNpb24uanMiXSwic291cmNlUm9vdCI6IiJ9