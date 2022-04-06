import { screen } from "@testing-library/react";
import ComicsHeader from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<ComicsHeader />", () => {
  it("should render", () => {
    renderTheme(<ComicsHeader>Children</ComicsHeader>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
