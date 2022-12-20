/*
** Mengimport file profile.json dengan menamakannya menjadi data
** supaya lebih gampang untuk select / memakainya
*/
import data from "../data/profile.json" assert { type: "json" };

// Ambil element html berdasarkan ID
const name = document.getElementById("profile_name");
const picture = document.getElementById("profile_picture");
const link = document.getElementById("profile_link");

// Memberikan value / isi ke element yang sudah di select / ambil berdasarkan ID
picture.src = data.picture;
name.innerText = "i'm " + data.name

/* Membuat perulangan foreach dari data.link, yang dimana data sendiri diambil dari import sementara
** untuk link, diambil dari value / isi dari profile.json
*/
data.link.forEach(data => {
    /*
    ** insertAdjacentHTML berguna untuk, memasukkan element html dari javascript
    ** Sebenernya bisa InsertHTML, cuma nanti yang kebaca hanya 1 data.
    ** Mankkanya disini menggunakan insertAdjacentHTML supaya bisa memunculkan sebanyak data yang ada
    ** Untuk afterbegin, bisa diganti. itu untuk mengatur posisi dari element yang kita masukkan
    ** Terdapat 4 posisi, kalau penasaran silahkan baca ini https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    */
    link.insertAdjacentHTML("afterbegin",`<a class='btn-link' href='#''>${data.name}</a>`)
});