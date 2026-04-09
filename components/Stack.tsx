"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const stack = [
  "Python",
  "R",
  "SQL",
  "Claude w/ OpenClaw",
  "N8N & Make",
  "Power BI",
  "Obsidian",
  "APIs & Webhooks",
];

export default function Stack() {
  return (
    <Section id="stack" eyebrow="Toolkit" title="Stack Tecnológico">
      <div className="flex flex-wrap gap-3">
        {stack.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass px-6 py-3 rounded-full text-white/80 hover:text-cyan hover:shadow-glow transition-all cursor-default font-medium"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
