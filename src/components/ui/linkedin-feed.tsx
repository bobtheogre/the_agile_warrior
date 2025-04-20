import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Linkedin } from "lucide-react";

interface LinkedInFeedProps {
  profileUrl: string;
  posts?: { url: string; title: string; preview?: string }[];
}

export function LinkedInFeed({ profileUrl, posts }: LinkedInFeedProps) {
  return (
    <Box className="modern-grid-card" sx={{ mt: 8, mb: 8 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Linkedin size={28} className="neon-blue" />
        <Typography variant="h5" sx={{ ml: 2 }} className="gradient-text">
          Latest from LinkedIn
        </Typography>
        <Button
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          sx={{ ml: 'auto', borderColor: 'var(--primary)', color: 'var(--primary)', fontWeight: 700 }}
        >
          View Profile
        </Button>
      </Box>
      <Typography variant="body2" sx={{ mb: 3, color: 'var(--foreground)', opacity: 0.7 }}>
        Connect with me for Agile insights, leadership tips, and more!
      </Typography>
      {posts && posts.length > 0 ? (
        <Box>
          {posts.map((post, idx) => (
            <Box key={idx} sx={{ mb: 3 }}>
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="neon-blue" style={{ fontWeight: 600, fontSize: '1.08rem' }}>{post.title}</a>
              {post.preview && (
                <Typography variant="body2" sx={{ color: 'var(--foreground)', opacity: 0.8, mt: 0.5 }}>{post.preview}</Typography>
              )}
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="body2" sx={{ color: 'var(--foreground)', opacity: 0.7 }}>
          (LinkedIn does not allow direct feed embedding. Contact me or follow for updates!)
        </Typography>
      )}
    </Box>
  );
}
