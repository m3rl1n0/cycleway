import image_6154e2f72c4cf429d885fb2c51de8e279a504903 from 'figma:asset/6154e2f72c4cf429d885fb2c51de8e279a504903.png';
import { motion } from 'motion/react';
import { Shield, Clock, ThumbsUp, Package } from 'lucide-react';
import bikeCase1 from 'figma:asset/4f17ac67de345fe4c53aedabbc609530086db80f.png';

export function RentalInfo() {
  const features = [
    {
      icon: Shield,
      title: 'Protezione Completa',
      description: 'Le nostre borse NOOYAH BK002 offrono la massima protezione per la tua bicicletta durante il viaggio',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      title: 'Noleggio Flessibile',
      description: 'Scegli la durata del noleggio in base alle tue esigenze di viaggio, da pochi giorni a settimane',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: ThumbsUp,
      title: 'Facile da Usare',
      description: 'Sistema di chiusura e apertura semplice e veloce, adatto a tutti i tipi di biciclette',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Package,
      title: '4 Borse Disponibili',
      description: 'Disponibilità limitata: solo 4 borse modello NOOYAH BK002 Bike Hard Case',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

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
            Perché Noleggiare con Noi
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Offriamo un servizio di noleggio professionale con borse da viaggio 
            di alta qualità per proteggere la tua bicicletta
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`${feature.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <feature.icon className={`h-10 w-10 ${feature.color} mb-4`} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Product Showcase */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-blue-600 rounded-3xl blur-2xl opacity-20" />
            <img
              src={image_6154e2f72c4cf429d885fb2c51de8e279a504903}
              alt="Borsa NOOYAH BK002"
              className="relative rounded-3xl shadow-2xl w-full object-contain"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              NOOYAH BK002 Bike Hard Case
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong className="text-gray-900">Materiale resistente:</strong> Costruzione robusta 
                  in ABS con rinforzi interni per la massima protezione
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong className="text-gray-900">Compatibilità universale:</strong> Adatta per 
                  la maggior parte delle biciclette da strada, mountain bike e gravel
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong className="text-gray-900">Trasporto sicuro:</strong> Imbottitura interna 
                  e sistema di fissaggio per proteggere ogni componente
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong className="text-gray-900">Ruote integrate:</strong> Facile da trasportare 
                  in aeroporto o stazione grazie alle ruote di alta qualità
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-6 border border-orange-200">
              <p className="text-gray-800 text-sm">
                <strong className="text-orange-600">Nota importante:</strong> Disponiamo di solo 
                4 borse disponibili. Prenota in anticipo per garantire la disponibilità nelle 
                date del tuo viaggio.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
