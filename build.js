const { build } = require("esbuild");
const { peerDependencies } = require("./package.json");

const entryFile = "src/index.js";
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  external: Object.keys(peerDependencies),
  logLevel: "info",
  loader: { ".js": "jsx" },
  minify: true,
  sourcemap: true,
};

console.log(shared.external);

build({
  ...shared,
  format: "esm",
  outfile: "./dist/index.esm.js",
  target: ["esnext", "node12.22.0"],
});

build({
  ...shared,
  format: "cjs",
  outfile: "./dist/index.cjs.js",
  target: ["esnext", "node12.22.0"],
});
