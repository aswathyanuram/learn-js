const container = document.querySelector(".container");

/**
 * function to  calculate all dates for a given date month
 * @param {Date} date - The date for which the dates should be calcualated
 */
function generateDates(date) {
  let allDates = [];
  let now = new Date(date);
  let year = now.getFullYear();
  let month = now.getMonth();

  let startDate = new Date(year, month, 1, 0, 0);
  let endDate = new Date(year, month + 1, 0, 0, 0);

  for (let i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
    allDates.push(new Date(i));
  }
  console.log(allDates);
}

let currentMonth = new Date(); // 19th Dec
let nextMonth = new Date(); //19th Dec
nextMonth.setMonth(nextMonth.getMonth() + 1); //19th Jan

generateDates(currentMonth);
generateDates(nextMonth);
