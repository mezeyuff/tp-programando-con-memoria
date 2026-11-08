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
});
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