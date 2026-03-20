import React from 'react';
import { motion } from 'framer-motion';

const OverviewHeader = ({ onAddStudentClick }) => {
  return (
    <section className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-bold text-primary tracking-tight mb-2">Data Mahasiswa</h2>
        <p className="text-on-surface-variant max-w-lg">
          Kelola informasi akademik seluruh mahasiswa Fakultas Ilmu Komputer Universitas Brawijaya.
        </p>
      </motion.div>
      <motion.button
        onClick={onAddStudentClick}
        className="btn-glow bg-secondary-container text-on-secondary-fixed px-8 py-3 rounded-xl font-bold text-sm shadow-xl shadow-secondary-container/20 flex items-center gap-2"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="material-symbols-outlined">add</span>
        Tambah Mahasiswa
      </motion.button>
    </section>
  );
};

export default OverviewHeader;
