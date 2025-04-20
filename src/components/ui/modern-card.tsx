import React from 'react';
import { Card, CardContent, CardProps, Box, Typography } from '@mui/material';

interface ModernCardProps extends Omit<CardProps, 'variant'> {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function ModernCard({ 
  title,
  subtitle,
  icon,
  children, 
  className = '',
  hoverEffect = true,
  ...props 
}: ModernCardProps) {
  return (
    <Card 
      {...props}
      className={`
        rounded-none border border-[#222] bg-[#111] overflow-hidden
        ${hoverEffect ? 'transition-all duration-300 hover:-translate-y-1 hover:border-white/30' : ''}
        ${className}
        transparent-bg
      `}
      sx={{
        boxShadow: 'none',
        backgroundColor: 'transparent',
      }}
    >
      <CardContent className="p-6 md:p-8">
        {icon && (
          <Box className="mb-6 text-white/80">
            {icon}
          </Box>
        )}
        
        {title && (
          <Typography 
            variant="h5" 
            component="h3" 
            className="text-xl md:text-2xl font-normal text-white mb-2"
          >
            {title}
          </Typography>
        )}
        
        {subtitle && (
          <Typography 
            variant="body2" 
            className="text-gray-400 mb-6"
          >
            {subtitle}
          </Typography>
        )}
        
        {children}
      </CardContent>
    </Card>
  );
}
