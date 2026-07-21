"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { projects } from "@/data/projects";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="relative section-padding">
      <div className="max-width-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world solutions built with modern technologies. Each project tells a story of problem-solving and innovation."
        />

        {/* Filter Buttons */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "glass-card text-text-secondary hover:text-text-primary hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <div className="glass-card rounded-xl overflow-hidden group h-full flex flex-col">
                  {/* Project Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:scale-110 transition-transform duration-500" />
                    <div className="text-center z-10">
                      <div className="text-4xl font-bold text-gradient mb-1">{project.title.charAt(0)}</div>
                      <div className="text-xs text-text-secondary">{project.category}</div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {project.overview}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-text-secondary border border-border-custom"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-text-secondary">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Expand / Buttons */}
                    <div className="mt-auto space-y-3">
                      <AnimatePresence>
                        {expandedId === project.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-3"
                          >
                            <div>
                              <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-1">Problem</h4>
                              <p className="text-sm text-text-secondary">{project.problem}</p>
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-1">Solution</h4>
                              <p className="text-sm text-text-secondary">{project.solution}</p>
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-1">Features</h4>
                              <div className="flex flex-wrap gap-1.5">
                                {project.features.map((feat) => (
                                  <span key={feat} className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary">
                                    {feat}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex items-center gap-2">
                        <MagneticButton variant="ghost" size="sm" href={project.githubUrl} external>
                          <Code2 size={14} />
                          Code
                        </MagneticButton>
                        
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="ml-auto p-2 text-text-secondary hover:text-text-primary transition-colors"
                        >
                          {expandedId === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-16">
            <div className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Want to see more?
              </h3>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                I&apos;m always building something new. Check out my GitHub for the latest projects and contributions.
              </p>
              <MagneticButton variant="primary" size="lg" href="https://github.com/Menahil43" external>
                <Code2 size={18} />
                View GitHub Profile
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

