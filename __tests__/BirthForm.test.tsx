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

	it("should show an error message when month input is empty on submit", async () => {
		const dayInput = screen.getByPlaceholderText("DD");
		const monthSpanError = screen.getByText("Must be a valid month");
		const btn = screen.getByRole("button");

		await userEvent.type(dayInput, "3");
		await userEvent.click(btn);

		expect(monthSpanError).toHaveTextContent("This field is required");
	});

	it("should show an error message when year input is empty on submit", async () => {
		const dayInput = screen.getByPlaceholderText("DD");
		const monthInput = screen.getByPlaceholderText("MM");
		const yearSpanError = screen.getByText("Insert four numbers");
		const btn = screen.getByRole("button");

		await userEvent.type(dayInput, "3");
		await userEvent.type(monthInput, "10");
		await userEvent.click(btn);

		expect(yearSpanError).toHaveTextContent("This field is required");
	});

	it("should invalid day input when day is more than 31", async () => {
		const dayInput = screen.getByLabelText("DAY");

		await userEvent.type(dayInput, "32");

		expect(dayInput).toBeInvalid();
	});

	it("should invalid month input when month is more than 12", async () => {
		const monthInput = screen.getByPlaceholderText("MM");

		await userEvent.type(monthInput, "13");

		expect(monthInput).toBeInvalid();
	});

	it("should show an error message when year is in future ", async () => {
		const dayInput = screen.getByPlaceholderText("DD");
		const monthInput = screen.getByPlaceholderText("MM");
		const yearInput = screen.getByPlaceholderText("YYYY");
		const yearSpanError = screen.getByText("Insert four numbers");
		const btn = screen.getByRole("button");
		const futureYear = (new Date().getFullYear() + 1).toString();

		await userEvent.type(dayInput, "3");
		await userEvent.type(monthInput, "10");
		await userEvent.type(yearInput, futureYear);
		await userEvent.click(btn);

		expect(yearSpanError).toHaveTextContent("Must be in the past");
	});

	it("should show a error message when the month has only 30 days and the day input is 31", async () => {
		const dayInput = screen.getByPlaceholderText("DD");
		const monthInput = screen.getByPlaceholderText("MM");
		const yearInput = screen.getByPlaceholderText("YYYY");
		const daySpanError = screen.getByText("Must be a valid day");
		const btn = screen.getByRole("button");

		await userEvent.type(dayInput, "31");
		await userEvent.type(monthInput, "4");
		await userEvent.type(yearInput, "2010");
		await userEvent.click(btn);

		expect(daySpanError).not.toHaveClass("invisible");
	});
});
