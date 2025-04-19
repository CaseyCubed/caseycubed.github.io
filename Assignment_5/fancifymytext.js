/*
NAME: Casey Paras
MODULE: fancifymytext.js, Assignment 5
COURSE: CSC193A - Professor Kane
*/
// Create a new file and save it as fancifymytext.js
/*
function makeBigger() {
    // Putting the following line of code into the file: 
    alert("Hello, world!"); 
}
*/
function makeBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

/* when "FancyShmancy" radio button is selected:
    - change its color to blue
    - underline the text (this is the CSS text-decoration Links to an external site. property)
    - Keep the bold styling as well -- in total selecting the "FancyShmancy" radio button,
    should make the text bold, underline, and blue
*/
function fancyText() {
    alert("FancyShmancy mode activated!");
    const textArea = document.getElementById("userText");
    // "Modify your new function to set the text area's font weight to bold"
    textArea.style.fontWeight = "bold";
    // "Change its color to blue"
    textArea.style.color = "blue";
    // "Underline this text"
    textArea.style.textDecoration = "underline";
}

// When the radio button is switched to the "BoringBetty", the font weight should go back to normal
function boringText() {
    alert("BoringBetty mode activated!");
    const textArea = document.getElementById("userText");
    // "If "BoringBetty" radio button is pressed, the styles go away"
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

// Button that adds a suffix of "-Moo" to the last word of each sentence. 
function mooText() {
    const textArea = document.getElementById("userText");
    
    // Convert text to uppercase
    let text = textArea.value.toUpperCase();

    // Add "-Moo" to the last word of each sentence
    let sentences = text.split(".");
    sentences = sentences.map(sentence => sentence.trim() ? sentence.trim() + "-Moo" : sentence);
    textArea.value = sentences.join(".");
}