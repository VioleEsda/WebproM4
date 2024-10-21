// Menampilkan pesan selamat datang saat halaman dimuat
window.onload = function() {
    alert("Selamat datang di halaman konten!");
};

// Menambahkan event listener untuk validasi form saat submit
const contactForm = document.getElementById('contactForm');
if (contactForm) { // Hanya menambahkan event listener jika form ada
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form default

        // Mengambil nilai input dari field
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validasi sederhana: jika salah satu field kosong, tampilkan pesan peringatan
        if (name === "" || email === "" || message === "") {
            alert("Harap isi semua field.");
        } else {
            alert("Form berhasil dikirim!\nNama: " + name + "\nEmail: " + email + "\nPesan: " + message);
            contactForm.reset(); // Mengosongkan form setelah submit
        }
    });
}
