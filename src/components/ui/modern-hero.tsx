import React from 'react';
import { Box, Container } from '@mui/material';
import { ModernButton } from './modern-button';
import { GridContainer, GridItem } from './grid-item';
import { YoutubeBackground } from "./youtube-background";
import { ProfileCard } from './ProfileCard';

interface ModernHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    action: () => void;
  };
  secondaryCta?: {
    text: string;
    action: () => void;
  };
  image?: React.ReactNode;
  socialIcons?: React.ReactNode;
}

export function ModernHero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  image,
  socialIcons
}: ModernHeroProps) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      <YoutubeBackground videoId="A6iqq67bANI" />
      <Box className="modern-hero-bg" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 12 }, position: 'relative' }}>
        {/* Synthwave retro grid background for hero section */}
        <div className="retro-grid"></div>
        {/* Profile Card in Hero Center (above grid, shifted further right, desktop only) */}
        <Box sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          left: 'calc(50% + 300px)',
          top: '62%',
          transform: 'translate(-50%, -50%)',
          zIndex: 12
        }}>
          <ProfileCard />
        </Box>
        <Container maxWidth="lg">
          <GridContainer spacing={8} alignItems="center">
            <GridItem xs={12} md={6} variant="hero">
              {subtitle && (
                <div className="hero-subtitle neon-blue" style={{ textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.7, marginBottom: '1.5rem' }}>{subtitle}</div>
              )}
              <h1 className="hero-title gradient-text">{title}</h1>
              {description && (
                <div className="neon-text" style={{ color: '#bbb', fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: 520 }}>{description}</div>
              )}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 48 }}>
                {primaryCta && (
                  <ModernButton
                    variant="primary"
                    className="neon-button synthwave-glow"
                    onClick={primaryCta.action}
                  >
                    {primaryCta.text}
                  </ModernButton>
                )}
                {secondaryCta && (
                  <ModernButton
                    variant="text"
                    className="neon-button neon-blue synthwave-glow"
                    onClick={secondaryCta.action}
                  >
                    {secondaryCta.text}
                  </ModernButton>
                )}
              </div>
              {socialIcons && (
                <div style={{ display: 'flex', gap: 24 }}>{socialIcons}</div>
              )}
            </GridItem>
            {image && (
              <GridItem xs={12} md={6} variant="default">
                <Box className="hero-image-glow">{image}</Box>
              </GridItem>
            )}
          </GridContainer>
        </Container>
      </Box>
    </div>
  );
}
