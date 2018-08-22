const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
// const

module.exports = (baseConfig, env, config) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve("awesome-typescript-loader")
	});

	config.module.rules.push({
		test: /\.css|.scss$/,
		use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: {
					url: false,
					modules: true,
					namedExport: true,
					// camelCase: 'dashesOnly',
					importLoaders: 2,
				}
			},
			'postcss-loader', //# run postcss plugins (e.g. autoprefixer)
			'sass-loader', //# parse scss into css
		]
	});

	config.plugins.push(new TSDocgenPlugin());
	config.resolve.extensions.push(".ts", ".tsx");

	return config;
};
