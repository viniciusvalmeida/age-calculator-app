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
				className="text-neutral-smokey-grey text-xs md:text-sm font-bold tracking-[.25em]"
			>
				{label.toUpperCase()}
			</label>
			<input
				ref={inputRef}
				id={label}
				type="text"
				placeholder={placeHolder}
				className="border border-neutral-light-grey focus:outline-primary-purple font-extrabold text-xl md:text-3xl rounded-lg placeholder:font-bold placeholder:text-xl md:placeholder:text-3xl p-4 w-24 md:w-36 peer invalid:border-primary-light-red"
				pattern={pattern}
			/>
		</>
	);
}
