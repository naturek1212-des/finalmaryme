import React, { useState, useEffect } from 'react';

interface HeartDisplayProps {
  isAccepted: boolean;
}

export const HeartDisplay: React.FC<HeartDisplayProps> = ({ isAccepted }) => {
  // Local file paths for the user's images
  const localProposal = "/valentine_proposal.jpg";
  const localSuccess = "/valentine_success.jpg";
  
  // Unsplash fallbacks in case local images aren't present
  const fallbackProposal = "https://images.unsplash.com/photo-1548842369-0df4c0628389?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  const fallbackSuccess = "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  const [imgSrc, setImgSrc] = useState(localProposal);

  // Update image source when acceptance state changes
  useEffect(() => {
    setImgSrc(isAccepted ? localSuccess : localProposal);
  }, [isAccepted]);

  const handleImgError = () => {
    // If local file fails to load, switch to fallback
    setImgSrc(isAccepted ? fallbackSuccess : fallbackProposal);
  };

  return (
    <div className="relative group">
      {/* Heart Shape Container - Increased size as requested */}
      <div className="relative w-80 h-80 md:w-[32rem] md:h-[32rem] transition-all duration-500 ease-in-out transform hover:scale-105">
        <div 
            className="w-full h-full bg-cover bg-center shadow-2xl"
            style={{ 
                // We use a CSS mask for the heart shape which is robust across browsers
                maskImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>\")",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
                WebkitMaskImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>\")",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
                backgroundColor: '#fff' // Background for transparency handling
            }}
        >
             <img 
                src={imgSrc} 
                alt="Valentine Visual" 
                onError={handleImgError}
                className="w-full h-full object-cover"
             />
        </div>
      </div>

      {/* Speech Bubbles */}
      {isAccepted ? (
        <>
          <div className="absolute top-10 -left-4 md:-left-12 bg-white border-2 border-black rounded-[50%] px-6 py-4 animate-bounce shadow-lg z-20">
            <p className="font-bold text-black text-sm md:text-lg whitespace-nowrap font-sans">사랑해요</p>
             <div className="absolute top-1/2 -right-3 w-4 h-4 bg-white border-r-2 border-b-2 border-black transform -rotate-45 rotate-12"></div>
          </div>
          <div className="absolute top-10 -right-4 md:-right-12 bg-white border-2 border-black rounded-[50%] px-6 py-4 animate-bounce shadow-lg z-20" style={{ animationDelay: '0.5s' }}>
            <p className="font-bold text-black text-sm md:text-lg whitespace-nowrap font-sans">움쪽~</p>
             <div className="absolute top-1/2 -left-3 w-4 h-4 bg-white border-l-2 border-b-2 border-black transform rotate-45"></div>
          </div>
        </>
      ) : (
        <div className="absolute top-4 -right-2 md:-right-16 bg-white border-2 border-black rounded-[50%] px-6 py-8 animate-pulse shadow-lg z-20 max-w-[150px] md:max-w-[200px]">
          <p className="font-bold text-black text-center leading-tight font-sans">
            나루야 사랑해~<br/>결혼하자^^
          </p>
           <div className="absolute bottom-4 -left-3 w-6 h-6 bg-white border-l-2 border-b-2 border-black transform rotate-45 rounded-bl-full"></div>
        </div>
      )}
    </div>
  );
};