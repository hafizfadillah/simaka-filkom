import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="mt-auto px-12 py-8 flex justify-between items-center opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <p className="text-xs font-medium text-on-surface-variant">© 2026 FILKOM Universitas Brawijaya. Built for Academic Excellence.</p>
      <div className="flex gap-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Sistem Informasi Akademik</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">v4.2.0</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
