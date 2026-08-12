function resoudre() {
  let a11 = Number(document.getElementById("a11").value);
  let a12 = Number(document.getElementById("a12").value);
  let a13 = Number(document.getElementById("a13").value);
  let a21 = Number(document.getElementById("a21").value);
  let a22 = Number(document.getElementById("a22").value);
  let a23 = Number(document.getElementById("a23").value);
  let a31 = Number(document.getElementById("a31").value);
  let a32 = Number(document.getElementById("a32").value);
  let a33 = Number(document.getElementById("a33").value);
  let b1 = Number(document.getElementById("b1").value);
  let b2 = Number(document.getElementById("b2").value);
  let b3 = Number(document.getElementById("b3").value);
  let delta = a11 * (a22 * a33 - a23 * a32) - a12 * (a21 * a33 - a23 * a31) + a13 * (a21 * a32 - a22 * a31);
  let delta1 = b1 * (a22 * a33 - a23 * b3) - a12 * (b2 * a33 - a23 * b3) + a13 * (b2 * a32 - a22 * b3);
  let delta2 = a11 * (b2 * a33 - a23 * b3) - b1 * (a21 * a33 - a23 * a31) + a13 * (a21 * b3 - b2 * a31);
  let delta3 = a11 * (a22 * b3 - b2 * a32) - a12 * (a21 * b3 - b2 * a31) + b1 * (a21 * a32 - a22 * a31);
  let inputs = document.querySelectorAll("input");
  for (let input of inputs) 
  {
    if (input.value.trim() === "") 
    {
        alert("Veuillez remplir tous les champs.");
        input.focus();
        return;
    }
  }
  let x1 = delta1 / delta;
  let x2 = delta2 / delta;
  let x3 = delta3 / delta;
  document.getElementById("x1").textContent = x1.toFixed(2);
  document.getElementById("x2").textContent = x2.toFixed(2);
  document.getElementById("x3").textContent = x3.toFixed(2);
}
