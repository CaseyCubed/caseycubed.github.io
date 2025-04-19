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

function fancyText() {
    alert("FancyShmancy mode activated!");
    const textArea = document.getElementById("userText");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function boringText() {
    alert("BoringBetty mode activated!");
    const textArea = document.getElementById("userText");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

function mooText() {
    const textArea = document.getElementById("userText");
    
    // Convert text to uppercase
    let text = textArea.value.toUpperCase();

    // Add "-Moo" to the last word of each sentence
    let sentences = text.split(".");
    sentences = sentences.map(sentence => sentence.trim() ? sentence.trim() + "-Moo" : sentence);
    textArea.value = sentences.join(".");
}