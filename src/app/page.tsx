"use client";

import dynamic from "next/dynamic";
import CursorGlow from "@/components/ui/CursorGlow";

// Dynamically import heavy sections for code splitting
const Navbar = dynamic(() => import("@/sections/Navbar"), { ssr: true });
const Hero = dynamic(() => import("@/sections/Hero"), { ssr: true });
const About = dynamic(() => import("@/sections/About"), { ssr: true });
const Skills = dynamic(() => import("@/sections/Skills"), { ssr: true });
const Experience = dynamic(() => import("@/sections/Experience"), { ssr: true });
const Projects = dynamic(() => import("@/sections/Projects"), { ssr: true });
const Services = dynamic(() => import("@/sections/Services"), { ssr: true });
const Certifications = dynamic(() => import("@/sections/Certifications"), { ssr: true });
const Contact = dynamic(() => import("@/sections/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/sections/Footer"), { ssr: true });

// Tech Stack Section - Inline component since it's small
function TechStack() {
  const techs = [
    { name: "Next.js 15", category: "Frontend" },
    { name: "React 19", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Framer Motion", category: "Animation" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "Tools" },
  ];

  return (
    <section id="tech-stack" className="section-padding">
      <div className="max-width-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Tech Stack
        </h2>
        <p className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto">
          The modern tools and technologies I use to build premium applications.
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {techs.map((tech, i) => (
            <div
              key={tech.name}
              className="glass-card rounded-xl px-5 py-3 hover:border-primary/30 transition-all duration-300 group cursor-default"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="text-text-primary font-medium group-hover:text-gradient transition-all">
                {tech.name}
              </span>
              <span className="text-xs text-text-secondary block mt-0.5">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Currently Learning Section
function CurrentlyLearning() {
  const learningItems = [
    "Machine Learning",
    "Agentic AI",
    "Cloud Computing",
    "Advanced Next.js",
    "System Design",
  ];

  return (
    <section id="currently-learning" className="section-padding">
      <div className="max-width-container">
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            🔄 Currently Learning
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Always evolving. Here&apos;s what I&apos;m diving into right now:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {learningItems.map((item) => (
              <div
                key={item}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border-custom text-text-primary font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Work With Me Section
function WhyWorkWithMe() {
  const reasons = [
    { title: "Fast Learner", desc: "I adapt quickly to new technologies and frameworks." },
    { title: "Problem Solver", desc: "I focus on solutions, not just code." },
    { title: "Clean Code", desc: "Maintainable, scalable, and well-documented code." },
    { title: "Modern UI", desc: "Pixel-perfect interfaces with premium experiences." },
    { title: "Business Mindset", desc: "I build products that drive real results." },
    { title: "Reliable Communication", desc: "Clear, timely updates throughout the project." },
  ];

  return (
    <section id="why-me" className="section-padding">
      <div className="max-width-container">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-4">
          Why Work With Me
        </h2>
        <p className="text-text-secondary text-lg text-center mb-12 max-w-2xl mx-auto">
          What sets me apart and makes me a valuable partner for your project.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-3xl mb-2 text-gradient font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{reason.title}</h3>
              <p className="text-text-secondary text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Let&apos;s turn your ideas into reality. I&apos;m just one message away.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Experience />
        <Projects />
        <Services />
        <Certifications />
        <CurrentlyLearning />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

