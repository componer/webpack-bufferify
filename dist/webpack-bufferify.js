module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _RawSource = __webpack_require__(1);

	var _RawSource2 = _interopRequireDefault(_RawSource);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	    function _class() {
	        _classCallCheck(this, _class);
	    }

	    _createClass(_class, [{
	        key: 'apply',
	        value: function apply(compiler) {
	            var _this = this;

	            compiler.plugin('emit', function (compilation, callback) {
	                var file = compilation.options.output.filename;
	                var assets = compilation.assets;
	                var asset = assets[file];
	                if (!asset) {
	                    callback();
	                    return;
	                }
	                var content = asset.source();

	                // begin to modify content
	                content = _this.process(content, file, assets, compilation, compiler) || content;

	                assets[file] = new _RawSource2.default(content);
	                callback();
	            });
	        }

	        // rewrite this property when you create your own webpack plugin

	    }, {
	        key: 'process',
	        value: function process(content, file, assets, compilation, compiler) {}
	    }]);

	    return _class;
	}();

	exports.default = _class;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var Source = __webpack_require__(3);
	var SourceNode = __webpack_require__(4).SourceNode;
	var SourceListMap = __webpack_require__(5).SourceListMap;

	function RawSource(value) {
		Source.call(this);
		this._value = value;
	}
	module.exports = RawSource;

	RawSource.prototype = Object.create(Source.prototype);
	RawSource.prototype.constructor = RawSource;

	RawSource.prototype.source = function () {
		return this._value;
	};

	RawSource.prototype.map = function (options) {
		return null;
	};

	RawSource.prototype.node = function (options) {
		return new SourceNode(null, null, null, this._value);
	};

	RawSource.prototype.listMap = function (options) {
		return new SourceListMap(this._value);
	};

	RawSource.prototype.updateHash = function (hash) {
		hash.update(this._value);
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var SourceNode = __webpack_require__(4).SourceNode;
	var SourceMapConsumer = __webpack_require__(4).SourceMapConsumer;

	function Source() {}

	module.exports = Source;

	Source.prototype.source = null;

	Source.prototype.size = function () {
		return this.source().length;
	};

	Source.prototype.map = function (options) {
		return null;
	};

	Source.prototype.sourceAndMap = function (options) {
		return {
			source: this.source(),
			map: this.map()
		};
	};

	Source.prototype.node = null;

	Source.prototype.listNode = null;

	Source.prototype.updateHash = function (hash) {
		var source = this.source();
		hash.update(source || "");
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("source-map");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("source-list-map");

/***/ }
/******/ ]);