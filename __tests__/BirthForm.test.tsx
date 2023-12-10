import { render, screen, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import BirthForm from "../components/BirthForm";
import "@testing-library/jest-dom";

describe("BirthForm", () => {
	it("should be rendered ", () => {
		render(<BirthForm />);

		const btn = screen.getByRole("button");

		expect(btn).toBeInTheDocument();
	});

	it("should show a error message when the day input is empty", async () => {
		render(<BirthForm />);

		const spanError = screen.getByText("Must be a valid day");
		const btn = screen.getByRole("button");

		await userEvent.click(btn);
		expect(spanError).toHaveTextContent("This field is required");
		// expect(dayElement).toHaveTextContent("32");
	});
});
