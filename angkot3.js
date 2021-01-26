var jumlahAngkot, angkotBeroperasi, noAngkot;
jumlahAngkot = 10;
angkotBeroperasi = 6;
noAngkot = 1;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik');
    } else {
        console.log('Angkot No. ' + noAngkot + ' Sedang tidak beroperasi');
    }

}
