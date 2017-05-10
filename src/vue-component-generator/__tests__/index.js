/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-10
 */

import fs from 'fs';
import path from 'path';
import test from 'ava';
import generate from '../index';
import config from './fixtures/config';

const resDir = path.join(__dirname, 'fixtures/index');
const expected = fs.readFileSync(path.join(resDir, 'expected.vue'), { encoding: 'UTF-8' });

test('bone', t => {
	t.is(expected, generate(config));
});
