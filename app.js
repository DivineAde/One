// array of the 7 days in a week
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date();
const dayOfWeek = daysOfWeek[today.getDay()];

// Displaying the day on the frontend
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day of the week: ${dayOfWeek}`;

// Function to update the current UTC time
function updateCurrentUTCTime() {
  const currentDate = new Date();
  const currentUTCTimeMilliseconds = currentDate.getTime(); 
  const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
  currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTimeMilliseconds}`;
}

updateCurrentUTCTime();