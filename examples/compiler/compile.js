/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-03
 */

import fs from 'fs';
import path from 'path';
import generate from '../../src/vue-component-generator/template';
import config from './config.js';

fs.writeFile(path.resolve(__dirname, '../vue-app/src/components/template.html'), generate(config), 'utf-8', () => console.log('success'));
