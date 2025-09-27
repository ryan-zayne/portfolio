import type { Project, ProjectCategoryObj } from "@/types";

export const categories: ProjectCategoryObj[] = [
	{
		desc: "In-production projects crafted for businesses at itbey Co.",
		icon: "briefcase",
		title: "itbey Co.",
	},
	{
		desc: "Some 'dumb' ideas I have played or currently playing with.",
		icon: "lightbulb",
		title: "hack",
	},
	{
		desc: "Tools that I've created to (ease steps or) remove repitition from my workflow.",
		icon: "tool",
		title: "tool",
	},
];

export const projects: Project[] = [
	{
		category: "hack",
		desc: "A community-driven dictionary that simplifies software engineering terms.",
		image: "/jargons.dev.png",
		linkText: "Check it out",
		title: "jargons.dev",
		url: "https://jargons.dev",
	},
	{
		category: "tool",
		desc: "A web interface where you convert private key formats.",
		image: "/private-key-converter.png",
		linkText: "Check it out",
		title: "Private Key Converter",
		url: "https://private-key-converter.vercel.app",
	},
	{
		category: "itbey Co.",
		desc: "A product website for an all-in-one HR management software.",
		image: "/robusthr.png",
		linkText: "View Website",
		title: "RobustHR",
		url: "https://robusthr.com",
	},
	{
		category: "itbey Co.",
		desc: "A website developed for logistic and supply chain company in Nigeria.",
		image: "/mfn.png",
		linkText: "View Website",
		title: "Multifreight Nig. Ltd.",
		url: "https://multifreightnig.com",
	},
	{
		category: "itbey Co.",
		desc: "A website developed for a petroleum products trading company in Nigeria.",
		image: "/cisl.png",
		linkText: "Visit Website",
		title: "Cybernetics Oil (CISL)",
		url: "https://cyberneticsoil.com/",
	},
];
