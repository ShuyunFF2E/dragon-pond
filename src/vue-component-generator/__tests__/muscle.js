/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-09
 */

import fs from 'fs';
import path from 'path';
import muscle from '../muscle';
import test from 'ava';

const resDir = path.join(__dirname, 'fixtures/muscle');
const modelCode = fs.readFileSync(path.join(resDir, 'Model.js'), { encoding: 'UTF-8' });
const expected = fs.readFileSync(path.join(resDir, 'expected.js'), { encoding: 'UTF-8' });

test('muscle', t => {
	t.is(expected, muscle(modelCode));
});
