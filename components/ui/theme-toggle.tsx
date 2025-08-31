"use client";

import * as React from "react";
import { themes, applyThemeVars } from "@/theme";
import { Sun, Moon } from "lucide-react";

const order = ["gold-navy", "dark-luxury"];
const themeDisplayNames = {
  "gold-navy": "Light Mode",
  "dark-luxury": "Dark Mode"
};

export function ThemeToggle() {
  const [idx, setIdx] = React.useState(0);
  
  React.useEffect(() => {
    const root = document.documentElement;
    applyThemeVars(themes[order[idx]], root);
  }, [idx]);
  
  function cycle() { 
    setIdx((i) => (i + 1) % order.length); 
  }
  
  const isDark = order[idx] === "dark-luxury";
  const currentThemeName = themeDisplayNames[order[idx]] || order[idx];
  
  return (
    <button
      onClick={cycle}
      className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="font-medium">{currentThemeName}</span>
    </button>
  );
}
