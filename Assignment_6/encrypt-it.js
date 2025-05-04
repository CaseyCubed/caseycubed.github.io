/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Include the line of code into the file: console.log("Window loaded!"); 
    // such that the message is logged to the console when the page is loaded
    console.log("Window loaded!"); 
    // Part 2: Add an event listener to the the "Encrypt-It!" button such that when 
    // clicked, your handleClick function is called.
    const encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);
  }

  /**
   * Part 2: Move your console statement inside a new function handleClick.
   */
  function handleClick() {
    console.log("Button clicked!"); // This will log the message when the button is clicked
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  
})();
