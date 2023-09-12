# craco-plugin-standalone-single-spa

Craco plugin to start [single-spa](https://single-spa.js.org/) application configured with [craco-plugin-single-spa-application](https://www.npmjs.com/package/craco-plugin-single-spa-application)

![](https://img.shields.io/npm/v/craco-plugin-standalone-single-spa.svg?style=flat)
![](https://img.shields.io/npm/l/craco-plugin-standalone-single-spa.svg?style=flat)
![](https://img.shields.io/npm/dt/craco-plugin-standalone-single-spa.svg?style=flat)

## Dependencies

This package depends on craco-plugin-single-spa-application and CRACO so be sure to configure it before trying to apply this.

## Installation

```
npm install craco-plugin-standalone-single-spa --save-dev
```

or 

```
yarn add -D craco-plugin-standalone-single-spa
```

## Usage

1. Open the `craco.config.js` file and apply the following changes:

```typescript
const SingleSpaAppcracoPlugin = require('craco-plugin-single-spa-application');
const StandaloneSingleSpaPlugin = require("craco-plugin-standalone-single-spa");

// This is configuration of craco-plugin-single-spa-application. See documentation of craco-plugin-single-spa-application package for more details.
const singleSpaAppPlugin = {
  plugin: SingleSpaAppcracoPlugin,
  options: {
    orgName: "my-org",
    projectName: "my-app",
  },
}

const singleSpaStandalonePlugin = {
  plugin: StandaloneSingleSpaPlugin,
  options: {
    appOrParcelName: "@my-org/my-app",
    disabled: false // defaults to process.env.NODE_ENV !== "development". if true plugin will not process code
  },
}

// Keep any other configuration you are exporting from CRACO and add the plugin to the plugins array
module.exports = {
  plugins: [
    singleSpaAppPlugin,
    singleSpaStandalonePlugin
  ]
}
```

2. Run `yarn craco start` to start development server on port 3000. Port may be changed by setting PORT environment variable.

## License

Licensed under the MIT License, Copyright ©️ 2023 Yevhen Domnenko. See [LICENSE](LICENSE) for more information.
