'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _bone = require('./bone');

var _bone2 = _interopRequireDefault(_bone);

var _muscle = require('./muscle');

var _muscle2 = _interopRequireDefault(_muscle);

var _constants = require('./constants');

var _jsBeautify = require('js-beautify');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {

  var template = (0, _bone2.default)(config);
  var muscleScript = (0, _muscle2.default)(_fs2.default.readFileSync(_constants.modelDir + '/' + config.model, { encoding: 'UTF-8' }));

  return (0, _jsBeautify.html_beautify)('<template>\n' + template + '\n</template><script>' + muscleScript + '</script>', _constants.beatifyCodeStyle);
};