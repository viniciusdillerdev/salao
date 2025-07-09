function ArmazenarEstetica() {
  return "Revitalize seu corpo e alma com nossos tratamentos estéticos. Proporcione-se momentos de cuidado e bem-estar, com resultados incríveis. Agende já!";
}

function MostrarTextoEstetica() {
  const texto = ArmazenarEstetica();
  const elementoTexto = document.getElementById("TxtEstetica");
  const seta = document.getElementById("seta-estetica");

  if (elementoTexto.innerHTML === "") {
    elementoTexto.innerHTML = "<p>" + texto + "</p>";
    seta.classList.add("seta-rotacionada");
    elementoTexto.classList.add("expanded"); // Adiciona a classe para animar
  } else {
    elementoTexto.innerHTML = "";
    seta.classList.remove("seta-rotacionada");
    elementoTexto.classList.remove("expanded"); // Remove a classe para animar
  }
}
