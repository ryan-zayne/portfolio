import { siteConfig } from "@/config/site";
import { cnMerge } from "@/lib/utils/cn";
import type { MainNavItem } from "@/types";
import { useState } from "react";
import { Icons } from "./icons";
import { MobileNav } from "./mobile-nav";
import { Button, buttonVariants } from "./ui/button";

type MainNavProps = {
	items?: MainNavItem[];
};

const getSegment = () => {
	if (typeof window !== "undefined") {
		return window.location.pathname.split("/")[1];
	}
	return "";
};

const getHost = () => {
	if (typeof window !== "undefined") {
		return window.location.origin;
	}
	return "";
};
export function MainNav(props: MainNavProps) {
	const { items } = props;

	const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

	const segment = getSegment();
	const host = getHost();

	return (
		<header className="flex items-center justify-between px-4 sm:px-8">
			<div className="flex gap-6 py-6 md:gap-10">
				<a href="/" className="hidden items-center space-x-2 md:flex">
					<Icons.logo className="size-9 dark:invert" />
					<span className="hidden flex-col justify-end sm:flex">
						<span className="font-bold">{siteConfig.title}</span>
						<span className="text-xs opacity-50">/@{siteConfig.author}</span>
					</span>
				</a>
				{items?.length ?
					<nav className="hidden gap-6 md:flex">
						{items.map((item, index) => (
							<a
								// eslint-disable-next-line react-x/no-array-index-key
								key={index}
								href={item.disabled ? "/" : item.href}
								className={cnMerge(
									`relative flex items-center text-lg font-medium transition-colors
										hover:text-shadcn-foreground/80 sm:text-sm`,
									item.href.startsWith(`/${segment}`) ? "text-foreground" : "text-foreground/60",
									item.disabled && "cursor-not-allowed opacity-80"
								)}
							>
								{item.title}
								{item.wip && <span className="wip">wip</span>}
							</a>
						))}
					</nav>
				:	null}
				<Button
					unstyled={true}
					className="flex items-center space-x-2 focus-within:border-0 focus-within:outline-0
						focus-visible:border-0 focus-visible:outline-0 md:hidden"
					onClick={() => setShowMobileMenu(!showMobileMenu)}
				>
					{showMobileMenu ?
						<Icons.cancel />
					:	<Icons.logo className="size-6 dark:invert" />}
					<span className="font-bold">Menu</span>
				</Button>
				{showMobileMenu && items && <MobileNav items={items} setShowMobileMenu={setShowMobileMenu} />}
			</div>
			<nav>
				<a
					href={`${host}/001-olabode-lawal-shittabey-resume.pdf`}
					className={buttonVariants({ className: "gap-2 px-4", size: "sm", theme: "secondary" })}
				>
					<Icons.download className="size-4" />
					<span>
						<span className="hidden md:inline-flex">Download</span> Resume
					</span>
				</a>
			</nav>
		</header>
	);
}
