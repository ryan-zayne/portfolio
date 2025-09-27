import type { NavConfig } from "@/types";

export const navConfig: NavConfig = {
	items: [
		{
			href: "/",
			title: "Home",
		},
		{
			disabled: true, // Pending Feature Built
			href: "/blog",
			title: "Blog",
			wip: true,
		},
		{
			href: "#tools",
			title: "Tools",
		},
		{
			href: "#projects",
			title: "Projects",
		},
	],
};
