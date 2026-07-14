const gallery = document.getElementById("gallery");

const currentPhoto = document.getElementById("currentPhoto");
const totalPhoto = document.getElementById("totalPhoto");

const music = document.getElementById("galleryMusic");

// Gallery খুললেই গান শুরু
window.addEventListener("load", () => {

    if (music) {

        music.volume = 0.6;

        music.play().catch(() => {});

    }

});

const messages = [

"❤️ প্রতিটি ছবির সাথে জড়িয়ে আছে এক একটা সুন্দর মুহূর্ত...",

"🌸 কিছু স্মৃতি কখনো পুরোনো হয় না...",

"😊 মনে আছে? এই সময়গুলো কতটা সুন্দর ছিল...",

"💖 তোমার হাসিটা আজও ঠিক আগের মতোই সুন্দর লাগে...",

"✨ সময় বদলায়, কিন্তু কিছু স্মৃতি বদলায় না...",

"🥺 যদি সময়টা আরেকবার ফিরে আসত...",

"🌹 কিছু মুহূর্ত শুধু অনুভব করা যায়, ভাষায় বলা যায় না...",

"💌 এই ছবিগুলো দেখলেই পুরোনো দিনগুলো মনে পড়ে...",

"🌼 কিছু মানুষ দূরে চলে গেলেও কিছু স্মৃতি কখনো দূরে যায় না...",

"🤍 হয়তো এখন সবকিছু বদলে গেছে... কিন্তু স্মৃতিগুলো না...",

"🌙 কোনো কোনো রাত আজও এই ছবিগুলোর কথা মনে করিয়ে দেয়...",

"💫 প্রতিটা ছবির পেছনে একটা ছোট্ট গল্প লুকিয়ে আছে...",

"🌿 এই মুহূর্তগুলো একদিন আমাদের বাস্তব ছিল...",

"🎈 হয়তো তুমি ভুলে গেছো... কিন্তু আমি ভুলিনি...",

"🕊️ কিছু সম্পর্ক শেষ হয়ে যায়... স্মৃতিগুলো নয়...",

"🌻 কিছু অনুভূতি কখনো পুরোনো হয় না...",

"💞 তোমার দেওয়া প্রতিটা ছবিই আমার কাছে অনেক মূল্যবান...",

"📸 এই ছবিগুলো শুধু ছবি নয়... সময়ের একটা অংশ...",

"🌈 যদি আবার সেই দিনগুলো ফিরে পাওয়া যেত...",

"💝 হয়তো এই Website-টাই আমার সবচেয়ে সুন্দর Birthday Wish...",

"✨ তুমি সুখে থাকো... এটাই সবসময় চেয়েছি...",

"🌸 তোমার মুখের হাসিটা যেন সবসময় এমনই থাকে...",

"❤️ ধন্যবাদ, এতটা পথ আমার সাথে হাঁটার জন্য...",

"🌻 কখনো কখনো একটা ছবিই হাজারটা কথা বলে...",

"😊 এই ছবিগুলো দেখলে আজও হাসি পায়...",

"💖 কিছু স্মৃতি শুধু হৃদয়ে বেঁচে থাকে...",

"🌹 যদি সময় থেমে যেত...",

"🤍 এই মুহূর্তগুলো কোনোদিন হারাবে না...",

"✨ ধন্যবাদ... এতদূর পর্যন্ত দেখার জন্য...",

"🎂 Happy Birthday Anamika ❤️"

];

let messageIndex = 0;

fetch("gallery-list.txt")
.then(res => res.text())
.then(text => {

const files = text.trim().split("\n");

totalPhoto.textContent = files.length;

files.forEach((file,index)=>{

const card=document.createElement("div");
card.className="card";

const img=document.createElement("img");

img.src="assets/gallery/"+file.trim();

img.loading="lazy";
img.draggable=false;

card.appendChild(img);
gallery.appendChild(card);

if((index+1)%15===0 && messageIndex<messages.length){

const msg=document.createElement("div");

msg.className="middle-message";

msg.innerHTML=messages[messageIndex];

gallery.appendChild(msg);

messageIndex++;

}

});
// ===== শেষ অংশ =====

const end = document.createElement("div");

end.className = "end";

end.innerHTML = `

❤️

<br><br>

এতক্ষণ ধরে প্রতিটি ছবি দেখার জন্য ধন্যবাদ।

<br><br>

হয়তো এগুলো শুধু কিছু ছবি নয়...

<br><br>

এগুলো আমার জীবনের সবচেয়ে সুন্দর সময়ের কিছু অংশ।

<br><br>

যদি এতদূর পর্যন্ত এসে থাকো...

<br><br>

তাহলে সত্যিই ধন্যবাদ। ❤️

<br><br>

Happy Birthday Again... 🎂💖

<br><br>

— Ashik ❤️

<br><br>

<button id="nextStory">

💌 তোমার জন্য কিছু কথা...

</button>

`;

gallery.appendChild(end);

// Button

document.getElementById("nextStory").onclick = function(){

    location.href="final.html";

};

// ===== Photo Counter =====

const images = document.querySelectorAll(".card img");

function updateCounter(){

    let current = 1;

    images.forEach((img,index)=>{

        const rect = img.getBoundingClientRect();

        if(rect.top <= window.innerHeight/2){

            current = index + 1;

        }

    });

    currentPhoto.textContent = current;

}

window.addEventListener("scroll",updateCounter);

updateCounter();

});

// ===== Protection =====

document.addEventListener("contextmenu",e=>e.preventDefault());

document.addEventListener("dragstart",e=>e.preventDefault());

document.addEventListener("selectstart",e=>e.preventDefault());

document.addEventListener("keydown",function(e){

if(

e.key==="F12" ||

(e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key.toUpperCase())) ||

(e.ctrlKey && e.key.toUpperCase()==="U") ||

(e.ctrlKey && e.key.toUpperCase()==="S")

){

e.preventDefault();

}

});

// ===== Scroll Progress =====

window.addEventListener("scroll",()=>{

const scrollTop=window.scrollY;

const docHeight=document.documentElement.scrollHeight-window.innerHeight;

const progress=(scrollTop/docHeight)*100;

const bar=document.getElementById("progressBar");

if(bar){

bar.style.width=progress+"%";

}

});
