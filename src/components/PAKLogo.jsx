import React from 'react';
import { Link } from 'react-router-dom';

export default function PAKLogo({ 
  variant = "light", // "light", "dark", "hero"
  size = "md", // "sm", "md", "lg", "hero"
  showSubtitle = true,
  className = "" 
}) {
  const isLight = variant === "light";
  
  return (
    <Link 
      to="/" 
      className={`inline-flex flex-col select-none text-decoration-none group max-w-full ${className}`}
    >
      <div className="flex items-center space-x-2">
        {/* Bold Brand Box Badge */}
        <div className="bg-red-600 group-hover:bg-red-700 text-yellow-300 px-2 min-[400px]:px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md font-black tracking-wider sm:tracking-widest text-lg min-[400px]:text-xl sm:text-2xl md:text-3xl font-sans flex items-center shadow-md border-2 border-yellow-400 transition-colors flex-shrink-0">
          <span>P</span>
          <span className="text-white">.</span>
          <span>A</span>
          <span className="text-white">.</span>
          <span>K</span>
          <span className="text-white">.</span>
        </div>

        {/* Text Title */}
        <div className="flex flex-col min-w-0">
          <span className={`font-black uppercase tracking-normal min-[400px]:tracking-wider text-[11px] min-[400px]:text-xs sm:text-sm md:text-base leading-tight truncate ${
            isLight ? 'text-white' : 'text-zinc-900'
          }`}>
            ELECTRICALS & HARDWARES
          </span>
          <span className="text-[9px] min-[400px]:text-[10px] sm:text-[11px] font-bold text-amber-400 tracking-wide mt-0.5 truncate">
            Kothandapuram, Sirkazhi
          </span>
        </div>
      </div>

      {showSubtitle && (
        <span className={`text-[8px] min-[400px]:text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mt-1 truncate max-w-[280px] sm:max-w-none ${
          isLight ? 'text-zinc-300' : 'text-zinc-600'
        }`}>
          Rental Vessels • Decoration • Chairs • Sound & Light
        </span>
      )}
    </Link>
  );
}
