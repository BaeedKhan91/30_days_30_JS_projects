const addBtn = document.querySelector("#add-task");
const ul = document.querySelector(".ul");
const submitForm = document.querySelector("#submit-form")
const searchInput = document.querySelector(".search-form input")

let editindex = null
submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#input");
    const items = ul.children
    if (editindex !== null) {
        const li = items[editindex]
        li.textContent = input.value.trim().toLowerCase();
        const iconDiv = document.createElement("div");
        iconDiv.classList.add("div-icon")
        iconDiv.innerHTML += `<i class="fa-solid fa-pen-to-square edit"></i>`
        iconDiv.innerHTML += `<i class="fa-solid check fa-check checkbox"></i>`;
        iconDiv.innerHTML += `<i class="fa-solid fa-trash delete"></i>`;
        const text = document.createElement("span")

        li.appendChild(text)
        li.appendChild(iconDiv)
        addBtn.innerHTML = "ADD Todo"
        editindex = null
        input.value = ""
        // saveData()2
    } else {

        const input = document.querySelector("#input");
        if (input.value === "") {
            alert("Please Write Some Task");
        } else {
            const li = document.createElement("li");
            const iconDiv = document.createElement("div");
            iconDiv.classList.add("div-icon")
            iconDiv.innerHTML += `<i class="fa-solid fa-pen-to-square edit"></i>`
            iconDiv.innerHTML += `<i class="fa-solid check fa-check checkbox"></i>`;
            iconDiv.innerHTML += `<i class="fa-solid fa-trash delete"></i>`;
            const text = document.createElement("span")
            text.innerHTML = input.value.trim().toLowerCase();

            li.appendChild(text)
            li.appendChild(iconDiv)
            ul.appendChild(li);
            input.value = "";
            // saveData()
        }
    }
});

ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
        // saveData()
    }

    else if (e.target.classList.contains("checkbox")) {
        e.target.parentElement.parentElement.classList.toggle("checked");
        // saveData()
    }
    else if (e.target.classList.contains("edit")) {
        const text = e.target.parentElement.parentElement.textContent;
        const input = document.querySelector("#input")
        input.value = text
        addBtn.innerHTML = " Edit Todo"
        const item = ul.children
        for (let i = 0; i < item.length; i++) {
            if (item[i].textContent === text) {
                editindex = i



            }

        }
        // saveData()
    }
});

searchInput.addEventListener("keyup", () => {
    const items = ul.children
    const text = searchInput.value.trim().toLowerCase();
    for (let i = 0; i < items.length; i++) {
        const item = items[i]
        const isMatch = item.textContent.includes(text)
        if (!isMatch) {
            item.classList.add("filtered")
        } else {
            item.classList.remove("filtered")
        }

    }


})


// function saveData () {
//     localStorage.setItem("listData" , ul.innerHTML)
// }
// function getData (){
//     ul.innerHTML = localStorage.getItem("listData")
// }
// getData()