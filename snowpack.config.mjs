export default {
	plugins: ["@snowpack/plugin-dotenv"],
	optimize: {
		bundle: true,
		minify: true,
		target: "es2018",
	},
};
