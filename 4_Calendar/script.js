const container = document.querySelector(".container");
const title = document.querySelector(".title");
const header = document.querySelector(".header");
const content = document.querySelector(".content");
const selected = document.querySelector(".selected");

let date = new Date();

let month = date.toLocaleString("en-US", { month: "long" });
let year = date.getFullYear();

title.innerText = `${month} - ${year}`;

function generateDates(currentDate) {
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let firstDateInMonth = new Date(year, month, 1);
  let lastDateInMonth = new Date(year, month + 1, 0);
  let allDates = [];

  for (
    let dateNow = firstDateInMonth;
    dateNow <= lastDateInMonth;
    dateNow.setDate(dateNow.getDate() + 1)
  ) {
    allDates.push(new Date(dateNow));
  }

  return allDates;
}

let allDates = generateDates(date);

allDates.forEach((singleDate) => {
  let oneDate = document.createElement("div");
  oneDate.classList.add("dateItem");
  oneDate.innerText = singleDate.getDate();
  content.appendChild(oneDate);
});

allDates.slice(0, 7).forEach((singleDate) => {
  let oneHeader = document.createElement("div");
  oneHeader.classList.add("dateHeader");
  oneHeader.innerText = singleDate.toLocaleString("en-US", {
    weekday: "short",
  });
  header.appendChild(oneHeader);
});

const dateItems = document.querySelectorAll(".dateItem");

//Adding event listeners for all date items
dateItems.forEach((dateItem) => {
  dateItem.addEventListener("click", (e) => {
    let dateSelected = e.target.innerText;
    let selectedDate = new Date();
    selectedDate.setDate(Number(dateSelected));

    let date = selectedDate.getDate();
    let month = selectedDate.toLocaleString("en-US", { month: "long" });
    let year = selectedDate.getFullYear();
    selected.classList.add("selected");
    selected.innerText = `${date}, ${month} - ${year}`;
  });
});
