System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "accounting": "npm:accounting@0.4.1",
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.6",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.3",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-materialize-bridge": "npm:aurelia-materialize-bridge@0.20.0",
    "aurelia-notification": "npm:aurelia-notification@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.0.7",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "css": "github:systemjs/plugin-css@0.1.32",
    "humane-js": "npm:humane-js@3.2.2",
    "localforage": "npm:localforage@1.4.3",
    "material-design-icons": "npm:material-design-icons@3.0.1",
    "materialize": "npm:materialize@1.0.0",
    "materialize-css": "npm:materialize-css@0.97.8",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:Dogfalo/materialize@0.97.8": {
      "css": "github:systemjs/plugin-css@0.1.32",
      "jquery": "npm:jquery@2.2.4"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:accounting@0.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:amdefine@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.2"
    },
    "npm:aurelia-binding@1.0.9": {
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
    },
    "npm:aurelia-bootstrapper@1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.6",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.7",
      "aurelia-templating": "npm:aurelia-templating@1.1.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
    },
    "npm:aurelia-dependency-injection@1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.1.1"
    },
    "npm:aurelia-framework@1.0.6": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.2"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-http-client@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-i18n@1.2.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
      "i18next": "npm:i18next@3.5.2",
      "intl": "npm:intl@1.2.5"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.1.1"
    },
    "npm:aurelia-materialize-bridge@0.20.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.7",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.2",
      "jquery": "npm:jquery@2.2.4",
      "materialize": "github:Dogfalo/materialize@0.97.8"
    },
    "npm:aurelia-metadata@1.0.2": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-notification@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
      "aurelia-i18n": "npm:aurelia-i18n@1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "extend": "npm:extend@3.0.0",
      "humane-js": "npm:humane-js@3.2.2"
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.0.7": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.1.2"
    },
    "npm:aurelia-templating-resources@1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
      "aurelia-templating": "npm:aurelia-templating@1.1.2"
    },
    "npm:aurelia-templating-router@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.7",
      "aurelia-templating": "npm:aurelia-templating@1.1.2"
    },
    "npm:aurelia-templating@1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.9",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:es3ify@0.1.4": {
      "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb",
      "jstransform": "npm:jstransform@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima-fb@3001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:falafel@1.2.0": {
      "acorn": "npm:acorn@1.2.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "foreach": "npm:foreach@2.0.5",
      "isarray": "npm:isarray@0.0.1",
      "object-keys": "npm:object-keys@1.0.11"
    },
    "npm:i18next@3.5.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:immediate@3.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inline-process-browser@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "falafel": "npm:falafel@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@0.6.5"
    },
    "npm:intl@1.2.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jstransform@3.0.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:lie@3.0.2": {
      "es3ify": "npm:es3ify@0.1.4",
      "immediate": "npm:immediate@3.0.6",
      "inline-process-browser": "npm:inline-process-browser@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "unreachable-branch-transform": "npm:unreachable-branch-transform@0.3.0"
    },
    "npm:localforage@1.4.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "lie": "npm:lie@3.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:materialize-css@0.97.8": {
      "css": "github:systemjs/plugin-css@0.1.32",
      "jquery": "github:components/jquery@3.1.1"
    },
    "npm:materialize@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:readable-stream@1.0.34": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:recast@0.10.43": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.15",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.0.34"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.34",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:unreachable-branch-transform@0.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esmangle-evaluator": "npm:esmangle-evaluator@1.0.1",
      "recast": "npm:recast@0.10.43",
      "through2": "npm:through2@0.6.5"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  depCache: {
    "app-base.js": [
      "app"
    ],
    "app.js": [
      "aurelia-framework",
      "session",
      "net",
      "notifier",
      "models/portfolio"
    ],
    "components/nav/lookup.js": [
      "aurelia-framework",
      "stock-api",
      "app",
      "models/stock"
    ],
    "components/portfolio.js": [
      "app-base",
      "accounting"
    ],
    "components/portfolio/stock-view.js": [
      "aurelia-framework"
    ],
    "components/stock.js": [
      "aurelia-framework",
      "app-base"
    ],
    "components/third-party/numeric-input.js": [
      "aurelia-framework"
    ],
    "dependencies.js": [
      "material-design-icons/iconfont/material-icons.css!",
      "materialize-css/dist/css/materialize.css!",
      "material-design-icons"
    ],
    "main.js": [
      "./dependencies"
    ],
    "models/portfolio.js": [
      "models/portfolio-stock"
    ],
    "net.js": [
      "aurelia-http-client",
      "aurelia-framework"
    ],
    "notifier.js": [
      "aurelia-framework",
      "aurelia-notification",
      "humane-js/themes/libnotify.css!"
    ],
    "session.js": [
      "localforage",
      "models/portfolio"
    ],
    "stock-api.js": [
      "aurelia-framework",
      "app"
    ],
    "welcome.js": [
      "app-base"
    ]
  },
  bundles: {
    "app-build.js": [
      "app-base.js",
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "components/nav/lookup.html!github:systemjs/plugin-text@0.0.8.js",
      "components/nav/lookup.js",
      "components/nav/restart.html!github:systemjs/plugin-text@0.0.8.js",
      "components/portfolio.html!github:systemjs/plugin-text@0.0.8.js",
      "components/portfolio.js",
      "components/portfolio/stock-view.html!github:systemjs/plugin-text@0.0.8.js",
      "components/portfolio/stock-view.js",
      "components/stock.html!github:systemjs/plugin-text@0.0.8.js",
      "components/stock.js",
      "components/third-party/numeric-input.html!github:systemjs/plugin-text@0.0.8.js",
      "components/third-party/numeric-input.js",
      "dependencies.js",
      "exchange.html!github:systemjs/plugin-text@0.0.8.js",
      "exchange.js",
      "just-landed.html!github:systemjs/plugin-text@0.0.8.js",
      "main.js",
      "models/portfolio-stock.js",
      "models/portfolio.js",
      "models/stock.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.8.js",
      "net.js",
      "notifier.js",
      "session.js",
      "stock-api.js",
      "styles.css!github:systemjs/plugin-text@0.0.8.js",
      "welcome.html!github:systemjs/plugin-text@0.0.8.js",
      "welcome.js"
    ],
    "aurelia.js": [
      "github:components/jquery@3.1.1.js",
      "github:components/jquery@3.1.1/jquery.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:systemjs/plugin-css@0.1.32.js",
      "github:systemjs/plugin-css@0.1.32/css.js",
      "github:systemjs/plugin-text@0.0.8.js",
      "github:systemjs/plugin-text@0.0.8/text.js",
      "npm:accounting@0.4.1.js",
      "npm:accounting@0.4.1/accounting.js",
      "npm:aurelia-animator-css@1.0.1.js",
      "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.9.js",
      "npm:aurelia-binding@1.0.9/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.2.0.js",
      "npm:aurelia-dependency-injection@1.2.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0.js",
      "npm:aurelia-event-aggregator@1.0.0/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.1.js",
      "npm:aurelia-fetch-client@1.0.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.6.js",
      "npm:aurelia-framework@1.0.6/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-http-client@1.0.3.js",
      "npm:aurelia-http-client@1.0.3/aurelia-http-client.js",
      "npm:aurelia-i18n@1.2.1.js",
      "npm:aurelia-i18n@1.2.1/aurelia-i18n.js",
      "npm:aurelia-i18n@1.2.1/base-i18n.js",
      "npm:aurelia-i18n@1.2.1/defaultTranslations/relative.time.js",
      "npm:aurelia-i18n@1.2.1/df.js",
      "npm:aurelia-i18n@1.2.1/i18n.js",
      "npm:aurelia-i18n@1.2.1/nf.js",
      "npm:aurelia-i18n@1.2.1/relativeTime.js",
      "npm:aurelia-i18n@1.2.1/rt.js",
      "npm:aurelia-i18n@1.2.1/t.js",
      "npm:aurelia-i18n@1.2.1/utils.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.1.1.js",
      "npm:aurelia-logging@1.1.1/aurelia-logging.js",
      "npm:aurelia-materialize-bridge@0.20.0.js",
      "npm:aurelia-materialize-bridge@0.20.0/autocomplete/autocomplete.js",
      "npm:aurelia-materialize-bridge@0.20.0/badge/badge.js",
      "npm:aurelia-materialize-bridge@0.20.0/box/box.js",
      "npm:aurelia-materialize-bridge@0.20.0/breadcrumbs/breadcrumbs.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/breadcrumbs/breadcrumbs.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/breadcrumbs/breadcrumbs.js",
      "npm:aurelia-materialize-bridge@0.20.0/breadcrumbs/instructionFilter.js",
      "npm:aurelia-materialize-bridge@0.20.0/button/button.js",
      "npm:aurelia-materialize-bridge@0.20.0/card/card.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/card/card.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/card/card.js",
      "npm:aurelia-materialize-bridge@0.20.0/carousel/carousel-item.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/carousel/carousel-item.js",
      "npm:aurelia-materialize-bridge@0.20.0/carousel/carousel.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/carousel/carousel.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/carousel/carousel.js",
      "npm:aurelia-materialize-bridge@0.20.0/char-counter/char-counter.js",
      "npm:aurelia-materialize-bridge@0.20.0/checkbox/checkbox.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/checkbox/checkbox.js",
      "npm:aurelia-materialize-bridge@0.20.0/chip/chip.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/chip/chip.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/chip/chip.js",
      "npm:aurelia-materialize-bridge@0.20.0/chip/chips.js",
      "npm:aurelia-materialize-bridge@0.20.0/click-counter.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/collapsible/collapsible.js",
      "npm:aurelia-materialize-bridge@0.20.0/collection/collection-header.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/collection/collection-header.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/collection/collection-header.js",
      "npm:aurelia-materialize-bridge@0.20.0/collection/collection-item.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/collection/collection-item.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/collection/collection-item.js",
      "npm:aurelia-materialize-bridge@0.20.0/collection/collection.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/collection/collection.js",
      "npm:aurelia-materialize-bridge@0.20.0/collection/md-collection-selector.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/collection/md-collection-selector.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/collection/md-collection-selector.js",
      "npm:aurelia-materialize-bridge@0.20.0/colors/colorValueConverters.js",
      "npm:aurelia-materialize-bridge@0.20.0/colors/md-colors.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/colors/md-colors.js",
      "npm:aurelia-materialize-bridge@0.20.0/common/attributeManager.js",
      "npm:aurelia-materialize-bridge@0.20.0/common/attributes.js",
      "npm:aurelia-materialize-bridge@0.20.0/common/constants.js",
      "npm:aurelia-materialize-bridge@0.20.0/common/events.js",
      "npm:aurelia-materialize-bridge@0.20.0/common/polyfills.js",
      "npm:aurelia-materialize-bridge@0.20.0/config-builder.js",
      "npm:aurelia-materialize-bridge@0.20.0/datepicker/datepicker-default-parser.js",
      "npm:aurelia-materialize-bridge@0.20.0/datepicker/datepicker.js",
      "npm:aurelia-materialize-bridge@0.20.0/dropdown/dropdown-element.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/dropdown/dropdown-element.js",
      "npm:aurelia-materialize-bridge@0.20.0/dropdown/dropdown-fix.js",
      "npm:aurelia-materialize-bridge@0.20.0/dropdown/dropdown.js",
      "npm:aurelia-materialize-bridge@0.20.0/exports.js",
      "npm:aurelia-materialize-bridge@0.20.0/fab/fab.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/fab/fab.js",
      "npm:aurelia-materialize-bridge@0.20.0/file/file.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/file/file.js",
      "npm:aurelia-materialize-bridge@0.20.0/footer/footer.js",
      "npm:aurelia-materialize-bridge@0.20.0/index.js",
      "npm:aurelia-materialize-bridge@0.20.0/input/input-prefix.js",
      "npm:aurelia-materialize-bridge@0.20.0/input/input-update-service.js",
      "npm:aurelia-materialize-bridge@0.20.0/input/input.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/input/input.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/input/input.js",
      "npm:aurelia-materialize-bridge@0.20.0/modal/modal-trigger.js",
      "npm:aurelia-materialize-bridge@0.20.0/modal/modal.js",
      "npm:aurelia-materialize-bridge@0.20.0/navbar/navbar.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/navbar/navbar.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/navbar/navbar.js",
      "npm:aurelia-materialize-bridge@0.20.0/pagination/pagination.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/pagination/pagination.js",
      "npm:aurelia-materialize-bridge@0.20.0/parallax/parallax.js",
      "npm:aurelia-materialize-bridge@0.20.0/progress/progress.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/progress/progress.js",
      "npm:aurelia-materialize-bridge@0.20.0/pushpin/pushpin.js",
      "npm:aurelia-materialize-bridge@0.20.0/radio/radio.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/radio/radio.js",
      "npm:aurelia-materialize-bridge@0.20.0/range/range.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/range/range.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/range/range.js",
      "npm:aurelia-materialize-bridge@0.20.0/scrollfire/scrollfire-patch.js",
      "npm:aurelia-materialize-bridge@0.20.0/scrollfire/scrollfire-target.js",
      "npm:aurelia-materialize-bridge@0.20.0/scrollfire/scrollfire.js",
      "npm:aurelia-materialize-bridge@0.20.0/scrollspy/scrollspy.js",
      "npm:aurelia-materialize-bridge@0.20.0/select/select.js",
      "npm:aurelia-materialize-bridge@0.20.0/sidenav/sidenav-collapse.js",
      "npm:aurelia-materialize-bridge@0.20.0/sidenav/sidenav.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/sidenav/sidenav.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/sidenav/sidenav.js",
      "npm:aurelia-materialize-bridge@0.20.0/slider/slider.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/slider/slider.js",
      "npm:aurelia-materialize-bridge@0.20.0/switch/switch.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/switch/switch.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.0/switch/switch.js",
      "npm:aurelia-materialize-bridge@0.20.0/tabs/tabs.js",
      "npm:aurelia-materialize-bridge@0.20.0/toast/toastService.js",
      "npm:aurelia-materialize-bridge@0.20.0/tooltip/tooltip.js",
      "npm:aurelia-materialize-bridge@0.20.0/transitions/fadein-image.js",
      "npm:aurelia-materialize-bridge@0.20.0/transitions/staggered-list.js",
      "npm:aurelia-materialize-bridge@0.20.0/validation/validationRenderer.js",
      "npm:aurelia-materialize-bridge@0.20.0/waves/waves.js",
      "npm:aurelia-materialize-bridge@0.20.0/well/md-well.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-metadata@1.0.2.js",
      "npm:aurelia-metadata@1.0.2/aurelia-metadata.js",
      "npm:aurelia-notification@1.0.0.js",
      "npm:aurelia-notification@1.0.0/aurelia-notification.js",
      "npm:aurelia-pal-browser@1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0.js",
      "npm:aurelia-pal@1.0.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.1.1.js",
      "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.7.js",
      "npm:aurelia-router@1.0.7/aurelia-router.js",
      "npm:aurelia-task-queue@1.1.0.js",
      "npm:aurelia-task-queue@1.1.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.1.1.js",
      "npm:aurelia-templating-resources@1.1.1/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.1.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.1.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.1.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.1.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.1.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.1.1/compose.js",
      "npm:aurelia-templating-resources@1.1.1/css-resource.js",
      "npm:aurelia-templating-resources@1.1.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.1.1/focus.js",
      "npm:aurelia-templating-resources@1.1.1/hide.js",
      "npm:aurelia-templating-resources@1.1.1/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.1.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.1.1/if.js",
      "npm:aurelia-templating-resources@1.1.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.1.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.1.1/repeat.js",
      "npm:aurelia-templating-resources@1.1.1/replaceable.js",
      "npm:aurelia-templating-resources@1.1.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.1.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/show.js",
      "npm:aurelia-templating-resources@1.1.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/with.js",
      "npm:aurelia-templating-router@1.0.0.js",
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0/router-view.js",
      "npm:aurelia-templating@1.1.2.js",
      "npm:aurelia-templating@1.1.2/aurelia-templating.js",
      "npm:extend@3.0.0.js",
      "npm:extend@3.0.0/index.js",
      "npm:humane-js@3.2.2.js",
      "npm:humane-js@3.2.2/humane.js",
      "npm:humane-js@3.2.2/themes/libnotify.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:i18next@3.5.2.js",
      "npm:i18next@3.5.2/dist/commonjs/BackendConnector.js",
      "npm:i18next@3.5.2/dist/commonjs/CacheConnector.js",
      "npm:i18next@3.5.2/dist/commonjs/EventEmitter.js",
      "npm:i18next@3.5.2/dist/commonjs/Interpolator.js",
      "npm:i18next@3.5.2/dist/commonjs/LanguageUtils.js",
      "npm:i18next@3.5.2/dist/commonjs/PluralResolver.js",
      "npm:i18next@3.5.2/dist/commonjs/ResourceStore.js",
      "npm:i18next@3.5.2/dist/commonjs/Translator.js",
      "npm:i18next@3.5.2/dist/commonjs/compatibility/v1.js",
      "npm:i18next@3.5.2/dist/commonjs/defaults.js",
      "npm:i18next@3.5.2/dist/commonjs/i18next.js",
      "npm:i18next@3.5.2/dist/commonjs/index.js",
      "npm:i18next@3.5.2/dist/commonjs/logger.js",
      "npm:i18next@3.5.2/dist/commonjs/postProcessor.js",
      "npm:i18next@3.5.2/dist/commonjs/utils.js",
      "npm:i18next@3.5.2/index.js",
      "npm:localforage@1.4.3.js",
      "npm:localforage@1.4.3/dist/localforage.js",
      "npm:material-design-icons@3.0.1.js",
      "npm:material-design-icons@3.0.1/index.js",
      "npm:materialize-css@0.97.8.js",
      "npm:materialize-css@0.97.8/dist/css/materialize.css!github:systemjs/plugin-css@0.1.32.js",
      "npm:materialize-css@0.97.8/dist/js/materialize.js",
      "npm:process@0.11.9.js",
      "npm:process@0.11.9/browser.js"
    ]
  }
});