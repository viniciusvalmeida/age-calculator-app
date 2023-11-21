import { RefObject } from "react";

export const resetErrors = (
	inputs: RefObject<HTMLInputElement>[],
	labels: RefObject<HTMLLabelElement>[],
	msgs: RefObject<HTMLSpanElement>[]
) => {
	inputs.forEach((input) =>
		input.current?.classList.remove("border-primary-light-red")
	);
	labels.forEach((label) =>
		label.current?.classList.remove("text-primary-light-red")
	);
	msgs.forEach((msg) => msg.current?.classList.add("invisible"));
};

export const showError = (
	input: RefObject<HTMLInputElement>,
	label: RefObject<HTMLLabelElement>,
	msg: RefObject<HTMLSpanElement>,
	warning: string = "This field is required"
) => {
	input.current?.classList.add("border-primary-light-red");
	label.current?.classList.add("text-primary-light-red");
	msg.current?.classList.remove("invisible");
	if (msg.current) {
		msg.current.innerHTML = warning;
	}
};
