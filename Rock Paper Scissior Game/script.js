let container = document.querySelector(".container");
let userResult = document.querySelector(".user-result img");
let cpuResult = document.querySelector(".cpu-result img");
let optionImg = document.querySelectorAll(".option-img");
let playText = document.getElementById("play");
let userScoreElem = document.querySelector(".user-score");
let cpuScoreElem = document.querySelector(".cpu-score");
let resetBtn = document.querySelector(".res-btn");


let userScore = 0;
let cpuScore = 0;



optionImg.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    optionImg.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    container.classList.add("start")

    playText.textContent = "Wait..."

    let time = setTimeout(() => {
        image.classList.remove("active")
        container.classList.remove("start")
     let imgSrc = e.target.querySelector("img").src;
    console.log(imgSrc);

    userResult.src = imgSrc;


    let randomNumber = Math.floor(Math.random()*3)
    console.log(randomNumber);
    
    let cpuImgSrc = [`./images/paper.png`, `./images/rock.png` ,`./images/scissors.png` ];
    
    cpuResult.src = cpuImgSrc[randomNumber]
    
    let cpuValue = [`P`,`R`,`S`][randomNumber]

    let userValue =  [`P`,`R`,`S`][index]

    console.log(cpuValue + userValue);

    let outcome = {
        PP:"Draw",
        PR : "CPU Won",
        PS : "User Won",
        RP : "User Won",
        RR : "Draw",
        RS : "CPU Won",
        SP : "CPU Won",
        SR : "User Won",
        SS : "Draw"
    }

    let outComeValue = outcome[cpuValue + userValue];
    console.log(outComeValue);
    
    if (outComeValue === "User Won") {
        userScore++
        userScoreElem.textContent = `User Score : ${userScore}`
    }else if (outComeValue === "CPU Won") {
        cpuScore++;
        cpuScoreElem.textContent = `CPU Score : ${cpuScore}`
    }
    playText.textContent = outComeValue
   }, 2000);
   
   
   
  });
});

resetBtn.addEventListener("click",()=>{
    console.log("working");
    
    userScore = 0;
    userScoreElem.textContent = `User Score : ${userScore}`
    cpuScore = 0
    cpuScoreElem.textContent = `CPU Score : ${cpuScore}`
    playText.textContent = "Let's Play"

    userResult.src = './images/rock.png'
    cpuResult.src = './images/rock.png'
})

console.log(optionImg);
