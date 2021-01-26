var jumlahAngkot, angkotBeroperasi, noAngkot, angkotLembur;
jumlahAngkot = 10;
angkotBeroperasi = 6;
angkotLembur1 = 8;
angkotLembur2 = 10;
noAngkot = 1;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik');
    } else if (noAngkot == angkotLembur1 || noAngkot == angkotLembur2) {
        console.log('angkot No. ' + noAngkot + ' Sedang Lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' Sedang tidak beroperasi');
    }
} 
