import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import * as DropdownMenu from "./ui/dropdown-menu";
import { Icons } from "./icons";

export function ThemeToggle() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild={true}>
				<Button theme="ghost" size="sm" className="size-8 px-0">
					<Icons.sun className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
					<Icons.moon
						className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
					/>
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align="end">
				<DropdownMenu.Item onClick={() => setTheme("light")}>
					<Icons.sun className="mr-2 size-4" />
					<span>Light</span>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => setTheme("dark")}>
					<Icons.moon className="mr-2 size-4" />
					<span>Dark</span>
				</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => setTheme("system")}>
					<Icons.laptop className="mr-2 size-4" />
					<span>System</span>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}
