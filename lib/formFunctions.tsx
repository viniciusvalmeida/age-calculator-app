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
