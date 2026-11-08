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