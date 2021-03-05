const parse = require('rehype-parse');

const parseOptions = {
	emitParseErrors: true,
	fragment: true,
};

const plugins = [[parse, parseOptions]];
const settings = {};

module.exports = {
	plugins: plugins,
	settings: settings,
};
