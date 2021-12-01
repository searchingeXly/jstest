const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 11, 31, 23, 59, 59, 0);
// futureDate = new Date(2021, 10, 20, 8, 0, 0, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
let hours = futureDate.getHours();
let ampm = "am";
if (hours >= 12) {
  ampm = "pm";
  if (hours > 12) {
    hours -= 12;
  }
}
const mins = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
let weekday = futureDate.getDay();
weekday = weekdays[weekday];
let date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday}, ${month} ${date} ${year} ${hours}:${mins}${ampm}`;

// future time in ms
const futureTime = futureDate.getTime();

function format(item) {
  if (item < 10) {
    return (item = `0${item}`);
  }
  return item;
}
function getremainingTime() {
  const currentTime = new Date().getTime();
  let t = futureTime - currentTime;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;

  let days = Math.floor(t / oneDay);
  t = t % oneDay;
  let hours = Math.floor(t / oneHour);
  t = t % oneHour;
  let mins = Math.floor(t / oneMin);
  t = t % oneMin;
  let secs = Math.floor(t / oneSec);
  let msecs = t % oneSec;

  // set values array
  const values = [days, hours, mins, secs];
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}
// countdown
let countdown = setInterval(getremainingTime, 1000);
getremainingTime();
