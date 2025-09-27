import { zayne } from "@zayne-labs/eslint-config";

export default zayne(
	{
		astro: true,
		react: true,
		tailwindcssBetter: true,
	},
	{
		files: ["src/**/*.astro"],
		rules: {
			"stylistic/jsx-self-closing-comp": "off",
			"ts-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "Props" }],
		},
	}
);
