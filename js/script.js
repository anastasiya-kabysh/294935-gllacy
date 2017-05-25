var button = document.querySelector(".adress-btn");
var feedback = document.querySelector(".feedback-modal-form");
var close = feedback.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");
var form = feedback.querySelector(".form-feedback");
var login = feedback.querySelector("[name=name]");
var password = feedback.querySelector("[name-contact]");
var storage = localStorage.getItem("login");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("клик по ссылке");
  feedback.classList.add("feedback-show");
  overlay.classList.add("overlay-show");
});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback.classList.remove("feedback-show");
  overlay.classList.remove("overlay-show");
})
form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    console.log("отправляем форму");
  } else {
    localStorage.setItem("login", login.value)
  }
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus()
  };
})
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (feedback.classList.contains("feedback-show")) {
      feedback.classList.remove("feedback-show");
      overlay.classlist.remove("overlay-show");
    };
  }
})
