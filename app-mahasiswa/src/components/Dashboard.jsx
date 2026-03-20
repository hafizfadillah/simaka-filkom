import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-12 flex-1"
    >
      <section>
        <h2 className="text-4xl font-bold text-primary tracking-tight mb-2">Dashboard</h2>
        <p className="text-on-surface-variant max-w-lg">
          Ringkasan informasi akademik Fakultas Ilmu Komputer Universitas Brawijaya.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_rgba(24,28,33,0.06)] group hover:shadow-[0_12px_40px_rgba(24,28,33,0.1)] transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">badge</span>
            </div>
          </div>
          <p className="text-sm font-medium text-on-surface-variant mb-1">Total Dosen Aktif</p>
          <h3 className="text-4xl font-black text-primary">125</h3>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_32px_rgba(24,28,33,0.06)] group hover:shadow-[0_12px_40px_rgba(24,28,33,0.1)] transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-tertiary-container/10 rounded-full flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined">menu_book</span>
            </div>
          </div>
          <p className="text-sm font-medium text-on-surface-variant mb-1">Mata Kuliah</p>
          <h3 className="text-4xl font-black text-primary">84</h3>
        </div>

        <div className="bg-primary p-8 rounded-xl shadow-xl text-white relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary-container/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
          <div className="relative z-10 flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
              <span className="material-symbols-outlined">dns</span>
            </div>
          </div>
          <div className="relative z-10">
            <p className="text-sm font-medium text-primary-fixed-dim mb-1">Server Uptime</p>
            <h3 className="text-4xl font-black text-white">99.9%</h3>
          </div>
        </div>
      </div>
      
      <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_8px_32px_rgba(24,28,33,0.06)]">
        <h3 className="text-xl font-bold text-primary mb-4">Aktivitas Terbaru</h3>
        <p className="text-sm text-on-surface-variant">Belum ada aktivitas baru hari ini.</p>
      </div>
    </motion.div>
  );
};

export default Dashboard;
