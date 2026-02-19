import { useState } from 'react';
import { Menu, X, Bike } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
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
    setMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contatti');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection('#hero')}
          >
            <div className="relative">
              <Bike className="h-10 w-10 text-orange-500" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-blue-500 rounded-full animate-pulse" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                Bicycleaway
              </span>
              <span className="block text-xs text-gray-600 font-medium">Viaggia senza limiti</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navLinks.map((link, index) => (
              <motion.button
                type="button"
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition-colors rounded-lg hover:bg-orange-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Desktop CTA */}
          <motion.button
            onClick={scrollToContact}
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all font-semibold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bike className="h-5 w-5" />
            Noleggia ora
          </motion.button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden py-4 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-2 mb-4">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition-colors text-left rounded-lg hover:bg-orange-50"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={scrollToContact}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all font-semibold"
            >
              <Bike className="h-5 w-5" />
              Noleggia ora
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}