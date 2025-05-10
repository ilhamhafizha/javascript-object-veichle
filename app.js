let kendaraan = {
  napol: "",
  warna: "",
  jenis: "",
  lamaParkir: 0,
};

kendaraan.napol = prompt("Masukkan Nopol Kendaraan: ");
kendaraan.warna = prompt("Masukkan Warna Kendaraan: ");
kendaraan.jenis = prompt("Masukkan Jenis Kendaraan (Mobil/Motor): ");
kendaraan.lamaParkir = parseInt(prompt("Masukkan Lama Parkir (dalam jam): "), 10);

let biayaParkir = 0;

if (kendaraan.jenis === "Mobil" || kendaraan.jenis === "mobil") {
  biayaParkir = 7000;
  if (kendaraan.lamaParkir > 1) {
    for (let i = 2; i <= kendaraan.lamaParkir; i++) {
      biayaParkir += 5000;
    }
  } else if (kendaraan.jenis === "Motor" || kendaraan.jenis === "motor") {
    biayaParkir = 3000;
    if (kendaraan.lamaParkir > 1) {
      for (let i = 2; i <= kendaraan.lamaParkir; i++) {
        biayaParkir += 2000;
      }
    }
  }
}

alert(`Biaya Parkir untuk kendaraan ${kendaraan.jenis} dengan lama parkir ${kendaraan.lamaParkir} adalah ${biayaParkir}`);
