import Alert from 'react-bootstrap/Alert';
import React from 'react';

export default function AlertBanner({ message, alertVariant }) {
  const alertMessage = message || 'Error occurred';
  const variant = alertVariant || 'danger';

  return (
    <Alert variant={variant} style={{ backgroundColor: 'red' }}>
      {alertMessage}
    </Alert>
  );
}
