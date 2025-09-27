import { cnMerge } from "@/lib/utils/cn";
import type { InferProps } from "@zayne-labs/toolkit-react/utils";

function CardRoot(props: InferProps<"div">) {
	const { className, ...restOfProps } = props;
	return (
		<div
			className={cnMerge(
				"rounded-lg border bg-shadcn-card text-shadcn-card-foreground shadow-sm",
				className
			)}
			{...restOfProps}
		/>
	);
}

function CardHeader(props: InferProps<"div">) {
	const { className, ...restOfProps } = props;

	return <div className={cnMerge("flex flex-col space-y-1.5 p-6", className)} {...restOfProps} />;
}

function CardTitle(props: InferProps<"h3">) {
	const { className, ...restOfProps } = props;

	return (
		<h3
			className={cnMerge("text-lg leading-none font-semibold tracking-tight", className)}
			{...restOfProps}
		/>
	);
}

function CardDescription(props: InferProps<"p">) {
	const { className, ...restOfProps } = props;
	return <p className={cnMerge("text-sm text-shadcn-muted-foreground", className)} {...restOfProps} />;
}

function CardContent(props: InferProps<"div">) {
	const { className, ...restOfProps } = props;
	return <div className={cnMerge("p-6 pt-0", className)} {...restOfProps} />;
}

function CardFooter(props: InferProps<"div">) {
	const { className, ...restOfProps } = props;
	return <div className={cnMerge("flex items-center p-6 pt-0", className)} {...restOfProps} />;
}

export const Root = CardRoot;
export const Header = CardHeader;
export const Title = CardTitle;
export const Description = CardDescription;
export const Content = CardContent;
export const Footer = CardFooter;
