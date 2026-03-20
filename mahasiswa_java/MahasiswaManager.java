import java.util.ArrayList;

public class MahasiswaManager {
    private ArrayList<Mahasiswa> daftarMahasiswa;
    public MahasiswaManager() {
        daftarMahasiswa = new ArrayList<>();
        inisialisasiData();
    }

    private void inisialisasiData() {
        String fak  = "ILMU KOMPUTER";
        String dep  = "SISTEM INFORMASI";
        String str  = "SARJANA 1";
        String pro  = "PENDIDIKAN TEKNOLOGI INFORMASI";

        daftarMahasiswa.add(new MahasiswaPTI("255150600111038", "ALSANAWI HASIBUAN", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150600111039", "MUHAMMAD HAFIZ RAIHANSYAH", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150600111040", "SYAHDA ZAAHIRAH PUTRI CAHYANTO", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150600111041", "NASWA SALMA RODHIYAH", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150600111042", "DAFFA RAFI ANDHIKA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150600111043", "LAURENSIA EUGENE PURWOKO", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150600111044", "MIRANDA FAUZA PARAMA ASWARI", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150600111045", "MUHAMMAD DAFFA WIJAYA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150600111047", "AQILLA NAUVAL MAULANA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150600111048", "NANDO YUAN ANJASMARA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150600111049", "HARIS SANDI SUBIYANTO", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150600111050", "WARDATUL UMMA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150600111051", "SANDHYKA RAFASYA TRISNATAN", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150601111019", "YUANOCA AHMAD FIRNANDA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150601111020", "ANDINA MEGA KUSUMA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150601111021", "ILFA ZAKIYAH AL-ABIDAH", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150601111022", "MUHAMMAD RIDWAN", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150601111023", "MUHAMMAD HAFIZ FADILLAH", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150601111024", "ZAINIATUR RIZQIYAH", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150601111025", "KHALEDA ZIA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150601111026", "PANCA PANDU WINATA PUTRA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150601111027", "ACHMAD ZIDNI RIZIQ", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111023", "MUHAMMAD ALFATIH LIDINILLAH", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111024", "MUTIARA JOMA AHLA TSAQOFA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111025", "AINUN MARDIAH", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111026", "SALSABILA HASNA SHAFIAH", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111027", "NATASYA SALSYAHBILLA LAILA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111028", "FITHRI LULULUL MAKNUN", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111029", "INKA NADINE CHANDRAWINATA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111030", "MUHAMMAD DLIYAUL HAQ", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111031", "MUHAMMAD ZEIN ALHADI KAMMIS", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111032", "REHAN ABZARI HAUDA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111033", "BILLQISTHI ALBAR HAPRABU", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111034", "HAEDAR ARKAN ABDILLAH MAKASAR", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111035", "SAYYID HASHER GHNEIMSYLMI", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111036", "SHERLY RAIHANUN SANTOSA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111037", "MUHAMMAD DEDY KURNIADI", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111038", "MUHAMMAD SYAUQI ARIF RABBANI", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111039", "SAUKA GANA DZIKRI", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111040", "AYUDHITA NAZWA FADILLA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111041", "MOHAMMAD FIKRIY DZAKIY PRATAMA", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111042", "MAYKEL NGGAI", 2025, fak, dep, str, pro));
        daftarMahasiswa.add(new MahasiswaPTI("255150607111043", "MUHAMMAD ZACKY AL GHIFARI", 2025, fak, dep, str, pro));
    }

    public void tambahMahasiswa(Mahasiswa m) {
        if (cariMahasiswa(m.getNim()) != null) {
            System.out.println("Gagal: NIM " + m.getNim() + " sudah terdaftar.");
            return;
        }
        daftarMahasiswa.add(m);
        System.out.println("Berhasil menambahkan: " + m.getNama());
    }

    public boolean editMahasiswa(String nim, String nimBaru, String namaBaru, int angkatanBaru, String fakultasBaru, String departemenBaru, String strataBaru, String prodiBaru) {
        for (int i = 0; i < daftarMahasiswa.size(); i++) {
            Mahasiswa m = daftarMahasiswa.get(i);
            if (m.getNim().equals(nim)) {
                MahasiswaPTI mBaru = new MahasiswaPTI(
                    nimBaru, namaBaru, angkatanBaru, fakultasBaru, departemenBaru, strataBaru, prodiBaru
                );
                daftarMahasiswa.set(i, mBaru);
                System.out.println("Berhasil mengubah data mahasiswa NIM " + nim);
                return true;
            }
        }
        System.out.println("Mahasiswa NIM " + nim + " tidak ditemukan.");
        return false;
    }

    public boolean hapusMahasiswa(String nim) {
        Mahasiswa target = cariMahasiswa(nim);
        if (target != null) {
            daftarMahasiswa.remove(target);
            System.out.println("Berhasil menghapus: " + target.getNama());
            return true;
        }
        System.out.println("Mahasiswa NIM " + nim + " tidak ditemukan.");
        return false;
    }

    public void tampilkanSemua() {
        if (daftarMahasiswa.isEmpty()) {
            System.out.println("Belum ada data mahasiswa.");
            return;
        }
        System.out.println("=".repeat(55));
        System.out.println("     DAFTAR MAHASISWA PTI FILKOM UB 2025");
        System.out.println("=".repeat(55));
        int no = 1;
        for (Mahasiswa m : daftarMahasiswa) {
            System.out.println("No. " + no++);
            m.tampilkanData();
            System.out.println("-".repeat(55));
        }
        System.out.println("Total: " + daftarMahasiswa.size() + " mahasiswa");
    }

    public Mahasiswa cariMahasiswa(String nim) {
        for (Mahasiswa m : daftarMahasiswa) {
            if (m.getNim().equals(nim)) return m;
        }
        return null;
    }

    public int getJumlah() {
        return daftarMahasiswa.size();
    }
}