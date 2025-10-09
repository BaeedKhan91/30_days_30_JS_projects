const currencies = [
  "PKR",
  "USD",
  "EUR",
  "GBP",
  "INR",
  "CNY",
  "JPY",
  "AUD",
  "CAD",
  "SAR",
  "AED",
  "TRY",
  "RUB",
  "CHF",
  "NZD",
  "BDT",
  "AFN",
  "IDR",
  "THB",
  "ZAR",
  "KRW",
  "SGD",
  "MYR",
  "NGN",
  "EGP",
  "BRL",
  "MXN",
  "ILS",
  "SEK",
  "NOK",
];

const apiKey = "API_KEY";
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const input = document.getElementById("input");
const fromExchangeRateElem = document.querySelector("#from-exchange-rate");
const toExchangeRateElem = document.querySelector("#to-exchange-rate");
const convertBtn = document.querySelector(".con-btn");
const result = document.querySelector(".result");

function converter() {
  const amount = input.value;
  const fromExchangeRate = fromExchangeRateElem.value;
  const toExchangeRate = toExchangeRateElem.value;

  if (amount.length != 0) {
    fetch(url).then((res) =>
      res
        .json()
        .then((data) => {
          console.log(data);
          let fromExchange = data.conversion_rates[fromExchangeRate];
          let toExchange = data.conversion_rates[toExchangeRate];

          const convertedAmount = (amount / fromExchange) * toExchange;

          result.innerHTML = `
            ${amount} ${fromExchangeRate} = ${convertedAmount.toFixed(
            2
          )} ${toExchangeRate}
            `;
        })
        .catch((err) => {
          console.log(err);
        })
    );
  } else {
    Toastify({
      text: "⚠️ Please enter Amount!",
      duration: 1500,
      gravity: "top", 
      position: "center", 
      style: {
        background: "linear-gradient(to right, #ff0000ff, #d60000ff)", // 🔥 Dark red gradient
        color: "#000000ff",
        borderRadius: "8px",
        fontWeight: "600",
      },
    }).showToast();
    input.classList.add("shake");

    setTimeout(() => {
      input.classList.remove("shake");
    }, 1000);
  }
}

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.textContent = currency;
  fromExchangeRateElem.add(option);
});
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.textContent = currency;
  toExchangeRateElem.add(option);
});

convertBtn.addEventListener("click", converter);
