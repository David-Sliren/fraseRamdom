// import $ from "jquery";
const $ = ($) => document.querySelector($);
const $A = ($) => document.querySelector($A);

const URL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

// let datos = [];
const api = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  return data.quotes;
};

const main = $("#main");
const container = $("#quote-box");
const text = $("#text");
const author = $("#author");
const button = $("#new-quote");
const tweeter = $("#tweet-quote");

async function cambio() {
  const datos = await api();

  const textAndAutorRamdom = Math.floor(Math.random() * datos.length + 1);

  const colorRandom = () => Math.floor(Math.random() * 255 + 1);

  text.textContent = datos[textAndAutorRamdom].quote;
  author.textContent = datos[textAndAutorRamdom].author + " ✔";

  const variacion = `rgb(${colorRandom()}, ${colorRandom()}, ${colorRandom()})`;

  main.style.backgroundColor = variacion;
  const texto = encodeURIComponent(
    '" ' +
      datos[textAndAutorRamdom].quote +
      '"  ' +
      "-" +
      datos[textAndAutorRamdom].author +
      " "
  );

  tweeter.setAttribute(
    "href",
    `https://twitter.com/intent/tweet?hashtags=quote&relase=freeCodeCamp&text=` +
      texto
  );
}
cambio();

setInterval(() => {
  cambio();
}, 8000);

button.onclick = () => {
  cambio();
};
