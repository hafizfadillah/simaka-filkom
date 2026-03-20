import java.util.Scanner;

public class Main {
    private static MahasiswaManager manager = new MahasiswaManager();
    private static Scanner scanner = new Scanner(System.in);
    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════════╗");
        System.out.println("║   SIMAKA - Sistem Informasi Akademik FILKOM  ║");
        System.out.println("║   Program Studi PTI Angkatan 2025            ║");
        System.out.println("╚══════════════════════════════════════════════╝");

        boolean running = true;
        while (running) {
            tampilkanMenu();
            System.out.print("Pilih menu [1-5]: ");
            String pilihan = scanner.nextLine().trim();

            switch (pilihan) {
                case "1":
                    menuTampilkan();
                break;
                case "2":
                    menuTambah();
                break;
                case "3":
                    menuEdit();
                break;
                case "4":  
                    menuHapus();
                break;
                case "5":
                    System.out.println("Terima kasih. Program selesai.");
                    running = false;
                    break;
                default:
                    System.out.println("Pilihan tidak valid. Masukkan angka 1-5.");
            }
            System.out.println();
        }
        scanner.close();
    }

    private static void tampilkanMenu() {
        System.out.println("==========================================");
        System.out.println("  1. Tampilkan Semua Mahasiswa");
        System.out.println("  2. Tambah Data Mahasiswa");
        System.out.println("  3. Edit Data Mahasiswa");
        System.out.println("  4. Hapus Data Mahasiswa");
        System.out.println("  5. Keluar");
        System.out.println("==========================================");
    }

    private static void menuTampilkan() {
        manager.tampilkanSemua();
    }

    private static void menuTambah() {
        System.out.println("\n--- TAMBAH DATA MAHASISWA ---");
        System.out.print("NIM        : ");
        String nim = scanner.nextLine().trim();
        System.out.print("Nama       : ");
        String nama = scanner.nextLine().trim();
        System.out.print("Angkatan   : ");
        int angkatan = Integer.parseInt(scanner.nextLine().trim());
        System.out.print("Fakultas   : ");
        String fakultas = scanner.nextLine().trim();
        System.out.print("Departemen : ");
        String departemen = scanner.nextLine().trim();
        System.out.print("Strata     : ");
        String strata = scanner.nextLine().trim();
        System.out.print("Prodi      : ");
        String prodi = scanner.nextLine().trim();

        MahasiswaPTI mhs = new MahasiswaPTI(nim, nama, angkatan, fakultas, departemen, strata, prodi);
        manager.tambahMahasiswa(mhs);
    }

    private static void menuEdit() {
        System.out.println("\n--- EDIT DATA MAHASISWA ---");
        System.out.print("Masukkan NIM yang ingin diedit: ");
        String nim = scanner.nextLine().trim();
 
        Mahasiswa mhs = manager.cariMahasiswa(nim);
        if (mhs == null) {
            System.out.println("Mahasiswa dengan NIM " + nim + " tidak ditemukan.");
            return;
        }
 
        System.out.println("Data saat ini:");
        mhs.tampilkanData();
        System.out.println("(Tekan Enter tanpa mengetik apapun untuk tidak mengubah data)");
 
        MahasiswaPTI mPTI = (MahasiswaPTI) mhs;
 
        System.out.print("NIM baru        [" + mhs.getNim() + "]: ");
        String nimBaru = scanner.nextLine().trim();
        if (nimBaru.isEmpty()) nimBaru = mhs.getNim();
 
        System.out.print("Nama baru       [" + mhs.getNama() + "]: ");
        String namaBaru = scanner.nextLine().trim();
        if (namaBaru.isEmpty()) namaBaru = mhs.getNama();
 
        System.out.print("Angkatan baru   [" + mPTI.getAngkatan() + "]: ");
        String angkatanInput = scanner.nextLine().trim();
        int angkatanBaru = angkatanInput.isEmpty()
            ? mPTI.getAngkatan()
            : Integer.parseInt(angkatanInput);
 
        System.out.print("Fakultas baru   [" + mPTI.getFakultas() + "]: ");
        String fakultasBaru = scanner.nextLine().trim();
        if (fakultasBaru.isEmpty()) fakultasBaru = mPTI.getFakultas();
 
        System.out.print("Departemen baru [" + mPTI.getDepartemen() + "]: ");
        String departemenBaru = scanner.nextLine().trim();
        if (departemenBaru.isEmpty()) departemenBaru = mPTI.getDepartemen();
 
        System.out.print("Strata baru     [" + mPTI.getStrata() + "]: ");
        String strataBaru = scanner.nextLine().trim();
        if (strataBaru.isEmpty()) strataBaru = mPTI.getStrata();
 
        System.out.print("Prodi baru      [" + mPTI.getProdi() + "]: ");
        String prodiBaru = scanner.nextLine().trim();
        if (prodiBaru.isEmpty()) prodiBaru = mPTI.getProdi();
 
        manager.editMahasiswa(nim, nimBaru, namaBaru, angkatanBaru, fakultasBaru, departemenBaru, strataBaru, prodiBaru);
    }

    private static void menuHapus() {
        System.out.println("\n--- HAPUS DATA MAHASISWA ---");
        System.out.print("Masukkan NIM yang ingin dihapus: ");
        String nim = scanner.nextLine().trim();

        Mahasiswa mhs = manager.cariMahasiswa(nim);
        if (mhs == null) {
            System.out.println("Mahasiswa dengan NIM " + nim + " tidak ditemukan.");
            return;
        }

        System.out.println("Data yang akan dihapus:");
        mhs.tampilkanData();
        System.out.print("Yakin ingin menghapus? (y/n): ");
        String konfirmasi = scanner.nextLine().trim();
        if (konfirmasi.equalsIgnoreCase("y")) {
            manager.hapusMahasiswa(nim);
        } else {
            System.out.println("Penghapusan dibatalkan.");
        }
    }
}