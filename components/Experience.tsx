"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import { Briefcase, GraduationCap, Award, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const educationLogos = [
  "/projects/Imagenes/UBA.jpg",
  "/projects/Imagenes/STJ.png",
];

const courses = [
  "Negociación - Santander Open Academy",
  "Storytelling - Santander Open Academy",
  "Data Science Intro - Santander Open Academy",
  "Gestión Agile - Santander Open Academy",
  "Finanzas - FEMSA",
];

export default function Experience() {
  const { t } = useLanguage();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedIdx(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (expandedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [expandedIdx]);

  const expandedEdu = expandedIdx !== null ? t.experience.education[expandedIdx] : null;
  const expandedLogo = expandedIdx !== null ? educationLogos[expandedIdx] : null;

  return (
    <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-5 h-5 text-cyan" />
            <h3 className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-fg">
              {t.experience.experienceTitle}
            </h3>
          </div>

          <div className="relative">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-cyan/60 via-cyan/30 to-transparent" />

            <div className="space-y-8">
              {t.experience.items.map((item, i) => (
                <motion.div
                  key={item.role + item.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-cyan flex items-center justify-center" style={{ background: "var(--bg)" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                  </div>

                  <div className="glass rounded-xl p-6 hover:shadow-glow transition-all">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan/80 mb-2 font-mono">
                      {item.period}
                    </p>
                    <h4 className="font-display text-xl font-bold text-fg mb-1">
                      {item.role}
                    </h4>
                    <p className="text-base text-cyan mb-1">{item.company}</p>
                    <p className="text-xs text-fg-muted uppercase tracking-wider mb-3">
                      {item.type}
                    </p>
                    <p className="text-base text-fg-soft leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-electric/10 text-cyan border border-cyan/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-5 h-5 text-cyan" />
            <h3 className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-fg">
              {t.experience.educationTitle}
            </h3>
          </div>

          <div className="space-y-6 mb-12">
            {t.experience.education.map((item, i) => (
              <motion.div
                key={item.institution}
                layoutId={`edu-card-${i}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setExpandedIdx(i)}
                className="glass rounded-xl p-6 hover:shadow-glow transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    layoutId={`edu-logo-${i}`}
                    className="shrink-0 relative w-20 h-20 rounded-2xl overflow-hidden bg-white border border-cyan/30"
                  >
                    <Image
                      src={educationLogos[i]}
                      alt={item.institution}
                      fill
                      sizes="80px"
                      className="object-contain p-1"
                    />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <motion.p
                      layoutId={`edu-period-${i}`}
                      className="text-xs uppercase tracking-[0.2em] text-cyan/80 mb-2 font-mono"
                    >
                      {item.period}
                    </motion.p>
                    <motion.h4
                      layoutId={`edu-institution-${i}`}
                      className="font-display text-xl font-bold text-fg mb-1"
                    >
                      {item.institution}
                    </motion.h4>
                    <p className="text-base text-cyan mb-3">{item.degree}</p>
                    <p className="text-base text-fg-soft leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                    <p className="text-xs text-cyan/70 mt-3 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      Click para leer más →
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-cyan" />
              <h3 className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-fg">
                {t.experience.coursesTitle}
              </h3>
            </div>

            <div className="glass rounded-xl p-6">
              <ul className="space-y-3">
                {courses.map((course, i) => (
                  <motion.li
                    key={course}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-3 text-base text-fg-soft"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                    {course}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* EXPANDED EDUCATION CARD */}
      <AnimatePresence>
        {expandedEdu && expandedLogo && expandedIdx !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setExpandedIdx(null)}
              className="fixed inset-0 z-40 bg-black/85 backdrop-blur-md"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
              <motion.div
                layoutId={`edu-card-${expandedIdx}`}
                className="glass rounded-3xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col pointer-events-auto shadow-glow-lg"
              >
                <button
                  onClick={() => setExpandedIdx(null)}
                  className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/60 backdrop-blur-sm hover:bg-cyan/20 border border-white/10 transition-all"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="overflow-y-auto p-8 md:p-12">
                  <div className="flex items-start gap-6 mb-8">
                    <motion.div
                      layoutId={`edu-logo-${expandedIdx}`}
                      className="shrink-0 relative w-28 h-28 rounded-2xl overflow-hidden bg-white border border-cyan/30"
                    >
                      <Image
                        src={expandedLogo}
                        alt={expandedEdu.institution}
                        fill
                        sizes="112px"
                        className="object-contain p-2"
                      />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <motion.p
                        layoutId={`edu-period-${expandedIdx}`}
                        className="text-xs uppercase tracking-[0.2em] text-cyan/80 mb-2 font-mono"
                      >
                        {expandedEdu.period}
                      </motion.p>
                      <motion.h3
                        layoutId={`edu-institution-${expandedIdx}`}
                        className="font-display text-3xl md:text-4xl font-bold text-fg mb-2"
                      >
                        {expandedEdu.institution}
                      </motion.h3>
                      <p className="text-lg text-cyan">{expandedEdu.degree}</p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="border-t border-white/10 pt-6"
                  >
                    {expandedEdu.longDesc.split("\n\n").map((paragraph, idx) => (
                      <div key={idx} className="mb-5 last:mb-0">
                        {paragraph.split("\n").map((line, lineIdx) => (
                          <p
                            key={lineIdx}
                            className={`text-base md:text-lg text-fg-soft leading-relaxed ${
                              line.startsWith("•") ? "pl-4" : ""
                            } ${
                              !line.startsWith("•") && lineIdx === 0 && !paragraph.includes("•")
                                ? ""
                                : !line.startsWith("•") && paragraph.includes("•") && lineIdx === 0
                                ? "font-semibold text-cyan mb-2"
                                : ""
                            }`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </Section>
  );
}