import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="section-padding min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container-narrow text-center relative">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <Sparkles className="h-4 w-4" />
          AI-Powered Event Platform
        </div>
        
        <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Netvent
          </span>
        </h1>
        
        <p className="animate-fade-up-delay-1 mt-4 text-xl font-semibold text-foreground/80 sm:text-2xl md:text-3xl">
          A hub for <span className="text-primary">all events</span>
        </p>
        
        <p className="animate-fade-up-delay-2 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          AI-powered unified app centralizes events in one hub, uses Big Data & SaaS. 
          It revolutionizes and automates the event management industry by offering a 
          comprehensive solution for attendees seeking meaningful interactions and organizers 
          aiming for easier & efficient event management operations.
        </p>
        
        <div className="animate-fade-up-delay-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Download className="mr-2 h-5 w-5" />
            Download the App
          </Button>
          <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;