const copy = require('./utils-copy.js');

//# copy other miscellaneous file to dist
Promise.all([
	copy(['./README.md', './dist'], {up: 2}).then(console.log),
	copy(['./package.json', './dist'], {up: 2}).then(console.log)
])
	.catch(err => console.log(err));
