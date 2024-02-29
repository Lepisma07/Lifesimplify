function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Formato de 2 dígitos para horas, minutos y segundos
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Formatear la hora en un formato de 24 horas hh:mm:ss
  var timeString = hours + ':' + minutes + ':' + seconds;

  // Actualizar el contenido del div con el ID 'liveClock'
  document.getElementById('liveClock').textContent = timeString;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Inicializar el reloj inmediatamente
updateClock();

// Guardar la ubicación en cookies
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

// Ubicacion
function showLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Guardar en cookies
  setCookie('latitude', latitude, 7); // Guarda por 7 días
  setCookie('longitude', longitude, 7); // Guarda por 7 días

  // Mostrar latitud y longitud
  document.getElementById('userLocation').textContent = 'Tu ubicación: ' + latitude.toFixed(2) + ', ' + longitude.toFixed(2);
}

// Esta función maneja los errores que pueden ocurrir al intentar obtener la geolocalización.
function showError(error) {
  // Manegar errores aquí
}

// Esta función intenta obtener la ubicación geográfica del usuario.
function getLocation() {
  // Verifica si el navegador soporta geolocalización.
  if (navigator.geolocation) {
    var latitude = getCookie('latitude');
    var longitude = getCookie('longitude');
    
    // Si ya tenemos las cookies con la ubicación, mostrarlas directamente
    if (latitude && longitude) {
        document.getElementById('userLocation').textContent = 'Tu ubicación: ' + parseFloat(latitude).toFixed(2) + ', ' + parseFloat(longitude).toFixed(2);
    } else {
        // Si no, intenta obtener la geolocalización
        navigator.geolocation.getCurrentPosition(showLocation, showError);
    }
  } else { 
    // Si el navegador no soporta geolocalización, muestra este mensaje.
    document.getElementById('userLocation').textContent = "Geolocalización no es soportada por este navegador.";
  }
}

// Llama a la función 'getLocation' para iniciar el proceso de obtención de la ubicación.
getLocation();
