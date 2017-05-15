/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-08
 */

import { parse } from 'babylon';
import traverse from 'babel-traverse';
import template from 'babel-template';
import generate from 'babel-generator';
import * as t from 'babel-types';
import { beatifyCodeStyle, vueMuscleTemplate } from './constants';
import { js_beautify as jsBeautify } from 'js-beautify';

const buildRequire = template(vueMuscleTemplate, { sourceType: 'module' });

export default modelCode => {

	const modelAst = parse(modelCode, {
		sourceType: 'module',
		plugins: ['classProperties']
	});

	const classProperties = [];
	const classMethods = [];

	// 遍历 model 的语法树，将 classProperty 和 classMethod 保存起来
	traverse(modelAst, {

		ClassProperty(p) {
			const { key, value } = p.node;
			classProperties.push(t.objectProperty(key, value));
		},

		ClassMethod(p) {
			const { kind, key, params, body, computed } = p.node;
			classMethods.push(t.objectMethod(kind, key, params, body, computed));
		}

	});

	// 构建
	const propertiesNodes = t.objectExpression(classProperties);
	const methodsNodes = t.objectExpression(classMethods);

	const ast = buildRequire({
		DATA: propertiesNodes,
		METHODS: methodsNodes
	});

	return jsBeautify(generate(ast).code, beatifyCodeStyle);

};
