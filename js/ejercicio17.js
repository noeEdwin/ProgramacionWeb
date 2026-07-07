const manejarTareas = () => {
    let tareas = [];

    const cargarTareas = () => {
        const datos = localStorage.getItem('tareas');
        tareas = datos ? JSON.parse(datos) : [];
    };

    const guardarTareas = () => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    };

    const agregar = (nombre) => {
        tareas.push({ id: Date.now(), nombre, completada: false });
        guardarTareas();
    };

    const eliminar = (id) => {
        tareas = tareas.filter(t => t.id !== id);
        guardarTareas();
    };

    const obtener = () => tareas;

    cargarTareas();

    return { agregar, eliminar, obtener };
};

const gestor = manejarTareas();

const renderizarTareas = () => {
    const lista = document.getElementById('listaTareas');
    lista.innerHTML = '';

    gestor.obtener().forEach(tarea => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${tarea.nombre}</span>
            <button class="btnEliminar" onclick="confirmarEliminar(${tarea.id})">Eliminar</button>
        `;
        lista.appendChild(li);
    });
};

const confirmarEliminar = (id) => {
    Swal.fire({
        title: '¿Eliminar tarea?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            gestor.eliminar(id);
            renderizarTareas();
            Swal.fire('Eliminada', 'La tarea ha sido eliminada', 'success');
        }
    });
};

document.getElementById('btnAgregar').addEventListener('click', () => {
    const input = document.getElementById('tareaInput');
    const nombre = input.value.trim();

    if (nombre === '') {
        Swal.fire('Campo vacío', 'Ingresa una tarea', 'warning');
        return;
    }

    gestor.agregar(nombre);
    input.value = '';
    renderizarTareas();
});

document.getElementById('tareaInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('btnAgregar').click();
    }
});

renderizarTareas();