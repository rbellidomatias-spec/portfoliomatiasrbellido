"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Lock, Workflow, Bot, Clock } from "lucide-react";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Proyectos">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Symbiosis AI - locked */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-2xl p-8 overflow-hidden md:row-span-2 min-h-[420px] flex flex-col justify-between group"
        >
          {/* Blur overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/40 z-20 flex flex-col items-center justify-center gap-4">
            <div className="relative">
              <Lock className="w-16 h-16 text-cyan glow-text" />
              <div className="absolute inset-0 bg-cyan/30 blur-2xl -z-10" />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan">
              Status
            </p>
            <p className="font-display text-2xl font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 animate-pulse-slow" />
              Building...
            </p>
          </div>

          {/* Background content */}
          <div className="relative z-10 opacity-60">
            <div className="inline-block px-3 py-1 rounded-full bg-electric/20 text-cyan text-xs uppercase tracking-wider mb-4">
              Flagship Project
            </div>
            <h3 className="font-display text-4xl font-bold mb-4 gradient-text">
              Symbiosis AI
            </h3>
            <p className="text-white/70 leading-relaxed">
              Tras encuestar a +100 alumnos de entre 17-28 años en CABA, detecté una falla sistémica: La formación teórica que da la mayoria de universidades no se traducen en capacidad técnica laboral por planes de estudio desactualizados.
              <br /><br />
              Symbiosis AI es la respuesta pragmática a este diagnóstico. Actúa como un puente que conecta el contenido universitario con la ejecución real. Transformamos la teoría académica en scripts funcionales de Python y R, asegurando que el conocimiento no solo se acumule, sino que se ejecute en el mercado actual.
            </p>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-electric/20 rounded-full blur-3xl" />
        </motion.div>

        {/* AI Agents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-8"
        >
          <Bot className="w-10 h-10 text-cyan mb-4" />
          <h3 className="font-display text-2xl font-bold mb-3">
            AI Agents
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Diseñé e implementé agentes conversacionales sobre n8n
            para PYMEs y marcas personales. Integración vía APIs y webhooks que
            automatizan el primer contacto, calificación de leads y respuestas
            frecuentes — liberando al equipo humano para tareas de mayor impacto.
          </p>
        </motion.div>

        {/* Pipelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8"
        >
          <Workflow className="w-10 h-10 text-cyan mb-4" />
          <h3 className="font-display text-2xl font-bold mb-3">
            Pipelines N8N & Make
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Flujos end-to-end que conectan CRMs, hojas de cálculo, mensajería y
            LLMs. De trigger a acción sin intervención manual: sincronización de
            datos, notificaciones condicionales y procesamiento de documentos en
            tiempo real.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
