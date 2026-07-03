document.getElementById('btnConvertir').addEventListener('click', function () {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const valor = celsiusInput.value.trim();

    if (valor === '') {
        alert('Ingresa un valor en grados Celsius.');
        return;
    }

    if (isNaN(valor)) {
        alert('El valor ingresado no es un número.');
        return;
    }

    const celsius = parseFloat(valor);
    const fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2) + ' °F';
});
