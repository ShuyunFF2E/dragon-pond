'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

exports.default = getProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getType(fn) {
	var match = fn && fn.toString().match(/^\s*function (\w+)/);
	return match ? match[1] : '';
}

function getProps(originVueComponentProps) {

	var props = {};

	(0, _keys2.default)(originVueComponentProps).forEach(function (prop) {

		var value = originVueComponentProps[prop];
		var formattedProps = null;

		if ((0, _isFunction3.default)(value)) {
			formattedProps = { type: [getType(value)] };
		} else if ((0, _isArray3.default)(value)) {
			formattedProps = { type: value.map(function (v) {
					return getType(v);
				}) };
		} else if ((0, _isFunction3.default)(value.type)) {
			formattedProps = (0, _extends3.default)({}, value, { type: [getType(value.type)] });
		} else if ((0, _isArray3.default)(value.type)) {
			formattedProps = (0, _extends3.default)({}, value, { type: value.type.map(function (v) {
					return getType(v);
				}) });
		} else {
			formattedProps = value;
		}

		if ((0, _isFunction3.default)(formattedProps.default)) {
			formattedProps.default = formattedProps.default();
		}

		props[prop] = formattedProps;
	});

	return props;
}