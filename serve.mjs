import { typecheckPlugin } from "@jgoz/esbuild-plugin-typecheck";
import * as esbuild from "esbuild";

let ctx = await esbuild.context({
	entryPoints: ["src/index.tsx"],
	bundle: true,
	outfile: "public/assets/app.js",
	define: {
		"process.env.NODE_ENV": '"development"',
	},
	plugins: [typecheckPlugin({ watch: true })],
});

await ctx.watch();

let { host, port } = await ctx.serve({
	servedir: "public",
	port: 3000,
});
