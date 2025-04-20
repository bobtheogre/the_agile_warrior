import React from 'react';
import { Card as MuiCard, CardContent, CardHeader, CardProps } from '@mui/material';

interface SynthwaveCardProps extends Omit<CardProps, 'variant'> {
  glowColor?: string;
  children: React.ReactNode;
  className?: string;
}

export function SynthwaveCard({ 
  glowColor = '#f700ff', 
  children, 
  className = '',
  ...props 
}: SynthwaveCardProps) {
  return (
    <MuiCard 
      {...props}
      className={`
        relative overflow-hidden rounded-lg border border-purple-700/50 
        bg-gradient-to-br from-gray-900 to-purple-950 p-1 shadow-xl 
        transition-all duration-300 hover:shadow-[0_0_15px_rgba(247,0,255,0.5)] 
        ${className}
      `}
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
          opacity: 0.7,
        },
      }}
    >
      {children}
    </MuiCard>
  );
}

export { CardContent, CardHeader };
