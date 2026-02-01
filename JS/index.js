// Botones primarios
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-primario");
  if (!btn) return;

  btn.classList.toggle("is-selected");
});

// Botones secundarios
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-secundario");
  if (!btn) return;

  btn.classList.toggle("is-selected");
});

// Botones terciarios
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-terciario");
  if (!btn) return;

  btn.classList.toggle("is-selected");
});

// Encabezados
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-toggle');

menuBtn.addEventListener('click', () => {
    header.classList.toggle('is-open');
});

