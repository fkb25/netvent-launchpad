import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import netventLogo from "@/assets/netvent-logo.jpeg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="/">
          <img src={netventLogo} alt="Netvent - Events united, engagements elevated" className="h-10 w-auto" />
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
