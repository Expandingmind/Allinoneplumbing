import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/app/providers";

export const metadata: Metadata = {
  title: "All In One Plumbing — Fast, Reliable Service",
  description: "Professional plumbing services. Licensed & insured. Same-day service available.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
