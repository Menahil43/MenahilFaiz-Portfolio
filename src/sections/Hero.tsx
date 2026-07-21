"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import FloatingGradient from "@/components/ui/FloatingGradient";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import AnimatedRoleText from "@/components/ui/AnimatedRoleText";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradients */}
      <FloatingGradient className="top-20 left-10" color="primary" />
      <FloatingGradient className="bottom-20 right-10" color="secondary" />
      <FloatingGradient className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="accent" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div
        ref={containerRef}
        className="relative max-width-container px-6 py-20 text-center"
        style={{ transform: "translate(var(--mouse-x, 0), var(--mouse-y, 0))" }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-text-secondary mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-4 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-gradient">Menahil</span>
          </h1>
          <AnimatedRoleText />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building premium digital experiences that blend cutting-edge technology
          with beautiful design. Specializing in full-stack development, AI solutions,
          and digital marketing.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <MagneticButton variant="primary" size="lg" href="#projects">
            <ExternalLink size={18} />
            View Projects
          </MagneticButton>
          
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { end: 7, suffix: "+", label: "Projects Completed" },
            { end: 5, suffix: "+", label: "Happy Clients" },
            { end: 3, suffix: "+", label: "Years Experience" },
            { end: 5, suffix: "⭐", label: "Client Rating" },
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-xl p-4">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-text-secondary cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

