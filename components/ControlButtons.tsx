import React, { useState, useRef } from 'react';

interface ControlButtonsProps {
  onYes: () => void;
}

export const ControlButtons: React.FC<ControlButtonsProps> = ({ onYes }) => {
  const [noBtnState, setNoBtnState] = useState<{ top: string; left: string; position: 'static' | 'fixed' }>({
    top: 'auto',
    left: 'auto',
    position: 'static',
  });

  const handleNoHover = () => {
    // Generate random position within viewport (10-80%)
    const x = Math.random() * 70 + 10; 
    const y = Math.random() * 70 + 10;

    setNoBtnState({
      top: `${y}vh`,
      left: `${x}vw`,
      position: 'fixed', // Use fixed to escape the container context
    });
  };

  return (
    <div className="flex gap-8 items-center justify-center mt-8 w-full h-20 relative">
      <button
        onClick={onYes}
        className="px-8 py-3 bg-[#4ade80] hover:bg-[#22c55e] text-black font-cursive text-3xl rounded-md shadow-lg transform transition-transform hover:scale-110 active:scale-95 border-b-4 border-[#16a34a]"
      >
        Yes!!
      </button>

      <button
        onMouseEnter={handleNoHover}
        onClick={handleNoHover} // Fail-safe if clicked fast
        style={{
          top: noBtnState.top,
          left: noBtnState.left,
          position: noBtnState.position as any,
          transition: 'all 0.2s ease-out'
        }}
        className="px-8 py-3 bg-[#ff5252] text-black font-cursive text-3xl rounded-md shadow-lg border-b-4 border-[#d32f2f] z-50 whitespace-nowrap min-w-[100px]"
      >
        No
      </button>
    </div>
  );
};