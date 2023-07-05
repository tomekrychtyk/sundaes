import React from 'react';

export default function ToppingOption({ name, imagePath }) {
  return (
    <div>
      <img src={imagePath} alt={`${name} topping`} />
    </div>
  );
}
