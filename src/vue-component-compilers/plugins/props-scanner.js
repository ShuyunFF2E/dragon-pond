/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-25
 */

import _ from 'lodash';

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType(fn) {
	const match = fn && fn.toString().match(/^\s*function (\w+)/);
	return match ? match[1] : '';
}

export default function getProps(originVueComponentProps) {

	const props = {};

	Object.keys(originVueComponentProps).forEach(prop => {

		const value = originVueComponentProps[prop];
		let formattedProps = null;

		if (_.isFunction(value)) {
			formattedProps = { type: [getType(value)]};
		} else if (_.isArray(value)) {
			// eslint-disable-next-line no-extra-parens
			formattedProps = { type: value.map(v => getType(v)) };
		} else if (_.isFunction(value.type)) {
			formattedProps = { ...value, type: [getType(value.type)]};
		} else if (_.isArray(value.type)) {
			// eslint-disable-next-line no-extra-parens
			formattedProps = { ...value, type: value.type.map(v => getType(v)) };
		} else {
			formattedProps = value;
		}

		if (_.isFunction(formattedProps.default)) {
			formattedProps.default = formattedProps.default();
		}

		props[prop] = formattedProps;

	});

	return props;
}
