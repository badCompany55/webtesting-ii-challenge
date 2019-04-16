import React from "react";
import Dashboard from "../comps/dashboard.js";
import Display from "../comps/display.js";

import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("dashboard/display interaction", () => {
  it("should render the dashboard without crashing", () => {
    render(<Dashboard />);
  });
  it("should should contain a strike, ball, foul, hit buttons", () => {
    const { getByText } = render(<Dashboard />);
    const strikeBut = getByText("Strike");
    const ballBut = getByText(/ball/i);
    const foulBut = getByText(/foul/i);
    const hitBut = getByText(/hit/i);
  });
  cleanup();
  it("should increase strike count by 1 on button click, count === 3 ? reset to 0", () => {
    const { getByText, getByTestId } = render(<Dashboard />);
    const strikeBut = getByTestId("strike");
    const ballBut = getByTestId("ball");
    const foulBut = getByTestId("foul");
    const hitBut = getByTestId("hit");

    expect(getByTestId("n-balls").textContent).toBe("balls: 0");
    expect(getByTestId("n-strikes").textContent).toBe("strikes: 0");

    // strike count
    fireEvent.click(strikeBut);
    expect(getByTestId("n-balls").textContent).toBe("balls: 0");
    expect(getByTestId("n-strikes").textContent).toBe("strikes: 1");
    fireEvent.click(strikeBut);
    expect(getByTestId("n-balls").textContent).toBe("balls: 0");
    expect(getByTestId("n-strikes").textContent).toBe("strikes: 2");
    fireEvent.click(strikeBut);
    expect(getByTestId("n-balls").textContent).toBe("balls: 0");
    expect(getByTestId("n-strikes").textContent).toBe("strikes: 0");

    // ball count
    fireEvent.click(ballBut);
    expect(getByTestId("n-balls").textContent).toBe("balls: 1");
    expect(getByTestId("n-strikes").textContent).toBe("strikes: 0");
    fireEvent.click(ballBut);
    expect(getByTestId("n-balls").textContent).toBe("balls: 2");
    expect(getByTestId("n-strikes").textContent).toBe("strikes: 0");
    fireEvent.click(ballBut);
    expect(getByTestId("n-balls").textContent).toBe("balls: 3");
    expect(getByTestId("n-strikes").textContent).toBe("strikes: 0");
    fireEvent.click(ballBut);
    expect(getByTestId("n-balls").textContent).toBe("balls: 0");
    expect(getByTestId("n-strikes").textContent).toBe("strikes: 0");

    // foul
    fireEvent.click(foulBut);
    expect(getByTestId("n-balls").textContent).toBe("balls: 0");
    expect(getByTestId("n-strikes").textContent).toBe("strikes: 1");
    fireEvent.click(foulBut);
    expect(getByTestId("n-balls").textContent).toBe("balls: 0");
    expect(getByTestId("n-strikes").textContent).toBe("strikes: 2");
    fireEvent.click(foulBut);
    expect(getByTestId("n-balls").textContent).toBe("balls: 0");
    expect(getByTestId("n-strikes").textContent).toBe("strikes: 2");

    // hit
    fireEvent.click(hitBut);
    expect(getByTestId("n-balls").textContent).toBe("balls: 0");
    expect(getByTestId("n-strikes").textContent).toBe("strikes: 0");
  });
});
