"use client";

type ResultProps = {
	value: string;
	type: string;
};

export default function Result({ value, type }: ResultProps) {
	return (
		<div className="flex space-x-4">
			<span className="text-primary-purple text-7xl font-bold italic">
				{value}
			</span>
			<span className="text-neutral-off-black text-7xl font-bold italic">
				{type}
			</span>
		</div>
	);
}
