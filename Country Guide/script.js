const form = document.querySelector(".form");
const input = document.getElementById("input");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = `https://restcountries.com/v3.1/name/${input.value}?fullText=true`;
  if (input.value === "" || input.value == false) {
    input.classList.add("shake");
    result.innerHTML = ` <p class="err">Please Enter Country Name</p>`
    setTimeout(() => {
      input.classList.remove("shake");
    }, 1100);
    return
  }
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let currKey = Object.keys(data[0].currencies)[0];
      let languagesKey = Object.keys(data[0].languages)[0];
      result.innerHTML = ` 
                 <div class="poster-por">
                <img src="${data[0].flags.png}" alt="${data[0].flags.alt}">
                <h2>${input.value}</h2>
            </div>
            <div class="country-detail">
                <p>Capital: <span>${data[0].capital[0]}</span></p>
                <p>Continent: <span>${data[0].continents[0]}</span></p>
                <p>Population: <span>${data[0].population}</span></p>

                <p>Currency: <span>${data[0].currencies[currKey].symbol} - ${data[0].currencies[currKey].name}</span></p>
                <p>Common Languages: <span>${data[0].languages[languagesKey]}</span></p>
            </div>`;
    })
    .catch((err) => {
      result.innerHTML = ` <p class="err">Can't Find This Country</p>`;
    });
});
