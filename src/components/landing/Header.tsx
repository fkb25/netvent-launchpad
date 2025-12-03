import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="/" className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Netvent
        </a>
        
        <nav className="flex items-center gap-4">
          <a 
            href="#footer" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact Us
          </a>
          <Button size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
