import { screen } from "@testing-library/react";
import Home from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<Home />", () => {
  it("should render", () => {
    renderTheme(<Home>Children</Home>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
