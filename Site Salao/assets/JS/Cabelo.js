function ArmazenarCabelo() {
  return "Que tal renovar o visual e elevar a autoestima? Um bom cabelo transforma o dia e faz você se sentir ainda mais poderosa. Agende seu horário e sinta a diferença!";
}

function CarregarServiço() {
  const texto = ArmazenarCabelo();
  const elementoTexto = document.getElementById("TxtCabelo");
  const seta = document.getElementById("seta-cabelo");

  if (elementoTexto.innerHTML === "") {
    elementoTexto.innerHTML = "<p>" + texto + "</p>";
    seta.classList.add("seta-rotacionada");
    elementoTexto.classList.add("expanded"); // Adiciona a classe para animar
  } else {
    elementoTexto.innerHTML = "";
    seta.classList.remove("seta-rotacionada");
    elementoTexto.classList.remove("expanded"); // remove a classe para animar
  }
}
