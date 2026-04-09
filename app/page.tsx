import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen grid-bg overflow-hidden">
      <div className="relative z-10">
        <Hero />
        <Bio />
        <Experience />
        <Projects />
        <Gallery />
        <Stack />
        <Footer />
      </div>
    </main>
  );
}
