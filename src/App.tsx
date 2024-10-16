import React, { useState } from 'react';
import GradientButton from './Components/Gradient';

const App = () => {
  const [blocks, setBlocks] = useState<Array<string>>([]);
  const handleAddBlock =()=> {
    setBlocks([...blocks , 'linear-gradient(to right, rgb(0,0,0), rgb(255,255,255))']);
  }


  return (
    <div className="app" style={{ background: gradient }}>
      <GradientButton onGradientChange={handleGradientChange} />
    </div>
  );
};

export default App;
