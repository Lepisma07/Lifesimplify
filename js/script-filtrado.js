// Función para manejar el envío del formulario
function submitForm() {
    // Obtiene el valor ingresado en el campo de sugerencias
    var suggestion = document.getElementById('suggestion').value;
    
    // Lista de palabras inapropiadas a filtrar
    // var badWords = ['coño', 'Coño', 'mierda', 'Mierda', 'joder', 'Joder', 'gilipollas', 'Gilipollas', 'hijo de puta','Hijo de puta', 'basura', 'porquería', 'puto', 'puta', 'soplapollas'];
    var badWords = ['Caca', 'caca'];
  
    // Recorre la lista de palabras inapropiadas
    for (var i = 0; i < badWords.length; i++) {
      // Verifica si la sugerencia incluye alguna palabra inapropiada
      if (suggestion.includes(badWords[i])) {
        // Si encuentra una palabra inapropiada, muestra una alerta y detiene la función
        alert('Por favor, evita usar lenguaje inapropiado.');
        return;
      }
    }
  
    // Si no se encuentran palabras inapropiadas, muestra un mensaje de éxito
    alert('El formulario se envió correctamente');
  }
  