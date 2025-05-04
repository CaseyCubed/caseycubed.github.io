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

    // Part 3a: Add an event handler to the "Reset" button such that when clicked
    // a new handleReset function is called
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  /**
   * Part 2: Move your console statement inside a new function handleClick.
   */
  function handleClick() {
    const inputTextArea = document.getElementById("input-text");
    const textToEncrypt = inputTextArea.value; // Get the text from the textarea
    const encryptedText = shiftCipher(textToEncrypt); // Encrypt the text
    const resultParagraph = document.getElementById("result");
    resultParagraph.innerHTML = encryptedText; // Display the encrypted text
    console.log("Button clicked! Encrypted text displayed."); // Optional: confirm action in console
    }

  /**
   * Part 3b: Add an event handler to the "Reset" button such that when clicked
   * a new handleReset function is called
   *  */
  function handleReset() {
    const inputTextArea = document.getElementById("input-text");
    inputTextArea.value = ""; // Clear the textarea content
    console.log("Reset button clicked: input cleared."); // Optional: confirm reset action in console
  }

  /**
   * Part 4: Modify your JS code so that when the user clicks "Encrypt-It!", 
   * the text in the input text area will be encrypted using a basic shift-cipher, 
   * and output into the page's paragraph element with the id of output.
   * 
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
  */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i]; // Non-alphabetic characters remain unchanged
      } else if (text[i] == 'z') {
        result += 'a'; // Wrap around from 'z' to 'a'
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1); // Shift the letter
        result += resultLetter;
      }
    }
    return result; // Return the encrypted text
  }

})();
