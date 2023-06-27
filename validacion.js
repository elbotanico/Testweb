// Crear los selectores
const formulario = document.querySelector('form');
const inputNombre = document.getElementById('nombre');
const inputFechaInicio = document.getElementById('fechainicio');
const inputFechaFin = document.getElementById('fechafin');
const inputHabitacion = document.getElementById('habitacion');

const modal = document.getElementById('reservaModal');
const myModal = new bootstrap.Modal(modal);
const nombreModal = document.getElementById('nombreModal');
const precioModal = document.getElementById('precioTotal');

// Capitalizar la primera letra de un string
function capitalize(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    let nombre = capitalize(inputNombre.value);
    let fechainicio = new Date(inputFechaInicio.value);
    let fechafin = new Date(inputFechaFin.value);
    let habitacion = inputHabitacion.value;

    if (!nombre || !fechainicio || !fechafin || !habitacion) {
        alert('Por favor, rellene todos los campos');
        return;
    }

    if (nombre[0] === ' ') {
        alert('La primera letra del nombre no puede ser un espacio');
        return;
    }

    if (fechainicio > fechafin) {
        alert('La fecha de inicio no puede ser posterior a la fecha de fin');
        return;
    }

    const preciosHabitaciones = {
        simple: 30000,
        doble: 60000,
        triple: 90000,
        deluxe: 120000
    };

    let diasHospedaje = (fechafin - fechainicio) / (1000 * 60 * 60 * 24);
    let precioTotal = preciosHabitaciones[habitacion] * diasHospedaje;

    // Calcula los días utilizados
    let fechaInicio = new Date(fechainicio);
    let fechaFin = new Date(fechafin);
    let diffTiempo = fechaFin.getTime() - fechaInicio.getTime();
    let diasUtilizados = Math.ceil(diffTiempo / (1000 * 60 * 60 * 24));

    console.log(`El precio total es: ${precioTotal}`);

    // Actualiza los elementos de la modal con los datos correspondientes
    document.getElementById('nombreModal').textContent = `Nombre: ${nombre}`;
    document.getElementById('precioTotal').textContent = `El precio total de su estadía es ${precioTotal} CLP`;
    document.getElementById('diasUtilizados').textContent = `Días Transcurridos entre fechas elegidas: ${diasUtilizados}`;
    document.getElementById('fechaInicioModal').textContent = `Fecha de Llegada al Hostal: ${fechaInicio.toLocaleDateString()}`;
    document.getElementById('fechaFinModal').textContent = `Fecha de salida del Hostal: ${fechaFin.toLocaleDateString()}`;

    // Muestra la modal
    $('#reservaModal').modal('show');
});

inputNombre.addEventListener('keypress', function (evento) {
    if (evento.key === ' ') {
        alert('No se puede agregar espacios en blanco');
        evento.preventDefault();
    }
});
const bgImage = document.getElementById('bgImage');
const changeBgButton = document.getElementById('changeBgButton');

changeBgButton.addEventListener('click', function () {
    const currentImage = bgImage.getAttribute('src');
    const newImage = currentImage === 'img/bg.png' ? 'img/bg1.png' : 'img/bg.png';
    bgImage.setAttribute('src', newImage);
});
const confirmarReservaButton = document.getElementById('confirmarReserva');

confirmarReservaButton.addEventListener('click', function () {
    const form = document.getElementById('myForm');
    form.submit();
});
window.addEventListener('scroll', function () {
    var button = document.getElementById('topButton');
    if (window.pageYOffset > 100) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });
  