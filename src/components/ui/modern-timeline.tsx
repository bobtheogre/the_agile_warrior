import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export function TimelineItem({ title, company, period, description }: TimelineItemProps) {
  return (
    <Box className="mb-16 last:mb-0">
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box className="mb-4 md:mb-0">
            <Typography variant="overline" className="text-white/60 tracking-widest text-xs">
              {period}
            </Typography>
            <Typography variant="h6" className="text-white font-light mt-1">
              {company}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" className="text-white text-xl md:text-2xl font-normal mb-3">
            {title}
          </Typography>
          <Typography variant="body1" className="text-gray-400">
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

interface ModernTimelineProps {
  items: TimelineItemProps[];
}

export function ModernTimeline({ items }: ModernTimelineProps) {
  return (
    <Box>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          company={item.company}
          period={item.period}
          description={item.description}
        />
      ))}
    </Box>
  );
}
