let toggleButton = document.querySelector(".toggle-button");

let ulItems = document.querySelector(".ul-items");

let body = document.querySelector(".body");

toggleButton.addEventListener("click", () => {
  ulItems.classList.toggle("active");
});

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
});

toggleButton.addEventListener("click", () => {
  body.classList.toggle("active");
});

document.querySelectorAll(".list-items").forEach((n) =>
  n.addEventListener("click", () => {
    toggleButton.classList.remove("active");
    ulItems.classList.remove("active");
    body.classList.remove("active");
  })
);
