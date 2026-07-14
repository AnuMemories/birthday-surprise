window.onload = function () {

    const music = document.getElementById("music");

    if (music) {
        music.play().catch(function(err){
            console.log("Autoplay blocked", err);
        });
    }

}

function openGift(){

const gift=document.getElementById("gift");
const status=document.getElementById("status");

gift.onclick=null;

status.innerHTML="✨ Opening your surprise...";

gift.classList.add("shake");

setTimeout(()=>{

gift.classList.remove("shake");

gift.classList.add("open");

},900);

setTimeout(()=>{

gift.style.transition="all .8s ease";
gift.style.transform="scale(1.8)";
gift.style.opacity="0";

},1700);

setTimeout(()=>{

window.location.href="birthday.html";

},2600);

}
