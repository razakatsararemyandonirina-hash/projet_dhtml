function modifierImage(propriete, valeur, idTexte){
  $("#image").css(propriete, valeur + "px");
  $(idTexte).text(valeur + "px");
}
$(document).ready(function () {
  $("#sliderLargeur").slider({
    min: 100,
    max: 600,
    value: 300,
    slide:function(event, ui){
        modifierImage("width", ui.value, "#largeurValue");
    }
  });
  $("#sliderHauteur").slider({
    min: 100,
    max: 600,
    value: 300,
    slide:function(event, ui){
        modifierImage("height", ui.value, "#hauteurValue");
    }
  });
  
});
