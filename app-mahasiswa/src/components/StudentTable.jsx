import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PRODI_STYLES = {
  TIF: 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]',
  TEKKOM: 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.3)]',
  SI: 'bg-amber-500 text-on-secondary-fixed shadow-[0_0_15px_rgba(245,158,11,0.3)]',
  TI: 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]',
  PTI: 'bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.3)]',
};

const AVATAR_STYLES = {
  TIF: 'bg-primary-container text-on-primary',
  TEKKOM: 'bg-tertiary-container text-white',
  SI: 'bg-surface-container-high text-on-surface-variant',
  TI: 'bg-surface-tint text-white',
  PTI: 'bg-inverse-surface text-inverse-on-surface',
};

const getInitials = (name) => {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const getProdiAbbr = (prodi) => {
  if (!prodi) return '';
  const map = {
    'PENDIDIKAN TEKNOLOGI INFORMASI': 'PTI',
    'TEKNIK INFORMATIKA': 'TIF',
    'TEKNIK KOMPUTER': 'TEKKOM',
    'SISTEM INFORMASI': 'SI',
    'TEKNOLOGI INFORMASI': 'TI'
  };
  return map[prodi.toUpperCase()] || prodi;
};

const rowVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, delay: i * 0.04, ease: [0.4, 0, 0.2, 1] },
  }),
  exit: {
    opacity: 0,
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

const StudentTable = ({
  students,
  totalStudents,
  allStudentsCount,
  currentPage,
  totalPages,
  onPageChange,
  onEdit,
  onDelete,
  perPage,
}) => {
  const startIndex = (currentPage - 1) * perPage;

  return (
    <motion.section
      className="bg-surface-container-lowest rounded-xl shadow-[0_8px_32px_rgba(24,28,33,0.06)] overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <div className="px-10 py-8 flex justify-between items-center bg-surface-container-low/30 border-b border-outline-variant/5">
        <h3 className="text-xl font-bold text-on-surface">Daftar Seluruh Mahasiswa</h3>
        <div className="flex gap-4">
          <motion.button
            className="p-2 border border-outline-variant/30 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="material-symbols-outlined">filter_list</span>
          </motion.button>
          <motion.button
            className="p-2 border border-outline-variant/30 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="material-symbols-outlined">download</span>
          </motion.button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low/50 border-b border-white/5">
              <th className="px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface">No</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface">NIM</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface">Nama</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface">Angkatan</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface">Fakultas</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface">Departemen</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface">Strata</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface">Program Studi</th>
              <th className="px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface text-right">Aksi</th>
            </tr>
          </thead>
          <AnimatePresence mode="popLayout">
            <motion.tbody
              key={currentPage}
              className="divide-y divide-surface-container-high"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {students.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-10 py-12 text-center text-on-surface-variant">
                    Tidak ada data mahasiswa ditemukan.
                  </td>
                </tr>
              ) : (
                students.map((student, index) => (
                  <motion.tr
                    key={student.id}
                    custom={index}
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    className="bg-surface hover:bg-white/[0.02] border-b border-white/[0.03] transition-all duration-300 group"
                  >
                    <td className="px-10 py-6 text-sm font-medium text-on-surface-variant">
                      {String(startIndex + index + 1).padStart(2, '0')}
                    </td>
                    <td className="px-6 py-6 text-sm font-bold tracking-wider text-primary">{student.nim}</td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 shrink-0 rounded-full text-[11px] leading-none font-bold flex items-center justify-center ${AVATAR_STYLES[getProdiAbbr(student.prodi)] || 'bg-surface-container-high text-on-surface-variant'}`}>
                          {getInitials(student.nama)}
                        </div>
                        <span className="text-sm font-semibold text-on-surface">{student.nama}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-sm font-medium text-on-surface-variant">
                      {student.angkatan}
                    </td>
                    <td className="px-6 py-6 text-sm font-medium text-on-surface-variant whitespace-nowrap">
                      {student.fakultas}
                    </td>
                    <td className="px-6 py-6 text-sm font-medium text-on-surface-variant whitespace-nowrap">
                      {student.departemen}
                    </td>
                    <td className="px-6 py-6 text-sm font-medium text-on-surface-variant whitespace-nowrap">
                      {student.strata}
                    </td>
                    <td className="px-6 py-6">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm whitespace-nowrap ${PRODI_STYLES[getProdiAbbr(student.prodi)] || 'bg-surface-container-high text-on-surface-variant'}`}>
                        {getProdiAbbr(student.prodi)}
                      </span>
                    </td>
                    <td className="px-10 py-6 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <motion.button
                          onClick={() => onEdit(student)}
                          className="w-9 h-9 flex items-center justify-center rounded-xl text-on-surface-variant hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-transparent hover:border-primary/30"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </motion.button>
                        <motion.button
                          onClick={() => onDelete(student)}
                          className="w-9 h-9 flex items-center justify-center rounded-xl text-on-surface-variant hover:bg-error/20 hover:text-error transition-all duration-300 border border-transparent hover:border-error/30"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              )}
            </motion.tbody>
          </AnimatePresence>
        </table>
      </div>
      <div className="px-10 py-6 bg-surface-container-low/10 flex justify-between items-center border-t border-surface-container-high">
        <p className="text-xs text-on-surface-variant">
          Menampilkan {students.length} dari {totalStudents} Mahasiswa
          {totalStudents !== allStudentsCount && ` (total: ${allStudentsCount})`}
        </p>
        <div className="flex gap-2">
          <motion.button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high disabled:opacity-30 transition-colors duration-200"
            whileHover={currentPage > 1 ? { scale: 1.05 } : {}}
            whileTap={currentPage > 1 ? { scale: 0.95 } : {}}
          >
            Previous
          </motion.button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <motion.button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                page === currentPage
                  ? 'bg-secondary-container text-on-secondary-fixed shadow-[0_4px_12px_rgba(255,193,7,0.2)]'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {page}
            </motion.button>
          ))}
          <motion.button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high disabled:opacity-30 transition-colors duration-200"
            whileHover={currentPage < totalPages ? { scale: 1.05 } : {}}
            whileTap={currentPage < totalPages ? { scale: 0.95 } : {}}
          >
            Next
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default StudentTable;
