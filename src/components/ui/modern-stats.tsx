import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

interface StatItemProps {
  value: string;
  label: string;
}

export function StatItem({ value, label }: StatItemProps) {
  return (
    <Box className="border-t border-[#222] pt-6">
      <Typography variant="h3" className="text-4xl md:text-5xl font-light text-white mb-2">
        {value}
      </Typography>
      <Typography variant="body2" className="text-gray-400 uppercase tracking-wider text-xs">
        {label}
      </Typography>
    </Box>
  );
}

interface ModernStatsProps {
  items: StatItemProps[];
}

export function ModernStats({ items }: ModernStatsProps) {
  return (
    <Grid container spacing={4}>
      {items.map((item, index) => (
        <Grid item key={index} xs={6} md={3}>
          <StatItem
            value={item.value}
            label={item.label}
          />
        </Grid>
      ))}
    </Grid>
  );
}
