import React from "react";

import { render } from "vitest-browser-react";
import { describe, it, expect } from "vitest";
import App from "../src/App";
describe("App", () => {
  it("renders User Management System text", async () => {
    const screen = render(<App />);
    await expect
      .element(screen.getByText(/User Management System/i))
      .toBeVisible();

    expect(screen.getByText(/User Management System/i)).toBeInTheDocument();
  });
});

// import { render } from 'vitest-browser-react'
// import { expect, test } from 'vitest'

// test('counter button increments the count', async () => {
//   const screen = render(<Component count={1} />)

//   await screen.getByRole('button', { name: 'Increment' }).click()

//   await expect.element(screen.getByText('Count is 2')).toBeVisible()
// })
