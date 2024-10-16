import React, { useState } from 'react';
import GradientButton from './Components/Gradient';

const App = () => {
  const [blocks, setBlocks] = useState<Array<string>>([]);
  const handleAddBlock =()=> {
    setBlocks([...blocks , 'linear-gradient(to right, rgb(0,0,0), rgb(255,255,255))']);
  }
const handleGradientChange = (index:number, newGradient: string) =>{
  const newBlocks = [...blocks];
  newBlocks[index] = newGradient;
  setBlocks(newBlocks);
  console.log(`Block #${index + 1} - Gradient: ${newGradient}`);
};


  return (
    
  );
};

export default App;
