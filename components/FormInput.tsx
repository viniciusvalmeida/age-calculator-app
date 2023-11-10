"use client";

import { Dispatch, SetStateAction } from "react";

type FormInputProps = {
	label: string;
	value: string;
	placeHolder: string;
	setValue: Dispatch<SetStateAction<string>>;
};

export default function FormInput({
	label,
	value,
	placeHolder,
	setValue,
}: FormInputProps) {
	return (
		<div className="flex flex-col space-y-2">
			<label
				htmlFor={label}
				className="text-neutral-smokey-grey text-xs font-bold"
			>
				{label.toUpperCase()}
			</label>
			<input
				type="text"
				name={value}
				placeholder={placeHolder}
				required
				className="border border-neutral-light-grey rounded-lg placeholder:font-bold placeholder:text-xl p-4 w-28"
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
}
