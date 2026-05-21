import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Metric Autopilot – Auto-update investor dashboards from tools",
  description: "Connects to Stripe, analytics, and CRM tools to automatically update investor dashboards with key metrics and growth charts."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9333fa20-fd3a-4ec8-a721-c72015aa707c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
