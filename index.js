const loader = document.querySelector(".loader");
const target = document.getElementById("welcome");
let word = ["Hello world."];
let letterIndex = 0;


const createLetter = () => {
    const letter = document.createElement("span");
    letter.textContent = word[0][letterIndex];
    target.appendChild(letter);
};
const loop = () => {
    setTimeout(() => {
        if (letterIndex > word[0].length) {
            return;
        } else {
            createLetter();
            letterIndex++
        }
        setTimeout(() => {
            loop();
        }, 170);
    }, 30);
}
loop();

    
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.add("fade");
        document.body.classList.remove("no-scroll");
        setTimeout(() => {
            loader.style.display = "none";
        }, 701);
    }, 4180);
});










