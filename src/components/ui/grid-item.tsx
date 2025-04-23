import React from 'react';
import { Grid } from '@mui/material';
import clsx from 'clsx';

// Temporarily comment out the custom CSS import to avoid PostCSS errors
// import '../../styles/modern-grid-item.css';

// Simple solution that allows xs, md props to work with MUI Grid component
export function GridItem({ children, variant = 'default', className = '', ...props }) {
  return (
    <Grid
      item
      className={clsx(
        className,
        variant === 'card' && 'modern-grid-card',
        variant === 'hero' && 'modern-grid-hero',
        variant === 'default' && 'modern-grid-default'
      )}
      {...props}
    >
      {children}
    </Grid>
  );
}

export function GridContainer({ children, ...props }) {
  return (
    <Grid container {...props}>
      {children}
    </Grid>
  );
}

// Use displayName for better debugging
GridItem.displayName = 'GridItem';
GridContainer.displayName = 'GridContainer';
