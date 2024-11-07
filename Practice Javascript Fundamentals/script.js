const nama = "Fiki Azimah"; // string
const isMahasiswa = true; // boolean
let umur = 21; // number
const hobi = ["Memasak", "Desain UI/UX", "Mengembangkan Aplikasi"]; // array
const dataMahasiswa = { // object
    nama: "Fiki Azimah",
    jurusan: "Sistem Informasi",
    kampus: "Universitas Bina Sarana Informatika",
    angkatan: 2021,
    aktif: true
};

function showData() {
    console.log("Nama:", nama);           // String
    console.log("Apakah Mahasiswa:", isMahasiswa); // Boolean
    console.log("Umur:", umur);           // Number
    console.log("Hobi:", hobi);           // Array
    console.log("Data Mahasiswa:", dataMahasiswa); // Object

    alert(
        `Nama: ${nama}\n` +
        `Apakah Mahasiswa: ${isMahasiswa}\n` +
        `Umur: ${umur}\n` +
        `Hobi: ${hobi.join(", ")}\n` +
        `Kampus: ${dataMahasiswa.kampus}\n` +
        `Angkatan: ${dataMahasiswa.angkatan}\n` +
        `Status Aktif: ${dataMahasiswa.aktif}`
    );
}
