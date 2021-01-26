var jumlahAngkot, angkotBeroperasi, noAngkot, angkotLembur1, angkotLembur2, angkotLembur3;
jumlahAngkot = 10;
angkotBeroperasi = 6;
angkotLembur1 = 8;
angkotLembur2 = 10;
angkotLembur3 = 5;
noAngkot = 1;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi && noAngkot != angkotLembur3) {
        console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik');

    } else if (noAngkot == angkotLembur1 || noAngkot == angkotLembur2 || noAngkot == angkotLembur3) {
        console.log('angkot No. ' + noAngkot + ' Sedang Lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' Sedang tidak beroperasi');
    }
} 
