"use client";

import { motion } from "framer-motion";
import {
  Code2, Database, Cloud, Bot, Globe, TestTube, Wrench, Layout,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { skills } from "@/data/skills";
import type { SkillCategory } from "@/types";

const categoryIcons: Record<SkillCategory, React.ElementType> = {
  Languages: Code2,
  Frameworks: Layout,
  Backend: Globe,
  Databases: Database,
  Cloud: Cloud,
  Marketing: Bot,
  Testing: TestTube,
  "Development Tools": Wrench,
};

const categoryColors: Record<SkillCategory, string> = {
  Languages: "from-blue-500 to-cyan-500",
  Frameworks: "from-purple-500 to-pink-500",
  Backend: "from-green-500 to-emerald-500",
  Databases: "from-orange-500 to-red-500",
  Cloud: "from-sky-500 to-blue-500",
  Marketing: "from-pink-500 to-rose-500",
  Testing: "from-yellow-500 to-amber-500",
  "Development Tools": "from-gray-500 to-zinc-500",
};

export default function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, typeof skills>);

  const categories = Object.keys(groupedSkills) as SkillCategory[];

  return (
    <section id="skills" className="relative section-padding">
      <div className="max-width-container">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A comprehensive toolkit built through years of hands-on experience and continuous learning."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, catIndex) => {
            const Icon = categoryIcons[category];
            const colorClass = categoryColors[category];
            const categorySkills = groupedSkills[category];

            return (
              <ScrollReveal key={category} delay={catIndex * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-xl p-6 h-full group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${colorClass} bg-opacity-10`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">{category}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-text-secondary border border-border-custom hover:border-primary/30 hover:text-text-primary hover:bg-white/10 transition-all duration-300 cursor-default"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

