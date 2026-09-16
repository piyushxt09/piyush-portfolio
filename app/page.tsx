import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ResumeTimeline from "@/components/ResumeTimeline";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* About Section (with Circular Progress Skills) */}
      <About />

      {/* Skills Showcase */}
      <Skills />

      {/* Education & Experience Timeline */}
      <ResumeTimeline />

      {/* Portfolio Showcase with Filterable Projects */}
      <Portfolio />

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* Articles & Insights Blog */}
      <Blog />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top Action Button */}
      <ScrollToTop />
    </main>
  );
}
