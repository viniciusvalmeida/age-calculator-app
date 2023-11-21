"use client";

import { Dispatch, SetStateAction, forwardRef, Ref } from "react";

type FormInputProps = {
	label: string;
	value: string;
	placeHolder: string;
	pattern: string;
	setValue: Dispatch<SetStateAction<string>>;
	inputRef: Ref<HTMLInputElement>;
	labelRef: Ref<HTMLLabelElement>;
};

export default function FormInput({
	label,
	value,
	placeHolder,
	pattern,
	setValue,
	inputRef,
	labelRef,
}: FormInputProps) {
	return (
		<>
			<label
				ref={labelRef}
				id={label + "Label"}
				htmlFor={label}
				className="text-neutral-smokey-grey text-xs font-bold peer-invalid:text-primary-light-red"
			>
				{label.toUpperCase()}
			</label>
			<input
				ref={inputRef}
				id={label}
				type="text"
				value={value}
				placeholder={placeHolder}
				className="border border-neutral-light-grey focus:outline-primary-purple font-bold text-xl rounded-lg placeholder:font-bold placeholder:text-xl p-4 w-24 md:w-32 peer invalid:border-primary-light-red"
				onChange={(e) => setValue(e.target.value)}
				pattern={pattern}
			/>
		</>
	);
}
