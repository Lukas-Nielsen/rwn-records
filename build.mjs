import * as esbuild from "esbuild";

let result = await esbuild.build({
	entryPoints: ["src/index.tsx"],
	bundle: true,
	outfile: "public/assets/app.js",
	loader: { ".js": "jsx" },
	minify: true,
});
console.log(result);
