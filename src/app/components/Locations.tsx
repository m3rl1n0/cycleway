import { motion } from 'motion/react';
import { MapPin, Truck } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Locations() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4">
            Dove Siamo
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Servizio di noleggio con ritiro e riconsegna su Milano, Lombardia
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-h-[320px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707285411785-209670caee8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaWxhbiUyMEl0YWx5JTIwY2l0eXxlbnwxfHx8fDE3NjkwODMwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Milano, Lombardia"
                className="w-full h-[320px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold">Milano</h3>
                <p className="text-white/90">Lombardia, Italia</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-blue-50 rounded-2xl p-6">
                <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ritiro e Riconsegna</h3>
                  <p className="text-gray-700">
                    Consegna a mano su Milano città. Ritiro e riconsegna direttamente 
                    presso la tua località a Milano senza costi aggiuntivi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-orange-50 rounded-2xl p-6">
                <div className="h-12 w-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Spedizione Corriere</h3>
                  <p className="text-gray-700">
                    Per località fuori Milano, è possibile organizzare la spedizione tramite 
                    corriere espresso. I costi di spedizione sono a carico del cliente.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
