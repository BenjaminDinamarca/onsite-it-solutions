import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Cpu, Globe, Wifi, Shield, Smartphone, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import homeServiceImage from "@/assets/home-service.jpg";
import pcBuildingImage from "@/assets/pc-building.jpg";
import webDevelopmentImage from "@/assets/web-development.jpg";

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  
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
      ],
      detailedDescription: "Vi tilbyr komplett IT-support direkte i hjemmet ditt. Våre erfarne teknikere kommer til deg og løser alle typer IT-problemer på stedet. Dette inkluderer grundig feilsøking av trege PC-er, virusfjerning, hastighetoptimalisering og installasjon av nødvendig programvare. Vi setter opp og konfigurerer skrivere, skannere og annet periferiutstyr slik at alt fungerer sømløst sammen. Trådløse nettverk optimaliseres for best mulig hastighet og rekkevidde, og vi hjelper med smarttelefoner og nettbrett inkludert synkronisering med skytjenester som Dropbox og Google Drive. Sikkerhet er viktig, derfor installerer vi antivirusprogram og setter opp automatiske backup-løsninger for å beskytte dine data."
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
      ],
      detailedDescription: "Vi bygger skreddersydde PC-er som er perfekt tilpasset dine behov og ønsker. Du kan velge alle komponenter selv - hovedkort, prosessor, grafikkort, minne, lagring og kabinett. Vi hjelper deg med å finne den beste kombinasjonen av komponenter innenfor ditt budsjett. Du betaler kun innkjøpsprisen for delene plus eventuelle fraktkostnader, mens vi tar kr 1500,- for profesjonell montering og testing. Resultatet blir en kraftig og pålitelig PC som er optimalisert for ditt spesifikke bruk - enten det er gaming, kontorarbeid, grafisk design eller andre krevende oppgaver. Vi leverer gratis innenfor Bamble, Porsgrunn og Skien, eller sender trygt i posten."
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
      ],
      detailedDescription: "Vi lager profesjonelle nettsider som gir ditt brand en sterk digital tilstedeværelse. Alle våre nettsider har moderne, responsivt design som ser fantastisk ut på alle enheter - mobil, tablet og desktop. Vi implementerer søkemotoroptimalisering (SEO) for å sikre at nettsiden din blir funnet av potensielle kunder. Med AI-chatboter kan vi automatisere kundesupport og timebestilling døgnet rundt, noe som sparer deg tid og gir kundene rask service. Vi kan også modernisere eksisterende nettsider med fresh design og nye funksjoner, eller bygge komplekse løsninger som nettbutikker med betalingssystemer. Kostnaden varierer basert på prosjektets omfang - ta kontakt for et skreddersydd prisoverslag."
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
                
                <Button 
                  variant="outline" 
                  className="w-full mt-6"
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                >
                  {expandedService === index ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Vis mindre
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Les mer
                    </>
                  )}
                </Button>
                
                {expandedService === index && (
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.detailedDescription}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}