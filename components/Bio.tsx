"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Target, Brain, Zap } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Precisión Actuarial",
    desc: "Rigor matemático aplicado a la toma de decisiones bajo incertidumbre.",
  },
  {
    icon: Brain,
    title: "Modelos Estadísticos",
    desc: "Obsesión por convertir la teoría en sistemas que generan valor real.",
  },
  {
    icon: Zap,
    title: "Ejecución Automatizada",
    desc: "Pipelines de IA y automatización que eliminan la fricción operativa.",
  },
];

export default function Bio() {
  return (
    <Section id="bio" eyebrow="Trayectoria" title="Matías Bellido — 20">
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 transition-all"
          >
            <p.icon className="w-8 h-8 text-cyan mb-4" />
            <h3 className="font-display text-xl font-semibold mb-2">
              {p.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-lg text-white/70 leading-relaxed"
      >
        Pragmático, curioso y disciplinado. No me conformo con entender la
        teoría de los modelos — me obsesiona cómo impactan en el mundo real.
        Conecto la solidez estadística de mi formación en Actuaría con la
        agilidad de Python, R y SQL para transformar datos en decisiones de
        negocio estratégicas. Busco sumarme a equipos de Data o Finanzas
        donde pueda aportar valor operativo desde el día uno.
      </motion.p>
    </Section>
  );
}
