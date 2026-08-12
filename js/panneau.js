let indice = 0;
let images;
function afficherImage() {
  images.eq(indice).fadeOut(500, function () {
    indice++;
    if (indice >= images.length) {
      indice = 0;
    }
    images.eq(indice).fadeIn(500);
  });
}

$(document).ready(function () {
  images = $(".pub");
  images.hide();
  images.eq(indice).show();
  setInterval(function () {
    afficherImage();
  }, 3000);
});
