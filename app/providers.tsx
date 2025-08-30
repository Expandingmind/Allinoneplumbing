"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { themes, applyThemeVars } from "@/theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const defaultTheme = process.env.NEXT_PUBLIC_THEME ?? "gold-navy";
  
  React.useEffect(() => {
    const root = document.documentElement;
    const t = themes[defaultTheme] ?? themes["gold-navy"];
    applyThemeVars(t, root);
  }, [defaultTheme]);
  
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}
