setInterval(function () {
    window.scrollTo(0, document.body.scrollHeight);
var input = document.querySelectorAll('[data-testid="-follow"]');
  for (var i = 0; i < input.length; i++) {
   input[i].click();
}
}, 3000);
