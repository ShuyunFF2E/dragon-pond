'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

exports.default = muscle;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function muscle(ModelClass) {

	var model = new ModelClass();

	var _data = {};
	var methods = {};

	(0, _keys2.default)(model).forEach(function (field) {
		_data[field] = model[field];
	});

	(0, _getOwnPropertyNames2.default)(ModelClass.prototype).forEach(function (methodName) {
		var method = ModelClass.prototype[methodName];
		if ((0, _isFunction3.default)(method)) {
			methods[methodName] = method;
		}
	});

	return {
		data: function data() {
			return _data;
		},

		methods: methods
	};
}