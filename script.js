function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const textToType = "Hello,\nI'm Josh Philip,\nAspiring Cybersecurity Engineer";
const typedText = document.getElementById("typed-text");

let charIndex = 0;

function typeEffect() {
    if (charIndex < textToType.length) {
        if (textToType.charAt(charIndex) === "\n") {
            typedText.innerHTML += "<br>";
        } else {
            typedText.innerHTML += textToType.charAt(charIndex);
        }
        charIndex++;
        setTimeout(typeEffect, 100); 
    }
}

window.onload = typeEffect; 
