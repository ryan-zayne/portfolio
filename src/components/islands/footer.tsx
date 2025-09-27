import { Icons } from "./icons";
import { Capitalise } from "./capitalise";
import { buttonVariants } from "./ui/button";
import { getAProblemFirstQuote } from "@/data/problem-first-quote";
import type { SiteConfig } from "@/types";
import { ThemeToggle } from "./theme-toggle";

type FooterProps = SiteConfig;

export function Footer({ author, links, title }: FooterProps) {
	return (
		<footer className="space-y-10 px-4 pb-10 sm:px-8">
			<div className="w-full border-t" />

			<div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
				<div className="max-w-lg space-y-4">
					<a href="/" className="flex items-center space-x-2">
						<Icons.logo className="size-9 dark:invert" />
						<span className="flex flex-col justify-end">
							<span className="font-bold">{title}</span>
							<span className="text-xs opacity-50">/@{author}</span>
						</span>
					</a>
					<p>{getAProblemFirstQuote()}</p>
				</div>

				<div className="space-y-4">
					<h3 className="text-lg leading-none font-semibold tracking-tight md:text-2xl">
						Connect with me
					</h3>
					<div className="flex flex-wrap gap-2">
						{Object.keys(links).map((key) => {
							const Icon = Icons[key as keyof typeof Icons];
							const link = links[key as keyof typeof links];
							return (
								<a
									key={link}
									href={link}
									target="_blank"
									className={buttonVariants({ className: "gap-2", theme: "outline" })}
								>
									<Icon className="size-4" /> <Capitalise text={key} />
								</a>
							);
						})}
					</div>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<p className="text-sm text-shadcn-muted-foreground">
					© {new Date().getFullYear()} {title}.
				</p>
				<ThemeToggle />
			</div>
		</footer>
	);
}
