"use client";
import { useState, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { Code, LineChart, Users, Award } from "lucide-react";

// Custom components
import { ModernNavbar } from "@/components/ui/modern-navbar";
import { ModernSection } from "@/components/ui/modern-section";
import { ModernCard } from "@/components/ui/modern-card";
import { ModernFooter } from "@/components/ui/modern-footer";
import { GridContainer, GridItem } from "@/components/ui/grid-item";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  // Ensure hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Define navigation links
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" }
  ];

  // Define core values
  const coreValues = [
    {
      icon: <Users size={32} className="neon-purple" />,
      title: "Servant Leadership",
      description: "Empowering teams through guidance rather than control, removing impediments and fostering self-organization."
    },
    {
      icon: <LineChart size={32} className="neon-blue" />,
      title: "Continuous Improvement",
      description: "Committed to ongoing learning and refinement of processes, embracing change as a pathway to better outcomes."
    },
    {
      icon: <Award size={32} className="neon-text" />,
      title: "Outcome-Focused",
      description: "Prioritizing valuable results over rigid processes, measuring success by the impact on business objectives."
    },
    {
      icon: <Code size={32} className="neon-blue" />,
      title: "Technical Excellence",
      description: "Advocating for quality code, sustainable engineering practices, and strong technical foundations."
    }
  ];

  if (!mounted) return null;

  return (
    <Box className="modern-grid-container">
      {/* Navigation */}
      <ModernNavbar links={navLinks} logoText="Agile Warrior" />

      {/* Synthwave grid background */}
      <div className="retro-grid"></div>
      
      {/* Header */}
      <Box sx={{ pt: { xs: 12, md: 16 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" className="gradient-text" sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, mb: 2, fontWeight: 900 }}>
            About Me
          </Typography>
          <Typography variant="h4" className="neon-blue" sx={{ mb: 4, maxWidth: 700 }}>
            Agile Coach & Digital Transformation Specialist
          </Typography>
        </Container>
      </Box>

      {/* Biography */}
      <ModernSection id="bio">
        <Container maxWidth="lg">
          <GridContainer spacing={4}>
            <GridItem xs={12} md={4}>
              <Box className="synthwave-profile" sx={{ 
                borderRadius: '16px', 
                overflow: 'hidden',
                boxShadow: '0 0 20px var(--glow-color), 0 0 30px rgba(0, 162, 255, 0.3)', 
                height: { xs: '300px', md: '400px' },
                position: 'relative'
              }}>
                {/* Replace with your actual image */}
                <Box 
                  component="img" 
                  src="/images/profile.jpg" 
                  alt="Profile" 
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </GridItem>
            <GridItem xs={12} md={8} variant="card">
              <Typography variant="h3" className="gradient-text" sx={{ mb: 3 }}>
                My Journey
              </Typography>
              <Typography paragraph sx={{ mb: 2, fontSize: '1.1rem' }}>
                With over 15 years in the tech industry, I've guided organizations through digital transformations that enhance both team dynamics and business outcomes. My approach blends technical expertise with human-centered leadership to create sustainable agile environments.
              </Typography>
              <Typography paragraph sx={{ mb: 2, fontSize: '1.1rem' }}>
                I specialize in coaching Scrum Masters, Product Owners, and development teams in adopting agile mindsets that go beyond ceremonies. My work has helped Fortune 500 companies, startups, and government agencies streamline delivery, improve product quality, and foster innovation cultures.
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.1rem' }}>
                When I'm not facilitating workshops or coaching teams, you'll find me contributing to open-source projects, speaking at industry conferences, or exploring the latest in AI and machine learning technologies.
              </Typography>
            </GridItem>
          </GridContainer>
        </Container>
      </ModernSection>

      {/* Core Values */}
      <ModernSection id="values" darkBg>
        <Container maxWidth="lg">
          <Typography variant="h2" className="gradient-text" sx={{ mb: 6, textAlign: 'center' }}>
            Core Values
          </Typography>
          
          <Grid container spacing={4}>
            {coreValues.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ModernCard
                  className="modern-grid-card"
                  icon={value.icon}
                  title={value.title}
                >
                  <Typography variant="body2" className="neon-text">
                    {value.description}
                  </Typography>
                </ModernCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ModernSection>

      {/* Certifications Section */}
      <ModernSection id="certifications">
        <Container maxWidth="lg">
          <Typography variant="h2" className="gradient-text" sx={{ mb: 6, textAlign: 'center' }}>
            Certifications & Education
          </Typography>
          
          <GridContainer spacing={4}>
            <GridItem xs={12} md={6} variant="card">
              <Typography variant="h4" className="neon-purple" sx={{ mb: 3 }}>
                Professional Certifications
              </Typography>
              <Box component="ul" sx={{ pl: 3 }}>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="h6" className="neon-text">Certified Scrum Master (CSM)</Typography>
                  <Typography>Scrum Alliance, 2015</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="h6" className="neon-text">Professional Scrum Master II (PSM II)</Typography>
                  <Typography>Scrum.org, 2017</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="h6" className="neon-text">SAFe Program Consultant (SPC)</Typography>
                  <Typography>Scaled Agile, 2019</Typography>
                </Box>
                <Box component="li">
                  <Typography variant="h6" className="neon-text">ICAgile Certified Professional (ICP-ACC)</Typography>
                  <Typography>ICAgile, 2020</Typography>
                </Box>
              </Box>
            </GridItem>
            <GridItem xs={12} md={6} variant="card">
              <Typography variant="h4" className="neon-blue" sx={{ mb: 3 }}>
                Education
              </Typography>
              <Box component="ul" sx={{ pl: 3 }}>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="h6" className="neon-text">Master of Science in Software Engineering</Typography>
                  <Typography>Stanford University, 2011</Typography>
                </Box>
                <Box component="li">
                  <Typography variant="h6" className="neon-text">Bachelor of Science in Computer Science</Typography>
                  <Typography>MIT, 2007</Typography>
                </Box>
              </Box>
            </GridItem>
          </GridContainer>
        </Container>
      </ModernSection>

      {/* Personal Interests */}
      <ModernSection id="interests" darkBg>
        <Container maxWidth="lg">
          <Typography variant="h2" className="gradient-text" sx={{ mb: 6, textAlign: 'center' }}>
            Beyond Work
          </Typography>
          
          <GridItem xs={12} variant="card">
            <Typography variant="h4" className="neon-text" sx={{ mb: 3 }}>
              Personal Interests
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem' }}>
              When I'm not engrossed in agile transformations, I'm an avid mountain biker and outdoor enthusiast. The challenge of navigating difficult trails mirrors the complex problems I help organizations solve – requiring focus, adaptability, and a willingness to embrace uncertainty.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem' }}>
              I'm also passionate about mentoring the next generation of agile practitioners. I volunteer with local coding boot camps and regularly participate in meetups to share knowledge and experiences with those looking to grow in the field.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem' }}>
              Technology continues to fascinate me beyond my professional work. I experiment with IoT projects, contribute to open source, and stay on top of emerging tech trends that might shape the future of agile methodologies.
            </Typography>
          </GridItem>
        </Container>
      </ModernSection>

      {/* Footer */}
      <ModernFooter />
    </Box>
  );
}
