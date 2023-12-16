const containerEl = document.querySelector(".container");

setInterval(() => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red}, ${green}, ${blue})`;

  let width = Math.floor(Math.random() * 300) + 100;

  containerEl.style.width = `${width}px`;
  containerEl.style.height = `${width}px`;

  containerEl.style.backgroundColor = color;
}, 1000);
