let quoteElement = document.getElementById("quote");
let authorElement = document.getElementById("author");
let newBtn = document.getElementById("new-btn");
let copyBtn = document.getElementById("copy-btn");

const API_URL = "https://dummyjson.com/quotes/random"


newBtn.addEventListener("click", async(url)=>{
    const response = await fetch(API_URL)
    const data = await response.json()
    // console.log(data);
    
    quoteElement.innerHTML = data.quote;
    authorElement.innerHTML = data.author

    copyBtn.addEventListener("click",()=>{
        navigator.clipboard.writeText(quoteElement.innerText).then(()=>{
            copyBtn.innerHTML = `<i class="fa-solid fa-check"></i>  Copied `
        }).catch((err)=>{
            console.log(err);
            
        })
    })
    copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i>   Copy `
})

// console.log(quoteElement);
