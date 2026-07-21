"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-padding">
      <div className="max-width-container">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications that validate my expertise and commitment to continuous learning."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl p-6 group relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-gradient transition-all">
                    {cert.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-1">{cert.issuer}</p>
                  <p className="text-xs text-text-secondary/60 mb-4">{cert.date}</p>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:text-accent transition-colors"
                    >
                      View Credential <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

