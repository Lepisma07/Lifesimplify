// Escucha el evento 'DOMContentLoaded' para asegurarse de que el DOM esté completamente cargado antes de ejecutar cualquier script.
document.addEventListener('DOMContentLoaded', function() {
  loadPreferences(); // Llama a la función 'loadPreferences' para cargar las preferencias del usuario si existen.
});

// Añade un 'event listener' para el evento 'submit' en el formulario de preferencias.
document.getElementById('preferencesForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que el formulario se envíe de la manera convencional, permitiendo que el proceso se maneje mediante JavaScript.
  const userName = document.getElementById('userName').value; // Obtiene el valor del campo de nombre de usuario del formulario.
  const bgColor = document.getElementById('bgColor').value; // Obtiene el valor del campo de color de fondo del formulario.
  const textColor = document.getElementById('textColor').value; // Obtiene el valor del campo de color de texto del formulario.
  savePreferences(userName, bgColor, textColor); // Llama a la función 'savePreferences' con los valores obtenidos para guardarlos en el almacenamiento local.
  applyPreferences(userName, bgColor, textColor); // Llama a la función 'applyPreferences' con los valores obtenidos para aplicar los estilos y saludos correspondientes.
});

// Función para limpiar las preferencias almacenadas en el almacenamiento local y recargar la página.
function clearPreferences() {
  localStorage.clear(); // Limpia todo el almacenamiento local.
  window.location.reload(); // Recarga la página para restablecer a su estado inicial.
}

// Función para guardar las preferencias del usuario en el almacenamiento local.
function savePreferences(userName, bgColor, textColor) {
  localStorage.setItem('userName', userName); // Guarda el nombre de usuario en el almacenamiento local.
  localStorage.setItem('bgColor', bgColor); // Guarda el color de fondo en el almacenamiento local.
  localStorage.setItem('textColor', textColor); // Guarda el color de texto en el almacenamiento local.
}

// Función para cargar las preferencias del usuario desde el almacenamiento local.
function loadPreferences() {
  const userName = localStorage.getItem('userName'); // Obtiene el nombre de usuario del almacenamiento local.
  const bgColor = localStorage.getItem('bgColor'); // Obtiene el color de fondo del almacenamiento local.
  const textColor = localStorage.getItem('textColor'); // Obtiene el color de texto del almacenamiento local.

  // Verifica si existen todas las preferencias necesarias.
  if (userName && bgColor && textColor) {
    applyPreferences(userName, bgColor, textColor); // Si existen, aplica las preferencias.
  } else {
    // Si alguna preferencia no existe, muestra la sección de preferencias para que el usuario pueda introducirlas.
    document.getElementById('preferencesSection').style.display = 'block';
  }
}

// Función para aplicar las preferencias del usuario al estilo de la página y mostrar el saludo.
function applyPreferences(userName, bgColor, textColor) {
  document.body.style.backgroundColor = bgColor; // Aplica el color de fondo al cuerpo de la página.
  document.body.style.color = textColor; // Aplica el color de texto al cuerpo de la página.
  document.getElementById('greeting').textContent = `¡Hola, ${userName}!`; // Establece el saludo con el nombre del usuario.
  document.getElementById('greetingSection').style.display = 'block'; // Muestra la sección de saludo.
  document.getElementById('preferencesSection').style.display = 'none'; // Oculta la sección de preferencias.
}
