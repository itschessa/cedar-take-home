import { render, screen } from "@testing-library/react";
import { FormSection } from "./FormSection";
import { FormSectionHeader } from "../FormSectionHeader/FormSectionHeader";

const sectionHeader = (
  <FormSectionHeader sectionNumber={1} status="active">
    header
  </FormSectionHeader>
);

describe("FormSection", () => {
  it("renders contents when 'expanded' is true", () => {
    render(
      <FormSection header={sectionHeader} expanded>
        test
      </FormSection>
    );

    expect(screen.getByRole("header", { name: "header" })).toBeInTheDocument();
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("does not render contents when 'expanded' is false", () => {
    render(
      <FormSection header={sectionHeader} expanded={false}>
        test
      </FormSection>
    );

    expect(screen.getByRole("header", { name: "header" })).toBeInTheDocument();
    expect(screen.queryByText("test")).not.toBeInTheDocument;
  });
});
