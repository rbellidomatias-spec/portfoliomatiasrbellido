"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./Section";

const photos = [
  { src: "/gallery/1.jpg", alt: "Discipline" },
  { src: "/gallery/2.jpg", alt: "Training" },
  { src: "/gallery/3.jpg", alt: "Focus" },
  { src: "/gallery/4.jpg", alt: "Lifestyle" },
  { src: "/gallery/5.jpg", alt: "Mindset" },
  { src: "/gallery/6.jpg", alt: "Flow" },
];

export default function Gallery() {
  return (
    <Section id="gallery" eyebrow="Off-Screen" title="Disciplina & Lifestyle">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative aspect-square rounded-xl overflow-hidden glass group"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
