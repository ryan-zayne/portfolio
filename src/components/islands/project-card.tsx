import * as Card from "./ui/card";
import * as Tooltip from "./ui/tooltip";
import { categories } from "@/data/projects";
import { Icons } from "./icons";

type ProjectCardProps = {
	category: string;
	desc?: string;
	image: string;
	linkText: string;
	title: string;
	url: string;
};

export function ProjectCard(props: ProjectCardProps) {
	const { category, desc, image, linkText, title, url } = props;

	return (
		<Card.Root className="mb-4 flex basis-full flex-col overflow-hidden md:basis-[49%] lg:basis-[32.33%]">
			<div className="aspect-[1.4] min-h-[230px] overflow-hidden">
				<img
					src={image}
					width={900}
					height={300}
					alt={title}
					className="size-full object-cover object-top-left transition-transform ease-linear
						hover:scale-125"
					loading="lazy"
				/>
			</div>
			<Card.Header className="grow gap-4 space-y-0">
				<div className="space-y-2">
					<Card.Title>{title}</Card.Title>
					<Card.Description>{desc}</Card.Description>
				</div>
			</Card.Header>
			<Card.Content>
				<div className="flex justify-between text-sm text-shadcn-muted-foreground">
					<div className="flex items-center">
						{categories
							.filter((c) => c.title === category)
							.map((cat) => {
								const Icon = Icons[cat.icon as keyof typeof Icons];
								return (
									<Tooltip.ContextProvider key={cat.desc}>
										<Tooltip.Root>
											<Tooltip.Trigger asChild={true}>
												<span className="flex cursor-help items-center gap-2">
													<Icon className="size-4 stroke-sky-400 text-sky-400" /> {cat.title}
												</span>
											</Tooltip.Trigger>
											<Tooltip.Content>
												<p>{cat.desc}</p>
											</Tooltip.Content>
										</Tooltip.Root>
									</Tooltip.ContextProvider>
								);
							})}
					</div>
					<a href={url} className="flex items-center hover:underline" target="_blank">
						{linkText}
						<Icons.externalLink className="ml-1 size-3" />
					</a>
				</div>
			</Card.Content>
		</Card.Root>
	);
}
