/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-25
 */

import test from 'ava';
import getProps from '../props-scanner';

const originalComponentProps = {

	name: String,
	age: [String, Number],
	gender: {
		type: [String, Number],
		default: '不详'
	},
	family: {
		type: Boolean
	},
	god: {
		size: 'auto',
		default() {
			return 'god';
		}
	}

};

const expectedFormattedProps = {
	name: {
		type: ['String']
	},
	age: {
		type: ['String', 'Number']
	},
	gender: {
		type: ['String', 'Number'],
		default: '不详'
	},
	family: {
		type: ['Boolean']
	},
	god: {
		size: 'auto',
		default: 'god'
	}
};

test('props scanner', t => {
	const formattedProps = getProps(originalComponentProps);
	t.deepEqual(formattedProps, expectedFormattedProps);
});

