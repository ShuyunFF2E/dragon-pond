/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-04-19
 */

import template from 'babel-template';
import generate from 'babel-generator';
import traverse from 'babel-traverse';
import { conditionalExpression, identifier, returnStatement } from 'babel-types';

const buildRequire = template(`
	// function A(PARAM) {
	// 	this.VARIABLE = 'kuitos';
	// 	this.PARAM = PARAM;
	// }

	function max(a, b) {
		if (a > b) {
			return a;
		} else {
			return b;
		}
	}
`);

const ast = buildRequire({

		VARIABLE: identifier('name'),
		PARAM: identifier('x')
	}
);

console.log('ast: ', ast);

traverse(ast, {

	noScope: true,

	IfStatement(path) {
		const { consequent, alternate, test } = path.node;
		const node = returnStatement(conditionalExpression(test, consequent.body[0].argument, alternate.body[0].argument));
		path.replaceWith(node);
	}

});
const source = generate(ast);
console.log('code: ', source.code);

