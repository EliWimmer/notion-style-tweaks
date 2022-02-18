"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rollupPluginSvelte = _interopRequireDefault(require("rollup-plugin-svelte"));

var _pluginCommonjs = _interopRequireDefault(require("@rollup/plugin-commonjs"));

var _pluginNodeResolve = _interopRequireDefault(require("@rollup/plugin-node-resolve"));

var _rollupPluginLivereload = _interopRequireDefault(require("rollup-plugin-livereload"));

var _rollupPluginTerser = require("rollup-plugin-terser");

var _sveltePreprocess = _interopRequireWildcard(require("svelte-preprocess"));

var _rollupPluginCssOnly = _interopRequireDefault(require("rollup-plugin-css-only"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var production = !process.env.ROLLUP_WATCH;

function serve() {
  var server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle: function writeBundle() {
      if (server) return;
      server = require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
        stdio: ["ignore", "inherit", "inherit"],
        shell: true
      });
      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    }
  };
}

var _default = [{
  input: "src/scripts/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js"
  },
  plugins: [(0, _rollupPluginSvelte["default"])({
    compilerOptions: {
      // enable run-time checks when not in production
      dev: production
    },
    preprocess: (0, _sveltePreprocess["default"])({})
  }), // we'll extract any component CSS out into
  // a separate file - better for performance
  (0, _rollupPluginCssOnly["default"])({
    output: "bundle.css"
  }), // If you have external dependencies installed from
  // npm, you'll most likely need these plugins. In
  // some cases you'll need additional configuration -
  // consult the documentation for details:
  // https://github.com/rollup/plugins/tree/master/packages/commonjs
  (0, _pluginNodeResolve["default"])({
    browser: true,
    dedupe: ["svelte"]
  }), (0, _pluginCommonjs["default"])(), // In dev mode, call `npm run start` once
  // the bundle has been generated
  !production && serve(), // Watch the `public` directory and refresh the
  // browser on changes when not in production
  !production && (0, _rollupPluginLivereload["default"])("public"), // If we're building for production (npm run build
  // instead of npm run dev), minify
  production && (0, _rollupPluginTerser.terser)()],
  watch: {
    clearScreen: false
  }
}, {
  input: "src/scripts/injection.js",
  output: {
    sourcemap: false,
    format: "iife",
    file: "public/build/injection.js"
  },
  plugins: [(0, _pluginNodeResolve["default"])(), (0, _pluginCommonjs["default"])()],
  watch: {
    clearScreen: false
  }
}, {
  input: "src/scripts/update.js",
  output: {
    sourcemap: false,
    format: "iife",
    file: "public/build/update.js"
  },
  plugins: [(0, _pluginNodeResolve["default"])(), (0, _pluginCommonjs["default"])()],
  watch: {
    clearScreen: false
  }
}, {
  input: "src/scripts/background.js",
  output: {
    sourcemap: false,
    format: "iife",
    file: "public/build/background.js"
  },
  plugins: [(0, _pluginNodeResolve["default"])(), (0, _pluginCommonjs["default"])()],
  watch: {
    clearScreen: false
  }
}];
exports["default"] = _default;