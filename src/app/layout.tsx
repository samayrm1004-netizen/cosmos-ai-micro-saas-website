import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import CosmicLoader from "@/components/cosmic-loader";

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
        <vapi-widget
          public-key="d3167409-64a4-4f79-b9b4-ccc1f7333759"
          assistant-id="563e7f19-0ea8-4985-aaa7-33096e04bb8b"
          mode="voice"
          theme="dark"
          base-bg-color="#061113"
          accent-color="#e5e328"
          cta-button-color="#1e523b"
          cta-button-text-color="#efefef"
          border-radius="large"
          size="full"
          position="bottom-right"
          title="TALK WITH SHEETAL (AI)"
          start-button-text="Start"
          end-button-text="End Call"
          chat-first-message="Hey, How can I help you today?"
          chat-placeholder="Type your message..."
          voice-show-transcript="true"
          consent-required="true"
          consent-title="Terms and conditions"
          consent-content='By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.'
          consent-storage-key="vapi_widget_consent"
        />
      </body>
    </html>
  );
}