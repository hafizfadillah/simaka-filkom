import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import OverviewHeader from './components/OverviewHeader';
import StatsOverview from './components/StatsOverview';
import StudentTable from './components/StudentTable';
import Footer from './components/Footer';
import AddStudentModal from './components/AddStudentModal';
import ConfirmDialog from './components/ConfirmDialog';
import Dashboard from './components/Dashboard';
import Laporan from './components/Laporan';
import Pengaturan from './components/Pengaturan';
import { BASE_URL } from './api';

// Statis dummy data dihapus, sekarang pakai fetch API

const DEFAULT_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuCbeI2lIFpyHwQBnDdX1D08jHOD4orWAuTEWWQacoSjx6ICT1LoFpTz9yw0urhnLuwjcTS-sN1PyV0tYKgRGHIfsqIhMCWaMQG54wrOd1Ej36lp_-R6v_v89H6FiK6JgZ_eJ8c587xzJL9hI83jeRnNrUz6qzpa9KDRrkEK2m8tRbd-qkFXgvH8CRsbcyqn76KOPy9Q_y110D6sTL7l29J9meBxGkKm7RNbSpR7iao6aUSOPTrC5bw-5H9kwe55D3Ppz-Yv2JKW5qDZ";

function App() {
  const [activePage, setActivePage] = useState('data');
  const [adminProfile, setAdminProfile] = useState({
    name: 'Muhammad Hafiz',
    role: 'Admin Profile'
  });
  const [adminAvatar, setAdminAvatar] = useState(() => {
    return localStorage.getItem('adminAvatar') || DEFAULT_AVATAR;
  });
  
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('adminAvatar', adminAvatar);
  }, [adminAvatar]);

  // Fetch API
  const fetchMahasiswa = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/mahasiswa`);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error('Gagal fetch data:', err);
    }
  };

  useEffect(() => {
    fetchMahasiswa();
  }, []);

  // ---- Derived / computed ----
  const filteredStudents = useMemo(() => {
    if (!searchQuery.trim()) return students;
    const q = searchQuery.toLowerCase();
    return students.filter(
      (s) => s.nim.toLowerCase().includes(q) || s.nama.toLowerCase().includes(q)
    );
  }, [students, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredStudents.length / perPage));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedStudents = filteredStudents.slice((safePage - 1) * perPage, safePage * perPage);

  const totalMahasiswa = students.length;
  const totalProdi = new Set(students.map((s) => s.prodi)).size;
  const activePercent = totalMahasiswa > 0 ? '100%' : '0%';

  // ---- Handlers ----
  const handleAdd = () => {
    setEditingStudent(null);
    setIsModalOpen(true);
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  const handleDeleteRequest = (student) => {
    setDeleteTarget(student);
  };

  const handleDeleteConfirm = async () => {
    if (deleteTarget) {
      try {
        await fetch(`${BASE_URL}/api/mahasiswa/${deleteTarget.nim}`, {
          method: 'DELETE'
        });
        fetchMahasiswa();
      } catch (err) {
        console.error('Gagal hapus data:', err);
      }
      setDeleteTarget(null);
    }
  };

  const handleSave = async (data) => {
    try {
      if (editingStudent) {
        await fetch(`${BASE_URL}/api/mahasiswa/${editingStudent.nim}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } else {
        await fetch(`${BASE_URL}/api/mahasiswa`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      }
      fetchMahasiswa();
    } catch (err) {
      console.error('Gagal save data:', err);
    }
    setIsModalOpen(false);
    setEditingStudent(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleLogoutConfirm = () => {
    setIsLogoutModalOpen(false);
    setActivePage('dashboard');
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex transition-colors duration-300">
      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 ml-0 lg:ml-72 flex flex-col min-h-screen w-full relative transition-all duration-300">
        <TopNav 
          searchQuery={searchQuery} 
          onSearch={handleSearch} 
          isDark={isDark}
          toggleDark={() => setIsDark(!isDark)}
          adminProfile={adminProfile}
          adminAvatar={adminAvatar}
          setAdminAvatar={setAdminAvatar}
          onLogoutClick={() => setIsLogoutModalOpen(true)}
          onProfileClick={() => setActivePage('pengaturan')}
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className="p-4 md:p-12 flex-1 flex flex-col relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            {activePage === 'dashboard' && <Dashboard key="dashboard" />}

            {activePage === 'data' && (
              <motion.div
                key="data"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-12 flex-1 w-full"
              >
                <OverviewHeader onAddStudentClick={handleAdd} />
                <StatsOverview
                  totalMahasiswa={totalMahasiswa}
                  activePercent={activePercent}
                  totalProdi={totalProdi}
                />
                <div className="overflow-x-auto">
                  <StudentTable
                    students={paginatedStudents}
                    totalStudents={filteredStudents.length}
                    allStudentsCount={students.length}
                    currentPage={safePage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    onEdit={handleEdit}
                    onDelete={handleDeleteRequest}
                    perPage={perPage}
                  />
                </div>
              </motion.div>
            )}

            {activePage === 'laporan' && <Laporan key="laporan" />}
            
            {activePage === 'pengaturan' && (
              <Pengaturan 
                key="pengaturan" 
                adminProfile={adminProfile}
                setAdminProfile={setAdminProfile}
                adminAvatar={adminAvatar}
                isDark={isDark}
                toggleDark={() => setIsDark(!isDark)}
              />
            )}
          </AnimatePresence>
        </div>

        <Footer />
      </main>

      <AddStudentModal
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setEditingStudent(null); }}
        onSave={handleSave}
        student={editingStudent}
      />

      {/* Delete Student Dialog */}
      <ConfirmDialog
        isOpen={!!deleteTarget}
        onCancel={() => setDeleteTarget(null)}
        onConfirm={handleDeleteConfirm}
        title="Konfirmasi Hapus"
        message={<p>Yakin ingin menghapus data mahasiswa <strong className="text-on-surface">{deleteTarget?.nama}</strong>? Tindakan ini tidak bisa dibatalkan.</p>}
        confirmText="Ya, Hapus"
        icon="delete"
        confirmColor="error"
      />

      {/* Logout Dialog */}
      <ConfirmDialog
        isOpen={isLogoutModalOpen}
        onCancel={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogoutConfirm}
        title="Konfirmasi Keluar"
        message={<p>Yakin ingin keluar dari sesi saat ini?</p>}
        confirmText="Ya, Keluar"
        icon="logout"
        confirmColor="primary"
      />
    </div>
  );
}

export default App;
