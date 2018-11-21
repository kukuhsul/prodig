const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");

module.exports = (baseConfig, env, defaultConfig) => {
	defaultConfig.module.rules.push({
		test: /\.scss$/,
		use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: {
					url: false,
					import: false,
					module: true,
					namedExport: true,
					importLoaders: 2,
				}
			},
			'postcss-loader', //# run postcss plugins (e.g. autoprefixer)
			{
				loader: 'sass-loader', //# parse scss into css
				options: {
					inludePaths: [path.resolve(__dirname, './src/styles')] //# path to look for imported files
				}
			}
		]
	});

	defaultConfig.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve("awesome-typescript-loader")
	});

	defaultConfig.plugins.push(new TSDocgenPlugin());
	defaultConfig.resolve.extensions.push(".ts", ".tsx");

	return defaultConfig;
};
