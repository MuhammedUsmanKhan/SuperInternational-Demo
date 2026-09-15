'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, isLight, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to Dark Mode' : 'Switch to Luxury White Mode'}
      title={isLight ? 'Switch to Dark Mode' : 'Switch to Luxury White Mode'}
      className={`relative inline-flex items-center gap-1.5 p-1.5 sm:p-2 rounded-full cursor-pointer transition-all duration-300 border shadow-sm ${
        isLight
          ? 'bg-gradient-to-r from-[#faf5ec] to-[#f5ede0] border-[#d09554]/50 text-[#173554] shadow-[0_2px_10px_rgba(208,149,84,0.18)] hover:border-[#d09554]'
          : 'bg-white/[0.08] hover:bg-white/[0.14] border-white/20 text-[#f5d5a8] hover:border-[#d09554]/70 shadow-[0_2px_12px_rgba(0,0,0,0.3)]'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isLight ? (
          <motion.div
            key="moon"
            initial={{ rotate: -45, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 45, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            <Moon className="w-4 h-4 text-[#173554] fill-[#173554]/20" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 45, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -45, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            <Sun className="w-4 h-4 text-[#d09554] fill-[#d09554]/30 drop-shadow-[0_0_6px_rgba(208,149,84,0.6)]" />
          </motion.div>
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-bold tracking-tight pr-1 select-none">
          {isLight ? 'Dark' : 'White'}
        </span>
      )}
    </motion.button>
  );
}

