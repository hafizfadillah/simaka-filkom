package com.filkom;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mahasiswa")
@CrossOrigin(origins = "https://simaka-filkom.vercel.app")
public class MahasiswaController {

    private final MahasiswaManager manager = new MahasiswaManager();

    @GetMapping
    public List<Mahasiswa> getAllMahasiswa() {
        return manager.getSemuaMahasiswa();
    }

    @PostMapping
    public ResponseEntity<?> addMahasiswa(@RequestBody MahasiswaPTI mahasiswa) {
        if (manager.cariMahasiswa(mahasiswa.getNim()) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("NIM sudah terdaftar");
        }
        manager.tambahMahasiswa(mahasiswa);
        return ResponseEntity.status(HttpStatus.CREATED).body(mahasiswa);
    }

    @PutMapping("/{nim}")
    public ResponseEntity<?> editMahasiswa(@PathVariable String nim, @RequestBody MahasiswaPTI data) {
        boolean success = manager.editMahasiswa(
                nim,
                data.getNim(),
                data.getNama(),
                data.getAngkatan(),
                data.getFakultas(),
                data.getDepartemen(),
                data.getStrata(),
                data.getProdi());

        if (success) {
            return ResponseEntity.ok(data);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Mahasiswa tidak ditemukan");
        }
    }

    @DeleteMapping("/{nim}")
    public ResponseEntity<?> deleteMahasiswa(@PathVariable String nim) {
        boolean success = manager.hapusMahasiswa(nim);
        if (success) {
            return ResponseEntity.ok("Berhasil dihapus");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Mahasiswa tidak ditemukan");
        }
    }
}
