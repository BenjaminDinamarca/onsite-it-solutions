import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Cpu, Globe, Wifi, Shield, Smartphone } from "lucide-react";
import homeServiceImage from "@/assets/home-service.jpg";
import pcBuildingImage from "@/assets/pc-building.jpg";
import webDevelopmentImage from "@/assets/web-development.jpg";

export function Services() {
  const services = [
    {
      icon: Home,
      title: "IT-hjelp i hjemmet",
      description: "Vi kommer til deg og løser alle IT-problemer på stedet",
      image: homeServiceImage,
      features: [
        "Feilsøking og oppgradering av PC-er",
        "Oppsett av skrivere og periferiutstyr", 
        "Wi-Fi og nettverksoptimalisering",
        "Smarttelefon og nettbrett-hjelp",
        "Sikkerhet og backup-løsninger",
        "E-postoppsett og brukerstøtte"
      ]
    },
    {
      icon: Cpu,
      title: "Skreddersydd PC-bygging",
      description: "Vi bygger din drømme-PC etter dine ønsker og behov",
      image: pcBuildingImage,
      features: [
        "Tilpasset alle komponenter",
        "Du betaler kun for deler og frakt",
        "Kr 1500,- i monteringsgebyr",
        "Optimalisert for ditt bruk",
        "Spill, kontorarbeid eller design",
        "Garantert kvalitet og ytelse"
      ]
    },
    {
      icon: Globe,
      title: "Nettsider og webtjenester",
      description: "Profesjonell nettsidebygging og AI-automatisering",
      image: webDevelopmentImage,
      features: [
        "Moderne, mobilvennlig design",
        "Søkemotoroptimalisering (SEO)",
        "AI-chatboter for kundesupport",
        "Automatiserte booking-systemer",
        "Oppdatering av eksisterende sider",
        "Nettbutikker og komplekse løsninger"
      ]
    }
  ];

  return (
    <section id="tjenester" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Våre <span className="bg-gradient-primary bg-clip-text text-transparent">tjenester</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi tilbyr komplett IT-støtte for privatpersoner og småbedrifter. 
            Alt fra hjemmebesøk til skreddersydde løsninger.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 border-border/50">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full mt-6">
                  Les mer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}