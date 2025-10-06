const baseURL = "Base URL";
const apiKey = "API Key Here";

const userInput = document.getElementById("title-input");
const form = document.querySelector(".form");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const movieName = userInput.value.trim();
  if (movieName.length <= 0) {
    result.innerHTML = `<p class="error"> Please Enter Movie Name</p>`;
    return;
  }

  const url = `${baseURL}?t=${movieName}&apikey=${apiKey}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let genreArr = data.Genre.split(", ");
      result.innerHTML = `<div class="poster-por">
                <img src="${data.Poster}" alt="Image Poster">
                <div class="name-por">

                    <h2>${data.Title}</h2>
                    <div class="rating"><i class="fa-solid fa-star" style="color: #f2ac1f;"></i> <p>${data.imdbRating}</p></div>
                    <div class="movie-type">
                        <button>${genreArr[0]}</button>
                        <button>${genreArr[1]}</button>
                        <button>${genreArr[2]}</button>
                    </div>
                </div>
        </div>
        <div class="plot">
            <h2>Plot : </h2> 
            <p>${data.Plot}</p>
            
        </div>
        <div class="cast">
            <h2>Cast:</h2>
            <p>${data.Actors}</p>`;

    })
    .catch((err) => {
      console.log("Fetch error:", err);
      result.innerHTML = `<p class="error">Movie Not Found</p>`;
    });
});
