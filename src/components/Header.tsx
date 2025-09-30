import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import logoImage from "@/assets/onsite-it-logo.png";

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <img src={logoImage} alt="Onsite IT Logo" className="h-8 w-auto" />
        </button>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#tjenester" className="text-muted-foreground hover:text-foreground transition-colors">
            Tjenester
          </a>
          <a href="#priser" className="text-muted-foreground hover:text-foreground transition-colors">
            Priser
          </a>
          <a href="#kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
            Kontakt
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden sm:flex"
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Phone className="w-4 h-4 mr-2" />
            Ring oss
          </Button>
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-4 h-4 mr-2" />
            Kontakt
          </Button>
        </div>
      </div>
    </header>
  );
}