import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
	experimental: {
		fonts: [
			{
				cssVariable: "--font-sans",
				name: "Inter",
				provider: fontProviders.google(),
				weights: [400, 500, 600, 700, 900],
			},
			{
				cssVariable: "--font-heading",
				name: "Bricolage Grotesque",
				provider: fontProviders.google(),
				weights: [400, 500, 600, 700, 900],
			},
		],
	},

	integrations: [react()],

	vite: {
		plugins: [tailwindcss()],
	},
});
