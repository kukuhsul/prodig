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
		//# then make scss '@import' statement for each style
		const componentsSass = glob
			.sync(join(distStyles, 'components/**/*.scss'))
			.map(absolutePath => relative(distStyles, absolutePath).replace('.scss', ''))
			.map(relativePath => `@import '${relativePath}';`)
			.join('\n');

		//# generate _components.scss that importing all component-level style
		outputFileSync(`${distStyles}/_components.scss`, componentsSass)
	})
	.then(() => {
		console.log('SAAS-BUILD: [SUCCESS] generated _components.scss');

		//# write 'dist/styles/styles.scss'
		//# contain @import 'components';
		outputFileSync(`${distStyles}/styles.scss`, `@import 'components';\n`)
	})
	.then(() => {
		console.log('SAAS-BUILD: [SUCCESS] generated dist/styles/styles.scss')

		//# read 'src/styles/styles.scss'
		return readFileSync(resolve(root, 'src/styles/styles.scss'));
	}, err => {
		console.error(`SASS-BUILD: [ERROR] can't create dist/styles/styles.scss file.`);
		console.log(err);
	})
	.then(srcStyles => {
		//# append src/styles/styles.scss to dist/styles/styles.scss
		appendFileSync(`${distStyles}/styles.scss`, srcStyles);
	}, err => {
		console.error(`SASS-BUILD: [ERROR] can't read dist/styles/styles.scss file.`);
		console.error(err);
	})
	.catch(err => {
		console.error(`SASS-BUILD: [ERROR] can't modify dist/styles/styles.scss file.`);
		console.error(err);
	})
	.then(() => {
		readFileSync(resolve(root, 'src/styles/styles.scss'));
	})
	.then(() => {
		//# compile scss into css
		return sass({
			'file': join(distStyles, 'styles.scss'),
			'outFile': join(distStyles, 'styles.css')
		})
	}, err => {
		console.error(`SASS-BUILD: [ERROR] can't read dist/styles/styles.scss file.`);
		console.error(err);
	})
	.then(sassBuild => {
		const ctx = { from: join(distStyles, 'styles.css'), to: join(distStyles, 'styles.css') };

		//# load postcss config, additional ctx
		return postcssrc(ctx).then(({plugins, options}) => {
			//# run postcss
			return postcss(plugins)
				.process(sassBuild.css, options)
		})
	}, err => {
		console.error(`SASS-BUILD: [ERROR] node-sass error`);
		console.error(`Error in ${relative(distStyles, err.file)} at line: ${err.line} column:${err.column}.`);
		console.log(`Message: ${err.message}`);
    process.exit(1);
	})
	.then(postcssBuild => {
		outputFileSync(join(distStyles, 'styles.css'), postcssBuild.css);
	}, err => {
		console.error(`SASS-BUILD: [ERROR] postcss error`);
		console.error(err);
	})
	.then(() => {
		console.log(`SASS-BUILD: [SUCCESS] generated dist/styles/styles.css`);
	}, err => {
		console.error(`SASS-BUILD: [ERROR] can't write styles.css`);
		console.error(err);
	});


// TODO: add css sourcemap
