import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const useCountUp = (end, duration = 1200) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) {
      setCount(end);
      return;
    }
    started.current = true;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) {
        ref.current = requestAnimationFrame(animate);
      }
    };
    ref.current = requestAnimationFrame(animate);
    return () => ref.current && cancelAnimationFrame(ref.current);
  }, [end, duration]);

  return count;
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] },
  }),
};

const StatsOverview = ({ totalMahasiswa, activePercent, totalProdi }) => {
  const animatedTotal = useCountUp(totalMahasiswa);
  const animatedProdi = useCountUp(totalProdi, 800);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div
        className="premium-card p-6 md:p-8 rounded-2xl shadow-xl flex items-center justify-between group hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 border border-white/5"
        custom={0}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Total Mahasiswa</p>
          <h3 className="text-4xl md:text-5xl font-black text-on-surface glow-text">{animatedTotal}</h3>
        </div>
        <div className="w-16 h-16 bg-primary/10 dark:bg-primary-container/30 rounded-2xl flex items-center justify-center text-primary group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 border border-primary/5 dark:border-white/5">
          <span className="material-symbols-outlined text-3xl">groups</span>
        </div>
      </motion.div>
      <motion.div
        className="premium-card-primary p-6 md:p-8 rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex items-center justify-between text-white relative overflow-hidden group hover:shadow-[0_25px_60px_rgba(37,99,235,0.4)] transition-all duration-500"
        custom={1}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <div className="z-10">
          <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Aktif Semester Ini</p>
          <h3 className="text-4xl md:text-5xl font-black text-white glow-text drop-shadow-lg">{activePercent}</h3>
        </div>
        <div className="z-10 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300 border border-white/20">
          <span className="material-symbols-outlined text-3xl">how_to_reg</span>
        </div>
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-black/10 rounded-full blur-2xl"></div>
      </motion.div>
      <motion.div
        className="premium-card p-6 md:p-8 rounded-2xl shadow-xl flex items-center justify-between group hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 border border-white/5"
        custom={2}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Program Studi</p>
          <h3 className="text-4xl md:text-5xl font-black text-on-surface glow-text">{animatedProdi}</h3>
        </div>
        <div className="w-16 h-16 bg-primary/10 dark:bg-primary-container/30 rounded-2xl flex items-center justify-center text-primary group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 border border-primary/5 dark:border-white/5">
          <span className="material-symbols-outlined text-3xl">school</span>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsOverview;
