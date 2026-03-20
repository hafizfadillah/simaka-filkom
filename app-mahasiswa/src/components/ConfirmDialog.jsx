import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 400, damping: 22 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 10,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
};

const ConfirmDialog = ({ isOpen, onCancel, onConfirm, title, message, confirmText = "Ya, Lanjutkan", icon = "warning", confirmColor = "error" }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <motion.div
            className="absolute inset-0 bg-primary/30 backdrop-blur-sm dark:bg-slate-900/50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            onClick={onCancel}
          />

          <motion.div
            className="relative w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/10"
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-8 text-center">
              <motion.div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  confirmColor === 'error' ? 'bg-error-container text-on-error-container' : 'bg-primary-container text-primary-fixed'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 15, delay: 0.1 }}
              >
                <span className="material-symbols-outlined text-3xl">{icon}</span>
              </motion.div>
              <h3 className="text-xl font-bold text-on-surface mb-2">{title}</h3>
              <div className="text-on-surface-variant text-sm flex flex-col items-center">
                {message}
              </div>
            </div>
            <div className="px-8 pb-8 flex gap-4 justify-center">
              <motion.button
                onClick={onCancel}
                className="px-6 py-3 rounded-full text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 border border-outline-variant/30"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Batal
              </motion.button>
              <motion.button
                onClick={onConfirm}
                className={`px-6 py-3 rounded-full text-sm font-bold shadow-lg transition-colors duration-200 ${
                  confirmColor === 'error' 
                    ? 'bg-error text-on-error hover:bg-error/90 shadow-error/20' 
                    : 'bg-primary text-white hover:bg-primary/90 shadow-primary/20'
                }`}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
              >
                {confirmText}
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmDialog;
