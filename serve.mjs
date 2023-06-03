import { typecheckPlugin } from "@jgoz/esbuild-plugin-typecheck";
import * as esbuild from "esbuild";
import eslint from "esbuild-plugin-eslint";

let ctx = await esbuild.context({
	entryPoints: ["src/index.tsx"],
	bundle: true,
	outfile: "public/assets/app.js",
	define: {
		"process.env.NODE_ENV": '"development"',
	},
	plugins: [typecheckPlugin({ watch: true }), eslint()],
});

await ctx.watch();

await ctx.serve({
	servedir: "public",
	port: 3000,
});
