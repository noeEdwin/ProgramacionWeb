const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (tipoOperacion, a, b) => {
    if (tipoOperacion == 0) return sumar(a, b);
    if (tipoOperacion == 1) return restar(a, b);
    if (tipoOperacion == 2) return dividir(a, b);
    if (tipoOperacion == 3) return multiplicar(a, b);
};

const validarNumeros = () => {
    const numero1 = document.getElementById("numero1").value.trim();
    const numero2 = document.getElementById("numero2").value.trim();

    if (numero1 === '' || numero2 === '') {
        Swal.fire('Campos vacíos', 'Ingresa ambos números', 'warning');
        return null;
    }

    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire('Datos inválidos', 'Ingresa solo números', 'error');
        return null;
    }

    return [num1, num2];
};

const ejecutarOperacion = (tipoOperacion) => {
    const numeros = validarNumeros();
    if (numeros) {
        const [num1, num2] = numeros;
        document.getElementById("resultado").value = calcularOperacion(tipoOperacion, num1, num2);
    }
};

document.getElementById("btnSuma").addEventListener("click", () => ejecutarOperacion(0));
document.getElementById("btnResta").addEventListener("click", () => ejecutarOperacion(1));
document.getElementById("btnDividir").addEventListener("click", () => ejecutarOperacion(2));
document.getElementById("btnMultiplicar").addEventListener("click", () => ejecutarOperacion(3));
