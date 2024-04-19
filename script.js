const precision = 4;
const cpi = 2.54; // centimeters per inch
const dpi = 96; // dots per inch
const ppd = window.devicePixelRatio; // pixels per dot
const a4Height = 29.7; // height of an a4 in cm
const mainPadding = 5;

function pxToCm(px) {
  return (px * cpi / (dpi * ppd)).toFixed(precision);
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header").getBoundingClientRect();
  const main = document.querySelector("main").getBoundingClientRect();
  const footer = document.querySelector("footer").getBoundingClientRect();
  const coutner = document.querySelector("#counter");
  const availableMainHeight = a4Height - pxToCm(header.height) - pxToCm(footer.height) - 2 * pxToCm(mainPadding);
  const pagesCount = Math.ceil(pxToCm(main.height) / availableMainHeight);

  for (let index = 1; index <= pagesCount; index++) {
    const pageNumberElement = document.createElement("div");
    pageNumberElement.innerHTML = `<span>${index}</span> / <span>${pagesCount}</span>`;
    coutner.append(pageNumberElement);
  }

  // Set title
  const title = document.querySelector("header div");
  const titleElement = document.createElement("span");
  titleElement.innerText = document.title;
  title.append(titleElement);


  // Set time
  const times = document.querySelectorAll("footer time");
  times.forEach((time) => {
    time.innerText = new Date().toLocaleDateString();
  })
});
