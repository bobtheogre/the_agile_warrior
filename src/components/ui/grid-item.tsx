import React from 'react';
import { Grid, GridProps } from '@mui/material';
import clsx from 'clsx';

// Temporarily comment out the custom CSS import to avoid PostCSS errors
// import '../../styles/modern-grid-item.css';

// Fix: Use GridProps for GridItemProps (do not omit 'item') so sizing props are available
// This resolves type errors for xs, md, etc. on GridItem

type GridItemProps = GridProps & {
  variant?: 'default' | 'card' | 'hero';
  className?: string;
};

export function GridItem({
  children,
  variant = 'default',
  className = '',
  ...props
}: GridItemProps) {
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
