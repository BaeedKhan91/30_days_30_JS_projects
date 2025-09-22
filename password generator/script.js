const passwordBox = document.getElementById("Password");
const length = 12;


const capAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
const numbers   = "0123456789";
const specials  = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";

    let combine = capAlphabets + smallAlphabets + numbers + specials

document.getElementById("generate-btn").addEventListener("click",()=>{
    let password ="";

    password+= capAlphabets[Math.floor(Math.random()*capAlphabets.length)] 
    password+= smallAlphabets[Math.floor(Math.random()*smallAlphabets.length)] 
    password+= numbers[Math.floor(Math.random()*numbers.length)] 
    password+= specials[Math.floor(Math.random()*specials.length)] 

    for(let i = password.length ; i < length ;i++){
        password += combine[Math.floor(Math.random()*combine.length)]
    }
    console.log(password);
    
    passwordBox.value = password;
    
})

document.getElementById("copy").addEventListener("click",()=>{
navigator.clipboard.writeText(passwordBox.value)
    .then(() => {
          // Show toast
          Toastify({
            text: "✅ Password copied!",
            duration: 3000,
            gravity: "top", 
            position: "right", 
            backgroundColor: "#019552",
            close: true,
          }).showToast();
        })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
})