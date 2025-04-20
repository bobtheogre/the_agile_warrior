import React from 'react';
import { Box } from '@mui/material';
import { ModernButton } from './modern-button';

export function ProfileCard() {
  return (
    <Box
      className="profile-synthwave-card synthwave-glow"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        background: 'rgba(24, 23, 44, 0.98)',
        borderRadius: '1.2rem',
        boxShadow: '0 2px 16px 0 #fc28a8',
        padding: '1.2rem 2rem 1.2rem 1.2rem',
        minWidth: 280,
        maxWidth: 340,
        border: '2px solid #03edf9',
        position: 'relative',
      }}
    >
      <img
        src="/headshot.jpeg"
        alt="Bob Huff - Agile Warrior"
        style={{ width: 100, height: 100, borderRadius: '1rem', objectFit: 'cover', border: '2.5px solid #03edf9', boxShadow: '0 0 20px #03edf9', zIndex: 2, marginRight: 12 }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginLeft: '0px'
        }}
      >
        <div style={{ fontWeight: 600, color: '#fff', fontSize: '1.08rem', marginBottom: 2, whiteSpace: 'nowrap', textAlign: 'left' }}>Technology Expert</div>
        <div style={{ fontWeight: 700, color: '#fc28a8', fontSize: '1.22rem', whiteSpace: 'nowrap', textAlign: 'left', textShadow: '0 0 1px #fc28a8, 0 0 1px #fff', filter: 'brightness(0.85)' }}>Bob Huff</div>
        <ModernButton
          variant="primary"
          className="neon-button synthwave-glow"
          style={{ marginTop: 10, padding: '0.3em 1.1em', fontSize: '0.98rem' }}
          onClick={() => window.location.href = '#contact'}
        >
          LET&apos;S TALK
        </ModernButton>
      </Box>
    </Box>
  );
}
