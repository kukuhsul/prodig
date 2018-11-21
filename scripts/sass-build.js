const glob = require('glob');
const join = require('path').join;
const resolve = require('path').resolve;
const basename = require('path').basename;
const relative = require('path').relative;
const lstatSync = require('fs-extra').lstatSync;
const existsSync = require('fs-extra').existsSync;
const outputFileSync = require('fs-extra').outputFileSync;
const readFileSync = require('fs-extra').readFileSync;
const appendFileSync = require('fs-extra').appendFileSync;
const copy = require('./utils-copy.js');

const postcss = require('postcss');
const postcssrc = require('postcss-load-config');
const sass = require('node-sass').renderSync;

const root = resolve(__dirname, '..');
const dist = resolve(root, 'dist');
const distStyles = resolve(dist, 'styles');

Promise.all([
	//# copy all src/styles to dist/styles
	copy(['./src/styles/**/*.scss', './dist/styles'], {up: 2}).then(console.log),
	//# copy all component-level styles to dist/styles/components
	copy(['./src/components/**/*.scss', './dist/styles/components'], {up: 2}).then(console.log)
])
	.catch(console.error)
	.then(() => {
		//# grab all component-level styles filename,
		const components = glob.sync(join(distStyles, 'components/**/*.scss'));

		//# modify `@import` path statement in component-level style
		//# `../../styles` to `../../`
		components.forEach( componentPath => {
			// console.log(relative(distStyles, component))
			let componentStyle = readFileSync(componentPath, 'utf8');
			componentStyle = componentStyle.replace(new RegExp('../../styles/', 'gi'), '../../');
			outputFileSync(componentPath, componentStyle)
		})
		return components
	})
	.then((components) => {
		console.log('SASS-BUILD: [SUCCESS] component-level styles path has modified from `../../styles` to `../../`');

		//# insert scss '@import' statement for each component into index.scss
		let componentsImport = components
			.map(absolutePath => relative(distStyles, absolutePath).replace('.scss', ''))
			.map(relativePath => `@import '${relativePath}';`)
			.join('\n');
		let styles = readFileSync(join(distStyles, 'index.scss'), "utf8");
		styles = styles.replace('/* WILL_BE_REPLACED_BY_COMPONENTS */', componentsImport);
		outputFileSync(join(distStyles, 'index.scss'), styles)
	})
	.then(() => {
		console.log('SASS-BUILD: [SUCCESS] `@import [component]` statement has generated in index.scss')

		//# build sass into css
		const sassBuild = sass({
			'file': join(distStyles, 'index.scss'),
		});

		//# using PostCSS
		const ctx = {
			from: join(distStyles, 'styles.css'),
			to: join(distStyles, 'styles.css')
		};
		const postcssBuild =  postcssrc(ctx).then(({plugins, options}) => {
			return postcss(plugins)
				.process(sassBuild.css, options)
		})

		return postcssBuild
	})
	.then((postcssBuild) => {
		//# write `dist/styles/index.css`
		outputFileSync(join(distStyles, 'index.css'), postcssBuild.css);
	}).then(() => {
		console.log('SASS-BUILD: [SUCCESS] generated `dist/styles/styles.css`');
	}, err => {
		console.error('SASS-BUILD: [ERROR] cannot generate `dist/styles/styles.css`');
		console.error(err);
	});
