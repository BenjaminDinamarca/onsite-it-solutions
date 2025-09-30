import { Card, CardContent } from "@/components/ui/card";
import { Home, DollarSign, Users, Wrench, Shield, Clock, ChevronDown } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Home,
      title: "Personlig service hjemme",
      description: "Vi kommer til deg i stedet for at du må dra til butikk eller verksted"
    },
    {
      icon: DollarSign,
      title: "Gunstige priser",
      description: "Faste, lave priser uten skjulte kostnader eller overraskelser"
    },
    {
      icon: Users,
      title: "Spesialisert på eldre og småbedrifter",
      description: "Vi forstår behovene til eldre hjemmeværende og små bedrifter"
    },
    {
      icon: Wrench,
      title: "Bred teknisk kompetanse",
      description: "Alt på ett sted - fra PC-reparasjon til nettsidebygging"
    },
    {
      icon: Shield,
      title: "Trygg og pålitelig",
      description: "Erfarne teknikere som tar godt vare på ditt utstyr og data"
    },
    {
      icon: Clock,
      title: "Effektiv service",
      description: "Vi løser problemene raskt og effektivt, slik at du kommer i gang igjen"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Hvorfor velge <span className="bg-gradient-primary bg-clip-text text-transparent">Onsite IT</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi skiller oss ut ved å kombinere personlig service, rimelige priser og bred teknisk kompetanse. 
            Din pålitelige IT-partner for hjemmet og kontoret.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-lg">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            Klar for å komme i gang?
          </h3>
          <p className="text-primary-foreground/90 text-lg mb-6 max-w-2xl mx-auto">
            Ta kontakt i dag for å høre mer og få et uforpliktende prisoverslag. 
            Vi hjelper deg med alle IT-utfordringer hjemme eller på kontoret.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center h-12 w-12 bg-primary-foreground/20 text-primary-foreground rounded-full font-medium hover:bg-primary-foreground/30 transition-all duration-300 hover:scale-110"
              aria-label="Scroll til kontakt"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}