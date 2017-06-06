/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-08
 */

`import _ from 'lodash';

export default function muscle(ModelClass) {

	const model = new ModelClass();

	const data = {};
	const methods = {};

	Object.keys(model).forEach(field => {
		data[field] = model[field];
	});

	Object.getOwnPropertyNames(ModelClass.prototype).forEach(methodName => {
		const method = ModelClass.prototype[methodName];
		if (_.isFunction(method)) {
			methods[methodName] = method;
		}
	});

	return {
		data() {
			return data;
		},
		methods
	};

}
