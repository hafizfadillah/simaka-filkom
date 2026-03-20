import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="mt-auto px-4 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center opacity-50 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <p className="text-[10px] text-center md:text-left font-medium text-on-surface-variant">© 2026 FILKOM Universitas Brawijaya. Built for Academic Excellence.</p>
      <div className="flex gap-4 md:gap-6">
        <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Sistem Informasi Akademik</span>
        <span className="text-[9px] font-bold uppercase tracking-widest text-primary">v4.2.0</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
