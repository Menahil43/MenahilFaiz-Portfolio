"use client";

import { motion } from "framer-motion";
import {
  Globe, Layers, Server, Brain, Target, Briefcase,
  Search, TrendingUp, Settings, ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Globe, Layers, Server, Brain, Target, Briefcase, Search, TrendingUp, Settings,
};

export default function Services() {
  return (
    <section id="services" className="relative section-padding">
      <div className="max-width-container">
        <SectionHeading
          title="Services"
          subtitle="Professional development and marketing services to help you build, grow, and succeed online."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;

            return (
              <ScrollReveal key={service.id} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-xl p-6 h-full flex flex-col group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 flex-1">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-text-secondary">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <MagneticButton variant="ghost" size="sm" href="#contact">
                    <span className="flex items-center gap-1">
                      Get Started <ArrowRight size={14} />
                    </span>
                  </MagneticButton>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-16">
            <div className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Not sure what you need?
              </h3>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                Let&apos;s discuss your project. I&apos;ll help you figure out the best approach
                and provide a free consultation.
              </p>
              <MagneticButton variant="primary" size="lg" href="#contact">
                Schedule a Free Consultation
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

