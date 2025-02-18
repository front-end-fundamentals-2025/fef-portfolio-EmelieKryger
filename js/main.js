/* JavaScript for project description on project 1 */
const descriptionButton = document.getElementById("information");
const textElement = document.getElementById("project1p");

// let openText = false;

descriptionButton.addEventListener("click", function () {
  // Begin help from second year Student Erik Sandquist
  textElement.classList.toggle("visible");
  // End help from second year Student Erik Sandquist
  // Toggles class of text to be visible
  // Toggle = switch between on/off
});

// Or you could write an if or else statment with true or false statment
