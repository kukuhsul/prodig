import { resolve } from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescriptPlugin from 'rollup-plugin-typescript';
import typescript from 'typescript';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import { uglify } from 'rollup-plugin-uglify';

import { dependencies } from './package.json';

export default {
	input: resolve(__dirname, './src/index.ts'), //# [DEV]
	output: {
		file: 'index.js',
		format: 'cjs',
		dir: resolve(__dirname, './dist'),
		sourcemap: 'inline',
	},
	plugins: [
		/*
		 * Replace strings (NODE_ENV) in files if any
		 */
		replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
		}),

		/*
		 * Locate modules using Node resolution algorithm,
		 * so that we can use third party modules in node_module
		 */
		nodeResolve({
			jsnext: true,
			main: true,
			browser: true,
		}),

		/*
		 * Converts CommonJS modules to ES6
		 * so that won't breaks Rollup
		 */
		commonjs({
      include: 'node_modules/**'
		}),


		// TODO: should extract and also bundled css modules
		postcss({
			modules: true,
			plugins: [
				autoprefixer(),
			]
		}),
		// postcss({
		// 	extract: true,
		// 	plugins: [
		// 		autoprefixer(),
		// 	]
		// }),

		/*
		 * Compiles Typescript to standards-based Javascript
		 * Configuration can be found in `tsconfig.json`
		 */
		typescriptPlugin({
			typescript,
		}),

		uglify(),

		/*
		 * Show bundled file size
		 */
		filesize(),
	],

	/*
	 * Set all of the package depedencies as external modules,
	 * so that it won't be included in bundle file
	 */
	external: [...Object.keys(dependencies)],
};
