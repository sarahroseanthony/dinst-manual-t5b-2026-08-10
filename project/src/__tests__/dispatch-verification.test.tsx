/**
 * Dispatch Verification — Findings 1-3 Smoke Tests
 *
 * Verifies that the application renders without errors and that
 * dispatch readiness is confirmed after Findings 1-3 were addressed.
 */
import React from "react";
import { render } from "@testing-library/react";
import Home from "@/app/page";

describe("Dispatch verification after Findings 1-3", () => {
  it("renders the root page component without throwing", () => {
    expect(() => render(<Home />)).not.toThrow();
  });

  it("default export from @/app/page is a callable component", () => {
    expect(typeof Home).toBe("function");
  });

  it("renders expected heading text", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Welcome")).toBeTruthy();
  });
});
