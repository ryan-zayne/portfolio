import { capitalise } from "@/lib/utils/common";

type CapitaliseProps = {
	text: string;
};

export function Capitalise({ text }: CapitaliseProps) {
	const capText = capitalise(text);

	return <>{capText}</>;
}
