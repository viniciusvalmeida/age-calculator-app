"use client";

import { Dispatch, SetStateAction } from "react";

type FormInputProps = {
	label: string;
	value: string;
	placeHolder: string;
	isEmpty: boolean;
	setValue: Dispatch<SetStateAction<string>>;
};

export default function FormInput({
	label,
	value,
	placeHolder,
	isEmpty,
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
				className="border border-neutral-light-grey focus:outline-primary-purple rounded-lg placeholder:font-bold placeholder:text-xl p-4 w-28"
				onChange={(e) => setValue(e.target.value)}
			/>
			{isEmpty && (
				<span className="text-xs text-primary-light-red">
					This field is required
				</span>
			)}
		</div>
	);
}
