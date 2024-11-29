const cards = document.querySelector(".card");
const form = document.querySelector("form");
const successMessage = document.querySelector(".success-main");
const dismissButton = document.querySelector(".dismiss-btn");
const input = document.querySelector("#inpt");
const persMail = document.querySelector(".personal-mail");

function displayMessage() {
  successMessage.style.display = "flex";
  cards.style.display = "none";
}

function dismissMessage() {
  successMessage.style.display = "none";
  cards.style.display = "flex";
}

function highlightInput() {
  input.classList.add("error");
}

function removeHighlightInput() {
  input.classList.remove("error");
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isValidEmail(email) {
  return emailRegex.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = input.value.trim();

  if (inputValue) {
    persMail.textContent = inputValue;
  }

  if (!inputValue || !isValidEmail(inputValue)) {
    highlightInput();
    return;
  }

  confetti({
    particleCount: 400,
    spread: 100,
    origin: { x: 0.5, y: 0.5 },
  });

  removeHighlightInput();
  displayMessage();
});

dismissButton.addEventListener("click", dismissMessage);
