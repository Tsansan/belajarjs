var jumlahAngkot, angkotBeroperasi, noAngkot;
jumlahAngkot = 10;
angkotBeroperasi = 6;
noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
    noAngkot++;
};

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
    console.log("angkot No. " + noAngkot + " Sedang Tidak Beroperasi");
};