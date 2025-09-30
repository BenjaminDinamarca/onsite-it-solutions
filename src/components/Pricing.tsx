import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Clock, Wrench, Zap } from "lucide-react";

export function Pricing() {
  const pricingTiers = [
    {
      icon: Clock,
      title: "Lite oppdrag",
      duration: "≤ 1 time",
      price: "300",
      description: "Perfekt for enkle problemer og raske løsninger",
      features: [
        "Enkel feilsøking",
        "Programvareinstallasjon",
        "E-postoppsett",
        "Grunnleggende veiledning",
        "Inkludert utreise"
      ],
      popular: false
    },
    {
      icon: Wrench,
      title: "Middels oppdrag",
      duration: "1-2 timer",
      price: "400",
      description: "For mer omfattende IT-problemer og oppsett",
      features: [
        "PC-oppgradering",
        "Nettverksoppsett",
        "Skriveroppsett",
        "Dataoverføring",
        "Sikkerhetsoppsett",
        "Inkludert utreise"
      ],
      popular: true
    },
    {
      icon: Zap,
      title: "Store oppdrag",
      duration: "> 2 timer",
      price: "300",
      priceNote: "per påbegynte time",
      description: "For komplekse prosjekter og omfattende løsninger",
      features: [
        "Fullstendig PC-bygging",
        "Nettverksinstallasjon",
        "Datasikring og gjenoppretting",
        "Omfattende konfigurasjon",
        "Opplæring inkludert",
        "Inkludert utreise"
      ],
      popular: false
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
              className={`relative ${tier.popular ? 'border-primary shadow-primary scale-105' : 'border-border/50'} hover:shadow-soft transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mest populær
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tier.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{tier.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{tier.duration}</CardDescription>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">kr {tier.price}</span>
                  {tier.priceNote && (
                    <span className="text-sm text-muted-foreground block">{tier.priceNote}</span>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                
                <ul className="space-y-3 mb-6 text-left">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={tier.popular ? "premium" : "outline"} 
                  className="w-full"
                >
                  Velg dette
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">Tilleggskostnader</h3>
            <p className="text-muted-foreground">
              Transparente priser uten overraskelser
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Deler og utstyr</h4>
              <p className="text-muted-foreground text-sm">
                Du betaler kun innkjøpspris for komponenter og utstyr vi kjøper på dine vegne
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Frakt</h4>
              <p className="text-muted-foreground text-sm">
                Eventuelle fraktkostnader for bestilte deler føres videre til kostpris
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}