"use client";
import { useState, useEffect } from "react";
import { ThemeProvider, Box } from "@mui/material";
import { Award, Briefcase, Code, LineChart, Users, Clock, Github, Linkedin, Twitter } from "lucide-react";

// Custom components
import { ModernSection } from "@/components/ui/modern-section";
import { ModernTimeline } from "@/components/ui/modern-timeline";
import { ModernStats } from "@/components/ui/modern-stats";
import { SynthwaveSkillsGrid } from "@/components/ui/synthwave-skill-card";
import { ModernCard } from "@/components/ui/modern-card";
import { ModernNavbar } from "@/components/ui/modern-navbar";
import { ModernHero } from "@/components/ui/modern-hero";
import { ModernFooter } from "@/components/ui/modern-footer";
import { ModernContactForm } from "@/components/ui/modern-contact-form";
import { LinkedInFeed } from "@/components/ui/linkedin-feed";
import theme from "@/theme";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  // Ensure hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Define navigation links
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  // Define experience items
  const experienceItems = [
    {
      title: "Lead Agile Coach",
      company: "TechInnovate Inc.",
      period: "2020 - Present",
      description: "Leading enterprise-wide Agile transformation initiatives, coaching executive leadership, and mentoring Scrum Masters across multiple business units. Implemented scaled Agile frameworks resulting in 40% faster time-to-market."
    },
    {
      title: "Senior Scrum Master",
      company: "Global Solutions Corp",
      period: "2016 - 2020",
      description: "Facilitated Agile ceremonies for multiple cross-functional teams, removed impediments, and coached team members on Agile best practices. Improved team velocity by 35% and reduced defect rates by 60%."
    },
    {
      title: "Agile Project Manager",
      company: "Innovative Startups Ltd",
      period: "2012 - 2016",
      description: "Managed multiple Agile projects from inception to delivery, established Agile practices within the organization, and trained teams on Scrum methodology. Successfully delivered 12 major product releases on time and within budget."
    }
  ];

  // Define stat items
  const statItems = [
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "100+", label: "Teams Coached" },
    { value: "5", label: "Certifications" }
  ];

  // Define skill items
  const skillItems = [
    {
      icon: <Users size={32} />,
      title: "Team Coaching",
      description: "Expert in coaching teams through Agile transformations and building high-performing, self-organizing teams."
    },
    {
      icon: <LineChart size={32} />,
      title: "Metrics & Analytics",
      description: "Skilled in establishing meaningful metrics and using data to drive continuous improvement."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Agile Frameworks",
      description: "Deep expertise in Scrum, Kanban, SAFe, LeSS, and other Agile and scaled Agile frameworks."
    },
    {
      icon: <Code size={32} />,
      title: "Technical Background",
      description: "Strong technical understanding that enables effective communication with development teams."
    },
    {
      icon: <Clock size={32} />,
      title: "Process Optimization",
      description: "Expertise in identifying bottlenecks and optimizing workflows for maximum efficiency."
    },
    {
      icon: <Award size={32} />,
      title: "Certifications",
      description: "Certified Scrum Master (CSM), Professional Scrum Master (PSM), SAFe Program Consultant (SPC), and more."
    }
  ];

  // Social icons
  const socialIcons = (
    <>
      <a href="#" className="text-gray-400 hover:text-[rgb(51,167,181)] transition-colors" aria-label="LinkedIn">
        <Linkedin size={24} />
      </a>
      <a href="#" className="text-gray-400 hover:text-[rgb(51,167,181)] transition-colors" aria-label="Twitter">
        <Twitter size={24} />
      </a>
      <a href="#" className="text-gray-400 hover:text-[rgb(51,167,181)] transition-colors" aria-label="GitHub">
        <Github size={24} />
      </a>
    </>
  );

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Box className="min-h-screen bg-[#111] text-white">
        {/* Navigation */}
        <ModernNavbar 
          logoText="The Agile Warrior" 
          links={navLinks} 
        />

        {/* Hero Section */}
        <ModernHero
          subtitle="Bob Huff"
          title="The Agile Warrior"
          description="Experienced AI Transformation Expert, Agile Coach, Scrum Master and Martial Artist with a proven track record of transforming teams and delivering exceptional results."
          primaryCta={{
            text: "View Experience",
            action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
          }}
          secondaryCta={{
            text: "Contact Me",
            action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          socialIcons={socialIcons}
          image={null}
        />

        {/* About Section */}
        <Box sx={{ mt: -22 }}>
          <ModernSection
            id="about"
            title="Passionate About Agile Excellence"
            subtitle="With over 15 years of experience in Agile methodologies, I&apos;ve helped organizations of all sizes transform their development processes and achieve remarkable results."
          >
            <Box className="mb-16">
              <Box className="text-gray-400 mb-8 max-w-3xl">
                I specialize in coaching teams through Agile transformations, implementing Scrum and Kanban frameworks, and fostering a culture of continuous improvement. My approach combines technical expertise with strong leadership skills to help teams deliver high-quality products efficiently.
              </Box>
              <Box className="text-gray-400 mb-12 max-w-3xl">
                Throughout my career, I&apos;ve worked with Fortune 500 companies, startups, and everything in between. I&apos;m passionate about sharing knowledge and empowering teams to reach their full potential.
              </Box>
            </Box>
            
            <ModernStats items={statItems} />
          </ModernSection>
        </Box>

        {/* Experience Section */}
        <ModernSection
          id="experience"
          title="Professional Journey"
          subtitle="A track record of success across industries and organizations."
          isDark={true}
        >
          <ModernTimeline items={experienceItems} />
        </ModernSection>

        {/* Skills Section */}
        <ModernSection
          id="skills"
          title="Areas of Expertise"
          subtitle="A comprehensive toolkit of Agile methodologies and leadership skills."
        >
          <SynthwaveSkillsGrid skills={skillItems} />
        </ModernSection>

        {/* LinkedIn Feed Section */}
        <ModernSection id="linkedin" title="LinkedIn Activity">
          <LinkedInFeed profileUrl="https://www.linkedin.com/in/bobhuff1/" />
        </ModernSection>

        {/* Contact Section */}
        <ModernSection
          id="contact"
          title="Get In Touch"
          subtitle="Interested in working together? Let&apos;s discuss how I can help your organization."
          isDark={true}
        >
          <Box className="space-y-4 mb-8">
            <Box className="text-gray-400">
              Feel free to reach out if you&apos;re looking for an Agile coach, need help with your team&apos;s transformation, or just want to connect.
            </Box>
          </Box>
          
          <Box className="space-y-4">
            <Box className="flex items-center gap-3">
              <Box className="w-10 h-10 flex items-center justify-center border border-[#333]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fcb900]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </Box>
              <Box className="text-gray-400">
                (555) 123-4567
              </Box>
            </Box>
            
            <Box className="flex items-center gap-3">
              <Box className="w-10 h-10 flex items-center justify-center border border-[#333]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fcb900]"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </Box>
              <Box className="text-gray-400">
                bob@agilewarrior.com
              </Box>
            </Box>
            
            <Box className="flex items-center gap-3">
              <Box className="w-10 h-10 flex items-center justify-center border border-[#333]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fcb900]"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </Box>
              <Box className="text-gray-400">
                San Francisco, CA
              </Box>
            </Box>
          </Box>
          
          <Box className="mt-8">
            <Box className="text-gray-500 mb-4">
              Connect with me
            </Box>
            <Box className="flex gap-6">
              {socialIcons}
            </Box>
          </Box>
        </ModernSection>

        {/* Footer */}
        <ModernFooter
          logoText="The Agile Warrior"
          links={navLinks}
          socialLinks={socialIcons}
          copyright={`&copy; ${new Date().getFullYear()} Bob Huff. All rights reserved.`}
        />
      </Box>
    </ThemeProvider>
  );
}
