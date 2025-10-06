const genBtn = document.getElementById("gen-btn");
const jokeContainer = document.getElementById("joke-cont");

genBtn.addEventListener("click", getJoke)

function getJoke  (){
        jokeContainer.classList.remove("fade");
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist").then((res)=>{
        // console.log(res);
        return res.json()
        
    }).then((data)=>{
         let joke = "";
         if (data.type === "single") {
             joke = data.joke;
            } else {
                joke = `${data.setup} 🤔\n\n${data.delivery}`;
            }
            jokeContainer.innerHTML = joke
            jokeContainer.classList.add("fade");
            
            

        
    }).catch((err) => {
        jokeContainer.innerHTML = "Can't load the Meme"
        console.log(err)}  
    )
}

getJoke()