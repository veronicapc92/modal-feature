const button = document.getElementById("button");
const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");

button.addEventListener("click", openModal);
backdrop.addEventListener("click", closeModal);
closeButton.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("active");
  backdrop.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  backdrop.classList.remove("active");
}
