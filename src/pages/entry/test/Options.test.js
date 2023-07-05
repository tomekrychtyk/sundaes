import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('displays image for each scoop from server', async () => {
  render(<Options optionType='scoops' />);

  const scoopImages = await screen.findAllByRole('img', {
    name: /scoop$/i,
  });
  expect(scoopImages).toHaveLength(2);

  const altTexts = scoopImages.map((element) => element.alt);
  expect(altTexts).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('displays image for each topping from the server', async () => {
  render(<Options optionType='toppings' />);

  const toppingImages = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  const altTexts = toppingImages.map((element) => element.alt);
  expect(altTexts).toEqual([
    'Hot fudge topping',
    'Gummi bears topping',
    'Mochi topping',
  ]);
});
