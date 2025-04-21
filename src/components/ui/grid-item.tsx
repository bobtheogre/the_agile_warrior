import React from 'react';
import { Grid, GridProps } from '@mui/material';
import clsx from 'clsx';

// Temporarily comment out the custom CSS import to avoid PostCSS errors
// import '../../styles/modern-grid-item.css';

// Extend MUI GridProps, omitting 'container' and 'item' to avoid prop conflicts
// Add variant and className as custom props

type GridItemProps = Omit<GridProps, 'container' | 'item'> & {
  variant?: 'default' | 'card' | 'hero';
  className?: string;
};

export function GridItem({ children, xs, sm, md, lg, xl, variant = 'default', className = '', ...props }: GridItemProps) {
  return (
    <Grid
      item
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
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

type GridContainerProps = {
  children: React.ReactNode;
  spacing?: number;
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  className?: string;
};

export function GridContainer({ children, spacing, alignItems, className = '', ...props }: GridContainerProps) {
  return (
    <Grid container spacing={spacing} alignItems={alignItems} className={clsx(className, 'modern-grid-container')} {...props}>
      {children}
    </Grid>
  );
}
