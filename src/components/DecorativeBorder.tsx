export function DecorativeBorder({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Ornate Corner Decorations */}
      <div className="absolute -top-2 -left-2 w-16 h-16 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full text-purple-300">
          <path
            d="M0,50 Q25,25 50,0 Q40,20 50,50 Q20,40 0,50"
            fill="currentColor"
            className="drop-shadow-lg"
          />
          <circle cx="15" cy="15" r="3" fill="currentColor" />
          <circle cx="30" cy="8" r="2" fill="currentColor" />
          <circle cx="8" cy="30" r="2" fill="currentColor" />
        </svg>
      </div>
      
      <div className="absolute -top-2 -right-2 w-16 h-16 opacity-30 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-pink-300">
          <path
            d="M0,50 Q25,25 50,0 Q40,20 50,50 Q20,40 0,50"
            fill="currentColor"
            className="drop-shadow-lg"
          />
          <circle cx="15" cy="15" r="3" fill="currentColor" />
          <circle cx="30" cy="8" r="2" fill="currentColor" />
          <circle cx="8" cy="30" r="2" fill="currentColor" />
        </svg>
      </div>
      
      <div className="absolute -bottom-2 -left-2 w-16 h-16 opacity-30 transform scale-y-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-300">
          <path
            d="M0,50 Q25,25 50,0 Q40,20 50,50 Q20,40 0,50"
            fill="currentColor"
            className="drop-shadow-lg"
          />
          <circle cx="15" cy="15" r="3" fill="currentColor" />
          <circle cx="30" cy="8" r="2" fill="currentColor" />
          <circle cx="8" cy="30" r="2" fill="currentColor" />
        </svg>
      </div>
      
      <div className="absolute -bottom-2 -right-2 w-16 h-16 opacity-30 transform scale-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-purple-300">
          <path
            d="M0,50 Q25,25 50,0 Q40,20 50,50 Q20,40 0,50"
            fill="currentColor"
            className="drop-shadow-lg"
          />
          <circle cx="15" cy="15" r="3" fill="currentColor" />
          <circle cx="30" cy="8" r="2" fill="currentColor" />
          <circle cx="8" cy="30" r="2" fill="currentColor" />
        </svg>
      </div>
      
      {/* Decorative dots along edges */}
      <div className="absolute top-1/2 -left-1 transform -translate-y-1/2">
        <div className="flex flex-col gap-4">
          <div className="w-2 h-2 rounded-full bg-purple-300/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-pink-300/50"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-300/50"></div>
        </div>
      </div>
      
      <div className="absolute top-1/2 -right-1 transform -translate-y-1/2">
        <div className="flex flex-col gap-4">
          <div className="w-2 h-2 rounded-full bg-pink-300/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-purple-300/50"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-300/50"></div>
        </div>
      </div>
      
      {children}
    </div>
  );
}

export function FloralAccent({ position = "top-left" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const positionClasses = {
    "top-left": "-top-6 -left-6",
    "top-right": "-top-6 -right-6 scale-x-[-1]",
    "bottom-left": "-bottom-6 -left-6 scale-y-[-1]",
    "bottom-right": "-bottom-6 -right-6 scale-[-1]",
  };
  
  return (
    <div className={`absolute ${positionClasses[position]} w-20 h-20 opacity-20 pointer-events-none`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="floral-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e879f9" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        {/* Flower petals */}
        <ellipse cx="50" cy="30" rx="8" ry="15" fill="url(#floral-gradient)" transform="rotate(0 50 50)" />
        <ellipse cx="50" cy="30" rx="8" ry="15" fill="url(#floral-gradient)" transform="rotate(72 50 50)" />
        <ellipse cx="50" cy="30" rx="8" ry="15" fill="url(#floral-gradient)" transform="rotate(144 50 50)" />
        <ellipse cx="50" cy="30" rx="8" ry="15" fill="url(#floral-gradient)" transform="rotate(216 50 50)" />
        <ellipse cx="50" cy="30" rx="8" ry="15" fill="url(#floral-gradient)" transform="rotate(288 50 50)" />
        {/* Center */}
        <circle cx="50" cy="50" r="6" fill="#fbbf24" opacity="0.8" />
        {/* Leaves */}
        <path d="M50,50 Q30,60 20,80" stroke="url(#floral-gradient)" strokeWidth="3" fill="none" />
        <path d="M50,50 Q70,60 80,80" stroke="url(#floral-gradient)" strokeWidth="3" fill="none" />
      </svg>
    </div>
  );
}
