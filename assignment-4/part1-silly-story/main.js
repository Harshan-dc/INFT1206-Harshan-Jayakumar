/*
Name: Harshan Jayakumar
File: main.js
Date: 28 November 2025
JavaScript for the Silly Story Generator – builds a random story and
optionally swaps name and converts between US / UK units.
INFT1206 – Web Development Fundamentals
*/

// ----------------------------------------------------
// DOM references
// ----------------------------------------------------
const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

// ----------------------------------------------------
// Utility function: pick a random element from an array
// ----------------------------------------------------
function randomValueFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// ----------------------------------------------------
// Raw text data for the story
// ----------------------------------------------------
const characters = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
];

const places = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
];

const events = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and slithered away"
];

// ----------------------------------------------------
// Build and return a fresh random story string
// ----------------------------------------------------
function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  // Base US version of the story: 94 Fahrenheit, 300 pounds, Bob
  const storyText = `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// ----------------------------------------------------
// Event wiring: click button -> generate a new story
// ----------------------------------------------------
generateBtn.addEventListener("click", generateStory);

// ----------------------------------------------------
// Main handler: build, customize, and display the story
// ----------------------------------------------------
function generateStory() {
  // 1. Start from a brand new random base story
  let newStory = returnRandomStoryString();

  // 2. If the user typed a custom name, replace "Bob"
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  // 3. If UK is selected, convert units
  if (document.getElementById("uk").checked) {
    // 300 pounds -> stones (1 stone ≈ 14 pounds)
    const convertedWeight = `${Math.round(300 / 14)} stone`;

    // 94 Fahrenheit -> Celsius (C = (F - 32) * 5 / 9)
    const convertedTemp = `${Math.round((94 - 32) * (5 / 9))} Celsius`;

    newStory = newStory.replace("300 pounds", convertedWeight);
    newStory = newStory.replace("94 Fahrenheit", convertedTemp);
  }

  // 4. Output the final story and reveal the box
  story.textContent = newStory;
  story.style.visibility = "visible";
}