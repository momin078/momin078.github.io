import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Mokhlesur Rahman Momin | Developer Portfolio",
  description:
    "Portfolio of Md Mokhlesur Rahman Momin, focused on MERN stack development and Software Quality Assurance.",
  openGraph: {
    title: "Md Mokhlesur Rahman Momin | Developer Portfolio",
    description: "MERN Stack Development · Software Quality Assurance",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
