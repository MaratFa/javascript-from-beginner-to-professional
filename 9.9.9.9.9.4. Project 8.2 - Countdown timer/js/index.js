const endDate = new Date("2044-05-14T17:59:00.444+03:00");

const days = document.getElementById("remainingDays");
const hours = document.getElementById("remainingHours");
const minutes = document.getElementById("remainingMinutes");
const seconds = document.getElementById("remainingSeconds");
const milliseconds = document.getElementById("remainingMilliseconds");

function countDown(endDate) {
  let remainingMilliseconds = Date.parse(endDate) - Date.parse(new Date());
  let remainingDays = Math.floor(remainingMilliseconds / 86400000);
  let remainingHours = Math.floor((remainingMilliseconds % 86400000) / 3600000);
  let remainingMinutes = Math.floor(
    ((remainingMilliseconds % 86400000) % 3600000) / 60000
  );
  let remainingSeconds = Math.floor(
    (((remainingMilliseconds % 86400000) % 3600000) % 60000) / 1000
  );

  return {
    "Remaining days": remainingDays,
    "Remaining hours": remainingHours,
    "Remaining minutes": remainingMinutes,
    "Remaining seconds": remainingSeconds,
    "Remaining milliseconds": remainingMilliseconds,
  };
}

function update() {
  let temp = countDown(endDate);

  console.log(temp);

  days.innerHTML = `Remaining days: ${temp["Remaining days"]}`;
  hours.innerHTML = `Remaining hours: ${temp["Remaining hours"]}`;
  minutes.innerHTML = `Remaining minutes: ${temp["Remaining minutes"]}`;
  seconds.innerHTML = `Remaining seconds: ${temp["Remaining seconds"]}`;
  milliseconds.innerHTML = `Remaining milliseconds: ${temp["Remaining milliseconds"]}`;

  if (temp["Remaining milliseconds"] <= 0) {
    clearInterval(id);
    days.innerHTML = `Remaining days: ${0}`;
    hours.innerHTML = `Remaining hours: ${0}`;
    minutes.innerHTML = `Remaining minutes: ${0}`;
    seconds.innerHTML = `Remaining seconds: ${0}`;
    milliseconds.innerHTML = `Remaining milliseconds: ${0}`;
  }
}

const id = setInterval(update, 1000);
