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
		plugins: ['doExpressions', 'objectRestSpread', 'decorators', 'classProperties', 'asyncGenerators', 'functionBind', 'functionSent', 'dynamicImport']
	});

	const objectPropertyNodes = [];
	const objectMethodNodes = [];
	const importModuleNodes = [];

	// 遍历 model 的语法树，将 classProperty 和 classMethod 保存起来
	traverse(modelAst, {

		ImportDeclaration({ node }) {
			importModuleNodes.push(node);
		},

		ClassProperty({ node }) {
			const { key, value, computed, shorthand, decorators } = node;
			objectPropertyNodes.push(t.objectProperty(key, value, computed, shorthand, decorators));
		},

		ClassMethod({ node }) {
			const { kind, key, params, body, computed, async, decorators, generator, returnType, typeParameters } = node;
			const methodNode = t.objectMethod(kind, key, params, body, computed);
			methodNode.async = async;
			methodNode.decorators = decorators;
			methodNode.generator = generator;
			methodNode.returnType = returnType;
			methodNode.typeParameters = typeParameters;
			objectMethodNodes.push(methodNode);
		}

	});

	// 构建
	const dataNodes = t.objectExpression(objectPropertyNodes);
	const methodsNodes = t.objectExpression(objectMethodNodes);

	const ast = {
		type: 'Program',
		body: buildRequire({
			IMPORT_MODULES: importModuleNodes.length ? importModuleNodes : t.emptyStatement(),
			DATA: dataNodes,
			METHODS: methodsNodes
		})
	};

	const { code } = generate(ast, { comments: false });
	return jsBeautify(code, beatifyCodeStyle);

};
