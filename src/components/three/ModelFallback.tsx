import React from 'react';

interface ModelFallbackProps {
  label?: string;
  progress?: number;
}

export default function ModelFallback({ label = 'Rendering Precision 3D Model...', progress }: ModelFallbackProps) {
  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[560px] flex flex-col items-center justify-center relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#234D77]/20 via-[#173554]/40 to-[#0e2135]/60 border border-[#D09554]/20 p-8 backdrop-blur-sm">
      {/* Decorative ambient glow */}
      <div className="absolute w-72 h-72 rounded-full bg-[#649DCF]/10 blur-3xl pointer-events-none" />
      <div className="absolute w-48 h-48 rounded-full bg-[#D09554]/15 blur-2xl pointer-events-none" />

      {/* Luxury circular loader */}
      <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
        {/* Outer subtle gold ring */}
        <div className="absolute inset-0 rounded-full border border-[#D09554]/30" />
        {/* Spinning accent arc */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#D09554] border-r-[#649DCF] animate-spin [animation-duration:1.6s]" />
        {/* Inner subtle pulse */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#234D77] to-[#D09554]/40 flex items-center justify-center shadow-inner">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8C493] animate-ping" />
        </div>
      </div>

      <div className="text-center z-10 max-w-xs">
        <p className="font-serif text-lg md:text-xl text-[#E8C493] font-medium tracking-wide">
          {label}
        </p>
        <p className="text-xs text-[#649DCF] mt-1.5 font-sans tracking-wider uppercase">
          WebGL Hardware Accelerated
        </p>
        {typeof progress === 'number' && progress > 0 && (
          <div className="mt-4 w-48 mx-auto bg-[#173554] rounded-full h-1.5 overflow-hidden border border-[#D09554]/30">
            <div
              className="bg-gradient-to-r from-[#D09554] to-[#E8C493] h-full transition-all duration-300"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        )}
      </div>

      {/* Bottom subtle specs pill */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#173554]/80 border border-[#D09554]/20 text-[11px] text-[#E8C493]/80 font-mono">
        Three.js • GLTF 2.0 • 60 FPS
      </div>
    </div>
  );
}
