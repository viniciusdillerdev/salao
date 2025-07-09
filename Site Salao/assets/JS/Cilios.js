function ArmazenarCilios() {
  return "Realce o olhar e a sua beleza com cílios e sobrancelhas bem feitas. Deixe-se encantar pelo toque de elegância em cada detalhe. Agende agora!";
}

function MostrarTextoCilios() {
  const texto = ArmazenarCilios();
  const elementoTexto = document.getElementById("TxtCilios");
  const seta = document.getElementById("seta-cilios");

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
