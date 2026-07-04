document.getElementById('btnConvertir').addEventListener('click', function () {
    const pesosInput = document.getElementById('pesos');
    const dolaresInput = document.getElementById('dolares');
    const valor = pesosInput.value.trim();

    if (valor === '') {
        alert('Ingresa un valor en pesos.');
        return;
    }

    if (isNaN(valor)) {
        alert('El valor ingresado no es un número.');
        return;
    }

    const pesos = parseFloat(valor);
    const dolares = pesos / 18.18;
    dolaresInput.value = dolares.toFixed(2) + ' dólares';
});
