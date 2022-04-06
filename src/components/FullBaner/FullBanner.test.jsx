import { screen } from "@testing-library/react";
import FulLBanner from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<FulLBanner />", () => {
  it("should render", () => {
    renderTheme(<FulLBanner>Children</FulLBanner>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
