import React from "react";
import {render, screen} from "@testing-library/react";
import {beforeAll, expect, it, vi} from "vitest";
import App from "./App";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }))
  });
});

it("mostra o ecrã inicial com o nome", () => {
  render(<App />);
  expect(screen.getAllByText(/Stélvio Chibuco/).length).toBeGreaterThan(0);
});
