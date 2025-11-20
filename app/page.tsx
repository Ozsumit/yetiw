import Header from "@/components/header";
import Hero from "@/components/hero";
import Programs from "@/components/programs";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Events from "@/components/events";
import News from "@/components/news";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import FaqAndInquiry from "@/components/faqandinquiry";
// import Header from "@/components/althero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Header /> */}
      <Header></Header>
      <Hero />
      <Programs />
      <Features />
      <Testimonials />
      <Events />
      <News />
      <CTA />
      <FaqAndInquiry />
      <Footer />
    </main>
  );
}
