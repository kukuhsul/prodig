const copy = require('./utils-copy.js');

Promise.all([
	copy(['./src/images/**/*', './dist/images'], {up: 2}).then(console.log),
	copy(['./src/fonts/**/*', './dist/fonts'], {up: 2}).then(console.log)
])
	.catch(err => console.log(err));
