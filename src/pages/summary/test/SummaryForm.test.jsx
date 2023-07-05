import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SummaryForm from '../SummaryForm';

describe('SummaryForm', () => {
  describe('terms and condition checkbox', () => {
    test('enables the confirm order button', async () => {
      render(<SummaryForm />);
      const user = userEvent.setup();

      const button = screen.getByRole('button', {
        name: /confirm order/i,
      });
      expect(button).toBeDisabled();

      const checkbox = screen.getByRole('checkbox', {
        name: /terms/i,
      });

      await user.click(checkbox);
      expect(button).toBeEnabled();
    });
  });

  test('popover resonds to hover', async () => {
    render(<SummaryForm />);
    const user = userEvent.setup();

    let popover = screen.queryByText(/no icecream will actually be delivered/i);
    expect(popover).not.toBeInTheDocument();

    const terms = screen.getByText(/terms and conditions/);
    await user.hover(terms);
    popover = screen.getByText(/no icecream will actually be delivered/);
    expect(popover).toBeInTheDocument();

    await user.unhover(terms);
    expect(popover).not.toBeInTheDocument();
  });
});
