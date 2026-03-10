
function saludar() {
    alert("Me alegra que estés aquí. Este blog es un rincón creado para compartir ideas, historias y conocimientos que inspiran, informan y conectan. Aquí encontrarás contenido pensado para acompañarte, despertar tu curiosidad y motivarte a explorar nuevos puntos de vista.");
}

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor completa todos los campos");
        return false;
    }

    alert("Formulario enviado correctamente");
    return true;
}
