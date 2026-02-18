import { useState, useRef } from 'react';
import image_6154e2f72c4cf429d885fb2c51de8e279a504903 from 'figma:asset/6154e2f72c4cf429d885fb2c51de8e279a504903.png';
import { motion, useScroll, useTransform } from 'motion/react';
import { Plane, Train, Car, ArrowRight, Sparkles, X, ZoomIn } from 'lucide-react';
import bikeCase2 from 'figma:asset/df5e6d8e5476c8171c169b1ff81f9da17bc0256f.png';
import Slider from 'react-slick';

export function Hero() {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const fullscreenSliderRef = useRef<Slider>(null);

  const images = [
    { src: image_6154e2f72c4cf429d885fb2c51de8e279a504903, alt: 'NOOYAH BK002 Bike Hard Case - Vista 1' },
    { src: bikeCase2, alt: 'NOOYAH BK002 Bike Hard Case - Vista 2' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
  };

  const openFullscreen = (index: number) => {
    setCurrentSlide(index);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      fullscreenSliderRef.current?.slickGoTo(index);
    }, 100);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="relative pt-20 md:pt-32 pb-12 md:pb-24 overflow-hidden min-h-[90vh] md:min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-white to-blue-50/80" />
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity }}
          >
            {/* Badge */}
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
              <br />
              nel mondo
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Noleggia le nostre borse rigide professionali <strong className="text-gray-900">NOOYAH BK002</strong> 
              {' '}e trasporta la tua bicicletta in totale sicurezza.
            </p>

            {/* Transport Icons */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex -space-x-4">
                <motion.div 
                  className="h-12 w-12 md:h-14 md:w-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white rotate-6"
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Plane className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </motion.div>
                <motion.div 
                  className="h-12 w-12 md:h-14 md:w-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white -rotate-6"
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Train className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </motion.div>
                <motion.div 
                  className="h-12 w-12 md:h-14 md:w-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white rotate-6"
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Car className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </motion.div>
              </div>
              <p className="text-gray-700 font-semibold text-base md:text-lg">
                Perfette per aereo, treno e auto
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              <motion.button
                onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Noleggia ora
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gray-900 px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-orange-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Scopri di più
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Carousel with advanced animations */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl opacity-20 blur-xl"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl opacity-20 blur-xl"
              animate={{
                y: [0, 20, 0],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Carousel Container */}
            <motion.div 
              className="relative group"
              style={{ y: y2 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-blue-500/20 pointer-events-none z-10" />
                
                {/* Zoom Icon Indicator */}
                <motion.div
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg z-20 flex items-center gap-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <ZoomIn className="h-4 w-4 text-orange-600" />
                  <span className="text-xs font-semibold text-gray-700">Clicca per ingrandire</span>
                </motion.div>
                
                {/* Carousel */}
                <div className="relative z-10 cursor-pointer">
                  <Slider ref={sliderRef} {...sliderSettings}>
                    {images.map((image, index) => (
                      <div key={index} onClick={() => openFullscreen(index)}>
                        <motion.img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto object-contain"
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats - Enhanced */}
        <motion.div
          className="mt-12 md:mt-32 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { number: '118x25x86', label: 'Dimensioni (cm)', color: 'from-blue-500 to-blue-600', icon: '📏' },
            { number: '9.5kg', label: 'Peso leggero', color: 'from-orange-500 to-orange-600', icon: '⚖️' },
            { number: '29"', label: 'Bici fino a 29"', color: 'from-purple-500 to-purple-600', icon: '🚴' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl text-center border-2 border-gray-100 hover:border-orange-200 transition-all overflow-hidden group"
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">{stat.icon}</div>
                <p className={`text-2xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 md:mb-3`}>
                  {stat.number}
                </p>
                <p className="text-gray-600 font-semibold text-sm md:text-lg">{stat.label}</p>
              </div>
              
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-full`} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeFullscreen}
        >
          {/* Close Button */}
          <motion.button
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-50 backdrop-blur-sm transition-colors"
            onClick={closeFullscreen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-8 w-8" />
          </motion.button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full z-50 font-semibold">
            {currentSlide + 1} / {images.length}
          </div>

          {/* Fullscreen Carousel */}
          <div 
            className="w-full max-w-6xl px-4 md:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            <Slider ref={fullscreenSliderRef} {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index}>
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto max-h-[85vh] object-contain mx-auto"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      )}
    </section>
  );
}