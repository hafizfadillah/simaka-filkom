import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ activePage, setActivePage, isOpen, onClose }) => {
  const navItems = [
    { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { id: 'data', icon: 'group', label: 'Data Mahasiswa' },
    { id: 'laporan', icon: 'description', label: 'Laporan' },
    { id: 'pengaturan', icon: 'settings', label: 'Pengaturan' },
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={`w-72 bg-primary-container dark:bg-surface-container-lowest text-on-surface flex flex-col fixed inset-y-0 left-0 z-50 border-r border-white/5 dark:border-white/5 transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 pb-4">
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="w-10 h-10 bg-white shadow-[0_0_20px_rgba(255,255,255,0.1)] rounded-xl flex items-center justify-center p-1.5 border border-white/10">
              <img
                alt="FILKOM UB Logo"
                className="w-full h-auto object-contain scale-[1.2]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbeI2lIFpyHwQBnDdX1D08jHOD4orWAuTEWWQacoSjx6ICT1LoFpTz9yw0urhnLuwjcTS-sN1PyV0tYKgRGHIfsqIhMCWaMQG54wrOd1Ej36lp_-R6v_v89H6FiK6JgZ_eJ8c587xzJL9hI83jeRnNrUz6qzpa9KDRrkEK2m8tRbd-qkFXgvH8CRsbcyqn76KOPy9Q_y110D6sTL7l29J9meBxGkKm7RNbSpR7iao6aUSOPTrC5bw-5H9kwe55D3Ppz-Yv2JKW5qDZ"
              />
            </div>
            <h2 className="text-xl font-black tracking-widest text-white dark:text-on-surface">SIMAKA</h2>
          </div>

          <nav className="space-y-2">
            {navItems.map((item, index) => {
              const isActive = activePage === item.id;
              return (
                <motion.a
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.06 }}
                  className={`nav-item flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 cursor-pointer select-none ${
                    isActive
                      ? 'bg-secondary-container text-on-secondary-fixed shadow-[0_8px_20px_rgba(255,193,7,0.2)] font-black'
                      : 'text-white/60 dark:text-on-surface-variant hover:text-white dark:hover:text-on-surface hover:bg-white/[0.03] font-bold'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage(item.id);
                    onClose(); // Auto close on mobile after click
                  }}
                  href={`#${item.id}`}
                >
                  <span
                    className="material-symbols-outlined transition-colors duration-200"
                    style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                  >
                    {item.icon}
                  </span>
                  <span className={`text-sm transition-all duration-200 ${isActive ? 'font-bold tracking-wide' : 'font-medium'}`}>
                    {item.label}
                  </span>
                </motion.a>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-8 pt-4">
          <motion.div
            className="p-6 rounded-xl bg-primary relative overflow-hidden group shadow-lg border border-outline-variant/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-secondary-container/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <p className="text-xs text-primary-fixed-dim uppercase tracking-widest font-bold mb-1 relative z-10">Status Sistem</p>
            <p className="flex items-center gap-2 text-sm font-medium text-white relative z-10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Koneksi Stabil
            </p>
          </motion.div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
