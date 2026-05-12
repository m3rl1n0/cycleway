import { motion } from 'motion/react';
import { Sparkles, Bike, Calendar, User, Mail as MailIcon, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    numBags: '1',
    startDate: '',
    endDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:bicycleawayrent@gmail.com?subject=Richiesta informazioni noleggio&body=Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ANumero borse: ${formData.numBags}%0D%0AData inizio noleggio: ${formData.startDate}%0D%0AData fine noleggio: ${formData.endDate}%0D%0A%0D%0AMessaggio:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const steps = [
    { number: '01', title: 'Compila', desc: 'Inserisci i tuoi dati' },
    { number: '02', title: 'Conferma', desc: 'Ti ricontatteremo' },
    { number: '03', title: 'Ritira', desc: 'A Milano o corriere' },
  ];

  return (
    <section className="py-10 md:py-20 bg-white relative overflow-hidden">
      {/* Static background decorations — no animation to spare mobile CPU */}
      <div className="pointer-events-none absolute top-20 left-10 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 w-36 h-36 bg-violet-400/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-[36px] mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full mb-6 shadow-lg border border-orange-200"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-bold bg-gradient-to-r from-orange-500 to-violet-600 bg-clip-text text-transparent">
              Prenota in 3 semplici step
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Inizia il tuo </span>
            <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-blue-600 bg-clip-text text-transparent">
              Viaggio Ora
            </span>
          </h2>

          {/* Steps */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-200 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <span className="text-2xl font-bold bg-gradient-to-br from-orange-500 to-violet-600 bg-clip-text text-transparent">
                  {step.number}
                </span>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-sm">{step.title}</div>
                  <div className="text-xs text-gray-600">{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <form 
            onSubmit={handleSubmit} 
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Nome */}
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold mb-3 text-gray-900">
                  <User className="h-4 w-4 text-orange-500" />
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-all bg-white/70 text-base shadow-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Mario Rossi"
                />
              </motion.div>

              {/* Email */}
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold mb-3 text-gray-900">
                  <MailIcon className="h-4 w-4 text-blue-600" />
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-all bg-white/70 text-base shadow-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="mario.rossi@email.com"
                />
              </motion.div>
            </div>

            {/* Row con Borse e Date */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <motion.div whileHover={{ scale: 1.02 }}>
                <label htmlFor="numBags" className="flex items-center gap-2 text-sm font-bold mb-3 text-gray-900">
                  <Bike className="h-4 w-4 text-violet-600" />
                  N. Borse *
                </label>
                <select
                  id="numBags"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-violet-600 focus:outline-none transition-all bg-white/70 text-base shadow-sm"
                  value={formData.numBags}
                  onChange={(e) => setFormData({ ...formData, numBags: e.target.value })}
                  required
                >
                  <option value="1">1 borsa</option>
                  <option value="2">2 borse</option>
                  <option value="3">3 borse</option>
                  <option value="4">4 borse</option>
                </select>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label htmlFor="startDate" className="flex items-center gap-2 text-sm font-bold mb-3 text-gray-900">
                  <Calendar className="h-4 w-4 text-cyan-600" />
                  Data Inizio *
                </label>
                <input
                  type="date"
                  id="startDate"
                  className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-cyan-600 focus:outline-none transition-all bg-white/70 text-sm shadow-sm"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label htmlFor="endDate" className="flex items-center gap-2 text-sm font-bold mb-3 text-gray-900">
                  <Calendar className="h-4 w-4 text-cyan-600" />
                  Data Fine *
                </label>
                <input
                  type="date"
                  id="endDate"
                  className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-cyan-600 focus:outline-none transition-all bg-white/70 text-sm shadow-sm"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  required
                />
              </motion.div>
            </div>

            {/* Messaggio */}
            <motion.div whileHover={{ scale: 1.01 }} className="mb-8">
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold mb-3 text-gray-900">
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                Il tuo messaggio *
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-emerald-600 focus:outline-none transition-all resize-none bg-white/70 text-base shadow-sm"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Scrivi qui il tuo messaggio e raccontaci le tue esigenze..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 via-violet-600 to-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-3 hover:shadow-orange-500/40 transition-all relative overflow-hidden group"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <Bike className="h-6 w-6 relative z-10" />
              <span className="relative z-10">Prenota il tuo Noleggio</span>
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}