import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validering
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.service || !formData.message) {
      toast({
        title: "Mangler informasjon",
        description: "Vennligst fyll ut alle feltene",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Melding sendt!",
        description: "Vi har mottatt din henvendelse og tar kontakt snart.",
      });

      // Tilbakestill skjemaet
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending contact form:", error);
      toast({
        title: "Noe gikk galt",
        description: "Kunne ikke sende meldingen. Prøv igjen senere.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Fornavn</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Ditt fornavn" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Etternavn</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Ditt etternavn"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-post</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="din@epost.no"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+47 123 45 678"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Type tjeneste</Label>
                  <select 
                    id="service" 
                    className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md text-sm"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
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
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="premium" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sender..." : "Send forespørsel"}
                </Button>
              </form>
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
                    <p className="text-muted-foreground">+47 48463520</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">E-post</p>
                    <p className="text-muted-foreground">kontakt@onsiteit.no</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Dekningsområde</p>
                    <p className="text-muted-foreground">Bamble, Porsgrunn og Skien</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Åpningstider</p>
                    <p className="text-muted-foreground">Man-Fre: 16:00-21:00</p>
                    <p className="text-muted-foreground">Lør: 09:00-21:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent-light border-accent/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Lokal IT-ekspertise i Telemark</h3>
                <p className="text-muted-foreground mb-4">
                  Med base i Telemark betjener vi hele området fra Bamble til Skien. 
                  Vi kjenner lokalområdet godt og kommer raskt når du trenger oss.
                </p>
                <Button variant="accent" className="w-full">
                  Bestill hjemmebesøk nå
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}