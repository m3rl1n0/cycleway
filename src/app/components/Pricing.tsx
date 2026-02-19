import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Pricing() {
  const pricingOptions = [
    {
      days: '1-3 giorni',
      price: '€15',
      period: 'al giorno',
      features: [
        'Borsa NOOYAH BK002',
        'Imbottitura protettiva inclusa',
        'Ritiro e riconsegna a Milano'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      days: '4-7 giorni',
      price: '€13',
      period: 'al giorno',
      features: [
        'Borsa NOOYAH BK002',
        'Imbottitura protettiva inclusa',
        'Ritiro e riconsegna a Milano'
      ],
      popular: true,
      color: 'from-orange-500 to-orange-600'
    },
    {
      days: '8+ giorni',
      price: '€10',
      period: 'al giorno',
      features: [
        'Borsa NOOYAH BK002',
        'Imbottitura protettiva inclusa',
        'Ritiro e riconsegna a Milano'
      ],
      popular: false,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50/30 via-white to-blue-50/30">
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
            Tariffe Noleggio
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Scegli la durata più adatta alle tue esigenze. Tutto compreso, senza costi nascosti.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={option.days}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 ${
                option.popular ? 'border-orange-500' : 'border-gray-100'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Più Popolare
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.days}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-5xl font-bold bg-gradient-to-r ${option.color} bg-clip-text text-transparent`}>
                    {option.price}
                  </span>
                  <span className="text-gray-600">{option.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 rounded-full font-bold transition-all ${
                  option.popular
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Noleggia borsa
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Informazioni Importanti</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
              <p><strong>Servizio solo su Milano:</strong> Ritiro e riconsegna a mano su Milano città</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <p><strong>Corriere disponibile:</strong> Spedizione a carico del cliente per altre località</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
              <p><strong>Tutto compreso:</strong> Nessun costo nascosto, il prezzo è tutto incluso</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <p><strong>Disponibilità limitata:</strong> Solo 4 borse disponibili, prenota in anticipo</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}