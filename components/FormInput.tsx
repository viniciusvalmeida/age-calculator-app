"use client";

import { Ref } from "react";

type FormInputProps = {
	label: string;
	placeHolder: string;
	pattern: string;
	inputRef: Ref<HTMLInputElement>;
	labelRef: Ref<HTMLLabelElement>;
};

export default function FormInput({
	label,
	placeHolder,
	pattern,
	inputRef,
	labelRef,
}: FormInputProps) {
	return (
		<>
			<label
				ref={labelRef}
				htmlFor={label}
				className="text-neutral-smokey-grey text-xs font-bold "
			>
				{label.toUpperCase()}
			</label>
			<input
				ref={inputRef}
				id={label}
				type="text"
				placeholder={placeHolder}
				className="border border-neutral-light-grey focus:outline-primary-purple font-bold text-xl rounded-lg placeholder:font-bold placeholder:text-xl p-4 w-24 md:w-32 peer invalid:border-primary-light-red"
				pattern={pattern}
			/>
		</>
	);
}
