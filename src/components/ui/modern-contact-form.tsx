import React from 'react';
import { Box, TextField, Grid, InputLabel } from '@mui/material';
import { ModernButton } from './modern-button';

export function ModernContactForm() {
  return (
    <Box component="form" className="mt-8">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box className="mb-6">
            <InputLabel 
              htmlFor="name" 
              className="text-white mb-2 text-sm font-light"
            >
              Name
            </InputLabel>
            <TextField
              id="name"
              fullWidth
              variant="outlined"
              InputProps={{
                sx: {
                  borderRadius: 0,
                  backgroundColor: '#0a0a0a',
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#333',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#555',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className="mb-6">
            <InputLabel 
              htmlFor="email" 
              className="text-white mb-2 text-sm font-light"
            >
              Email
            </InputLabel>
            <TextField
              id="email"
              fullWidth
              variant="outlined"
              type="email"
              InputProps={{
                sx: {
                  borderRadius: 0,
                  backgroundColor: '#0a0a0a',
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#333',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#555',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
      
      <Box className="mb-6">
        <InputLabel 
          htmlFor="subject" 
          className="text-white mb-2 text-sm font-light"
        >
          Subject
        </InputLabel>
        <TextField
          id="subject"
          fullWidth
          variant="outlined"
          InputProps={{
            sx: {
              borderRadius: 0,
              backgroundColor: '#0a0a0a',
              color: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#333',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#555',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          }}
        />
      </Box>
      
      <Box className="mb-8">
        <InputLabel 
          htmlFor="message" 
          className="text-white mb-2 text-sm font-light"
        >
          Message
        </InputLabel>
        <TextField
          id="message"
          fullWidth
          multiline
          rows={5}
          variant="outlined"
          InputProps={{
            sx: {
              borderRadius: 0,
              backgroundColor: '#0a0a0a',
              color: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#333',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#555',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          }}
        />
      </Box>
      
      <ModernButton type="submit" variant="primary">
        Send Message
      </ModernButton>
    </Box>
  );
}
