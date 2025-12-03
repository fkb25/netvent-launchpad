import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-section-alt">
      <div className="container-narrow px-6 py-12 md:px-12">
        <div className="flex flex-col items-center text-center">
          <p className="text-lg font-semibold text-foreground">Netvent</p>
          
          <div className="mt-6 flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span className="text-sm">For business inquiries:</span>
          </div>
          <a
            href="mailto:contact@netvent.app"
            className="mt-1 text-sm text-primary transition-colors hover:text-primary/80"
          >
            contact@netvent.app
          </a>
        </div>
        
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Made in Riyadh, Saudi Arabia – 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
