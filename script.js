function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const lines = [
    "Hello",
    "I'm Josh Philip",
    "An Aspiring Cybersecurity Engineer"
];

const typedText = document.getElementById("typed-text");
const cursor = document.getElementById("cursor");

let lineIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            cursor.insertAdjacentText('beforebegin', lines[lineIndex].charAt(charIndex));
            charIndex++;
            setTimeout(typeEffect, 20); // Typing speed
        } else {
            // Check if this is the last line
            if (lineIndex < lines.length - 1) {
                // Move to the next line
                typedText.innerHTML += "<br>";
                typedText.appendChild(cursor); 
            } else {
                typedText.appendChild(cursor);
            }
            charIndex = 0;
            lineIndex++;
            setTimeout(typeEffect, 1000); 
        }
    } else {
        cursor.style.animation = "blink 0.5s step-end infinite"; 
    }
}

window.onload = typeEffect;

