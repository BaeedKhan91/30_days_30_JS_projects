const addBtn = document.getElementById("add-btn");
let inputSec = document.getElementById("inputs");

addBtn.addEventListener("click", () => {
  inputSec.innerHTML += `<p contenteditable="true" class="input-box">

                <img src="./images/delete.png" id="d-b" alt="" >
            </p> `;
 
        });
        
        inputSec.addEventListener("click",(e)=>{
            if (e.target.id == "d-b") {
                
                e.target.parentElement.remove()
            }
            
        })
// console.log(inputSec.innerHTML);

saveData();
function saveData() {
  localStorage.setItem("Notes", inputSec.innerHTML);
}

function getData() {
  inputSec.innerHTML = localStorage.getItem("Notes");
}

getData();
