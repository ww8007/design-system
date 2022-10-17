module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-vite'
	},
	features: {
		storyStoreV7: true,
		interactionsDebugger: true
	},
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			loader: require.resolve('babel-loader'),
			options: {
				presets: [
					['react-app', { flow: false, typescript: true }],
					require.resolve('@emotion/babel-preset-css-prop')
				]
			}
		});
		config.resolve.extensions.push('.ts', '.tsx');
		config.resolve.alias = {
			...config.resolve.alias,
			'@emotion/core': toPath('node_modules/@emotion/react'),
			'@emotion/styled': toPath('node_modules/@emotion/styled'),
			'emotion-theming': toPath('node_modules/@emotion/react')
		};
		return config;
	}
};
