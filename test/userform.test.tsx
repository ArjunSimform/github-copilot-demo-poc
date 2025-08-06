import React from 'react';

import { render } from 'vitest-browser-react';
import { describe, it, expect } from 'vitest';
import App from '../src/App';
describe('App', () => {
  it('renders User Management System text', async () => {
    const screen = render(<App />);
    await expect
      .element(screen.getByText(/User Management System/i))
      .toBeVisible();

    expect(screen.getByText(/User Management System/i)).toBeInTheDocument();
  });
});
