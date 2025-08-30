import { GoldNavyTheme } from "./gold-navy";
import { DarkLuxuryTheme } from "./dark-luxury";
import type { ThemeTokens } from "./tokens";

export const themes: Record<string, ThemeTokens> = {
  "gold-navy": GoldNavyTheme,
  "dark-luxury": DarkLuxuryTheme,
};

export function applyThemeVars(t: ThemeTokens, root: HTMLElement) {
  root.style.setProperty("--background", t.background);
  root.style.setProperty("--foreground", t.foreground);
  root.style.setProperty("--card", t.card);
  root.style.setProperty("--card-foreground", t.cardForeground);
  root.style.setProperty("--popover", t.popover);
  root.style.setProperty("--popover-foreground", t.popoverForeground);
  root.style.setProperty("--primary", t.primary);
  root.style.setProperty("--primary-foreground", t.primaryForeground);
  root.style.setProperty("--secondary", t.secondary);
  root.style.setProperty("--secondary-foreground", t.secondaryForeground);
  root.style.setProperty("--muted", t.muted);
  root.style.setProperty("--muted-foreground", t.mutedForeground);
  root.style.setProperty("--accent", t.accent);
  root.style.setProperty("--accent-foreground", t.accentForeground);
  root.style.setProperty("--destructive", t.destructive);
  root.style.setProperty("--destructive-foreground", t.destructiveForeground);
  root.style.setProperty("--border", t.border);
  root.style.setProperty("--input", t.input);
  root.style.setProperty("--ring", t.ring);
  root.style.setProperty("--radius", t.radius);
}
