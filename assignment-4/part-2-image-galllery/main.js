/*
Name: Harshan Jayakumar
File: main.js
Date: 28 November 2025
JavaScript for the Assignment 4 – Part 2 image gallery.
INFT1206 – Web Development Fundamentals
*/

// grab the important elements
const displayedImage = document.querySelector(".displayed-img");
const thumbBar       = document.querySelector(".thumb-bar");

const btn      = document.querySelector("button");
const overlay  = document.querySelector(".overlay");

// -------------------------------------------------------------------
// Image data
// -------------------------------------------------------------------

// array of image file names (matches rubric: const + filenames)
const imageFiles = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

// matching alt text for accessibility
const imageAlts = [
  "Closeup of a human eye",
  "Rock that looks like a wave",
  "Purple and white pansies",
  "Section of wall from a pharaoh's tomb",
  "Large moth on a leaf"
];

// base path for images (local, not MDN URLs)
const basePath = "images/";

// -------------------------------------------------------------------
// Build the thumbnail bar
// -------------------------------------------------------------------

for (let i = 0; i < imageFiles.length; i++) {
  const newImage = document.createElement("img");

  newImage.src = basePath + imageFiles[i];
  newImage.alt = imageAlts[i];

  // keyboard accessibility – allow tabbing to thumbs
  newImage.tabIndex = 0;

  thumbBar.appendChild(newImage);

  // mouse click swaps the main image
  newImage.addEventListener("click", function () {
    updateDisplayedImage(newImage);
  });

  // OPTIONAL stretch goal: Enter key also swaps the image
  newImage.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      updateDisplayedImage(newImage);
    }
  });
}

// change the big image to match the chosen thumbnail
function updateDisplayedImage(img) {
  displayedImage.src = img.src;
  displayedImage.alt = img.alt;
}

// -------------------------------------------------------------------
// Darken / Lighten button
// -------------------------------------------------------------------

btn.addEventListener("click", function () {
  const isDark = btn.classList.contains("dark");

  if (isDark) {
    // make overlay darker
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    // remove dark overlay
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }

  // toggle the class ready for the next click
  btn.classList.toggle("dark");
});