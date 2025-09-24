const addBtn = document.getElementById("add-btn");
let inputSec = document.getElementById("inputs");


getData();

function saveData() {
  localStorage.setItem("Notes", inputSec.innerHTML);
}

function getData() {
  inputSec.innerHTML = localStorage.getItem("Notes") || "";
}

addBtn.addEventListener("click", () => {
  inputSec.innerHTML += ` <p contenteditable="true" class="input-box">
      <img src="./images/delete.png" class="delete-btn" alt="">
    </p>`;
  saveData();
});

inputSec.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    saveData();
  }
});

inputSec.addEventListener("keyup", (e) => {
  if (e.target.classList.contains("input-box")) {
    saveData();
  }
});

