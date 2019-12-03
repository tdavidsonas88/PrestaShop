window["employee_form"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 355);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports) {

(function() { module.exports = window["jQuery"]; }());

/***/ }),

/***/ 20:
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
 * Handles UI interactions of choice tree
 */

var ChoiceTree = function () {
  /**
   * @param {String} treeSelector
   */
  function ChoiceTree(treeSelector) {
    var _this = this;

    _classCallCheck(this, ChoiceTree);

    this.$container = $(treeSelector);

    this.$container.on('click', '.js-input-wrapper', function (event) {
      var $inputWrapper = $(event.currentTarget);

      _this._toggleChildTree($inputWrapper);
    });

    this.$container.on('click', '.js-toggle-choice-tree-action', function (event) {
      var $action = $(event.currentTarget);

      _this._toggleTree($action);
    });

    return {
      enableAutoCheckChildren: function enableAutoCheckChildren() {
        return _this.enableAutoCheckChildren();
      },
      enableAllInputs: function enableAllInputs() {
        return _this.enableAllInputs();
      },
      disableAllInputs: function disableAllInputs() {
        return _this.disableAllInputs();
      }
    };
  }

  /**
   * Enable automatic check/uncheck of clicked item's children.
   */


  _createClass(ChoiceTree, [{
    key: 'enableAutoCheckChildren',
    value: function enableAutoCheckChildren() {
      this.$container.on('change', 'input[type="checkbox"]', function (event) {
        var $clickedCheckbox = $(event.currentTarget);
        var $itemWithChildren = $clickedCheckbox.closest('li');

        $itemWithChildren.find('ul input[type="checkbox"]').prop('checked', $clickedCheckbox.is(':checked'));
      });
    }

    /**
     * Enable all inputs in the choice tree.
     */

  }, {
    key: 'enableAllInputs',
    value: function enableAllInputs() {
      this.$container.find('input').removeAttr('disabled');
    }

    /**
     * Disable all inputs in the choice tree.
     */

  }, {
    key: 'disableAllInputs',
    value: function disableAllInputs() {
      this.$container.find('input').attr('disabled', 'disabled');
    }

    /**
     * Collapse or expand sub-tree for single parent
     *
     * @param {jQuery} $inputWrapper
     *
     * @private
     */

  }, {
    key: '_toggleChildTree',
    value: function _toggleChildTree($inputWrapper) {
      var $parentWrapper = $inputWrapper.closest('li');

      if ($parentWrapper.hasClass('expanded')) {
        $parentWrapper.removeClass('expanded').addClass('collapsed');

        return;
      }

      if ($parentWrapper.hasClass('collapsed')) {
        $parentWrapper.removeClass('collapsed').addClass('expanded');
      }
    }

    /**
     * Collapse or expand whole tree
     *
     * @param {jQuery} $action
     *
     * @private
     */

  }, {
    key: '_toggleTree',
    value: function _toggleTree($action) {
      var $parentContainer = $action.closest('.js-choice-tree-container');
      var action = $action.data('action');

      // toggle action configuration
      var config = {
        addClass: {
          expand: 'expanded',
          collapse: 'collapsed'
        },
        removeClass: {
          expand: 'collapsed',
          collapse: 'expanded'
        },
        nextAction: {
          expand: 'collapse',
          collapse: 'expand'
        },
        text: {
          expand: 'collapsed-text',
          collapse: 'expanded-text'
        },
        icon: {
          expand: 'collapsed-icon',
          collapse: 'expanded-icon'
        }
      };

      $parentContainer.find('li').each(function (index, item) {
        var $item = $(item);

        if ($item.hasClass(config.removeClass[action])) {
          $item.removeClass(config.removeClass[action]).addClass(config.addClass[action]);
        }
      });

      $action.data('action', config.nextAction[action]);
      $action.find('.material-icons').text($action.data(config.icon[action]));
      $action.find('.js-toggle-text').text($action.data(config.text[action]));
    }
  }]);

  return ChoiceTree;
}();

exports.default = ChoiceTree;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

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

var _choiceTree = __webpack_require__(20);

var _choiceTree2 = _interopRequireDefault(_choiceTree);

var _addonsConnector = __webpack_require__(328);

var _addonsConnector2 = _interopRequireDefault(_addonsConnector);

var _changePasswordControl = __webpack_require__(330);

var _changePasswordControl2 = _interopRequireDefault(_changePasswordControl);

var _employeeFormMap = __webpack_require__(354);

var _employeeFormMap2 = _interopRequireDefault(_employeeFormMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class responsible for javascript actions in employee add/edit page.
 */
var EmployeeForm = function () {
  function EmployeeForm() {
    _classCallCheck(this, EmployeeForm);

    this.shopChoiceTreeSelector = _employeeFormMap2.default.shopChoiceTree;
    this.shopChoiceTree = new _choiceTree2.default(this.shopChoiceTreeSelector);
    this.employeeProfileSelector = _employeeFormMap2.default.profileSelect;
    this.tabsDropdownSelector = _employeeFormMap2.default.defaultPageSelect;

    this.shopChoiceTree.enableAutoCheckChildren();

    new _addonsConnector2.default(_employeeFormMap2.default.addonsConnectForm, _employeeFormMap2.default.addonsLoginButton);

    new _changePasswordControl2.default(_employeeFormMap2.default.changePasswordInputsBlock, _employeeFormMap2.default.showChangePasswordBlockButton, _employeeFormMap2.default.hideChangePasswordBlockButton, _employeeFormMap2.default.generatePasswordButton, _employeeFormMap2.default.oldPasswordInput, _employeeFormMap2.default.newPasswordInput, _employeeFormMap2.default.confirmNewPasswordInput, _employeeFormMap2.default.generatedPasswordDisplayInput, _employeeFormMap2.default.passwordStrengthFeedbackContainer);

    this._initEvents();
    this._toggleShopTree();

    return {};
  }

  /**
   * Initialize page's events.
   *
   * @private
   */


  _createClass(EmployeeForm, [{
    key: "_initEvents",
    value: function _initEvents() {
      var _this = this;

      var $employeeProfilesDropdown = $(this.employeeProfileSelector);
      var getTabsUrl = $employeeProfilesDropdown.data('get-tabs-url');

      $(document).on('change', this.employeeProfileSelector, function () {
        return _this._toggleShopTree();
      });

      // Reload tabs dropdown when employee profile is changed.
      $(document).on('change', this.employeeProfileSelector, function (event) {
        $.get(getTabsUrl, {
          profileId: $(event.currentTarget).val()
        }, function (tabs) {
          _this._reloadTabsDropdown(tabs);
        }, 'json');
      });
    }

    /**
     * Reload tabs dropdown with new content.
     *
     * @param {Object} accessibleTabs
     *
     * @private
     */

  }, {
    key: "_reloadTabsDropdown",
    value: function _reloadTabsDropdown(accessibleTabs) {
      var $tabsDropdown = $(this.tabsDropdownSelector);

      $tabsDropdown.empty();

      for (var key in accessibleTabs) {
        if (accessibleTabs[key]['children'].length > 0 && accessibleTabs[key]['name']) {
          // If tab has children - create an option group and put children inside.
          var $optgroup = this._createOptionGroup(accessibleTabs[key]['name']);

          for (var childKey in accessibleTabs[key]['children']) {
            if (accessibleTabs[key]['children'][childKey]['name']) {
              $optgroup.append(this._createOption(accessibleTabs[key]['children'][childKey]['name'], accessibleTabs[key]['children'][childKey]['id_tab']));
            }
          }

          $tabsDropdown.append($optgroup);
        } else if (accessibleTabs[key]['name']) {
          // If tab doesn't have children - create an option.
          $tabsDropdown.append(this._createOption(accessibleTabs[key]['name'], accessibleTabs[key]['id_tab']));
        }
      }
    }

    /**
     * Hide shop choice tree if superadmin profile is selected, show it otherwise.
     *
     * @private
     */

  }, {
    key: "_toggleShopTree",
    value: function _toggleShopTree() {
      var $employeeProfileDropdown = $(this.employeeProfileSelector);
      var superAdminProfileId = $employeeProfileDropdown.data('admin-profile');
      $(this.shopChoiceTreeSelector).closest('.form-group').toggleClass('d-none', $employeeProfileDropdown.val() == superAdminProfileId);
    }

    /**
     * Creates an <optgroup> element
     *
     * @param {String} name
     *
     * @returns {jQuery}
     *
     * @private
     */

  }, {
    key: "_createOptionGroup",
    value: function _createOptionGroup(name) {
      return $("<optgroup label=\"" + name + "\">");
    }

    /**
     * Creates an <option> element.
     *
     * @param {String} name
     * @param {String} value
     *
     * @returns {jQuery}
     *
     * @private
     */

  }, {
    key: "_createOption",
    value: function _createOption(name, value) {
      return $("<option value=\"" + value + "\">" + name + "</option>");
    }
  }]);

  return EmployeeForm;
}();

exports.default = EmployeeForm;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),

/***/ 328:
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
 * Responsible for connecting to addons marketplace.
 * Makes an addons connect request to the server, displays error messages if it fails.
 */

var AddonsConnector = function () {
  function AddonsConnector(addonsConnectFormSelector, loadingSpinnerSelector) {
    _classCallCheck(this, AddonsConnector);

    this.addonsConnectFormSelector = addonsConnectFormSelector;
    this.$loadingSpinner = $(loadingSpinnerSelector);

    this._initEvents();

    return {};
  }

  /**
   * Initialize events related to connection to addons.
   *
   * @private
   */


  _createClass(AddonsConnector, [{
    key: '_initEvents',
    value: function _initEvents() {
      var _this = this;

      $('body').on('submit', this.addonsConnectFormSelector, function (event) {
        var $form = $(event.currentTarget);
        event.preventDefault();
        event.stopPropagation();

        _this._connect($form.attr('action'), $form.serialize());
      });
    }

    /**
     * Do a POST request to connect to addons.
     *
     * @param {String} addonsConnectUrl
     * @param {Object} formData
     *
     * @private
     */

  }, {
    key: '_connect',
    value: function _connect(addonsConnectUrl, formData) {
      var _this2 = this;

      $.ajax({
        method: 'POST',
        url: addonsConnectUrl,
        dataType: 'json',
        data: formData,
        beforeSend: function beforeSend() {
          _this2.$loadingSpinner.show();
          $('button.btn[type="submit"]', _this2.addonsConnectFormSelector).hide();
        }
      }).then(function (response) {
        if (response.success === 1) {
          location.reload();
        } else {
          $.growl.error({
            message: response.message
          });

          _this2.$loadingSpinner.hide();
          $('button.btn[type="submit"]', _this2.addonsConnectFormSelector).fadeIn();
        }
      }, function () {
        $.growl.error({
          message: $(_this2.addonsConnectFormSelector).data('error-message')
        });

        _this2.$loadingSpinner.hide();
        $('button.btn[type="submit"]', _this2.addonsConnectFormSelector).show();
      });
    }
  }]);

  return AddonsConnector;
}();

exports.default = AddonsConnector;

/***/ }),

/***/ 329:
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
 * Generates a password and informs about it's strength.
 * You can pass a password input to watch the password strength and display feedback messages.
 * You can also generate a random password into an input.
 */

var ChangePasswordHandler = function () {
  function ChangePasswordHandler(passwordStrengthFeedbackContainerSelector) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ChangePasswordHandler);

    // Minimum length of the generated password.
    this.minLength = options.minLength || 8;

    // Feedback container holds messages representing password strength.
    this.$feedbackContainer = $(passwordStrengthFeedbackContainerSelector);

    return {
      watchPasswordStrength: function watchPasswordStrength($input) {
        return _this.watchPasswordStrength($input);
      },
      generatePassword: function generatePassword($input) {
        return _this.generatePassword($input);
      }
    };
  }

  /**
   * Watch password, which is entered in the input, strength and inform about it.
   *
   * @param {jQuery} $input the input to watch.
   */


  _createClass(ChangePasswordHandler, [{
    key: 'watchPasswordStrength',
    value: function watchPasswordStrength($input) {
      var _this2 = this;

      $.passy.requirements.length.min = this.minLength;
      $.passy.requirements.characters = 'DIGIT';

      $input.each(function (index, element) {
        var $outputContainer = $('<span>');

        $outputContainer.insertAfter($(element));

        $(element).passy(function (strength, valid) {
          _this2._displayFeedback($outputContainer, strength, valid);
        });
      });
    }

    /**
     * Generates a password and fills it to given input.
     *
     * @param {jQuery} $input the input to fill the password into.
     */

  }, {
    key: 'generatePassword',
    value: function generatePassword($input) {
      $input.passy('generate', this.minLength);
    }

    /**
     * Display feedback about password's strength.
     *
     * @param {jQuery} $outputContainer a container to put feedback output into.
     * @param {number} passwordStrength
     * @param {boolean} isPasswordValid
     *
     * @private
     */

  }, {
    key: '_displayFeedback',
    value: function _displayFeedback($outputContainer, passwordStrength, isPasswordValid) {
      var feedback = this._getPasswordStrengthFeedback(passwordStrength);
      $outputContainer.text(feedback.message);
      $outputContainer.removeClass('text-danger text-warning text-success');
      $outputContainer.addClass(feedback.elementClass);
      $outputContainer.toggleClass('d-none', !isPasswordValid);
    }

    /**
     * Get feedback that describes given password strength.
     * Response contains text message and element class.
     *
     * @param {number} strength
     *
     * @private
     */

  }, {
    key: '_getPasswordStrengthFeedback',
    value: function _getPasswordStrengthFeedback(strength) {
      switch (strength) {
        case $.passy.strength.LOW:
          return {
            message: this.$feedbackContainer.find('.strength-low').text(),
            elementClass: 'text-danger'
          };

        case $.passy.strength.MEDIUM:
          return {
            message: this.$feedbackContainer.find('.strength-medium').text(),
            elementClass: 'text-warning'
          };

        case $.passy.strength.HIGH:
          return {
            message: this.$feedbackContainer.find('.strength-high').text(),
            elementClass: 'text-success'
          };

        case $.passy.strength.EXTREME:
          return {
            message: this.$feedbackContainer.find('.strength-extreme').text(),
            elementClass: 'text-success'
          };
      }

      throw 'Invalid password strength indicator.';
    }
  }]);

  return ChangePasswordHandler;
}();

exports.default = ChangePasswordHandler;

/***/ }),

/***/ 330:
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

var _changePasswordHandler = __webpack_require__(329);

var _changePasswordHandler2 = _interopRequireDefault(_changePasswordHandler);

var _passwordValidator = __webpack_require__(333);

var _passwordValidator2 = _interopRequireDefault(_passwordValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = window.$;

/**
 * Class responsible for actions related to "change password" form type.
 * Generates random passwords, validates new password and it's confirmation,
 * displays error messages related to validation.
 */

var ChangePasswordControl = function () {
  function ChangePasswordControl(inputsBlockSelector, showButtonSelector, hideButtonSelector, generatePasswordButtonSelector, oldPasswordInputSelector, newPasswordInputSelector, confirmNewPasswordInputSelector, generatedPasswordDisplaySelector, passwordStrengthFeedbackContainerSelector) {
    _classCallCheck(this, ChangePasswordControl);

    // Block that contains password inputs
    this.$inputsBlock = $(inputsBlockSelector);

    // Button that shows the password inputs block
    this.showButtonSelector = showButtonSelector;

    // Button that hides the password inputs block
    this.hideButtonSelector = hideButtonSelector;

    // Button that generates a random password
    this.generatePasswordButtonSelector = generatePasswordButtonSelector;

    // Input to enter old password
    this.oldPasswordInputSelector = oldPasswordInputSelector;

    // Input to enter new password
    this.newPasswordInputSelector = newPasswordInputSelector;

    // Input to confirm the new password
    this.confirmNewPasswordInputSelector = confirmNewPasswordInputSelector;

    // Input that displays generated random password
    this.generatedPasswordDisplaySelector = generatedPasswordDisplaySelector;

    // Main input for password generation
    this.$newPasswordInputs = this.$inputsBlock.find(this.newPasswordInputSelector);

    // Generated password will be copied to these inputs
    this.$copyPasswordInputs = this.$inputsBlock.find(this.confirmNewPasswordInputSelector).add(this.generatedPasswordDisplaySelector);

    // All inputs in the change password block, that are submittable with the form.
    this.$submittableInputs = this.$inputsBlock.find(this.oldPasswordInputSelector).add(this.newPasswordInputSelector).add(this.confirmNewPasswordInputSelector);

    this.passwordHandler = new _changePasswordHandler2.default(passwordStrengthFeedbackContainerSelector);

    this.passwordValidator = new _passwordValidator2.default(this.newPasswordInputSelector, this.confirmNewPasswordInputSelector);

    this._hideInputsBlock();
    this._initEvents();

    return {};
  }

  /**
   * Initialize events.
   *
   * @private
   */


  _createClass(ChangePasswordControl, [{
    key: "_initEvents",
    value: function _initEvents() {
      var _this = this;

      // Show the inputs block when show button is clicked
      $(document).on('click', this.showButtonSelector, function (e) {
        _this._hide($(e.currentTarget));
        _this._showInputsBlock();
      });

      $(document).on('click', this.hideButtonSelector, function () {
        _this._hideInputsBlock();
        _this._show($(_this.showButtonSelector));
      });

      // Watch and display feedback about password's strength
      this.passwordHandler.watchPasswordStrength(this.$newPasswordInputs);

      $(document).on('click', this.generatePasswordButtonSelector, function () {
        // Generate the password into main input.
        _this.passwordHandler.generatePassword(_this.$newPasswordInputs);

        // Copy the generated password from main input to additional inputs
        _this.$copyPasswordInputs.val(_this.$newPasswordInputs.val());
        _this._checkPasswordValidity();
      });

      // Validate new password and it's confirmation when any of the inputs is changed
      $(document).on('keyup', this.newPasswordInputSelector + "," + this.confirmNewPasswordInputSelector, function () {
        _this._checkPasswordValidity();
      });

      // Prevent submitting the form if new password is not valid
      $(document).on('submit', $(this.oldPasswordInputSelector).closest('form'), function (event) {
        // If password input is disabled - we don't need to validate it.
        if ($(_this.oldPasswordInputSelector).is(':disabled')) {
          return;
        }

        if (!_this.passwordValidator.isPasswordValid()) {
          event.preventDefault();
        }
      });
    }

    /**
     * Check if password is valid, show error messages if it's not.
     *
     * @private
     */

  }, {
    key: "_checkPasswordValidity",
    value: function _checkPasswordValidity() {
      var $firstPasswordErrorContainer = $(this.newPasswordInputSelector).parent().find('.form-text');
      var $secondPasswordErrorContainer = $(this.confirmNewPasswordInputSelector).parent().find('.form-text');

      $firstPasswordErrorContainer.text(this._getPasswordLengthValidationMessage()).toggleClass('text-danger', !this.passwordValidator.isPasswordLengthValid());

      $secondPasswordErrorContainer.text(this._getPasswordConfirmationValidationMessage()).toggleClass('text-danger', !this.passwordValidator.isPasswordMatchingConfirmation());
    }

    /**
     * Get password confirmation validation message.
     *
     * @returns {String}
     *
     * @private
     */

  }, {
    key: "_getPasswordConfirmationValidationMessage",
    value: function _getPasswordConfirmationValidationMessage() {
      if (!this.passwordValidator.isPasswordMatchingConfirmation()) {
        return $(this.confirmNewPasswordInputSelector).data('invalid-password');
      }

      return '';
    }

    /**
     * Get password length validation message.
     *
     * @returns {String}
     *
     * @private
     */

  }, {
    key: "_getPasswordLengthValidationMessage",
    value: function _getPasswordLengthValidationMessage() {
      if (this.passwordValidator.isPasswordTooShort()) {
        return $(this.newPasswordInputSelector).data('password-too-short');
      }

      if (this.passwordValidator.isPasswordTooLong()) {
        return $(this.newPasswordInputSelector).data('password-too-long');
      }

      return '';
    }

    /**
     * Show the password inputs block.
     *
     * @private
     */

  }, {
    key: "_showInputsBlock",
    value: function _showInputsBlock() {
      this._show(this.$inputsBlock);
      this.$submittableInputs.removeAttr('disabled');
      this.$submittableInputs.attr('required', 'required');
    }

    /**
     * Hide the password inputs block.
     *
     * @private
     */

  }, {
    key: "_hideInputsBlock",
    value: function _hideInputsBlock() {
      this._hide(this.$inputsBlock);
      this.$submittableInputs.attr('disabled', 'disabled');
      this.$submittableInputs.removeAttr('required');
      this.$inputsBlock.find('input').val('');
      this.$inputsBlock.find('.form-text').text('');
    }

    /**
     * Hide an element.
     *
     * @param {jQuery} $el
     *
     * @private
     */

  }, {
    key: "_hide",
    value: function _hide($el) {
      $el.addClass('d-none');
    }

    /**
     * Show hidden element.
     *
     * @param {jQuery} $el
     *
     * @private
     */

  }, {
    key: "_show",
    value: function _show($el) {
      $el.removeClass('d-none');
    }
  }]);

  return ChangePasswordControl;
}();

exports.default = ChangePasswordControl;

/***/ }),

/***/ 333:
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
 * Class responsible for checking password's validity.
 * Can validate entered password's length against min/max values.
 * If password confirmation input is provided, can validate if entered password is matching confirmation.
 */
var PasswordValidator = function () {

  /**
   * @param {String} passwordInputSelector selector of the password input.
   * @param {String|null} confirmPasswordInputSelector (optional) selector for the password confirmation input.
   * @param {Object} options allows overriding default options.
   */
  function PasswordValidator(passwordInputSelector) {
    var confirmPasswordInputSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, PasswordValidator);

    this.newPasswordInput = document.querySelector(passwordInputSelector);
    this.confirmPasswordInput = document.querySelector(confirmPasswordInputSelector);

    // Minimum allowed length for entered password
    this.minPasswordLength = options.minPasswordLength || 8;

    // Maximum allowed length for entered password
    this.maxPasswordLength = options.maxPasswordLength || 255;
  }

  /**
   * Check if the password is valid.
   *
   * @returns {boolean}
   */


  _createClass(PasswordValidator, [{
    key: 'isPasswordValid',
    value: function isPasswordValid() {
      if (this.confirmPasswordInput && !this.isPasswordMatchingConfirmation()) {
        return false;
      }

      return this.isPasswordLengthValid();
    }

    /**
     * Check if password's length is valid.
     *
     * @returns {boolean}
     */

  }, {
    key: 'isPasswordLengthValid',
    value: function isPasswordLengthValid() {
      return !this.isPasswordTooShort() && !this.isPasswordTooLong();
    }

    /**
     * Check if password is matching it's confirmation.
     *
     * @returns {boolean}
     */

  }, {
    key: 'isPasswordMatchingConfirmation',
    value: function isPasswordMatchingConfirmation() {
      if (!this.confirmPasswordInput) {
        throw 'Confirm password input is not provided for the password validator.';
      }

      if (this.confirmPasswordInput.value === '') {
        return true;
      }

      return this.newPasswordInput.value === this.confirmPasswordInput.value;
    }

    /**
     * Check if password is too short.
     *
     * @returns {boolean}
     */

  }, {
    key: 'isPasswordTooShort',
    value: function isPasswordTooShort() {
      return this.newPasswordInput.value.length < this.minPasswordLength;
    }

    /**
     * Check if password is too long.
     *
     * @returns {boolean}
     */

  }, {
    key: 'isPasswordTooLong',
    value: function isPasswordTooLong() {
      return this.newPasswordInput.value.length > this.maxPasswordLength;
    }
  }]);

  return PasswordValidator;
}();

exports.default = PasswordValidator;

/***/ }),

/***/ 354:
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
 * Defines all selectors that are used in employee add/edit form.
 */
exports.default = {
  shopChoiceTree: '#employee_shop_association',
  profileSelect: '#employee_profile',
  defaultPageSelect: '#employee_default_page',
  addonsConnectForm: '#addons-connect-form',
  addonsLoginButton: '#addons_login_btn',

  // selectors related to "change password" form control
  changePasswordInputsBlock: '.js-change-password-block',
  showChangePasswordBlockButton: '.js-change-password',
  hideChangePasswordBlockButton: '.js-change-password-cancel',
  generatePasswordButton: '#employee_change_password_generate_password_button',
  oldPasswordInput: '#employee_change_password_old_password',
  newPasswordInput: '#employee_change_password_new_password_first',
  confirmNewPasswordInput: '#employee_change_password_new_password_second',
  generatedPasswordDisplayInput: '#employee_change_password_generated_password',
  passwordStrengthFeedbackContainer: '.js-password-strength-feedback'
};

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _EmployeeForm = __webpack_require__(274);

var _EmployeeForm2 = _interopRequireDefault(_EmployeeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  new _EmployeeForm2.default();
}); /**
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDM1OThmODA5NTYyZTVhMmYxMDI/NWI0MioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIj8wY2I4KioqKioqKiIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2Zvcm0vY2hvaWNlLXRyZWUuanM/NTQxYSoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vanMvcGFnZXMvZW1wbG95ZWUvRW1wbG95ZWVGb3JtLmpzIiwid2VicGFjazovLy8uL2pzL2NvbXBvbmVudHMvYWRkb25zLWNvbm5lY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2pzL2NvbXBvbmVudHMvZm9ybS9jaGFuZ2UtcGFzc3dvcmQtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL3Bhc3N3b3JkLXZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wYWdlcy9lbXBsb3llZS9lbXBsb3llZS1mb3JtLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wYWdlcy9lbXBsb3llZS9mb3JtLmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJDaG9pY2VUcmVlIiwidHJlZVNlbGVjdG9yIiwiJGNvbnRhaW5lciIsIm9uIiwiZXZlbnQiLCIkaW5wdXRXcmFwcGVyIiwiY3VycmVudFRhcmdldCIsIl90b2dnbGVDaGlsZFRyZWUiLCIkYWN0aW9uIiwiX3RvZ2dsZVRyZWUiLCJlbmFibGVBdXRvQ2hlY2tDaGlsZHJlbiIsImVuYWJsZUFsbElucHV0cyIsImRpc2FibGVBbGxJbnB1dHMiLCIkY2xpY2tlZENoZWNrYm94IiwiJGl0ZW1XaXRoQ2hpbGRyZW4iLCJjbG9zZXN0IiwiZmluZCIsInByb3AiLCJpcyIsInJlbW92ZUF0dHIiLCJhdHRyIiwiJHBhcmVudFdyYXBwZXIiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCIkcGFyZW50Q29udGFpbmVyIiwiYWN0aW9uIiwiZGF0YSIsImNvbmZpZyIsImV4cGFuZCIsImNvbGxhcHNlIiwibmV4dEFjdGlvbiIsInRleHQiLCJpY29uIiwiZWFjaCIsImluZGV4IiwiaXRlbSIsIiRpdGVtIiwiRW1wbG95ZWVGb3JtIiwic2hvcENob2ljZVRyZWVTZWxlY3RvciIsImVtcGxveWVlRm9ybU1hcCIsInNob3BDaG9pY2VUcmVlIiwiZW1wbG95ZWVQcm9maWxlU2VsZWN0b3IiLCJwcm9maWxlU2VsZWN0IiwidGFic0Ryb3Bkb3duU2VsZWN0b3IiLCJkZWZhdWx0UGFnZVNlbGVjdCIsIkFkZG9uc0Nvbm5lY3RvciIsImFkZG9uc0Nvbm5lY3RGb3JtIiwiYWRkb25zTG9naW5CdXR0b24iLCJDaGFuZ2VQYXNzd29yZENvbnRyb2wiLCJjaGFuZ2VQYXNzd29yZElucHV0c0Jsb2NrIiwic2hvd0NoYW5nZVBhc3N3b3JkQmxvY2tCdXR0b24iLCJoaWRlQ2hhbmdlUGFzc3dvcmRCbG9ja0J1dHRvbiIsImdlbmVyYXRlUGFzc3dvcmRCdXR0b24iLCJvbGRQYXNzd29yZElucHV0IiwibmV3UGFzc3dvcmRJbnB1dCIsImNvbmZpcm1OZXdQYXNzd29yZElucHV0IiwiZ2VuZXJhdGVkUGFzc3dvcmREaXNwbGF5SW5wdXQiLCJwYXNzd29yZFN0cmVuZ3RoRmVlZGJhY2tDb250YWluZXIiLCJfaW5pdEV2ZW50cyIsIl90b2dnbGVTaG9wVHJlZSIsIiRlbXBsb3llZVByb2ZpbGVzRHJvcGRvd24iLCJnZXRUYWJzVXJsIiwiZG9jdW1lbnQiLCJnZXQiLCJwcm9maWxlSWQiLCJ2YWwiLCJ0YWJzIiwiX3JlbG9hZFRhYnNEcm9wZG93biIsImFjY2Vzc2libGVUYWJzIiwiJHRhYnNEcm9wZG93biIsImVtcHR5Iiwia2V5IiwibGVuZ3RoIiwiJG9wdGdyb3VwIiwiX2NyZWF0ZU9wdGlvbkdyb3VwIiwiY2hpbGRLZXkiLCJhcHBlbmQiLCJfY3JlYXRlT3B0aW9uIiwiJGVtcGxveWVlUHJvZmlsZURyb3Bkb3duIiwic3VwZXJBZG1pblByb2ZpbGVJZCIsInRvZ2dsZUNsYXNzIiwibmFtZSIsInZhbHVlIiwiYWRkb25zQ29ubmVjdEZvcm1TZWxlY3RvciIsImxvYWRpbmdTcGlubmVyU2VsZWN0b3IiLCIkbG9hZGluZ1NwaW5uZXIiLCIkZm9ybSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiX2Nvbm5lY3QiLCJzZXJpYWxpemUiLCJhZGRvbnNDb25uZWN0VXJsIiwiZm9ybURhdGEiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGF0YVR5cGUiLCJiZWZvcmVTZW5kIiwic2hvdyIsImhpZGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwibG9jYXRpb24iLCJyZWxvYWQiLCJncm93bCIsImVycm9yIiwibWVzc2FnZSIsImZhZGVJbiIsIkNoYW5nZVBhc3N3b3JkSGFuZGxlciIsInBhc3N3b3JkU3RyZW5ndGhGZWVkYmFja0NvbnRhaW5lclNlbGVjdG9yIiwib3B0aW9ucyIsIm1pbkxlbmd0aCIsIiRmZWVkYmFja0NvbnRhaW5lciIsIndhdGNoUGFzc3dvcmRTdHJlbmd0aCIsIiRpbnB1dCIsImdlbmVyYXRlUGFzc3dvcmQiLCJwYXNzeSIsInJlcXVpcmVtZW50cyIsIm1pbiIsImNoYXJhY3RlcnMiLCJlbGVtZW50IiwiJG91dHB1dENvbnRhaW5lciIsImluc2VydEFmdGVyIiwic3RyZW5ndGgiLCJ2YWxpZCIsIl9kaXNwbGF5RmVlZGJhY2siLCJwYXNzd29yZFN0cmVuZ3RoIiwiaXNQYXNzd29yZFZhbGlkIiwiZmVlZGJhY2siLCJfZ2V0UGFzc3dvcmRTdHJlbmd0aEZlZWRiYWNrIiwiZWxlbWVudENsYXNzIiwiTE9XIiwiTUVESVVNIiwiSElHSCIsIkVYVFJFTUUiLCJpbnB1dHNCbG9ja1NlbGVjdG9yIiwic2hvd0J1dHRvblNlbGVjdG9yIiwiaGlkZUJ1dHRvblNlbGVjdG9yIiwiZ2VuZXJhdGVQYXNzd29yZEJ1dHRvblNlbGVjdG9yIiwib2xkUGFzc3dvcmRJbnB1dFNlbGVjdG9yIiwibmV3UGFzc3dvcmRJbnB1dFNlbGVjdG9yIiwiY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRTZWxlY3RvciIsImdlbmVyYXRlZFBhc3N3b3JkRGlzcGxheVNlbGVjdG9yIiwiJGlucHV0c0Jsb2NrIiwiJG5ld1Bhc3N3b3JkSW5wdXRzIiwiJGNvcHlQYXNzd29yZElucHV0cyIsImFkZCIsIiRzdWJtaXR0YWJsZUlucHV0cyIsInBhc3N3b3JkSGFuZGxlciIsInBhc3N3b3JkVmFsaWRhdG9yIiwiUGFzc3dvcmRWYWxpZGF0b3IiLCJfaGlkZUlucHV0c0Jsb2NrIiwiZSIsIl9oaWRlIiwiX3Nob3dJbnB1dHNCbG9jayIsIl9zaG93IiwiX2NoZWNrUGFzc3dvcmRWYWxpZGl0eSIsIiRmaXJzdFBhc3N3b3JkRXJyb3JDb250YWluZXIiLCJwYXJlbnQiLCIkc2Vjb25kUGFzc3dvcmRFcnJvckNvbnRhaW5lciIsIl9nZXRQYXNzd29yZExlbmd0aFZhbGlkYXRpb25NZXNzYWdlIiwiaXNQYXNzd29yZExlbmd0aFZhbGlkIiwiX2dldFBhc3N3b3JkQ29uZmlybWF0aW9uVmFsaWRhdGlvbk1lc3NhZ2UiLCJpc1Bhc3N3b3JkTWF0Y2hpbmdDb25maXJtYXRpb24iLCJpc1Bhc3N3b3JkVG9vU2hvcnQiLCJpc1Bhc3N3b3JkVG9vTG9uZyIsIiRlbCIsInBhc3N3b3JkSW5wdXRTZWxlY3RvciIsImNvbmZpcm1QYXNzd29yZElucHV0U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwiY29uZmlybVBhc3N3b3JkSW5wdXQiLCJtaW5QYXNzd29yZExlbmd0aCIsIm1heFBhc3N3b3JkTGVuZ3RoIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FB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QUM5QixjQUFNLG9FQUFOO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLQSxvQkFBTCxDQUEwQnpGLEtBQTFCLEtBQW9DLEVBQXhDLEVBQTRDO0FBQzFDLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQU8sS0FBSzVCLGdCQUFMLENBQXNCNEIsS0FBdEIsS0FBZ0MsS0FBS3lGLG9CQUFMLENBQTBCekYsS0FBakU7QUFDRDs7QUFFRDs7Ozs7Ozs7eUNBS3FCO0FBQ25CLGFBQU8sS0FBSzVCLGdCQUFMLENBQXNCNEIsS0FBdEIsQ0FBNEJWLE1BQTVCLEdBQXFDLEtBQUtvRyxpQkFBakQ7QUFDRDs7QUFFRDs7Ozs7Ozs7d0NBS29CO0FBQ2xCLGFBQU8sS0FBS3RILGdCQUFMLENBQXNCNEIsS0FBdEIsQ0FBNEJWLE1BQTVCLEdBQXFDLEtBQUtxRyxpQkFBakQ7QUFDRDs7Ozs7O2tCQXpFa0J0QixpQjs7Ozs7Ozs7Ozs7OztBQzlCckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7OztrQkFHZTtBQUNiL0csa0JBQWdCLDRCQURIO0FBRWJFLGlCQUFlLG1CQUZGO0FBR2JFLHFCQUFtQix3QkFITjtBQUliRSxxQkFBbUIsc0JBSk47QUFLYkMscUJBQW1CLG1CQUxOOztBQU9iO0FBQ0FFLDZCQUEyQiwyQkFSZDtBQVNiQyxpQ0FBK0IscUJBVGxCO0FBVWJDLGlDQUErQiw0QkFWbEI7QUFXYkMsMEJBQXdCLG9EQVhYO0FBWWJDLG9CQUFrQix3Q0FaTDtBQWFiQyxvQkFBa0IsOENBYkw7QUFjYkMsMkJBQXlCLCtDQWRaO0FBZWJDLGlDQUErQiw4Q0FmbEI7QUFnQmJDLHFDQUFtQztBQWhCdEIsQzs7Ozs7Ozs7OztBQ0hmOzs7Ozs7QUFFQTVELEVBQUUsWUFBTTtBQUNOLE1BQUl3QyxzQkFBSjtBQUNELENBRkQsRSxDQTNCQSIsImZpbGUiOiJlbXBsb3llZV9mb3JtLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzU1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMzU5OGY4MDk1NjJlNWEyZjEwMiIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqUXVlcnlcIl07IH0oKSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNiAxNSAxOSAzNCAzNSA0MSA0MiA0OCIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5cbmNvbnN0ICQgPSB3aW5kb3cuJDtcblxuLyoqXG4gKiBIYW5kbGVzIFVJIGludGVyYWN0aW9ucyBvZiBjaG9pY2UgdHJlZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VUcmVlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0cmVlU2VsZWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHRyZWVTZWxlY3Rvcikge1xuICAgIHRoaXMuJGNvbnRhaW5lciA9ICQodHJlZVNlbGVjdG9yKTtcblxuICAgIHRoaXMuJGNvbnRhaW5lci5vbignY2xpY2snLCAnLmpzLWlucHV0LXdyYXBwZXInLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0ICRpbnB1dFdyYXBwZXIgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICB0aGlzLl90b2dnbGVDaGlsZFRyZWUoJGlucHV0V3JhcHBlcik7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRjb250YWluZXIub24oJ2NsaWNrJywgJy5qcy10b2dnbGUtY2hvaWNlLXRyZWUtYWN0aW9uJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCAkYWN0aW9uID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgdGhpcy5fdG9nZ2xlVHJlZSgkYWN0aW9uKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBlbmFibGVBdXRvQ2hlY2tDaGlsZHJlbjogKCkgPT4gdGhpcy5lbmFibGVBdXRvQ2hlY2tDaGlsZHJlbigpLFxuICAgICAgZW5hYmxlQWxsSW5wdXRzOiAoKSA9PiB0aGlzLmVuYWJsZUFsbElucHV0cygpLFxuICAgICAgZGlzYWJsZUFsbElucHV0czogKCkgPT4gdGhpcy5kaXNhYmxlQWxsSW5wdXRzKCksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYXV0b21hdGljIGNoZWNrL3VuY2hlY2sgb2YgY2xpY2tlZCBpdGVtJ3MgY2hpbGRyZW4uXG4gICAqL1xuICBlbmFibGVBdXRvQ2hlY2tDaGlsZHJlbigpIHtcbiAgICB0aGlzLiRjb250YWluZXIub24oJ2NoYW5nZScsICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tib3ggPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgY29uc3QgJGl0ZW1XaXRoQ2hpbGRyZW4gPSAkY2xpY2tlZENoZWNrYm94LmNsb3Nlc3QoJ2xpJyk7XG5cbiAgICAgICRpdGVtV2l0aENoaWxkcmVuXG4gICAgICAgIC5maW5kKCd1bCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVxuICAgICAgICAucHJvcCgnY2hlY2tlZCcsICRjbGlja2VkQ2hlY2tib3guaXMoJzpjaGVja2VkJykpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBhbGwgaW5wdXRzIGluIHRoZSBjaG9pY2UgdHJlZS5cbiAgICovXG4gIGVuYWJsZUFsbElucHV0cygpIHtcbiAgICB0aGlzLiRjb250YWluZXIuZmluZCgnaW5wdXQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYWxsIGlucHV0cyBpbiB0aGUgY2hvaWNlIHRyZWUuXG4gICAqL1xuICBkaXNhYmxlQWxsSW5wdXRzKCkge1xuICAgIHRoaXMuJGNvbnRhaW5lci5maW5kKCdpbnB1dCcpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29sbGFwc2Ugb3IgZXhwYW5kIHN1Yi10cmVlIGZvciBzaW5nbGUgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkaW5wdXRXcmFwcGVyXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdG9nZ2xlQ2hpbGRUcmVlKCRpbnB1dFdyYXBwZXIpIHtcbiAgICBjb25zdCAkcGFyZW50V3JhcHBlciA9ICRpbnB1dFdyYXBwZXIuY2xvc2VzdCgnbGknKTtcblxuICAgIGlmICgkcGFyZW50V3JhcHBlci5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xuICAgICAgJHBhcmVudFdyYXBwZXJcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpXG4gICAgICAgIC5hZGRDbGFzcygnY29sbGFwc2VkJyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoJHBhcmVudFdyYXBwZXIuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKSB7XG4gICAgICAkcGFyZW50V3JhcHBlclxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpXG4gICAgICAgIC5hZGRDbGFzcygnZXhwYW5kZWQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGFwc2Ugb3IgZXhwYW5kIHdob2xlIHRyZWVcbiAgICpcbiAgICogQHBhcmFtIHtqUXVlcnl9ICRhY3Rpb25cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF90b2dnbGVUcmVlKCRhY3Rpb24pIHtcbiAgICBjb25zdCAkcGFyZW50Q29udGFpbmVyID0gJGFjdGlvbi5jbG9zZXN0KCcuanMtY2hvaWNlLXRyZWUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgYWN0aW9uID0gJGFjdGlvbi5kYXRhKCdhY3Rpb24nKTtcblxuICAgIC8vIHRvZ2dsZSBhY3Rpb24gY29uZmlndXJhdGlvblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGFkZENsYXNzOiB7XG4gICAgICAgIGV4cGFuZDogJ2V4cGFuZGVkJyxcbiAgICAgICAgY29sbGFwc2U6ICdjb2xsYXBzZWQnLFxuICAgICAgfSxcbiAgICAgIHJlbW92ZUNsYXNzOiB7XG4gICAgICAgIGV4cGFuZDogJ2NvbGxhcHNlZCcsXG4gICAgICAgIGNvbGxhcHNlOiAnZXhwYW5kZWQnLFxuICAgICAgfSxcbiAgICAgIG5leHRBY3Rpb246IHtcbiAgICAgICAgZXhwYW5kOiAnY29sbGFwc2UnLFxuICAgICAgICBjb2xsYXBzZTogJ2V4cGFuZCcsXG4gICAgICB9LFxuICAgICAgdGV4dDoge1xuICAgICAgICBleHBhbmQ6ICdjb2xsYXBzZWQtdGV4dCcsXG4gICAgICAgIGNvbGxhcHNlOiAnZXhwYW5kZWQtdGV4dCcsXG4gICAgICB9LFxuICAgICAgaWNvbjoge1xuICAgICAgICBleHBhbmQ6ICdjb2xsYXBzZWQtaWNvbicsXG4gICAgICAgIGNvbGxhcHNlOiAnZXhwYW5kZWQtaWNvbicsXG4gICAgICB9XG4gICAgfTtcblxuICAgICRwYXJlbnRDb250YWluZXIuZmluZCgnbGknKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgY29uc3QgJGl0ZW0gPSAkKGl0ZW0pO1xuXG4gICAgICBpZiAoJGl0ZW0uaGFzQ2xhc3MoY29uZmlnLnJlbW92ZUNsYXNzW2FjdGlvbl0pKSB7XG4gICAgICAgICAgJGl0ZW0ucmVtb3ZlQ2xhc3MoY29uZmlnLnJlbW92ZUNsYXNzW2FjdGlvbl0pXG4gICAgICAgICAgICAuYWRkQ2xhc3MoY29uZmlnLmFkZENsYXNzW2FjdGlvbl0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJGFjdGlvbi5kYXRhKCdhY3Rpb24nLCBjb25maWcubmV4dEFjdGlvblthY3Rpb25dKTtcbiAgICAkYWN0aW9uLmZpbmQoJy5tYXRlcmlhbC1pY29ucycpLnRleHQoJGFjdGlvbi5kYXRhKGNvbmZpZy5pY29uW2FjdGlvbl0pKTtcbiAgICAkYWN0aW9uLmZpbmQoJy5qcy10b2dnbGUtdGV4dCcpLnRleHQoJGFjdGlvbi5kYXRhKGNvbmZpZy50ZXh0W2FjdGlvbl0pKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY29tcG9uZW50cy9mb3JtL2Nob2ljZS10cmVlLmpzIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuaW1wb3J0IENob2ljZVRyZWUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9jaG9pY2UtdHJlZVwiO1xuaW1wb3J0IEFkZG9uc0Nvbm5lY3RvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZGRvbnMtY29ubmVjdG9yXCI7XG5pbXBvcnQgQ2hhbmdlUGFzc3dvcmRDb250cm9sIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm0vY2hhbmdlLXBhc3N3b3JkLWNvbnRyb2xcIjtcbmltcG9ydCBlbXBsb3llZUZvcm1NYXAgZnJvbSBcIi4vZW1wbG95ZWUtZm9ybS1tYXBcIjtcblxuLyoqXG4gKiBDbGFzcyByZXNwb25zaWJsZSBmb3IgamF2YXNjcmlwdCBhY3Rpb25zIGluIGVtcGxveWVlIGFkZC9lZGl0IHBhZ2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcGxveWVlRm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hvcENob2ljZVRyZWVTZWxlY3RvciA9IGVtcGxveWVlRm9ybU1hcC5zaG9wQ2hvaWNlVHJlZTtcbiAgICB0aGlzLnNob3BDaG9pY2VUcmVlID0gbmV3IENob2ljZVRyZWUodGhpcy5zaG9wQ2hvaWNlVHJlZVNlbGVjdG9yKTtcbiAgICB0aGlzLmVtcGxveWVlUHJvZmlsZVNlbGVjdG9yID0gZW1wbG95ZWVGb3JtTWFwLnByb2ZpbGVTZWxlY3Q7XG4gICAgdGhpcy50YWJzRHJvcGRvd25TZWxlY3RvciA9IGVtcGxveWVlRm9ybU1hcC5kZWZhdWx0UGFnZVNlbGVjdDtcblxuICAgIHRoaXMuc2hvcENob2ljZVRyZWUuZW5hYmxlQXV0b0NoZWNrQ2hpbGRyZW4oKTtcblxuICAgIG5ldyBBZGRvbnNDb25uZWN0b3IoXG4gICAgICBlbXBsb3llZUZvcm1NYXAuYWRkb25zQ29ubmVjdEZvcm0sXG4gICAgICBlbXBsb3llZUZvcm1NYXAuYWRkb25zTG9naW5CdXR0b25cbiAgICApO1xuXG4gICAgbmV3IENoYW5nZVBhc3N3b3JkQ29udHJvbChcbiAgICAgIGVtcGxveWVlRm9ybU1hcC5jaGFuZ2VQYXNzd29yZElucHV0c0Jsb2NrLFxuICAgICAgZW1wbG95ZWVGb3JtTWFwLnNob3dDaGFuZ2VQYXNzd29yZEJsb2NrQnV0dG9uLFxuICAgICAgZW1wbG95ZWVGb3JtTWFwLmhpZGVDaGFuZ2VQYXNzd29yZEJsb2NrQnV0dG9uLFxuICAgICAgZW1wbG95ZWVGb3JtTWFwLmdlbmVyYXRlUGFzc3dvcmRCdXR0b24sXG4gICAgICBlbXBsb3llZUZvcm1NYXAub2xkUGFzc3dvcmRJbnB1dCxcbiAgICAgIGVtcGxveWVlRm9ybU1hcC5uZXdQYXNzd29yZElucHV0LFxuICAgICAgZW1wbG95ZWVGb3JtTWFwLmNvbmZpcm1OZXdQYXNzd29yZElucHV0LFxuICAgICAgZW1wbG95ZWVGb3JtTWFwLmdlbmVyYXRlZFBhc3N3b3JkRGlzcGxheUlucHV0LFxuICAgICAgZW1wbG95ZWVGb3JtTWFwLnBhc3N3b3JkU3RyZW5ndGhGZWVkYmFja0NvbnRhaW5lclxuICAgICk7XG5cbiAgICB0aGlzLl9pbml0RXZlbnRzKCk7XG4gICAgdGhpcy5fdG9nZ2xlU2hvcFRyZWUoKTtcblxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBhZ2UncyBldmVudHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdEV2ZW50cygpIHtcbiAgICBjb25zdCAkZW1wbG95ZWVQcm9maWxlc0Ryb3Bkb3duID0gJCh0aGlzLmVtcGxveWVlUHJvZmlsZVNlbGVjdG9yKTtcbiAgICBjb25zdCBnZXRUYWJzVXJsID0gJGVtcGxveWVlUHJvZmlsZXNEcm9wZG93bi5kYXRhKCdnZXQtdGFicy11cmwnKTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCB0aGlzLmVtcGxveWVlUHJvZmlsZVNlbGVjdG9yLCAoKSA9PiB0aGlzLl90b2dnbGVTaG9wVHJlZSgpKTtcblxuICAgIC8vIFJlbG9hZCB0YWJzIGRyb3Bkb3duIHdoZW4gZW1wbG95ZWUgcHJvZmlsZSBpcyBjaGFuZ2VkLlxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCB0aGlzLmVtcGxveWVlUHJvZmlsZVNlbGVjdG9yLCAoZXZlbnQpID0+IHtcbiAgICAgICQuZ2V0KFxuICAgICAgICBnZXRUYWJzVXJsLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvZmlsZUlkOiAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpXG4gICAgICAgIH0sXG4gICAgICAgICh0YWJzKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVsb2FkVGFic0Ryb3Bkb3duKHRhYnMpO1xuICAgICAgICB9LFxuICAgICAgICAnanNvbidcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVsb2FkIHRhYnMgZHJvcGRvd24gd2l0aCBuZXcgY29udGVudC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjY2Vzc2libGVUYWJzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVsb2FkVGFic0Ryb3Bkb3duKGFjY2Vzc2libGVUYWJzKSB7XG4gICAgY29uc3QgJHRhYnNEcm9wZG93biA9ICQodGhpcy50YWJzRHJvcGRvd25TZWxlY3Rvcik7XG5cbiAgICAkdGFic0Ryb3Bkb3duLmVtcHR5KCk7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gYWNjZXNzaWJsZVRhYnMpIHtcbiAgICAgIGlmIChhY2Nlc3NpYmxlVGFic1trZXldWydjaGlsZHJlbiddLmxlbmd0aCA+IDAgJiYgYWNjZXNzaWJsZVRhYnNba2V5XVsnbmFtZSddKSB7XG4gICAgICAgIC8vIElmIHRhYiBoYXMgY2hpbGRyZW4gLSBjcmVhdGUgYW4gb3B0aW9uIGdyb3VwIGFuZCBwdXQgY2hpbGRyZW4gaW5zaWRlLlxuICAgICAgICBjb25zdCAkb3B0Z3JvdXAgPSB0aGlzLl9jcmVhdGVPcHRpb25Hcm91cChhY2Nlc3NpYmxlVGFic1trZXldWyduYW1lJ10pO1xuXG4gICAgICAgIGZvciAobGV0IGNoaWxkS2V5IGluIGFjY2Vzc2libGVUYWJzW2tleV1bJ2NoaWxkcmVuJ10pIHtcbiAgICAgICAgICBpZiAoYWNjZXNzaWJsZVRhYnNba2V5XVsnY2hpbGRyZW4nXVtjaGlsZEtleV1bJ25hbWUnXSkge1xuICAgICAgICAgICAgJG9wdGdyb3VwLmFwcGVuZChcbiAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlT3B0aW9uKFxuICAgICAgICAgICAgICAgIGFjY2Vzc2libGVUYWJzW2tleV1bJ2NoaWxkcmVuJ11bY2hpbGRLZXldWyduYW1lJ10sXG4gICAgICAgICAgICAgICAgYWNjZXNzaWJsZVRhYnNba2V5XVsnY2hpbGRyZW4nXVtjaGlsZEtleV1bJ2lkX3RhYiddKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkdGFic0Ryb3Bkb3duLmFwcGVuZCgkb3B0Z3JvdXApO1xuICAgICAgfSBlbHNlIGlmIChhY2Nlc3NpYmxlVGFic1trZXldWyduYW1lJ10pIHtcbiAgICAgICAgLy8gSWYgdGFiIGRvZXNuJ3QgaGF2ZSBjaGlsZHJlbiAtIGNyZWF0ZSBhbiBvcHRpb24uXG4gICAgICAgICR0YWJzRHJvcGRvd24uYXBwZW5kKFxuICAgICAgICAgIHRoaXMuX2NyZWF0ZU9wdGlvbihcbiAgICAgICAgICAgIGFjY2Vzc2libGVUYWJzW2tleV1bJ25hbWUnXSxcbiAgICAgICAgICAgIGFjY2Vzc2libGVUYWJzW2tleV1bJ2lkX3RhYiddXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHNob3AgY2hvaWNlIHRyZWUgaWYgc3VwZXJhZG1pbiBwcm9maWxlIGlzIHNlbGVjdGVkLCBzaG93IGl0IG90aGVyd2lzZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF90b2dnbGVTaG9wVHJlZSgpIHtcbiAgICBjb25zdCAkZW1wbG95ZWVQcm9maWxlRHJvcGRvd24gPSAkKHRoaXMuZW1wbG95ZWVQcm9maWxlU2VsZWN0b3IpO1xuICAgIGNvbnN0IHN1cGVyQWRtaW5Qcm9maWxlSWQgPSAkZW1wbG95ZWVQcm9maWxlRHJvcGRvd24uZGF0YSgnYWRtaW4tcHJvZmlsZScpO1xuICAgICQodGhpcy5zaG9wQ2hvaWNlVHJlZVNlbGVjdG9yKVxuICAgICAgLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJylcbiAgICAgIC50b2dnbGVDbGFzcygnZC1ub25lJywgJGVtcGxveWVlUHJvZmlsZURyb3Bkb3duLnZhbCgpID09IHN1cGVyQWRtaW5Qcm9maWxlSWQpXG4gICAgO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gPG9wdGdyb3VwPiBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAqXG4gICAqIEByZXR1cm5zIHtqUXVlcnl9XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY3JlYXRlT3B0aW9uR3JvdXAobmFtZSkge1xuICAgIHJldHVybiAkKGA8b3B0Z3JvdXAgbGFiZWw9XCIke25hbWV9XCI+YCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiA8b3B0aW9uPiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICpcbiAgICogQHJldHVybnMge2pRdWVyeX1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jcmVhdGVPcHRpb24obmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gJChgPG9wdGlvbiB2YWx1ZT1cIiR7dmFsdWV9XCI+JHtuYW1lfTwvb3B0aW9uPmApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9wYWdlcy9lbXBsb3llZS9FbXBsb3llZUZvcm0uanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG5jb25zdCAkID0gd2luZG93LiQ7XG5cbi8qKlxuICogUmVzcG9uc2libGUgZm9yIGNvbm5lY3RpbmcgdG8gYWRkb25zIG1hcmtldHBsYWNlLlxuICogTWFrZXMgYW4gYWRkb25zIGNvbm5lY3QgcmVxdWVzdCB0byB0aGUgc2VydmVyLCBkaXNwbGF5cyBlcnJvciBtZXNzYWdlcyBpZiBpdCBmYWlscy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkb25zQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgYWRkb25zQ29ubmVjdEZvcm1TZWxlY3RvcixcbiAgICBsb2FkaW5nU3Bpbm5lclNlbGVjdG9yXG4gICkge1xuICAgIHRoaXMuYWRkb25zQ29ubmVjdEZvcm1TZWxlY3RvciA9IGFkZG9uc0Nvbm5lY3RGb3JtU2VsZWN0b3I7XG4gICAgdGhpcy4kbG9hZGluZ1NwaW5uZXIgPSAkKGxvYWRpbmdTcGlubmVyU2VsZWN0b3IpO1xuXG4gICAgdGhpcy5faW5pdEV2ZW50cygpO1xuXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZXZlbnRzIHJlbGF0ZWQgdG8gY29ubmVjdGlvbiB0byBhZGRvbnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdEV2ZW50cygpIHtcbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsIHRoaXMuYWRkb25zQ29ubmVjdEZvcm1TZWxlY3RvciwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCAkZm9ybSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHRoaXMuX2Nvbm5lY3QoJGZvcm0uYXR0cignYWN0aW9uJyksICRmb3JtLnNlcmlhbGl6ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEbyBhIFBPU1QgcmVxdWVzdCB0byBjb25uZWN0IHRvIGFkZG9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFkZG9uc0Nvbm5lY3RVcmxcbiAgICogQHBhcmFtIHtPYmplY3R9IGZvcm1EYXRhXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29ubmVjdChhZGRvbnNDb25uZWN0VXJsLCBmb3JtRGF0YSkge1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogYWRkb25zQ29ubmVjdFVybCxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy4kbG9hZGluZ1NwaW5uZXIuc2hvdygpO1xuICAgICAgICAkKCdidXR0b24uYnRuW3R5cGU9XCJzdWJtaXRcIl0nLCB0aGlzLmFkZG9uc0Nvbm5lY3RGb3JtU2VsZWN0b3IpLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IDEpIHtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkLmdyb3dsLmVycm9yKHtcbiAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5tZXNzYWdlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGxvYWRpbmdTcGlubmVyLmhpZGUoKTtcbiAgICAgICAgJCgnYnV0dG9uLmJ0blt0eXBlPVwic3VibWl0XCJdJywgdGhpcy5hZGRvbnNDb25uZWN0Rm9ybVNlbGVjdG9yKS5mYWRlSW4oKTtcbiAgICAgIH1cbiAgICB9LCAoKSA9PiB7XG4gICAgICAkLmdyb3dsLmVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogJCh0aGlzLmFkZG9uc0Nvbm5lY3RGb3JtU2VsZWN0b3IpLmRhdGEoJ2Vycm9yLW1lc3NhZ2UnKSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLiRsb2FkaW5nU3Bpbm5lci5oaWRlKCk7XG4gICAgICAkKCdidXR0b24uYnRuW3R5cGU9XCJzdWJtaXRcIl0nLCB0aGlzLmFkZG9uc0Nvbm5lY3RGb3JtU2VsZWN0b3IpLnNob3coKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY29tcG9uZW50cy9hZGRvbnMtY29ubmVjdG9yLmpzIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuY29uc3QgJCA9IHdpbmRvdy4kO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHBhc3N3b3JkIGFuZCBpbmZvcm1zIGFib3V0IGl0J3Mgc3RyZW5ndGguXG4gKiBZb3UgY2FuIHBhc3MgYSBwYXNzd29yZCBpbnB1dCB0byB3YXRjaCB0aGUgcGFzc3dvcmQgc3RyZW5ndGggYW5kIGRpc3BsYXkgZmVlZGJhY2sgbWVzc2FnZXMuXG4gKiBZb3UgY2FuIGFsc28gZ2VuZXJhdGUgYSByYW5kb20gcGFzc3dvcmQgaW50byBhbiBpbnB1dC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocGFzc3dvcmRTdHJlbmd0aEZlZWRiYWNrQ29udGFpbmVyU2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkge1xuICAgIC8vIE1pbmltdW0gbGVuZ3RoIG9mIHRoZSBnZW5lcmF0ZWQgcGFzc3dvcmQuXG4gICAgdGhpcy5taW5MZW5ndGggPSBvcHRpb25zLm1pbkxlbmd0aCB8fCA4O1xuXG4gICAgLy8gRmVlZGJhY2sgY29udGFpbmVyIGhvbGRzIG1lc3NhZ2VzIHJlcHJlc2VudGluZyBwYXNzd29yZCBzdHJlbmd0aC5cbiAgICB0aGlzLiRmZWVkYmFja0NvbnRhaW5lciA9ICQocGFzc3dvcmRTdHJlbmd0aEZlZWRiYWNrQ29udGFpbmVyU2VsZWN0b3IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdhdGNoUGFzc3dvcmRTdHJlbmd0aDogKCRpbnB1dCkgPT4gdGhpcy53YXRjaFBhc3N3b3JkU3RyZW5ndGgoJGlucHV0KSxcbiAgICAgIGdlbmVyYXRlUGFzc3dvcmQ6ICgkaW5wdXQpID0+IHRoaXMuZ2VuZXJhdGVQYXNzd29yZCgkaW5wdXQpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2ggcGFzc3dvcmQsIHdoaWNoIGlzIGVudGVyZWQgaW4gdGhlIGlucHV0LCBzdHJlbmd0aCBhbmQgaW5mb3JtIGFib3V0IGl0LlxuICAgKlxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJGlucHV0IHRoZSBpbnB1dCB0byB3YXRjaC5cbiAgICovXG4gIHdhdGNoUGFzc3dvcmRTdHJlbmd0aCgkaW5wdXQpIHtcbiAgICAkLnBhc3N5LnJlcXVpcmVtZW50cy5sZW5ndGgubWluID0gdGhpcy5taW5MZW5ndGg7XG4gICAgJC5wYXNzeS5yZXF1aXJlbWVudHMuY2hhcmFjdGVycyA9ICdESUdJVCc7XG5cbiAgICAkaW5wdXQuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0ICRvdXRwdXRDb250YWluZXIgPSAkKCc8c3Bhbj4nKTtcblxuICAgICAgJG91dHB1dENvbnRhaW5lci5pbnNlcnRBZnRlcigkKGVsZW1lbnQpKTtcblxuICAgICAgJChlbGVtZW50KS5wYXNzeSgoc3RyZW5ndGgsIHZhbGlkKSA9PiB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlGZWVkYmFjaygkb3V0cHV0Q29udGFpbmVyLCBzdHJlbmd0aCwgdmFsaWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgcGFzc3dvcmQgYW5kIGZpbGxzIGl0IHRvIGdpdmVuIGlucHV0LlxuICAgKlxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJGlucHV0IHRoZSBpbnB1dCB0byBmaWxsIHRoZSBwYXNzd29yZCBpbnRvLlxuICAgKi9cbiAgZ2VuZXJhdGVQYXNzd29yZCgkaW5wdXQpIHtcbiAgICAkaW5wdXQucGFzc3koJ2dlbmVyYXRlJywgdGhpcy5taW5MZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgZmVlZGJhY2sgYWJvdXQgcGFzc3dvcmQncyBzdHJlbmd0aC5cbiAgICpcbiAgICogQHBhcmFtIHtqUXVlcnl9ICRvdXRwdXRDb250YWluZXIgYSBjb250YWluZXIgdG8gcHV0IGZlZWRiYWNrIG91dHB1dCBpbnRvLlxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFzc3dvcmRTdHJlbmd0aFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzUGFzc3dvcmRWYWxpZFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2Rpc3BsYXlGZWVkYmFjaygkb3V0cHV0Q29udGFpbmVyLCBwYXNzd29yZFN0cmVuZ3RoLCBpc1Bhc3N3b3JkVmFsaWQpIHtcbiAgICBjb25zdCBmZWVkYmFjayA9IHRoaXMuX2dldFBhc3N3b3JkU3RyZW5ndGhGZWVkYmFjayhwYXNzd29yZFN0cmVuZ3RoKTtcbiAgICAkb3V0cHV0Q29udGFpbmVyLnRleHQoZmVlZGJhY2subWVzc2FnZSk7XG4gICAgJG91dHB1dENvbnRhaW5lci5yZW1vdmVDbGFzcygndGV4dC1kYW5nZXIgdGV4dC13YXJuaW5nIHRleHQtc3VjY2VzcycpO1xuICAgICRvdXRwdXRDb250YWluZXIuYWRkQ2xhc3MoZmVlZGJhY2suZWxlbWVudENsYXNzKTtcbiAgICAkb3V0cHV0Q29udGFpbmVyLnRvZ2dsZUNsYXNzKCdkLW5vbmUnLCAhaXNQYXNzd29yZFZhbGlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZmVlZGJhY2sgdGhhdCBkZXNjcmliZXMgZ2l2ZW4gcGFzc3dvcmQgc3RyZW5ndGguXG4gICAqIFJlc3BvbnNlIGNvbnRhaW5zIHRleHQgbWVzc2FnZSBhbmQgZWxlbWVudCBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0cmVuZ3RoXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2V0UGFzc3dvcmRTdHJlbmd0aEZlZWRiYWNrKHN0cmVuZ3RoKSB7XG4gICAgc3dpdGNoIChzdHJlbmd0aCkge1xuICAgICAgY2FzZSAkLnBhc3N5LnN0cmVuZ3RoLkxPVzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXNzYWdlOiB0aGlzLiRmZWVkYmFja0NvbnRhaW5lci5maW5kKCcuc3RyZW5ndGgtbG93JykudGV4dCgpLFxuICAgICAgICAgIGVsZW1lbnRDbGFzczogJ3RleHQtZGFuZ2VyJyxcbiAgICAgICAgfTtcblxuICAgICAgY2FzZSAkLnBhc3N5LnN0cmVuZ3RoLk1FRElVTTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXNzYWdlOiB0aGlzLiRmZWVkYmFja0NvbnRhaW5lci5maW5kKCcuc3RyZW5ndGgtbWVkaXVtJykudGV4dCgpLFxuICAgICAgICAgIGVsZW1lbnRDbGFzczogJ3RleHQtd2FybmluZycsXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgJC5wYXNzeS5zdHJlbmd0aC5ISUdIOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuJGZlZWRiYWNrQ29udGFpbmVyLmZpbmQoJy5zdHJlbmd0aC1oaWdoJykudGV4dCgpLFxuICAgICAgICAgIGVsZW1lbnRDbGFzczogJ3RleHQtc3VjY2VzcycsXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgJC5wYXNzeS5zdHJlbmd0aC5FWFRSRU1FOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuJGZlZWRiYWNrQ29udGFpbmVyLmZpbmQoJy5zdHJlbmd0aC1leHRyZW1lJykudGV4dCgpLFxuICAgICAgICAgIGVsZW1lbnRDbGFzczogJ3RleHQtc3VjY2VzcycsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdGhyb3cgJ0ludmFsaWQgcGFzc3dvcmQgc3RyZW5ndGggaW5kaWNhdG9yLic7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkLWhhbmRsZXIuanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG5pbXBvcnQgQ2hhbmdlUGFzc3dvcmRIYW5kbGVyIGZyb20gXCIuLi9jaGFuZ2UtcGFzc3dvcmQtaGFuZGxlclwiO1xuaW1wb3J0IFBhc3N3b3JkVmFsaWRhdG9yIGZyb20gXCIuLi9wYXNzd29yZC12YWxpZGF0b3JcIjtcblxuY29uc3QgJCA9IHdpbmRvdy4kO1xuXG4vKipcbiAqIENsYXNzIHJlc3BvbnNpYmxlIGZvciBhY3Rpb25zIHJlbGF0ZWQgdG8gXCJjaGFuZ2UgcGFzc3dvcmRcIiBmb3JtIHR5cGUuXG4gKiBHZW5lcmF0ZXMgcmFuZG9tIHBhc3N3b3JkcywgdmFsaWRhdGVzIG5ldyBwYXNzd29yZCBhbmQgaXQncyBjb25maXJtYXRpb24sXG4gKiBkaXNwbGF5cyBlcnJvciBtZXNzYWdlcyByZWxhdGVkIHRvIHZhbGlkYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZVBhc3N3b3JkQ29udHJvbCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGlucHV0c0Jsb2NrU2VsZWN0b3IsXG4gICAgc2hvd0J1dHRvblNlbGVjdG9yLFxuICAgIGhpZGVCdXR0b25TZWxlY3RvcixcbiAgICBnZW5lcmF0ZVBhc3N3b3JkQnV0dG9uU2VsZWN0b3IsXG4gICAgb2xkUGFzc3dvcmRJbnB1dFNlbGVjdG9yLFxuICAgIG5ld1Bhc3N3b3JkSW5wdXRTZWxlY3RvcixcbiAgICBjb25maXJtTmV3UGFzc3dvcmRJbnB1dFNlbGVjdG9yLFxuICAgIGdlbmVyYXRlZFBhc3N3b3JkRGlzcGxheVNlbGVjdG9yLFxuICAgIHBhc3N3b3JkU3RyZW5ndGhGZWVkYmFja0NvbnRhaW5lclNlbGVjdG9yXG4gICkge1xuICAgIC8vIEJsb2NrIHRoYXQgY29udGFpbnMgcGFzc3dvcmQgaW5wdXRzXG4gICAgdGhpcy4kaW5wdXRzQmxvY2sgPSAkKGlucHV0c0Jsb2NrU2VsZWN0b3IpO1xuXG4gICAgLy8gQnV0dG9uIHRoYXQgc2hvd3MgdGhlIHBhc3N3b3JkIGlucHV0cyBibG9ja1xuICAgIHRoaXMuc2hvd0J1dHRvblNlbGVjdG9yID0gc2hvd0J1dHRvblNlbGVjdG9yO1xuXG4gICAgLy8gQnV0dG9uIHRoYXQgaGlkZXMgdGhlIHBhc3N3b3JkIGlucHV0cyBibG9ja1xuICAgIHRoaXMuaGlkZUJ1dHRvblNlbGVjdG9yID0gaGlkZUJ1dHRvblNlbGVjdG9yO1xuXG4gICAgLy8gQnV0dG9uIHRoYXQgZ2VuZXJhdGVzIGEgcmFuZG9tIHBhc3N3b3JkXG4gICAgdGhpcy5nZW5lcmF0ZVBhc3N3b3JkQnV0dG9uU2VsZWN0b3IgPSBnZW5lcmF0ZVBhc3N3b3JkQnV0dG9uU2VsZWN0b3I7XG5cbiAgICAvLyBJbnB1dCB0byBlbnRlciBvbGQgcGFzc3dvcmRcbiAgICB0aGlzLm9sZFBhc3N3b3JkSW5wdXRTZWxlY3RvciA9IG9sZFBhc3N3b3JkSW5wdXRTZWxlY3RvcjtcblxuICAgIC8vIElucHV0IHRvIGVudGVyIG5ldyBwYXNzd29yZFxuICAgIHRoaXMubmV3UGFzc3dvcmRJbnB1dFNlbGVjdG9yID0gbmV3UGFzc3dvcmRJbnB1dFNlbGVjdG9yO1xuXG4gICAgLy8gSW5wdXQgdG8gY29uZmlybSB0aGUgbmV3IHBhc3N3b3JkXG4gICAgdGhpcy5jb25maXJtTmV3UGFzc3dvcmRJbnB1dFNlbGVjdG9yID0gY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRTZWxlY3RvcjtcblxuICAgIC8vIElucHV0IHRoYXQgZGlzcGxheXMgZ2VuZXJhdGVkIHJhbmRvbSBwYXNzd29yZFxuICAgIHRoaXMuZ2VuZXJhdGVkUGFzc3dvcmREaXNwbGF5U2VsZWN0b3IgPSBnZW5lcmF0ZWRQYXNzd29yZERpc3BsYXlTZWxlY3RvcjtcblxuICAgIC8vIE1haW4gaW5wdXQgZm9yIHBhc3N3b3JkIGdlbmVyYXRpb25cbiAgICB0aGlzLiRuZXdQYXNzd29yZElucHV0cyA9IHRoaXMuJGlucHV0c0Jsb2NrXG4gICAgICAuZmluZCh0aGlzLm5ld1Bhc3N3b3JkSW5wdXRTZWxlY3Rvcik7XG5cbiAgICAvLyBHZW5lcmF0ZWQgcGFzc3dvcmQgd2lsbCBiZSBjb3BpZWQgdG8gdGhlc2UgaW5wdXRzXG4gICAgdGhpcy4kY29weVBhc3N3b3JkSW5wdXRzID0gdGhpcy4kaW5wdXRzQmxvY2tcbiAgICAgIC5maW5kKHRoaXMuY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRTZWxlY3RvcilcbiAgICAgIC5hZGQodGhpcy5nZW5lcmF0ZWRQYXNzd29yZERpc3BsYXlTZWxlY3Rvcik7XG5cbiAgICAvLyBBbGwgaW5wdXRzIGluIHRoZSBjaGFuZ2UgcGFzc3dvcmQgYmxvY2ssIHRoYXQgYXJlIHN1Ym1pdHRhYmxlIHdpdGggdGhlIGZvcm0uXG4gICAgdGhpcy4kc3VibWl0dGFibGVJbnB1dHMgPSB0aGlzLiRpbnB1dHNCbG9ja1xuICAgICAgLmZpbmQodGhpcy5vbGRQYXNzd29yZElucHV0U2VsZWN0b3IpXG4gICAgICAuYWRkKHRoaXMubmV3UGFzc3dvcmRJbnB1dFNlbGVjdG9yKVxuICAgICAgLmFkZCh0aGlzLmNvbmZpcm1OZXdQYXNzd29yZElucHV0U2VsZWN0b3IpO1xuXG4gICAgdGhpcy5wYXNzd29yZEhhbmRsZXIgPSBuZXcgQ2hhbmdlUGFzc3dvcmRIYW5kbGVyKFxuICAgICAgcGFzc3dvcmRTdHJlbmd0aEZlZWRiYWNrQ29udGFpbmVyU2VsZWN0b3JcbiAgICApO1xuXG4gICAgdGhpcy5wYXNzd29yZFZhbGlkYXRvciA9IG5ldyBQYXNzd29yZFZhbGlkYXRvcihcbiAgICAgIHRoaXMubmV3UGFzc3dvcmRJbnB1dFNlbGVjdG9yLFxuICAgICAgdGhpcy5jb25maXJtTmV3UGFzc3dvcmRJbnB1dFNlbGVjdG9yXG4gICAgKTtcblxuICAgIHRoaXMuX2hpZGVJbnB1dHNCbG9jaygpO1xuICAgIHRoaXMuX2luaXRFdmVudHMoKTtcblxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGV2ZW50cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0RXZlbnRzKCkge1xuICAgIC8vIFNob3cgdGhlIGlucHV0cyBibG9jayB3aGVuIHNob3cgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLnNob3dCdXR0b25TZWxlY3RvciwgKGUpID0+IHtcbiAgICAgIHRoaXMuX2hpZGUoJChlLmN1cnJlbnRUYXJnZXQpKTtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dHNCbG9jaygpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5oaWRlQnV0dG9uU2VsZWN0b3IsICgpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dHNCbG9jaygpO1xuICAgICAgdGhpcy5fc2hvdygkKHRoaXMuc2hvd0J1dHRvblNlbGVjdG9yKSk7XG4gICAgfSk7XG5cbiAgICAvLyBXYXRjaCBhbmQgZGlzcGxheSBmZWVkYmFjayBhYm91dCBwYXNzd29yZCdzIHN0cmVuZ3RoXG4gICAgdGhpcy5wYXNzd29yZEhhbmRsZXIud2F0Y2hQYXNzd29yZFN0cmVuZ3RoKHRoaXMuJG5ld1Bhc3N3b3JkSW5wdXRzKTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMuZ2VuZXJhdGVQYXNzd29yZEJ1dHRvblNlbGVjdG9yLCAoKSA9PiB7XG4gICAgICAvLyBHZW5lcmF0ZSB0aGUgcGFzc3dvcmQgaW50byBtYWluIGlucHV0LlxuICAgICAgdGhpcy5wYXNzd29yZEhhbmRsZXIuZ2VuZXJhdGVQYXNzd29yZCh0aGlzLiRuZXdQYXNzd29yZElucHV0cyk7XG5cbiAgICAgIC8vIENvcHkgdGhlIGdlbmVyYXRlZCBwYXNzd29yZCBmcm9tIG1haW4gaW5wdXQgdG8gYWRkaXRpb25hbCBpbnB1dHNcbiAgICAgIHRoaXMuJGNvcHlQYXNzd29yZElucHV0cy52YWwodGhpcy4kbmV3UGFzc3dvcmRJbnB1dHMudmFsKCkpO1xuICAgICAgdGhpcy5fY2hlY2tQYXNzd29yZFZhbGlkaXR5KCk7XG4gICAgfSk7XG5cbiAgICAvLyBWYWxpZGF0ZSBuZXcgcGFzc3dvcmQgYW5kIGl0J3MgY29uZmlybWF0aW9uIHdoZW4gYW55IG9mIHRoZSBpbnB1dHMgaXMgY2hhbmdlZFxuICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIGAke3RoaXMubmV3UGFzc3dvcmRJbnB1dFNlbGVjdG9yfSwke3RoaXMuY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRTZWxlY3Rvcn1gLCAoKSA9PiB7XG4gICAgICB0aGlzLl9jaGVja1Bhc3N3b3JkVmFsaWRpdHkoKTtcbiAgICB9KTtcblxuICAgIC8vIFByZXZlbnQgc3VibWl0dGluZyB0aGUgZm9ybSBpZiBuZXcgcGFzc3dvcmQgaXMgbm90IHZhbGlkXG4gICAgJChkb2N1bWVudCkub24oJ3N1Ym1pdCcsICQodGhpcy5vbGRQYXNzd29yZElucHV0U2VsZWN0b3IpLmNsb3Nlc3QoJ2Zvcm0nKSwgKGV2ZW50KSA9PiB7XG4gICAgICAvLyBJZiBwYXNzd29yZCBpbnB1dCBpcyBkaXNhYmxlZCAtIHdlIGRvbid0IG5lZWQgdG8gdmFsaWRhdGUgaXQuXG4gICAgICBpZiAoJCh0aGlzLm9sZFBhc3N3b3JkSW5wdXRTZWxlY3RvcikuaXMoJzpkaXNhYmxlZCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnBhc3N3b3JkVmFsaWRhdG9yLmlzUGFzc3dvcmRWYWxpZCgpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgcGFzc3dvcmQgaXMgdmFsaWQsIHNob3cgZXJyb3IgbWVzc2FnZXMgaWYgaXQncyBub3QuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2hlY2tQYXNzd29yZFZhbGlkaXR5KCkge1xuICAgIGNvbnN0ICRmaXJzdFBhc3N3b3JkRXJyb3JDb250YWluZXIgPSAkKHRoaXMubmV3UGFzc3dvcmRJbnB1dFNlbGVjdG9yKS5wYXJlbnQoKS5maW5kKCcuZm9ybS10ZXh0Jyk7XG4gICAgY29uc3QgJHNlY29uZFBhc3N3b3JkRXJyb3JDb250YWluZXIgPSAkKHRoaXMuY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRTZWxlY3RvcikucGFyZW50KCkuZmluZCgnLmZvcm0tdGV4dCcpO1xuXG4gICAgJGZpcnN0UGFzc3dvcmRFcnJvckNvbnRhaW5lclxuICAgICAgLnRleHQodGhpcy5fZ2V0UGFzc3dvcmRMZW5ndGhWYWxpZGF0aW9uTWVzc2FnZSgpKVxuICAgICAgLnRvZ2dsZUNsYXNzKCd0ZXh0LWRhbmdlcicsICF0aGlzLnBhc3N3b3JkVmFsaWRhdG9yLmlzUGFzc3dvcmRMZW5ndGhWYWxpZCgpKVxuICAgIDtcblxuICAgICRzZWNvbmRQYXNzd29yZEVycm9yQ29udGFpbmVyXG4gICAgICAudGV4dCh0aGlzLl9nZXRQYXNzd29yZENvbmZpcm1hdGlvblZhbGlkYXRpb25NZXNzYWdlKCkpXG4gICAgICAudG9nZ2xlQ2xhc3MoJ3RleHQtZGFuZ2VyJywgIXRoaXMucGFzc3dvcmRWYWxpZGF0b3IuaXNQYXNzd29yZE1hdGNoaW5nQ29uZmlybWF0aW9uKCkpXG4gICAgO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXNzd29yZCBjb25maXJtYXRpb24gdmFsaWRhdGlvbiBtZXNzYWdlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2dldFBhc3N3b3JkQ29uZmlybWF0aW9uVmFsaWRhdGlvbk1lc3NhZ2UoKSB7XG4gICAgaWYgKCF0aGlzLnBhc3N3b3JkVmFsaWRhdG9yLmlzUGFzc3dvcmRNYXRjaGluZ0NvbmZpcm1hdGlvbigpKSB7XG4gICAgICByZXR1cm4gJCh0aGlzLmNvbmZpcm1OZXdQYXNzd29yZElucHV0U2VsZWN0b3IpLmRhdGEoJ2ludmFsaWQtcGFzc3dvcmQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBhc3N3b3JkIGxlbmd0aCB2YWxpZGF0aW9uIG1lc3NhZ2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2V0UGFzc3dvcmRMZW5ndGhWYWxpZGF0aW9uTWVzc2FnZSgpIHtcbiAgICBpZiAodGhpcy5wYXNzd29yZFZhbGlkYXRvci5pc1Bhc3N3b3JkVG9vU2hvcnQoKSkge1xuICAgICAgcmV0dXJuICQodGhpcy5uZXdQYXNzd29yZElucHV0U2VsZWN0b3IpLmRhdGEoJ3Bhc3N3b3JkLXRvby1zaG9ydCcpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFzc3dvcmRWYWxpZGF0b3IuaXNQYXNzd29yZFRvb0xvbmcoKSkge1xuICAgICAgcmV0dXJuICQodGhpcy5uZXdQYXNzd29yZElucHV0U2VsZWN0b3IpLmRhdGEoJ3Bhc3N3b3JkLXRvby1sb25nJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIHBhc3N3b3JkIGlucHV0cyBibG9jay5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zaG93SW5wdXRzQmxvY2soKSB7XG4gICAgdGhpcy5fc2hvdyh0aGlzLiRpbnB1dHNCbG9jayk7XG4gICAgdGhpcy4kc3VibWl0dGFibGVJbnB1dHMucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICB0aGlzLiRzdWJtaXR0YWJsZUlucHV0cy5hdHRyKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIHBhc3N3b3JkIGlucHV0cyBibG9jay5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oaWRlSW5wdXRzQmxvY2soKSB7XG4gICAgdGhpcy5faGlkZSh0aGlzLiRpbnB1dHNCbG9jayk7XG4gICAgdGhpcy4kc3VibWl0dGFibGVJbnB1dHMuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICB0aGlzLiRzdWJtaXR0YWJsZUlucHV0cy5yZW1vdmVBdHRyKCdyZXF1aXJlZCcpO1xuICAgIHRoaXMuJGlucHV0c0Jsb2NrLmZpbmQoJ2lucHV0JykudmFsKCcnKTtcbiAgICB0aGlzLiRpbnB1dHNCbG9jay5maW5kKCcuZm9ybS10ZXh0JykudGV4dCgnJyk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZSBhbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaGlkZSgkZWwpIHtcbiAgICAkZWwuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgaGlkZGVuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zaG93KCRlbCkge1xuICAgICRlbC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NvbXBvbmVudHMvZm9ybS9jaGFuZ2UtcGFzc3dvcmQtY29udHJvbC5qcyIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5cbi8qKlxuICogQ2xhc3MgcmVzcG9uc2libGUgZm9yIGNoZWNraW5nIHBhc3N3b3JkJ3MgdmFsaWRpdHkuXG4gKiBDYW4gdmFsaWRhdGUgZW50ZXJlZCBwYXNzd29yZCdzIGxlbmd0aCBhZ2FpbnN0IG1pbi9tYXggdmFsdWVzLlxuICogSWYgcGFzc3dvcmQgY29uZmlybWF0aW9uIGlucHV0IGlzIHByb3ZpZGVkLCBjYW4gdmFsaWRhdGUgaWYgZW50ZXJlZCBwYXNzd29yZCBpcyBtYXRjaGluZyBjb25maXJtYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkVmFsaWRhdG9yIHtcblxuICAvKipcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhc3N3b3JkSW5wdXRTZWxlY3RvciBzZWxlY3RvciBvZiB0aGUgcGFzc3dvcmQgaW5wdXQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IGNvbmZpcm1QYXNzd29yZElucHV0U2VsZWN0b3IgKG9wdGlvbmFsKSBzZWxlY3RvciBmb3IgdGhlIHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBpbnB1dC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgYWxsb3dzIG92ZXJyaWRpbmcgZGVmYXVsdCBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IocGFzc3dvcmRJbnB1dFNlbGVjdG9yLCBjb25maXJtUGFzc3dvcmRJbnB1dFNlbGVjdG9yID0gbnVsbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5uZXdQYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXNzd29yZElucHV0U2VsZWN0b3IpO1xuICAgIHRoaXMuY29uZmlybVBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpcm1QYXNzd29yZElucHV0U2VsZWN0b3IpO1xuXG4gICAgLy8gTWluaW11bSBhbGxvd2VkIGxlbmd0aCBmb3IgZW50ZXJlZCBwYXNzd29yZFxuICAgIHRoaXMubWluUGFzc3dvcmRMZW5ndGggPSBvcHRpb25zLm1pblBhc3N3b3JkTGVuZ3RoIHx8IDg7XG5cbiAgICAvLyBNYXhpbXVtIGFsbG93ZWQgbGVuZ3RoIGZvciBlbnRlcmVkIHBhc3N3b3JkXG4gICAgdGhpcy5tYXhQYXNzd29yZExlbmd0aCA9IG9wdGlvbnMubWF4UGFzc3dvcmRMZW5ndGggfHwgMjU1O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBwYXNzd29yZCBpcyB2YWxpZC5cbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1Bhc3N3b3JkVmFsaWQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlybVBhc3N3b3JkSW5wdXQgJiYgIXRoaXMuaXNQYXNzd29yZE1hdGNoaW5nQ29uZmlybWF0aW9uKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pc1Bhc3N3b3JkTGVuZ3RoVmFsaWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBwYXNzd29yZCdzIGxlbmd0aCBpcyB2YWxpZC5cbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1Bhc3N3b3JkTGVuZ3RoVmFsaWQoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzUGFzc3dvcmRUb29TaG9ydCgpICYmICF0aGlzLmlzUGFzc3dvcmRUb29Mb25nKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgcGFzc3dvcmQgaXMgbWF0Y2hpbmcgaXQncyBjb25maXJtYXRpb24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNQYXNzd29yZE1hdGNoaW5nQ29uZmlybWF0aW9uKCkge1xuICAgIGlmICghdGhpcy5jb25maXJtUGFzc3dvcmRJbnB1dCkge1xuICAgICAgdGhyb3cgJ0NvbmZpcm0gcGFzc3dvcmQgaW5wdXQgaXMgbm90IHByb3ZpZGVkIGZvciB0aGUgcGFzc3dvcmQgdmFsaWRhdG9yLic7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlybVBhc3N3b3JkSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXdQYXNzd29yZElucHV0LnZhbHVlID09PSB0aGlzLmNvbmZpcm1QYXNzd29yZElucHV0LnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHBhc3N3b3JkIGlzIHRvbyBzaG9ydC5cbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1Bhc3N3b3JkVG9vU2hvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmV3UGFzc3dvcmRJbnB1dC52YWx1ZS5sZW5ndGggPCB0aGlzLm1pblBhc3N3b3JkTGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHBhc3N3b3JkIGlzIHRvbyBsb25nLlxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzUGFzc3dvcmRUb29Mb25nKCkge1xuICAgIHJldHVybiB0aGlzLm5ld1Bhc3N3b3JkSW5wdXQudmFsdWUubGVuZ3RoID4gdGhpcy5tYXhQYXNzd29yZExlbmd0aDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY29tcG9uZW50cy9wYXNzd29yZC12YWxpZGF0b3IuanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG4vKipcbiAqIERlZmluZXMgYWxsIHNlbGVjdG9ycyB0aGF0IGFyZSB1c2VkIGluIGVtcGxveWVlIGFkZC9lZGl0IGZvcm0uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2hvcENob2ljZVRyZWU6ICcjZW1wbG95ZWVfc2hvcF9hc3NvY2lhdGlvbicsXG4gIHByb2ZpbGVTZWxlY3Q6ICcjZW1wbG95ZWVfcHJvZmlsZScsXG4gIGRlZmF1bHRQYWdlU2VsZWN0OiAnI2VtcGxveWVlX2RlZmF1bHRfcGFnZScsXG4gIGFkZG9uc0Nvbm5lY3RGb3JtOiAnI2FkZG9ucy1jb25uZWN0LWZvcm0nLFxuICBhZGRvbnNMb2dpbkJ1dHRvbjogJyNhZGRvbnNfbG9naW5fYnRuJyxcblxuICAvLyBzZWxlY3RvcnMgcmVsYXRlZCB0byBcImNoYW5nZSBwYXNzd29yZFwiIGZvcm0gY29udHJvbFxuICBjaGFuZ2VQYXNzd29yZElucHV0c0Jsb2NrOiAnLmpzLWNoYW5nZS1wYXNzd29yZC1ibG9jaycsXG4gIHNob3dDaGFuZ2VQYXNzd29yZEJsb2NrQnV0dG9uOiAnLmpzLWNoYW5nZS1wYXNzd29yZCcsXG4gIGhpZGVDaGFuZ2VQYXNzd29yZEJsb2NrQnV0dG9uOiAnLmpzLWNoYW5nZS1wYXNzd29yZC1jYW5jZWwnLFxuICBnZW5lcmF0ZVBhc3N3b3JkQnV0dG9uOiAnI2VtcGxveWVlX2NoYW5nZV9wYXNzd29yZF9nZW5lcmF0ZV9wYXNzd29yZF9idXR0b24nLFxuICBvbGRQYXNzd29yZElucHV0OiAnI2VtcGxveWVlX2NoYW5nZV9wYXNzd29yZF9vbGRfcGFzc3dvcmQnLFxuICBuZXdQYXNzd29yZElucHV0OiAnI2VtcGxveWVlX2NoYW5nZV9wYXNzd29yZF9uZXdfcGFzc3dvcmRfZmlyc3QnLFxuICBjb25maXJtTmV3UGFzc3dvcmRJbnB1dDogJyNlbXBsb3llZV9jaGFuZ2VfcGFzc3dvcmRfbmV3X3Bhc3N3b3JkX3NlY29uZCcsXG4gIGdlbmVyYXRlZFBhc3N3b3JkRGlzcGxheUlucHV0OiAnI2VtcGxveWVlX2NoYW5nZV9wYXNzd29yZF9nZW5lcmF0ZWRfcGFzc3dvcmQnLFxuICBwYXNzd29yZFN0cmVuZ3RoRmVlZGJhY2tDb250YWluZXI6ICcuanMtcGFzc3dvcmQtc3RyZW5ndGgtZmVlZGJhY2snLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGFnZXMvZW1wbG95ZWUvZW1wbG95ZWUtZm9ybS1tYXAuanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG5pbXBvcnQgRW1wbG95ZWVGb3JtIGZyb20gXCIuL0VtcGxveWVlRm9ybVwiO1xuXG4kKCgpID0+IHtcbiAgbmV3IEVtcGxveWVlRm9ybSgpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9wYWdlcy9lbXBsb3llZS9mb3JtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==