import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';

import OrderEntry from '../OrderEntry';
import { server } from '../../../mocks/server';

test('handles errors for scoops and toppings routes', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops'),
    (req, res, ctx) => {
      res(ctx.status(500));
    }
  );

  server.resetHandlers(
    rest.get('http://localhost:3030/toppings'),
    (req, res, ctx) => {
      res(ctx.status(500));
    }
  );

  render(<OrderEntry />);

  await waitFor(async () => {
    const alerts = await screen.findAllByText('Error occurred');
    expect(alerts).toHaveLength(2);
  });
});
