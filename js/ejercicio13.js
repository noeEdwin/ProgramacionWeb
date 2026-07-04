document.getElementById('btnValidar').addEventListener('click', function () {
    const edad = document.getElementById('edad');
    const resultadoInput = document.getElementById('resultado');
    const valor = edad.value.trim();

    if (valor === '') {
        alert('Ingresa tu edad.');
        return;
    }

    if (isNaN(valor)) {
        alert('La edad ingresada no es un número.');
        return;
    }

    const edadNum = parseInt(valor);
    let mensaje = '';

    if (edadNum < 0) {
        mensaje = 'La edad no puede ser negativa.';
    } else if (edadNum < 18) {
        mensaje = 'No puedes votar';
    } else {
        mensaje = 'Puedes votar';
    }

    resultadoInput.value = mensaje;
});