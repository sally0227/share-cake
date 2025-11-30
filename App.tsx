import React, { useState } from 'react';
import OverlayCanvas from './components/OverlayCanvas';
import Controls from './components/Controls';
import { CakeShape } from './types';

function App() {
  const [shape, setShape] = useState<CakeShape>(CakeShape.ROUND);
  const [slices, setSlices] = useState<number>(8); // Default to standard 8 slices

  return (
    <div className="relative w-full h-screen bg-stone-100 overflow-hidden font-sans">
      {/* The AR Viewport */}
      <OverlayCanvas shape={shape} slices={slices} />
      
      {/* UI Layer */}
      <Controls 
        shape={shape} 
        setShape={setShape} 
        slices={slices} 
        setSlices={setSlices} 
      />
    </div>
  );
}

export default App;
