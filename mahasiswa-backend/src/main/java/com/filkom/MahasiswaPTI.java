package com.filkom;

public class MahasiswaPTI extends Mahasiswa {
    private int angkatan;
    private String fakultas;
    private String departemen;
    private String strata;
    private String prodi;

    public MahasiswaPTI() {
        super();
    }

    public MahasiswaPTI(String nim, String nama, int angkatan, String fakultas, String departemen, String strata, String prodi) {
        super(nim, nama);
        this.angkatan = angkatan;
        this.fakultas = fakultas;
        this.departemen = departemen;
        this.strata = strata;
        this.prodi = prodi;
    }

    public int getAngkatan() {
        return angkatan;
    }
    public String getFakultas() {
        return fakultas;
    }
    public String getDepartemen() {
        return departemen;
    }
    public String getStrata() {
        return strata;
    }
    public String getProdi() {
        return prodi;
    }

    public void setAngkatan(int angkatan) {
        this.angkatan = angkatan;
    }

    public void setFakultas(String fakultas) {
        this.fakultas = fakultas;
    }

    public void setDepartemen(String departemen) {
        this.departemen = departemen;
    }

    public void setStrata(String strata) {
        this.strata = strata;
    }

    public void setProdi(String prodi) {
        this.prodi = prodi;
    }

    @Override
    public void tampilkanData() {
        System.out.println("NIM        : " + getNim());
        System.out.println("Nama       : " + getNama());
        System.out.println("Angkatan   : " + angkatan);
        System.out.println("Fakultas   : " + fakultas);
        System.out.println("Departemen : " + departemen);
        System.out.println("Strata     : " + strata);
        System.out.println("Prodi      : " + prodi);
    }
}
