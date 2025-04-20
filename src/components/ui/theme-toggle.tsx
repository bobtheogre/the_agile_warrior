"use client";
import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  // Set theme on mount based on localStorage or system preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    let initial = localStorage.getItem("theme");
    if (!initial) {
      initial = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    setTheme(initial);
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${initial}`);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${newTheme}`);
  };

  if (!theme) return null;

  return (
    <IconButton 
      aria-label="Toggle light/dark mode"
      onClick={toggleTheme}
      sx={{ ml: 2, color: "var(--foreground)", border: "1px solid var(--primary)", borderRadius: 2 }}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </IconButton>
  );
}
