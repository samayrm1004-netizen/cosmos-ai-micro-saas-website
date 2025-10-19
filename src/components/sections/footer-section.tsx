import { Phone, MessageCircle, Mail } from "lucide-react";
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="relative bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2af0cc8e-7a2f-4977-b4ec-3e381ecb54f8/generated_images/ultra-hd-professional-minimalist-logo-de-71f413a5-20251018055722.jpg?"
                  alt="Cosmos Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold">COSMOS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered solutions that accelerate growth
            </p>
            <p className="text-gray-500 italic text-sm">
              "We build what moves numbers"
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {["Services", "Case Studies", "Pricing", "Team"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white mb-4">Get Started</h3>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="inline-block text-center px-6 py-3 rounded-full bg-white hover:bg-gray-100 text-black font-semibold text-sm transition-all duration-300"
              >
                Book Discovery Call
              </a>
              <a
                href="#"
                className="inline-block text-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-sm transition-all duration-300"
              >
                $250 Deep-Dive
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a
                href="tel:+919307512816"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9307512816
              </a>
              <a
                href="https://wa.me/919307512816"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © 2025 Cosmos. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}