import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
const Hero = () => {
  return <section className="section-padding min-h-[90vh] flex items-center justify-center">
      <div className="container-narrow text-center">
        <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Netvent
        </h1>
        
        <p className="animate-fade-up-delay-1 mt-4 text-xl font-medium text-primary sm:text-2xl md:text-3xl">
          A hub for all events
        </p>
        
        <p className="animate-fade-up-delay-2 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg font-serif">
          AI-powered unified app centralizes events in one hub, uses Big Data & SaaS. 
          It revolutionizes and automates the event management industry by offering a 
          comprehensive solution for attendees seeking meaningful interactions and organizers 
          aiming for easier & efficient event management operations.
        </p>
        
        <div className="animate-fade-up-delay-3 mt-10">
          <Button variant="hero" size="lg">
            <Download className="mr-2 h-5 w-5" />
            Download the App
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;