'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.vueMuscleTemplate = exports.beatifyCodeStyle = undefined;
exports.setModelDir = setModelDir;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var beatifyCodeStyle = exports.beatifyCodeStyle = {
	'indent_with_tabs': true,
	'end_with_newline': true
};

var modelDir = _path2.default.join(_path2.default.dirname(require.main.filename));
Object.defineProperty(exports, 'modelDir', {
	get: function get() {
		return modelDir;
	}
});
function setModelDir(modelAbsolutePath) {
	modelDir = modelAbsolutePath;
}

var vueMuscleTemplate = exports.vueMuscleTemplate = '\n\tIMPORT_MODULES\n\texport default {\n\t\n\t\tdata() {\n\t\t\treturn DATA;\n\t\t},\n\t\n\t\tmethods: METHODS\n\t\t\n\t};';