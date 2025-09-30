import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">IT</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">Onsite IT</h1>
        </div>
        
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
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Phone className="w-4 h-4 mr-2" />
            Ring oss
          </Button>
          <Button variant="hero" size="sm">
            <Mail className="w-4 h-4 mr-2" />
            Kontakt
          </Button>
        </div>
      </div>
    </header>
  );
}