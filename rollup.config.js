import { resolve } from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescriptPlugin from 'rollup-plugin-typescript';
import typescript from 'typescript';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import rebaseAssets from 'rollup-plugin-rebase';
import { uglify } from 'rollup-plugin-uglify';

import { dependencies } from './package.json';

export default {
	input: resolve(__dirname, './src/index.ts'),
	output: {
		file: 'index.js',
		format: 'cjs',
		dir: resolve(__dirname, './dist'),
	},
	plugins: [
		/**
		 * Replace strings (NODE_ENV) in files if any
		 */
		replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
		}),

		/**
		 * Locate modules using Node resolution algorithm,
		 * so that we can use third party modules in node_module
		 */
		nodeResolve({
			jsnext: true,
			main: true,
			browser: true,
		}),

		/**
		 * Converts CommonJS modules to ES6
		 * so that won't breaks Rollup
		 */
		commonjs({
      include: 'node_modules/**'
		}),

		postcss({
			modules: true, //# enable css-modules,
			use: [
				['sass', { //# using sass, enable configuration
					includePaths: [resolve(__dirname, 'src/styles')] //# path to look for imported files
				}]
			]
		}),

		/**
		 * Compiles Typescript to standard Javascript
		 * Configuration can be found in `tsconfig.json`
		 */
		typescriptPlugin({
			typescript,
		}),

		/**
		 * Minifies bundle file
		 */
		// uglify(),

		/**
		 * Show bundled file size
		 */
		filesize(),

		/**
		 * Copy assets
		 */
		// url({
		// 	limit: 0, //# make sure all files to e copied to the destination folder
		// 	publicPath: 'src/images'
		// })
		rebaseAssets()
	],

	/**
	 * Set all of the package depedencies as external modules,
	 * so that it won't be included in bundle file
	 */
	external: [...Object.keys(dependencies)],
};
