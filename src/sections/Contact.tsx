"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Send, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "menahil4310@gmail.com",
      href: "mailto:menahil4310@gmail.com",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "+92 315 1645896",
      href: "https://wa.me/923151645896",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi, Pakistan",
    },
  ];

  return (
    <section id="contact" className="relative section-padding">
      <div className="max-width-container">
        <SectionHeading
          title="Let&apos;s Work Together"
          subtitle="Have a project in mind? Let&apos;s discuss how I can help you build something amazing."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Get in Touch
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  I&apos;m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <div key={method.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary">{method.label}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-primary hover:text-gradient transition-all text-sm"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-text-primary text-sm">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-text-primary font-medium">Available for Projects</span>
                </div>
                <p className="text-text-secondary text-sm">
                  Currently accepting new projects and collaborations. Response time is typically within 24 hours.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Message Sent!</h3>
                <p className="text-text-secondary">
                  Thank you for reaching out! I&apos;ll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border-custom text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border-custom text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-text-secondary mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border-custom text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm text-text-secondary mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border-custom text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <MagneticButton variant="primary" size="lg" className="w-full">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <ArrowRight size={18} />
                    </span>
                  )}
                </MagneticButton>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

