import { siteConfig } from "@/config/site";
import { useLockBody } from "@/lib/hooks/use-lock-body";
import { cnMerge } from "@/lib/utils/cn";
import type { MainNavItem } from "@/types";
import { Icons } from "./icons";

type MobileNavProps = {
	items: MainNavItem[];
	setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MobileNav({ items, setShowMobileMenu }: MobileNavProps) {
	useLockBody();

	return (
		<div
			className={cnMerge(
				`fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] animate-in grid-flow-row auto-rows-max
				overflow-auto px-4 pt-2 pb-32 shadow-md slide-in-from-left-80 md:hidden`
			)}
		>
			<div
				className="relative z-20 grid gap-6 rounded-md bg-shadcn-popover p-4 pt-2
					text-shadcn-popover-foreground shadow-md"
			>
				<nav className="grid grid-flow-row auto-rows-max text-sm">
					{items.map((item, index) => (
						<a
							// eslint-disable-next-line react-x/no-array-index-key
							key={index}
							href={item.disabled ? "#" : item.href}
							className={cnMerge(
								"relative flex w-full items-center rounded-md py-2 font-medium hover:underline",
								item.disabled && "cursor-not-allowed opacity-60"
							)}
							onClick={() => !item.disabled && setShowMobileMenu(false)}
						>
							{item.title}
							{item.wip && <span className="wip">wip</span>}
						</a>
					))}
				</nav>
				<a href="/" className="flex items-center space-x-2">
					<Icons.logo className="size-9 dark:invert" />
					<span className="flex flex-col justify-end">
						<span className="font-bold">{siteConfig.title}</span>
						<span className="text-xs opacity-50">/@{siteConfig.author}</span>
					</span>
				</a>
			</div>
		</div>
	);
}
