import React from 'react';

type BuyButtonProps = {
  // Define other props here as needed, for example:
  onClick?: () => void; // Optional click handler
  // You can extend this to include other button-specific props such as styles, disabled state, etc.
  children: React.ReactNode; // This allows the button to accept children elements
};

const BuyButton: React.FC<BuyButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default BuyButton;