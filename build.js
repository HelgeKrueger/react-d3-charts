const { build } = require("esbuild");
const { peerDependencies } = require("./package.json");

const entryFile = "src/index.js";
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  external: Object.keys(peerDependencies),
  logLevel: "info",
  loader: { ".js": "jsx" },
  // minify: true,
  sourcemap: true,
};

build({
  ...shared,
  format: "esm",
  outfile: "./dist/index.esm.js",
});

build({
  ...shared,
  format: "cjs",
  outfile: "./dist/index.cjs.js",
});
