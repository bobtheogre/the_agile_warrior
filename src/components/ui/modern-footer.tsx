import React from 'react';
import { Box, Typography, Container, Divider, Grid } from '@mui/material';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface ModernFooterProps {
  logoText: string;
  links: FooterLink[];
  socialLinks?: React.ReactNode;
  copyright?: string;
}

export function ModernFooter({ logoText, links, socialLinks, copyright }: ModernFooterProps) {
  return (
    <Box component="footer" className="bg-[#0a0a0a] py-12 md:py-16">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              component="div" 
              className="text-white font-light text-xl mb-4"
            >
              {logoText}
            </Typography>
            
            {socialLinks && (
              <Box className="flex gap-6 mt-6">
                {socialLinks}
              </Box>
            )}
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Box className="flex flex-wrap justify-end gap-8">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
        
        <Divider className="my-8 bg-[#222]" />
        
        <Box className="flex flex-col md:flex-row justify-between items-center">
          <Typography variant="body2" className="text-gray-500 mb-4 md:mb-0">
            {copyright || `&copy; ${new Date().getFullYear()} All rights reserved.`}
          </Typography>
          
          <Box className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
