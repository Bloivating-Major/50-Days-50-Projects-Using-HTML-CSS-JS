const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
  if (search.classList.contains("active")) {
    input.focus(); // Focus the input to show the keyboard
  } else {
    input.blur(); // Remove focus to hide the keyboard
  }
});
