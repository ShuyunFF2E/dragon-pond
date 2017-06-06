'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = bone;

var _humps = require('humps');

var _humps2 = _interopRequireDefault(_humps);

var _jsBeautify = require('js-beautify');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bone(config) {
	var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
		return v;
	};


	var componentTree = '';

	var _middleware = middleware(config),
	    component = _middleware.component,
	    attrs = _middleware.attrs,
	    text = _middleware.text,
	    children = _middleware.children;

	var componentName = _humps2.default.decamelize(component, { separator: '-' });

	if (component) {

		componentTree += '<' + componentName;

		if (attrs) {

			for (var attr in attrs) {

				if (attrs.hasOwnProperty(attr)) {
					var value = attrs[attr];
					componentTree += ' ' + _humps2.default.decamelize(attr, { separator: '-' }) + '="' + value + '"';
				}
			}
		}

		componentTree += '>';

		if (text) {
			componentTree += text;
		}

		if (children) {
			children.forEach(function (child) {
				return componentTree += bone(child, middleware);
			});
		}

		componentTree += '</' + componentName + '>';
	}

	return (0, _jsBeautify.html)(componentTree, _constants.beatifyCodeStyle);
}