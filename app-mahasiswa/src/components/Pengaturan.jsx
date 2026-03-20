import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pengaturan = ({ adminProfile, setAdminProfile, adminAvatar, isDark, toggleDark }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(adminProfile.name);
  const [editRole, setEditRole] = useState(adminProfile.role);

  const handleSaveProfile = () => {
    // Only save if not empty
    if (editName.trim() && editRole.trim()) {
      setAdminProfile({ name: editName, role: editRole });
      setIsEditing(false);
    }
  };

  const handleCancelProfile = () => {
    setEditName(adminProfile.name);
    setEditRole(adminProfile.role);
    setIsEditing(false);
  };

  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-12 flex-1"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="mb-8"
      >
        <h2 className="text-4xl font-bold text-on-surface tracking-tight mb-2">Pengaturan</h2>
        <p className="text-on-surface-variant max-w-lg">
          Konfigurasi sistem, preferensi tampilan, dan manajemen akun admin.
        </p>
      </motion.div>

      <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-[0_8px_32px_rgba(24,28,33,0.06)] border border-outline-variant/10">
        <div className="max-w-xl space-y-10">
          <div>
            <h3 className="text-lg font-bold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">person</span>
              Profil Pengguna
            </h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-2xl border border-outline-variant/20 bg-surface shadow-sm">
              <div className="w-20 h-20 bg-surface-container-highest rounded-full overflow-hidden shrink-0 ring-4 ring-primary-fixed/30 p-1">
                <img src={adminAvatar} alt="Avatar" className="w-full h-full object-cover rounded-full" />
              </div>
              
              <div className="flex-1 w-full">
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="space-y-1.5 group">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Nama Lengkap</label>
                      <input 
                        type="text" 
                        value={editName} 
                        onChange={(e) => setEditName(e.target.value)}
                        className="w-full bg-surface-container-low border border-surface-container-high focus:border-outline-variant focus:ring-1 focus:ring-outline-variant rounded-lg px-4 py-2.5 text-primary font-medium transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-1.5 group">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Role Profile</label>
                      <input 
                        type="text" 
                        value={editRole}
                        onChange={(e) => setEditRole(e.target.value)}
                        className="w-full bg-surface-container-low border border-surface-container-high focus:border-outline-variant focus:ring-1 focus:ring-outline-variant rounded-lg px-4 py-2.5 text-primary font-medium transition-all duration-200"
                      />
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3 pt-3"
                    >
                      <button 
                        onClick={handleSaveProfile} 
                        className="px-5 py-2 bg-secondary-container text-on-secondary-fixed text-sm font-bold rounded-xl hover:bg-secondary-container/90 transition-colors shadow-md shadow-secondary-container/20"
                      >
                        Simpan Perubahan
                      </button>
                      <button 
                        onClick={() => setIsEditing(false)} 
                        className="px-5 py-2 border border-surface-container-high text-on-surface-variant text-sm font-bold rounded-xl hover:bg-surface-container-low transition-colors"
                      >
                        Batal
                      </button>
                    </motion.div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                    <div>
                      <p className="font-bold text-xl text-on-surface mb-1">{adminProfile.name}</p>
                      <p className="text-sm font-medium text-on-surface-variant">{adminProfile.role}</p>
                    </div>
                    <button 
                      onClick={() => setIsEditing(true)}
                      className="px-5 py-2.5 text-sm font-bold text-primary hover:bg-primary-container/30 bg-primary-container/10 rounded-xl transition-colors shrink-0 flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                      Edit Profil
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">tune</span>
              Preferensi Sistem
            </h3>
            <div className="space-y-4">
              <label 
                onClick={(e) => { e.preventDefault(); setEmailNotifications(!emailNotifications); }}
                className="flex items-center justify-between p-5 rounded-2xl border border-outline-variant/20 cursor-pointer hover:bg-surface-container-lowest/50 transition-colors bg-surface shadow-sm group"
              >
                <div>
                  <p className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Notifikasi Email</p>
                  <p className="text-sm text-on-surface-variant">Terima laporan mingguan dan pemberitahuan via email.</p>
                </div>
                <div className={`w-14 h-7 flex items-center p-1 rounded-full transition-colors duration-300 ${emailNotifications ? 'bg-primary justify-end' : 'bg-surface-container-highest shadow-inner border border-outline-variant/20 justify-start'}`}>
                  <motion.div 
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-5 h-5 shrink-0 bg-white rounded-full shadow-sm flex items-center justify-center"
                  />
                </div>
              </label>

              <label 
                onClick={(e) => { e.preventDefault(); toggleDark(); }}
                className="flex items-center justify-between p-5 rounded-2xl border border-outline-variant/20 cursor-pointer hover:bg-surface-container-lowest/50 transition-colors bg-surface shadow-sm group"
              >
                <div>
                  <p className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Mode Tampilan Gelap (Dark Mode)</p>
                  <p className="text-sm text-on-surface-variant">Sesuaikan UI dengan lingkungan rendah cahaya atau preferensi mata.</p>
                </div>
                <div className={`w-14 h-7 flex items-center p-1 rounded-full transition-colors duration-300 ${isDark ? 'bg-primary justify-end' : 'bg-surface-container-highest shadow-inner border border-outline-variant/20 justify-start'}`}>
                  <motion.div 
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-5 h-5 shrink-0 bg-white rounded-full shadow-sm flex items-center justify-center overflow-hidden"
                  >
                    <span className="material-symbols-outlined text-[12px] text-primary select-none opacity-50">
                      {isDark ? 'dark_mode' : 'light_mode'}
                    </span>
                  </motion.div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pengaturan;
