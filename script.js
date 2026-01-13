
    onclick.addEventListener('click', Saludar);

function Saludar() {
    const nombre = document.getElementById("name").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const resultado = document.getElementById("resultado");

    let mensaje = "Hola " + nombre + "! Brindemos con ";

    if (edad < 18) {
        for (let i = 0; i < edad; i++) {
            mensaje += "🥛";
        }
    } else {
        for (let i = 0; i < edad; i++) {
            mensaje += "🍺";
        }
    }

    resultado.textContent = mensaje;
}
