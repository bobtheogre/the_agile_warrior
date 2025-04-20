import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { ModernCard } from './modern-card';

interface SkillItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function SkillItem({ icon, title, description }: SkillItemProps) {
  return (
    <ModernCard
      icon={<Box className="synthwave-glow" style={{ fontSize: 36 }}>{icon}</Box>}
      title={title}
      className="h-full modern-skill-card"
    >
      <Typography variant="body2" className="text-gray-300" style={{ marginBottom: 0, fontSize: '1.09rem', lineHeight: 1.7 }}>
        {description}
      </Typography>
    </ModernCard>
  );
}

interface ModernSkillsGridProps {
  skills: SkillItemProps[];
}

export function ModernSkillsGrid({ skills }: ModernSkillsGridProps) {
  return (
    <Grid container spacing={2}>
      {skills.map((skill, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <SkillItem
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}
