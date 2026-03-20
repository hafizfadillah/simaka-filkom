import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TopNav = ({ searchQuery, onSearch, isDark, toggleDark, adminProfile, adminAvatar, setAdminAvatar, onLogoutClick, onProfileClick, onMenuClick }) => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isViewPhotoOpen, setIsViewPhotoOpen] = useState(false);
  const [previewAvatar, setPreviewAvatar] = useState(null);
  
  const notifRef = useRef(null);
  const profileRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setIsNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
        setPreviewAvatar(null); // Clear preview if closed
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, title: 'Mahasiswa baru ditambahkan', time: '5 mnt lalu' },
    { id: 2, title: 'Data berhasil diupdate', time: '1 jam lalu' },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveAvatar = () => {
    if (previewAvatar) {
      setAdminAvatar(previewAvatar);
      setPreviewAvatar(null);
    }
  };

  return (
    <>
      <header className="h-24 px-6 md:px-12 flex items-center justify-between glass-nav sticky top-0 z-40 border-b border-outline-variant/10 shadow-sm backdrop-blur-2xl">
      <div className="flex items-center gap-4 md:gap-8 flex-1">
        <button 
          onClick={onMenuClick}
          className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center hover:bg-surface-container-high text-on-surface-variant transition-colors group"
        >
          <span className="material-symbols-outlined text-[28px] group-hover:text-primary transition-colors">menu</span>
        </button>

        <h1 className="text-lg md:text-xl font-black text-on-surface tracking-tight hidden sm:block truncate">Academic Management</h1>
        
        <div className="relative group flex-1 max-w-sm hidden md:block">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-on-surface transition-colors">
            search
          </span>
          <input
            className="w-full bg-surface-container-low border border-outline-variant focus:ring-2 focus:ring-secondary-container/50 rounded-full py-2.5 pl-12 pr-6 text-sm font-medium text-primary placeholder:text-on-surface-variant transition-all"
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Cari NIM atau Nama mahasiswa..."
            type="text"
            value={searchQuery}
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        <motion.button 
          onClick={toggleDark}
          className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center hover:bg-surface-container-low text-on-surface transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="material-symbols-outlined md:text-[24px]"
            initial={false}
            animate={{ rotate: isDark ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? 'light_mode' : 'dark_mode'}
          </motion.span>
        </motion.button>

        {/* Notifications Dropdown */}
        <div className="relative" ref={notifRef}>
          <motion.button 
            className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center hover:bg-surface-container-low text-on-surface transition-colors relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { setIsNotifOpen(!isNotifOpen); setIsProfileOpen(false); }}
          >
            <span className="material-symbols-outlined md:text-[24px]">notifications</span>
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-error rounded-full ring-2 ring-surface"></span>
          </motion.button>
          
          <AnimatePresence>
            {isNotifOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-14 w-80 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="px-5 py-4 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low/30">
                  <h3 className="font-bold text-sm text-on-surface">Notifikasi</h3>
                  <span className="text-xs font-semibold text-primary cursor-pointer hover:underline">Tandai sudah dibaca</span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map(n => (
                    <div key={n.id} className="px-5 py-4 hover:bg-surface-container-low transition-colors cursor-pointer border-b border-outline-variant/5 last:border-0 flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-sm">notifications</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-on-surface mb-0.5">{n.title}</p>
                        <p className="text-xs text-on-surface-variant">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 text-center border-t border-outline-variant/10 bg-surface-container-low/30 hover:bg-surface-container-high transition-colors cursor-pointer">
                  <p className="text-xs font-bold text-primary">Lihat Semua</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile Dropdown */}
        <div className="relative ml-2" ref={profileRef}>
          <motion.div 
            className="flex items-center gap-3 cursor-pointer p-1.5 pr-4 rounded-full hover:bg-surface-container-high/80 transition-colors border border-outline-variant/20 bg-surface-container-low shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotifOpen(false); }}
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden bg-surface-container ring-2 ring-outline-variant/30 shrink-0">
              <img src={adminAvatar} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-bold text-on-surface leading-tight truncate max-w-[100px]">{adminProfile.name.split(' ')[0]}</p>
            </div>
            <span className="material-symbols-outlined text-on-surface text-[20px] ml-1">
              expand_more
            </span>
          </motion.div>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-16 w-72 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              >
                <div className="p-6 text-center border-b border-outline-variant/10 bg-gradient-to-b from-primary-fixed/20 to-surface-container-lowest">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-surface bg-surface-container shadow-md relative group">
                    <img 
                      src={previewAvatar || adminAvatar} 
                      alt="Profile Preview" 
                      className="w-full h-full object-cover" 
                    />
                    
                    {/* Hover Overlay to change photo */}
                    <div 
                      className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <span className="material-symbols-outlined text-white">photo_camera</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg text-on-surface truncate px-2">{adminProfile.name}</h3>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">{adminProfile.role}</p>

                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                  />

                  <AnimatePresence>
                    {previewAvatar && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 flex gap-2 justify-center"
                      >
                        <button 
                          onClick={saveAvatar}
                          className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full hover:bg-primary/90 transition-colors shadow-sm"
                        >
                          Simpan
                        </button>
                        <button 
                          onClick={() => setPreviewAvatar(null)}
                          className="px-4 py-1.5 bg-surface-variant text-on-surface-variant text-xs font-bold rounded-full hover:bg-surface-container-high transition-colors"
                        >
                          Batal
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!previewAvatar && (
                    <div className="mt-4 flex flex-col gap-2 px-6">
                      <button 
                        onClick={() => { setIsViewPhotoOpen(true); setIsProfileOpen(false); }}
                        className="w-full text-xs font-bold text-primary hover:bg-primary-container/30 bg-primary-container/10 px-4 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                        Lihat Foto Profil
                      </button>
                      
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full text-[11px] font-semibold text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[14px]">edit</span>
                        Ganti Foto
                      </button>
                    </div>
                  )}
                </div>

                <div className="py-2">
                  <button 
                    onClick={(e) => { e.preventDefault(); onProfileClick(); setIsProfileOpen(false); }}
                    className="w-full text-left px-6 py-3 text-sm font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-3 text-on-surface-variant hover:text-on-surface"
                  >
                    <span className="material-symbols-outlined text-[20px]">person</span>
                    Lihat Profil
                  </button>
                  <button 
                    onClick={() => { onLogoutClick(); setIsProfileOpen(false); }}
                    className="w-full text-left px-6 py-3 text-sm font-semibold text-error hover:bg-error-container/50 transition-colors flex items-center gap-3"
                  >
                    <span className="material-symbols-outlined text-[20px]">logout</span>
                    Keluar Akun
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
    
      {/* Full Screen Photo Viewer */}
      <AnimatePresence>
        {isViewPhotoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setIsViewPhotoOpen(false)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setIsViewPhotoOpen(false)}
            >
              <span className="material-symbols-outlined text-[32px]">close</span>
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-lg w-full aspect-square rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={adminAvatar} 
                alt="Profile Full View" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-xl font-black text-white mb-0.5">{adminProfile.name}</h4>
                <p className="text-[10px] font-bold text-primary-fixed-dim uppercase tracking-widest">{adminProfile.role}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopNav;
