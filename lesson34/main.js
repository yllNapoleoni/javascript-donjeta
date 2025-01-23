// Get the circle, timer, and points display elements
const circle = document.getElementById('circle');
const timerDisplay = document.getElementById('timer');
const pointsDisplay = document.getElementById('points');

// Store the last click time and initial score
let lastClickTime = null;
let points = 0;

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to move the circle to a random position within the viewport
function getRandomPosition() {
  const maxX = window.innerWidth - circle.offsetWidth;
  const maxY = window.innerHeight - circle.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  return { x: randomX, y: randomY };
}

// Add an event listener to handle clicks on the circle
circle.addEventListener('click', () => {
  // Change the color of the circle
  circle.style.backgroundColor = getRandomColor();

  // Get a new random position and move the circle
  const { x, y } = getRandomPosition();
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  // If it's not the first click, calculate the time difference
  if (lastClickTime !== null) {
    const currentTime = new Date().getTime();
    const timeDifference = (currentTime - lastClickTime) / 1000; // Convert to seconds
    timerDisplay.textContent = `Time between clicks: ${timeDifference.toFixed(2)} seconds`;

    // Calculate points: faster clicks = more points
    // We reward faster clicks (lower time difference) with more points
    if (timeDifference < 1) {
      points += 1; // Award 10 points for fast clicks (less than 1 second)
    } else if (timeDifference < 2) {
      points += 5; // Award 5 points for moderate clicks (less than 2 seconds)
    } else {
      points += 1; // Award 1 point for slower clicks
    }
  }

  // Update the points display
  pointsDisplay.textContent = `Points: ${points}`;

  // Update the last click time
  lastClickTime = new Date().getTime();
});
