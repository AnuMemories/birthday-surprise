function checkPassword() {

    const password = document.getElementById("password").value.trim().toLowerCase();
    const error = document.getElementById("error");

    if (password === "ashik") {

        error.style.color = "#7CFC00";
        error.innerHTML = "✨ Please wait... Preparing your surprise...";

        setTimeout(() => {
            window.location.href = "gift.html";
        }, 2000);

    } else {

        error.style.color = "#ff6b6b";
        error.innerHTML = "💔 Hmm... That's not the right name.";

    }

}
