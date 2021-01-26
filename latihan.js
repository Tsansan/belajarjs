var x = prompt('masukkan nama');//input data

alert("hai" + " " + x)


//pada confirm tersebut menciptakan data yang bertipe boelan, true dan false yang kemudian di gunakan untuk pengkodisian if di bawah
//bolean. pada setiap string memilki nilai bulean true dan false
// untuk yang memiliki nilai bolean true copntohnya adalah angka di atas 0, huruf, dkk
// untuk yang memiliki nilai bolean false adalah 0, "", null, dkk

var y = confirm('apakah kamu benar benar ingin masuk?');


// while memiliki 3 kondisi penting
// while (kondisi terminasi){
//aksi
//increment / decrement
//}
//contoh 
//var na=1;
//while (na<=5){
//alert('warning);
//na++
//}
var z = 1;
while (z <= 5) {
    alert('makan bang ' + x + z + 'x');
    //y = confirm('apakah kamu benar benar ingin masuk?');
    z++;
}

//pengkodisian
if (y == true) {
    if (x.length > 1) {
        alert('Selamat hari Jum\'at "ORANG" yang bernama' + ' ' + x + '\n banyaknya karakter yang di gunakan ' + x.length);
    } else {
        alert('nama mu terlalu penddek lah lapet')
    }
} else {
    alert('Selamat TInggal' + ' ' + x)
}

