let toastEle = document.getElementById("toastcont");
function showToast (msg){
    let toastDiv = document.createElement("div");
    if (msg.includes("successfully")) {
        toastDiv.innerHTML =`<i class='fa-solid fa-circle-check'></i>` + msg
        toastDiv.classList.add("success")
    }
    if (msg.includes("Error")) {
        toastDiv.innerHTML =`<i class="fa-solid fa-circle-xmark"></i>` + msg
        toastDiv.classList.add("error")
        
    }
    if (msg.includes("Invalid")) {
        toastDiv.innerHTML =`<i class="fa-solid fa-circle-exclamation"></i>` + msg
        toastDiv.classList.add("invalid")
        
    }
    // toastDiv.innerHTML = msg;
    toastDiv.classList.add("toast");
    toastEle.appendChild(toastDiv)
    setTimeout(()=>{
        toastDiv.remove()
    },5000)
}