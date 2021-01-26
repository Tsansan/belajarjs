//pharseint memaksa semua data untuk berubah menjadi interger
// var angka = parseInt(prompt("silahkan masukkan angka antara 1 sampai dengan 4 !"));

// if (angka === 1) {
//     alert("anda memasukkan angka 1");
// } else if (angka === 2) {
//     alert("anda memasukkan angka 2");
// } else if (angka === 3) {
//     alert("anda memasukkan angka 3");
// } else if (angka === 4) {
//     alert("anda memasukkan angka 4");
// } else {
//     alert('anda memasukkan angka yang salah')
// }

//semua yang di masukkan oleh prompt adalah data string bukan interger!
// var angka = prompt('silahkan memasukkan angka')

// switch (angka) {
//     case '1':
//         alert('anda memasukkan angka 1');
//         break;
//     case '2':
//         alert('anda memasukkan angka 2');
//         break;
//     case '3':
//         alert('anda memasukkan angka 3');
//         break;

//     default:
//         alert('angka yang anda masukkan salah');
//         break;
// }

var item = prompt('Masukkan nama makanan / minuman : \n (contoh : nasi, daging, susu, hamburger, softdrink)');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan / minuman sehat');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('makanan / minuman Tidak sehat');
        break;
    default:
        alert('anda memasukkan nama yang salah');
        break;


}