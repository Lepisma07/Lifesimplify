// document.addEventListener("DOMContentLoaded", function () {
//     // Lista de imágenes de fondo
//     const backgrounds = [
//       '/imgs/About-Us-Oficina2.jpeg',
//       '/imgs/About-Us-Oficina3.jpeg',
//     ];
  
//     let currentBgIndex = 0;
  
//     function changeBackground() {
//       // Cambia la imagen de fondo de la sección About Us
//       const aboutUsSection = document.querySelector('.about-us-section');
//       aboutUsSection.style.backgroundImage = `url('${backgrounds[currentBgIndex]}')`;
  
//       // Actualiza el índice para la siguiente imagen
//       currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
//     }
  
//     // Cambia la imagen cada 3 segundos
//     setInterval(changeBackground, 3000);
//   });
  
  
class BackgroundChanger {
  constructor(images, interval) {
      this.images = images; // Array de imágenes
      this.currentImageIndex = 0; // Índice actual de la imagen
      this.interval = interval; // Intervalo para cambiar las imágenes
  }

  // Método para cambiar el fondo
  changeBackground() {
      const aboutUsSection = document.querySelector('.about-us-section');
      aboutUsSection.style.backgroundImage = `url('${this.images[this.currentImageIndex]}')`;
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  // Método para iniciar el cambio de fondo
  startChanging() {
      this.changeBackground(); // Cambia el fondo inmediatamente
      setInterval(() => this.changeBackground(), this.interval);
  }
}

// Uso de la clase con EVENTOS
document.addEventListener("DOMContentLoaded", function () {
  const backgrounds = [
    '/imgs/About-Us-Oficina2.jpeg',
    '/imgs/About-Us-Oficina3.jpeg',
  ];
  const backgroundChanger = new BackgroundChanger(backgrounds, 4000);
  backgroundChanger.startChanging();
});
