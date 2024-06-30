const Name = document.getElementById("Name");
const Surname = document.getElementById("Surname");
const Age = document.getElementById("Age");
const btn = document.querySelector(".btn");
const inputs = document.querySelector(".inputs");
const card = document.querySelector(".card");
const cardText = document.querySelector(".card-text");
let i = 0;
let element;
let upload;
let nameStorage;
let surnameStorage;
let ageStorage;
let uploaded;
btn.addEventListener(`click`, (event) => {
  i++;
  localStorage.setItem("name", Name.value);
  localStorage.setItem("surname", Surname.value);
  localStorage.setItem("age", Age.value);
  uploaded = nameStorage = localStorage.getItem("name");
  surnameStorage = localStorage.getItem("surname");
  ageStorage = localStorage.getItem("age");
  upload = element = `<div class="card">
  <h1>User${i}</h1>
          <p>Name: <span>${nameStorage}</span></p>
          <p>Surname: <span>${surnameStorage}</span></p>
          <p>Age: <span>${ageStorage}</span></p>
        </div>`;
  inputs.innerHTML += element;
  localStorage.setItem("card", card);
  localStorage.getItem("card");
  let element2 = (cardText.textContent = "dick");
});
