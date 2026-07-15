const music = document.getElementById("finalMusic");

window.addEventListener("load", () => {

    if (music) {

        music.volume = 0.6;

        music.play().catch(() => {});

    }

});
document.querySelectorAll("#story p").forEach(p => {
    p.style.display = "block";
});

document.querySelector(".end").style.display = "block";

createHearts();

function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-40px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        let y = 0;

        const move = setInterval(() => {

            y += 5;

            heart.style.transform = `translateY(-${y}px)`;

            heart.style.opacity = 1 - y / 900;

            if (y > window.innerHeight + 100) {

                clearInterval(move);

                heart.remove();

            }

        }, 30);

    }, 700);

}
const bgMusic = document.getElementById("finalMusic");
const voice = document.getElementById("voice");
const voiceBtn = document.getElementById("voiceBtn");
const voiceText = document.getElementById("voiceText");

if (voiceBtn && voice) {

    voiceBtn.onclick = () => {

        if (bgMusic) bgMusic.pause();

        voice.play();

        voiceBtn.style.display = "none";

    };

    voice.onended = () => {

        voiceText.style.display = "block";

    };

}

function typeEffect(selector, speed) {

    const el = document.querySelector(selector);

    if (!el) return;

    const text = el.innerHTML;

    el.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {

        el.innerHTML = text.substring(0, i);

        i++;

        if (i > text.length) {

            clearInterval(timer);

            el.style.borderRight = "none";

        }

    }, speed);

}

window.addEventListener("load", () => {

    setTimeout(() => {

        typeEffect(".typing", 35);

    }, 600);

});
