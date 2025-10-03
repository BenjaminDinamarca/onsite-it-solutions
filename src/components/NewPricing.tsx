import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Globe, Cpu, CreditCard } from "lucide-react";

export function NewPricing() {
  const pricingTiers = [
    {
      icon: Clock,
      title: "Hjemmebesøk",
      description: "Personlig IT-hjelp hjemme hos deg",
      services: [
        { name: "Lite oppdrag", duration: "≤ 1 time", price: "kr 299" },
        { name: "Middels oppdrag", duration: "1-2 timer", price: "kr 399" },
        { name: "Store oppdrag", duration: "> 2 timer", price: "kr 299/time" }
      ],
      includes: [
        "Feilsøking og reparasjon",
        "Programvareinstallasjon",
        "Nettverksoppsett",
        "Utreise inkludert",
        "Deler til kostpris"
      ]
    },
    {
      icon: Globe,
      title: "Nettsider og webtjenester",
      description: "Profesjonell webdesign og AI-løsninger",
      customPricing: true,
      priceText: "Varierende pris",
      priceNote: "Ettersom slike tjenester varierer i størrelse og tidsbruk har vi ikke en fastpris på oppdrag, så ta kontakt for et prisestimat",
      includes: [
        "Skreddersydd design",
        "Mobilvennlig utforming",
        "SEO-optimalisering",
        "AI-chatboter",
        "Vedlikehold og support"
      ]
    },
    {
      icon: Cpu,
      title: "PC-bygging",
      description: "Skreddersydde gaming- og arbeids-PC-er",
      services: [
        { name: "Gaming PC", price: "kr 1499", note: "monteringsgebyr" },
        { name: "Arbets PC", price: "kr 1499", note: "monteringsgebyr" }
      ],
      delivery: "Gratis levering innenfor Bamble, Porsgrunn og Skien",
      shipping: "Kan sendes i posten mot fraktkostnad",
      includes: [
        "Alle komponenter til kostpris",
        "Profesjonell montering",
        "Testing og optimalisering",
        "Garantert kvalitet",
        "Gratis lokal levering"
      ]
    }
  ];

  return (
    <section id="priser" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Enkle og <span className="bg-gradient-primary bg-clip-text text-transparent">rettferdige</span> priser
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Forutsigbare priser basert på tidsbruk. Inkludert utreise og ingen skjulte kostnader.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:shadow-soft transition-all duration-300"
            >
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tier.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{tier.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{tier.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="text-center">
                {tier.customPricing ? (
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-foreground">{tier.priceText}</span>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {tier.priceNote}
                    </p>
                  </div>
                ) : tier.services ? (
                  <div className="mb-6 space-y-3">
                    {tier.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                        <div className="text-left">
                          <div className="font-medium text-foreground text-sm">{service.name}</div>
                          {service.duration && (
                            <div className="text-xs text-muted-foreground">{service.duration}</div>
                          )}
                          {service.note && (
                            <div className="text-xs text-muted-foreground">{service.note}</div>
                          )}
                        </div>
                        <div className="font-bold text-foreground">{service.price}</div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {tier.delivery && (
                  <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                    <p className="text-sm text-primary font-medium">{tier.delivery}</p>
                    {tier.shipping && (
                      <p className="text-xs text-muted-foreground mt-1">{tier.shipping}</p>
                    )}
                  </div>
                )}
                
                <ul className="space-y-3 mb-6 text-left">
                  {tier.includes.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Betalingsalternativer</h3>
            <p className="text-muted-foreground">
              Vi mottar Vipps, bankoverføringer og kontant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}