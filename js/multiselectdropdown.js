function mostrarOcultar() {
    var x = document.getElementById("contenidoSelect");
    var y = document.getElementById("iconSelect");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.classList.add("fa-angle-down");
      y.classList.remove("fa-angle-right");
    } else {
      x.style.display = "none";
      y.classList.add("fa-angle-right");
      y.classList.remove("fa-angle-down");
    }
  }