import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import "@testing-library/jest-dom";
import { UserContext } from "../../contexts/UserContext";
import { UserContextType } from "../../contexts/types";

describe("Home", () => {
  it("renders correct User data", () => {
    const userContextMock: UserContextType = {
      userData: {
        id: 1,
        firstName: "Taylor",
        lastName: "Doe",
        billCount: 6,
        totalDue: 600.0,
      },
      loading: false,
      error: false,
    };

    render(
      <UserContext.Provider value={userContextMock}>
        <Home />
      </UserContext.Provider>
    );

    const heading = screen.getByRole("heading", { name: "Hi, Taylor" });
    const description = screen.getByText(
      "You have 6 medical bills ready from ABC Health System. You can pay your bills here or verify your identity to view full bill details."
    );
    const totalDue = screen.getByText("$600.00");

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(totalDue).toBeInTheDocument();
  });

  it("navigates to Payment page on button click", () => {});
});
