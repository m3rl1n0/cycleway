import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plane, Train, Car, ArrowRight, Sparkles, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const bikeCase1 = '/images/bike-case-1.png';
const bikeCase2 = '/images/bike-case-2.png';

const images = [
  { src: bikeCase1, alt: 'NOOYAH BK002 Bike Hard Case - Vista esterna' },
  { src: bikeCase2, alt: 'NOOYAH BK002 Bike Hard Case - Interno' },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(next, 4000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, []);

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(next, 4000);
  };

  const goTo = (i: number) => { setCurrent(i); resetAutoplay(); };
  const handlePrev = () => { prev(); resetAutoplay(); };
  const handleNext = () => { next(); resetAutoplay(); };

  const openFullscreen = (i: number) => {
    setCurrent(i);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = '';
  };

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? handleNext() : handlePrev();
    touchStartX.current = null;
  };

  return (
    <section className="relative pt-20 md:pt-32 pb-12 md:pb-24 overflow-hidden min-h-[90vh] md:min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-white to-blue-50/80" />
      <div className="pointer-events-none absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-blue-600/10 border border-orange-200/50 rounded-full px-4 py-2 mb-4 md:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4 text-orange-500" />
              <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                4 Borse NOOYAH BK002 Disponibili
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-gray-900 leading-tight font-bold">
              Pedala{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 bg-clip-text text-transparent">
                  ovunque
                </span>
                <motion.div
                  className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-2 md:h-3 bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 rounded-full blur-sm opacity-40"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
              <br />nel mondo
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Noleggia le nostre borse rigide professionali <strong className="text-gray-900">NOOYAH BK002</strong>{' '}
              e trasporta la tua bicicletta in totale sicurezza.
            </p>

            <motion.div
              className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex -space-x-4">
                {[
                  { Icon: Plane, from: 'from-blue-500', to: 'to-blue-600', rotate: 'rotate-6' },
                  { Icon: Train, from: 'from-orange-500', to: 'to-orange-600', rotate: '-rotate-6' },
                  { Icon: Car, from: 'from-purple-500', to: 'to-purple-600', rotate: 'rotate-6' },
                ].map(({ Icon, from, to, rotate }, i) => (
                  <div key={i} className={`h-12 w-12 md:h-14 md:w-14 bg-gradient-to-br ${from} ${to} rounded-2xl flex items-center justify-center shadow-lg border-4 border-white ${rotate}`}>
                    <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                ))}
              </div>
              <p className="text-gray-700 font-semibold text-base md:text-lg">Perfette per aereo, treno e auto</p>
            </motion.div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <button
                type="button"
                onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Noleggia ora
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gray-900 px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-orange-300"
              >
                Scopri di più
              </button>
            </div>
          </motion.div>

          {/* Right - Custom carousel */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100">
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-blue-500/20 pointer-events-none z-10" />

              {/* Zoom hint */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 px-2.5 py-1.5 rounded-lg shadow-md z-20 flex items-center gap-1.5">
                <ZoomIn className="h-3.5 w-3.5 text-orange-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">Clicca per ingrandire</span>
              </div>

              {/* Slides */}
              <div
                className="relative w-full cursor-pointer select-none"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                onClick={() => openFullscreen(current)}
              >
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="w-full transition-opacity duration-500"
                    style={{ display: i === current ? 'block' : 'none' }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto block"
                      style={{ maxHeight: '480px', objectFit: 'contain' }}
                    />
                  </div>
                ))}
              </div>

              {/* Prev / Next */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => { e.stopPropagation(); goTo(i); }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-orange-500 scale-125' : 'bg-white/70 hover:bg-white'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-12 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '118x25x86', label: 'Dimensioni (cm)', color: 'from-blue-500 to-blue-600', icon: '📏' },
            { number: '9.5 kg', label: 'Peso leggero', color: 'from-orange-500 to-orange-600', icon: '⚖️' },
            { number: '29"', label: 'Bici fino a 29"', color: 'from-purple-500 to-purple-600', icon: '🚴' },
          ].map((stat, index) => (
            <div key={index} className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl text-center border-2 border-gray-100 overflow-hidden">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">{stat.icon}</div>
              <p className={`text-2xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 md:mb-3`}>{stat.number}</p>
              <p className="text-gray-600 font-semibold text-sm md:text-lg">{stat.label}</p>
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-full`} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}
          onClick={closeFullscreen}
        >
          <button type="button" className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-50 transition-colors" onClick={closeFullscreen}>
            <X className="h-7 w-7 md:h-8 md:w-8" />
          </button>
          <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/10 text-white px-4 py-2 rounded-full z-50 font-semibold text-sm">
            {current + 1} / {images.length}
          </div>
          <div className="w-full max-w-4xl px-14 md:px-20 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={images[current].src} alt={images[current].alt} className="w-full h-auto max-h-[80vh] object-contain" />
          </div>
          <button type="button" className="absolute left-2 md:left-6 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full z-50 transition-colors" onClick={(e) => { e.stopPropagation(); setCurrent((current - 1 + images.length) % images.length); }}>
            <ChevronLeft className="h-7 w-7 md:h-8 md:w-8" />
          </button>
          <button type="button" className="absolute right-2 md:right-6 bg-white/10 hover:bg-white/25 text-white p-3 rounded-full z-50 transition-colors" onClick={(e) => { e.stopPropagation(); setCurrent((current + 1) % images.length); }}>
            <ChevronRight className="h-7 w-7 md:h-8 md:w-8" />
          </button>
          <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3 z-50">
            {images.map((_, i) => (
              <button key={i} type="button" onClick={(e) => { e.stopPropagation(); setCurrent(i); }} className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-white scale-125' : 'bg-white/40'}`} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
