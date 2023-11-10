// función para actualizar la hora y fecha
function actualizarHora() {
    const reloj = document.getElementById('reloj');
    const fecha = document.getElementById('fecha'); 
    const horaActual = new Date();
    
    const horas = horaActual.getHours().toString().padStart(2, '0'); 
    const minutos = horaActual.getMinutes().toString().padStart(2, '0'); 
    const segundos = horaActual.getSeconds().toString().padStart(2, '0'); 
    const fechaString = obtenerFechaString(horaActual); 

    reloj.textContent = `${horas}:${minutos}:${segundos}`; 
    fecha.textContent = fechaString; 
}

// función para obtener la fecha en formato deseado
function obtenerFechaString(fecha) {
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opcionesFecha);
}

// llamamos a la función actualizar hora.
actualizarHora();

// hacemos que se actualice en tiempo real. 
setInterval(actualizarHora, 1000);