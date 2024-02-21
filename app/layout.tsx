import { type Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import { CssBaseline } from "@mui/material";

const oxanium = Oxanium({
  subsets: ["latin-ext"],
  weight: ["200"],
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: "Next.js + MUI SEO Menu Example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oxanium.variable}`}>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
