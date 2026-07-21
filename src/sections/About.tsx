"use client";

import { motion } from "framer-motion";
import { Code2, Heart, Lightbulb, Target, Sparkles, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FloatingGradient from "@/components/ui/FloatingGradient";

const values = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "I believe in writing code that is not just functional, but beautiful. Every line should tell a story.",
  },
  {
    icon: Heart,
    title: "User First",
    description: "Technology should serve people. I design every experience with the end-user in mind.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "I don't just follow trends. I explore possibilities and push boundaries to create something unique.",
  },
  {
    icon: Target,
    title: "Results Oriented",
    description: "Every project is measured by impact. I build solutions that drive real business results.",
  },
  {
    icon: Sparkles,
    title: "Pixel Perfect",
    description: "Details matter. From spacing to animations, everything should feel intentional and premium.",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Speed is a feature. I optimize every aspect for the best possible user experience.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <FloatingGradient className="top-0 right-0" color="primary" />
      
      <div className="max-width-container">
        <SectionHeading
          title="About Me"
          subtitle="A developer who codes with purpose, designs with empathy, and builds with passion."
        />

        {/* Story */}
        <ScrollReveal className="mb-20">
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Quote / Story */}
              <div className="md:col-span-3">
                <div className="text-6xl text-gradient mb-4">&ldquo;</div>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  I discovered my passion for software engineering when I realized that
                  code could transform ideas into reality. As a Software Engineering student
                  in Karachi, Pakistan, I&apos;ve spent years mastering the art of building
                  digital products that make a difference.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  My journey started with curiosity — how do websites work? How can
                  technology solve real problems? Today, that curiosity has evolved into a
                  mission: to build premium, AI-powered applications that push the boundaries
                  of what&apos;s possible on the web.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  I specialize in full-stack development, AI integration, and digital marketing.
                  Every project I take on is an opportunity to create something exceptional.
                  Whether it&apos;s a complex web application, an AI-powered tool, or a marketing
                  strategy, I bring the same level of dedication and attention to detail.
                </p>
              </div>

              {/* Stats */}
              <div className="md:col-span-2 flex flex-col gap-4">
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-gradient mb-1">3+</div>
                  <div className="text-text-secondary text-sm">Years of Learning & Building</div>
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-gradient mb-1">7+</div>
                  <div className="text-text-secondary text-sm">Projects Delivered</div>
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-gradient mb-1">15+</div>
                  <div className="text-text-secondary text-sm">Technologies Mastered</div>
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-gradient mb-1">∞</div>
                  <div className="text-text-secondary text-sm">Passion for Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Values / Philosophy */}
        <ScrollReveal delay={0.2}>
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-12">
            My Development Philosophy
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <value.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-text-primary mb-2">{value.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

