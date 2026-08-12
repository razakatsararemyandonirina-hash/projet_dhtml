$(document).ready(function () {
  let totalQuantite = 0;
  let totalMontant = 0;
  let totalPrix = 0;
  let nbProduits = 0;
  let prixMin = Infinity;
  let prixMax = 0;
  $("#produits tbody tr").each(function () {
    let quantite = Number($(this).find("td").eq(1).text());
    let prix = Number($(this).find("td").eq(2).text());
    let montant = quantite * prix;
    $(this).find("td").eq(3).text(montant + " Ar");
    totalMontant += montant;
    totalQuantite += quantite;
    totalPrix += prix;
    nbProduits++;
    if (prix < prixMin) {
      prixMin = prix;
    }
    if (prix > prixMax) {
      prixMax = prix;
    }
  });
  let prixMoyen = totalPrix / nbProduits;
  $("#prixTotal").text(totalPrix + " Ar");
  $("#qteTotale").text(totalQuantite);
  $("#montantTotal").text(totalMontant + " Ar");
  $("#prixMoyen").text(prixMoyen.toFixed(2) + " Ar");
  $("#prixMin").text(prixMin + " Ar");
  $("#prixMax").text(prixMax + " Ar");
  $("#produits").DataTable({
    language: {
      url: "libs/datatables/fr-FR.json",
    },
  });
  let ctx = document.getElementById("graphe");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Prix moyen", "Prix minimal", "Prix maximal"],
      datasets: [
        {
          label: "Prix (Ar)",
          data: [prixMoyen, prixMin, prixMax],
          backgroundColor: ["#0d6efd", "#198754", "#dc3545"],
        },
      ],
    },
  });
});
