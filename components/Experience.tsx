"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    role: "Automatización & Agentes de IA",
    org: "Freelance · PYMES & Marcas Personales",
    desc: "Automaticé sistemas de mensajería y atención al cliente en +3 PYMEs desarrollando agentes de IA e integrando APIs/webhooks, reduciendo tiempos de respuesta y liberando horas operativas del equipo humano.",
  },
  {
    role: "Founder · Importación & Comercio",
    org: "Negocio propio",
    desc: "Dirijo un negocio de importación aplicando análisis de costos, pricing dinámico y control de rotación de stock para maximizar márgenes y optimizar capital de trabajo.",
  },
  {
    role: "Coordinador Académico & Tutor",
    org: "Ciencias Exactas · UBA CBC y Primer Año",
    desc: "Coordino un staff de docentes cubriendo demanda en niveles primario, secundario y universitario. Dicto Análisis Matemático, Álgebra Lineal y Estadística Descriptiva, delegando estratégicamente para garantizar cobertura total.",
  },
  {
    role: "Wellness Coach basado en Datos",
    org: "Cartera personal + sistema de afiliados",
    desc: "Periodizo mesociclos ajustando volumen e intensidad según KPIs físicos semanales. Gestiono retención vía feedback continuo y opero un sistema de afiliados con comisiones por venta.",
  },
];

const education = [
  { title: "Negociación", org: "Santander Open Academy" },
  { title: "Storytelling", org: "Santander Open Academy" },
  { title: "Data Science Intro", org: "Santander Open Academy" },
  { title: "Gestión Agile", org: "Santander Open Academy" },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title="Experiencia & Educación"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Experience column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-5 h-5 text-cyan" />
            <h3 className="font-display text-xl font-semibold uppercase tracking-wider">
              Experiencia
            </h3>
          </div>
          <div className="space-y-4">
            {experience.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-xl p-5 border-l-2 border-l-electric"
              >
                <h4 className="font-semibold text-white">{item.role}</h4>
                <p className="text-cyan text-xs uppercase tracking-wider mb-2">
                  {item.org}
                </p>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-5 h-5 text-cyan" />
            <h3 className="font-display text-xl font-semibold uppercase tracking-wider">
              Educación
            </h3>
          </div>
          <div className="space-y-4">
            {education.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-xl p-5 border-l-2 border-l-cyan"
              >
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="text-cyan text-xs uppercase tracking-wider">
                  {item.org}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
