const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const container = document.querySelector(".result");
const form = document.querySelector(".form");
const input = document.getElementById("input");
const sound = document.getElementById("sound");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);

  let fetchUrl = url + input.value;

  fetch(fetchUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      container.classList.add("active");
      container.innerHTML = `  <div class="meaning-por">
          <div class="meaning-verb">
            <h2>${input.value}</h2>
            <p>${data[0].meanings[0].partOfSpeech} ${
        data[0].phonetic ||
        data[0].phonetics[0].text ||
        data[0].phonetics[1].text
      } </p>
          </div>
          <div class="speak">
            <i class="fa-solid fa-volume-high" onclick="playSound()" ></i>
          </div>
        </div>
        <div class="detail-mean">
          <p>${data[0].meanings[0].definitions[0].definition}</p>
        </div>
      
        ${
          data[0].meanings[0].definitions[0].example ||
          data[0].meanings[1].definitions[0].example ||
          data[0].meanings[2].definitions[0].example
            ? `
            <div class="sentence">
              <div class="line"></div>
              <p>${
                data[0].meanings[0].definitions[0].example ||
                data[0].meanings[1].definitions[0].example ||
                data[0].meanings[2].definitions[0].example
              }</p>
            </div>
          `
            : ""
        }
       
        `;

      sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
      console.log(sound);
    })
    .catch((err) => {
      container.innerHTML = `<p class="err">Cant Find your Word</p>`;
    });
});

function playSound() {
  sound.play();
}
