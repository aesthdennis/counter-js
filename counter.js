// Input Current Count at/from HTML
var countEl = document.getElementById("count");

// Increment of count
function increment() {
  countEl.innerText++;
  updateCount(1);
}

// Decrement of count
function decrement() {
  countEl.innerText--;
  updateCount(-1);
}

// Reset of count
function reset() {
    countEl.innerText = 0;
    count = 0; // Resets the count variable ALSO
    updateCount(0);
    localStorage.setItem('count', '0'); // Update the value in localStorage
    clearInterval(intervalId); // THIS LINE CLEARS THE INTERVAL, PLEASE DO NOT DELETE THANK YOU!!!
    timerCount.innerText = "Timer Count"; // Resets
    intervalId = null; // Resets Interval ID, wow much wow.
}

// Retrieves the current count; if existent
var count = parseInt(localStorage.getItem('count')) || 0;

// Updates the count display with the current count
countEl.textContent = count;

// Updates the count in local storage whenever it changes, whoever's developed the local storage; I hope they have bad dreams !11!!!1!
function updateCount(value) {
  count += value;
  localStorage.setItem('count', count.toString());
}
// Increments by 1 | acts as a timer -- IT WORKS SOMEHOW.
const timerCount = document.getElementById("timerCount");
let intervalId;

timerCount.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      countEl.innerText++;
      updateCount(1);
    }, 1000);
  }
});
