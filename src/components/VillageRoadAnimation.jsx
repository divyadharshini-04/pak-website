import React from 'react';
import { motion } from 'framer-motion';

export default function VillageRoadAnimation() {
  return (
    <div className="relative w-full max-w-full overflow-hidden bg-gradient-to-b from-amber-50 to-emerald-50 py-3 sm:py-4 border-y-2 border-amber-300 select-none">
      
      {/* Background Village Elements: Palms, Town Signs & Service Badge */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 flex justify-between items-center pb-2 text-[10px] sm:text-[11px] font-semibold text-emerald-900 gap-2">
        <div className="flex items-center space-x-1.5 flex-shrink-0">
          <span className="text-sm sm:text-base">🌴</span>
          <span className="hidden min-[450px]:inline bg-white/90 px-2 py-0.5 rounded border border-emerald-300 font-bold">
            Kothandapuram Village
          </span>
        </div>

        <div className="flex items-center space-x-1.5 bg-amber-100/95 px-2.5 sm:px-3 py-1 rounded-full border border-amber-300 text-amber-950 shadow-sm text-center">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping flex-shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider truncate max-w-[200px] min-[400px]:max-w-none">
            PAK Express Delivery & Event Service
          </span>
        </div>

        <div className="flex items-center space-x-1.5 flex-shrink-0">
          <span className="hidden min-[450px]:inline bg-white/90 px-2 py-0.5 rounded border border-emerald-300 font-bold">
            Sirkazhi Taluk 8 KM ➔
          </span>
          <span className="text-sm sm:text-base">🌴</span>
        </div>
      </div>

      {/* The Animated Road Surface */}
      <div 
        className="relative h-20 sm:h-24 bg-zinc-800 overflow-hidden shadow-inner flex items-center w-full max-w-full"
        style={{ contain: 'paint' }}
      >
        {/* Road center dashed white lines */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] flex space-x-6 overflow-hidden pointer-events-none">
          {[...Array(35)].map((_, i) => (
            <span key={i} className="w-8 h-[3px] bg-amber-300/80 flex-shrink-0 animate-pulse" />
          ))}
        </div>

        {/* =========================================================================
            VEHICLE 1: P.A.K. BRANDED DELIVERY UTILITY VEHICLE
            ========================================================================= */}
        <motion.div
          initial={{ x: '-220px' }}
          animate={{ x: ['-220px', 'calc(100vw + 50px)'] }}
          transition={{
            repeat: Infinity,
            duration: 13,
            ease: "linear",
            delay: 0
          }}
          className="absolute z-10 flex flex-col items-center pointer-events-none"
          title="P.A.K. Service Vehicle"
        >
          <div className="relative flex items-end">
            {/* Delivery Goods Loaded: Pipes & Loudspeaker */}
            <div className="absolute -top-3 left-3 sm:left-4 flex items-center space-x-1">
              <span className="text-xs">📢</span>
              <span className="bg-blue-700 text-white font-mono text-[8px] sm:text-[9px] px-1 rounded font-bold">PVC</span>
            </div>

            {/* Vehicle SVG Body */}
            <svg className="w-32 sm:w-44 h-12 sm:h-16" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Van Body */}
              <rect x="10" y="16" width="105" height="28" rx="3" fill="#DC2626" />
              <path d="M115 22 L140 22 L148 35 L148 44 L115 44 Z" fill="#DC2626" />
              {/* Cab Window */}
              <path d="M118 25 L136 25 L142 34 L118 34 Z" fill="#93C5FD" stroke="#1E3A8A" strokeWidth="1" />
              {/* P.A.K. Bold Side Wordmark */}
              <text x="35" y="34" fill="#FEF08A" fontFamily="sans-serif" fontWeight="900" fontSize="13" letterSpacing="1.5">
                P.A.K.
              </text>
              <text x="18" y="42" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="700" fontSize="6.5">
                ELECTRICALS & RENTALS
              </text>
              {/* Bumpers & Headlight */}
              <rect x="145" y="38" width="5" height="5" fill="#FBBF24" />
              <rect x="8" y="38" width="4" height="6" fill="#374151" />
              <rect x="146" y="42" width="6" height="4" fill="#374151" />
              {/* Left Wheel */}
              <circle cx="36" cy="46" r="10" fill="#18181B" stroke="#A1A1AA" strokeWidth="2" />
              <circle cx="36" cy="46" r="4" fill="#E4E4E7" />
              {/* Right Wheel */}
              <circle cx="128" cy="46" r="10" fill="#18181B" stroke="#A1A1AA" strokeWidth="2" />
              <circle cx="128" cy="46" r="4" fill="#E4E4E7" />
            </svg>
          </div>
        </motion.div>


        {/* =========================================================================
            VEHICLE 2: AUTHENTIC INDIAN TRACTOR WITH VESSEL TRAILER
            ========================================================================= */}
        <motion.div
          initial={{ x: '-260px' }}
          animate={{ x: ['-260px', 'calc(100vw + 60px)'] }}
          transition={{
            repeat: Infinity,
            duration: 17,
            ease: "linear",
            delay: 6.5
          }}
          className="absolute z-10 flex items-end pointer-events-none"
          title="P.A.K. Farm Tractor & Rental Vessels"
        >
          {/* Tractor SVG */}
          <div className="relative">
            {/* Little smoke puffs from exhaust */}
            <motion.span
              animate={{ opacity: [0, 0.8, 0], y: [-2, -14], scale: [0.6, 1.2] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="absolute -top-4 left-14 sm:left-16 text-zinc-300 text-[10px] pointer-events-none select-none"
            >
              💨
            </motion.span>

            <svg className="w-36 sm:w-48 h-12 sm:h-16" viewBox="0 0 170 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Trailer Body */}
              <rect x="5" y="24" width="60" height="20" rx="2" fill="#047857" stroke="#065F46" strokeWidth="1" />
              {/* Cooking Vessels on Trailer */}
              <circle cx="20" cy="20" r="7" fill="#E4E4E7" stroke="#71717A" strokeWidth="1" />
              <circle cx="36" cy="18" r="8" fill="#F4F4F5" stroke="#71717A" strokeWidth="1" />
              <circle cx="50" cy="20" r="6" fill="#D4D4D8" stroke="#71717A" strokeWidth="1" />
              {/* Trailer Hitch */}
              <rect x="65" y="34" width="12" height="4" fill="#52525B" />
              {/* Trailer Wheels */}
              <circle cx="22" cy="47" r="8" fill="#18181B" stroke="#71717A" strokeWidth="2" />
              <circle cx="22" cy="47" r="3" fill="#E4E4E7" />
              <circle cx="50" cy="47" r="8" fill="#18181B" stroke="#71717A" strokeWidth="2" />
              <circle cx="50" cy="47" r="3" fill="#E4E4E7" />

              {/* Tractor Engine & Bonnet */}
              <path d="M78 30 L115 30 L125 36 L125 46 L78 46 Z" fill="#DC2626" />
              {/* Mudguard */}
              <path d="M80 34 C80 20 102 20 102 34 Z" fill="#991B1B" />
              {/* Exhaust Silencer Pipe */}
              <rect x="110" y="14" width="3" height="16" fill="#27272A" />
              <path d="M109 14 L114 11 L114 14 Z" fill="#27272A" />
              {/* Driver Seat & Steering */}
              <rect x="85" y="26" width="8" height="6" fill="#18181B" />
              <line x1="97" y1="26" x2="102" y2="30" stroke="#18181B" strokeWidth="2" />
              {/* P.A.K. on Tractor */}
              <text x="82" y="42" fill="#FEF08A" fontFamily="sans-serif" fontWeight="900" fontSize="8">
                PAK
              </text>
              {/* Front Small Wheel */}
              <circle cx="125" cy="46" r="7" fill="#18181B" stroke="#FBBF24" strokeWidth="2" />
              <circle cx="125" cy="46" r="3" fill="#E4E4E7" />
              {/* Rear Big Tractor Wheel */}
              <circle cx="92" cy="43" r="13" fill="#18181B" stroke="#FBBF24" strokeWidth="3" />
              <circle cx="92" cy="43" r="5" fill="#E4E4E7" />
            </svg>
          </div>
        </motion.div>

      </div>

      {/* Road border ground line */}
      <div className="h-1.5 sm:h-2 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200" />
    </div>
  );
}
