// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataBelanjaan) => {
  initArr = [];
  dataBelanjaan.map((bel) => {
    initArr.push("- " + bel.nama + " x " + bel.kuantitas);
  });
  return initArr;
};

// console.log("oke", listBelanjaan(dataBelanjaan));

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (dataBelanjaan) => {
  initTotal = 0;
  dataBelanjaan.map((bel) => {
    initTotal = initTotal + bel.harga * bel.kuantitas;
  });
  return initTotal;
};

// console.log("oke", totalBelanjaan(dataBelanjaan));

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
