let displayTime = document.getElementById("displayTime");
let [hours, minutes, seconds, millisecond] = [0, 0, 0, 0];
let timer = null;

getData()

function watch() {
  millisecond += 10;
  if (millisecond == 1000) {
    millisecond = 0;
    seconds++;
  } 
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  let h = hours.toString().padStart(2,"0")
  let m = minutes.toString().padStart(2,"0")
  let s = seconds.toString().padStart(2,"0")
  let ms = millisecond.toString().padStart(3,"0")
  displayTime.innerHTML = `${h}:${m}:${s}:${ms}`;
 
}

function startWatch() {
  if (timer !== null) {
    clearInterval(timer);
  
  }
  timer = setInterval(watch, 10);
}

function resetWatch() {
  clearInterval(timer);
  displayTime.innerHTML = "00:00:00:000";
  [hours, minutes, seconds, millisecond] = [0, 0, 0, 0];
  saveData()
}
function stopWatch() {
  clearInterval(timer);
//   timer = null
saveData()
}

function saveData (){
    localStorage.setItem("timer",displayTime.innerHTML)
}
function getData (){
   displayTime.innerHTML = localStorage.getItem("timer")
}

