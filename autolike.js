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
  var buttons = document.querySelectorAll('[data-testid="like"]');
  
  buttons.forEach((button, index) => {
    // Pastikan tidak mengklik tombol "Unlike" dengan memeriksa atribut data-testid dan aria-label
    if (!button.dataset.testid.includes('unlike') && !button.ariaLabel.toLowerCase().includes('liked')) {
      setTimeout(() => {
        button.click();
        console.log('Tombol like diklik');
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
