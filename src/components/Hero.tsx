import { Button } from "@/components/ui/button";
import { MapPin, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="bg-gradient-subtle py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                IT-hjelp hjemme og{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  nettside­bygging
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Vi kommer til deg og løser alle IT-problemer. Fra trege PC-er til nettverk, 
                rutere og nettsider. Personlig service til rimelige priser.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Hjemmebesøk</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-accent" />
                <span>Fra kr 300</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>Erfaren og trygg</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="premium" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Bestill hjemmebesøk
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => document.getElementById('tjenester')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Se alle tjenester
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20"></div>
            <img
              src={heroImage}
              alt="IT-tekniker som hjelper kunde hjemme"
              className="relative rounded-2xl shadow-primary w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}