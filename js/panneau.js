let indice = 0;
let images;
let diaporama;
function afficherImage(nouvelIndice){
  images.stop(true, true);
  images.eq(indice).fadeOut(500, function(){
  indice = nouvelIndice;
  images.eq(indice).fadeIn(500);
  });
}
function demarrerDiaporama(){
  clearInterval(diaporama);
  diaporama = setInterval(function(){
    let suivant = indice + 1;
    if(suivant >= images.length){
      suivant = 0;
    }
    afficherImage(suivant);
  },3000);
}
$(document).ready(function () {
  images = $(".pub");
  images.hide();
  images.eq(indice).show();
  demarrerDiaporama();
  $("#pause").click(function(){
    clearInterval(diaporama);
  });
  $("#reprendre").click(function (){
    demarrerDiaporama();
  });
  $("#suivant").click(function (){
    let suivant = indice + 1;
    if (suivant >= images.length){
      suivant = 0;
    }
    afficherImage(suivant);
  });
  $("#precedent").click(function (){
    let precedent = indice - 1;
    if (precedent < 0){
      precedent = images.length - 1;
    }
    afficherImage(precedent);
  });
});
