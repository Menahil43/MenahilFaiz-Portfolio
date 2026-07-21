"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { timelineEvents } from "@/data/experience";

const typeConfig = {
  work: { icon: Briefcase, color: "from-primary to-cyan-500" },
  education: { icon: GraduationCap, color: "from-secondary to-purple-500" },
  milestone: { icon: Star, color: "from-accent to-teal-500" },
};

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding">
      <div className="max-width-container">
        <SectionHeading
          title="Experience & Timeline"
          subtitle="My journey through education, work, and milestones that shaped my career."
        />

        <ScrollReveal>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const config = typeConfig[event.type];
                const Icon = config.icon;

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative pl-20"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 top-1">
                      <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${config.color} p-0.5`}>
                        <div className="w-full h-full rounded-full bg-bg-card flex items-center justify-center">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary">{event.title}</h3>
                          <p className="text-text-secondary text-sm">{event.subtitle}</p>
                        </div>
                        <span className="text-xs font-medium text-gradient whitespace-nowrap ml-4">
                          {event.date}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed mt-3">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

