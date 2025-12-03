import Hero from "@/components/landing/Hero";
import Mission from "@/components/landing/Mission";
import Vision from "@/components/landing/Vision";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Mission />
      <Vision />
      <Footer />
    </main>
  );
};

export default Index;
