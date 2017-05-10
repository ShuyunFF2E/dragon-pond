/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-08
 */

import fs from 'fs';
import bone from './bone';
import muscle from './muscle';
import { beatifyCodeStyle, modelDir } from './meta';
import { html_beautify as htmlBeautify } from 'js-beautify';

export default config => {

	const template = bone(config);
	const muscleScript = muscle(fs.readFileSync(`${modelDir}/${config.model}`, { encoding: 'UTF-8' }));

	return htmlBeautify(`<template>\n${template}\n</template><script>${muscleScript}</script>`, beatifyCodeStyle);
};
