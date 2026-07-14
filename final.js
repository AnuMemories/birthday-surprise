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
