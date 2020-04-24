/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"admin_article_form": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/js/admin_article_form.js","vendors~admin_article_form~app~article_show","vendors~admin_article_form~app","vendors~admin_article_form"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/algolia-autocomplete.scss":
/*!**********************************************!*\
  !*** ./assets/css/algolia-autocomplete.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/admin_article_form.js":
/*!*****************************************!*\
  !*** ./assets/js/admin_article_form.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dropzone/dist/dropzone.css */ "./node_modules/dropzone/dist/dropzone.css");
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var _components_algolia_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/algolia-autocomplete */ "./assets/js/components/algolia-autocomplete.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





dropzone__WEBPACK_IMPORTED_MODULE_6___default.a.autoDiscover = false;

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).ready(function () {
  var $autoComplete = jquery__WEBPACK_IMPORTED_MODULE_10___default()('.js-user-autocomplete');

  if (!$autoComplete.is(':disabled')) {
    Object(_components_algolia_autocomplete__WEBPACK_IMPORTED_MODULE_9__["default"])($autoComplete, 'users', 'email');
  }

  var $referenceList = jquery__WEBPACK_IMPORTED_MODULE_10___default()('.js-reference-list');

  if ($referenceList[0]) {
    var referenceList = new ReferenceList(jquery__WEBPACK_IMPORTED_MODULE_10___default()('.js-reference-list'));
    initializeDropzone(referenceList);
  }

  var $locationSelect = jquery__WEBPACK_IMPORTED_MODULE_10___default()('.js-article-form-location');
  var $specificLocationTarget = jquery__WEBPACK_IMPORTED_MODULE_10___default()('.js-specific-location-target');
  $locationSelect.on('change', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_10___default.a.ajax({
      url: $locationSelect.data('specific-location-url'),
      data: {
        location: $locationSelect.val()
      },
      success: function success(html) {
        if (!html) {
          $specificLocationTarget.find('select').remove();
          $specificLocationTarget.addClass('d-none');
          return;
        } // Replace the current field and show


        $specificLocationTarget.html(html).removeClass('d-none');
      }
    });
  });
}); // todo - use Webpack Encore so ES6 syntax is transpiled to ES5

var ReferenceList = /*#__PURE__*/function () {
  function ReferenceList($element) {
    var _this = this;

    _classCallCheck(this, ReferenceList);

    this.$element = $element;
    this.sortable = sortablejs__WEBPACK_IMPORTED_MODULE_8__["default"].create(this.$element[0], {
      handle: '.drag-handle',
      animation: 150,
      onEnd: function onEnd() {
        jquery__WEBPACK_IMPORTED_MODULE_10___default.a.ajax({
          url: _this.$element.data('url') + '/reorder',
          method: 'POST',
          data: JSON.stringify(_this.sortable.toArray())
        });
      }
    });
    this.references = [];
    this.render();
    this.$element.on('click', '.js-reference-delete', function (event) {
      _this.handleReferenceDelete(event);
    });
    this.$element.on('blur', '.js-edit-filename', function (event) {
      _this.handleReferenceEditFilename(event);
    });
    jquery__WEBPACK_IMPORTED_MODULE_10___default.a.ajax({
      url: this.$element.data('url')
    }).then(function (data) {
      _this.references = data;

      _this.render();
    });
  }

  _createClass(ReferenceList, [{
    key: "addReference",
    value: function addReference(reference) {
      this.references.push(reference);
      this.render();
    }
  }, {
    key: "handleReferenceDelete",
    value: function handleReferenceDelete(event) {
      var _this2 = this;

      var $li = jquery__WEBPACK_IMPORTED_MODULE_10___default()(event.currentTarget).closest('.list-group-item');
      var id = $li.data('id');
      $li.addClass('disabled');
      jquery__WEBPACK_IMPORTED_MODULE_10___default.a.ajax({
        url: '/admin/article/references/' + id,
        method: 'DELETE'
      }).then(function () {
        _this2.references = _this2.references.filter(function (reference) {
          return reference.id !== id;
        });

        _this2.render();
      });
    }
  }, {
    key: "handleReferenceEditFilename",
    value: function handleReferenceEditFilename(event) {
      var $li = jquery__WEBPACK_IMPORTED_MODULE_10___default()(event.currentTarget).closest('.list-group-item');
      var id = $li.data('id');
      var reference = this.references.find(function (reference) {
        return reference.id === id;
      });
      reference.originalFilename = jquery__WEBPACK_IMPORTED_MODULE_10___default()(event.currentTarget).val();
      jquery__WEBPACK_IMPORTED_MODULE_10___default.a.ajax({
        url: '/admin/article/references/' + id,
        method: 'PUT',
        data: JSON.stringify(reference)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var itemsHtml = this.references.map(function (reference) {
        return "\n<li class=\"list-group-item d-flex justify-content-between align-items-center\" data-id=\"".concat(reference.id, "\">\n    <span class=\"drag-handle fa fa-reorder\"></span>\n    <input type=\"text\" value=\"").concat(reference.originalFilename, "\" class=\"form-control js-edit-filename\" style=\"width: auto;\">\n\n    <span>\n        <a href=\"/admin/article/references/").concat(reference.id, "/download\" class=\"btn btn-link btn-sm\"><span class=\"fa fa-download\" style=\"vertical-align: middle\"></span></a>\n        <button class=\"js-reference-delete btn btn-link btn-sm\"><span class=\"fa fa-trash\"></span></button>\n    </span>\n</li>\n");
      });
      this.$element.html(itemsHtml.join(''));
    }
  }]);

  return ReferenceList;
}();
/**
 * @param {ReferenceList} referenceList
 */


function initializeDropzone(referenceList) {
  var formElement = document.querySelector('.js-reference-dropzone');

  if (!formElement) {
    return;
  }

  var dropzone = new dropzone__WEBPACK_IMPORTED_MODULE_6___default.a(formElement, {
    paramName: 'reference',
    init: function init() {
      this.on('success', function (file, data) {
        referenceList.addReference(data);
      });
      this.on('error', function (file, data) {
        if (data.detail) {
          this.emit('error', file, data.detail);
        }
      });
    }
  });
}

/***/ }),

/***/ "./assets/js/components/algolia-autocomplete.js":
/*!******************************************************!*\
  !*** ./assets/js/components/algolia-autocomplete.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var autocomplete_js_dist_autocomplete_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autocomplete.js/dist/autocomplete.jquery */ "./node_modules/autocomplete.js/dist/autocomplete.jquery.js");
/* harmony import */ var autocomplete_js_dist_autocomplete_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autocomplete_js_dist_autocomplete_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_algolia_autocomplete_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/algolia-autocomplete.scss */ "./assets/css/algolia-autocomplete.scss");
/* harmony import */ var _css_algolia_autocomplete_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_algolia_autocomplete_scss__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function ($elements, dataKey, displayKey) {
  $elements.each(function () {
    var autocompleteUrl = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('autocomplete-url');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).autocomplete({
      hint: false
    }, [{
      source: function source(query, cb) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
          url: autocompleteUrl + '?query=' + query
        }).then(function (data) {
          if (dataKey) {
            data = data[dataKey];
          }

          cb(data);
        });
      },
      displayKey: displayKey,
      debounce: 500 // only request every 1/2 second

    }]);
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hbGdvbGlhLWF1dG9jb21wbGV0ZS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbl9hcnRpY2xlX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYWxnb2xpYS1hdXRvY29tcGxldGUuanMiXSwibmFtZXMiOlsiRHJvcHpvbmUiLCJhdXRvRGlzY292ZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIiRhdXRvQ29tcGxldGUiLCJpcyIsImF1dG9jb21wbGV0ZSIsIiRyZWZlcmVuY2VMaXN0IiwicmVmZXJlbmNlTGlzdCIsIlJlZmVyZW5jZUxpc3QiLCJpbml0aWFsaXplRHJvcHpvbmUiLCIkbG9jYXRpb25TZWxlY3QiLCIkc3BlY2lmaWNMb2NhdGlvblRhcmdldCIsIm9uIiwiZSIsImFqYXgiLCJ1cmwiLCJkYXRhIiwibG9jYXRpb24iLCJ2YWwiLCJzdWNjZXNzIiwiaHRtbCIsImZpbmQiLCJyZW1vdmUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiJGVsZW1lbnQiLCJzb3J0YWJsZSIsIlNvcnRhYmxlIiwiY3JlYXRlIiwiaGFuZGxlIiwiYW5pbWF0aW9uIiwib25FbmQiLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwidG9BcnJheSIsInJlZmVyZW5jZXMiLCJyZW5kZXIiLCJldmVudCIsImhhbmRsZVJlZmVyZW5jZURlbGV0ZSIsImhhbmRsZVJlZmVyZW5jZUVkaXRGaWxlbmFtZSIsInRoZW4iLCJyZWZlcmVuY2UiLCJwdXNoIiwiJGxpIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJpZCIsImZpbHRlciIsIm9yaWdpbmFsRmlsZW5hbWUiLCJpdGVtc0h0bWwiLCJtYXAiLCJqb2luIiwiZm9ybUVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZHJvcHpvbmUiLCJwYXJhbU5hbWUiLCJpbml0IiwiZmlsZSIsImFkZFJlZmVyZW5jZSIsImRldGFpbCIsImVtaXQiLCIkZWxlbWVudHMiLCJkYXRhS2V5IiwiZGlzcGxheUtleSIsImVhY2giLCJhdXRvY29tcGxldGVVcmwiLCJoaW50Iiwic291cmNlIiwicXVlcnkiLCJjYiIsImRlYm91bmNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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QUosRUFBYTtBQUNYL0MsZ0JBQUksR0FBR0EsSUFBSSxDQUFDK0MsT0FBRCxDQUFYO0FBQ0Q7O0FBQ0RPLFlBQUUsQ0FBQ3RELElBQUQsQ0FBRjtBQUNELFNBUEQ7QUFRRCxPQVZIO0FBV0VnRCxnQkFBVSxFQUFFQSxVQVhkO0FBWUVPLGNBQVEsRUFBRSxHQVpaLENBWWlCOztBQVpqQixLQURvQyxDQUF0QztBQWdCRCxHQW5CRDtBQW9CRCxDIiwiZmlsZSI6ImFkbWluX2FydGljbGVfZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhZG1pbl9hcnRpY2xlX2Zvcm1cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hc3NldHMvanMvYWRtaW5fYXJ0aWNsZV9mb3JtLmpzXCIsXCJ2ZW5kb3JzfmFkbWluX2FydGljbGVfZm9ybX5hcHB+YXJ0aWNsZV9zaG93XCIsXCJ2ZW5kb3JzfmFkbWluX2FydGljbGVfZm9ybX5hcHBcIixcInZlbmRvcnN+YWRtaW5fYXJ0aWNsZV9mb3JtXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IERyb3B6b25lIGZyb20gJ2Ryb3B6b25lJ1xuaW1wb3J0ICdkcm9wem9uZS9kaXN0L2Ryb3B6b25lLmNzcydcbmltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJ1xuaW1wb3J0IGF1dG9jb21wbGV0ZSBmcm9tICcuL2NvbXBvbmVudHMvYWxnb2xpYS1hdXRvY29tcGxldGUnXG5cbkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBjb25zdCAkYXV0b0NvbXBsZXRlID0gJCgnLmpzLXVzZXItYXV0b2NvbXBsZXRlJylcbiAgaWYgKCEkYXV0b0NvbXBsZXRlLmlzKCc6ZGlzYWJsZWQnKSkge1xuICAgIGF1dG9jb21wbGV0ZSgkYXV0b0NvbXBsZXRlLCAndXNlcnMnLCAnZW1haWwnKVxuICB9XG5cbiAgY29uc3QgJHJlZmVyZW5jZUxpc3QgPSAkKCcuanMtcmVmZXJlbmNlLWxpc3QnKVxuICBpZiAoJHJlZmVyZW5jZUxpc3RbMF0pIHtcbiAgICB2YXIgcmVmZXJlbmNlTGlzdCA9IG5ldyBSZWZlcmVuY2VMaXN0KCQoJy5qcy1yZWZlcmVuY2UtbGlzdCcpKVxuICAgIGluaXRpYWxpemVEcm9wem9uZShyZWZlcmVuY2VMaXN0KVxuICB9XG5cbiAgdmFyICRsb2NhdGlvblNlbGVjdCA9ICQoJy5qcy1hcnRpY2xlLWZvcm0tbG9jYXRpb24nKVxuICB2YXIgJHNwZWNpZmljTG9jYXRpb25UYXJnZXQgPSAkKCcuanMtc3BlY2lmaWMtbG9jYXRpb24tdGFyZ2V0JylcblxuICAkbG9jYXRpb25TZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJGxvY2F0aW9uU2VsZWN0LmRhdGEoJ3NwZWNpZmljLWxvY2F0aW9uLXVybCcpLFxuICAgICAgZGF0YToge1xuICAgICAgICBsb2NhdGlvbjogJGxvY2F0aW9uU2VsZWN0LnZhbCgpLFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgIGlmICghaHRtbCkge1xuICAgICAgICAgICRzcGVjaWZpY0xvY2F0aW9uVGFyZ2V0LmZpbmQoJ3NlbGVjdCcpLnJlbW92ZSgpXG4gICAgICAgICAgJHNwZWNpZmljTG9jYXRpb25UYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpXG5cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgZmllbGQgYW5kIHNob3dcbiAgICAgICAgJHNwZWNpZmljTG9jYXRpb25UYXJnZXQuaHRtbChodG1sKS5yZW1vdmVDbGFzcygnZC1ub25lJylcbiAgICAgIH0sXG4gICAgfSlcbiAgfSlcbn0pXG5cbi8vIHRvZG8gLSB1c2UgV2VicGFjayBFbmNvcmUgc28gRVM2IHN5bnRheCBpcyB0cmFuc3BpbGVkIHRvIEVTNVxuY2xhc3MgUmVmZXJlbmNlTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50XG4gICAgdGhpcy5zb3J0YWJsZSA9IFNvcnRhYmxlLmNyZWF0ZSh0aGlzLiRlbGVtZW50WzBdLCB7XG4gICAgICBoYW5kbGU6ICcuZHJhZy1oYW5kbGUnLFxuICAgICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgICBvbkVuZDogKCkgPT4ge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHVybDogdGhpcy4kZWxlbWVudC5kYXRhKCd1cmwnKSArICcvcmVvcmRlcicsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodGhpcy5zb3J0YWJsZS50b0FycmF5KCkpLFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9KVxuICAgIHRoaXMucmVmZXJlbmNlcyA9IFtdXG4gICAgdGhpcy5yZW5kZXIoKVxuXG4gICAgdGhpcy4kZWxlbWVudC5vbignY2xpY2snLCAnLmpzLXJlZmVyZW5jZS1kZWxldGUnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlUmVmZXJlbmNlRGVsZXRlKGV2ZW50KVxuICAgIH0pXG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdibHVyJywgJy5qcy1lZGl0LWZpbGVuYW1lJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVJlZmVyZW5jZUVkaXRGaWxlbmFtZShldmVudClcbiAgICB9KVxuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogdGhpcy4kZWxlbWVudC5kYXRhKCd1cmwnKSxcbiAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnJlZmVyZW5jZXMgPSBkYXRhXG4gICAgICB0aGlzLnJlbmRlcigpXG4gICAgfSlcbiAgfVxuXG4gIGFkZFJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICB0aGlzLnJlZmVyZW5jZXMucHVzaChyZWZlcmVuY2UpXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgaGFuZGxlUmVmZXJlbmNlRGVsZXRlKGV2ZW50KSB7XG4gICAgY29uc3QgJGxpID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KCcubGlzdC1ncm91cC1pdGVtJylcbiAgICBjb25zdCBpZCA9ICRsaS5kYXRhKCdpZCcpXG4gICAgJGxpLmFkZENsYXNzKCdkaXNhYmxlZCcpXG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL2FkbWluL2FydGljbGUvcmVmZXJlbmNlcy8nICsgaWQsXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yZWZlcmVuY2VzID0gdGhpcy5yZWZlcmVuY2VzLmZpbHRlcigocmVmZXJlbmNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZWZlcmVuY2UuaWQgIT09IGlkXG4gICAgICB9KVxuICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVSZWZlcmVuY2VFZGl0RmlsZW5hbWUoZXZlbnQpIHtcbiAgICBjb25zdCAkbGkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmNsb3Nlc3QoJy5saXN0LWdyb3VwLWl0ZW0nKVxuICAgIGNvbnN0IGlkID0gJGxpLmRhdGEoJ2lkJylcbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICByZXR1cm4gcmVmZXJlbmNlLmlkID09PSBpZFxuICAgIH0pXG4gICAgcmVmZXJlbmNlLm9yaWdpbmFsRmlsZW5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpXG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL2FkbWluL2FydGljbGUvcmVmZXJlbmNlcy8nICsgaWQsXG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocmVmZXJlbmNlKSxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zSHRtbCA9IHRoaXMucmVmZXJlbmNlcy5tYXAoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgcmV0dXJuIGBcbjxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCIgZGF0YS1pZD1cIiR7cmVmZXJlbmNlLmlkfVwiPlxuICAgIDxzcGFuIGNsYXNzPVwiZHJhZy1oYW5kbGUgZmEgZmEtcmVvcmRlclwiPjwvc3Bhbj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7cmVmZXJlbmNlLm9yaWdpbmFsRmlsZW5hbWV9XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wganMtZWRpdC1maWxlbmFtZVwiIHN0eWxlPVwid2lkdGg6IGF1dG87XCI+XG5cbiAgICA8c3Bhbj5cbiAgICAgICAgPGEgaHJlZj1cIi9hZG1pbi9hcnRpY2xlL3JlZmVyZW5jZXMvJHtyZWZlcmVuY2UuaWR9L2Rvd25sb2FkXCIgY2xhc3M9XCJidG4gYnRuLWxpbmsgYnRuLXNtXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS1kb3dubG9hZFwiIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZVwiPjwvc3Bhbj48L2E+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJqcy1yZWZlcmVuY2UtZGVsZXRlIGJ0biBidG4tbGluayBidG4tc21cIj48c3BhbiBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9zcGFuPjwvYnV0dG9uPlxuICAgIDwvc3Bhbj5cbjwvbGk+XG5gXG4gICAgfSlcblxuICAgIHRoaXMuJGVsZW1lbnQuaHRtbChpdGVtc0h0bWwuam9pbignJykpXG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlZmVyZW5jZUxpc3R9IHJlZmVyZW5jZUxpc3RcbiAqL1xuZnVuY3Rpb24gaW5pdGlhbGl6ZURyb3B6b25lKHJlZmVyZW5jZUxpc3QpIHtcbiAgdmFyIGZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXJlZmVyZW5jZS1kcm9wem9uZScpXG4gIGlmICghZm9ybUVsZW1lbnQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBkcm9wem9uZSA9IG5ldyBEcm9wem9uZShmb3JtRWxlbWVudCwge1xuICAgIHBhcmFtTmFtZTogJ3JlZmVyZW5jZScsXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5vbignc3VjY2VzcycsIGZ1bmN0aW9uIChmaWxlLCBkYXRhKSB7XG4gICAgICAgIHJlZmVyZW5jZUxpc3QuYWRkUmVmZXJlbmNlKGRhdGEpXG4gICAgICB9KVxuXG4gICAgICB0aGlzLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChmaWxlLCBkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmRldGFpbCkge1xuICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBmaWxlLCBkYXRhLmRldGFpbClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICB9KVxufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICdhdXRvY29tcGxldGUuanMvZGlzdC9hdXRvY29tcGxldGUuanF1ZXJ5J1xuaW1wb3J0ICcuLi8uLi9jc3MvYWxnb2xpYS1hdXRvY29tcGxldGUuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCRlbGVtZW50cywgZGF0YUtleSwgZGlzcGxheUtleSkge1xuICAkZWxlbWVudHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGF1dG9jb21wbGV0ZVVybCA9ICQodGhpcykuZGF0YSgnYXV0b2NvbXBsZXRlLXVybCcpXG5cbiAgICAkKHRoaXMpLmF1dG9jb21wbGV0ZSh7IGhpbnQ6IGZhbHNlIH0sIFtcbiAgICAgIHtcbiAgICAgICAgc291cmNlOiBmdW5jdGlvbiAocXVlcnksIGNiKSB7XG4gICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogYXV0b2NvbXBsZXRlVXJsICsgJz9xdWVyeT0nICsgcXVlcnksXG4gICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGFLZXkpIHtcbiAgICAgICAgICAgICAgZGF0YSA9IGRhdGFbZGF0YUtleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNiKGRhdGEpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGxheUtleTogZGlzcGxheUtleSxcbiAgICAgICAgZGVib3VuY2U6IDUwMCwgLy8gb25seSByZXF1ZXN0IGV2ZXJ5IDEvMiBzZWNvbmRcbiAgICAgIH0sXG4gICAgXSlcbiAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=