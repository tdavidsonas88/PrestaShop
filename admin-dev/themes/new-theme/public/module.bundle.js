window["module"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 372);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports) {

(function() { module.exports = window["jQuery"]; }());

/***/ }),

/***/ 279:
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
 * Module Admin Page Controller.
 * @constructor
 */

var AdminModuleController = function () {
  /**
   * Initialize all listeners and bind everything
   * @method init
   * @memberof AdminModule
   */
  function AdminModuleController(moduleCardController) {
    _classCallCheck(this, AdminModuleController);

    this.moduleCardController = moduleCardController;

    this.DEFAULT_MAX_RECENTLY_USED = 10;
    this.DEFAULT_MAX_PER_CATEGORIES = 6;
    this.DISPLAY_GRID = 'grid';
    this.DISPLAY_LIST = 'list';
    this.CATEGORY_RECENTLY_USED = 'recently-used';

    this.currentCategoryDisplay = {};
    this.currentDisplay = '';
    this.isCategoryGridDisplayed = false;
    this.currentTagsList = [];
    this.currentRefCategory = null;
    this.currentRefStatus = null;
    this.currentSorting = null;
    this.baseAddonsUrl = 'https://addons.prestashop.com/';
    this.pstaggerInput = null;
    this.lastBulkAction = null;
    this.isUploadStarted = false;

    this.recentlyUsedSelector = '#module-recently-used-list .modules-list';

    /**
     * Loaded modules list.
     * Containing the card and list display.
     * @type {Array}
     */
    this.modulesList = [];
    this.addonsCardGrid = null;
    this.addonsCardList = null;

    this.moduleShortList = '.module-short-list';
    // See more & See less selector
    this.seeMoreSelector = '.see-more';
    this.seeLessSelector = '.see-less';

    // Selectors into vars to make it easier to change them while keeping same code logic
    this.moduleItemGridSelector = '.module-item-grid';
    this.moduleItemListSelector = '.module-item-list';
    this.categorySelectorLabelSelector = '.module-category-selector-label';
    this.categorySelector = '.module-category-selector';
    this.categoryItemSelector = '.module-category-menu';
    this.addonsLoginButtonSelector = '#addons_login_btn';
    this.categoryResetBtnSelector = '.module-category-reset';
    this.moduleInstallBtnSelector = 'input.module-install-btn';
    this.moduleSortingDropdownSelector = '.module-sorting-author select';
    this.categoryGridSelector = '#modules-categories-grid';
    this.categoryGridItemSelector = '.module-category-item';
    this.addonItemGridSelector = '.module-addons-item-grid';
    this.addonItemListSelector = '.module-addons-item-list';

    // Upgrade All selectors
    this.upgradeAllSource = '.module_action_menu_upgrade_all';
    this.upgradeAllTargets = '#modules-list-container-update .module_action_menu_upgrade:visible';

    // Bulk action selectors
    this.bulkActionDropDownSelector = '.module-bulk-actions';
    this.bulkItemSelector = '.module-bulk-menu';
    this.bulkActionCheckboxListSelector = '.module-checkbox-bulk-list input';
    this.bulkActionCheckboxGridSelector = '.module-checkbox-bulk-grid input';
    this.checkedBulkActionListSelector = this.bulkActionCheckboxListSelector + ':checked';
    this.checkedBulkActionGridSelector = this.bulkActionCheckboxGridSelector + ':checked';
    this.bulkActionCheckboxSelector = '#module-modal-bulk-checkbox';
    this.bulkConfirmModalSelector = '#module-modal-bulk-confirm';
    this.bulkConfirmModalActionNameSelector = '#module-modal-bulk-confirm-action-name';
    this.bulkConfirmModalListSelector = '#module-modal-bulk-confirm-list';
    this.bulkConfirmModalAckBtnSelector = '#module-modal-confirm-bulk-ack';

    // Placeholders
    this.placeholderGlobalSelector = '.module-placeholders-wrapper';
    this.placeholderFailureGlobalSelector = '.module-placeholders-failure';
    this.placeholderFailureMsgSelector = '.module-placeholders-failure-msg';
    this.placeholderFailureRetryBtnSelector = '#module-placeholders-failure-retry';

    // Module's statuses selectors
    this.statusSelectorLabelSelector = '.module-status-selector-label';
    this.statusItemSelector = '.module-status-menu';
    this.statusResetBtnSelector = '.module-status-reset';

    // Selectors for Module Import and Addons connect
    this.addonsConnectModalBtnSelector = '#page-header-desc-configuration-addons_connect';
    this.addonsLogoutModalBtnSelector = '#page-header-desc-configuration-addons_logout';
    this.addonsImportModalBtnSelector = '#page-header-desc-configuration-add_module';
    this.dropZoneModalSelector = '#module-modal-import';
    this.dropZoneModalFooterSelector = '#module-modal-import .modal-footer';
    this.dropZoneImportZoneSelector = '#importDropzone';
    this.addonsConnectModalSelector = '#module-modal-addons-connect';
    this.addonsLogoutModalSelector = '#module-modal-addons-logout';
    this.addonsConnectForm = '#addons-connect-form';
    this.moduleImportModalCloseBtn = '#module-modal-import-closing-cross';
    this.moduleImportStartSelector = '.module-import-start';
    this.moduleImportProcessingSelector = '.module-import-processing';
    this.moduleImportSuccessSelector = '.module-import-success';
    this.moduleImportSuccessConfigureBtnSelector = '.module-import-success-configure';
    this.moduleImportFailureSelector = '.module-import-failure';
    this.moduleImportFailureRetrySelector = '.module-import-failure-retry';
    this.moduleImportFailureDetailsBtnSelector = '.module-import-failure-details-action';
    this.moduleImportSelectFileManualSelector = '.module-import-start-select-manual';
    this.moduleImportFailureMsgDetailsSelector = '.module-import-failure-details';
    this.moduleImportConfirmSelector = '.module-import-confirm';

    this.initSortingDropdown();
    this.initBOEventRegistering();
    this.initCurrentDisplay();
    this.initSortingDisplaySwitch();
    this.initBulkDropdown();
    this.initSearchBlock();
    this.initCategorySelect();
    this.initCategoriesGrid();
    this.initActionButtons();
    this.initAddonsSearch();
    this.initAddonsConnect();
    this.initAddModuleAction();
    this.initDropzone();
    this.initPageChangeProtection();
    this.initPlaceholderMechanism();
    this.initFilterStatusDropdown();
    this.fetchModulesList();
    this.getNotificationsCount();
    this.initializeSeeMore();
  }

  _createClass(AdminModuleController, [{
    key: 'initFilterStatusDropdown',
    value: function initFilterStatusDropdown() {
      var self = this;
      var body = $('body');
      body.on('click', self.statusItemSelector, function () {
        // Get data from li DOM input
        self.currentRefStatus = parseInt($(this).data('status-ref'), 10);
        // Change dropdown label to set it to the current status' displayname
        $(self.statusSelectorLabelSelector).text($(this).find('a:first').text());
        $(self.statusResetBtnSelector).show();
        self.updateModuleVisibility();
      });

      body.on('click', self.statusResetBtnSelector, function () {
        $(self.statusSelectorLabelSelector).text($(this).find('a').text());
        $(this).hide();
        self.currentRefStatus = null;
        self.updateModuleVisibility();
      });
    }
  }, {
    key: 'initBulkDropdown',
    value: function initBulkDropdown() {
      var self = this;
      var body = $('body');

      body.on('click', self.getBulkCheckboxesSelector(), function () {
        var selector = $(self.bulkActionDropDownSelector);
        if ($(self.getBulkCheckboxesCheckedSelector()).length > 0) {
          selector.closest('.module-top-menu-item').removeClass('disabled');
        } else {
          selector.closest('.module-top-menu-item').addClass('disabled');
        }
      });

      body.on('click', self.bulkItemSelector, function initializeBodyChange() {
        if ($(self.getBulkCheckboxesCheckedSelector()).length === 0) {
          $.growl.warning({ message: window.translate_javascripts['Bulk Action - One module minimum'] });
          return;
        }

        self.lastBulkAction = $(this).data('ref');
        var modulesListString = self.buildBulkActionModuleList();
        var actionString = $(this).find(':checked').text().toLowerCase();
        $(self.bulkConfirmModalListSelector).html(modulesListString);
        $(self.bulkConfirmModalActionNameSelector).text(actionString);

        if (self.lastBulkAction === 'bulk-uninstall') {
          $(self.bulkActionCheckboxSelector).show();
        } else {
          $(self.bulkActionCheckboxSelector).hide();
        }

        $(self.bulkConfirmModalSelector).modal('show');
      });

      body.on('click', this.bulkConfirmModalAckBtnSelector, function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(self.bulkConfirmModalSelector).modal('hide');
        self.doBulkAction(self.lastBulkAction);
      });
    }
  }, {
    key: 'initBOEventRegistering',
    value: function initBOEventRegistering() {
      window.BOEvent.on('Module Disabled', this.onModuleDisabled, this);
      window.BOEvent.on('Module Uninstalled', this.updateTotalResults, this);
    }
  }, {
    key: 'onModuleDisabled',
    value: function onModuleDisabled() {
      var self = this;
      var moduleItemSelector = self.getModuleItemSelector();

      $('.modules-list').each(function scanModulesList() {
        self.updateTotalResults();
      });
    }
  }, {
    key: 'initPlaceholderMechanism',
    value: function initPlaceholderMechanism() {
      var self = this;
      if ($(self.placeholderGlobalSelector).length) {
        self.ajaxLoadPage();
      }

      // Retry loading mechanism
      $('body').on('click', self.placeholderFailureRetryBtnSelector, function () {
        $(self.placeholderFailureGlobalSelector).fadeOut();
        $(self.placeholderGlobalSelector).fadeIn();
        self.ajaxLoadPage();
      });
    }
  }, {
    key: 'ajaxLoadPage',
    value: function ajaxLoadPage() {
      var self = this;

      $.ajax({
        method: 'GET',
        url: window.moduleURLs.catalogRefresh
      }).done(function (response) {
        if (response.status === true) {
          if (typeof response.domElements === 'undefined') response.domElements = null;
          if (typeof response.msg === 'undefined') response.msg = null;

          var stylesheet = document.styleSheets[0];
          var stylesheetRule = '{display: none}';
          var moduleGlobalSelector = '.modules-list';
          var moduleSortingSelector = '.module-sorting-menu';
          var requiredSelectorCombination = moduleGlobalSelector + ',' + moduleSortingSelector;

          if (stylesheet.insertRule) {
            stylesheet.insertRule(requiredSelectorCombination + stylesheetRule, stylesheet.cssRules.length);
          } else if (stylesheet.addRule) {
            stylesheet.addRule(requiredSelectorCombination, stylesheetRule, -1);
          }

          $(self.placeholderGlobalSelector).fadeOut(800, function () {
            $.each(response.domElements, function (index, element) {
              $(element.selector).append(element.content);
            });
            $(moduleGlobalSelector).fadeIn(800).css('display', 'flex');
            $(moduleSortingSelector).fadeIn(800);
            $('[data-toggle="popover"]').popover();
            self.initCurrentDisplay();
            self.fetchModulesList();
          });
        } else {
          $(self.placeholderGlobalSelector).fadeOut(800, function () {
            $(self.placeholderFailureMsgSelector).text(response.msg);
            $(self.placeholderFailureGlobalSelector).fadeIn(800);
          });
        }
      }).fail(function (response) {
        $(self.placeholderGlobalSelector).fadeOut(800, function () {
          $(self.placeholderFailureMsgSelector).text(response.statusText);
          $(self.placeholderFailureGlobalSelector).fadeIn(800);
        });
      });
    }
  }, {
    key: 'fetchModulesList',
    value: function fetchModulesList() {
      var self = this;
      var container = void 0;
      var $this = void 0;

      self.modulesList = [];
      $('.modules-list').each(function prepareContainer() {
        container = $(this);
        container.find('.module-item').each(function prepareModules() {
          $this = $(this);
          self.modulesList.push({
            domObject: $this,
            id: $this.data('id'),
            name: $this.data('name').toLowerCase(),
            scoring: parseFloat($this.data('scoring')),
            logo: $this.data('logo'),
            author: $this.data('author').toLowerCase(),
            version: $this.data('version'),
            description: $this.data('description').toLowerCase(),
            techName: $this.data('tech-name').toLowerCase(),
            childCategories: $this.data('child-categories'),
            categories: String($this.data('categories')).toLowerCase(),
            type: $this.data('type'),
            price: parseFloat($this.data('price')),
            active: parseInt($this.data('active'), 10),
            access: $this.data('last-access'),
            display: $this.hasClass('module-item-list') ? self.DISPLAY_LIST : self.DISPLAY_GRID,
            container: container
          });

          $this.remove();
        });
      });

      self.addonsCardGrid = $(this.addonItemGridSelector);
      self.addonsCardList = $(this.addonItemListSelector);
      self.updateModuleVisibility();
      $('body').trigger('moduleCatalogLoaded');
    }

    /**
     * Prepare sorting
     *
     */

  }, {
    key: 'updateModuleSorting',
    value: function updateModuleSorting() {
      var self = this;

      if (!self.currentSorting) {
        return;
      }

      // Modules sorting
      var order = 'asc';
      var key = self.currentSorting;
      var splittedKey = key.split('-');
      if (splittedKey.length > 1) {
        key = splittedKey[0];
        if (splittedKey[1] === 'desc') {
          order = 'desc';
        }
      }

      var currentCompare = function currentCompare(a, b) {
        var aData = a[key];
        var bData = b[key];
        if (key === 'access') {
          aData = new Date(aData).getTime();
          bData = new Date(bData).getTime();
          aData = isNaN(aData) ? 0 : aData;
          bData = isNaN(bData) ? 0 : bData;
          if (aData === bData) {
            return b.name.localeCompare(a.name);
          }
        }

        if (aData < bData) return -1;
        if (aData > bData) return 1;

        return 0;
      };

      self.modulesList.sort(currentCompare);
      if (order === 'desc') {
        self.modulesList.reverse();
      }
    }
  }, {
    key: 'updateModuleContainerDisplay',
    value: function updateModuleContainerDisplay() {
      var self = this;

      $('.module-short-list').each(function setShortListVisibility() {
        var container = $(this);
        var nbModulesInContainer = container.find('.module-item').length;
        if (self.currentRefCategory && self.currentRefCategory !== String(container.find('.modules-list').data('name')) || self.currentRefStatus !== null && nbModulesInContainer === 0 || nbModulesInContainer === 0 && String(container.find('.modules-list').data('name')) === self.CATEGORY_RECENTLY_USED || self.currentTagsList.length > 0 && nbModulesInContainer === 0) {
          container.hide();
          return;
        }

        container.show();
        if (nbModulesInContainer >= self.DEFAULT_MAX_PER_CATEGORIES) {
          container.find(self.seeMoreSelector + ', ' + self.seeLessSelector).show();
        } else {
          container.find(self.seeMoreSelector + ', ' + self.seeLessSelector).hide();
        }
      });
    }
  }, {
    key: 'updateModuleVisibility',
    value: function updateModuleVisibility() {
      var self = this;

      self.updateModuleSorting();

      $(self.recentlyUsedSelector).find('.module-item').remove();
      $('.modules-list').find('.module-item').remove();

      // Modules visibility management
      var isVisible = void 0;
      var currentModule = void 0;
      var moduleCategory = void 0;
      var tagExists = void 0;
      var newValue = void 0;

      var modulesListLength = self.modulesList.length;
      var counter = {};

      for (var i = 0; i < modulesListLength; i += 1) {
        currentModule = self.modulesList[i];
        if (currentModule.display === self.currentDisplay) {
          isVisible = true;

          moduleCategory = self.currentRefCategory === self.CATEGORY_RECENTLY_USED ? self.CATEGORY_RECENTLY_USED : currentModule.categories;

          // Check for same category
          if (self.currentRefCategory !== null) {
            isVisible &= moduleCategory === self.currentRefCategory;
          }

          // Check for same status
          if (self.currentRefStatus !== null) {
            isVisible &= currentModule.active === self.currentRefStatus;
          }

          // Check for tag list
          if (self.currentTagsList.length) {
            tagExists = false;
            $.each(self.currentTagsList, function (index, value) {
              newValue = value.toLowerCase();
              tagExists |= currentModule.name.indexOf(newValue) !== -1 || currentModule.description.indexOf(newValue) !== -1 || currentModule.author.indexOf(newValue) !== -1 || currentModule.techName.indexOf(newValue) !== -1;
            });
            isVisible &= tagExists;
          }

          /**
           * If list display without search we must display only the first 5 modules
           */
          if (self.currentDisplay === self.DISPLAY_LIST && !self.currentTagsList.length) {
            if (self.currentCategoryDisplay[moduleCategory] === undefined) {
              self.currentCategoryDisplay[moduleCategory] = false;
            }

            if (!counter[moduleCategory]) {
              counter[moduleCategory] = 0;
            }

            if (moduleCategory === self.CATEGORY_RECENTLY_USED) {
              if (counter[moduleCategory] >= self.DEFAULT_MAX_RECENTLY_USED) {
                isVisible &= self.currentCategoryDisplay[moduleCategory];
              }
            } else if (counter[moduleCategory] >= self.DEFAULT_MAX_PER_CATEGORIES) {
              isVisible &= self.currentCategoryDisplay[moduleCategory];
            }

            counter[moduleCategory] += 1;
          }

          // If visible, display (Thx captain obvious)
          if (isVisible) {
            if (self.currentRefCategory === self.CATEGORY_RECENTLY_USED) {
              $(self.recentlyUsedSelector).append(currentModule.domObject);
            } else {
              currentModule.container.append(currentModule.domObject);
            }
          }
        }
      }

      self.updateModuleContainerDisplay();

      if (self.currentTagsList.length) {
        $('.modules-list').append(this.currentDisplay === self.DISPLAY_GRID ? this.addonsCardGrid : this.addonsCardList);
      }

      self.updateTotalResults();
    }
  }, {
    key: 'initPageChangeProtection',
    value: function initPageChangeProtection() {
      var self = this;

      $(window).on('beforeunload', function () {
        if (self.isUploadStarted === true) {
          return 'It seems some critical operation are running, are you sure you want to change page ? It might cause some unexepcted behaviors.';
        }
      });
    }
  }, {
    key: 'buildBulkActionModuleList',
    value: function buildBulkActionModuleList() {
      var checkBoxesSelector = this.getBulkCheckboxesCheckedSelector();
      var moduleItemSelector = this.getModuleItemSelector();
      var alreadyDoneFlag = 0;
      var htmlGenerated = '';
      var currentElement = void 0;

      $(checkBoxesSelector).each(function prepareCheckboxes() {
        if (alreadyDoneFlag === 10) {
          // Break each
          htmlGenerated += '- ...';
          return false;
        }

        currentElement = $(this).closest(moduleItemSelector);
        htmlGenerated += '- ' + currentElement.data('name') + '<br/>';
        alreadyDoneFlag += 1;

        return true;
      });

      return htmlGenerated;
    }
  }, {
    key: 'initAddonsConnect',
    value: function initAddonsConnect() {
      var self = this;

      // Make addons connect modal ready to be clicked
      if ($(self.addonsConnectModalBtnSelector).attr('href') === '#') {
        $(self.addonsConnectModalBtnSelector).attr('data-toggle', 'modal');
        $(self.addonsConnectModalBtnSelector).attr('data-target', self.addonsConnectModalSelector);
      }

      if ($(self.addonsLogoutModalBtnSelector).attr('href') === '#') {
        $(self.addonsLogoutModalBtnSelector).attr('data-toggle', 'modal');
        $(self.addonsLogoutModalBtnSelector).attr('data-target', self.addonsLogoutModalSelector);
      }

      $('body').on('submit', self.addonsConnectForm, function initializeBodySubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        $.ajax({
          method: 'POST',
          url: $(this).attr('action'),
          dataType: 'json',
          data: $(this).serialize(),
          beforeSend: function beforeSend() {
            $(self.addonsLoginButtonSelector).show();
            $('button.btn[type="submit"]', self.addonsConnectForm).hide();
          }
        }).done(function (response) {
          if (response.success === 1) {
            location.reload();
          } else {
            $.growl.error({ message: response.message });
            $(self.addonsLoginButtonSelector).hide();
            $('button.btn[type="submit"]', self.addonsConnectForm).fadeIn();
          }
        });
      });
    }
  }, {
    key: 'initAddModuleAction',
    value: function initAddModuleAction() {
      var self = this;
      var addModuleButton = $(self.addonsImportModalBtnSelector);
      addModuleButton.attr('data-toggle', 'modal');
      addModuleButton.attr('data-target', self.dropZoneModalSelector);
    }
  }, {
    key: 'initDropzone',
    value: function initDropzone() {
      var self = this;
      var body = $('body');
      var dropzone = $('.dropzone');

      // Reset modal when click on Retry in case of failure
      body.on('click', this.moduleImportFailureRetrySelector, function () {
        $(self.moduleImportSuccessSelector + ',' + self.moduleImportFailureSelector + ',' + self.moduleImportProcessingSelector).fadeOut(function () {
          /**
           * Added timeout for a better render of animation
           * and avoid to have displayed at the same time
           */
          setTimeout(function () {
            $(self.moduleImportStartSelector).fadeIn(function () {
              $(self.moduleImportFailureMsgDetailsSelector).hide();
              $(self.moduleImportSuccessConfigureBtnSelector).hide();
              dropzone.removeAttr('style');
            });
          }, 550);
        });
      });

      // Reinit modal on exit, but check if not already processing something
      body.on('hidden.bs.modal', this.dropZoneModalSelector, function () {
        $(self.moduleImportSuccessSelector + ', ' + self.moduleImportFailureSelector).hide();
        $(self.moduleImportStartSelector).show();

        dropzone.removeAttr('style');
        $(self.moduleImportFailureMsgDetailsSelector).hide();
        $(self.moduleImportSuccessConfigureBtnSelector).hide();
        $(self.dropZoneModalFooterSelector).html('');
        $(self.moduleImportConfirmSelector).hide();
      });

      // Change the way Dropzone.js lib handle file input trigger
      body.on('click', '.dropzone:not(' + this.moduleImportSelectFileManualSelector + ', ' + this.moduleImportSuccessConfigureBtnSelector + ')', function (event, manualSelect) {
        // if click comes from .module-import-start-select-manual, stop everything
        if (typeof manualSelect === 'undefined') {
          event.stopPropagation();
          event.preventDefault();
        }
      });

      body.on('click', this.moduleImportSelectFileManualSelector, function (event) {
        event.stopPropagation();
        event.preventDefault();
        /**
         * Trigger click on hidden file input, and pass extra data
         * to .dropzone click handler fro it to notice it comes from here
         */
        $('.dz-hidden-input').trigger('click', ['manual_select']);
      });

      // Handle modal closure
      body.on('click', this.moduleImportModalCloseBtn, function () {
        if (self.isUploadStarted !== true) {
          $(self.dropZoneModalSelector).modal('hide');
        }
      });

      // Fix issue on click configure button
      body.on('click', this.moduleImportSuccessConfigureBtnSelector, function initializeBodyClickOnModuleImport(event) {
        event.stopPropagation();
        event.preventDefault();
        window.location = $(this).attr('href');
      });

      // Open failure message details box
      body.on('click', this.moduleImportFailureDetailsBtnSelector, function () {
        $(self.moduleImportFailureMsgDetailsSelector).slideDown();
      });

      // @see: dropzone.js
      var dropzoneOptions = {
        url: window.moduleURLs.moduleImport,
        acceptedFiles: '.zip, .tar',
        // The name that will be used to transfer the file
        paramName: 'file_uploaded',
        maxFilesize: 50, // can't be greater than 50Mb because it's an addons limitation
        uploadMultiple: false,
        addRemoveLinks: true,
        dictDefaultMessage: '',
        hiddenInputContainer: self.dropZoneImportZoneSelector,
        /**
         * Add unlimited timeout. Otherwise dropzone timeout is 30 seconds
         *  and if a module is long to install, it is not possible to install the module.
         */
        timeout: 0,
        addedfile: function addedfile() {
          self.animateStartUpload();
        },
        processing: function processing() {
          // Leave it empty since we don't require anything while processing upload
        },
        error: function error(file, message) {
          self.displayOnUploadError(message);
        },
        complete: function complete(file) {
          if (file.status !== 'error') {
            var responseObject = $.parseJSON(file.xhr.response);
            if (typeof responseObject.is_configurable === 'undefined') responseObject.is_configurable = null;
            if (typeof responseObject.module_name === 'undefined') responseObject.module_name = null;

            self.displayOnUploadDone(responseObject);
          }
          // State that we have finish the process to unlock some actions
          self.isUploadStarted = false;
        }
      };

      dropzone.dropzone($.extend(dropzoneOptions));
    }
  }, {
    key: 'animateStartUpload',
    value: function animateStartUpload() {
      var self = this;
      var dropzone = $('.dropzone');
      // State that we start module upload
      self.isUploadStarted = true;
      $(self.moduleImportStartSelector).hide(0);
      dropzone.css('border', 'none');
      $(self.moduleImportProcessingSelector).fadeIn();
    }
  }, {
    key: 'animateEndUpload',
    value: function animateEndUpload(callback) {
      var self = this;
      $(self.moduleImportProcessingSelector).finish().fadeOut(callback);
    }

    /**
     * Method to call for upload modal, when the ajax call went well.
     *
     * @param object result containing the server response
     */

  }, {
    key: 'displayOnUploadDone',
    value: function displayOnUploadDone(result) {
      var self = this;
      self.animateEndUpload(function () {
        if (result.status === true) {
          if (result.is_configurable === true) {
            var configureLink = window.moduleURLs.configurationPage.replace(/:number:/, result.module_name);
            $(self.moduleImportSuccessConfigureBtnSelector).attr('href', configureLink);
            $(self.moduleImportSuccessConfigureBtnSelector).show();
          }
          $(self.moduleImportSuccessSelector).fadeIn();
        } else if (typeof result.confirmation_subject !== 'undefined') {
          self.displayPrestaTrustStep(result);
        } else {
          $(self.moduleImportFailureMsgDetailsSelector).html(result.msg);
          $(self.moduleImportFailureSelector).fadeIn();
        }
      });
    }

    /**
     * Method to call for upload modal, when the ajax call went wrong or when the action requested could not
     * succeed for some reason.
     *
     * @param string message explaining the error.
     */

  }, {
    key: 'displayOnUploadError',
    value: function displayOnUploadError(message) {
      var self = this;
      self.animateEndUpload(function () {
        $(self.moduleImportFailureMsgDetailsSelector).html(message);
        $(self.moduleImportFailureSelector).fadeIn();
      });
    }

    /**
     * If PrestaTrust needs to be confirmed, we ask for the confirmation
     * modal content and we display it in the currently displayed one.
     * We also generate the ajax call to trigger once we confirm we want to install
     * the module.
     *
     * @param Previous server response result
     */

  }, {
    key: 'displayPrestaTrustStep',
    value: function displayPrestaTrustStep(result) {
      var self = this;
      var modal = self.moduleCardController._replacePrestaTrustPlaceholders(result);
      var moduleName = result.module.attributes.name;

      $(this.moduleImportConfirmSelector).html(modal.find('.modal-body').html()).fadeIn();
      $(this.dropZoneModalFooterSelector).html(modal.find('.modal-footer').html()).fadeIn();

      $(this.dropZoneModalFooterSelector).find('.pstrust-install').off('click').on('click', function () {
        $(self.moduleImportConfirmSelector).hide();
        $(self.dropZoneModalFooterSelector).html('');
        self.animateStartUpload();

        // Install ajax call
        $.post(result.module.attributes.urls.install, { 'actionParams[confirmPrestaTrust]': '1' }).done(function (data) {
          self.displayOnUploadDone(data[moduleName]);
        }).fail(function (data) {
          self.displayOnUploadError(data[moduleName]);
        }).always(function () {
          self.isUploadStarted = false;
        });
      });
    }
  }, {
    key: 'getBulkCheckboxesSelector',
    value: function getBulkCheckboxesSelector() {
      return this.currentDisplay === this.DISPLAY_GRID ? this.bulkActionCheckboxGridSelector : this.bulkActionCheckboxListSelector;
    }
  }, {
    key: 'getBulkCheckboxesCheckedSelector',
    value: function getBulkCheckboxesCheckedSelector() {
      return this.currentDisplay === this.DISPLAY_GRID ? this.checkedBulkActionGridSelector : this.checkedBulkActionListSelector;
    }
  }, {
    key: 'getModuleItemSelector',
    value: function getModuleItemSelector() {
      return this.currentDisplay === this.DISPLAY_GRID ? this.moduleItemGridSelector : this.moduleItemListSelector;
    }

    /**
     * Get the module notifications count and displays it as a badge on the notification tab
     * @return void
     */

  }, {
    key: 'getNotificationsCount',
    value: function getNotificationsCount() {
      var self = this;
      $.getJSON(window.moduleURLs.notificationsCount, self.updateNotificationsCount).fail(function () {
        console.error('Could not retrieve module notifications count.');
      });
    }
  }, {
    key: 'updateNotificationsCount',
    value: function updateNotificationsCount(badge) {
      var destinationTabs = {
        to_configure: $('#subtab-AdminModulesNotifications'),
        to_update: $('#subtab-AdminModulesUpdates')
      };

      for (var key in destinationTabs) {
        if (destinationTabs[key].length === 0) {
          continue;
        }

        destinationTabs[key].find('.notification-counter').text(badge[key]);
      }
    }
  }, {
    key: 'initAddonsSearch',
    value: function initAddonsSearch() {
      var self = this;
      $('body').on('click', self.addonItemGridSelector + ', ' + self.addonItemListSelector, function () {
        var searchQuery = '';
        if (self.currentTagsList.length) {
          searchQuery = encodeURIComponent(self.currentTagsList.join(' '));
        }

        window.open(self.baseAddonsUrl + 'search.php?search_query=' + searchQuery, '_blank');
      });
    }
  }, {
    key: 'initCategoriesGrid',
    value: function initCategoriesGrid() {
      var self = this;

      $('body').on('click', this.categoryGridItemSelector, function initilaizeGridBodyClick(event) {
        event.stopPropagation();
        event.preventDefault();
        var refCategory = $(this).data('category-ref');

        // In case we have some tags we need to reset it !
        if (self.currentTagsList.length) {
          self.pstaggerInput.resetTags(false);
          self.currentTagsList = [];
        }
        var menuCategoryToTrigger = $(self.categoryItemSelector + '[data-category-ref="' + refCategory + '"]');

        if (!menuCategoryToTrigger.length) {
          console.warn('No category with ref (' + refCategory + ') seems to exist!');
          return false;
        }

        // Hide current category grid
        if (self.isCategoryGridDisplayed === true) {
          $(self.categoryGridSelector).fadeOut();
          self.isCategoryGridDisplayed = false;
        }

        // Trigger click on right category
        $(self.categoryItemSelector + '[data-category-ref="' + refCategory + '"]').click();
        return true;
      });
    }
  }, {
    key: 'initCurrentDisplay',
    value: function initCurrentDisplay() {
      this.currentDisplay = this.currentDisplay === '' ? this.DISPLAY_LIST : this.DISPLAY_GRID;
    }
  }, {
    key: 'initSortingDropdown',
    value: function initSortingDropdown() {
      var self = this;

      self.currentSorting = $(this.moduleSortingDropdownSelector).find(':checked').attr('value');
      if (!self.currentSorting) {
        self.currentSorting = 'access-desc';
      }

      $('body').on('change', self.moduleSortingDropdownSelector, function initializeBodySortingChange() {
        self.currentSorting = $(this).find(':checked').attr('value');
        self.updateModuleVisibility();
      });
    }
  }, {
    key: 'doBulkAction',
    value: function doBulkAction(requestedBulkAction) {
      // This object is used to check if requested bulkAction is available and give proper
      // url segment to be called for it
      var forceDeletion = $('#force_bulk_deletion').prop('checked');

      var bulkActionToUrl = {
        'bulk-uninstall': 'uninstall',
        'bulk-disable': 'disable',
        'bulk-enable': 'enable',
        'bulk-disable-mobile': 'disable_mobile',
        'bulk-enable-mobile': 'enable_mobile',
        'bulk-reset': 'reset'
      };

      // Note no grid selector used yet since we do not needed it at dev time
      // Maybe useful to implement this kind of things later if intended to
      // use this functionality elsewhere but "manage my module" section
      if (typeof bulkActionToUrl[requestedBulkAction] === 'undefined') {
        $.growl.error({ message: window.translate_javascripts['Bulk Action - Request not found'].replace('[1]', requestedBulkAction) });
        return false;
      }

      // Loop over all checked bulk checkboxes
      var bulkActionSelectedSelector = this.getBulkCheckboxesCheckedSelector();
      var bulkModuleAction = bulkActionToUrl[requestedBulkAction];

      if ($(bulkActionSelectedSelector).length <= 0) {
        console.warn(window.translate_javascripts['Bulk Action - One module minimum']);
        return false;
      }

      var modulesActions = [];
      var moduleTechName = void 0;
      $(bulkActionSelectedSelector).each(function bulkActionSelector() {
        moduleTechName = $(this).data('tech-name');
        modulesActions.push({
          techName: moduleTechName,
          actionMenuObj: $(this).closest('.module-checkbox-bulk-list').next()
        });
      });

      this.performModulesAction(modulesActions, bulkModuleAction, forceDeletion);

      return true;
    }
  }, {
    key: 'performModulesAction',
    value: function performModulesAction(modulesActions, bulkModuleAction, forceDeletion) {
      var self = this;
      if (typeof self.moduleCardController === 'undefined') {
        return;
      }

      //First let's filter modules that can't perform this action
      var actionMenuLinks = filterAllowedActions(modulesActions);
      if (!actionMenuLinks.length) {
        return;
      }

      var modulesRequestedCountdown = actionMenuLinks.length - 1;
      var spinnerObj = $("<button class=\"btn-primary-reverse onclick unbind spinner \"></button>");
      if (actionMenuLinks.length > 1) {
        //Loop through all the modules except the last one which waits for other
        //requests and then call its request with cache clear enabled
        $.each(actionMenuLinks, function bulkModulesLoop(index, actionMenuLink) {
          if (index >= actionMenuLinks.length - 1) {
            return;
          }
          requestModuleAction(actionMenuLink, true, countdownModulesRequest);
        });
        //Display a spinner for the last module
        var lastMenuLink = actionMenuLinks[actionMenuLinks.length - 1];
        var actionMenuObj = lastMenuLink.closest(self.moduleCardController.moduleItemActionsSelector);
        actionMenuObj.hide();
        actionMenuObj.after(spinnerObj);
      } else {
        requestModuleAction(actionMenuLinks[0]);
      }

      function requestModuleAction(actionMenuLink, disableCacheClear, requestEndCallback) {
        self.moduleCardController._requestToController(bulkModuleAction, actionMenuLink, forceDeletion, disableCacheClear, requestEndCallback);
      }

      function countdownModulesRequest() {
        modulesRequestedCountdown--;
        //Now that all other modules have performed their action WITHOUT cache clear, we
        //can request the last module request WITH cache clear
        if (modulesRequestedCountdown <= 0) {
          if (spinnerObj) {
            spinnerObj.remove();
            spinnerObj = null;
          }

          var _lastMenuLink = actionMenuLinks[actionMenuLinks.length - 1];
          var _actionMenuObj = _lastMenuLink.closest(self.moduleCardController.moduleItemActionsSelector);
          _actionMenuObj.fadeIn();
          requestModuleAction(_lastMenuLink);
        }
      }

      function filterAllowedActions(modulesActions) {
        var actionMenuLinks = [];
        var actionMenuLink = void 0;
        $.each(modulesActions, function filterAllowedModules(index, moduleData) {
          actionMenuLink = $(self.moduleCardController.moduleActionMenuLinkSelector + bulkModuleAction, moduleData.actionMenuObj);
          if (actionMenuLink.length > 0) {
            actionMenuLinks.push(actionMenuLink);
          } else {
            $.growl.error({ message: window.translate_javascripts['Bulk Action - Request not available for module'].replace('[1]', bulkModuleAction).replace('[2]', moduleData.techName) });
          }
        });

        return actionMenuLinks;
      }
    }
  }, {
    key: 'initActionButtons',
    value: function initActionButtons() {
      var _this = this;

      var self = this;
      $('body').on('click', self.moduleInstallBtnSelector, function initializeActionButtonsClick(event) {
        var $this = $(this);
        var $next = $($this.next());
        event.preventDefault();

        $this.hide();
        $next.show();

        $.ajax({
          url: $this.data('url'),
          dataType: 'json'
        }).done(function () {
          $next.fadeOut();
        });
      });

      // "Upgrade All" button handler
      $('body').on('click', self.upgradeAllSource, function (event) {
        event.preventDefault();

        if ($(self.upgradeAllTargets).length <= 0) {
          console.warn(window.translate_javascripts['Upgrade All Action - One module minimum']);
          return false;
        }

        var modulesActions = [];
        var moduleTechName = void 0;
        $(self.upgradeAllTargets).each(function bulkActionSelector() {
          var moduleItemList = $(this).closest('.module-item-list');
          moduleTechName = moduleItemList.data('tech-name');
          modulesActions.push({
            techName: moduleTechName,
            actionMenuObj: $('.module-actions', moduleItemList)
          });
        });

        _this.performModulesAction(modulesActions, 'upgrade');

        return true;
      });
    }
  }, {
    key: 'initCategorySelect',
    value: function initCategorySelect() {
      var self = this;
      var body = $('body');
      body.on('click', self.categoryItemSelector, function initializeCategorySelectClick() {
        // Get data from li DOM input
        self.currentRefCategory = $(this).data('category-ref');
        self.currentRefCategory = self.currentRefCategory ? String(self.currentRefCategory).toLowerCase() : null;
        // Change dropdown label to set it to the current category's displayname
        $(self.categorySelectorLabelSelector).text($(this).data('category-display-name'));
        $(self.categoryResetBtnSelector).show();
        self.updateModuleVisibility();
      });

      body.on('click', self.categoryResetBtnSelector, function initializeCategoryResetButtonClick() {
        var rawText = $(self.categorySelector).attr('aria-labelledby');
        var upperFirstLetter = rawText.charAt(0).toUpperCase();
        var removedFirstLetter = rawText.slice(1);
        var originalText = upperFirstLetter + removedFirstLetter;

        $(self.categorySelectorLabelSelector).text(originalText);
        $(this).hide();
        self.currentRefCategory = null;
        self.updateModuleVisibility();
      });
    }
  }, {
    key: 'initSearchBlock',
    value: function initSearchBlock() {
      var _this2 = this;

      var self = this;
      self.pstaggerInput = $('#module-search-bar').pstagger({
        onTagsChanged: function onTagsChanged(tagList) {
          self.currentTagsList = tagList;
          self.updateModuleVisibility();
        },
        onResetTags: function onResetTags() {
          self.currentTagsList = [];
          self.updateModuleVisibility();
        },
        inputPlaceholder: window.translate_javascripts['Search - placeholder'],
        closingCross: true,
        context: self
      });

      $('body').on('click', '.module-addons-search-link', function (event) {
        event.preventDefault();
        event.stopPropagation();
        window.open($(_this2).attr('href'), '_blank');
      });
    }

    /**
     * Initialize display switching between List or Grid
     */

  }, {
    key: 'initSortingDisplaySwitch',
    value: function initSortingDisplaySwitch() {
      var self = this;

      $('body').on('click', '.module-sort-switch', function switchSort() {
        var switchTo = $(this).data('switch');
        var isAlreadyDisplayed = $(this).hasClass('active-display');
        if (typeof switchTo !== 'undefined' && isAlreadyDisplayed === false) {
          self.switchSortingDisplayTo(switchTo);
          self.currentDisplay = switchTo;
        }
      });
    }
  }, {
    key: 'switchSortingDisplayTo',
    value: function switchSortingDisplayTo(switchTo) {
      if (switchTo !== this.DISPLAY_GRID && switchTo !== this.DISPLAY_LIST) {
        console.error('Can\'t switch to undefined display property "' + switchTo + '"');
        return;
      }

      $('.module-sort-switch').removeClass('module-sort-active');
      $('#module-sort-' + switchTo).addClass('module-sort-active');
      this.currentDisplay = switchTo;
      this.updateModuleVisibility();
    }
  }, {
    key: 'initializeSeeMore',
    value: function initializeSeeMore() {
      var self = this;

      $(self.moduleShortList + ' ' + self.seeMoreSelector).on('click', function seeMore() {
        self.currentCategoryDisplay[$(this).data('category')] = true;
        $(this).addClass('d-none');
        $(this).closest(self.moduleShortList).find(self.seeLessSelector).removeClass('d-none');
        self.updateModuleVisibility();
      });

      $(self.moduleShortList + ' ' + self.seeLessSelector).on('click', function seeMore() {
        self.currentCategoryDisplay[$(this).data('category')] = false;
        $(this).addClass('d-none');
        $(this).closest(self.moduleShortList).find(self.seeMoreSelector).removeClass('d-none');
        self.updateModuleVisibility();
      });
    }
  }, {
    key: 'updateTotalResults',
    value: function updateTotalResults() {
      var replaceFirstWordBy = function replaceFirstWordBy(element, value) {
        var explodedText = element.text().split(' ');
        explodedText[0] = value;
        element.text(explodedText.join(' '));
      };

      // If there are some shortlist: each shortlist count the modules on the next container.
      var $shortLists = $('.module-short-list');
      if ($shortLists.length > 0) {
        $shortLists.each(function shortLists() {
          var $this = $(this);
          replaceFirstWordBy($this.find('.module-search-result-wording'), $this.next('.modules-list').find('.module-item').length);
        });

        // If there is no shortlist: the wording directly update from the only module container.
      } else {
        var modulesCount = $('.modules-list').find('.module-item').length;
        replaceFirstWordBy($('.module-search-result-wording'), modulesCount);

        var selectorToToggle = self.currentDisplay === self.DISPLAY_LIST ? this.addonItemListSelector : this.addonItemGridSelector;
        $(selectorToToggle).toggle(modulesCount !== this.modulesList.length / 2);

        if (modulesCount === 0) {
          $('.module-addons-search-link').attr('href', this.baseAddonsUrl + 'search.php?search_query=' + encodeURIComponent(this.currentTagsList.join(' ')));
        }
      }
    }
  }]);

  return AdminModuleController;
}();

exports.default = AdminModuleController;

/***/ }),

/***/ 280:
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
 * Module Admin Page Loader.
 * @constructor
 */

var ModuleLoader = function () {
  function ModuleLoader() {
    _classCallCheck(this, ModuleLoader);

    ModuleLoader.handleImport();
    ModuleLoader.handleEvents();
  }

  _createClass(ModuleLoader, null, [{
    key: 'handleImport',
    value: function handleImport() {
      var moduleImport = $('#module-import');
      moduleImport.click(function () {
        moduleImport.addClass('onclick', 250, validate);
      });

      function validate() {
        setTimeout(function () {
          moduleImport.removeClass('onclick');
          moduleImport.addClass('validate', 450, callback);
        }, 2250);
      }
      function callback() {
        setTimeout(function () {
          moduleImport.removeClass('validate');
        }, 1250);
      }
    }
  }, {
    key: 'handleEvents',
    value: function handleEvents() {
      $('body').on('click', 'a.module-read-more-grid-btn, a.module-read-more-list-btn', function (event) {
        event.preventDefault();
        var modulePoppin = $(event.target).data('target');

        $.get(event.target.href, function (data) {
          $(modulePoppin).html(data);
          $(modulePoppin).modal();
        });
      });
    }
  }]);

  return ModuleLoader;
}();

exports.default = ModuleLoader;

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moduleCard = __webpack_require__(65);

var _moduleCard2 = _interopRequireDefault(_moduleCard);

var _controller = __webpack_require__(279);

var _controller2 = _interopRequireDefault(_controller);

var _loader = __webpack_require__(280);

var _loader2 = _interopRequireDefault(_loader);

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
  var moduleCardController = new _moduleCard2.default();
  new _loader2.default();
  new _controller2.default(moduleCardController);
});

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

var BOEvent = {
  on: function on(eventName, callback, context) {

    document.addEventListener(eventName, function (event) {
      if (typeof context !== 'undefined') {
        callback.call(context, event);
      } else {
        callback(event);
      }
    });
  },

  emitEvent: function emitEvent(eventName, eventType) {
    var _event = document.createEvent(eventType);
    // true values stand for: can bubble, and is cancellable
    _event.initEvent(eventName, true, true);
    document.dispatchEvent(_event);
  }
};

/**
 * Class is responsible for handling Module Card behavior
 *
 * This is a port of admin-dev/themes/default/js/bundle/module/module_card.js
 */

var ModuleCard = function () {
  function ModuleCard() {
    _classCallCheck(this, ModuleCard);

    /* Selectors for module action links (uninstall, reset, etc...) to add a confirm popin */
    this.moduleActionMenuLinkSelector = 'button.module_action_menu_';
    this.moduleActionMenuInstallLinkSelector = 'button.module_action_menu_install';
    this.moduleActionMenuEnableLinkSelector = 'button.module_action_menu_enable';
    this.moduleActionMenuUninstallLinkSelector = 'button.module_action_menu_uninstall';
    this.moduleActionMenuDisableLinkSelector = 'button.module_action_menu_disable';
    this.moduleActionMenuEnableMobileLinkSelector = 'button.module_action_menu_enable_mobile';
    this.moduleActionMenuDisableMobileLinkSelector = 'button.module_action_menu_disable_mobile';
    this.moduleActionMenuResetLinkSelector = 'button.module_action_menu_reset';
    this.moduleActionMenuUpdateLinkSelector = 'button.module_action_menu_upgrade';
    this.moduleItemListSelector = '.module-item-list';
    this.moduleItemGridSelector = '.module-item-grid';
    this.moduleItemActionsSelector = '.module-actions';

    /* Selectors only for modal buttons */
    this.moduleActionModalDisableLinkSelector = 'a.module_action_modal_disable';
    this.moduleActionModalResetLinkSelector = 'a.module_action_modal_reset';
    this.moduleActionModalUninstallLinkSelector = 'a.module_action_modal_uninstall';
    this.forceDeletionOption = '#force_deletion';

    this.initActionButtons();
  }

  _createClass(ModuleCard, [{
    key: 'initActionButtons',
    value: function initActionButtons() {
      var self = this;

      $(document).on('click', this.forceDeletionOption, function () {
        var btn = $(self.moduleActionModalUninstallLinkSelector, $("div.module-item-list[data-tech-name='" + $(this).attr("data-tech-name") + "']"));
        if ($(this).prop('checked') === true) {
          btn.attr('data-deletion', 'true');
        } else {
          btn.removeAttr('data-deletion');
        }
      });

      $(document).on('click', this.moduleActionMenuInstallLinkSelector, function () {
        if ($("#modal-prestatrust").length) {
          $("#modal-prestatrust").modal('hide');
        }
        return self._dispatchPreEvent('install', this) && self._confirmAction('install', this) && self._requestToController('install', $(this));
      });
      $(document).on('click', this.moduleActionMenuEnableLinkSelector, function () {
        return self._dispatchPreEvent('enable', this) && self._confirmAction('enable', this) && self._requestToController('enable', $(this));
      });
      $(document).on('click', this.moduleActionMenuUninstallLinkSelector, function () {
        return self._dispatchPreEvent('uninstall', this) && self._confirmAction('uninstall', this) && self._requestToController('uninstall', $(this));
      });
      $(document).on('click', this.moduleActionMenuDisableLinkSelector, function () {
        return self._dispatchPreEvent('disable', this) && self._confirmAction('disable', this) && self._requestToController('disable', $(this));
      });
      $(document).on('click', this.moduleActionMenuEnableMobileLinkSelector, function () {
        return self._dispatchPreEvent('enable_mobile', this) && self._confirmAction('enable_mobile', this) && self._requestToController('enable_mobile', $(this));
      });
      $(document).on('click', this.moduleActionMenuDisableMobileLinkSelector, function () {
        return self._dispatchPreEvent('disable_mobile', this) && self._confirmAction('disable_mobile', this) && self._requestToController('disable_mobile', $(this));
      });
      $(document).on('click', this.moduleActionMenuResetLinkSelector, function () {
        return self._dispatchPreEvent('reset', this) && self._confirmAction('reset', this) && self._requestToController('reset', $(this));
      });
      $(document).on('click', this.moduleActionMenuUpdateLinkSelector, function () {
        return self._dispatchPreEvent('update', this) && self._confirmAction('update', this) && self._requestToController('update', $(this));
      });

      $(document).on('click', this.moduleActionModalDisableLinkSelector, function () {
        return self._requestToController('disable', $(self.moduleActionMenuDisableLinkSelector, $("div.module-item-list[data-tech-name='" + $(this).attr("data-tech-name") + "']")));
      });
      $(document).on('click', this.moduleActionModalResetLinkSelector, function () {
        return self._requestToController('reset', $(self.moduleActionMenuResetLinkSelector, $("div.module-item-list[data-tech-name='" + $(this).attr("data-tech-name") + "']")));
      });
      $(document).on('click', this.moduleActionModalUninstallLinkSelector, function (e) {
        $(e.target).parents('.modal').on('hidden.bs.modal', function (event) {
          return self._requestToController('uninstall', $(self.moduleActionMenuUninstallLinkSelector, $("div.module-item-list[data-tech-name='" + $(e.target).attr("data-tech-name") + "']")), $(e.target).attr("data-deletion"));
        }.bind(e));
      });
    }
  }, {
    key: '_getModuleItemSelector',
    value: function _getModuleItemSelector() {
      if ($(this.moduleItemListSelector).length) {
        return this.moduleItemListSelector;
      } else {
        return this.moduleItemGridSelector;
      }
    }
  }, {
    key: '_confirmAction',
    value: function _confirmAction(action, element) {
      var modal = $('#' + $(element).data('confirm_modal'));
      if (modal.length != 1) {
        return true;
      }
      modal.first().modal('show');

      return false; // do not allow a.href to reload the page. The confirm modal dialog will do it async if needed.
    }
  }, {
    key: '_confirmPrestaTrust',


    /**
     * Update the content of a modal asking a confirmation for PrestaTrust and open it
     *
     * @param {array} result containing module data
     * @return {void}
     */
    value: function _confirmPrestaTrust(result) {
      var that = this;
      var modal = this._replacePrestaTrustPlaceholders(result);

      modal.find(".pstrust-install").off('click').on('click', function () {
        // Find related form, update it and submit it
        var install_button = $(that.moduleActionMenuInstallLinkSelector, '.module-item[data-tech-name="' + result.module.attributes.name + '"]');
        var form = install_button.parent("form");
        $('<input>').attr({
          type: 'hidden',
          value: '1',
          name: 'actionParams[confirmPrestaTrust]'
        }).appendTo(form);

        install_button.click();
        modal.modal('hide');
      });

      modal.modal();
    }
  }, {
    key: '_replacePrestaTrustPlaceholders',
    value: function _replacePrestaTrustPlaceholders(result) {
      var modal = $("#modal-prestatrust");
      var module = result.module.attributes;

      if (result.confirmation_subject !== 'PrestaTrust' || !modal.length) {
        return;
      }

      var alertClass = module.prestatrust.status ? 'success' : 'warning';

      if (module.prestatrust.check_list.property) {
        modal.find("#pstrust-btn-property-ok").show();
        modal.find("#pstrust-btn-property-nok").hide();
      } else {
        modal.find("#pstrust-btn-property-ok").hide();
        modal.find("#pstrust-btn-property-nok").show();
        modal.find("#pstrust-buy").attr("href", module.url).toggle(module.url !== null);
      }

      modal.find("#pstrust-img").attr({ src: module.img, alt: module.name });
      modal.find("#pstrust-name").text(module.displayName);
      modal.find("#pstrust-author").text(module.author);
      modal.find("#pstrust-label").attr("class", "text-" + alertClass).text(module.prestatrust.status ? 'OK' : 'KO');
      modal.find("#pstrust-message").attr("class", "alert alert-" + alertClass);
      modal.find("#pstrust-message > p").text(module.prestatrust.message);

      return modal;
    }
  }, {
    key: '_dispatchPreEvent',
    value: function _dispatchPreEvent(action, element) {
      var event = jQuery.Event('module_card_action_event');

      $(element).trigger(event, [action]);
      if (event.isPropagationStopped() !== false || event.isImmediatePropagationStopped() !== false) {
        return false; // if all handlers have not been called, then stop propagation of the click event.
      }

      return event.result !== false; // explicit false must be set from handlers to stop propagation of the click event.
    }
  }, {
    key: '_requestToController',
    value: function _requestToController(action, element, forceDeletion, disableCacheClear, callback) {
      var self = this;
      var jqElementObj = element.closest(this.moduleItemActionsSelector);
      var form = element.closest("form");
      var spinnerObj = $("<button class=\"btn-primary-reverse onclick unbind spinner \"></button>");
      var url = "//" + window.location.host + form.attr("action");
      var actionParams = form.serializeArray();

      if (forceDeletion === "true" || forceDeletion === true) {
        actionParams.push({ name: "actionParams[deletion]", value: true });
      }
      if (disableCacheClear === "true" || disableCacheClear === true) {
        actionParams.push({ name: "actionParams[cacheClearEnabled]", value: 0 });
      }

      $.ajax({
        url: url,
        dataType: 'json',
        method: 'POST',
        data: actionParams,
        beforeSend: function beforeSend() {
          jqElementObj.hide();
          jqElementObj.after(spinnerObj);
        }
      }).done(function (result) {
        if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === undefined) {
          $.growl.error({ message: "No answer received from server" });
        } else {
          var moduleTechName = Object.keys(result)[0];

          if (result[moduleTechName].status === false) {
            if (typeof result[moduleTechName].confirmation_subject !== 'undefined') {
              self._confirmPrestaTrust(result[moduleTechName]);
            }

            $.growl.error({ message: result[moduleTechName].msg });
          } else {
            $.growl.notice({ message: result[moduleTechName].msg });

            var alteredSelector = self._getModuleItemSelector().replace('.', '');
            var mainElement = null;

            if (action == "uninstall") {
              mainElement = jqElementObj.closest('.' + alteredSelector);
              mainElement.remove();

              BOEvent.emitEvent("Module Uninstalled", "CustomEvent");
            } else if (action == "disable") {
              mainElement = jqElementObj.closest('.' + alteredSelector);
              mainElement.addClass(alteredSelector + '-isNotActive');
              mainElement.attr('data-active', '0');

              BOEvent.emitEvent("Module Disabled", "CustomEvent");
            } else if (action == "enable") {
              mainElement = jqElementObj.closest('.' + alteredSelector);
              mainElement.removeClass(alteredSelector + '-isNotActive');
              mainElement.attr('data-active', '1');

              BOEvent.emitEvent("Module Enabled", "CustomEvent");
            }

            jqElementObj.replaceWith(result[moduleTechName].action_menu_html);
          }
        }
      }).fail(function () {
        var moduleItem = jqElementObj.closest('module-item-list');
        var techName = moduleItem.data('techName');
        $.growl.error({ message: "Could not perform action " + action + " for module " + techName });
      }).always(function () {
        jqElementObj.fadeIn();
        spinnerObj.remove();
        if (callback) {
          callback();
        }
      });

      return false;
    }
  }]);

  return ModuleCard;
}();

exports.default = ModuleCard;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDM1OThmODA5NTYyZTVhMmYxMDI/NWI0MioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiPzBjYjgqKioqKioqKioqIiwid2VicGFjazovLy8uL2pzL3BhZ2VzL21vZHVsZS9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2pzL3BhZ2VzL21vZHVsZS9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGFnZXMvbW9kdWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pzL2NvbXBvbmVudHMvbW9kdWxlLWNhcmQuanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsIkFkbWluTW9kdWxlQ29udHJvbGxlciIsIm1vZHVsZUNhcmRDb250cm9sbGVyIiwiREVGQVVMVF9NQVhfUkVDRU5UTFlfVVNFRCIsIkRFRkFVTFRfTUFYX1BFUl9DQVRFR09SSUVTIiwiRElTUExBWV9HUklEIiwiRElTUExBWV9MSVNUIiwiQ0FURUdPUllfUkVDRU5UTFlfVVNFRCIsImN1cnJlbnRDYXRlZ29yeURpc3BsYXkiLCJjdXJyZW50RGlzcGxheSIsImlzQ2F0ZWdvcnlHcmlkRGlzcGxheWVkIiwiY3VycmVudFRhZ3NMaXN0IiwiY3VycmVudFJlZkNhdGVnb3J5IiwiY3VycmVudFJlZlN0YXR1cyIsImN1cnJlbnRTb3J0aW5nIiwiYmFzZUFkZG9uc1VybCIsInBzdGFnZ2VySW5wdXQiLCJsYXN0QnVsa0FjdGlvbiIsImlzVXBsb2FkU3RhcnRlZCIsInJlY2VudGx5VXNlZFNlbGVjdG9yIiwibW9kdWxlc0xpc3QiLCJhZGRvbnNDYXJkR3JpZCIsImFkZG9uc0NhcmRMaXN0IiwibW9kdWxlU2hvcnRMaXN0Iiwic2VlTW9yZVNlbGVjdG9yIiwic2VlTGVzc1NlbGVjdG9yIiwibW9kdWxlSXRlbUdyaWRTZWxlY3RvciIsIm1vZHVsZUl0ZW1MaXN0U2VsZWN0b3IiLCJjYXRlZ29yeVNlbGVjdG9yTGFiZWxTZWxlY3RvciIsImNhdGVnb3J5U2VsZWN0b3IiLCJjYXRlZ29yeUl0ZW1TZWxlY3RvciIsImFkZG9uc0xvZ2luQnV0dG9uU2VsZWN0b3IiLCJjYXRlZ29yeVJlc2V0QnRuU2VsZWN0b3IiLCJtb2R1bGVJbnN0YWxsQnRuU2VsZWN0b3IiLCJtb2R1bGVTb3J0aW5nRHJvcGRvd25TZWxlY3RvciIsImNhdGVnb3J5R3JpZFNlbGVjdG9yIiwiY2F0ZWdvcnlHcmlkSXRlbVNlbGVjdG9yIiwiYWRkb25JdGVtR3JpZFNlbGVjdG9yIiwiYWRkb25JdGVtTGlzdFNlbGVjdG9yIiwidXBncmFkZUFsbFNvdXJjZSIsInVwZ3JhZGVBbGxUYXJnZXRzIiwiYnVsa0FjdGlvbkRyb3BEb3duU2VsZWN0b3IiLCJidWxrSXRlbVNlbGVjdG9yIiwiYnVsa0FjdGlvbkNoZWNrYm94TGlzdFNlbGVjdG9yIiwiYnVsa0FjdGlvbkNoZWNrYm94R3JpZFNlbGVjdG9yIiwiY2hlY2tlZEJ1bGtBY3Rpb25MaXN0U2VsZWN0b3IiLCJjaGVja2VkQnVsa0FjdGlvbkdyaWRTZWxlY3RvciIsImJ1bGtBY3Rpb25DaGVja2JveFNlbGVjdG9yIiwiYnVsa0NvbmZpcm1Nb2RhbFNlbGVjdG9yIiwiYnVsa0NvbmZpcm1Nb2RhbEFjdGlvbk5hbWVTZWxlY3RvciIsImJ1bGtDb25maXJtTW9kYWxMaXN0U2VsZWN0b3IiLCJidWxrQ29uZmlybU1vZGFsQWNrQnRuU2VsZWN0b3IiLCJwbGFjZWhvbGRlckdsb2JhbFNlbGVjdG9yIiwicGxhY2Vob2xkZXJGYWlsdXJlR2xvYmFsU2VsZWN0b3IiLCJwbGFjZWhvbGRlckZhaWx1cmVNc2dTZWxlY3RvciIsInBsYWNlaG9sZGVyRmFpbHVyZVJldHJ5QnRuU2VsZWN0b3IiLCJzdGF0dXNTZWxlY3RvckxhYmVsU2VsZWN0b3IiLCJzdGF0dXNJdGVtU2VsZWN0b3IiLCJzdGF0dXNSZXNldEJ0blNlbGVjdG9yIiwiYWRkb25zQ29ubmVjdE1vZGFsQnRuU2VsZWN0b3IiLCJhZGRvbnNMb2dvdXRNb2RhbEJ0blNlbGVjdG9yIiwiYWRkb25zSW1wb3J0TW9kYWxCdG5TZWxlY3RvciIsImRyb3Bab25lTW9kYWxTZWxlY3RvciIsImRyb3Bab25lTW9kYWxGb290ZXJTZWxlY3RvciIsImRyb3Bab25lSW1wb3J0Wm9uZVNlbGVjdG9yIiwiYWRkb25zQ29ubmVjdE1vZGFsU2VsZWN0b3IiLCJhZGRvbnNMb2dvdXRNb2RhbFNlbGVjdG9yIiwiYWRkb25zQ29ubmVjdEZvcm0iLCJtb2R1bGVJbXBvcnRNb2RhbENsb3NlQnRuIiwibW9kdWxlSW1wb3J0U3RhcnRTZWxlY3RvciIsIm1vZHVsZUltcG9ydFByb2Nlc3NpbmdTZWxlY3RvciIsIm1vZHVsZUltcG9ydFN1Y2Nlc3NTZWxlY3RvciIsIm1vZHVsZUltcG9ydFN1Y2Nlc3NDb25maWd1cmVCdG5TZWxlY3RvciIsIm1vZHVsZUltcG9ydEZhaWx1cmVTZWxlY3RvciIsIm1vZHVsZUltcG9ydEZhaWx1cmVSZXRyeVNlbGVjdG9yIiwibW9kdWxlSW1wb3J0RmFpbHVyZURldGFpbHNCdG5TZWxlY3RvciIsIm1vZHVsZUltcG9ydFNlbGVjdEZpbGVNYW51YWxTZWxlY3RvciIsIm1vZHVsZUltcG9ydEZhaWx1cmVNc2dEZXRhaWxzU2VsZWN0b3IiLCJtb2R1bGVJbXBvcnRDb25maXJtU2VsZWN0b3IiLCJpbml0U29ydGluZ0Ryb3Bkb3duIiwiaW5pdEJPRXZlbnRSZWdpc3RlcmluZyIsImluaXRDdXJyZW50RGlzcGxheSIsImluaXRTb3J0aW5nRGlzcGxheVN3aXRjaCIsImluaXRCdWxrRHJvcGRvd24iLCJpbml0U2VhcmNoQmxvY2siLCJpbml0Q2F0ZWdvcnlTZWxlY3QiLCJpbml0Q2F0ZWdvcmllc0dyaWQiLCJpbml0QWN0aW9uQnV0dG9ucyIsImluaXRBZGRvbnNTZWFyY2giLCJpbml0QWRkb25zQ29ubmVjdCIsImluaXRBZGRNb2R1bGVBY3Rpb24iLCJpbml0RHJvcHpvbmUiLCJpbml0UGFnZUNoYW5nZVByb3RlY3Rpb24iLCJpbml0UGxhY2Vob2xkZXJNZWNoYW5pc20iLCJpbml0RmlsdGVyU3RhdHVzRHJvcGRvd24iLCJmZXRjaE1vZHVsZXNMaXN0IiwiZ2V0Tm90aWZpY2F0aW9uc0NvdW50IiwiaW5pdGlhbGl6ZVNlZU1vcmUiLCJzZWxmIiwiYm9keSIsIm9uIiwicGFyc2VJbnQiLCJkYXRhIiwidGV4dCIsImZpbmQiLCJzaG93IiwidXBkYXRlTW9kdWxlVmlzaWJpbGl0eSIsImhpZGUiLCJnZXRCdWxrQ2hlY2tib3hlc1NlbGVjdG9yIiwic2VsZWN0b3IiLCJnZXRCdWxrQ2hlY2tib3hlc0NoZWNrZWRTZWxlY3RvciIsImxlbmd0aCIsImNsb3Nlc3QiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaW5pdGlhbGl6ZUJvZHlDaGFuZ2UiLCJncm93bCIsIndhcm5pbmciLCJtZXNzYWdlIiwidHJhbnNsYXRlX2phdmFzY3JpcHRzIiwibW9kdWxlc0xpc3RTdHJpbmciLCJidWlsZEJ1bGtBY3Rpb25Nb2R1bGVMaXN0IiwiYWN0aW9uU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJodG1sIiwibW9kYWwiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZG9CdWxrQWN0aW9uIiwiQk9FdmVudCIsIm9uTW9kdWxlRGlzYWJsZWQiLCJ1cGRhdGVUb3RhbFJlc3VsdHMiLCJtb2R1bGVJdGVtU2VsZWN0b3IiLCJnZXRNb2R1bGVJdGVtU2VsZWN0b3IiLCJlYWNoIiwic2Nhbk1vZHVsZXNMaXN0IiwiYWpheExvYWRQYWdlIiwiZmFkZU91dCIsImZhZGVJbiIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJtb2R1bGVVUkxzIiwiY2F0YWxvZ1JlZnJlc2giLCJkb25lIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJkb21FbGVtZW50cyIsIm1zZyIsInN0eWxlc2hlZXQiLCJkb2N1bWVudCIsInN0eWxlU2hlZXRzIiwic3R5bGVzaGVldFJ1bGUiLCJtb2R1bGVHbG9iYWxTZWxlY3RvciIsIm1vZHVsZVNvcnRpbmdTZWxlY3RvciIsInJlcXVpcmVkU2VsZWN0b3JDb21iaW5hdGlvbiIsImluc2VydFJ1bGUiLCJjc3NSdWxlcyIsImFkZFJ1bGUiLCJpbmRleCIsImVsZW1lbnQiLCJhcHBlbmQiLCJjb250ZW50IiwiY3NzIiwicG9wb3ZlciIsImZhaWwiLCJzdGF0dXNUZXh0IiwiY29udGFpbmVyIiwiJHRoaXMiLCJwcmVwYXJlQ29udGFpbmVyIiwicHJlcGFyZU1vZHVsZXMiLCJwdXNoIiwiZG9tT2JqZWN0IiwiaWQiLCJuYW1lIiwic2NvcmluZyIsInBhcnNlRmxvYXQiLCJsb2dvIiwiYXV0aG9yIiwidmVyc2lvbiIsImRlc2NyaXB0aW9uIiwidGVjaE5hbWUiLCJjaGlsZENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwiU3RyaW5nIiwidHlwZSIsInByaWNlIiwiYWN0aXZlIiwiYWNjZXNzIiwiZGlzcGxheSIsImhhc0NsYXNzIiwicmVtb3ZlIiwidHJpZ2dlciIsIm9yZGVyIiwia2V5Iiwic3BsaXR0ZWRLZXkiLCJzcGxpdCIsImN1cnJlbnRDb21wYXJlIiwiYSIsImIiLCJhRGF0YSIsImJEYXRhIiwiRGF0ZSIsImdldFRpbWUiLCJpc05hTiIsImxvY2FsZUNvbXBhcmUiLCJzb3J0IiwicmV2ZXJzZSIsInNldFNob3J0TGlzdFZpc2liaWxpdHkiLCJuYk1vZHVsZXNJbkNvbnRhaW5lciIsInVwZGF0ZU1vZHVsZVNvcnRpbmciLCJpc1Zpc2libGUiLCJjdXJyZW50TW9kdWxlIiwibW9kdWxlQ2F0ZWdvcnkiLCJ0YWdFeGlzdHMiLCJuZXdWYWx1ZSIsIm1vZHVsZXNMaXN0TGVuZ3RoIiwiY291bnRlciIsImkiLCJ2YWx1ZSIsImluZGV4T2YiLCJ1bmRlZmluZWQiLCJ1cGRhdGVNb2R1bGVDb250YWluZXJEaXNwbGF5IiwiY2hlY2tCb3hlc1NlbGVjdG9yIiwiYWxyZWFkeURvbmVGbGFnIiwiaHRtbEdlbmVyYXRlZCIsImN1cnJlbnRFbGVtZW50IiwicHJlcGFyZUNoZWNrYm94ZXMiLCJhdHRyIiwiaW5pdGlhbGl6ZUJvZHlTdWJtaXQiLCJkYXRhVHlwZSIsInNlcmlhbGl6ZSIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnJvciIsImFkZE1vZHVsZUJ1dHRvbiIsImRyb3B6b25lIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHIiLCJtYW51YWxTZWxlY3QiLCJpbml0aWFsaXplQm9keUNsaWNrT25Nb2R1bGVJbXBvcnQiLCJzbGlkZURvd24iLCJkcm9wem9uZU9wdGlvbnMiLCJtb2R1bGVJbXBvcnQiLCJhY2NlcHRlZEZpbGVzIiwicGFyYW1OYW1lIiwibWF4RmlsZXNpemUiLCJ1cGxvYWRNdWx0aXBsZSIsImFkZFJlbW92ZUxpbmtzIiwiZGljdERlZmF1bHRNZXNzYWdlIiwiaGlkZGVuSW5wdXRDb250YWluZXIiLCJ0aW1lb3V0IiwiYWRkZWRmaWxlIiwiYW5pbWF0ZVN0YXJ0VXBsb2FkIiwicHJvY2Vzc2luZyIsImZpbGUiLCJkaXNwbGF5T25VcGxvYWRFcnJvciIsImNvbXBsZXRlIiwicmVzcG9uc2VPYmplY3QiLCJwYXJzZUpTT04iLCJ4aHIiLCJpc19jb25maWd1cmFibGUiLCJtb2R1bGVfbmFtZSIsImRpc3BsYXlPblVwbG9hZERvbmUiLCJleHRlbmQiLCJjYWxsYmFjayIsImZpbmlzaCIsInJlc3VsdCIsImFuaW1hdGVFbmRVcGxvYWQiLCJjb25maWd1cmVMaW5rIiwiY29uZmlndXJhdGlvblBhZ2UiLCJyZXBsYWNlIiwiY29uZmlybWF0aW9uX3N1YmplY3QiLCJkaXNwbGF5UHJlc3RhVHJ1c3RTdGVwIiwiX3JlcGxhY2VQcmVzdGFUcnVzdFBsYWNlaG9sZGVycyIsIm1vZHVsZU5hbWUiLCJtb2R1bGUiLCJhdHRyaWJ1dGVzIiwib2ZmIiwicG9zdCIsInVybHMiLCJpbnN0YWxsIiwiYWx3YXlzIiwiZ2V0SlNPTiIsIm5vdGlmaWNhdGlvbnNDb3VudCIsInVwZGF0ZU5vdGlmaWNhdGlvbnNDb3VudCIsImNvbnNvbGUiLCJiYWRnZSIsImRlc3RpbmF0aW9uVGFicyIsInRvX2NvbmZpZ3VyZSIsInRvX3VwZGF0ZSIsInNlYXJjaFF1ZXJ5IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsIm9wZW4iLCJpbml0aWxhaXplR3JpZEJvZHlDbGljayIsInJlZkNhdGVnb3J5IiwicmVzZXRUYWdzIiwibWVudUNhdGVnb3J5VG9UcmlnZ2VyIiwid2FybiIsImNsaWNrIiwiaW5pdGlhbGl6ZUJvZHlTb3J0aW5nQ2hhbmdlIiwicmVxdWVzdGVkQnVsa0FjdGlvbiIsImZvcmNlRGVsZXRpb24iLCJwcm9wIiwiYnVsa0FjdGlvblRvVXJsIiwiYnVsa0FjdGlvblNlbGVjdGVkU2VsZWN0b3IiLCJidWxrTW9kdWxlQWN0aW9uIiwibW9kdWxlc0FjdGlvbnMiLCJtb2R1bGVUZWNoTmFtZSIsImJ1bGtBY3Rpb25TZWxlY3RvciIsImFjdGlvbk1lbnVPYmoiLCJuZXh0IiwicGVyZm9ybU1vZHVsZXNBY3Rpb24iLCJhY3Rpb25NZW51TGlua3MiLCJmaWx0ZXJBbGxvd2VkQWN0aW9ucyIsIm1vZHVsZXNSZXF1ZXN0ZWRDb3VudGRvd24iLCJzcGlubmVyT2JqIiwiYnVsa01vZHVsZXNMb29wIiwiYWN0aW9uTWVudUxpbmsiLCJyZXF1ZXN0TW9kdWxlQWN0aW9uIiwiY291bnRkb3duTW9kdWxlc1JlcXVlc3QiLCJsYXN0TWVudUxpbmsiLCJtb2R1bGVJdGVtQWN0aW9uc1NlbGVjdG9yIiwiYWZ0ZXIiLCJkaXNhYmxlQ2FjaGVDbGVhciIsInJlcXVlc3RFbmRDYWxsYmFjayIsIl9yZXF1ZXN0VG9Db250cm9sbGVyIiwiZmlsdGVyQWxsb3dlZE1vZHVsZXMiLCJtb2R1bGVEYXRhIiwibW9kdWxlQWN0aW9uTWVudUxpbmtTZWxlY3RvciIsImluaXRpYWxpemVBY3Rpb25CdXR0b25zQ2xpY2siLCIkbmV4dCIsIm1vZHVsZUl0ZW1MaXN0IiwiaW5pdGlhbGl6ZUNhdGVnb3J5U2VsZWN0Q2xpY2siLCJpbml0aWFsaXplQ2F0ZWdvcnlSZXNldEJ1dHRvbkNsaWNrIiwicmF3VGV4dCIsInVwcGVyRmlyc3RMZXR0ZXIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInJlbW92ZWRGaXJzdExldHRlciIsInNsaWNlIiwib3JpZ2luYWxUZXh0IiwicHN0YWdnZXIiLCJvblRhZ3NDaGFuZ2VkIiwidGFnTGlzdCIsIm9uUmVzZXRUYWdzIiwiaW5wdXRQbGFjZWhvbGRlciIsImNsb3NpbmdDcm9zcyIsImNvbnRleHQiLCJzd2l0Y2hTb3J0Iiwic3dpdGNoVG8iLCJpc0FscmVhZHlEaXNwbGF5ZWQiLCJzd2l0Y2hTb3J0aW5nRGlzcGxheVRvIiwic2VlTW9yZSIsInJlcGxhY2VGaXJzdFdvcmRCeSIsImV4cGxvZGVkVGV4dCIsIiRzaG9ydExpc3RzIiwic2hvcnRMaXN0cyIsIm1vZHVsZXNDb3VudCIsInNlbGVjdG9yVG9Ub2dnbGUiLCJ0b2dnbGUiLCJNb2R1bGVMb2FkZXIiLCJoYW5kbGVJbXBvcnQiLCJoYW5kbGVFdmVudHMiLCJ2YWxpZGF0ZSIsIm1vZHVsZVBvcHBpbiIsInRhcmdldCIsImdldCIsImhyZWYiLCJNb2R1bGVDYXJkIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGwiLCJlbWl0RXZlbnQiLCJldmVudFR5cGUiLCJfZXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJtb2R1bGVBY3Rpb25NZW51SW5zdGFsbExpbmtTZWxlY3RvciIsIm1vZHVsZUFjdGlvbk1lbnVFbmFibGVMaW5rU2VsZWN0b3IiLCJtb2R1bGVBY3Rpb25NZW51VW5pbnN0YWxsTGlua1NlbGVjdG9yIiwibW9kdWxlQWN0aW9uTWVudURpc2FibGVMaW5rU2VsZWN0b3IiLCJtb2R1bGVBY3Rpb25NZW51RW5hYmxlTW9iaWxlTGlua1NlbGVjdG9yIiwibW9kdWxlQWN0aW9uTWVudURpc2FibGVNb2JpbGVMaW5rU2VsZWN0b3IiLCJtb2R1bGVBY3Rpb25NZW51UmVzZXRMaW5rU2VsZWN0b3IiLCJtb2R1bGVBY3Rpb25NZW51VXBkYXRlTGlua1NlbGVjdG9yIiwibW9kdWxlQWN0aW9uTW9kYWxEaXNhYmxlTGlua1NlbGVjdG9yIiwibW9kdWxlQWN0aW9uTW9kYWxSZXNldExpbmtTZWxlY3RvciIsIm1vZHVsZUFjdGlvbk1vZGFsVW5pbnN0YWxsTGlua1NlbGVjdG9yIiwiZm9yY2VEZWxldGlvbk9wdGlvbiIsImJ0biIsIl9kaXNwYXRjaFByZUV2ZW50IiwiX2NvbmZpcm1BY3Rpb24iLCJlIiwicGFyZW50cyIsImJpbmQiLCJhY3Rpb24iLCJmaXJzdCIsInRoYXQiLCJpbnN0YWxsX2J1dHRvbiIsImZvcm0iLCJwYXJlbnQiLCJhcHBlbmRUbyIsImFsZXJ0Q2xhc3MiLCJwcmVzdGF0cnVzdCIsImNoZWNrX2xpc3QiLCJwcm9wZXJ0eSIsInNyYyIsImltZyIsImFsdCIsImRpc3BsYXlOYW1lIiwialF1ZXJ5IiwiRXZlbnQiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwianFFbGVtZW50T2JqIiwiaG9zdCIsImFjdGlvblBhcmFtcyIsInNlcmlhbGl6ZUFycmF5IiwiT2JqZWN0Iiwia2V5cyIsIl9jb25maXJtUHJlc3RhVHJ1c3QiLCJub3RpY2UiLCJhbHRlcmVkU2VsZWN0b3IiLCJfZ2V0TW9kdWxlSXRlbVNlbGVjdG9yIiwibWFpbkVsZW1lbnQiLCJyZXBsYWNlV2l0aCIsImFjdGlvbl9tZW51X2h0bWwiLCJtb2R1bGVJdGVtIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ2hFQSxhQUFhLG1DQUFtQyxFQUFFLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxJQUFNQSxJQUFJQyxPQUFPRCxDQUFqQjs7QUFFQTs7Ozs7SUFJTUUscUI7QUFDSjs7Ozs7QUFLQSxpQ0FBWUMsb0JBQVosRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0Esb0JBQUwsR0FBNEJBLG9CQUE1Qjs7QUFFQSxTQUFLQyx5QkFBTCxHQUFpQyxFQUFqQztBQUNBLFNBQUtDLDBCQUFMLEdBQWtDLENBQWxDO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixNQUFwQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsTUFBcEI7QUFDQSxTQUFLQyxzQkFBTCxHQUE4QixlQUE5Qjs7QUFFQSxTQUFLQyxzQkFBTCxHQUE4QixFQUE5QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSxTQUFLQyx1QkFBTCxHQUErQixLQUEvQjtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsRUFBdkI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixJQUExQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsZ0NBQXJCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEtBQXZCOztBQUVBLFNBQUtDLG9CQUFMLEdBQTRCLDBDQUE1Qjs7QUFFQTs7Ozs7QUFLQSxTQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsSUFBdEI7O0FBRUEsU0FBS0MsZUFBTCxHQUF1QixvQkFBdkI7QUFDQTtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsV0FBdkI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLFdBQXZCOztBQUVBO0FBQ0EsU0FBS0Msc0JBQUwsR0FBOEIsbUJBQTlCO0FBQ0EsU0FBS0Msc0JBQUwsR0FBOEIsbUJBQTlCO0FBQ0EsU0FBS0MsNkJBQUwsR0FBcUMsaUNBQXJDO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsMkJBQXhCO0FBQ0EsU0FBS0Msb0JBQUwsR0FBNEIsdUJBQTVCO0FBQ0EsU0FBS0MseUJBQUwsR0FBaUMsbUJBQWpDO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0Msd0JBQWhDO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0MsMEJBQWhDO0FBQ0EsU0FBS0MsNkJBQUwsR0FBcUMsK0JBQXJDO0FBQ0EsU0FBS0Msb0JBQUwsR0FBNEIsMEJBQTVCO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0MsdUJBQWhDO0FBQ0EsU0FBS0MscUJBQUwsR0FBNkIsMEJBQTdCO0FBQ0EsU0FBS0MscUJBQUwsR0FBNkIsMEJBQTdCOztBQUVBO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsaUNBQXhCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUIsb0VBQXpCOztBQUVBO0FBQ0EsU0FBS0MsMEJBQUwsR0FBa0Msc0JBQWxDO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsbUJBQXhCO0FBQ0EsU0FBS0MsOEJBQUwsR0FBc0Msa0NBQXRDO0FBQ0EsU0FBS0MsOEJBQUwsR0FBc0Msa0NBQXRDO0FBQ0EsU0FBS0MsNkJBQUwsR0FBd0MsS0FBS0YsOEJBQTdDO0FBQ0EsU0FBS0csNkJBQUwsR0FBd0MsS0FBS0YsOEJBQTdDO0FBQ0EsU0FBS0csMEJBQUwsR0FBa0MsNkJBQWxDO0FBQ0EsU0FBS0Msd0JBQUwsR0FBZ0MsNEJBQWhDO0FBQ0EsU0FBS0Msa0NBQUwsR0FBMEMsd0NBQTFDO0FBQ0EsU0FBS0MsNEJBQUwsR0FBb0MsaUNBQXBDO0FBQ0EsU0FBS0MsOEJBQUwsR0FBc0MsZ0NBQXRDOztBQUVBO0FBQ0EsU0FBS0MseUJBQUwsR0FBaUMsOEJBQWpDO0FBQ0EsU0FBS0MsZ0NBQUwsR0FB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LFdBQVosQ0FBd0IyVCxrQkFBa0IsY0FBMUM7QUFDQUUsMEJBQVl6TSxJQUFaLENBQWlCLGFBQWpCLEVBQWdDLEdBQWhDOztBQUVBbkcsc0JBQVF1UCxTQUFSLENBQWtCLGdCQUFsQixFQUFvQyxhQUFwQztBQUNEOztBQUVEMkMseUJBQWFXLFdBQWIsQ0FBeUJqSyxPQUFPMEMsY0FBUCxFQUF1QndILGdCQUFoRDtBQUNEO0FBQ0Y7QUFDRixPQWpERCxFQWlERzFRLElBakRILENBaURRLFlBQVc7QUFDakIsWUFBTTJRLGFBQWFiLGFBQWFwVCxPQUFiLENBQXFCLGtCQUFyQixDQUFuQjtBQUNBLFlBQU1zRSxXQUFXMlAsV0FBVzNVLElBQVgsQ0FBZ0IsVUFBaEIsQ0FBakI7QUFDQXZHLFVBQUVxSCxLQUFGLENBQVF5SCxLQUFSLENBQWMsRUFBQ3ZILFNBQVMsOEJBQTRCMlIsTUFBNUIsR0FBbUMsY0FBbkMsR0FBa0QzTixRQUE1RCxFQUFkO0FBQ0QsT0FyREQsRUFxREd1RyxNQXJESCxDQXFEVSxZQUFZO0FBQ3BCdUkscUJBQWF6UixNQUFiO0FBQ0FxTCxtQkFBV2hJLE1BQVg7QUFDQSxZQUFJNEUsUUFBSixFQUFjO0FBQ1pBO0FBQ0Q7QUFDRixPQTNERDs7QUE2REEsYUFBTyxLQUFQO0FBQ0Q7Ozs7OztrQkF4UGtCeUcsVSIsImZpbGUiOiJtb2R1bGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNzIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAzNTk4ZjgwOTU2MmU1YTJmMTAyIiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpRdWVyeVwiXTsgfSgpKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA2IDE1IDE5IDM0IDM1IDQxIDQyIDQ4IiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuY29uc3QgJCA9IHdpbmRvdy4kO1xuXG4vKipcbiAqIE1vZHVsZSBBZG1pbiBQYWdlIENvbnRyb2xsZXIuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY2xhc3MgQWRtaW5Nb2R1bGVDb250cm9sbGVyIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYWxsIGxpc3RlbmVycyBhbmQgYmluZCBldmVyeXRoaW5nXG4gICAqIEBtZXRob2QgaW5pdFxuICAgKiBAbWVtYmVyb2YgQWRtaW5Nb2R1bGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG1vZHVsZUNhcmRDb250cm9sbGVyKSB7XG4gICAgdGhpcy5tb2R1bGVDYXJkQ29udHJvbGxlciA9IG1vZHVsZUNhcmRDb250cm9sbGVyO1xuXG4gICAgdGhpcy5ERUZBVUxUX01BWF9SRUNFTlRMWV9VU0VEID0gMTA7XG4gICAgdGhpcy5ERUZBVUxUX01BWF9QRVJfQ0FURUdPUklFUyA9IDY7XG4gICAgdGhpcy5ESVNQTEFZX0dSSUQgPSAnZ3JpZCc7XG4gICAgdGhpcy5ESVNQTEFZX0xJU1QgPSAnbGlzdCc7XG4gICAgdGhpcy5DQVRFR09SWV9SRUNFTlRMWV9VU0VEID0gJ3JlY2VudGx5LXVzZWQnO1xuXG4gICAgdGhpcy5jdXJyZW50Q2F0ZWdvcnlEaXNwbGF5ID0ge307XG4gICAgdGhpcy5jdXJyZW50RGlzcGxheSA9ICcnO1xuICAgIHRoaXMuaXNDYXRlZ29yeUdyaWREaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnRUYWdzTGlzdCA9IFtdO1xuICAgIHRoaXMuY3VycmVudFJlZkNhdGVnb3J5ID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRSZWZTdGF0dXMgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudFNvcnRpbmcgPSBudWxsO1xuICAgIHRoaXMuYmFzZUFkZG9uc1VybCA9ICdodHRwczovL2FkZG9ucy5wcmVzdGFzaG9wLmNvbS8nO1xuICAgIHRoaXMucHN0YWdnZXJJbnB1dCA9IG51bGw7XG4gICAgdGhpcy5sYXN0QnVsa0FjdGlvbiA9IG51bGw7XG4gICAgdGhpcy5pc1VwbG9hZFN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMucmVjZW50bHlVc2VkU2VsZWN0b3IgPSAnI21vZHVsZS1yZWNlbnRseS11c2VkLWxpc3QgLm1vZHVsZXMtbGlzdCc7XG5cbiAgICAvKipcbiAgICAgKiBMb2FkZWQgbW9kdWxlcyBsaXN0LlxuICAgICAqIENvbnRhaW5pbmcgdGhlIGNhcmQgYW5kIGxpc3QgZGlzcGxheS5cbiAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVzTGlzdCA9IFtdO1xuICAgIHRoaXMuYWRkb25zQ2FyZEdyaWQgPSBudWxsO1xuICAgIHRoaXMuYWRkb25zQ2FyZExpc3QgPSBudWxsO1xuXG4gICAgdGhpcy5tb2R1bGVTaG9ydExpc3QgPSAnLm1vZHVsZS1zaG9ydC1saXN0JztcbiAgICAvLyBTZWUgbW9yZSAmIFNlZSBsZXNzIHNlbGVjdG9yXG4gICAgdGhpcy5zZWVNb3JlU2VsZWN0b3IgPSAnLnNlZS1tb3JlJztcbiAgICB0aGlzLnNlZUxlc3NTZWxlY3RvciA9ICcuc2VlLWxlc3MnO1xuXG4gICAgLy8gU2VsZWN0b3JzIGludG8gdmFycyB0byBtYWtlIGl0IGVhc2llciB0byBjaGFuZ2UgdGhlbSB3aGlsZSBrZWVwaW5nIHNhbWUgY29kZSBsb2dpY1xuICAgIHRoaXMubW9kdWxlSXRlbUdyaWRTZWxlY3RvciA9ICcubW9kdWxlLWl0ZW0tZ3JpZCc7XG4gICAgdGhpcy5tb2R1bGVJdGVtTGlzdFNlbGVjdG9yID0gJy5tb2R1bGUtaXRlbS1saXN0JztcbiAgICB0aGlzLmNhdGVnb3J5U2VsZWN0b3JMYWJlbFNlbGVjdG9yID0gJy5tb2R1bGUtY2F0ZWdvcnktc2VsZWN0b3ItbGFiZWwnO1xuICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3RvciA9ICcubW9kdWxlLWNhdGVnb3J5LXNlbGVjdG9yJztcbiAgICB0aGlzLmNhdGVnb3J5SXRlbVNlbGVjdG9yID0gJy5tb2R1bGUtY2F0ZWdvcnktbWVudSc7XG4gICAgdGhpcy5hZGRvbnNMb2dpbkJ1dHRvblNlbGVjdG9yID0gJyNhZGRvbnNfbG9naW5fYnRuJztcbiAgICB0aGlzLmNhdGVnb3J5UmVzZXRCdG5TZWxlY3RvciA9ICcubW9kdWxlLWNhdGVnb3J5LXJlc2V0JztcbiAgICB0aGlzLm1vZHVsZUluc3RhbGxCdG5TZWxlY3RvciA9ICdpbnB1dC5tb2R1bGUtaW5zdGFsbC1idG4nO1xuICAgIHRoaXMubW9kdWxlU29ydGluZ0Ryb3Bkb3duU2VsZWN0b3IgPSAnLm1vZHVsZS1zb3J0aW5nLWF1dGhvciBzZWxlY3QnO1xuICAgIHRoaXMuY2F0ZWdvcnlHcmlkU2VsZWN0b3IgPSAnI21vZHVsZXMtY2F0ZWdvcmllcy1ncmlkJztcbiAgICB0aGlzLmNhdGVnb3J5R3JpZEl0ZW1TZWxlY3RvciA9ICcubW9kdWxlLWNhdGVnb3J5LWl0ZW0nO1xuICAgIHRoaXMuYWRkb25JdGVtR3JpZFNlbGVjdG9yID0gJy5tb2R1bGUtYWRkb25zLWl0ZW0tZ3JpZCc7XG4gICAgdGhpcy5hZGRvbkl0ZW1MaXN0U2VsZWN0b3IgPSAnLm1vZHVsZS1hZGRvbnMtaXRlbS1saXN0JztcblxuICAgIC8vIFVwZ3JhZGUgQWxsIHNlbGVjdG9yc1xuICAgIHRoaXMudXBncmFkZUFsbFNvdXJjZSA9ICcubW9kdWxlX2FjdGlvbl9tZW51X3VwZ3JhZGVfYWxsJztcbiAgICB0aGlzLnVwZ3JhZGVBbGxUYXJnZXRzID0gJyNtb2R1bGVzLWxpc3QtY29udGFpbmVyLXVwZGF0ZSAubW9kdWxlX2FjdGlvbl9tZW51X3VwZ3JhZGU6dmlzaWJsZSc7XG5cbiAgICAvLyBCdWxrIGFjdGlvbiBzZWxlY3RvcnNcbiAgICB0aGlzLmJ1bGtBY3Rpb25Ecm9wRG93blNlbGVjdG9yID0gJy5tb2R1bGUtYnVsay1hY3Rpb25zJztcbiAgICB0aGlzLmJ1bGtJdGVtU2VsZWN0b3IgPSAnLm1vZHVsZS1idWxrLW1lbnUnO1xuICAgIHRoaXMuYnVsa0FjdGlvbkNoZWNrYm94TGlzdFNlbGVjdG9yID0gJy5tb2R1bGUtY2hlY2tib3gtYnVsay1saXN0IGlucHV0JztcbiAgICB0aGlzLmJ1bGtBY3Rpb25DaGVja2JveEdyaWRTZWxlY3RvciA9ICcubW9kdWxlLWNoZWNrYm94LWJ1bGstZ3JpZCBpbnB1dCc7XG4gICAgdGhpcy5jaGVja2VkQnVsa0FjdGlvbkxpc3RTZWxlY3RvciA9IGAke3RoaXMuYnVsa0FjdGlvbkNoZWNrYm94TGlzdFNlbGVjdG9yfTpjaGVja2VkYDtcbiAgICB0aGlzLmNoZWNrZWRCdWxrQWN0aW9uR3JpZFNlbGVjdG9yID0gYCR7dGhpcy5idWxrQWN0aW9uQ2hlY2tib3hHcmlkU2VsZWN0b3J9OmNoZWNrZWRgO1xuICAgIHRoaXMuYnVsa0FjdGlvbkNoZWNrYm94U2VsZWN0b3IgPSAnI21vZHVsZS1tb2RhbC1idWxrLWNoZWNrYm94JztcbiAgICB0aGlzLmJ1bGtDb25maXJtTW9kYWxTZWxlY3RvciA9ICcjbW9kdWxlLW1vZGFsLWJ1bGstY29uZmlybSc7XG4gICAgdGhpcy5idWxrQ29uZmlybU1vZGFsQWN0aW9uTmFtZVNlbGVjdG9yID0gJyNtb2R1bGUtbW9kYWwtYnVsay1jb25maXJtLWFjdGlvbi1uYW1lJztcbiAgICB0aGlzLmJ1bGtDb25maXJtTW9kYWxMaXN0U2VsZWN0b3IgPSAnI21vZHVsZS1tb2RhbC1idWxrLWNvbmZpcm0tbGlzdCc7XG4gICAgdGhpcy5idWxrQ29uZmlybU1vZGFsQWNrQnRuU2VsZWN0b3IgPSAnI21vZHVsZS1tb2RhbC1jb25maXJtLWJ1bGstYWNrJztcblxuICAgIC8vIFBsYWNlaG9sZGVyc1xuICAgIHRoaXMucGxhY2Vob2xkZXJHbG9iYWxTZWxlY3RvciA9ICcubW9kdWxlLXBsYWNlaG9sZGVycy13cmFwcGVyJztcbiAgICB0aGlzLnBsYWNlaG9sZGVyRmFpbHVyZUdsb2JhbFNlbGVjdG9yID0gJy5tb2R1bGUtcGxhY2Vob2xkZXJzLWZhaWx1cmUnO1xuICAgIHRoaXMucGxhY2Vob2xkZXJGYWlsdXJlTXNnU2VsZWN0b3IgPSAnLm1vZHVsZS1wbGFjZWhvbGRlcnMtZmFpbHVyZS1tc2cnO1xuICAgIHRoaXMucGxhY2Vob2xkZXJGYWlsdXJlUmV0cnlCdG5TZWxlY3RvciA9ICcjbW9kdWxlLXBsYWNlaG9sZGVycy1mYWlsdXJlLXJldHJ5JztcblxuICAgIC8vIE1vZHVsZSdzIHN0YXR1c2VzIHNlbGVjdG9yc1xuICAgIHRoaXMuc3RhdHVzU2VsZWN0b3JMYWJlbFNlbGVjdG9yID0gJy5tb2R1bGUtc3RhdHVzLXNlbGVjdG9yLWxhYmVsJztcbiAgICB0aGlzLnN0YXR1c0l0ZW1TZWxlY3RvciA9ICcubW9kdWxlLXN0YXR1cy1tZW51JztcbiAgICB0aGlzLnN0YXR1c1Jlc2V0QnRuU2VsZWN0b3IgPSAnLm1vZHVsZS1zdGF0dXMtcmVzZXQnO1xuXG4gICAgLy8gU2VsZWN0b3JzIGZvciBNb2R1bGUgSW1wb3J0IGFuZCBBZGRvbnMgY29ubmVjdFxuICAgIHRoaXMuYWRkb25zQ29ubmVjdE1vZGFsQnRuU2VsZWN0b3IgPSAnI3BhZ2UtaGVhZGVyLWRlc2MtY29uZmlndXJhdGlvbi1hZGRvbnNfY29ubmVjdCc7XG4gICAgdGhpcy5hZGRvbnNMb2dvdXRNb2RhbEJ0blNlbGVjdG9yID0gJyNwYWdlLWhlYWRlci1kZXNjLWNvbmZpZ3VyYXRpb24tYWRkb25zX2xvZ291dCc7XG4gICAgdGhpcy5hZGRvbnNJbXBvcnRNb2RhbEJ0blNlbGVjdG9yID0gJyNwYWdlLWhlYWRlci1kZXNjLWNvbmZpZ3VyYXRpb24tYWRkX21vZHVsZSc7XG4gICAgdGhpcy5kcm9wWm9uZU1vZGFsU2VsZWN0b3IgPSAnI21vZHVsZS1tb2RhbC1pbXBvcnQnO1xuICAgIHRoaXMuZHJvcFpvbmVNb2RhbEZvb3RlclNlbGVjdG9yID0gJyNtb2R1bGUtbW9kYWwtaW1wb3J0IC5tb2RhbC1mb290ZXInO1xuICAgIHRoaXMuZHJvcFpvbmVJbXBvcnRab25lU2VsZWN0b3IgPSAnI2ltcG9ydERyb3B6b25lJztcbiAgICB0aGlzLmFkZG9uc0Nvbm5lY3RNb2RhbFNlbGVjdG9yID0gJyNtb2R1bGUtbW9kYWwtYWRkb25zLWNvbm5lY3QnO1xuICAgIHRoaXMuYWRkb25zTG9nb3V0TW9kYWxTZWxlY3RvciA9ICcjbW9kdWxlLW1vZGFsLWFkZG9ucy1sb2dvdXQnO1xuICAgIHRoaXMuYWRkb25zQ29ubmVjdEZvcm0gPSAnI2FkZG9ucy1jb25uZWN0LWZvcm0nO1xuICAgIHRoaXMubW9kdWxlSW1wb3J0TW9kYWxDbG9zZUJ0biA9ICcjbW9kdWxlLW1vZGFsLWltcG9ydC1jbG9zaW5nLWNyb3NzJztcbiAgICB0aGlzLm1vZHVsZUltcG9ydFN0YXJ0U2VsZWN0b3IgPSAnLm1vZHVsZS1pbXBvcnQtc3RhcnQnO1xuICAgIHRoaXMubW9kdWxlSW1wb3J0UHJvY2Vzc2luZ1NlbGVjdG9yID0gJy5tb2R1bGUtaW1wb3J0LXByb2Nlc3NpbmcnO1xuICAgIHRoaXMubW9kdWxlSW1wb3J0U3VjY2Vzc1NlbGVjdG9yID0gJy5tb2R1bGUtaW1wb3J0LXN1Y2Nlc3MnO1xuICAgIHRoaXMubW9kdWxlSW1wb3J0U3VjY2Vzc0NvbmZpZ3VyZUJ0blNlbGVjdG9yID0gJy5tb2R1bGUtaW1wb3J0LXN1Y2Nlc3MtY29uZmlndXJlJztcbiAgICB0aGlzLm1vZHVsZUltcG9ydEZhaWx1cmVTZWxlY3RvciA9ICcubW9kdWxlLWltcG9ydC1mYWlsdXJlJztcbiAgICB0aGlzLm1vZHVsZUltcG9ydEZhaWx1cmVSZXRyeVNlbGVjdG9yID0gJy5tb2R1bGUtaW1wb3J0LWZhaWx1cmUtcmV0cnknO1xuICAgIHRoaXMubW9kdWxlSW1wb3J0RmFpbHVyZURldGFpbHNCdG5TZWxlY3RvciA9ICcubW9kdWxlLWltcG9ydC1mYWlsdXJlLWRldGFpbHMtYWN0aW9uJztcbiAgICB0aGlzLm1vZHVsZUltcG9ydFNlbGVjdEZpbGVNYW51YWxTZWxlY3RvciA9ICcubW9kdWxlLWltcG9ydC1zdGFydC1zZWxlY3QtbWFudWFsJztcbiAgICB0aGlzLm1vZHVsZUltcG9ydEZhaWx1cmVNc2dEZXRhaWxzU2VsZWN0b3IgPSAnLm1vZHVsZS1pbXBvcnQtZmFpbHVyZS1kZXRhaWxzJztcbiAgICB0aGlzLm1vZHVsZUltcG9ydENvbmZpcm1TZWxlY3RvciA9ICcubW9kdWxlLWltcG9ydC1jb25maXJtJztcblxuICAgIHRoaXMuaW5pdFNvcnRpbmdEcm9wZG93bigpO1xuICAgIHRoaXMuaW5pdEJPRXZlbnRSZWdpc3RlcmluZygpO1xuICAgIHRoaXMuaW5pdEN1cnJlbnREaXNwbGF5KCk7XG4gICAgdGhpcy5pbml0U29ydGluZ0Rpc3BsYXlTd2l0Y2goKTtcbiAgICB0aGlzLmluaXRCdWxrRHJvcGRvd24oKTtcbiAgICB0aGlzLmluaXRTZWFyY2hCbG9jaygpO1xuICAgIHRoaXMuaW5pdENhdGVnb3J5U2VsZWN0KCk7XG4gICAgdGhpcy5pbml0Q2F0ZWdvcmllc0dyaWQoKTtcbiAgICB0aGlzLmluaXRBY3Rpb25CdXR0b25zKCk7XG4gICAgdGhpcy5pbml0QWRkb25zU2VhcmNoKCk7XG4gICAgdGhpcy5pbml0QWRkb25zQ29ubmVjdCgpO1xuICAgIHRoaXMuaW5pdEFkZE1vZHVsZUFjdGlvbigpO1xuICAgIHRoaXMuaW5pdERyb3B6b25lKCk7XG4gICAgdGhpcy5pbml0UGFnZUNoYW5nZVByb3RlY3Rpb24oKTtcbiAgICB0aGlzLmluaXRQbGFjZWhvbGRlck1lY2hhbmlzbSgpO1xuICAgIHRoaXMuaW5pdEZpbHRlclN0YXR1c0Ryb3Bkb3duKCk7XG4gICAgdGhpcy5mZXRjaE1vZHVsZXNMaXN0KCk7XG4gICAgdGhpcy5nZXROb3RpZmljYXRpb25zQ291bnQoKTtcbiAgICB0aGlzLmluaXRpYWxpemVTZWVNb3JlKCk7XG4gIH1cblxuICBpbml0RmlsdGVyU3RhdHVzRHJvcGRvd24oKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgYm9keSA9ICQoJ2JvZHknKTtcbiAgICBib2R5Lm9uKCdjbGljaycsIHNlbGYuc3RhdHVzSXRlbVNlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBHZXQgZGF0YSBmcm9tIGxpIERPTSBpbnB1dFxuICAgICAgc2VsZi5jdXJyZW50UmVmU3RhdHVzID0gcGFyc2VJbnQoJCh0aGlzKS5kYXRhKCdzdGF0dXMtcmVmJyksIDEwKTtcbiAgICAgIC8vIENoYW5nZSBkcm9wZG93biBsYWJlbCB0byBzZXQgaXQgdG8gdGhlIGN1cnJlbnQgc3RhdHVzJyBkaXNwbGF5bmFtZVxuICAgICAgJChzZWxmLnN0YXR1c1NlbGVjdG9yTGFiZWxTZWxlY3RvcikudGV4dCgkKHRoaXMpLmZpbmQoJ2E6Zmlyc3QnKS50ZXh0KCkpO1xuICAgICAgJChzZWxmLnN0YXR1c1Jlc2V0QnRuU2VsZWN0b3IpLnNob3coKTtcbiAgICAgIHNlbGYudXBkYXRlTW9kdWxlVmlzaWJpbGl0eSgpO1xuICAgIH0pO1xuXG4gICAgYm9keS5vbignY2xpY2snLCBzZWxmLnN0YXR1c1Jlc2V0QnRuU2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoc2VsZi5zdGF0dXNTZWxlY3RvckxhYmVsU2VsZWN0b3IpLnRleHQoJCh0aGlzKS5maW5kKCdhJykudGV4dCgpKTtcbiAgICAgICQodGhpcykuaGlkZSgpO1xuICAgICAgc2VsZi5jdXJyZW50UmVmU3RhdHVzID0gbnVsbDtcbiAgICAgIHNlbGYudXBkYXRlTW9kdWxlVmlzaWJpbGl0eSgpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdEJ1bGtEcm9wZG93bigpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBib2R5ID0gJCgnYm9keScpO1xuXG5cbiAgICBib2R5Lm9uKCdjbGljaycsIHNlbGYuZ2V0QnVsa0NoZWNrYm94ZXNTZWxlY3RvcigpLCAoKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9ICQoc2VsZi5idWxrQWN0aW9uRHJvcERvd25TZWxlY3Rvcik7XG4gICAgICBpZiAoJChzZWxmLmdldEJ1bGtDaGVja2JveGVzQ2hlY2tlZFNlbGVjdG9yKCkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VsZWN0b3IuY2xvc2VzdCgnLm1vZHVsZS10b3AtbWVudS1pdGVtJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3Rvci5jbG9zZXN0KCcubW9kdWxlLXRvcC1tZW51LWl0ZW0nKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGJvZHkub24oJ2NsaWNrJywgc2VsZi5idWxrSXRlbVNlbGVjdG9yLCBmdW5jdGlvbiBpbml0aWFsaXplQm9keUNoYW5nZSgpIHtcbiAgICAgIGlmICgkKHNlbGYuZ2V0QnVsa0NoZWNrYm94ZXNDaGVja2VkU2VsZWN0b3IoKSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICQuZ3Jvd2wud2FybmluZyh7bWVzc2FnZTogd2luZG93LnRyYW5zbGF0ZV9qYXZhc2NyaXB0c1snQnVsayBBY3Rpb24gLSBPbmUgbW9kdWxlIG1pbmltdW0nXX0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYubGFzdEJ1bGtBY3Rpb24gPSAkKHRoaXMpLmRhdGEoJ3JlZicpO1xuICAgICAgY29uc3QgbW9kdWxlc0xpc3RTdHJpbmcgPSBzZWxmLmJ1aWxkQnVsa0FjdGlvbk1vZHVsZUxpc3QoKTtcbiAgICAgIGNvbnN0IGFjdGlvblN0cmluZyA9ICQodGhpcykuZmluZCgnOmNoZWNrZWQnKS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICQoc2VsZi5idWxrQ29uZmlybU1vZGFsTGlzdFNlbGVjdG9yKS5odG1sKG1vZHVsZXNMaXN0U3RyaW5nKTtcbiAgICAgICQoc2VsZi5idWxrQ29uZmlybU1vZGFsQWN0aW9uTmFtZVNlbGVjdG9yKS50ZXh0KGFjdGlvblN0cmluZyk7XG5cbiAgICAgIGlmIChzZWxmLmxhc3RCdWxrQWN0aW9uID09PSAnYnVsay11bmluc3RhbGwnKSB7XG4gICAgICAgICQoc2VsZi5idWxrQWN0aW9uQ2hlY2tib3hTZWxlY3Rvcikuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChzZWxmLmJ1bGtBY3Rpb25DaGVja2JveFNlbGVjdG9yKS5oaWRlKCk7XG4gICAgICB9XG5cbiAgICAgICQoc2VsZi5idWxrQ29uZmlybU1vZGFsU2VsZWN0b3IpLm1vZGFsKCdzaG93Jyk7XG4gICAgfSk7XG5cbiAgICBib2R5Lm9uKCdjbGljaycsIHRoaXMuYnVsa0NvbmZpcm1Nb2RhbEFja0J0blNlbGVjdG9yLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICQoc2VsZi5idWxrQ29uZmlybU1vZGFsU2VsZWN0b3IpLm1vZGFsKCdoaWRlJyk7XG4gICAgICBzZWxmLmRvQnVsa0FjdGlvbihzZWxmLmxhc3RCdWxrQWN0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRCT0V2ZW50UmVnaXN0ZXJpbmcoKSB7XG4gICAgd2luZG93LkJPRXZlbnQub24oJ01vZHVsZSBEaXNhYmxlZCcsIHRoaXMub25Nb2R1bGVEaXNhYmxlZCwgdGhpcyk7XG4gICAgd2luZG93LkJPRXZlbnQub24oJ01vZHVsZSBVbmluc3RhbGxlZCcsIHRoaXMudXBkYXRlVG90YWxSZXN1bHRzLCB0aGlzKTtcbiAgfVxuXG4gIG9uTW9kdWxlRGlzYWJsZWQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgbW9kdWxlSXRlbVNlbGVjdG9yID0gc2VsZi5nZXRNb2R1bGVJdGVtU2VsZWN0b3IoKTtcblxuICAgICQoJy5tb2R1bGVzLWxpc3QnKS5lYWNoKGZ1bmN0aW9uIHNjYW5Nb2R1bGVzTGlzdCgpIHtcbiAgICAgIHNlbGYudXBkYXRlVG90YWxSZXN1bHRzKCk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0UGxhY2Vob2xkZXJNZWNoYW5pc20oKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCQoc2VsZi5wbGFjZWhvbGRlckdsb2JhbFNlbGVjdG9yKS5sZW5ndGgpIHtcbiAgICAgIHNlbGYuYWpheExvYWRQYWdlKCk7XG4gICAgfVxuXG4gICAgLy8gUmV0cnkgbG9hZGluZyBtZWNoYW5pc21cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgc2VsZi5wbGFjZWhvbGRlckZhaWx1cmVSZXRyeUJ0blNlbGVjdG9yLCAoKSA9PiB7XG4gICAgICAkKHNlbGYucGxhY2Vob2xkZXJGYWlsdXJlR2xvYmFsU2VsZWN0b3IpLmZhZGVPdXQoKTtcbiAgICAgICQoc2VsZi5wbGFjZWhvbGRlckdsb2JhbFNlbGVjdG9yKS5mYWRlSW4oKTtcbiAgICAgIHNlbGYuYWpheExvYWRQYWdlKCk7XG4gICAgfSk7XG4gIH1cblxuICBhamF4TG9hZFBhZ2UoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogd2luZG93Lm1vZHVsZVVSTHMuY2F0YWxvZ1JlZnJlc2gsXG4gICAgfSkuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZS5kb21FbGVtZW50cyA9PT0gJ3VuZGVmaW5lZCcpIHJlc3BvbnNlLmRvbUVsZW1lbnRzID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZS5tc2cgPT09ICd1bmRlZmluZWQnKSByZXNwb25zZS5tc2cgPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1swXTtcbiAgICAgICAgY29uc3Qgc3R5bGVzaGVldFJ1bGUgPSAne2Rpc3BsYXk6IG5vbmV9JztcbiAgICAgICAgY29uc3QgbW9kdWxlR2xvYmFsU2VsZWN0b3IgPSAnLm1vZHVsZXMtbGlzdCc7XG4gICAgICAgIGNvbnN0IG1vZHVsZVNvcnRpbmdTZWxlY3RvciA9ICcubW9kdWxlLXNvcnRpbmctbWVudSc7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkU2VsZWN0b3JDb21iaW5hdGlvbiA9IGAke21vZHVsZUdsb2JhbFNlbGVjdG9yfSwke21vZHVsZVNvcnRpbmdTZWxlY3Rvcn1gO1xuXG4gICAgICAgIGlmIChzdHlsZXNoZWV0Lmluc2VydFJ1bGUpIHtcbiAgICAgICAgICBzdHlsZXNoZWV0Lmluc2VydFJ1bGUoXG4gICAgICAgICAgICByZXF1aXJlZFNlbGVjdG9yQ29tYmluYXRpb24gK1xuICAgICAgICAgICAgc3R5bGVzaGVldFJ1bGUsIHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHlsZXNoZWV0LmFkZFJ1bGUpIHtcbiAgICAgICAgICBzdHlsZXNoZWV0LmFkZFJ1bGUoXG4gICAgICAgICAgICByZXF1aXJlZFNlbGVjdG9yQ29tYmluYXRpb24sXG4gICAgICAgICAgICBzdHlsZXNoZWV0UnVsZSxcbiAgICAgICAgICAgIC0xXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoc2VsZi5wbGFjZWhvbGRlckdsb2JhbFNlbGVjdG9yKS5mYWRlT3V0KDgwMCwgKCkgPT4ge1xuICAgICAgICAgICQuZWFjaChyZXNwb25zZS5kb21FbGVtZW50cywgKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAkKGVsZW1lbnQuc2VsZWN0b3IpLmFwcGVuZChlbGVtZW50LmNvbnRlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgICQobW9kdWxlR2xvYmFsU2VsZWN0b3IpLmZhZGVJbig4MDApLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG4gICAgICAgICAgJChtb2R1bGVTb3J0aW5nU2VsZWN0b3IpLmZhZGVJbig4MDApO1xuICAgICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XG4gICAgICAgICAgc2VsZi5pbml0Q3VycmVudERpc3BsYXkoKTtcbiAgICAgICAgICBzZWxmLmZldGNoTW9kdWxlc0xpc3QoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHNlbGYucGxhY2Vob2xkZXJHbG9iYWxTZWxlY3RvcikuZmFkZU91dCg4MDAsICgpID0+IHtcbiAgICAgICAgICAkKHNlbGYucGxhY2Vob2xkZXJGYWlsdXJlTXNnU2VsZWN0b3IpLnRleHQocmVzcG9uc2UubXNnKTtcbiAgICAgICAgICAkKHNlbGYucGxhY2Vob2xkZXJGYWlsdXJlR2xvYmFsU2VsZWN0b3IpLmZhZGVJbig4MDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KS5mYWlsKChyZXNwb25zZSkgPT4ge1xuICAgICAgJChzZWxmLnBsYWNlaG9sZGVyR2xvYmFsU2VsZWN0b3IpLmZhZGVPdXQoODAwLCAoKSA9PiB7XG4gICAgICAgICQoc2VsZi5wbGFjZWhvbGRlckZhaWx1cmVNc2dTZWxlY3RvcikudGV4dChyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgJChzZWxmLnBsYWNlaG9sZGVyRmFpbHVyZUdsb2JhbFNlbGVjdG9yKS5mYWRlSW4oODAwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZmV0Y2hNb2R1bGVzTGlzdCgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBsZXQgY29udGFpbmVyO1xuICAgIGxldCAkdGhpcztcblxuICAgIHNlbGYubW9kdWxlc0xpc3QgPSBbXTtcbiAgICAkKCcubW9kdWxlcy1saXN0JykuZWFjaChmdW5jdGlvbiBwcmVwYXJlQ29udGFpbmVyKCkge1xuICAgICAgY29udGFpbmVyID0gJCh0aGlzKTtcbiAgICAgIGNvbnRhaW5lci5maW5kKCcubW9kdWxlLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uIHByZXBhcmVNb2R1bGVzKCkge1xuICAgICAgICAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIHNlbGYubW9kdWxlc0xpc3QucHVzaCh7XG4gICAgICAgICAgZG9tT2JqZWN0OiAkdGhpcyxcbiAgICAgICAgICBpZDogJHRoaXMuZGF0YSgnaWQnKSxcbiAgICAgICAgICBuYW1lOiAkdGhpcy5kYXRhKCduYW1lJykudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICBzY29yaW5nOiBwYXJzZUZsb2F0KCR0aGlzLmRhdGEoJ3Njb3JpbmcnKSksXG4gICAgICAgICAgbG9nbzogJHRoaXMuZGF0YSgnbG9nbycpLFxuICAgICAgICAgIGF1dGhvcjogJHRoaXMuZGF0YSgnYXV0aG9yJykudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICB2ZXJzaW9uOiAkdGhpcy5kYXRhKCd2ZXJzaW9uJyksXG4gICAgICAgICAgZGVzY3JpcHRpb246ICR0aGlzLmRhdGEoJ2Rlc2NyaXB0aW9uJykudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICB0ZWNoTmFtZTogJHRoaXMuZGF0YSgndGVjaC1uYW1lJykudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICBjaGlsZENhdGVnb3JpZXM6ICR0aGlzLmRhdGEoJ2NoaWxkLWNhdGVnb3JpZXMnKSxcbiAgICAgICAgICBjYXRlZ29yaWVzOiBTdHJpbmcoJHRoaXMuZGF0YSgnY2F0ZWdvcmllcycpKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIHR5cGU6ICR0aGlzLmRhdGEoJ3R5cGUnKSxcbiAgICAgICAgICBwcmljZTogcGFyc2VGbG9hdCgkdGhpcy5kYXRhKCdwcmljZScpKSxcbiAgICAgICAgICBhY3RpdmU6IHBhcnNlSW50KCR0aGlzLmRhdGEoJ2FjdGl2ZScpLCAxMCksXG4gICAgICAgICAgYWNjZXNzOiAkdGhpcy5kYXRhKCdsYXN0LWFjY2VzcycpLFxuICAgICAgICAgIGRpc3BsYXk6ICR0aGlzLmhhc0NsYXNzKCdtb2R1bGUtaXRlbS1saXN0JykgPyBzZWxmLkRJU1BMQVlfTElTVCA6IHNlbGYuRElTUExBWV9HUklELFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlbGYuYWRkb25zQ2FyZEdyaWQgPSAkKHRoaXMuYWRkb25JdGVtR3JpZFNlbGVjdG9yKTtcbiAgICBzZWxmLmFkZG9uc0NhcmRMaXN0ID0gJCh0aGlzLmFkZG9uSXRlbUxpc3RTZWxlY3Rvcik7XG4gICAgc2VsZi51cGRhdGVNb2R1bGVWaXNpYmlsaXR5KCk7XG4gICAgJCgnYm9keScpLnRyaWdnZXIoJ21vZHVsZUNhdGFsb2dMb2FkZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHNvcnRpbmdcbiAgICpcbiAgICovXG4gIHVwZGF0ZU1vZHVsZVNvcnRpbmcoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXNlbGYuY3VycmVudFNvcnRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBNb2R1bGVzIHNvcnRpbmdcbiAgICBsZXQgb3JkZXIgPSAnYXNjJztcbiAgICBsZXQga2V5ID0gc2VsZi5jdXJyZW50U29ydGluZztcbiAgICBjb25zdCBzcGxpdHRlZEtleSA9IGtleS5zcGxpdCgnLScpO1xuICAgIGlmIChzcGxpdHRlZEtleS5sZW5ndGggPiAxKSB7XG4gICAgICBrZXkgPSBzcGxpdHRlZEtleVswXTtcbiAgICAgIGlmIChzcGxpdHRlZEtleVsxXSA9PT0gJ2Rlc2MnKSB7XG4gICAgICAgIG9yZGVyID0gJ2Rlc2MnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRDb21wYXJlID0gKGEsIGIpID0+IHtcbiAgICAgIGxldCBhRGF0YSA9IGFba2V5XTtcbiAgICAgIGxldCBiRGF0YSA9IGJba2V5XTtcbiAgICAgIGlmIChrZXkgPT09ICdhY2Nlc3MnKSB7XG4gICAgICAgIGFEYXRhID0gKG5ldyBEYXRlKGFEYXRhKSkuZ2V0VGltZSgpO1xuICAgICAgICBiRGF0YSA9IChuZXcgRGF0ZShiRGF0YSkpLmdldFRpbWUoKTtcbiAgICAgICAgYURhdGEgPSBpc05hTihhRGF0YSkgPyAwIDogYURhdGE7XG4gICAgICAgIGJEYXRhID0gaXNOYU4oYkRhdGEpID8gMCA6IGJEYXRhO1xuICAgICAgICBpZiAoYURhdGEgPT09IGJEYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIGIubmFtZS5sb2NhbGVDb21wYXJlKGEubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFEYXRhIDwgYkRhdGEpIHJldHVybiAtMTtcbiAgICAgIGlmIChhRGF0YSA+IGJEYXRhKSByZXR1cm4gMTtcblxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIHNlbGYubW9kdWxlc0xpc3Quc29ydChjdXJyZW50Q29tcGFyZSk7XG4gICAgaWYgKG9yZGVyID09PSAnZGVzYycpIHtcbiAgICAgIHNlbGYubW9kdWxlc0xpc3QucmV2ZXJzZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU1vZHVsZUNvbnRhaW5lckRpc3BsYXkoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAkKCcubW9kdWxlLXNob3J0LWxpc3QnKS5lYWNoKGZ1bmN0aW9uIHNldFNob3J0TGlzdFZpc2liaWxpdHkoKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSAkKHRoaXMpO1xuICAgICAgY29uc3QgbmJNb2R1bGVzSW5Db250YWluZXIgPSBjb250YWluZXIuZmluZCgnLm1vZHVsZS1pdGVtJykubGVuZ3RoO1xuICAgICAgaWYgKFxuICAgICAgICAoXG4gICAgICAgICAgc2VsZi5jdXJyZW50UmVmQ2F0ZWdvcnlcbiAgICAgICAgICAmJiBzZWxmLmN1cnJlbnRSZWZDYXRlZ29yeSAhPT0gU3RyaW5nKGNvbnRhaW5lci5maW5kKCcubW9kdWxlcy1saXN0JykuZGF0YSgnbmFtZScpKVxuICAgICAgICApIHx8IChcbiAgICAgICAgICBzZWxmLmN1cnJlbnRSZWZTdGF0dXMgIT09IG51bGxcbiAgICAgICAgICAmJiBuYk1vZHVsZXNJbkNvbnRhaW5lciA9PT0gMFxuICAgICAgICApIHx8IChcbiAgICAgICAgICBuYk1vZHVsZXNJbkNvbnRhaW5lciA9PT0gMFxuICAgICAgICAgICYmIFN0cmluZyhjb250YWluZXIuZmluZCgnLm1vZHVsZXMtbGlzdCcpLmRhdGEoJ25hbWUnKSkgPT09IHNlbGYuQ0FURUdPUllfUkVDRU5UTFlfVVNFRFxuICAgICAgICApIHx8IChcbiAgICAgICAgICBzZWxmLmN1cnJlbnRUYWdzTGlzdC5sZW5ndGggPiAwXG4gICAgICAgICAgJiYgbmJNb2R1bGVzSW5Db250YWluZXIgPT09IDBcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRhaW5lci5oaWRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29udGFpbmVyLnNob3coKTtcbiAgICAgIGlmIChuYk1vZHVsZXNJbkNvbnRhaW5lciA+PSBzZWxmLkRFRkFVTFRfTUFYX1BFUl9DQVRFR09SSUVTKSB7XG4gICAgICAgIGNvbnRhaW5lci5maW5kKGAke3NlbGYuc2VlTW9yZVNlbGVjdG9yfSwgJHtzZWxmLnNlZUxlc3NTZWxlY3Rvcn1gKS5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWluZXIuZmluZChgJHtzZWxmLnNlZU1vcmVTZWxlY3Rvcn0sICR7c2VsZi5zZWVMZXNzU2VsZWN0b3J9YCkuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlTW9kdWxlVmlzaWJpbGl0eSgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHNlbGYudXBkYXRlTW9kdWxlU29ydGluZygpO1xuXG4gICAgJChzZWxmLnJlY2VudGx5VXNlZFNlbGVjdG9yKS5maW5kKCcubW9kdWxlLWl0ZW0nKS5yZW1vdmUoKTtcbiAgICAkKCcubW9kdWxlcy1saXN0JykuZmluZCgnLm1vZHVsZS1pdGVtJykucmVtb3ZlKCk7XG5cbiAgICAvLyBNb2R1bGVzIHZpc2liaWxpdHkgbWFuYWdlbWVudFxuICAgIGxldCBpc1Zpc2libGU7XG4gICAgbGV0IGN1cnJlbnRNb2R1bGU7XG4gICAgbGV0IG1vZHVsZUNhdGVnb3J5O1xuICAgIGxldCB0YWdFeGlzdHM7XG4gICAgbGV0IG5ld1ZhbHVlO1xuXG4gICAgY29uc3QgbW9kdWxlc0xpc3RMZW5ndGggPSBzZWxmLm1vZHVsZXNMaXN0Lmxlbmd0aDtcbiAgICBjb25zdCBjb3VudGVyID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXNMaXN0TGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGN1cnJlbnRNb2R1bGUgPSBzZWxmLm1vZHVsZXNMaXN0W2ldO1xuICAgICAgaWYgKGN1cnJlbnRNb2R1bGUuZGlzcGxheSA9PT0gc2VsZi5jdXJyZW50RGlzcGxheSkge1xuICAgICAgICBpc1Zpc2libGUgPSB0cnVlO1xuXG4gICAgICAgIG1vZHVsZUNhdGVnb3J5ID0gc2VsZi5jdXJyZW50UmVmQ2F0ZWdvcnkgPT09IHNlbGYuQ0FURUdPUllfUkVDRU5UTFlfVVNFRCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5DQVRFR09SWV9SRUNFTlRMWV9VU0VEIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TW9kdWxlLmNhdGVnb3JpZXM7XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHNhbWUgY2F0ZWdvcnlcbiAgICAgICAgaWYgKHNlbGYuY3VycmVudFJlZkNhdGVnb3J5ICE9PSBudWxsKSB7XG4gICAgICAgICAgaXNWaXNpYmxlICY9IG1vZHVsZUNhdGVnb3J5ID09PSBzZWxmLmN1cnJlbnRSZWZDYXRlZ29yeTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciBzYW1lIHN0YXR1c1xuICAgICAgICBpZiAoc2VsZi5jdXJyZW50UmVmU3RhdHVzICE9PSBudWxsKSB7XG4gICAgICAgICAgaXNWaXNpYmxlICY9IGN1cnJlbnRNb2R1bGUuYWN0aXZlID09PSBzZWxmLmN1cnJlbnRSZWZTdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3IgdGFnIGxpc3RcbiAgICAgICAgaWYgKHNlbGYuY3VycmVudFRhZ3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHRhZ0V4aXN0cyA9IGZhbHNlO1xuICAgICAgICAgICQuZWFjaChzZWxmLmN1cnJlbnRUYWdzTGlzdCwgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdGFnRXhpc3RzIHw9IChcbiAgICAgICAgICAgICAgY3VycmVudE1vZHVsZS5uYW1lLmluZGV4T2YobmV3VmFsdWUpICE9PSAtMVxuICAgICAgICAgICAgICB8fCBjdXJyZW50TW9kdWxlLmRlc2NyaXB0aW9uLmluZGV4T2YobmV3VmFsdWUpICE9PSAtMVxuICAgICAgICAgICAgICB8fCBjdXJyZW50TW9kdWxlLmF1dGhvci5pbmRleE9mKG5ld1ZhbHVlKSAhPT0gLTFcbiAgICAgICAgICAgICAgfHwgY3VycmVudE1vZHVsZS50ZWNoTmFtZS5pbmRleE9mKG5ld1ZhbHVlKSAhPT0gLTFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaXNWaXNpYmxlICY9IHRhZ0V4aXN0cztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBsaXN0IGRpc3BsYXkgd2l0aG91dCBzZWFyY2ggd2UgbXVzdCBkaXNwbGF5IG9ubHkgdGhlIGZpcnN0IDUgbW9kdWxlc1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHNlbGYuY3VycmVudERpc3BsYXkgPT09IHNlbGYuRElTUExBWV9MSVNUICYmICFzZWxmLmN1cnJlbnRUYWdzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoc2VsZi5jdXJyZW50Q2F0ZWdvcnlEaXNwbGF5W21vZHVsZUNhdGVnb3J5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRDYXRlZ29yeURpc3BsYXlbbW9kdWxlQ2F0ZWdvcnldID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFjb3VudGVyW21vZHVsZUNhdGVnb3J5XSkge1xuICAgICAgICAgICAgY291bnRlclttb2R1bGVDYXRlZ29yeV0gPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtb2R1bGVDYXRlZ29yeSA9PT0gc2VsZi5DQVRFR09SWV9SRUNFTlRMWV9VU0VEKSB7XG4gICAgICAgICAgICBpZiAoY291bnRlclttb2R1bGVDYXRlZ29yeV0gPj0gc2VsZi5ERUZBVUxUX01BWF9SRUNFTlRMWV9VU0VEKSB7XG4gICAgICAgICAgICAgIGlzVmlzaWJsZSAmPSBzZWxmLmN1cnJlbnRDYXRlZ29yeURpc3BsYXlbbW9kdWxlQ2F0ZWdvcnldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoY291bnRlclttb2R1bGVDYXRlZ29yeV0gPj0gc2VsZi5ERUZBVUxUX01BWF9QRVJfQ0FURUdPUklFUykge1xuICAgICAgICAgICAgaXNWaXNpYmxlICY9IHNlbGYuY3VycmVudENhdGVnb3J5RGlzcGxheVttb2R1bGVDYXRlZ29yeV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY291bnRlclttb2R1bGVDYXRlZ29yeV0gKz0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHZpc2libGUsIGRpc3BsYXkgKFRoeCBjYXB0YWluIG9idmlvdXMpXG4gICAgICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgICBpZiAoc2VsZi5jdXJyZW50UmVmQ2F0ZWdvcnkgPT09IHNlbGYuQ0FURUdPUllfUkVDRU5UTFlfVVNFRCkge1xuICAgICAgICAgICAgJChzZWxmLnJlY2VudGx5VXNlZFNlbGVjdG9yKS5hcHBlbmQoY3VycmVudE1vZHVsZS5kb21PYmplY3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50TW9kdWxlLmNvbnRhaW5lci5hcHBlbmQoY3VycmVudE1vZHVsZS5kb21PYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNlbGYudXBkYXRlTW9kdWxlQ29udGFpbmVyRGlzcGxheSgpO1xuXG4gICAgaWYgKHNlbGYuY3VycmVudFRhZ3NMaXN0Lmxlbmd0aCkge1xuICAgICAgJCgnLm1vZHVsZXMtbGlzdCcpLmFwcGVuZCh0aGlzLmN1cnJlbnREaXNwbGF5ID09PSBzZWxmLkRJU1BMQVlfR1JJRCA/IHRoaXMuYWRkb25zQ2FyZEdyaWQgOiB0aGlzLmFkZG9uc0NhcmRMaXN0KTtcbiAgICB9XG5cbiAgICBzZWxmLnVwZGF0ZVRvdGFsUmVzdWx0cygpO1xuICB9XG5cbiAgaW5pdFBhZ2VDaGFuZ2VQcm90ZWN0aW9uKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG4gICAgICBpZiAoc2VsZi5pc1VwbG9hZFN0YXJ0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuICdJdCBzZWVtcyBzb21lIGNyaXRpY2FsIG9wZXJhdGlvbiBhcmUgcnVubmluZywgYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNoYW5nZSBwYWdlID8gSXQgbWlnaHQgY2F1c2Ugc29tZSB1bmV4ZXBjdGVkIGJlaGF2aW9ycy4nO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBidWlsZEJ1bGtBY3Rpb25Nb2R1bGVMaXN0KCkge1xuICAgIGNvbnN0IGNoZWNrQm94ZXNTZWxlY3RvciA9IHRoaXMuZ2V0QnVsa0NoZWNrYm94ZXNDaGVja2VkU2VsZWN0b3IoKTtcbiAgICBjb25zdCBtb2R1bGVJdGVtU2VsZWN0b3IgPSB0aGlzLmdldE1vZHVsZUl0ZW1TZWxlY3RvcigpO1xuICAgIGxldCBhbHJlYWR5RG9uZUZsYWcgPSAwO1xuICAgIGxldCBodG1sR2VuZXJhdGVkID0gJyc7XG4gICAgbGV0IGN1cnJlbnRFbGVtZW50O1xuXG4gICAgJChjaGVja0JveGVzU2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gcHJlcGFyZUNoZWNrYm94ZXMoKSB7XG4gICAgICBpZiAoYWxyZWFkeURvbmVGbGFnID09PSAxMCkge1xuICAgICAgICAvLyBCcmVhayBlYWNoXG4gICAgICAgIGh0bWxHZW5lcmF0ZWQgKz0gJy0gLi4uJztcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50RWxlbWVudCA9ICQodGhpcykuY2xvc2VzdChtb2R1bGVJdGVtU2VsZWN0b3IpO1xuICAgICAgaHRtbEdlbmVyYXRlZCArPSBgLSAke2N1cnJlbnRFbGVtZW50LmRhdGEoJ25hbWUnKX08YnIvPmA7XG4gICAgICBhbHJlYWR5RG9uZUZsYWcgKz0gMTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaHRtbEdlbmVyYXRlZDtcbiAgfVxuXG4gIGluaXRBZGRvbnNDb25uZWN0KCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gTWFrZSBhZGRvbnMgY29ubmVjdCBtb2RhbCByZWFkeSB0byBiZSBjbGlja2VkXG4gICAgaWYgKCQoc2VsZi5hZGRvbnNDb25uZWN0TW9kYWxCdG5TZWxlY3RvcikuYXR0cignaHJlZicpID09PSAnIycpIHtcbiAgICAgICQoc2VsZi5hZGRvbnNDb25uZWN0TW9kYWxCdG5TZWxlY3RvcikuYXR0cignZGF0YS10b2dnbGUnLCAnbW9kYWwnKTtcbiAgICAgICQoc2VsZi5hZGRvbnNDb25uZWN0TW9kYWxCdG5TZWxlY3RvcikuYXR0cignZGF0YS10YXJnZXQnLCBzZWxmLmFkZG9uc0Nvbm5lY3RNb2RhbFNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBpZiAoJChzZWxmLmFkZG9uc0xvZ291dE1vZGFsQnRuU2VsZWN0b3IpLmF0dHIoJ2hyZWYnKSA9PT0gJyMnKSB7XG4gICAgICAkKHNlbGYuYWRkb25zTG9nb3V0TW9kYWxCdG5TZWxlY3RvcikuYXR0cignZGF0YS10b2dnbGUnLCAnbW9kYWwnKTtcbiAgICAgICQoc2VsZi5hZGRvbnNMb2dvdXRNb2RhbEJ0blNlbGVjdG9yKS5hdHRyKCdkYXRhLXRhcmdldCcsIHNlbGYuYWRkb25zTG9nb3V0TW9kYWxTZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCBzZWxmLmFkZG9uc0Nvbm5lY3RGb3JtLCBmdW5jdGlvbiBpbml0aWFsaXplQm9keVN1Ym1pdChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAkLmFqYXgoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgdXJsOiAkKHRoaXMpLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBkYXRhOiAkKHRoaXMpLnNlcmlhbGl6ZSgpLFxuICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XG4gICAgICAgICAgJChzZWxmLmFkZG9uc0xvZ2luQnV0dG9uU2VsZWN0b3IpLnNob3coKTtcbiAgICAgICAgICAkKCdidXR0b24uYnRuW3R5cGU9XCJzdWJtaXRcIl0nLCBzZWxmLmFkZG9uc0Nvbm5lY3RGb3JtKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSAxKSB7XG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJC5ncm93bC5lcnJvcih7bWVzc2FnZTogcmVzcG9uc2UubWVzc2FnZX0pO1xuICAgICAgICAgICQoc2VsZi5hZGRvbnNMb2dpbkJ1dHRvblNlbGVjdG9yKS5oaWRlKCk7XG4gICAgICAgICAgJCgnYnV0dG9uLmJ0blt0eXBlPVwic3VibWl0XCJdJywgc2VsZi5hZGRvbnNDb25uZWN0Rm9ybSkuZmFkZUluKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdEFkZE1vZHVsZUFjdGlvbigpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBhZGRNb2R1bGVCdXR0b24gPSAkKHNlbGYuYWRkb25zSW1wb3J0TW9kYWxCdG5TZWxlY3Rvcik7XG4gICAgYWRkTW9kdWxlQnV0dG9uLmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ21vZGFsJyk7XG4gICAgYWRkTW9kdWxlQnV0dG9uLmF0dHIoJ2RhdGEtdGFyZ2V0Jywgc2VsZi5kcm9wWm9uZU1vZGFsU2VsZWN0b3IpO1xuICB9XG5cbiAgaW5pdERyb3B6b25lKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgY29uc3QgZHJvcHpvbmUgPSAkKCcuZHJvcHpvbmUnKTtcblxuICAgIC8vIFJlc2V0IG1vZGFsIHdoZW4gY2xpY2sgb24gUmV0cnkgaW4gY2FzZSBvZiBmYWlsdXJlXG4gICAgYm9keS5vbihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLm1vZHVsZUltcG9ydEZhaWx1cmVSZXRyeVNlbGVjdG9yLFxuICAgICAgKCkgPT4ge1xuICAgICAgICAkKGAke3NlbGYubW9kdWxlSW1wb3J0U3VjY2Vzc1NlbGVjdG9yfSwke3NlbGYubW9kdWxlSW1wb3J0RmFpbHVyZVNlbGVjdG9yfSwke3NlbGYubW9kdWxlSW1wb3J0UHJvY2Vzc2luZ1NlbGVjdG9yfWApLmZhZGVPdXQoKCkgPT4ge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEFkZGVkIHRpbWVvdXQgZm9yIGEgYmV0dGVyIHJlbmRlciBvZiBhbmltYXRpb25cbiAgICAgICAgICAgKiBhbmQgYXZvaWQgdG8gaGF2ZSBkaXNwbGF5ZWQgYXQgdGhlIHNhbWUgdGltZVxuICAgICAgICAgICAqL1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJChzZWxmLm1vZHVsZUltcG9ydFN0YXJ0U2VsZWN0b3IpLmZhZGVJbigoKSA9PiB7XG4gICAgICAgICAgICAgICQoc2VsZi5tb2R1bGVJbXBvcnRGYWlsdXJlTXNnRGV0YWlsc1NlbGVjdG9yKS5oaWRlKCk7XG4gICAgICAgICAgICAgICQoc2VsZi5tb2R1bGVJbXBvcnRTdWNjZXNzQ29uZmlndXJlQnRuU2VsZWN0b3IpLmhpZGUoKTtcbiAgICAgICAgICAgICAgZHJvcHpvbmUucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDU1MCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBSZWluaXQgbW9kYWwgb24gZXhpdCwgYnV0IGNoZWNrIGlmIG5vdCBhbHJlYWR5IHByb2Nlc3Npbmcgc29tZXRoaW5nXG4gICAgYm9keS5vbignaGlkZGVuLmJzLm1vZGFsJywgdGhpcy5kcm9wWm9uZU1vZGFsU2VsZWN0b3IsICgpID0+IHtcbiAgICAgICQoYCR7c2VsZi5tb2R1bGVJbXBvcnRTdWNjZXNzU2VsZWN0b3J9LCAke3NlbGYubW9kdWxlSW1wb3J0RmFpbHVyZVNlbGVjdG9yfWApLmhpZGUoKTtcbiAgICAgICQoc2VsZi5tb2R1bGVJbXBvcnRTdGFydFNlbGVjdG9yKS5zaG93KCk7XG5cbiAgICAgIGRyb3B6b25lLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAkKHNlbGYubW9kdWxlSW1wb3J0RmFpbHVyZU1zZ0RldGFpbHNTZWxlY3RvcikuaGlkZSgpO1xuICAgICAgJChzZWxmLm1vZHVsZUltcG9ydFN1Y2Nlc3NDb25maWd1cmVCdG5TZWxlY3RvcikuaGlkZSgpO1xuICAgICAgJChzZWxmLmRyb3Bab25lTW9kYWxGb290ZXJTZWxlY3RvcikuaHRtbCgnJyk7XG4gICAgICAkKHNlbGYubW9kdWxlSW1wb3J0Q29uZmlybVNlbGVjdG9yKS5oaWRlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIHdheSBEcm9wem9uZS5qcyBsaWIgaGFuZGxlIGZpbGUgaW5wdXQgdHJpZ2dlclxuICAgIGJvZHkub24oXG4gICAgICAnY2xpY2snLFxuICAgICAgYC5kcm9wem9uZTpub3QoJHt0aGlzLm1vZHVsZUltcG9ydFNlbGVjdEZpbGVNYW51YWxTZWxlY3Rvcn0sICR7dGhpcy5tb2R1bGVJbXBvcnRTdWNjZXNzQ29uZmlndXJlQnRuU2VsZWN0b3J9KWAsXG4gICAgICAoZXZlbnQsIG1hbnVhbFNlbGVjdCkgPT4ge1xuICAgICAgICAvLyBpZiBjbGljayBjb21lcyBmcm9tIC5tb2R1bGUtaW1wb3J0LXN0YXJ0LXNlbGVjdC1tYW51YWwsIHN0b3AgZXZlcnl0aGluZ1xuICAgICAgICBpZiAodHlwZW9mIG1hbnVhbFNlbGVjdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIGJvZHkub24oJ2NsaWNrJywgdGhpcy5tb2R1bGVJbXBvcnRTZWxlY3RGaWxlTWFudWFsU2VsZWN0b3IsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLyoqXG4gICAgICAgKiBUcmlnZ2VyIGNsaWNrIG9uIGhpZGRlbiBmaWxlIGlucHV0LCBhbmQgcGFzcyBleHRyYSBkYXRhXG4gICAgICAgKiB0byAuZHJvcHpvbmUgY2xpY2sgaGFuZGxlciBmcm8gaXQgdG8gbm90aWNlIGl0IGNvbWVzIGZyb20gaGVyZVxuICAgICAgICovXG4gICAgICAkKCcuZHotaGlkZGVuLWlucHV0JykudHJpZ2dlcignY2xpY2snLCBbJ21hbnVhbF9zZWxlY3QnXSk7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgbW9kYWwgY2xvc3VyZVxuICAgIGJvZHkub24oJ2NsaWNrJywgdGhpcy5tb2R1bGVJbXBvcnRNb2RhbENsb3NlQnRuLCAoKSA9PiB7XG4gICAgICBpZiAoc2VsZi5pc1VwbG9hZFN0YXJ0ZWQgIT09IHRydWUpIHtcbiAgICAgICAgJChzZWxmLmRyb3Bab25lTW9kYWxTZWxlY3RvcikubW9kYWwoJ2hpZGUnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEZpeCBpc3N1ZSBvbiBjbGljayBjb25maWd1cmUgYnV0dG9uXG4gICAgYm9keS5vbignY2xpY2snLCB0aGlzLm1vZHVsZUltcG9ydFN1Y2Nlc3NDb25maWd1cmVCdG5TZWxlY3RvciwgZnVuY3Rpb24gaW5pdGlhbGl6ZUJvZHlDbGlja09uTW9kdWxlSW1wb3J0KGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICB9KTtcblxuICAgIC8vIE9wZW4gZmFpbHVyZSBtZXNzYWdlIGRldGFpbHMgYm94XG4gICAgYm9keS5vbignY2xpY2snLCB0aGlzLm1vZHVsZUltcG9ydEZhaWx1cmVEZXRhaWxzQnRuU2VsZWN0b3IsICgpID0+IHtcbiAgICAgICQoc2VsZi5tb2R1bGVJbXBvcnRGYWlsdXJlTXNnRGV0YWlsc1NlbGVjdG9yKS5zbGlkZURvd24oKTtcbiAgICB9KTtcblxuICAgIC8vIEBzZWU6IGRyb3B6b25lLmpzXG4gICAgY29uc3QgZHJvcHpvbmVPcHRpb25zID0ge1xuICAgICAgdXJsOiB3aW5kb3cubW9kdWxlVVJMcy5tb2R1bGVJbXBvcnQsXG4gICAgICBhY2NlcHRlZEZpbGVzOiAnLnppcCwgLnRhcicsXG4gICAgICAvLyBUaGUgbmFtZSB0aGF0IHdpbGwgYmUgdXNlZCB0byB0cmFuc2ZlciB0aGUgZmlsZVxuICAgICAgcGFyYW1OYW1lOiAnZmlsZV91cGxvYWRlZCcsXG4gICAgICBtYXhGaWxlc2l6ZTogNTAsIC8vIGNhbid0IGJlIGdyZWF0ZXIgdGhhbiA1ME1iIGJlY2F1c2UgaXQncyBhbiBhZGRvbnMgbGltaXRhdGlvblxuICAgICAgdXBsb2FkTXVsdGlwbGU6IGZhbHNlLFxuICAgICAgYWRkUmVtb3ZlTGlua3M6IHRydWUsXG4gICAgICBkaWN0RGVmYXVsdE1lc3NhZ2U6ICcnLFxuICAgICAgaGlkZGVuSW5wdXRDb250YWluZXI6IHNlbGYuZHJvcFpvbmVJbXBvcnRab25lU2VsZWN0b3IsXG4gICAgICAvKipcbiAgICAgICAqIEFkZCB1bmxpbWl0ZWQgdGltZW91dC4gT3RoZXJ3aXNlIGRyb3B6b25lIHRpbWVvdXQgaXMgMzAgc2Vjb25kc1xuICAgICAgICogIGFuZCBpZiBhIG1vZHVsZSBpcyBsb25nIHRvIGluc3RhbGwsIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbnN0YWxsIHRoZSBtb2R1bGUuXG4gICAgICAgKi9cbiAgICAgIHRpbWVvdXQ6IDAsXG4gICAgICBhZGRlZGZpbGU6ICgpID0+IHtcbiAgICAgICAgc2VsZi5hbmltYXRlU3RhcnRVcGxvYWQoKTtcbiAgICAgIH0sXG4gICAgICBwcm9jZXNzaW5nOiAoKSA9PiB7XG4gICAgICAgIC8vIExlYXZlIGl0IGVtcHR5IHNpbmNlIHdlIGRvbid0IHJlcXVpcmUgYW55dGhpbmcgd2hpbGUgcHJvY2Vzc2luZyB1cGxvYWRcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGZpbGUsIG1lc3NhZ2UpID0+IHtcbiAgICAgICAgc2VsZi5kaXNwbGF5T25VcGxvYWRFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKGZpbGUpID0+IHtcbiAgICAgICAgaWYgKGZpbGUuc3RhdHVzICE9PSAnZXJyb3InKSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2VPYmplY3QgPSAkLnBhcnNlSlNPTihmaWxlLnhoci5yZXNwb25zZSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZU9iamVjdC5pc19jb25maWd1cmFibGUgPT09ICd1bmRlZmluZWQnKSByZXNwb25zZU9iamVjdC5pc19jb25maWd1cmFibGUgPSBudWxsO1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2VPYmplY3QubW9kdWxlX25hbWUgPT09ICd1bmRlZmluZWQnKSByZXNwb25zZU9iamVjdC5tb2R1bGVfbmFtZSA9IG51bGw7XG5cbiAgICAgICAgICBzZWxmLmRpc3BsYXlPblVwbG9hZERvbmUocmVzcG9uc2VPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0YXRlIHRoYXQgd2UgaGF2ZSBmaW5pc2ggdGhlIHByb2Nlc3MgdG8gdW5sb2NrIHNvbWUgYWN0aW9uc1xuICAgICAgICBzZWxmLmlzVXBsb2FkU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgfSxcbiAgICB9O1xuXG4gICAgZHJvcHpvbmUuZHJvcHpvbmUoJC5leHRlbmQoZHJvcHpvbmVPcHRpb25zKSk7XG4gIH1cblxuICBhbmltYXRlU3RhcnRVcGxvYWQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgZHJvcHpvbmUgPSAkKCcuZHJvcHpvbmUnKTtcbiAgICAvLyBTdGF0ZSB0aGF0IHdlIHN0YXJ0IG1vZHVsZSB1cGxvYWRcbiAgICBzZWxmLmlzVXBsb2FkU3RhcnRlZCA9IHRydWU7XG4gICAgJChzZWxmLm1vZHVsZUltcG9ydFN0YXJ0U2VsZWN0b3IpLmhpZGUoMCk7XG4gICAgZHJvcHpvbmUuY3NzKCdib3JkZXInLCAnbm9uZScpO1xuICAgICQoc2VsZi5tb2R1bGVJbXBvcnRQcm9jZXNzaW5nU2VsZWN0b3IpLmZhZGVJbigpO1xuICB9XG5cbiAgYW5pbWF0ZUVuZFVwbG9hZChjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICQoc2VsZi5tb2R1bGVJbXBvcnRQcm9jZXNzaW5nU2VsZWN0b3IpLmZpbmlzaCgpLmZhZGVPdXQoY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjYWxsIGZvciB1cGxvYWQgbW9kYWwsIHdoZW4gdGhlIGFqYXggY2FsbCB3ZW50IHdlbGwuXG4gICAqXG4gICAqIEBwYXJhbSBvYmplY3QgcmVzdWx0IGNvbnRhaW5pbmcgdGhlIHNlcnZlciByZXNwb25zZVxuICAgKi9cbiAgZGlzcGxheU9uVXBsb2FkRG9uZShyZXN1bHQpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBzZWxmLmFuaW1hdGVFbmRVcGxvYWQoKCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5pc19jb25maWd1cmFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBjb25maWd1cmVMaW5rID0gd2luZG93Lm1vZHVsZVVSTHMuY29uZmlndXJhdGlvblBhZ2UucmVwbGFjZSgvOm51bWJlcjovLCByZXN1bHQubW9kdWxlX25hbWUpO1xuICAgICAgICAgICQoc2VsZi5tb2R1bGVJbXBvcnRTdWNjZXNzQ29uZmlndXJlQnRuU2VsZWN0b3IpLmF0dHIoJ2hyZWYnLCBjb25maWd1cmVMaW5rKTtcbiAgICAgICAgICAkKHNlbGYubW9kdWxlSW1wb3J0U3VjY2Vzc0NvbmZpZ3VyZUJ0blNlbGVjdG9yKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgJChzZWxmLm1vZHVsZUltcG9ydFN1Y2Nlc3NTZWxlY3RvcikuZmFkZUluKCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXN1bHQuY29uZmlybWF0aW9uX3N1YmplY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuZGlzcGxheVByZXN0YVRydXN0U3RlcChyZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChzZWxmLm1vZHVsZUltcG9ydEZhaWx1cmVNc2dEZXRhaWxzU2VsZWN0b3IpLmh0bWwocmVzdWx0Lm1zZyk7XG4gICAgICAgICQoc2VsZi5tb2R1bGVJbXBvcnRGYWlsdXJlU2VsZWN0b3IpLmZhZGVJbigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjYWxsIGZvciB1cGxvYWQgbW9kYWwsIHdoZW4gdGhlIGFqYXggY2FsbCB3ZW50IHdyb25nIG9yIHdoZW4gdGhlIGFjdGlvbiByZXF1ZXN0ZWQgY291bGQgbm90XG4gICAqIHN1Y2NlZWQgZm9yIHNvbWUgcmVhc29uLlxuICAgKlxuICAgKiBAcGFyYW0gc3RyaW5nIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGUgZXJyb3IuXG4gICAqL1xuICBkaXNwbGF5T25VcGxvYWRFcnJvcihtZXNzYWdlKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5hbmltYXRlRW5kVXBsb2FkKCgpID0+IHtcbiAgICAgICQoc2VsZi5tb2R1bGVJbXBvcnRGYWlsdXJlTXNnRGV0YWlsc1NlbGVjdG9yKS5odG1sKG1lc3NhZ2UpO1xuICAgICAgJChzZWxmLm1vZHVsZUltcG9ydEZhaWx1cmVTZWxlY3RvcikuZmFkZUluKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSWYgUHJlc3RhVHJ1c3QgbmVlZHMgdG8gYmUgY29uZmlybWVkLCB3ZSBhc2sgZm9yIHRoZSBjb25maXJtYXRpb25cbiAgICogbW9kYWwgY29udGVudCBhbmQgd2UgZGlzcGxheSBpdCBpbiB0aGUgY3VycmVudGx5IGRpc3BsYXllZCBvbmUuXG4gICAqIFdlIGFsc28gZ2VuZXJhdGUgdGhlIGFqYXggY2FsbCB0byB0cmlnZ2VyIG9uY2Ugd2UgY29uZmlybSB3ZSB3YW50IHRvIGluc3RhbGxcbiAgICogdGhlIG1vZHVsZS5cbiAgICpcbiAgICogQHBhcmFtIFByZXZpb3VzIHNlcnZlciByZXNwb25zZSByZXN1bHRcbiAgICovXG4gIGRpc3BsYXlQcmVzdGFUcnVzdFN0ZXAocmVzdWx0KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgbW9kYWwgPSBzZWxmLm1vZHVsZUNhcmRDb250cm9sbGVyLl9yZXBsYWNlUHJlc3RhVHJ1c3RQbGFjZWhvbGRlcnMocmVzdWx0KTtcbiAgICBjb25zdCBtb2R1bGVOYW1lID0gcmVzdWx0Lm1vZHVsZS5hdHRyaWJ1dGVzLm5hbWU7XG5cbiAgICAkKHRoaXMubW9kdWxlSW1wb3J0Q29uZmlybVNlbGVjdG9yKS5odG1sKG1vZGFsLmZpbmQoJy5tb2RhbC1ib2R5JykuaHRtbCgpKS5mYWRlSW4oKTtcbiAgICAkKHRoaXMuZHJvcFpvbmVNb2RhbEZvb3RlclNlbGVjdG9yKS5odG1sKG1vZGFsLmZpbmQoJy5tb2RhbC1mb290ZXInKS5odG1sKCkpLmZhZGVJbigpO1xuXG4gICAgJCh0aGlzLmRyb3Bab25lTW9kYWxGb290ZXJTZWxlY3RvcikuZmluZCgnLnBzdHJ1c3QtaW5zdGFsbCcpLm9mZignY2xpY2snKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAkKHNlbGYubW9kdWxlSW1wb3J0Q29uZmlybVNlbGVjdG9yKS5oaWRlKCk7XG4gICAgICAkKHNlbGYuZHJvcFpvbmVNb2RhbEZvb3RlclNlbGVjdG9yKS5odG1sKCcnKTtcbiAgICAgIHNlbGYuYW5pbWF0ZVN0YXJ0VXBsb2FkKCk7XG5cbiAgICAgIC8vIEluc3RhbGwgYWpheCBjYWxsXG4gICAgICAkLnBvc3QocmVzdWx0Lm1vZHVsZS5hdHRyaWJ1dGVzLnVybHMuaW5zdGFsbCwgeydhY3Rpb25QYXJhbXNbY29uZmlybVByZXN0YVRydXN0XSc6ICcxJ30pXG4gICAgICAgLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgIHNlbGYuZGlzcGxheU9uVXBsb2FkRG9uZShkYXRhW21vZHVsZU5hbWVdKTtcbiAgICAgICB9KVxuICAgICAgIC5mYWlsKChkYXRhKSA9PiB7XG4gICAgICAgICBzZWxmLmRpc3BsYXlPblVwbG9hZEVycm9yKGRhdGFbbW9kdWxlTmFtZV0pO1xuICAgICAgIH0pXG4gICAgICAgLmFsd2F5cygoKSA9PiB7XG4gICAgICAgICBzZWxmLmlzVXBsb2FkU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QnVsa0NoZWNrYm94ZXNTZWxlY3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RGlzcGxheSA9PT0gdGhpcy5ESVNQTEFZX0dSSURcbiAgICAgICAgID8gdGhpcy5idWxrQWN0aW9uQ2hlY2tib3hHcmlkU2VsZWN0b3JcbiAgICAgICAgIDogdGhpcy5idWxrQWN0aW9uQ2hlY2tib3hMaXN0U2VsZWN0b3I7XG4gIH1cblxuXG4gIGdldEJ1bGtDaGVja2JveGVzQ2hlY2tlZFNlbGVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnREaXNwbGF5ID09PSB0aGlzLkRJU1BMQVlfR1JJRFxuICAgICAgICAgPyB0aGlzLmNoZWNrZWRCdWxrQWN0aW9uR3JpZFNlbGVjdG9yXG4gICAgICAgICA6IHRoaXMuY2hlY2tlZEJ1bGtBY3Rpb25MaXN0U2VsZWN0b3I7XG4gIH1cblxuICBnZXRNb2R1bGVJdGVtU2VsZWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERpc3BsYXkgPT09IHRoaXMuRElTUExBWV9HUklEXG4gICAgICAgICA/IHRoaXMubW9kdWxlSXRlbUdyaWRTZWxlY3RvclxuICAgICAgICAgOiB0aGlzLm1vZHVsZUl0ZW1MaXN0U2VsZWN0b3I7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtb2R1bGUgbm90aWZpY2F0aW9ucyBjb3VudCBhbmQgZGlzcGxheXMgaXQgYXMgYSBiYWRnZSBvbiB0aGUgbm90aWZpY2F0aW9uIHRhYlxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIGdldE5vdGlmaWNhdGlvbnNDb3VudCgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAkLmdldEpTT04oXG4gICAgICB3aW5kb3cubW9kdWxlVVJMcy5ub3RpZmljYXRpb25zQ291bnQsXG4gICAgICBzZWxmLnVwZGF0ZU5vdGlmaWNhdGlvbnNDb3VudFxuICAgICkuZmFpbCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgcmV0cmlldmUgbW9kdWxlIG5vdGlmaWNhdGlvbnMgY291bnQuJyk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVOb3RpZmljYXRpb25zQ291bnQoYmFkZ2UpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvblRhYnMgPSB7XG4gICAgICB0b19jb25maWd1cmU6ICQoJyNzdWJ0YWItQWRtaW5Nb2R1bGVzTm90aWZpY2F0aW9ucycpLFxuICAgICAgdG9fdXBkYXRlOiAkKCcjc3VidGFiLUFkbWluTW9kdWxlc1VwZGF0ZXMnKSxcbiAgICB9O1xuXG4gICAgZm9yIChsZXQga2V5IGluIGRlc3RpbmF0aW9uVGFicykge1xuICAgICAgaWYgKGRlc3RpbmF0aW9uVGFic1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZGVzdGluYXRpb25UYWJzW2tleV0uZmluZCgnLm5vdGlmaWNhdGlvbi1jb3VudGVyJykudGV4dChiYWRnZVtrZXldKTtcbiAgICB9XG4gIH1cblxuICBpbml0QWRkb25zU2VhcmNoKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICQoJ2JvZHknKS5vbihcbiAgICAgICdjbGljaycsXG4gICAgICBgJHtzZWxmLmFkZG9uSXRlbUdyaWRTZWxlY3Rvcn0sICR7c2VsZi5hZGRvbkl0ZW1MaXN0U2VsZWN0b3J9YCxcbiAgICAgICgpID0+IHtcbiAgICAgICAgbGV0IHNlYXJjaFF1ZXJ5ID0gJyc7XG4gICAgICAgIGlmIChzZWxmLmN1cnJlbnRUYWdzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICBzZWFyY2hRdWVyeSA9IGVuY29kZVVSSUNvbXBvbmVudChzZWxmLmN1cnJlbnRUYWdzTGlzdC5qb2luKCcgJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lm9wZW4oYCR7c2VsZi5iYXNlQWRkb25zVXJsfXNlYXJjaC5waHA/c2VhcmNoX3F1ZXJ5PSR7c2VhcmNoUXVlcnl9YCwgJ19ibGFuaycpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBpbml0Q2F0ZWdvcmllc0dyaWQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgdGhpcy5jYXRlZ29yeUdyaWRJdGVtU2VsZWN0b3IsIGZ1bmN0aW9uIGluaXRpbGFpemVHcmlkQm9keUNsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCByZWZDYXRlZ29yeSA9ICQodGhpcykuZGF0YSgnY2F0ZWdvcnktcmVmJyk7XG5cbiAgICAgIC8vIEluIGNhc2Ugd2UgaGF2ZSBzb21lIHRhZ3Mgd2UgbmVlZCB0byByZXNldCBpdCAhXG4gICAgICBpZiAoc2VsZi5jdXJyZW50VGFnc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgIHNlbGYucHN0YWdnZXJJbnB1dC5yZXNldFRhZ3MoZmFsc2UpO1xuICAgICAgICBzZWxmLmN1cnJlbnRUYWdzTGlzdCA9IFtdO1xuICAgICAgfVxuICAgICAgY29uc3QgbWVudUNhdGVnb3J5VG9UcmlnZ2VyID0gJChgJHtzZWxmLmNhdGVnb3J5SXRlbVNlbGVjdG9yfVtkYXRhLWNhdGVnb3J5LXJlZj1cIiR7cmVmQ2F0ZWdvcnl9XCJdYCk7XG5cbiAgICAgIGlmICghbWVudUNhdGVnb3J5VG9UcmlnZ2VyLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLndhcm4oYE5vIGNhdGVnb3J5IHdpdGggcmVmICgke3JlZkNhdGVnb3J5fSkgc2VlbXMgdG8gZXhpc3QhYCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gSGlkZSBjdXJyZW50IGNhdGVnb3J5IGdyaWRcbiAgICAgIGlmIChzZWxmLmlzQ2F0ZWdvcnlHcmlkRGlzcGxheWVkID09PSB0cnVlKSB7XG4gICAgICAgICQoc2VsZi5jYXRlZ29yeUdyaWRTZWxlY3RvcikuZmFkZU91dCgpO1xuICAgICAgICBzZWxmLmlzQ2F0ZWdvcnlHcmlkRGlzcGxheWVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyaWdnZXIgY2xpY2sgb24gcmlnaHQgY2F0ZWdvcnlcbiAgICAgICQoYCR7c2VsZi5jYXRlZ29yeUl0ZW1TZWxlY3Rvcn1bZGF0YS1jYXRlZ29yeS1yZWY9XCIke3JlZkNhdGVnb3J5fVwiXWApLmNsaWNrKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRDdXJyZW50RGlzcGxheSgpIHtcbiAgICB0aGlzLmN1cnJlbnREaXNwbGF5ID0gdGhpcy5jdXJyZW50RGlzcGxheSA9PT0gJycgPyB0aGlzLkRJU1BMQVlfTElTVCA6IHRoaXMuRElTUExBWV9HUklEO1xuICB9XG5cbiAgaW5pdFNvcnRpbmdEcm9wZG93bigpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHNlbGYuY3VycmVudFNvcnRpbmcgPSAkKHRoaXMubW9kdWxlU29ydGluZ0Ryb3Bkb3duU2VsZWN0b3IpLmZpbmQoJzpjaGVja2VkJykuYXR0cigndmFsdWUnKTtcbiAgICBpZiAoIXNlbGYuY3VycmVudFNvcnRpbmcpIHtcbiAgICAgIHNlbGYuY3VycmVudFNvcnRpbmcgPSAnYWNjZXNzLWRlc2MnO1xuICAgIH1cblxuICAgICQoJ2JvZHknKS5vbihcbiAgICAgICdjaGFuZ2UnLFxuICAgICAgc2VsZi5tb2R1bGVTb3J0aW5nRHJvcGRvd25TZWxlY3RvcixcbiAgICAgIGZ1bmN0aW9uIGluaXRpYWxpemVCb2R5U29ydGluZ0NoYW5nZSgpIHtcbiAgICAgICAgc2VsZi5jdXJyZW50U29ydGluZyA9ICQodGhpcykuZmluZCgnOmNoZWNrZWQnKS5hdHRyKCd2YWx1ZScpO1xuICAgICAgICBzZWxmLnVwZGF0ZU1vZHVsZVZpc2liaWxpdHkoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZG9CdWxrQWN0aW9uKHJlcXVlc3RlZEJ1bGtBY3Rpb24pIHtcbiAgICAvLyBUaGlzIG9iamVjdCBpcyB1c2VkIHRvIGNoZWNrIGlmIHJlcXVlc3RlZCBidWxrQWN0aW9uIGlzIGF2YWlsYWJsZSBhbmQgZ2l2ZSBwcm9wZXJcbiAgICAvLyB1cmwgc2VnbWVudCB0byBiZSBjYWxsZWQgZm9yIGl0XG4gICAgY29uc3QgZm9yY2VEZWxldGlvbiA9ICQoJyNmb3JjZV9idWxrX2RlbGV0aW9uJykucHJvcCgnY2hlY2tlZCcpO1xuXG4gICAgY29uc3QgYnVsa0FjdGlvblRvVXJsID0ge1xuICAgICAgJ2J1bGstdW5pbnN0YWxsJzogJ3VuaW5zdGFsbCcsXG4gICAgICAnYnVsay1kaXNhYmxlJzogJ2Rpc2FibGUnLFxuICAgICAgJ2J1bGstZW5hYmxlJzogJ2VuYWJsZScsXG4gICAgICAnYnVsay1kaXNhYmxlLW1vYmlsZSc6ICdkaXNhYmxlX21vYmlsZScsXG4gICAgICAnYnVsay1lbmFibGUtbW9iaWxlJzogJ2VuYWJsZV9tb2JpbGUnLFxuICAgICAgJ2J1bGstcmVzZXQnOiAncmVzZXQnLFxuICAgIH07XG5cbiAgICAvLyBOb3RlIG5vIGdyaWQgc2VsZWN0b3IgdXNlZCB5ZXQgc2luY2Ugd2UgZG8gbm90IG5lZWRlZCBpdCBhdCBkZXYgdGltZVxuICAgIC8vIE1heWJlIHVzZWZ1bCB0byBpbXBsZW1lbnQgdGhpcyBraW5kIG9mIHRoaW5ncyBsYXRlciBpZiBpbnRlbmRlZCB0b1xuICAgIC8vIHVzZSB0aGlzIGZ1bmN0aW9uYWxpdHkgZWxzZXdoZXJlIGJ1dCBcIm1hbmFnZSBteSBtb2R1bGVcIiBzZWN0aW9uXG4gICAgaWYgKHR5cGVvZiBidWxrQWN0aW9uVG9VcmxbcmVxdWVzdGVkQnVsa0FjdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAkLmdyb3dsLmVycm9yKHttZXNzYWdlOiB3aW5kb3cudHJhbnNsYXRlX2phdmFzY3JpcHRzWydCdWxrIEFjdGlvbiAtIFJlcXVlc3Qgbm90IGZvdW5kJ10ucmVwbGFjZSgnWzFdJywgcmVxdWVzdGVkQnVsa0FjdGlvbil9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBMb29wIG92ZXIgYWxsIGNoZWNrZWQgYnVsayBjaGVja2JveGVzXG4gICAgY29uc3QgYnVsa0FjdGlvblNlbGVjdGVkU2VsZWN0b3IgPSB0aGlzLmdldEJ1bGtDaGVja2JveGVzQ2hlY2tlZFNlbGVjdG9yKCk7XG4gICAgY29uc3QgYnVsa01vZHVsZUFjdGlvbiA9IGJ1bGtBY3Rpb25Ub1VybFtyZXF1ZXN0ZWRCdWxrQWN0aW9uXTtcblxuICAgIGlmICgkKGJ1bGtBY3Rpb25TZWxlY3RlZFNlbGVjdG9yKS5sZW5ndGggPD0gMCkge1xuICAgICAgY29uc29sZS53YXJuKHdpbmRvdy50cmFuc2xhdGVfamF2YXNjcmlwdHNbJ0J1bGsgQWN0aW9uIC0gT25lIG1vZHVsZSBtaW5pbXVtJ10pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IG1vZHVsZXNBY3Rpb25zID0gW107XG4gICAgbGV0IG1vZHVsZVRlY2hOYW1lO1xuICAgICQoYnVsa0FjdGlvblNlbGVjdGVkU2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gYnVsa0FjdGlvblNlbGVjdG9yKCkge1xuICAgICAgbW9kdWxlVGVjaE5hbWUgPSAkKHRoaXMpLmRhdGEoJ3RlY2gtbmFtZScpO1xuICAgICAgbW9kdWxlc0FjdGlvbnMucHVzaCh7XG4gICAgICAgIHRlY2hOYW1lOiBtb2R1bGVUZWNoTmFtZSxcbiAgICAgICAgYWN0aW9uTWVudU9iajogJCh0aGlzKS5jbG9zZXN0KCcubW9kdWxlLWNoZWNrYm94LWJ1bGstbGlzdCcpLm5leHQoKSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wZXJmb3JtTW9kdWxlc0FjdGlvbihtb2R1bGVzQWN0aW9ucywgYnVsa01vZHVsZUFjdGlvbiwgZm9yY2VEZWxldGlvbik7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHBlcmZvcm1Nb2R1bGVzQWN0aW9uKG1vZHVsZXNBY3Rpb25zLCBidWxrTW9kdWxlQWN0aW9uLCBmb3JjZURlbGV0aW9uKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBzZWxmLm1vZHVsZUNhcmRDb250cm9sbGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vRmlyc3QgbGV0J3MgZmlsdGVyIG1vZHVsZXMgdGhhdCBjYW4ndCBwZXJmb3JtIHRoaXMgYWN0aW9uXG4gICAgbGV0IGFjdGlvbk1lbnVMaW5rcyA9IGZpbHRlckFsbG93ZWRBY3Rpb25zKG1vZHVsZXNBY3Rpb25zKTtcbiAgICBpZiAoIWFjdGlvbk1lbnVMaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbW9kdWxlc1JlcXVlc3RlZENvdW50ZG93biA9IGFjdGlvbk1lbnVMaW5rcy5sZW5ndGggLSAxO1xuICAgIGxldCBzcGlubmVyT2JqID0gJChcIjxidXR0b24gY2xhc3M9XFxcImJ0bi1wcmltYXJ5LXJldmVyc2Ugb25jbGljayB1bmJpbmQgc3Bpbm5lciBcXFwiPjwvYnV0dG9uPlwiKTtcbiAgICBpZiAoYWN0aW9uTWVudUxpbmtzLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vTG9vcCB0aHJvdWdoIGFsbCB0aGUgbW9kdWxlcyBleGNlcHQgdGhlIGxhc3Qgb25lIHdoaWNoIHdhaXRzIGZvciBvdGhlclxuICAgICAgLy9yZXF1ZXN0cyBhbmQgdGhlbiBjYWxsIGl0cyByZXF1ZXN0IHdpdGggY2FjaGUgY2xlYXIgZW5hYmxlZFxuICAgICAgJC5lYWNoKGFjdGlvbk1lbnVMaW5rcywgZnVuY3Rpb24gYnVsa01vZHVsZXNMb29wKGluZGV4LCBhY3Rpb25NZW51TGluaykge1xuICAgICAgICBpZiAoaW5kZXggPj0gYWN0aW9uTWVudUxpbmtzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdE1vZHVsZUFjdGlvbihhY3Rpb25NZW51TGluaywgdHJ1ZSwgY291bnRkb3duTW9kdWxlc1JlcXVlc3QpO1xuICAgICAgfSk7XG4gICAgICAvL0Rpc3BsYXkgYSBzcGlubmVyIGZvciB0aGUgbGFzdCBtb2R1bGVcbiAgICAgIGNvbnN0IGxhc3RNZW51TGluayA9IGFjdGlvbk1lbnVMaW5rc1thY3Rpb25NZW51TGlua3MubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBhY3Rpb25NZW51T2JqID0gbGFzdE1lbnVMaW5rLmNsb3Nlc3Qoc2VsZi5tb2R1bGVDYXJkQ29udHJvbGxlci5tb2R1bGVJdGVtQWN0aW9uc1NlbGVjdG9yKTtcbiAgICAgIGFjdGlvbk1lbnVPYmouaGlkZSgpO1xuICAgICAgYWN0aW9uTWVudU9iai5hZnRlcihzcGlubmVyT2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdE1vZHVsZUFjdGlvbihhY3Rpb25NZW51TGlua3NbMF0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3RNb2R1bGVBY3Rpb24oYWN0aW9uTWVudUxpbmssIGRpc2FibGVDYWNoZUNsZWFyLCByZXF1ZXN0RW5kQ2FsbGJhY2spIHtcbiAgICAgIHNlbGYubW9kdWxlQ2FyZENvbnRyb2xsZXIuX3JlcXVlc3RUb0NvbnRyb2xsZXIoXG4gICAgICAgIGJ1bGtNb2R1bGVBY3Rpb24sXG4gICAgICAgIGFjdGlvbk1lbnVMaW5rLFxuICAgICAgICBmb3JjZURlbGV0aW9uLFxuICAgICAgICBkaXNhYmxlQ2FjaGVDbGVhcixcbiAgICAgICAgcmVxdWVzdEVuZENhbGxiYWNrXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvdW50ZG93bk1vZHVsZXNSZXF1ZXN0KCkge1xuICAgICAgbW9kdWxlc1JlcXVlc3RlZENvdW50ZG93bi0tO1xuICAgICAgLy9Ob3cgdGhhdCBhbGwgb3RoZXIgbW9kdWxlcyBoYXZlIHBlcmZvcm1lZCB0aGVpciBhY3Rpb24gV0lUSE9VVCBjYWNoZSBjbGVhciwgd2VcbiAgICAgIC8vY2FuIHJlcXVlc3QgdGhlIGxhc3QgbW9kdWxlIHJlcXVlc3QgV0lUSCBjYWNoZSBjbGVhclxuICAgICAgaWYgKG1vZHVsZXNSZXF1ZXN0ZWRDb3VudGRvd24gPD0gMCkge1xuICAgICAgICBpZiAoc3Bpbm5lck9iaikge1xuICAgICAgICAgIHNwaW5uZXJPYmoucmVtb3ZlKCk7XG4gICAgICAgICAgc3Bpbm5lck9iaiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXN0TWVudUxpbmsgPSBhY3Rpb25NZW51TGlua3NbYWN0aW9uTWVudUxpbmtzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBhY3Rpb25NZW51T2JqID0gbGFzdE1lbnVMaW5rLmNsb3Nlc3Qoc2VsZi5tb2R1bGVDYXJkQ29udHJvbGxlci5tb2R1bGVJdGVtQWN0aW9uc1NlbGVjdG9yKTtcbiAgICAgICAgYWN0aW9uTWVudU9iai5mYWRlSW4oKTtcbiAgICAgICAgcmVxdWVzdE1vZHVsZUFjdGlvbihsYXN0TWVudUxpbmspO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbHRlckFsbG93ZWRBY3Rpb25zKG1vZHVsZXNBY3Rpb25zKSB7XG4gICAgICBsZXQgYWN0aW9uTWVudUxpbmtzID0gW107XG4gICAgICBsZXQgYWN0aW9uTWVudUxpbms7XG4gICAgICAkLmVhY2gobW9kdWxlc0FjdGlvbnMsIGZ1bmN0aW9uIGZpbHRlckFsbG93ZWRNb2R1bGVzKGluZGV4LCBtb2R1bGVEYXRhKSB7XG4gICAgICAgIGFjdGlvbk1lbnVMaW5rID0gJChcbiAgICAgICAgICBzZWxmLm1vZHVsZUNhcmRDb250cm9sbGVyLm1vZHVsZUFjdGlvbk1lbnVMaW5rU2VsZWN0b3IgKyBidWxrTW9kdWxlQWN0aW9uLFxuICAgICAgICAgIG1vZHVsZURhdGEuYWN0aW9uTWVudU9ialxuICAgICAgICApO1xuICAgICAgICBpZiAoYWN0aW9uTWVudUxpbmsubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGFjdGlvbk1lbnVMaW5rcy5wdXNoKGFjdGlvbk1lbnVMaW5rKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkLmdyb3dsLmVycm9yKHttZXNzYWdlOiB3aW5kb3cudHJhbnNsYXRlX2phdmFzY3JpcHRzWydCdWxrIEFjdGlvbiAtIFJlcXVlc3Qgbm90IGF2YWlsYWJsZSBmb3IgbW9kdWxlJ11cbiAgICAgICAgICAgICAgLnJlcGxhY2UoJ1sxXScsIGJ1bGtNb2R1bGVBY3Rpb24pXG4gICAgICAgICAgICAgIC5yZXBsYWNlKCdbMl0nLCBtb2R1bGVEYXRhLnRlY2hOYW1lKX0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGFjdGlvbk1lbnVMaW5rcztcbiAgICB9XG4gIH1cblxuICBpbml0QWN0aW9uQnV0dG9ucygpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAkKCdib2R5Jykub24oXG4gICAgICAnY2xpY2snLFxuICAgICAgc2VsZi5tb2R1bGVJbnN0YWxsQnRuU2VsZWN0b3IsXG4gICAgICBmdW5jdGlvbiBpbml0aWFsaXplQWN0aW9uQnV0dG9uc0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgY29uc3QgJG5leHQgPSAkKCR0aGlzLm5leHQoKSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJHRoaXMuaGlkZSgpO1xuICAgICAgICAkbmV4dC5zaG93KCk7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB1cmw6ICR0aGlzLmRhdGEoJ3VybCcpLFxuICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIH0pLmRvbmUoKCkgPT4ge1xuICAgICAgICAgICRuZXh0LmZhZGVPdXQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIFwiVXBncmFkZSBBbGxcIiBidXR0b24gaGFuZGxlclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBzZWxmLnVwZ3JhZGVBbGxTb3VyY2UsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCQoc2VsZi51cGdyYWRlQWxsVGFyZ2V0cykubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgY29uc29sZS53YXJuKHdpbmRvdy50cmFuc2xhdGVfamF2YXNjcmlwdHNbJ1VwZ3JhZGUgQWxsIEFjdGlvbiAtIE9uZSBtb2R1bGUgbWluaW11bSddKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtb2R1bGVzQWN0aW9ucyA9IFtdO1xuICAgICAgbGV0IG1vZHVsZVRlY2hOYW1lO1xuICAgICAgJChzZWxmLnVwZ3JhZGVBbGxUYXJnZXRzKS5lYWNoKGZ1bmN0aW9uIGJ1bGtBY3Rpb25TZWxlY3RvcigpIHtcbiAgICAgICAgY29uc3QgbW9kdWxlSXRlbUxpc3QgPSAkKHRoaXMpLmNsb3Nlc3QoJy5tb2R1bGUtaXRlbS1saXN0Jyk7XG4gICAgICAgIG1vZHVsZVRlY2hOYW1lID0gbW9kdWxlSXRlbUxpc3QuZGF0YSgndGVjaC1uYW1lJyk7XG4gICAgICAgIG1vZHVsZXNBY3Rpb25zLnB1c2goe1xuICAgICAgICAgIHRlY2hOYW1lOiBtb2R1bGVUZWNoTmFtZSxcbiAgICAgICAgICBhY3Rpb25NZW51T2JqOiAkKCcubW9kdWxlLWFjdGlvbnMnLCBtb2R1bGVJdGVtTGlzdCksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucGVyZm9ybU1vZHVsZXNBY3Rpb24obW9kdWxlc0FjdGlvbnMsICd1cGdyYWRlJyk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdENhdGVnb3J5U2VsZWN0KCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgYm9keS5vbihcbiAgICAgICdjbGljaycsXG4gICAgICBzZWxmLmNhdGVnb3J5SXRlbVNlbGVjdG9yLFxuICAgICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNhdGVnb3J5U2VsZWN0Q2xpY2soKSB7XG4gICAgICAgIC8vIEdldCBkYXRhIGZyb20gbGkgRE9NIGlucHV0XG4gICAgICAgIHNlbGYuY3VycmVudFJlZkNhdGVnb3J5ID0gJCh0aGlzKS5kYXRhKCdjYXRlZ29yeS1yZWYnKTtcbiAgICAgICAgc2VsZi5jdXJyZW50UmVmQ2F0ZWdvcnkgPSBzZWxmLmN1cnJlbnRSZWZDYXRlZ29yeSA/IFN0cmluZyhzZWxmLmN1cnJlbnRSZWZDYXRlZ29yeSkudG9Mb3dlckNhc2UoKSA6IG51bGw7XG4gICAgICAgIC8vIENoYW5nZSBkcm9wZG93biBsYWJlbCB0byBzZXQgaXQgdG8gdGhlIGN1cnJlbnQgY2F0ZWdvcnkncyBkaXNwbGF5bmFtZVxuICAgICAgICAkKHNlbGYuY2F0ZWdvcnlTZWxlY3RvckxhYmVsU2VsZWN0b3IpLnRleHQoJCh0aGlzKS5kYXRhKCdjYXRlZ29yeS1kaXNwbGF5LW5hbWUnKSk7XG4gICAgICAgICQoc2VsZi5jYXRlZ29yeVJlc2V0QnRuU2VsZWN0b3IpLnNob3coKTtcbiAgICAgICAgc2VsZi51cGRhdGVNb2R1bGVWaXNpYmlsaXR5KCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIGJvZHkub24oXG4gICAgICAnY2xpY2snLFxuICAgICAgc2VsZi5jYXRlZ29yeVJlc2V0QnRuU2VsZWN0b3IsXG4gICAgICBmdW5jdGlvbiBpbml0aWFsaXplQ2F0ZWdvcnlSZXNldEJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBjb25zdCByYXdUZXh0ID0gJChzZWxmLmNhdGVnb3J5U2VsZWN0b3IpLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScpO1xuICAgICAgICBjb25zdCB1cHBlckZpcnN0TGV0dGVyID0gcmF3VGV4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlZEZpcnN0TGV0dGVyID0gcmF3VGV4dC5zbGljZSgxKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUZXh0ID0gdXBwZXJGaXJzdExldHRlciArIHJlbW92ZWRGaXJzdExldHRlcjtcblxuICAgICAgICAkKHNlbGYuY2F0ZWdvcnlTZWxlY3RvckxhYmVsU2VsZWN0b3IpLnRleHQob3JpZ2luYWxUZXh0KTtcbiAgICAgICAgJCh0aGlzKS5oaWRlKCk7XG4gICAgICAgIHNlbGYuY3VycmVudFJlZkNhdGVnb3J5ID0gbnVsbDtcbiAgICAgICAgc2VsZi51cGRhdGVNb2R1bGVWaXNpYmlsaXR5KCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGluaXRTZWFyY2hCbG9jaygpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBzZWxmLnBzdGFnZ2VySW5wdXQgPSAkKCcjbW9kdWxlLXNlYXJjaC1iYXInKS5wc3RhZ2dlcih7XG4gICAgICBvblRhZ3NDaGFuZ2VkOiAodGFnTGlzdCkgPT4ge1xuICAgICAgICBzZWxmLmN1cnJlbnRUYWdzTGlzdCA9IHRhZ0xpc3Q7XG4gICAgICAgIHNlbGYudXBkYXRlTW9kdWxlVmlzaWJpbGl0eSgpO1xuICAgICAgfSxcbiAgICAgIG9uUmVzZXRUYWdzOiAoKSA9PiB7XG4gICAgICAgIHNlbGYuY3VycmVudFRhZ3NMaXN0ID0gW107XG4gICAgICAgIHNlbGYudXBkYXRlTW9kdWxlVmlzaWJpbGl0eSgpO1xuICAgICAgfSxcbiAgICAgIGlucHV0UGxhY2Vob2xkZXI6IHdpbmRvdy50cmFuc2xhdGVfamF2YXNjcmlwdHNbJ1NlYXJjaCAtIHBsYWNlaG9sZGVyJ10sXG4gICAgICBjbG9zaW5nQ3Jvc3M6IHRydWUsXG4gICAgICBjb250ZXh0OiBzZWxmLFxuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcubW9kdWxlLWFkZG9ucy1zZWFyY2gtbGluaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgd2luZG93Lm9wZW4oJCh0aGlzKS5hdHRyKCdocmVmJyksICdfYmxhbmsnKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGRpc3BsYXkgc3dpdGNoaW5nIGJldHdlZW4gTGlzdCBvciBHcmlkXG4gICAqL1xuICBpbml0U29ydGluZ0Rpc3BsYXlTd2l0Y2goKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAkKCdib2R5Jykub24oXG4gICAgICAnY2xpY2snLFxuICAgICAgJy5tb2R1bGUtc29ydC1zd2l0Y2gnLFxuICAgICAgZnVuY3Rpb24gc3dpdGNoU29ydCgpIHtcbiAgICAgICAgY29uc3Qgc3dpdGNoVG8gPSAkKHRoaXMpLmRhdGEoJ3N3aXRjaCcpO1xuICAgICAgICBjb25zdCBpc0FscmVhZHlEaXNwbGF5ZWQgPSAkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUtZGlzcGxheScpO1xuICAgICAgICBpZiAodHlwZW9mIHN3aXRjaFRvICE9PSAndW5kZWZpbmVkJyAmJiBpc0FscmVhZHlEaXNwbGF5ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgc2VsZi5zd2l0Y2hTb3J0aW5nRGlzcGxheVRvKHN3aXRjaFRvKTtcbiAgICAgICAgICBzZWxmLmN1cnJlbnREaXNwbGF5ID0gc3dpdGNoVG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc3dpdGNoU29ydGluZ0Rpc3BsYXlUbyhzd2l0Y2hUbykge1xuICAgIGlmIChzd2l0Y2hUbyAhPT0gdGhpcy5ESVNQTEFZX0dSSUQgJiYgc3dpdGNoVG8gIT09IHRoaXMuRElTUExBWV9MSVNUKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBDYW4ndCBzd2l0Y2ggdG8gdW5kZWZpbmVkIGRpc3BsYXkgcHJvcGVydHkgXCIke3N3aXRjaFRvfVwiYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJCgnLm1vZHVsZS1zb3J0LXN3aXRjaCcpLnJlbW92ZUNsYXNzKCdtb2R1bGUtc29ydC1hY3RpdmUnKTtcbiAgICAkKGAjbW9kdWxlLXNvcnQtJHtzd2l0Y2hUb31gKS5hZGRDbGFzcygnbW9kdWxlLXNvcnQtYWN0aXZlJyk7XG4gICAgdGhpcy5jdXJyZW50RGlzcGxheSA9IHN3aXRjaFRvO1xuICAgIHRoaXMudXBkYXRlTW9kdWxlVmlzaWJpbGl0eSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZVNlZU1vcmUoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAkKGAke3NlbGYubW9kdWxlU2hvcnRMaXN0fSAke3NlbGYuc2VlTW9yZVNlbGVjdG9yfWApLm9uKCdjbGljaycsIGZ1bmN0aW9uIHNlZU1vcmUoKSB7XG4gICAgICBzZWxmLmN1cnJlbnRDYXRlZ29yeURpc3BsYXlbJCh0aGlzKS5kYXRhKCdjYXRlZ29yeScpXSA9IHRydWU7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgICAgICQodGhpcykuY2xvc2VzdChzZWxmLm1vZHVsZVNob3J0TGlzdCkuZmluZChzZWxmLnNlZUxlc3NTZWxlY3RvcikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgICAgc2VsZi51cGRhdGVNb2R1bGVWaXNpYmlsaXR5KCk7XG4gICAgfSk7XG5cbiAgICAkKGAke3NlbGYubW9kdWxlU2hvcnRMaXN0fSAke3NlbGYuc2VlTGVzc1NlbGVjdG9yfWApLm9uKCdjbGljaycsIGZ1bmN0aW9uIHNlZU1vcmUoKSB7XG4gICAgICBzZWxmLmN1cnJlbnRDYXRlZ29yeURpc3BsYXlbJCh0aGlzKS5kYXRhKCdjYXRlZ29yeScpXSA9IGZhbHNlO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZC1ub25lJyk7XG4gICAgICAkKHRoaXMpLmNsb3Nlc3Qoc2VsZi5tb2R1bGVTaG9ydExpc3QpLmZpbmQoc2VsZi5zZWVNb3JlU2VsZWN0b3IpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgICAgIHNlbGYudXBkYXRlTW9kdWxlVmlzaWJpbGl0eSgpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVG90YWxSZXN1bHRzKCkge1xuICAgIGNvbnN0IHJlcGxhY2VGaXJzdFdvcmRCeSA9IChlbGVtZW50LCB2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgZXhwbG9kZWRUZXh0ID0gZWxlbWVudC50ZXh0KCkuc3BsaXQoJyAnKTtcbiAgICAgIGV4cGxvZGVkVGV4dFswXSA9IHZhbHVlO1xuICAgICAgZWxlbWVudC50ZXh0KGV4cGxvZGVkVGV4dC5qb2luKCcgJykpO1xuICAgIH07XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgc29tZSBzaG9ydGxpc3Q6IGVhY2ggc2hvcnRsaXN0IGNvdW50IHRoZSBtb2R1bGVzIG9uIHRoZSBuZXh0IGNvbnRhaW5lci5cbiAgICBjb25zdCAkc2hvcnRMaXN0cyA9ICQoJy5tb2R1bGUtc2hvcnQtbGlzdCcpO1xuICAgIGlmICgkc2hvcnRMaXN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAkc2hvcnRMaXN0cy5lYWNoKGZ1bmN0aW9uIHNob3J0TGlzdHMoKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgcmVwbGFjZUZpcnN0V29yZEJ5KFxuICAgICAgICAgICR0aGlzLmZpbmQoJy5tb2R1bGUtc2VhcmNoLXJlc3VsdC13b3JkaW5nJyksXG4gICAgICAgICAgJHRoaXMubmV4dCgnLm1vZHVsZXMtbGlzdCcpLmZpbmQoJy5tb2R1bGUtaXRlbScpLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHNob3J0bGlzdDogdGhlIHdvcmRpbmcgZGlyZWN0bHkgdXBkYXRlIGZyb20gdGhlIG9ubHkgbW9kdWxlIGNvbnRhaW5lci5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbW9kdWxlc0NvdW50ID0gJCgnLm1vZHVsZXMtbGlzdCcpLmZpbmQoJy5tb2R1bGUtaXRlbScpLmxlbmd0aDtcbiAgICAgIHJlcGxhY2VGaXJzdFdvcmRCeSgkKCcubW9kdWxlLXNlYXJjaC1yZXN1bHQtd29yZGluZycpLCBtb2R1bGVzQ291bnQpO1xuXG4gICAgICBjb25zdCBzZWxlY3RvclRvVG9nZ2xlID0gKHNlbGYuY3VycmVudERpc3BsYXkgPT09IHNlbGYuRElTUExBWV9MSVNUKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRvbkl0ZW1MaXN0U2VsZWN0b3IgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkb25JdGVtR3JpZFNlbGVjdG9yO1xuICAgICAgJChzZWxlY3RvclRvVG9nZ2xlKS50b2dnbGUobW9kdWxlc0NvdW50ICE9PSAodGhpcy5tb2R1bGVzTGlzdC5sZW5ndGggLyAyKSk7XG5cbiAgICAgIGlmIChtb2R1bGVzQ291bnQgPT09IDApIHtcbiAgICAgICAgJCgnLm1vZHVsZS1hZGRvbnMtc2VhcmNoLWxpbmsnKS5hdHRyKFxuICAgICAgICAgICdocmVmJyxcbiAgICAgICAgICBgJHt0aGlzLmJhc2VBZGRvbnNVcmx9c2VhcmNoLnBocD9zZWFyY2hfcXVlcnk9JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy5jdXJyZW50VGFnc0xpc3Quam9pbignICcpKX1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluTW9kdWxlQ29udHJvbGxlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BhZ2VzL21vZHVsZS9jb250cm9sbGVyLmpzIiwiLyoqXG4gKiAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKlxuICogTk9USUNFIE9GIExJQ0VOU0VcbiAqXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIHN1YmplY3QgdG8gdGhlIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIHRoYXQgaXMgYnVuZGxlZCB3aXRoIHRoaXMgcGFja2FnZSBpbiB0aGUgZmlsZSBMSUNFTlNFLnR4dC5cbiAqIEl0IGlzIGFsc28gYXZhaWxhYmxlIHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViIGF0IHRoaXMgVVJMOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wXG4gKiBJZiB5b3UgZGlkIG5vdCByZWNlaXZlIGEgY29weSBvZiB0aGUgbGljZW5zZSBhbmQgYXJlIHVuYWJsZSB0b1xuICogb2J0YWluIGl0IHRocm91Z2ggdGhlIHdvcmxkLXdpZGUtd2ViLCBwbGVhc2Ugc2VuZCBhbiBlbWFpbFxuICogdG8gbGljZW5zZUBwcmVzdGFzaG9wLmNvbSBzbyB3ZSBjYW4gc2VuZCB5b3UgYSBjb3B5IGltbWVkaWF0ZWx5LlxuICpcbiAqIERJU0NMQUlNRVJcbiAqXG4gKiBEbyBub3QgZWRpdCBvciBhZGQgdG8gdGhpcyBmaWxlIGlmIHlvdSB3aXNoIHRvIHVwZ3JhZGUgUHJlc3RhU2hvcCB0byBuZXdlclxuICogdmVyc2lvbnMgaW4gdGhlIGZ1dHVyZS4gSWYgeW91IHdpc2ggdG8gY3VzdG9taXplIFByZXN0YVNob3AgZm9yIHlvdXJcbiAqIG5lZWRzIHBsZWFzZSByZWZlciB0byBodHRwczovL3d3dy5wcmVzdGFzaG9wLmNvbSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAYXV0aG9yICAgIFByZXN0YVNob3AgU0EgPGNvbnRhY3RAcHJlc3Rhc2hvcC5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqIEBsaWNlbnNlICAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9PU0wtMy4wIE9wZW4gU29mdHdhcmUgTGljZW5zZSAoT1NMIDMuMClcbiAqIEludGVybmF0aW9uYWwgUmVnaXN0ZXJlZCBUcmFkZW1hcmsgJiBQcm9wZXJ0eSBvZiBQcmVzdGFTaG9wIFNBXG4gKi9cblxuY29uc3QgJCA9IHdpbmRvdy4kO1xuXG4vKipcbiAqIE1vZHVsZSBBZG1pbiBQYWdlIExvYWRlci5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jbGFzcyBNb2R1bGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBNb2R1bGVMb2FkZXIuaGFuZGxlSW1wb3J0KCk7XG4gICAgTW9kdWxlTG9hZGVyLmhhbmRsZUV2ZW50cygpO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZUltcG9ydCgpIHtcbiAgICBjb25zdCBtb2R1bGVJbXBvcnQgPSAkKCcjbW9kdWxlLWltcG9ydCcpO1xuICAgIG1vZHVsZUltcG9ydC5jbGljaygoKSA9PiB7XG4gICAgICBtb2R1bGVJbXBvcnQuYWRkQ2xhc3MoJ29uY2xpY2snLCAyNTAsIHZhbGlkYXRlKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIG1vZHVsZUltcG9ydC5yZW1vdmVDbGFzcygnb25jbGljaycpO1xuICAgICAgICAgIG1vZHVsZUltcG9ydC5hZGRDbGFzcygndmFsaWRhdGUnLCA0NTAsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgMjI1MFxuICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbW9kdWxlSW1wb3J0LnJlbW92ZUNsYXNzKCd2YWxpZGF0ZScpO1xuICAgICAgICB9LFxuICAgICAgICAxMjUwXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVFdmVudHMoKSB7XG4gICAgJCgnYm9keScpLm9uKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgICdhLm1vZHVsZS1yZWFkLW1vcmUtZ3JpZC1idG4sIGEubW9kdWxlLXJlYWQtbW9yZS1saXN0LWJ0bicsXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbW9kdWxlUG9wcGluID0gJChldmVudC50YXJnZXQpLmRhdGEoJ3RhcmdldCcpO1xuXG4gICAgICAgICQuZ2V0KGV2ZW50LnRhcmdldC5ocmVmLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICQobW9kdWxlUG9wcGluKS5odG1sKGRhdGEpO1xuICAgICAgICAgICQobW9kdWxlUG9wcGluKS5tb2RhbCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZHVsZUxvYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BhZ2VzL21vZHVsZS9sb2FkZXIuanMiLCIvKipcbiAqIDIwMDctMjAxOSBQcmVzdGFTaG9wIFNBIGFuZCBDb250cmlidXRvcnNcbiAqXG4gKiBOT1RJQ0UgT0YgTElDRU5TRVxuICpcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgc3ViamVjdCB0byB0aGUgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogdGhhdCBpcyBidW5kbGVkIHdpdGggdGhpcyBwYWNrYWdlIGluIHRoZSBmaWxlIExJQ0VOU0UudHh0LlxuICogSXQgaXMgYWxzbyBhdmFpbGFibGUgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIgYXQgdGhpcyBVUkw6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjBcbiAqIElmIHlvdSBkaWQgbm90IHJlY2VpdmUgYSBjb3B5IG9mIHRoZSBsaWNlbnNlIGFuZCBhcmUgdW5hYmxlIHRvXG4gKiBvYnRhaW4gaXQgdGhyb3VnaCB0aGUgd29ybGQtd2lkZS13ZWIsIHBsZWFzZSBzZW5kIGFuIGVtYWlsXG4gKiB0byBsaWNlbnNlQHByZXN0YXNob3AuY29tIHNvIHdlIGNhbiBzZW5kIHlvdSBhIGNvcHkgaW1tZWRpYXRlbHkuXG4gKlxuICogRElTQ0xBSU1FUlxuICpcbiAqIERvIG5vdCBlZGl0IG9yIGFkZCB0byB0aGlzIGZpbGUgaWYgeW91IHdpc2ggdG8gdXBncmFkZSBQcmVzdGFTaG9wIHRvIG5ld2VyXG4gKiB2ZXJzaW9ucyBpbiB0aGUgZnV0dXJlLiBJZiB5b3Ugd2lzaCB0byBjdXN0b21pemUgUHJlc3RhU2hvcCBmb3IgeW91clxuICogbmVlZHMgcGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vd3d3LnByZXN0YXNob3AuY29tIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBhdXRob3IgICAgUHJlc3RhU2hvcCBTQSA8Y29udGFjdEBwcmVzdGFzaG9wLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICogQGxpY2Vuc2UgICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL09TTC0zLjAgT3BlbiBTb2Z0d2FyZSBMaWNlbnNlIChPU0wgMy4wKVxuICogSW50ZXJuYXRpb25hbCBSZWdpc3RlcmVkIFRyYWRlbWFyayAmIFByb3BlcnR5IG9mIFByZXN0YVNob3AgU0FcbiAqL1xuXG5pbXBvcnQgTW9kdWxlQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vZHVsZS1jYXJkJztcbmltcG9ydCBBZG1pbk1vZHVsZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCBNb2R1bGVMb2FkZXIgZnJvbSAnLi9sb2FkZXInO1xuXG5jb25zdCAkID0gd2luZG93LiQ7XG5cbiQoKCkgPT4ge1xuICBjb25zdCBtb2R1bGVDYXJkQ29udHJvbGxlciA9IG5ldyBNb2R1bGVDYXJkKCk7XG4gIG5ldyBNb2R1bGVMb2FkZXIoKTtcbiAgbmV3IEFkbWluTW9kdWxlQ29udHJvbGxlcihtb2R1bGVDYXJkQ29udHJvbGxlcik7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BhZ2VzL21vZHVsZS9pbmRleC5qcyIsIi8qKlxuICogMjAwNy0yMDE5IFByZXN0YVNob3AgU0EgYW5kIENvbnRyaWJ1dG9yc1xuICpcbiAqIE5PVElDRSBPRiBMSUNFTlNFXG4gKlxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBzdWJqZWN0IHRvIHRoZSBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiB0aGF0IGlzIGJ1bmRsZWQgd2l0aCB0aGlzIHBhY2thZ2UgaW4gdGhlIGZpbGUgTElDRU5TRS50eHQuXG4gKiBJdCBpcyBhbHNvIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiBhdCB0aGlzIFVSTDpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMFxuICogSWYgeW91IGRpZCBub3QgcmVjZWl2ZSBhIGNvcHkgb2YgdGhlIGxpY2Vuc2UgYW5kIGFyZSB1bmFibGUgdG9cbiAqIG9idGFpbiBpdCB0aHJvdWdoIHRoZSB3b3JsZC13aWRlLXdlYiwgcGxlYXNlIHNlbmQgYW4gZW1haWxcbiAqIHRvIGxpY2Vuc2VAcHJlc3Rhc2hvcC5jb20gc28gd2UgY2FuIHNlbmQgeW91IGEgY29weSBpbW1lZGlhdGVseS5cbiAqXG4gKiBESVNDTEFJTUVSXG4gKlxuICogRG8gbm90IGVkaXQgb3IgYWRkIHRvIHRoaXMgZmlsZSBpZiB5b3Ugd2lzaCB0byB1cGdyYWRlIFByZXN0YVNob3AgdG8gbmV3ZXJcbiAqIHZlcnNpb25zIGluIHRoZSBmdXR1cmUuIElmIHlvdSB3aXNoIHRvIGN1c3RvbWl6ZSBQcmVzdGFTaG9wIGZvciB5b3VyXG4gKiBuZWVkcyBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly93d3cucHJlc3Rhc2hvcC5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQGF1dGhvciAgICBQcmVzdGFTaG9wIFNBIDxjb250YWN0QHByZXN0YXNob3AuY29tPlxuICogQGNvcHlyaWdodCAyMDA3LTIwMTkgUHJlc3RhU2hvcCBTQSBhbmQgQ29udHJpYnV0b3JzXG4gKiBAbGljZW5zZSAgIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvT1NMLTMuMCBPcGVuIFNvZnR3YXJlIExpY2Vuc2UgKE9TTCAzLjApXG4gKiBJbnRlcm5hdGlvbmFsIFJlZ2lzdGVyZWQgVHJhZGVtYXJrICYgUHJvcGVydHkgb2YgUHJlc3RhU2hvcCBTQVxuICovXG5cbmNvbnN0ICQgPSB3aW5kb3cuJDtcblxudmFyIEJPRXZlbnQgPSB7XG4gIG9uOiBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgY29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChjb250ZXh0LCBldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgZW1pdEV2ZW50OiBmdW5jdGlvbihldmVudE5hbWUsIGV2ZW50VHlwZSkge1xuICAgIHZhciBfZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChldmVudFR5cGUpO1xuICAgIC8vIHRydWUgdmFsdWVzIHN0YW5kIGZvcjogY2FuIGJ1YmJsZSwgYW5kIGlzIGNhbmNlbGxhYmxlXG4gICAgX2V2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoX2V2ZW50KTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyBNb2R1bGUgQ2FyZCBiZWhhdmlvclxuICpcbiAqIFRoaXMgaXMgYSBwb3J0IG9mIGFkbWluLWRldi90aGVtZXMvZGVmYXVsdC9qcy9idW5kbGUvbW9kdWxlL21vZHVsZV9jYXJkLmpzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZUNhcmQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qIFNlbGVjdG9ycyBmb3IgbW9kdWxlIGFjdGlvbiBsaW5rcyAodW5pbnN0YWxsLCByZXNldCwgZXRjLi4uKSB0byBhZGQgYSBjb25maXJtIHBvcGluICovXG4gICAgdGhpcy5tb2R1bGVBY3Rpb25NZW51TGlua1NlbGVjdG9yID0gJ2J1dHRvbi5tb2R1bGVfYWN0aW9uX21lbnVfJztcbiAgICB0aGlzLm1vZHVsZUFjdGlvbk1lbnVJbnN0YWxsTGlua1NlbGVjdG9yID0gJ2J1dHRvbi5tb2R1bGVfYWN0aW9uX21lbnVfaW5zdGFsbCc7XG4gICAgdGhpcy5tb2R1bGVBY3Rpb25NZW51RW5hYmxlTGlua1NlbGVjdG9yID0gJ2J1dHRvbi5tb2R1bGVfYWN0aW9uX21lbnVfZW5hYmxlJztcbiAgICB0aGlzLm1vZHVsZUFjdGlvbk1lbnVVbmluc3RhbGxMaW5rU2VsZWN0b3IgPSAnYnV0dG9uLm1vZHVsZV9hY3Rpb25fbWVudV91bmluc3RhbGwnO1xuICAgIHRoaXMubW9kdWxlQWN0aW9uTWVudURpc2FibGVMaW5rU2VsZWN0b3IgPSAnYnV0dG9uLm1vZHVsZV9hY3Rpb25fbWVudV9kaXNhYmxlJztcbiAgICB0aGlzLm1vZHVsZUFjdGlvbk1lbnVFbmFibGVNb2JpbGVMaW5rU2VsZWN0b3IgPSAnYnV0dG9uLm1vZHVsZV9hY3Rpb25fbWVudV9lbmFibGVfbW9iaWxlJztcbiAgICB0aGlzLm1vZHVsZUFjdGlvbk1lbnVEaXNhYmxlTW9iaWxlTGlua1NlbGVjdG9yID0gJ2J1dHRvbi5tb2R1bGVfYWN0aW9uX21lbnVfZGlzYWJsZV9tb2JpbGUnO1xuICAgIHRoaXMubW9kdWxlQWN0aW9uTWVudVJlc2V0TGlua1NlbGVjdG9yID0gJ2J1dHRvbi5tb2R1bGVfYWN0aW9uX21lbnVfcmVzZXQnO1xuICAgIHRoaXMubW9kdWxlQWN0aW9uTWVudVVwZGF0ZUxpbmtTZWxlY3RvciA9ICdidXR0b24ubW9kdWxlX2FjdGlvbl9tZW51X3VwZ3JhZGUnO1xuICAgIHRoaXMubW9kdWxlSXRlbUxpc3RTZWxlY3RvciA9ICcubW9kdWxlLWl0ZW0tbGlzdCc7XG4gICAgdGhpcy5tb2R1bGVJdGVtR3JpZFNlbGVjdG9yID0gJy5tb2R1bGUtaXRlbS1ncmlkJztcbiAgICB0aGlzLm1vZHVsZUl0ZW1BY3Rpb25zU2VsZWN0b3IgPSAnLm1vZHVsZS1hY3Rpb25zJztcblxuICAgIC8qIFNlbGVjdG9ycyBvbmx5IGZvciBtb2RhbCBidXR0b25zICovXG4gICAgdGhpcy5tb2R1bGVBY3Rpb25Nb2RhbERpc2FibGVMaW5rU2VsZWN0b3IgPSAnYS5tb2R1bGVfYWN0aW9uX21vZGFsX2Rpc2FibGUnO1xuICAgIHRoaXMubW9kdWxlQWN0aW9uTW9kYWxSZXNldExpbmtTZWxlY3RvciA9ICdhLm1vZHVsZV9hY3Rpb25fbW9kYWxfcmVzZXQnO1xuICAgIHRoaXMubW9kdWxlQWN0aW9uTW9kYWxVbmluc3RhbGxMaW5rU2VsZWN0b3IgPSAnYS5tb2R1bGVfYWN0aW9uX21vZGFsX3VuaW5zdGFsbCc7XG4gICAgdGhpcy5mb3JjZURlbGV0aW9uT3B0aW9uID0gJyNmb3JjZV9kZWxldGlvbic7XG5cbiAgICB0aGlzLmluaXRBY3Rpb25CdXR0b25zKCk7XG4gIH1cblxuICBpbml0QWN0aW9uQnV0dG9ucygpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMuZm9yY2VEZWxldGlvbk9wdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgYnRuID0gJChzZWxmLm1vZHVsZUFjdGlvbk1vZGFsVW5pbnN0YWxsTGlua1NlbGVjdG9yLCAkKFwiZGl2Lm1vZHVsZS1pdGVtLWxpc3RbZGF0YS10ZWNoLW5hbWU9J1wiICsgJCh0aGlzKS5hdHRyKFwiZGF0YS10ZWNoLW5hbWVcIikgKyBcIiddXCIpKTtcbiAgICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgICBidG4uYXR0cignZGF0YS1kZWxldGlvbicsICd0cnVlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidG4ucmVtb3ZlQXR0cignZGF0YS1kZWxldGlvbicpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5tb2R1bGVBY3Rpb25NZW51SW5zdGFsbExpbmtTZWxlY3RvciwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQoXCIjbW9kYWwtcHJlc3RhdHJ1c3RcIikubGVuZ3RoKSB7XG4gICAgICAgICQoXCIjbW9kYWwtcHJlc3RhdHJ1c3RcIikubW9kYWwoJ2hpZGUnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWxmLl9kaXNwYXRjaFByZUV2ZW50KCdpbnN0YWxsJywgdGhpcykgJiYgc2VsZi5fY29uZmlybUFjdGlvbignaW5zdGFsbCcsIHRoaXMpICYmIHNlbGYuX3JlcXVlc3RUb0NvbnRyb2xsZXIoJ2luc3RhbGwnLCAkKHRoaXMpKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm1vZHVsZUFjdGlvbk1lbnVFbmFibGVMaW5rU2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZWxmLl9kaXNwYXRjaFByZUV2ZW50KCdlbmFibGUnLCB0aGlzKSAmJiBzZWxmLl9jb25maXJtQWN0aW9uKCdlbmFibGUnLCB0aGlzKSAmJiBzZWxmLl9yZXF1ZXN0VG9Db250cm9sbGVyKCdlbmFibGUnLCAkKHRoaXMpKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm1vZHVsZUFjdGlvbk1lbnVVbmluc3RhbGxMaW5rU2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZWxmLl9kaXNwYXRjaFByZUV2ZW50KCd1bmluc3RhbGwnLCB0aGlzKSAmJiBzZWxmLl9jb25maXJtQWN0aW9uKCd1bmluc3RhbGwnLCB0aGlzKSAmJiBzZWxmLl9yZXF1ZXN0VG9Db250cm9sbGVyKCd1bmluc3RhbGwnLCAkKHRoaXMpKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm1vZHVsZUFjdGlvbk1lbnVEaXNhYmxlTGlua1NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2VsZi5fZGlzcGF0Y2hQcmVFdmVudCgnZGlzYWJsZScsIHRoaXMpICYmIHNlbGYuX2NvbmZpcm1BY3Rpb24oJ2Rpc2FibGUnLCB0aGlzKSAmJiBzZWxmLl9yZXF1ZXN0VG9Db250cm9sbGVyKCdkaXNhYmxlJywgJCh0aGlzKSk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5tb2R1bGVBY3Rpb25NZW51RW5hYmxlTW9iaWxlTGlua1NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2VsZi5fZGlzcGF0Y2hQcmVFdmVudCgnZW5hYmxlX21vYmlsZScsIHRoaXMpICYmIHNlbGYuX2NvbmZpcm1BY3Rpb24oJ2VuYWJsZV9tb2JpbGUnLCB0aGlzKSAmJiBzZWxmLl9yZXF1ZXN0VG9Db250cm9sbGVyKCdlbmFibGVfbW9iaWxlJywgJCh0aGlzKSk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5tb2R1bGVBY3Rpb25NZW51RGlzYWJsZU1vYmlsZUxpbmtTZWxlY3RvciwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNlbGYuX2Rpc3BhdGNoUHJlRXZlbnQoJ2Rpc2FibGVfbW9iaWxlJywgdGhpcykgJiYgc2VsZi5fY29uZmlybUFjdGlvbignZGlzYWJsZV9tb2JpbGUnLCB0aGlzKSAmJiBzZWxmLl9yZXF1ZXN0VG9Db250cm9sbGVyKCdkaXNhYmxlX21vYmlsZScsICQodGhpcykpO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMubW9kdWxlQWN0aW9uTWVudVJlc2V0TGlua1NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2VsZi5fZGlzcGF0Y2hQcmVFdmVudCgncmVzZXQnLCB0aGlzKSAmJiBzZWxmLl9jb25maXJtQWN0aW9uKCdyZXNldCcsIHRoaXMpICYmIHNlbGYuX3JlcXVlc3RUb0NvbnRyb2xsZXIoJ3Jlc2V0JywgJCh0aGlzKSk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5tb2R1bGVBY3Rpb25NZW51VXBkYXRlTGlua1NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2VsZi5fZGlzcGF0Y2hQcmVFdmVudCgndXBkYXRlJywgdGhpcykgJiYgc2VsZi5fY29uZmlybUFjdGlvbigndXBkYXRlJywgdGhpcykgJiYgc2VsZi5fcmVxdWVzdFRvQ29udHJvbGxlcigndXBkYXRlJywgJCh0aGlzKSk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm1vZHVsZUFjdGlvbk1vZGFsRGlzYWJsZUxpbmtTZWxlY3RvciwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNlbGYuX3JlcXVlc3RUb0NvbnRyb2xsZXIoJ2Rpc2FibGUnLCAkKHNlbGYubW9kdWxlQWN0aW9uTWVudURpc2FibGVMaW5rU2VsZWN0b3IsICQoXCJkaXYubW9kdWxlLWl0ZW0tbGlzdFtkYXRhLXRlY2gtbmFtZT0nXCIgKyAkKHRoaXMpLmF0dHIoXCJkYXRhLXRlY2gtbmFtZVwiKSArIFwiJ11cIikpKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm1vZHVsZUFjdGlvbk1vZGFsUmVzZXRMaW5rU2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZWxmLl9yZXF1ZXN0VG9Db250cm9sbGVyKCdyZXNldCcsICQoc2VsZi5tb2R1bGVBY3Rpb25NZW51UmVzZXRMaW5rU2VsZWN0b3IsICQoXCJkaXYubW9kdWxlLWl0ZW0tbGlzdFtkYXRhLXRlY2gtbmFtZT0nXCIgKyAkKHRoaXMpLmF0dHIoXCJkYXRhLXRlY2gtbmFtZVwiKSArIFwiJ11cIikpKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm1vZHVsZUFjdGlvbk1vZGFsVW5pbnN0YWxsTGlua1NlbGVjdG9yLCBmdW5jdGlvbiAoZSkge1xuICAgICAgJChlLnRhcmdldCkucGFyZW50cygnLm1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBzZWxmLl9yZXF1ZXN0VG9Db250cm9sbGVyKFxuICAgICAgICAgICd1bmluc3RhbGwnLFxuICAgICAgICAgICQoXG4gICAgICAgICAgICBzZWxmLm1vZHVsZUFjdGlvbk1lbnVVbmluc3RhbGxMaW5rU2VsZWN0b3IsXG4gICAgICAgICAgICAkKFwiZGl2Lm1vZHVsZS1pdGVtLWxpc3RbZGF0YS10ZWNoLW5hbWU9J1wiICsgJChlLnRhcmdldCkuYXR0cihcImRhdGEtdGVjaC1uYW1lXCIpICsgXCInXVwiKVxuICAgICAgICAgICksXG4gICAgICAgICAgJChlLnRhcmdldCkuYXR0cihcImRhdGEtZGVsZXRpb25cIilcbiAgICAgICAgKTtcbiAgICAgIH0uYmluZChlKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX2dldE1vZHVsZUl0ZW1TZWxlY3RvcigpIHtcbiAgICBpZiAoJCh0aGlzLm1vZHVsZUl0ZW1MaXN0U2VsZWN0b3IpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kdWxlSXRlbUxpc3RTZWxlY3RvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubW9kdWxlSXRlbUdyaWRTZWxlY3RvcjtcbiAgICB9XG4gIH07XG5cbiAgX2NvbmZpcm1BY3Rpb24oYWN0aW9uLCBlbGVtZW50KSB7XG4gICAgdmFyIG1vZGFsID0gJCgnIycgKyAkKGVsZW1lbnQpLmRhdGEoJ2NvbmZpcm1fbW9kYWwnKSk7XG4gICAgaWYgKG1vZGFsLmxlbmd0aCAhPSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbW9kYWwuZmlyc3QoKS5tb2RhbCgnc2hvdycpO1xuXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBkbyBub3QgYWxsb3cgYS5ocmVmIHRvIHJlbG9hZCB0aGUgcGFnZS4gVGhlIGNvbmZpcm0gbW9kYWwgZGlhbG9nIHdpbGwgZG8gaXQgYXN5bmMgaWYgbmVlZGVkLlxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGNvbnRlbnQgb2YgYSBtb2RhbCBhc2tpbmcgYSBjb25maXJtYXRpb24gZm9yIFByZXN0YVRydXN0IGFuZCBvcGVuIGl0XG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXl9IHJlc3VsdCBjb250YWluaW5nIG1vZHVsZSBkYXRhXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBfY29uZmlybVByZXN0YVRydXN0KHJlc3VsdCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgbW9kYWwgPSB0aGlzLl9yZXBsYWNlUHJlc3RhVHJ1c3RQbGFjZWhvbGRlcnMocmVzdWx0KTtcblxuICAgIG1vZGFsLmZpbmQoXCIucHN0cnVzdC1pbnN0YWxsXCIpLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vIEZpbmQgcmVsYXRlZCBmb3JtLCB1cGRhdGUgaXQgYW5kIHN1Ym1pdCBpdFxuICAgICAgdmFyIGluc3RhbGxfYnV0dG9uID0gJCh0aGF0Lm1vZHVsZUFjdGlvbk1lbnVJbnN0YWxsTGlua1NlbGVjdG9yLCAnLm1vZHVsZS1pdGVtW2RhdGEtdGVjaC1uYW1lPVwiJyArIHJlc3VsdC5tb2R1bGUuYXR0cmlidXRlcy5uYW1lICsgJ1wiXScpO1xuICAgICAgdmFyIGZvcm0gPSBpbnN0YWxsX2J1dHRvbi5wYXJlbnQoXCJmb3JtXCIpO1xuICAgICAgJCgnPGlucHV0PicpLmF0dHIoe1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgbmFtZTogJ2FjdGlvblBhcmFtc1tjb25maXJtUHJlc3RhVHJ1c3RdJ1xuICAgICAgfSkuYXBwZW5kVG8oZm9ybSk7XG5cbiAgICAgIGluc3RhbGxfYnV0dG9uLmNsaWNrKCk7XG4gICAgICBtb2RhbC5tb2RhbCgnaGlkZScpO1xuICAgIH0pO1xuXG4gICAgbW9kYWwubW9kYWwoKTtcbiAgfTtcblxuICBfcmVwbGFjZVByZXN0YVRydXN0UGxhY2Vob2xkZXJzKHJlc3VsdCkge1xuICAgIHZhciBtb2RhbCA9ICQoXCIjbW9kYWwtcHJlc3RhdHJ1c3RcIik7XG4gICAgdmFyIG1vZHVsZSA9IHJlc3VsdC5tb2R1bGUuYXR0cmlidXRlcztcblxuICAgIGlmIChyZXN1bHQuY29uZmlybWF0aW9uX3N1YmplY3QgIT09ICdQcmVzdGFUcnVzdCcgfHwgIW1vZGFsLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBhbGVydENsYXNzID0gbW9kdWxlLnByZXN0YXRydXN0LnN0YXR1cyA/ICdzdWNjZXNzJyA6ICd3YXJuaW5nJztcblxuICAgIGlmIChtb2R1bGUucHJlc3RhdHJ1c3QuY2hlY2tfbGlzdC5wcm9wZXJ0eSkge1xuICAgICAgbW9kYWwuZmluZChcIiNwc3RydXN0LWJ0bi1wcm9wZXJ0eS1va1wiKS5zaG93KCk7XG4gICAgICBtb2RhbC5maW5kKFwiI3BzdHJ1c3QtYnRuLXByb3BlcnR5LW5va1wiKS5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vZGFsLmZpbmQoXCIjcHN0cnVzdC1idG4tcHJvcGVydHktb2tcIikuaGlkZSgpO1xuICAgICAgbW9kYWwuZmluZChcIiNwc3RydXN0LWJ0bi1wcm9wZXJ0eS1ub2tcIikuc2hvdygpO1xuICAgICAgbW9kYWwuZmluZChcIiNwc3RydXN0LWJ1eVwiKS5hdHRyKFwiaHJlZlwiLCBtb2R1bGUudXJsKS50b2dnbGUobW9kdWxlLnVybCAhPT0gbnVsbCk7XG4gICAgfVxuXG4gICAgbW9kYWwuZmluZChcIiNwc3RydXN0LWltZ1wiKS5hdHRyKHtzcmM6IG1vZHVsZS5pbWcsIGFsdDogbW9kdWxlLm5hbWV9KTtcbiAgICBtb2RhbC5maW5kKFwiI3BzdHJ1c3QtbmFtZVwiKS50ZXh0KG1vZHVsZS5kaXNwbGF5TmFtZSk7XG4gICAgbW9kYWwuZmluZChcIiNwc3RydXN0LWF1dGhvclwiKS50ZXh0KG1vZHVsZS5hdXRob3IpO1xuICAgIG1vZGFsLmZpbmQoXCIjcHN0cnVzdC1sYWJlbFwiKS5hdHRyKFwiY2xhc3NcIiwgXCJ0ZXh0LVwiICsgYWxlcnRDbGFzcykudGV4dChtb2R1bGUucHJlc3RhdHJ1c3Quc3RhdHVzID8gJ09LJyA6ICdLTycpO1xuICAgIG1vZGFsLmZpbmQoXCIjcHN0cnVzdC1tZXNzYWdlXCIpLmF0dHIoXCJjbGFzc1wiLCBcImFsZXJ0IGFsZXJ0LVwiK2FsZXJ0Q2xhc3MpO1xuICAgIG1vZGFsLmZpbmQoXCIjcHN0cnVzdC1tZXNzYWdlID4gcFwiKS50ZXh0KG1vZHVsZS5wcmVzdGF0cnVzdC5tZXNzYWdlKTtcblxuICAgIHJldHVybiBtb2RhbDtcbiAgfVxuXG4gIF9kaXNwYXRjaFByZUV2ZW50KGFjdGlvbiwgZWxlbWVudCkge1xuICAgIHZhciBldmVudCA9IGpRdWVyeS5FdmVudCgnbW9kdWxlX2NhcmRfYWN0aW9uX2V2ZW50Jyk7XG5cbiAgICAkKGVsZW1lbnQpLnRyaWdnZXIoZXZlbnQsIFthY3Rpb25dKTtcbiAgICBpZiAoZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSAhPT0gZmFsc2UgfHwgZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSAhPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gaWYgYWxsIGhhbmRsZXJzIGhhdmUgbm90IGJlZW4gY2FsbGVkLCB0aGVuIHN0b3AgcHJvcGFnYXRpb24gb2YgdGhlIGNsaWNrIGV2ZW50LlxuICAgIH1cblxuICAgIHJldHVybiAoZXZlbnQucmVzdWx0ICE9PSBmYWxzZSk7IC8vIGV4cGxpY2l0IGZhbHNlIG11c3QgYmUgc2V0IGZyb20gaGFuZGxlcnMgdG8gc3RvcCBwcm9wYWdhdGlvbiBvZiB0aGUgY2xpY2sgZXZlbnQuXG4gIH07XG5cbiAgX3JlcXVlc3RUb0NvbnRyb2xsZXIoYWN0aW9uLCBlbGVtZW50LCBmb3JjZURlbGV0aW9uLCBkaXNhYmxlQ2FjaGVDbGVhciwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGpxRWxlbWVudE9iaiA9IGVsZW1lbnQuY2xvc2VzdCh0aGlzLm1vZHVsZUl0ZW1BY3Rpb25zU2VsZWN0b3IpO1xuICAgIHZhciBmb3JtID0gZWxlbWVudC5jbG9zZXN0KFwiZm9ybVwiKTtcbiAgICB2YXIgc3Bpbm5lck9iaiA9ICQoXCI8YnV0dG9uIGNsYXNzPVxcXCJidG4tcHJpbWFyeS1yZXZlcnNlIG9uY2xpY2sgdW5iaW5kIHNwaW5uZXIgXFxcIj48L2J1dHRvbj5cIik7XG4gICAgdmFyIHVybCA9IFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgZm9ybS5hdHRyKFwiYWN0aW9uXCIpO1xuICAgIHZhciBhY3Rpb25QYXJhbXMgPSBmb3JtLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICBpZiAoZm9yY2VEZWxldGlvbiA9PT0gXCJ0cnVlXCIgfHwgZm9yY2VEZWxldGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgYWN0aW9uUGFyYW1zLnB1c2goe25hbWU6IFwiYWN0aW9uUGFyYW1zW2RlbGV0aW9uXVwiLCB2YWx1ZTogdHJ1ZX0pO1xuICAgIH1cbiAgICBpZiAoZGlzYWJsZUNhY2hlQ2xlYXIgPT09IFwidHJ1ZVwiIHx8IGRpc2FibGVDYWNoZUNsZWFyID09PSB0cnVlKSB7XG4gICAgICBhY3Rpb25QYXJhbXMucHVzaCh7bmFtZTogXCJhY3Rpb25QYXJhbXNbY2FjaGVDbGVhckVuYWJsZWRdXCIsIHZhbHVlOiAwfSk7XG4gICAgfVxuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YTogYWN0aW9uUGFyYW1zLFxuICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBqcUVsZW1lbnRPYmouaGlkZSgpO1xuICAgICAgICBqcUVsZW1lbnRPYmouYWZ0ZXIoc3Bpbm5lck9iaik7XG4gICAgICB9XG4gICAgfSkuZG9uZShmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICQuZ3Jvd2wuZXJyb3Ioe21lc3NhZ2U6IFwiTm8gYW5zd2VyIHJlY2VpdmVkIGZyb20gc2VydmVyXCJ9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtb2R1bGVUZWNoTmFtZSA9IE9iamVjdC5rZXlzKHJlc3VsdClbMF07XG5cbiAgICAgICAgaWYgKHJlc3VsdFttb2R1bGVUZWNoTmFtZV0uc3RhdHVzID09PSBmYWxzZSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0W21vZHVsZVRlY2hOYW1lXS5jb25maXJtYXRpb25fc3ViamVjdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHNlbGYuX2NvbmZpcm1QcmVzdGFUcnVzdChyZXN1bHRbbW9kdWxlVGVjaE5hbWVdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkLmdyb3dsLmVycm9yKHttZXNzYWdlOiByZXN1bHRbbW9kdWxlVGVjaE5hbWVdLm1zZ30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQuZ3Jvd2wubm90aWNlKHttZXNzYWdlOiByZXN1bHRbbW9kdWxlVGVjaE5hbWVdLm1zZ30pO1xuXG4gICAgICAgICAgdmFyIGFsdGVyZWRTZWxlY3RvciA9IHNlbGYuX2dldE1vZHVsZUl0ZW1TZWxlY3RvcigpLnJlcGxhY2UoJy4nLCAnJyk7XG4gICAgICAgICAgdmFyIG1haW5FbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAgIGlmIChhY3Rpb24gPT0gXCJ1bmluc3RhbGxcIikge1xuICAgICAgICAgICAgbWFpbkVsZW1lbnQgPSBqcUVsZW1lbnRPYmouY2xvc2VzdCgnLicgKyBhbHRlcmVkU2VsZWN0b3IpO1xuICAgICAgICAgICAgbWFpbkVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIEJPRXZlbnQuZW1pdEV2ZW50KFwiTW9kdWxlIFVuaW5zdGFsbGVkXCIsIFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJkaXNhYmxlXCIpIHtcbiAgICAgICAgICAgIG1haW5FbGVtZW50ID0ganFFbGVtZW50T2JqLmNsb3Nlc3QoJy4nICsgYWx0ZXJlZFNlbGVjdG9yKTtcbiAgICAgICAgICAgIG1haW5FbGVtZW50LmFkZENsYXNzKGFsdGVyZWRTZWxlY3RvciArICctaXNOb3RBY3RpdmUnKTtcbiAgICAgICAgICAgIG1haW5FbGVtZW50LmF0dHIoJ2RhdGEtYWN0aXZlJywgJzAnKTtcblxuICAgICAgICAgICAgQk9FdmVudC5lbWl0RXZlbnQoXCJNb2R1bGUgRGlzYWJsZWRcIiwgXCJDdXN0b21FdmVudFwiKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBcImVuYWJsZVwiKSB7XG4gICAgICAgICAgICBtYWluRWxlbWVudCA9IGpxRWxlbWVudE9iai5jbG9zZXN0KCcuJyArIGFsdGVyZWRTZWxlY3Rvcik7XG4gICAgICAgICAgICBtYWluRWxlbWVudC5yZW1vdmVDbGFzcyhhbHRlcmVkU2VsZWN0b3IgKyAnLWlzTm90QWN0aXZlJyk7XG4gICAgICAgICAgICBtYWluRWxlbWVudC5hdHRyKCdkYXRhLWFjdGl2ZScsICcxJyk7XG5cbiAgICAgICAgICAgIEJPRXZlbnQuZW1pdEV2ZW50KFwiTW9kdWxlIEVuYWJsZWRcIiwgXCJDdXN0b21FdmVudFwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBqcUVsZW1lbnRPYmoucmVwbGFjZVdpdGgocmVzdWx0W21vZHVsZVRlY2hOYW1lXS5hY3Rpb25fbWVudV9odG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLmZhaWwoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBtb2R1bGVJdGVtID0ganFFbGVtZW50T2JqLmNsb3Nlc3QoJ21vZHVsZS1pdGVtLWxpc3QnKTtcbiAgICAgIGNvbnN0IHRlY2hOYW1lID0gbW9kdWxlSXRlbS5kYXRhKCd0ZWNoTmFtZScpO1xuICAgICAgJC5ncm93bC5lcnJvcih7bWVzc2FnZTogXCJDb3VsZCBub3QgcGVyZm9ybSBhY3Rpb24gXCIrYWN0aW9uK1wiIGZvciBtb2R1bGUgXCIrdGVjaE5hbWV9KTtcbiAgICB9KS5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAganFFbGVtZW50T2JqLmZhZGVJbigpO1xuICAgICAgc3Bpbm5lck9iai5yZW1vdmUoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY29tcG9uZW50cy9tb2R1bGUtY2FyZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=