document.getElementById('btnOrdenar').addEventListener('click', function () {
    const nums = document.getElementById('nums').value.trim();
    const labelmayor = document.getElementById('max');
    const labelmenor = document.getElementById('min');
    const labelpromedio = document.getElementById('promedio');

    const maximo = Math.max(...numsArray);
    const minimo = Math.min(...numsArray);
    const suma = numsArray.reduce((acc, valor) => acc + valor, 0);
    const promedio = suma / numsArray.length;

    labelmayor.value = maximo;
    labelmenor.value = minimo;
    labelpromedio.value = promedio.toFixed(2);
});
