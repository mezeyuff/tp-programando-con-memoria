const anioGolpe = 1976;
const anios = new Date().getFullYear() - anioGolpe;
document.getElementById("contador").textContent = anios;
const buscador = document.getElementById("buscador");
const testimonios = document.querySelectorAll(".testimonio");

buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();
    testimonios.forEach((tarjeta) => {
        const contenido = tarjeta.textContent.toLowerCase();
        tarjeta.classList.toggle("d-none", !contenido.includes(texto));
    });
});
const formTarjeta = document.getElementById("form-tarjeta");
const resultado = document.getElementById("resultado-tarjeta");
formTarjeta.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById("nombre-tarjeta").value.trim();
    const mensaje = document.getElementById("mensaje-tarjeta").value.trim();
    if (nombre === "" || mensaje === "") {
        resultado.innerHTML = "<p class='text-danger'>Completá tu nombre y tu mensaje.</p>";
        return;
    }
    resultado.innerHTML = `
    <article class="tarjeta">
        <p class="tarjeta-anios">${anios} años</p>
        <h3 class="tarjeta-nombre"></h3>
        <p class="tarjeta-mensaje"></p>
        <p class="tarjeta-lema">Memoria, Verdad y Justicia. Nunca Más.</p>
    </article>`;
    resultado.querySelector(".tarjeta-nombre").textContent = nombre;
    resultado.querySelector(".tarjeta-mensaje").textContent = mensaje;
});
const formAdhesion = document.getElementById("form-adhesion");
const mensajeAdhesion = document.getElementById("mensaje-adhesion");

formAdhesion.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById("nombre-adhesion").value.trim();
    const correo = document.getElementById("correo-adhesion").value.trim();
    const errores = [];
    if (nombre.length < 3) errores.push("El nombre debe tener al menos 3 letras.");
    if (!correo.includes("@") || !correo.includes(".")) errores.push("Ingresá un correo válido.");
    if (!document.getElementById("compromiso-adhesion").checked) errores.push("Tenés que aceptar el compromiso.");
    if (errores.length > 0) {
        mensajeAdhesion.innerHTML = `<div class="alert alert-danger">${errores.join("<br>")}</div>`;
        return;
    }
    mensajeAdhesion.innerHTML = '<div class="alert alert-success" id="exito"></div>';
    document.getElementById("exito").textContent = "¡Gracias por sumarte, " + nombre + "!";
    formAdhesion.reset();
});