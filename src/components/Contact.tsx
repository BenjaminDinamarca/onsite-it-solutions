import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="kontakt" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Kontakt <span className="bg-gradient-primary bg-clip-text text-transparent">oss</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trenger du IT-hjelp? Ta kontakt for et uforpliktende prisoverslag eller 
            bestill hjemmebesøk direkte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send oss en melding</CardTitle>
              <CardDescription>
                Fortell oss om ditt IT-problem, så tar vi kontakt for å avtale besøk
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Fornavn</Label>
                  <Input id="firstName" placeholder="Ditt fornavn" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Etternavn</Label>
                  <Input id="lastName" placeholder="Ditt etternavn" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-post</Label>
                <Input id="email" type="email" placeholder="din@epost.no" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" type="tel" placeholder="+47 123 45 678" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Type tjeneste</Label>
                <select id="service" className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md text-sm">
                  <option value="">Velg tjeneste</option>
                  <option value="home-visit">Hjemmebesøk - IT-problemer</option>
                  <option value="pc-building">Skreddersydd PC-bygging</option>
                  <option value="website">Nettsidebygging</option>
                  <option value="other">Annet</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Beskrivelse av problem/ønske</Label>
                <Textarea 
                  id="message" 
                  placeholder="Beskriv ditt IT-problem eller hva du ønsker hjelp til..." 
                  rows={4}
                />
              </div>
              
              <Button variant="premium" className="w-full">
                Send forespørsel
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-soft border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Kontaktinformasjon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Telefon</p>
                    <p className="text-muted-foreground">+47 123 45 678</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">E-post</p>
                    <p className="text-muted-foreground">kontakt@onsite-it.no</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Dekningsområde</p>
                    <p className="text-muted-foreground">Oslo og omegn</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Åpningstider</p>
                    <p className="text-muted-foreground">Man-Fre: 08:00-18:00</p>
                    <p className="text-muted-foreground">Lør: 10:00-15:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent-light border-accent/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Rask respons garantert</h3>
                <p className="text-muted-foreground mb-4">
                  Vi svarer på alle henvendelser innen 24 timer. For akutte problemer, 
                  ring oss direkte for raskere hjelp.
                </p>
                <Button variant="accent" className="w-full">
                  Ring for akutt hjelp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}