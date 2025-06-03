function ArmazenarPe() {
  return "Cuide de seus pés e mãos com os melhores tratamentos. Deixe-se relaxar e realce sua beleza com os cuidados essenciais para as extremidades!";
}

function MostrarTextoPe() {
  const texto = ArmazenarPe();
  const elementoTexto = document.getElementById("TxtPe");
  const seta = document.getElementById("seta-pe");

  if (elementoTexto.innerHTML === "") {
    elementoTexto.innerHTML = "<p>" + texto + "</p>";
    seta.classList.add("seta-rotacionada");
  } else {
    elementoTexto.innerHTML = "";
    seta.classList.remove("seta-rotacionada");
  }
}
