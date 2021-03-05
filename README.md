# config-rehype-lint

_config-rehype-lint_ is a configuration preset for [rehype-parse] used by [config-rehype] and the [fundamend.dev] ecosystem.

## Installation

Use your favorite Node.js package manager, for example [npm], like so:

    npm install --save-dev @fundamend/config-rehype-lint

... or [yarn], like so:

    yarn add --dev @fundamend/config-rehype-lint

## Usage

In your [.rehyperc.js], import _config-rehype-lint_ and add it to the plugins array, like so:

```js
const lint = require('@fundamend/config-rehype-lint');

const plugins = [lint];
const settings = {};

module.exports = {
	plugins: plugins,
	settings: settings,
};
```

## License

[MIT]

[fundamend.dev]: https://fundamend.dev
[mit]: https://choosealicense.com/licenses/mit/
[npm]: https://www.npmjs.com/
[config-rehype]: https://github.com/fundamend/config-rehype
[rehype-parse]: https://github.com/rehypejs/rehype/tree/master/packages/rehype-parse
[.rehyperc.js]: https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md
[yarn]: https://yarnpkg.com/
