const text = "Hello I'm Tanner.";
const speed = 100;

let i = 0;

function typewriter() {
    const element = document.getElementById("text");
    if (!element) return;

    if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
}

window.onload = typewriter;

export default typewriter;