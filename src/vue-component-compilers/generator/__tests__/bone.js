/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-10
 */

import path from 'path';
import fs from 'fs';
import test from 'ava';
import bone from '../bone';
import config from './fixtures/config';

const resDir = path.join(__dirname, 'fixtures/bone');
const expected = fs.readFileSync(path.join(resDir, 'expected.html'), { encoding: 'UTF-8' });

test('bone', t => {
	t.is(expected, bone(config));
});
