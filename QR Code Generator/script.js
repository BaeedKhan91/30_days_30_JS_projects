
let genBtn = document.getElementById("gen-btn");


genBtn.addEventListener("click",()=>{
    let input = document.getElementById("input").value;
    let img = document.getElementById("img");
    console.log("click sahi hai ");
    console.log(input);
    
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input;
})