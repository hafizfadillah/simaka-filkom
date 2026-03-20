import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 350, damping: 25 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

const AddStudentModal = ({ isOpen, onClose, onSave, student }) => {
  const [nim, setNim] = useState('');
  const [nama, setNama] = useState('');
  const [angkatan, setAngkatan] = useState('');
  const [fakultas, setFakultas] = useState('');
  const [departemen, setDepartemen] = useState('');
  const [strata, setStrata] = useState('');
  const [prodi, setProdi] = useState('');

  useEffect(() => {
    if (student) {
      setNim(student.nim);
      setNama(student.nama);
      setAngkatan(student.angkatan);
      setFakultas(student.fakultas);
      setDepartemen(student.departemen);
      setStrata(student.strata);
      setProdi(student.prodi);
    } else {
      setNim('');
      setNama('');
      setAngkatan('');
      setFakultas('');
      setDepartemen('');
      setStrata('');
      setProdi('');
    }
  }, [student, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nim.trim() || !nama.trim() || !prodi) return;
    onSave({ 
      nim: nim.trim(), 
      nama: nama.trim(), 
      angkatan: parseInt(angkatan, 10) || 2026,
      fakultas: fakultas.trim(),
      departemen: departemen.trim(),
      strata: strata.trim(),
      prodi 
    });
  };

  const isEditing = !!student;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-[560px] bg-surface-container-lowest rounded-[2rem] shadow-2xl overflow-y-auto max-h-[85vh] border border-outline-variant/10"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-primary to-primary-container p-6 text-white relative">
              <div className="relative z-10 pr-24">
                <h3 className="text-3xl font-bold tracking-tight mb-2">
                  {isEditing ? 'Edit Mahasiswa' : 'Tambah Mahasiswa'}
                </h3>
                <p className="opacity-70 text-sm">
                  {isEditing
                    ? 'Update data mahasiswa untuk FILKOM UB.'
                    : <>Tambahkan data mahasiswa baru untuk FILKOM UB<br />Academic Year 2026/2027.</>}
                </p>
              </div>
              <div className="absolute top-10 right-10">
                <div className="w-16 h-16 rounded-full border-4 border-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl opacity-50">
                    {isEditing ? 'edit' : 'person_add'}
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="p-6 space-y-4" onSubmit={handleSubmit}>
              {/* NIM */}
              <div className="space-y-2 group">
                <label className="text-[12px] font-bold uppercase tracking-wider text-on-surface-variant ml-1" htmlFor="nim">
                  Nomor Induk Mahasiswa (NIM)
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-0 text-on-surface-variant group-focus-within:text-on-surface transition-colors duration-200 z-10 pl-3">badge</span>
                  <input
                    className="w-full bg-surface-container-low border border-surface-container-high focus:border-outline-variant focus:ring-1 focus:ring-outline-variant rounded-lg pl-10 pr-4 py-3 text-[14px] text-primary font-medium transition-all duration-200 placeholder:text-on-surface-variant"
                    id="nim"
                    placeholder="Example: 215150200111xxx"
                    type="text"
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Nama */}
              <div className="space-y-2 group">
                <label className="text-[12px] font-bold uppercase tracking-wider text-on-surface-variant ml-1" htmlFor="nama">
                  Nama Lengkap Mahasiswa
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-0 text-on-surface-variant group-focus-within:text-on-surface transition-colors duration-200 z-10 pl-3">person</span>
                  <input
                    className="w-full bg-surface-container-low border border-surface-container-high focus:border-outline-variant focus:ring-1 focus:ring-outline-variant rounded-lg pl-10 pr-4 py-3 text-[14px] text-primary font-medium transition-all duration-200 placeholder:text-on-surface-variant"
                    id="nama"
                    placeholder="Nama lengkap"
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Row 3: Angkatan & Fakultas */}
              <div className="grid grid-cols-2 gap-4">
                {/* Angkatan */}
                <div className="space-y-2 group">
                  <label className="text-[12px] font-bold uppercase tracking-wider text-on-surface-variant ml-1" htmlFor="angkatan">
                    Angkatan
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-0 text-on-surface-variant group-focus-within:text-on-surface transition-colors duration-200 z-10 pl-3">calendar_today</span>
                    <input
                      className="w-full bg-surface-container-low border border-surface-container-high focus:border-outline-variant focus:ring-1 focus:ring-outline-variant rounded-lg pl-10 pr-4 py-3 text-[14px] text-primary font-medium transition-all duration-200 placeholder:text-on-surface-variant"
                      id="angkatan"
                      placeholder="Contoh: 2025"
                      type="number"
                      value={angkatan}
                      onChange={(e) => setAngkatan(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Fakultas */}
                <div className="space-y-2 group">
                  <label className="text-[12px] font-bold uppercase tracking-wider text-on-surface-variant ml-1" htmlFor="fakultas">
                    Fakultas
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-0 text-on-surface-variant group-focus-within:text-on-surface transition-colors duration-200 z-10 pl-3">domain</span>
                    <input
                      className="w-full bg-surface-container-low border border-surface-container-high focus:border-outline-variant focus:ring-1 focus:ring-outline-variant rounded-lg pl-10 pr-4 py-3 text-[14px] text-primary font-medium transition-all duration-200 placeholder:text-on-surface-variant"
                      id="fakultas"
                      placeholder="Contoh: ILMU KOMPUTER"
                      type="text"
                      value={fakultas}
                      onChange={(e) => setFakultas(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Row 4: Departemen & Strata */}
              <div className="grid grid-cols-2 gap-4">
                {/* Departemen */}
                <div className="space-y-2 group">
                  <label className="text-[12px] font-bold uppercase tracking-wider text-on-surface-variant ml-1" htmlFor="departemen">
                    Departemen
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-0 text-on-surface-variant group-focus-within:text-on-surface transition-colors duration-200 z-10 pl-3">category</span>
                    <input
                      className="w-full bg-surface-container-low border border-surface-container-high focus:border-outline-variant focus:ring-1 focus:ring-outline-variant rounded-lg pl-10 pr-4 py-3 text-[14px] text-primary font-medium transition-all duration-200 placeholder:text-on-surface-variant"
                      id="departemen"
                      placeholder="Contoh: SISTEM INFORMASI"
                      type="text"
                      value={departemen}
                      onChange={(e) => setDepartemen(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Strata */}
                <div className="space-y-2 group">
                  <label className="text-[12px] font-bold uppercase tracking-wider text-on-surface-variant ml-1" htmlFor="strata">
                    Strata
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-0 text-on-surface-variant group-focus-within:text-on-surface transition-colors duration-200 z-10 pl-3">layers</span>
                    <input
                      className="w-full bg-surface-container-low border border-surface-container-high focus:border-outline-variant focus:ring-1 focus:ring-outline-variant rounded-lg pl-10 pr-4 py-3 text-[14px] text-primary font-medium transition-all duration-200 placeholder:text-on-surface-variant"
                      id="strata"
                      placeholder="Contoh: SARJANA 1"
                      type="text"
                      value={strata}
                      onChange={(e) => setStrata(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Prodi */}
              <div className="space-y-2 group">
                <label className="text-[12px] font-bold uppercase tracking-wider text-on-surface-variant ml-1" htmlFor="prodi">
                  Program Studi
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-0 text-on-surface-variant group-focus-within:text-on-surface transition-colors duration-200 z-10 pl-3">school</span>
                  <select
                    className="w-full bg-surface-container-low border border-surface-container-high focus:border-outline-variant focus:ring-1 focus:ring-outline-variant rounded-lg pl-10 pr-10 py-3 text-[14px] text-primary font-medium transition-all duration-200 appearance-none cursor-pointer"
                    id="prodi"
                    value={prodi}
                    onChange={(e) => setProdi(e.target.value)}
                    required
                  >
                    <option disabled value="">Pilih Program Studi</option>
                    <option value="PENDIDIKAN TEKNOLOGI INFORMASI">PENDIDIKAN TEKNOLOGI INFORMASI (PTI)</option>
                    <option value="TEKNIK INFORMATIKA">TEKNIK INFORMATIKA (TIF)</option>
                    <option value="TEKNIK KOMPUTER">TEKNIK KOMPUTER (TEKKOM)</option>
                    <option value="SISTEM INFORMASI">SISTEM INFORMASI (SI)</option>
                    <option value="TEKNOLOGI INFORMASI">TEKNOLOGI INFORMASI (TI)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 pointer-events-none text-on-surface-variant z-10">expand_more</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-6 mt-4 border-t border-outline-variant/10">
                <motion.button
                  type="button"
                  onClick={onClose}
                  className="bg-surface-container-high text-on-surface font-semibold py-3 px-8 rounded-xl hover:bg-surface-container-highest transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Batal
                </motion.button>
                <motion.button
                  type="submit"
                  className="bg-primary text-on-primary font-bold py-3 px-8 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {isEditing ? 'Update' : 'Simpan'}
                  <span className="material-symbols-outlined text-sm">{isEditing ? 'check' : 'save'}</span>
                </motion.button>
              </div>
            </form>


            {/* Footer Visual */}
            <div className="h-2 bg-gradient-to-r from-secondary-container via-primary-container to-secondary-container"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddStudentModal;
