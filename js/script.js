// Código botón back to top
window.onscroll = function() {
  try {
      showBackToTopButton();
  } catch (error) {
      console.error("Error al mostrar el botón 'Volver al principio':", error);
  }
};

var showBackToTopButton = () => {
  var button = document.getElementById("backToTopBtn");
  if (!button) {
      throw new Error("El botón 'backToTopBtn' no se encontró en el DOM");
  }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
  } else {
      button.style.display = "none";
  }
}

function scrollToTop() {
  try {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  } catch (error) {
      console.error("Error al desplazarse hacia arriba:", error);
  }
}
// // Alert en formulario
// function showAlert() {
//     alert("El formulario ha sido enviado correctamente");
//     window.location.href = 'index.html'; // Redirige al usuario a index.html
//   }
  