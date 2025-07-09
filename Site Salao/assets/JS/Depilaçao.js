function ArmazenarDepilaçao() {
  return "Pele lisinha e sensação de frescor por muito mais tempo! Com nossa depilação, você se sente leve, confortável e pronta para qualquer ocasião. Agende já!";
}

function MostrarTextoDepilaçao() {
  var texto = ArmazenarDepilaçao();
  var ElementoTexto = document.getElementById("TxtDepilaçao");
  var seta = document.getElementById("seta-depila");

  if (ElementoTexto.innerHTML === "") {
    ElementoTexto.innerHTML = "<p>" + texto + "</p>";
    seta.classList.add("seta-rotacionada");
    elementoTexto.classList.add("expanded"); // Adiciona a classe para animar
  } else {
    ElementoTexto.innerHTML = "";
    seta.classList.remove("seta-rotacionada");
    elementoTexto.classList.remove("expanded"); // Remove a classe para animar
  }
}
