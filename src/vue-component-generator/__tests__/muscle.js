/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-09
 */

import fs from 'fs';
import path from 'path';
import test from 'ava';
import { js_beautify as jsBeautify } from 'js-beautify';
import muscle from '../muscle';
import { beatifyCodeStyle } from '../constants';

const resDir = path.join(__dirname, 'fixtures/muscle');

test('muscle', t => {
	const modelCode = fs.readFileSync(path.join(resDir, 'Model.js'), { encoding: 'UTF-8' });
	const expected = fs.readFileSync(path.join(resDir, 'expected.js'), { encoding: 'UTF-8' });
	t.is(expected, muscle(modelCode));
});

test('empty statement will be a semi when no import declaration', t => {

	const modelCode = `
		export default class Model {
			name = 'kuitos';
			get name() {
				return 'kuitos' + 1;
			}
		}
	`;

	const expected = `
		;
		export default {
			data() {
				return {
					name: 'kuitos'
				};
			},
			
			methods: {
				get name() {
					return 'kuitos' + 1;
				}
				
			}
		};
	`;

	t.is(jsBeautify(expected, beatifyCodeStyle), muscle(modelCode));
});
