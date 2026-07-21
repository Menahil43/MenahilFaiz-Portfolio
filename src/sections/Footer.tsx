"use client";

import { ExternalLink, Code2, MessageSquare, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-custom">
      <div className="max-width-container px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-2">
              MENA<span className="text-gradient">DEV</span>
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Building premium digital experiences with cutting-edge technology and beautiful design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Projects", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/Menahil43"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-primary/30 transition-all"
              >
                <Code2 size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-primary/30 transition-all"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href="https://wa.me/923151645896"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-primary/30 transition-all"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-custom pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-secondary text-xs">
              &copy; {currentYear} Menahil Faiz. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

