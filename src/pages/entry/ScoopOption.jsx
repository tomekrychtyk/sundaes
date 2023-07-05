import React from 'react';

export default function ScoopOption({ name, imagePath }) {
  return (
    <div>
      <img src={imagePath} alt={`${name} scoop`} />
    </div>
  );
}
