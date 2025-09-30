import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IT</span>
              </div>
              <h3 className="text-xl font-bold">Onsite IT</h3>
            </div>
            <p className="text-background/80 leading-relaxed">
              Din pålitelige IT-partner for hjemmet og kontoret. 
              Vi løser alle IT-problemer med personlig service til rimelige priser.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Våre tjenester</h4>
            <ul className="space-y-2 text-background/80">
              <li>• IT-hjelp i hjemmet</li>
              <li>• Skreddersydd PC-bygging</li>
              <li>• Nettsidebygging</li>
              <li>• Nettverksoppsett</li>
              <li>• Datasikkerhet</li>
              <li>• AI-automatisering</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Kontakt oss</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+47 123 45 678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kontakt@onsite-it.no</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Oslo og omegn</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 Onsite IT. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
}