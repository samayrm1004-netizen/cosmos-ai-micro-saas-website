import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import CosmicLoader from "@/components/cosmic-loader";
import AIWidget from "@/components/ai-widget";

export const metadata: Metadata = {
  title: "Cosmos - AI Automation & Micro-SaaS by Samay R.M.",
  description: "AI systems that handle the grind 24/7 — crafted in the Cosmos by Samay R.M.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CosmicLoader />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Script
          src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"
          strategy="afterInteractive"
        />
        {children}
        <VisualEditsMessenger />
        <AIWidget />
        <div style={{ display: 'none' }}>
          <vapi-widget
            assistant-id="563e7f19-0ea8-4985-aaa7-33096e04bb8b"
            public-key="d3167409-64a4-4f79-b9b4-ccc1f7333759"
          />
        </div>
      </body>
    </html>
  );
}