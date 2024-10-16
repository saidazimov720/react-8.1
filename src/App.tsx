import React, { useState } from 'react';
import GradientButton from './Components/Gradient';

const App = () => {
  const [gradient, setGradient] = useState<string>('linear-gradient(to right, rgb(0, 0, 0), rgb(255, 255, 255))');

  const handleGradientChange = (newGradient: string) => {
    setGradient(newGradient);
  };

  return (
    <div className="app" style={{ background: gradient }}>
      <GradientButton onGradientChange={handleGradientChange} />
    </div>
  );
};

export default App;
