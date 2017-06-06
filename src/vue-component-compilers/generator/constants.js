/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-05-10
 */

import path from 'path';

export const beatifyCodeStyle = {
	'indent_with_tabs': true,
	'end_with_newline': true
};

// 设置系统的 model 所在目录(每个系统的 model 应该放在统一目录下)
let modelDir = path.join(path.dirname(require.main.filename));
Object.defineProperty(exports, 'modelDir', {
	get() {
		return modelDir;
	}
});
export function setModelDir(modelAbsolutePath) {
	modelDir = modelAbsolutePath;
}

export const vueMuscleTemplate = `
	IMPORT_MODULES
	export default {
	
		data() {
			return DATA;
		},
	
		methods: METHODS
		
	};`;
