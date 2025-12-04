import { Mail } from "lucide-react";
import netventLogo from "@/assets/netvent-logo.jpeg";

const Footer = () => {
  return (
    <footer id="footer" className="relative overflow-hidden border-t border-border bg-gradient-to-b from-section-alt to-background">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container-narrow px-6 py-16 md:px-12">
        <div className="flex flex-col items-center text-center">
          <img 
            src={netventLogo} 
            alt="Netvent" 
            className="h-16 w-auto"
          />
          
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
          <p className="text-sm text-muted-foreground">
            © 2025 Netvent All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
