const expresiones = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
};

document.addEventListener('DOMContentLoaded', () => {
    // Asumiendo que tu formulario tiene el ID 'contactForm'
    const formulario = document.getElementById('contactForm');
    
    document.getElementById('email').addEventListener('keyup', validarFormulario);
    document.getElementById('password').addEventListener('keyup', validarFormulario);
    
    // Añadir manejador de evento de envío
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío predeterminado del formulario

        // Aquí puedes incluir cualquier lógica adicional que desees ejecutar al enviar el formulario
        // Por ejemplo, mostrar un mensaje de éxito, enviar los datos a un servidor, etc.

        // Vaciar el formulario después de 4 segundos
        setTimeout(function() {
            formulario.reset(); // Esto limpiará todos los campos del formulario
            
            // También podrías querer restablecer el estado visual de validación
            // Por ejemplo, ocultar los íconos de validación y remover las clases de validación
            const inputs = formulario.querySelectorAll('input');
            inputs.forEach(input => {
                const inputType = input.name;
                const iconCheck = document.getElementById('icon-' + inputType + '-check');
                const iconXmark = document.getElementById('icon-' + inputType + '-xmark');
                
                input.classList.remove('valid', 'invalid');
                if (iconCheck) iconCheck.style.visibility = 'hidden';
                if (iconXmark) iconXmark.style.visibility = 'hidden';
            });
        }, 4000);
    });
});

// Define la función validarFormulario, la cual se dispara con un evento específico en un campo de formulario.
function validarFormulario(event) {
    // Obtiene el elemento del formulario que disparó el evento.
    const input = event.target;
    // Obtiene el nombre del input, que se usa para identificar el tipo de dato esperado (por ejemplo, 'email', 'password').
    const inputType = input.name;
    // Obtiene el valor actual del campo de entrada.
    const inputValue = input.value;
    // Busca el ícono de verificación ('check') asociado al tipo de input, basándose en su nombre.
    const iconCheck = document.getElementById('icon-' + inputType + '-check');
    // Busca el ícono de error ('xmark') asociado al tipo de input, basándose en su nombre.
    const iconXmark = document.getElementById('icon-' + inputType + '-xmark');

    // Evalúa si el valor del input cumple con una expresión regular definida para ese tipo de input.
    if (expresiones[inputType].test(inputValue)) {
        // Si el valor es válido, remueve la clase 'invalid' y añade la clase 'valid' al input para cambiar su apariencia visual.
        input.classList.remove('invalid');
        input.classList.add('valid');
        // Hace visible el ícono de verificación y oculta el ícono de error.
        iconCheck.style.visibility = 'visible';
        iconXmark.style.visibility = 'hidden';
    } else {
        // Si el valor no es válido, remueve la clase 'valid' y añade la clase 'invalid' al input para cambiar su apariencia visual.
        input.classList.remove('valid');
        input.classList.add('invalid');
        // Hace visible el ícono de error y oculta el ícono de verificación.
        iconCheck.style.visibility = 'hidden';
        iconXmark.style.visibility = 'visible';
    }
}

