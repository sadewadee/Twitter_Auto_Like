let likeCounter = 0; // Menghitung jumlah tombol like yang diklik

function randomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function scrollPage() {
  window.scrollBy({
    top: randomDelay(200, 300), // Scroll secara acak antara 200px hingga 300px
    behavior: 'smooth' // Gulir halus agar lebih alami
  });
}

function likePosts() {
  var buttons = document.querySelectorAll('button[data-testid="like"]');
  
  buttons.forEach((button, index) => {
    // Cek tombol apakah itu tombol "Like" atau sudah berubah menjadi "Unlike"
    if (button.getAttribute('aria-label') && !button.getAttribute('aria-label').toLowerCase().includes('liked')) {
      setTimeout(() => {
        button.click();
        likeCounter++; // Tambahkan penghitung setelah tombol di-klik
        console.log('Tombol like diklik, total klik: ' + likeCounter);

        // Jika sudah mencapai 100 klik, beri jeda 20 detik
        if (likeCounter % 100 === 0) {
          console.log('Menunggu 20 detik sebelum melanjutkan...');
          setTimeout(() => {
            console.log('Lanjutkan klik setelah 20 detik');
          }, 20000); // Jeda 20 detik
        }
      }, randomDelay(3000, 5000) * index); // Jeda lebih lambat, antara 3-5 detik per tombol
    }
  });
}

setInterval(function () {
  // Pertama, lakukan aksi like
  likePosts();
  
  // Setelah like, lakukan scroll dengan jeda lebih lambat
  setTimeout(() => {
    scrollPage();
  }, randomDelay(4000, 6000)); // Jeda acak untuk scroll antara 4-6 detik setelah like
}, randomDelay(7000, 12000)); // Interval acak untuk keseluruhan proses, antara 7-12 detik
