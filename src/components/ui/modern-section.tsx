import React from 'react';
import { Typography, Box, Container } from '@mui/material';

interface ModernSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
  fullWidth?: boolean;
  topSpacing?: 'none' | 'small' | 'medium' | 'large';
  bottomSpacing?: 'none' | 'small' | 'medium' | 'large';
}

export function ModernSection({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '',
  isDark = false,
  fullWidth = false,
  topSpacing = 'medium',
  bottomSpacing = 'medium'
}: ModernSectionProps) {
  const getSpacingClass = (spacing: 'none' | 'small' | 'medium' | 'large') => {
    switch(spacing) {
      case 'none': return 'py-0';
      case 'small': return 'py-8 md:py-12';
      case 'medium': return 'py-16 md:py-24';
      case 'large': return 'py-24 md:py-32';
      default: return 'py-16 md:py-24';
    }
  };

  const topClass = getSpacingClass(topSpacing);
  const bottomClass = getSpacingClass(bottomSpacing);

  return (
    <section 
      id={id} 
      className={`
        w-full relative overflow-hidden
        ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#111]'}
        ${topClass.split(' ')[0]} ${bottomClass.split(' ')[1]}
        ${className}
      `}
    >
      <Container maxWidth={fullWidth ? false : 'lg'} className="relative z-10">
        <Box className="mb-16 md:mb-24">
          <Typography 
            variant="h2" 
            component="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-4"
          >
            {title}
          </Typography>
          
          {subtitle && (
            <Typography 
              variant="body1"
              className="text-lg md:text-xl text-gray-400 max-w-3xl"
            >
              {subtitle}
            </Typography>
          )}
        </Box>
        
        {children}
      </Container>
    </section>
  );
}
