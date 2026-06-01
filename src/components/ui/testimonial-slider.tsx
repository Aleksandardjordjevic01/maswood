"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Maswood nam je napravio kuhinju po meri koja savršeno odgovara prostoru. Kvalitet materijala i preciznost izrade su izvanredni. Preporučujem svima!",
    name: "Milica Petrović",
    role: "Klijent, Beograd",
    initials: "MP",
  },
  {
    id: 2,
    quote: "Garderober koji su napravili za nas je funkcionalan i prelepo dizajniran. Timski rad je bio profesionalan od prve konsultacije do ugradnje.",
    name: "Dragan Jovanović",
    role: "Klijent, Novi Sad",
    initials: "DJ",
  },
  {
    id: 3,
    quote: "Odlična komunikacija, poštovanje rokova i neverovatna pažnja prema detaljima. Dnevna soba izgleda tačno onako kako smo zamislili.",
    name: "Ana Nikolić",
    role: "Klijent, Kragujevac",
    initials: "AN",
  },
  {
    id: 4,
    quote: "Više od 10 godina sarađujem sa Maswood-om za projekte mojih klijenata. Uvek pouzdani, uvek kvalitetni.",
    name: "Stefan Marković",
    role: "Arhitekta, Beograd",
    initials: "SM",
  },
  {
    id: 5,
    quote: "Uložili smo u nameštaj od Maswood-a i nismo se pokajali. Svaki detalj je urađen sa strašću i preciznošću.",
    name: "Jelena Stojanović",
    role: "Klijent, Niš",
    initials: "JS",
  },
];

const getVisibleCount = (width: number): number => {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
};

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      const maxIndexForNewWidth = testimonials.length - getVisibleCount(newWidth);
      if (currentIndex > maxIndexForNewWidth) {
        setCurrentIndex(Math.max(0, maxIndexForNewWidth));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth, currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    autoPlayRef.current = setInterval(() => {
      const visibleCount = getVisibleCount(windowWidth);
      const maxIndex = testimonials.length - visibleCount;
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) { setDirection(-1); return prev - 1; }
        if (prev <= 0) { setDirection(1); return prev + 1; }
        return prev + direction;
      });
    }, 4000);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isAutoPlaying, currentIndex, windowWidth, direction]);

  const visibleCount = getVisibleCount(windowWidth);
  const maxIndex = testimonials.length - visibleCount;

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goNext = () => {
    if (currentIndex < maxIndex) {
      setDirection(1);
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      pauseAutoPlay();
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      pauseAutoPlay();
    }
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -30 && currentIndex < maxIndex) goNext();
    else if (info.offset.x > 30 && currentIndex > 0) goPrev();
  };

  return (
    <section className="px-4 sm:px-6 py-10 md:py-16 bg-[#f8f8f8] overflow-hidden" style={{ fontFamily: 'var(--font-montserrat)' }}>
      <div className="mx-auto" style={{ maxWidth: '1216px' }}>
        {/* Header */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tighter text-[#1a1a1a]">
              Šta naši klijenti kažu
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full border transition-all duration-300 ${
                currentIndex === 0
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-[#cc9a6e] text-[#cc9a6e] hover:bg-[#cc9a6e] hover:text-white'
              }`}
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
              disabled={currentIndex >= maxIndex}
              className={`p-3 rounded-full border transition-all duration-300 ${
                currentIndex >= maxIndex
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-[#cc9a6e] text-[#cc9a6e] hover:bg-[#cc9a6e] hover:text-white'
              }`}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
            transition={{ type: 'spring', stiffness: 70, damping: 20 }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className={`flex-shrink-0 p-3 ${
                  visibleCount === 3 ? 'w-1/3' : visibleCount === 2 ? 'w-1/2' : 'w-full'
                }`}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                style={{ cursor: 'grab' }}
                whileTap={{ scale: 0.98, cursor: 'grabbing' }}
                whileHover={{ y: -4 }}
              >
                <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-sm flex flex-col">
                  <div className="text-[#cc9a6e] opacity-30 mb-4">
                    <Quote size={36} />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ backgroundColor: '#cc9a6e' }}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a1a1a] text-sm">{testimonial.name}</p>
                      <p className="text-gray-400 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <motion.button
              key={index}
              onClick={() => { setCurrentIndex(index); pauseAutoPlay(); }}
              animate={{ width: index === currentIndex ? 24 : 8 }}
              className={`h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-[#cc9a6e]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
