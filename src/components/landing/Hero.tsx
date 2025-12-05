import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import netventLogo from "@/assets/netvent-logo.jpeg";

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
        <div className="animate-fade-up flex justify-center">
          <img 
            src={netventLogo} 
            alt="NetVent" 
            className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto"
          />
        </div>
        
        <p className="animate-fade-up-delay-1 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          We revolutionizes the event management industry.
          <br />
          By using using AI, Big data, & SAAS, we provide organizers comprehensive tools for end-to-end event management automation, while attendees enjoy a seamless experience & long-lasting engagements
        </p>
        
        <div className="animate-fade-up-delay-3 mt-10 flex justify-center">
          <Button variant="hero" size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Download className="mr-2 h-5 w-5" />
            Download the App
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;