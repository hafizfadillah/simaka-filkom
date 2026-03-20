import React from 'react';
import { motion } from 'framer-motion';

const Laporan = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-12 flex-1"
    >
      <section>
        <h2 className="text-4xl font-bold text-on-surface tracking-tight mb-2">Laporan</h2>
        <p className="text-on-surface-variant max-w-lg">
          Unduh dan kelola laporan akademik mahasiswa, rekap nilai, dan kehadiran.
        </p>
      </section>

      <div className="bg-surface-container-low p-10 rounded-xl shadow-[0_8px_32px_rgba(24,28,33,0.06)] flex flex-col items-center justify-center text-center py-32 border border-outline-variant/5">
        <motion.div 
          className="w-24 h-24 bg-primary-container text-primary rounded-full flex items-center justify-center mb-6 shadow-inner"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.2 }}
        >
          <span className="material-symbols-outlined text-5xl">analytics</span>
        </motion.div>
        <h3 className="text-2xl font-bold text-on-surface mb-3">Modul Laporan Segera Hadir</h3>
        <p className="text-on-surface-variant max-w-md text-sm leading-relaxed mb-8">
          Fitur pembuatan laporan khusus, statistik komprehensif, dan ekspor data sedang dalam tahap pengembangan oleh tim IT.
        </p>
        <button className="px-6 py-2.5 rounded-full border border-outline-variant/30 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors">
          Beri Masukan Fitur
        </button>
      </div>
    </motion.div>
  );
};

export default Laporan;
