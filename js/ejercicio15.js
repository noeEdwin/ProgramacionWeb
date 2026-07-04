let students = [];

function showError(message) {
    const errorDiv = document.getElementById("errorMsg");
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
}

function clearError() {
    const errorDiv = document.getElementById("errorMsg");
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
}

document.getElementById("btnAdd").addEventListener("click", function() {
    clearError();

    const name = document.getElementById("name").value.trim();
    const gradeInput = document.getElementById("grade").value.trim();
    const grade = parseFloat(gradeInput);

    if (name === "" || gradeInput === "") {
        showError("Por favor, ingrese un nombre y una calificación.");
        return;
    }

    if (isNaN(grade)) {
        showError("Por favor, ingrese una calificación numérica válida.");
        return;
    }
    if (grade < 0 || grade > 100) {
        showError("La calificación debe estar entre 0 y 100.");
        return;
    }

    students.push({ nombre: name, calificacion: grade });

    document.getElementById("name").value = "";
    document.getElementById("grade").value = "";
});

document.getElementById("btnCalcular").addEventListener("click", function() {
    clearError();

    if (students.length === 0) {
        showError("No hay estudiantes registrados. Agregue al menos uno.");
        return;
    }

    let total = 0;
    let maxGrade = students[0].calificacion;
    let minGrade = students[0].calificacion;

    for (let i = 0; i < students.length; i++) {
        total = total + students[i].calificacion;

        if (students[i].calificacion > maxGrade) {
            maxGrade = students[i].calificacion;
        }

        if (students[i].calificacion < minGrade) {
            minGrade = students[i].calificacion;
        }
    }

    let maxNames = [];
    let minNames = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].calificacion === maxGrade) {
            maxNames.push(students[i].nombre);
        }
        if (students[i].calificacion === minGrade) {
            minNames.push(students[i].nombre);
        }
    }

    let promedio = total / students.length;

    document.getElementById("mean").value = promedio.toFixed(2);
    document.getElementById("maxStudent").value = maxNames.join(", ");
    document.getElementById("minStudent").value = minNames.join(", ");
});
