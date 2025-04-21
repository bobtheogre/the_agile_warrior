import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, Container } from '@mui/material';
import { Menu as MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

interface NavLink {
  label: string;
  href: string;
}

interface ModernNavbarProps {
  links: NavLink[];
  logoText: string;
}

export function ModernNavbar({ links, logoText }: ModernNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
          transition: 'background-color 0.3s ease',
          boxShadow: scrolled ? '0 1px 0 rgba(255, 255, 255, 0.1)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: 80 }}>
            <Link
              href="/"
              className="navbar-logo-glow"
              style={{ textDecoration: 'none', background: 'none' }}
            >
              {logoText}
            </Link>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="navbar-link"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link synthwave-glow"
                style={{ textDecoration: 'none', background: 'none' }}
              >
                DOWNLOAD RESUME
              </Link>
              <ThemeToggle />
             
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ display: { md: 'none' } }}
            >
              {mobileMenuOpen ? <X /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
            backgroundColor: '#111',
            color: 'white',
          },
        }}
      >
        <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 6 }}>
            <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
              <X />
            </IconButton>
          </Box>
          
          <List sx={{ flexGrow: 1 }}>
            {links.map((link) => (
              <ListItem 
                key={link.href} 
                sx={{ 
                  py: 2, 
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Link 
                  href={link.href} 
                  className="navbar-link-mobile"
                  onClick={toggleDrawer}
                >
                  {link.label}
                </Link>
              </ListItem>
            ))}
            <ListItem>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link-mobile synthwave-glow"
                onClick={toggleDrawer}
              >
                DOWNLOAD RESUME
              </Link>
            </ListItem>
            <ListItem>
              <ThemeToggle />
            </ListItem>
          </List>
          
          
        </Box>
      </Drawer>
    </>
  );
}
