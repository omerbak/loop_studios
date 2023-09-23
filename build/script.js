const hambergurButton = document.querySelector("#hambergur-button");
const closeButton = document.querySelector("#close-button");
const mobileMenu = document.querySelector("#mobile-menu");

hambergurButton.addEventListener("click", () => {
  console.log((mobileMenu.dataset.status = "open"));
});
closeButton.addEventListener("click", () => {
  console.log((mobileMenu.dataset.status = "closed"));
});
