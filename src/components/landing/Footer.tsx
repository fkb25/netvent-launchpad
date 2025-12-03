import { Mail, MapPin, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="relative overflow-hidden border-t border-border bg-gradient-to-b from-section-alt to-background">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container-narrow px-6 py-16 md:px-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <p className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Netvent
            </p>
          </div>
          
          <div className="mt-8 flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-sm">For business inquiries:</span>
          </div>
          <a
            href="mailto:contact@netvent.app"
            className="mt-2 text-base font-medium text-primary transition-all hover:text-secondary hover:underline"
          >
            contact@netvent.app
          </a>
        </div>
        
        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            Made in Riyadh, Saudi Arabia – 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
