import { motion } from 'motion/react';
import { Bike, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Servizi', href: '#servizi' },
    { name: 'Tariffe', href: '#tariffe' },
    { name: 'Dove Siamo', href: '#dove-siamo' },
    { name: 'Contatti', href: '#contatti' },
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* Single row layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Bike className="h-6 w-6 text-orange-500" />
              <div className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
            </div>
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent block">
                Bicycleaway
              </span>
              <span className="text-[10px] text-gray-400 font-medium">Viaggia senza limiti</span>
            </div>
          </div>

          {/* Quick Links - Horizontal */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {quickLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-xs hover:text-orange-400 transition-colors flex items-center gap-1"
              >
                {index > 0 && <span className="text-gray-600 mr-2">•</span>}
                {link.name}
              </button>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-orange-500" />
            <span className="text-xs text-gray-400">Milano, Lombardia</span>
          </div>

        </div>
      </div>
    </footer>
  );
}