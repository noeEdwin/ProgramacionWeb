document.getElementById('btnConvertir').addEventListener('click', function () {
    const kmInput = document.getElementById('kilometros');
    const millasInput = document.getElementById('millas');
    const valor = kmInput.value.trim();

    if (valor === '') {
        alert('Ingresa un valor en kilómetros.');
        return;
    }

    if (isNaN(valor)) {
        alert('El valor ingresado no es un número.');
        return;
    }

    if (parseFloat(valor) < 0) {
        alert('El valor no puede ser negativo.');
        return;
    }

    const kilometros = parseFloat(valor);
    const millas = kilometros * 0.621371;
    millasInput.value = millas + ' millas';
});
