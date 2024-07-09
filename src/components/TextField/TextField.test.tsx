import { TextField } from "./TextField";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ValidationStatus } from "../../pages/Payment/PaymentInformation/types";

describe("TextField", () => {
  it("calls onChange when input value changes", async () => {
    const onChange = jest.fn();
    render(<TextField id="test" label="Test" value="" onChange={onChange} />);

    const input = screen.getByRole("textbox", { name: "Test" });
    await userEvent.type(input, "test");

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("displays an error message when validationStatus is invalid", () => {
    render(
      <TextField
        id="test"
        label="Test"
        value=""
        onChange={() => {}}
        validationStatus={ValidationStatus.Invalid}
      />
    );

    const error = screen.getByText("This field is required");
    expect(error).toBeInTheDocument();
  });

  it("displays success styles when validationStatus is valid", () => {
    render(
      <TextField
        id="test"
        label="Test"
        value=""
        onChange={() => {}}
        validationStatus={ValidationStatus.Valid}
      />
    );

    const input = screen.getByRole("textbox", { name: "Test" });
    expect(input).toHaveStyle("background-image: url(/src/assets/check.svg)");
  });
});
