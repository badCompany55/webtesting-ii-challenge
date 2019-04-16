import React from "react";
import Display from "../comps/display.js";

import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("display comp", () => {
  it("should render the display comp", () => {
    render(<Display />);
  });
  it('should display the current "ball and strinke" count', () => {
    const balls = 2;
    const strikes = 1;
    const { getByText } = render(<Display balls={balls} strikes={strikes} />);
    getByText(/balls: 2/i);
    getByText(/strikes: 1/i);
  });
  cleanup();
});
