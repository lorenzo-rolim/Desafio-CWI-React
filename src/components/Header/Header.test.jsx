// import { screen } from "@testing-library/react";
import Header from ".";
import { renderTheme } from "../../styles/render-theme";

test("render", () => {
  renderTheme(<Header />);
});
