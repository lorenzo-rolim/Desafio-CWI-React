import { screen } from "@testing-library/react";
import ComicsInput from ".";
import { renderTheme } from "../../styles/render-theme";

describe("<ComicsInput />", () => {
  it("should render", () => {
    renderTheme(<ComicsInput>Children</ComicsInput>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
