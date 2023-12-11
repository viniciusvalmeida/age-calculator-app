import { render, screen, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import BirthForm from "../components/BirthForm";
import "@testing-library/jest-dom";

describe("BirthForm", () => {
	beforeEach(() => {
		render(<BirthForm />);
	});

	it("should be rendered ", () => {
		const btn = screen.getByRole("button");

		expect(btn).toBeInTheDocument();
	});

	it("should show an error message when day input is empty on submit", async () => {
		const spanError = screen.getByText("Must be a valid day");
		const btn = screen.getByRole("button");

		await userEvent.click(btn);
		expect(spanError).toHaveTextContent("This field is required");
	});

	it("should show an error message when day input is more than 31", async () => {
		const dayInput = screen.getByLabelText("DAY");
		const daySpan = screen.getByText("Must be a valid day");

		await userEvent.type(dayInput, "3");

		// const spanStyle = getComputedStyle(daySpan);

		expect(daySpan).not.toBeVisible();
	});
});
