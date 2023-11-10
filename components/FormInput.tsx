"use client";

type FormInputProps = {
	value: string;
	placeHolder: string;
};

export default function FormInput({ value, placeHolder }: FormInputProps) {
	return (
		<div className="flex flex-col space-y-2">
			<label
				htmlFor={value}
				className="text-neutral-smokey-grey text-xs font-bold"
			>
				{value.toUpperCase()}
			</label>
			<input
				type="text"
				name={value}
				placeholder={placeHolder}
				className="border border-neutral-light-grey rounded-lg placeholder:font-bold placeholder:text-xl p-4 w-28"
			/>
		</div>
	);
}
