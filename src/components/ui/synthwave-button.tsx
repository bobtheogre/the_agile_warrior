import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

interface SynthwaveButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  glowColor?: string;
  className?: string;
}

export function SynthwaveButton({ 
  variant = 'primary', 
  glowColor,
  className = '',
  children,
  ...props 
}: SynthwaveButtonProps) {
  // Define color schemes based on variant
  const getStyles = () => {
    switch(variant) {
      case 'primary':
        return {
          base: 'bg-gradient-to-r from-[#fc28a8] to-[#03edf9] text-white font-bold',
          hover: 'hover:shadow-[0_0_15px_rgba(3,237,249,0.8)]',
          glow: glowColor || '#03edf9'
        };
      case 'secondary':
        return {
          base: 'bg-gradient-to-r from-[#fc28a8] to-[#f0c] text-white font-bold',
          hover: 'hover:shadow-[0_0_15px_rgba(255,0,204,0.8)]',
          glow: glowColor || '#f0c'
        };
      case 'outline':
        return {
          base: 'bg-transparent border border-[#fc28a8] text-[#fc28a8] font-bold',
          hover: 'hover:shadow-[0_0_15px_rgba(252,40,168,0.5)] hover:bg-[#fc28a8]/10',
          glow: glowColor || '#fc28a8'
        };
      default:
        return {
          base: 'bg-gradient-to-r from-[#fc28a8] to-[#03edf9] text-white font-bold',
          hover: 'hover:shadow-[0_0_15px_rgba(3,237,249,0.8)]',
          glow: glowColor || '#03edf9'
        };
    }
  };

  const styles = getStyles();

  return (
    <MuiButton
      {...props}
      className={`
        relative rounded-md px-6 py-2 transition-all duration-300 
        ${styles.base} ${styles.hover} ${className}
      `}
      sx={{
        textTransform: 'none',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '15%',
          right: '15%',
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${styles.glow}, transparent)`,
        },
      }}
    >
      {children}
    </MuiButton>
  );
}
