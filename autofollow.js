function randomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function scrollPage() {
  window.scrollBy({
    top: randomDelay(200, 300), // Scroll secara acak antara 200px hingga 300px
    behavior: 'smooth'
  });
}

function followUsers() {
  var buttons = document.querySelectorAll('[data-testid$="-follow"]');
  
  buttons.forEach((button, index) => {
    // Pastikan tombol bukan "Unfollow" dengan mengecek atribut dan innerText
    if (!button.dataset.testid.includes('unfollow') && 
        !button.ariaLabel.toLowerCase().includes('following')) {
      setTimeout(() => {
        button.click();
        console.log('Tombol follow diklik');
      }, randomDelay(1000, 3000) * index); // Waktu acak antara 1-3 detik untuk setiap tombol
    }
  });
}

setInterval(function () {
  // Pertama lakukan follow
  followUsers();
  
  // Setelah follow, lakukan scroll dengan jeda yang lebih lambat
  setTimeout(() => {
    scrollPage();
  }, randomDelay(4000, 6000)); // Jeda acak lebih panjang untuk scrolling (4-6 detik)
  
}, randomDelay(5000, 10000)); // Interval acak untuk keseluruhan proses
