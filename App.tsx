import React, { useState } from 'react';
import { HeartDisplay } from './components/HeartDisplay';
import { ControlButtons } from './components/ControlButtons';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleYesClick = () => {
    setIsAccepted(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#ffeef2] overflow-hidden p-4">
      {/* Decorative floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          >
            ♥
          </div>
        ))}
      </div>

      <div className="z-10 flex flex-col items-center gap-8 max-w-2xl w-full">
        <h1 className="text-5xl md:text-7xl font-cursive text-[#ff0000] text-center drop-shadow-sm animate-bounce-slow">
          {isAccepted ? "Yay!! Success!!" : "Will You Be My Valentine?"}
        </h1>

        <HeartDisplay isAccepted={isAccepted} />

        {isAccepted && (
            <h2 className="text-3xl md:text-5xl text-[#ff0000] font-sans font-bold text-center mt-4 animate-pulse">
            천년만년사랑해~^^
            </h2>
        )}

        {!isAccepted && (
          <ControlButtons onYes={handleYesClick} />
        )}
      </div>
    </div>
  );
};

export default App;