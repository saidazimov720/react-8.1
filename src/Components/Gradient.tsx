import React from 'react';
import { getRandomColor } from './Color';
import './button.css';

interface GradientButtonProps {
  onGradientChange: (gradient: string) => void;
  blockIndex : number;
}

const GradientButton: React.FC<GradientButtonProps> = ({ onGradientChange, blockIndex }) => {
  const handleClick = () => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const randomGradient = `linear-gradient(to right, ${color1}, ${color2})`;
    onGradientChange(randomGradient);
    console.log(`Block #${blockIndex}Chosen Gradient: ${randomGradient}`);
  };

  return (
    <button className="gradient-button" onClick={handleClick}>
      Generate Random Gradient for Block {blockIndex}
    </button>
  );
};

export default GradientButton;
