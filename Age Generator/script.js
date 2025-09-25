let input = document.getElementById("input");
let btn = document.getElementById("gen-btn");
let p = document.getElementById("p");

input.max = new Date().toISOString().split("T")[0];

btn.addEventListener("click", () => {
  console.log(input.value);

  let birthDate = new Date(input.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

 

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  

  let d3, m3, y3;

  y3 = y2 -y1
    
  if (m2 > m1) {
    m3 = m2 -m1
  }else{
    y3--;
    m3 = 12 + m2 - m1
  }
console.log(y3 ,m3);

    
});
