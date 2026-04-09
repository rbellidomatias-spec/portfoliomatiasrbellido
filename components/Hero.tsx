"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Photo left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden glass shadow-glow-lg">
            <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 via-transparent to-cyan/20 z-10" />
            <Image
              src="/profile.jpg"
              alt="Matías Bellido"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>
          {/* Glow accent */}
          <div className="absolute -inset-4 bg-gradient-to-r from-electric to-cyan opacity-20 blur-3xl -z-10 rounded-full" />
        </motion.div>

        {/* Text right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-widest text-cyan">
            <Sparkles className="w-3 h-3" />
            Actuario & Data Scientist
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] gradient-text glow-text">
              <span>Hola! Soy</span>
             <br />
             <span>Matías Bellido</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
            Soy estudiante de Actuario y autodidacta en Data Science, enfocado en cerrar la brecha 
            entre el análisis teórico y la ejecución práctica. Me mueve la curiosidad por emprender 
            proyectos que desafíen lo convencional y el deseo constante de aprender. Creo en la capacidad 
            de transformar problemas complejos en soluciones humanas y funcionales que tengan un impacto real.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="#projects"
              className="group relative px-6 py-3 rounded-full bg-electric text-white font-medium overflow-hidden transition-all hover:shadow-glow"
            >
              <span className="relative z-10">Ver Proyectos</span>
            </a>
            <a
              href="#bio"
              className="px-6 py-3 rounded-full glass text-white/80 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Sobre mí <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
