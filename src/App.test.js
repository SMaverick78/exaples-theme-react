import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("when the theme is light", () => {
  it("should display the light theme", () => {
    const { getByText } = render(<App />);
    expect(getByText("Light theme")).toBeInTheDocument();
  });
});

describe("when toggling the theme", () => {
  it("should update theme", async () => {
    const { getByText } = render(<App />);
    const button = getByText("Toggle theme");
    button.click();
    expect(getByText("Dark theme")).toBeInTheDocument();
  });
  it("should update the css variables", () => {
    const setProperty = jest.fn();
    document.documentElement.style.setProperty = setProperty;
    const { getByText } = render(<App />);
    const button = getByText("Toggle theme");
    button.click();
    expect(setProperty).toHaveBeenCalledTimes(3);
    expect(setProperty).toHaveBeenNthCalledWith(1, ["--color-solid", "white"]);
  });
});
