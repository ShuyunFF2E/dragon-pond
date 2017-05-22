/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-03
 */

import humps from 'humps';
import { html as htmlBeautify } from 'js-beautify';
import { beatifyCodeStyle } from './constants';

/**
 * 根据配置生成组件树
 * 生成的 html 标签以 '-' 分隔
 * @param config
 */
function generateTemplate(config) {

	let componentTree = '';

	const { component, attrs, text, children } = config;
	const componentName = humps.decamelize(component, { separator: '-' });

	if (component) {

		componentTree += `<${componentName}`;

		if (attrs) {

			for (const attr in attrs) {

				if (attrs.hasOwnProperty(attr)) {
					const value = attrs[attr];
					componentTree += ` ${humps.decamelize(attr, { separator: '-' })}="${value}"`;
				}
			}
		}

		componentTree += '>';

		if (text) {
			componentTree += text;
		}

		if (children) {
			children.forEach(child => componentTree += generateTemplate(child));
		}

		componentTree += `</${componentName}>`;
	}

	return htmlBeautify(componentTree, beatifyCodeStyle);

}

export default generateTemplate;
