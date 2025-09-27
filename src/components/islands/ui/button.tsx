import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import type { Prettify } from "@zayne-labs/toolkit-type-helpers";
import { tv, type VariantProps } from "tailwind-variants";
import { Slot } from "../slot";
import { cnMerge } from "@/lib/utils/cn";

// eslint-disable-next-line react-refresh/only-export-components -- It's fine
export const buttonVariants = tv({
	base: `inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap
	transition-colors focus-visible:ring-1 focus-visible:ring-shadcn-ring focus-visible:outline-none
	disabled:pointer-events-none disabled:opacity-50`,

	variants: {
		size: {
			default: "h-9 px-4 py-2",
			icon: "size-9",
			lg: "h-10 rounded-md px-8",
			sm: "h-8 rounded-md px-3 text-xs",
		},

		theme: {
			destructive: `bg-shadcn-destructive text-shadcn-destructive-foreground shadow-sm
			hover:bg-shadcn-destructive/90`,
			ghost: "hover:bg-shadcn-accent hover:text-shadcn-accent-foreground",
			link: "text-shadcn-primary underline-offset-4 hover:underline",
			outline: `border border-shadcn-input bg-shadcn-background shadow-sm hover:bg-shadcn-accent
			hover:text-shadcn-accent-foreground`,
			primary: "bg-shadcn-primary text-shadcn-primary-foreground shadow-sm hover:bg-shadcn-primary/90",
			secondary: "bg-shadcn-secondary/75 text-shadcn-secondary-foreground shadow-sm",
		},
	},

	/* eslint-disable perfectionist/sort-objects -- I want this to be last */
	defaultVariants: {
		size: "default",
		theme: "primary",
	},
	/* eslint-enable perfectionist/sort-objects -- I want this to be last */
});

export type ButtonProps = Prettify<InferProps<"button"> & VariantProps<typeof buttonVariants>> & {
	asChild?: boolean;
	unstyled?: boolean;
};

function Button(props: ButtonProps) {
	const {
		asChild = false,
		className,
		size,
		theme,
		type = "button",
		unstyled,
		...extraButtonProps
	} = props;

	const BTN_CLASSES = unstyled ? className : buttonVariants({ className, size, theme });

	const Component = asChild ? Slot.Root : "button";

	return <Component type={type} className={cnMerge(BTN_CLASSES)} {...extraButtonProps} />;
}

export { Button };
